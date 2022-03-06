# Nicholas Hughes Subnet Calculator
# December 10th, 2021 - 2:26pm
# December 11th, 2021 - 3:17am

def asciiArt(): # Prints title
    print("_____________________________________________________________________________________________________")
    print(" _____       _                _   _   _               _____       _            _       _             ")
    print("/  ___|     | |              | | | | (_)             /  __ \     | |          | |     | |            ")
    print("\ `--. _   _| |__  _ __   ___| |_| |_ _ _ __   __ _  | /  \/ __ _| | ___ _   _| | __ _| |_ ___  _ __ ")
    print(" `--. \ | | | '_ \| '_ \ / _ \ __| __| | '_ \ / _` | | |    / _` | |/ __| | | | |/ _` | __/ _ \| '__|")
    print("/\__/ / |_| | |_) | | | |  __/ |_| |_| | | | | (_| | | \__/\ (_| | | (__| |_| | | (_| | || (_) | |   ")
    print("\____/ \__,_|_.__/|_| |_|\___|\__|\__|_|_| |_|\__, |  \____/\__,_|_|\___|\__,_|_|\__,_|\__\___/|_|   ")
    print("                                               __/ |                                                 ")
    print("                                              |___/                                                  ")
    print("_____________________________________________________________________________________________________")

def subnetInput():
    reset = True
    while reset == True: # Loops till a correct subnet is inputted.
        subnet = input("Subnet (/1 - /32): ")
        subnet = subnet.replace("/"," ")

        try: # changes to int; error if not
            subnet = int(subnet)
        except ValueError:
            print("Error, enter a mask ranging from /1 - /32!")
            continue

        if subnet >= 1 and subnet <= 32: # if subnet is between 1 and 32 exits loop
            reset = False
        else:
            print("Error, enter a mask ranging from /1 - /32!")

    return subnet

def ipIntput():
    reset = True
    while reset == True: # Loops till a correct ip address is inputted.
        ip = input("IP Address (x.x.x.x): ")

        try: # changes to int; error if not
            ip = ip.split(".")
            if len(ip) != 4:
                raise ValueError

            for x in ip:
                if int(x) > 255 or int(x) < 1:
                    raise ValueError
            reset = False

        except ValueError:
            print("Error, enter an ip address ranging from 0.0.0.0 - 255.255.255.255!")
            continue

    return ip

def calculate(ip, subnet):
    result = list()
    full = [255,255,255,255] # max address
    bits = [128,64,32,16,8,4,2,1]

    # Ip Address
    result.append(".".join(ip))

    # Network Address
    convert = list()
    net = [0,0,0,0]
    count,turn = 0,0

    for x in ip:
        temp = list()
        x = int(x)
        for y in range(8):
            if x - bits[y] >= 0: # adds 1 if bit is there
                x = x - bits[y]
                temp.append(1)
            elif x == 1 and y == 7: # adds 1 if 1 is in the last spot
                temp.append(1)
            else:
                temp.append(0)
        convert.append(temp)

    print(convert)

    for x in range(subnet):
        if int(convert[count][turn]) == 1:
            net[count] = net[count] + bits[turn]
        turn = turn + 1
        if turn == 8:
            turn = 0
            count = count + 1

    print(net)
    result.append(".".join(str(x) for x in net))

    # Host IP Range
    first = net # Creates first usable IP address
    first[3] = first[3] + 1
    first = ".".join(str(x) for x in first)

    # Broadcast Address
    broadcast = net # Creates the broadcast address
    broad = [0,0,0,0]
    count, turn = 3, 0
    bReverse = bits[::-1]

    for x in range(32-subnet):
        broad[count] = broad[count] + bReverse[turn]
        turn = turn + 1
        if turn == 8:
            turn = 0
            count = count - 1

    for x in range(4):
        broadcast[x] = broadcast[x] + broad[x]
    broadcast[3] = broadcast[3] - 1
    result.append(".".join(str(x) for x in broadcast))

    last = broadcast # Creates last usable IP address
    last[3] = last[3] - 1
    last = ".".join(str(x) for x in last)
    result.append(str(first) + " - " + str(last))

    # Total Number of Hosts
    h = 2 ** (32 - subnet)
    result.append(f"{h:,}")

    # Number of Usable Host
    h = h - 2
    if h < 0:
        h = 0
    result.append(f"{h:,}")

    # Subnet Mask
    mask = [0,0,0,0]
    count,turn = 0,0

    for x in range(subnet):
        mask[count] = mask[count] + bits[turn]
        turn = turn + 1
        if turn == 8:
            turn = 0
            count = count + 1

    result.append(".".join(str(x) for x in mask))

    # Wildcard Mask
    wild = list()
    for x in range(4):
        wild.append((full[x] - mask[x]))

    result.append(".".join(str(x) for x in wild))
    return result

def results(answer):
    words = ["\nIp Address:","Network Address:","Broadcast Address:","Host IP Range:","Total Number of Hosts:",
             "Number of Usable Host:","Subnet Mask:","Wildcard Mask:"]
    print("_____________________________________________________________________________________________________")
    for x in range(8):
        print(words[x], answer[x])
    print("_____________________________________________________________________________________________________")
    return 0

def main():
    asciiArt()
    subnet = subnetInput()
    ip = ipIntput()
    result = calculate(ip, subnet)
    results(result)
    return 0

if __name__ == '__main__':
    main()