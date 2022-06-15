import schedule # for schedule daily
import time # for time
from datetime import datetime # for time
import json # for reading files
import subprocess # for linux shell commands
from getpass import getpass # for secure password input
import copy # full copy a list
from datetime import datetime # for date and time

import email, smtplib, ssl # for eamil
from email import encoders # for eamil
from email.mime.base import MIMEBase # for eamil
from email.mime.multipart import MIMEMultipart # for eamil
from email.mime.text import MIMEText # for eamil

def getpassword():
    password = getpass("Sudo Password:")
    return password

def checkDiskSpace():
    remove = []
    cmd = "df -h;" #linux command.
    outputDisk = subprocess.check_output(cmd,universal_newlines=True, shell=True)
    outputDiskFinal = outputDisk.split()

    for x in range(7): # remove header.
        outputDiskFinal.pop(0)

    for x in range (4, len(outputDiskFinal), 6): # only checks the mount point and usage %.
        check = outputDiskFinal[x].replace("%", "")
        if int(check) >= 60: # if usage > than 60%.
            if (outputDiskFinal[x+1] == "/"): # only remove files from /home.
                remove.append("/home")
            if (outputDiskFinal[x+1] == "/media/nvme"): # remove files from /media/nvme.
                remove.append("/media/nvme")
    return remove  # returns /home or /media/nvme or both.

def checkTopFiles(password, directory):
    removingHome = []
    removingNvme = []
    for y in range(len(directory)):
        removing = []
        cmd = "echo {password} | sudo -S du -a {directory} | sort -n -r | head -n 10;".format(password=password,
                                                                                              directory=directory[y])
        output = subprocess.check_output(cmd, universal_newlines=True, shell=True)
        outputFinal = output.split()
        for x in range(1, len(outputFinal), 2):
            temp = outputFinal[x].split("/")
            temp.pop()
            if (directory[y] == "/home"):
                if (len(temp) == 3):
                    removing.append("/".join(temp))
            if (directory[y] == "/media/nvme"):
                if (len(temp) == 4):
                    removing.append("/".join(temp))

        removing = set(removing)
        removing = list(removing)

        for x in range(len(removing)):
            temp = removing[x].split("/")
            if (directory[y] == "/home"):
                removingHome.append([temp[2], "/".join(temp), "home"])
            if (directory[y] == "/media/nvme"):
                removingHome.append([temp[3], "/".join(temp), "nvme"])
    return removingHome, removingNvme

def nvmeUser(password, directory):
    for y in range(len(directory)):
        cmd = "echo {password} | sudo -S ls -l {directory} | sort -n -r;".format(password=password,
                                                                                 directory=directory[y])[1]
        output = subprocess.check_output(cmd, universal_newlines=True, shell=True)
        outputFinal = output.split()
        outputFinal.pop(0)
        outputFinal.pop(0)
        directory[y][0] = outputFinal[3]

    return directory

def check3Weeks(password, home, nvme):
    directory = home + nvme
    directory2 = []
    for y in range(len(directory)):
        if(directory[y][2] == "home"):
            cmd = "echo {password} | sudo -S find {directory} ! -iname '.*' -mtime +21;".format(password=password,directory=directory[y][1])
        if(directory[y][2] == "nvme"):
            cmd = "echo {password} | sudo -S find {directory} -mtime +21;".format(password=password,directory=directory[y][1])
        output = subprocess.check_output(cmd,universal_newlines=True, shell=True)
        outputFinal = output.split()
        if(len(outputFinal) >= 1):
            directory2.append(directory[y])

    return directory2

def combineDirectories(directory):
    temp = []
    directory2 = []
    for y in range(len(directory)):
        temp.append(directory[y][0])

    temp = set(temp)
    temp = list(temp)
    temp2 = []

    for x in range(len(temp)):
        temp2.append([temp[x]])

    for y in range(len(directory)):
        for x in range(len(temp2)):
            if(temp2[x][0] == directory[y][0]):
                temp2[x].append(directory[y][1])

    return temp2

def getNames(directory):
    with open('user_config.json', 'r') as file:
        data = json.load(file)
    file.close()

    for user in data["user"]:
        for y in range(len(directory)):
            if (user["username"] == directory[y][0]):
                directory[y].append(user["name"])
                directory[y].append(user["email"])

    return directory

def sendMail(directory, data):  # Function to send emails.
    sender_email = data["admin"][0]["bot_email"]  # sending email
    password = data["admin"][0]["app_password"]  # sending password
    admin_email = data["admin"][0]["email"] # admin email
    admin_name = data["admin"][0]["name"] # admin name
    gpu = data["admin"][0]["gpu_server"]  # server name
    subject = "Stale Data on GPU{gpu} Server".format(gpu=gpu)
    body = """\
    Hello {name},
    
    If you are receiving this message it means that you have 3 week old data on the GPU{gpu} server:
    {contents}
    
    This message is a 3 day warning before deletion of the old data. If you wish to prevent this action contact the lab assistant {admin} at {admin_email}.
    
    From,
    Admin Team
    """

    # Create a multipart message and set headers
    message = MIMEMultipart()
    message["From"] = sender_email
    message["Subject"] = subject

    context = ssl.create_default_context()
    try:
        with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as server:
            server.login(sender_email, password)
            for x in range(len(directory)):
                contents = str()
                receiver_email = directory[x].pop(-1)  # removes email
                name = directory[x].pop(-1)  # removes name
                username = directory[x].pop(0)  # removes username
                for y in range(len(directory[x])):
                    if (y == 0):
                        contents += "\n\tDirectory - " + str(directory[x][y]) + "\n\t\t\t - "
                    else:
                        contents += str(directory[x][y]) + ("\n\t\t\t - " if y != (len(directory[x]) - 1) else "")
                message["To"] = receiver_email
                message.attach(MIMEText(body.format(name=name,gpu=gpu,contents=contents,admin=admin_name,admin_email=admin_email), "plain"))
                text = message.as_string()
                server.sendmail(sender_email, receiver_email,text)
    except Exception as e:
        print("Email failed to send!")
        print(e)
    return  0

def autoDelete(password, directory):
    finalOutput = []
    for y in range(len(directory)):
        directory[y].pop(0)
        directory[y].pop(-1)
        directory[y].pop(-1)
        for x in range(len(directory[y])):
            cmd = "echo {password} | sudo -S find {directory} ! -iname '.*' -mtime +21 -exec rm -vf {{}} +;".format(password=password,
                                                                                                 directory=directory[y][
                                                                                                     x])
            output = subprocess.check_output(cmd, universal_newlines=True, shell=True)
            finalOutput.append(output)

    now = datetime.now()
    now = now.strftime("%Y-%m-%d %H:%M:%S")
    with open("output.txt", "a") as output:
        for item in finalOutput:
            output.write("\n%s %s" % (now, item))
    output.close()

    return 0

def manualDelete(directory, data):
    sender_email = data["admin"][0]["bot_email"] # sending email
    password = data["admin"][0]["app_password"] # sending password
    receiver_email = data["admin"][0]["email"] # admin email
    name = data["admin"][0]["name"] # admin name
    gpu = data["admin"][0]["gpu_server"] # server name
    subject = "Manual Server Deletion"
    body = """\
    Hello {name},

    This message is sent from the GPU{gpu} server. Remember to wait 3 days before you carry out this task.
    If you are receiving this message it means that you have to manually delete the 3 week old data on the GPU{gpu} server in 3 days:
    {contents}
                                   
    Command: sudo tmpreaper -a 21d [directory]
    Usually directory = /home/username or /media/nvme/directory
    Example:
            Command: sudo tmpreaper -a 21d /home/username
            Command: sudo tmpreaper -a 21d /media/nvme/directory
    
    From,
    Admin Team
    """

    # Create a multipart message and set headers
    message = MIMEMultipart()
    message["From"] = sender_email
    message["Subject"] = subject
    message["To"] = receiver_email

    context = ssl.create_default_context()
    try:
        with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as server:
            contents = str()
            server.login(sender_email, password)
            for x in range(len(directory)):
                directory[x].pop(-1) # removes email
                directory[x].pop(-1) # removes name
                for y in range(len(directory[x])):
                    if(y == 0):
                        contents += "\n\tUsername - " + str(directory[x][y]) + "\n\t\tDirectory - "
                    else:
                        contents += str(directory[x][y]) + ("\n\t\t\t\t  - " if y != (len(directory[x]) - 1) else "")
                username = directory[x].pop(0) # removes username

            message.attach(MIMEText(body.format(name=name,gpu=gpu,contents=contents), "plain"))
            text = message.as_string()
            server.sendmail(sender_email, receiver_email,text)
    except Exception as e:
        print("Email failed to send!")
        print(e)
    return 0

def report(data):
    sender_email = data["admin"][0]["bot_email"] # sending email
    password = data["admin"][0]["app_password"] # sending password
    receiver_email = data["admin"][0]["email"] # admin email
    name = data["admin"][0]["name"] # admin name
    gpu = data["admin"][0]["gpu_server"] # server name
    subject = "GPU{gpu} Server Disk Cleanup Report".format(gpu=gpu)
    body = """\
    Hello {name},

    See the attachment below on what was deleted from the GPU{gpu} server.

    From,
    Admin Team
    """

    # Create a multipart message and set headers
    message = MIMEMultipart()
    message["From"] = sender_email
    message["To"] = receiver_email
    message["Subject"] = subject

    # Add body to email
    message.attach(MIMEText(body.format(name=name,gpu=gpu), "plain"))

    filename = "output.txt"  # In same directory as script

    # Open PDF file in binary mode
    with open(filename, "rb") as attachment:
        # Add file as application/octet-stream
        # Email client can usually download this automatically as attachment
        part = MIMEBase("application", "octet-stream")
        part.set_payload(attachment.read())

    # Encode file in ASCII characters to send by email
    encoders.encode_base64(part)

    # Add header as key/value pair to attachment part
    part.add_header(
        "Content-Disposition",
        f"attachment; filename= {filename}",
    )

    # Add attachment to message and convert message to string
    message.attach(part)
    text = message.as_string()

    context = ssl.create_default_context()
    try:
        with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as server:
            server.login(sender_email, password)
            server.sendmail(sender_email, receiver_email, text)
    except Exception as e:
        print("Email failed to send!")
        print(e)

    return 0

def callAll(password):
    directory = checkDiskSpace()
    home, nvme = checkTopFiles(password, directory)
    nvme = nvmeUser(password, nvme)
    directory = check3Weeks(password, home, nvme)
    directory = combineDirectories(directory)

    if (len(directory) != 0):
        if (len(directory[0]) != 0):
            directory = getNames(directory)

            with open('admin_config.json', 'r') as file:
                data = json.load(file)
            file.close()

            directory2 = copy.deepcopy(directory)
            sendMail(directory2, data)

            if(data["admin"][0]["auto_delete"] == "yes"):
                time.sleep(259200)  # sleep 3 days

                # Check again to see if auto_delete is "yes"
                with open('admin_config.json', 'r') as file:
                    data = json.load(file)
                file.close()

                autoDelete(password, directory)

                if (data["admin"][0]["report"] == "yes"):
                    report(data)
            else:
                manualDelete(directory, data)

    now = datetime.now()
    now = now.strftime("%Y-%m-%d %H:%M:%S")
    print("Finish at:", now)
    return 0

#Gets the password once from the user
password = getpassword()
schedule.every().day.at("00:00").do(callAll, password) # Executes at 12AM everyday. Checks disk space.

def main():
    while True:
        schedule.run_pending()
        time.sleep(60) # wait one minute

if __name__ == '__main__':
    main()