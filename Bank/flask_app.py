from flask import Flask, render_template, request, redirect, session
import pymysql

app = Flask(__name__, template_folder="Pages")

#Reference: https://testdriven.io/blog/flask-sessions/
#app.secrect_key here removed for security

#####################################
class Connection:
    def __init__(self): #host, user, password, database
        # database login credentials removed for security
        host = ""
        user = ""
        password = ""
        database = ""

        self.con = pymysql.connect(host=host,user=user,password=password,db=database,cursorclass=pymysql.cursors.DictCursor)
        self.cur = self.con.cursor()

    #Gets the even number packages for display.
    def displayLoans(self):
        self.cur.execute("select Type, TotalPrice, Years, InterestRate from LoanType where LoanNumber mod 2 = 0")
        result = self.cur.fetchall()
        return result

    #Gets the branches to display.
    def displayLocations(self):
        self.cur.execute("select BranchNumber, City, Street, PostalCode, Phone, Given, Family from Location join Manager where Manages = BranchManagerID")
        result = self.cur.fetchall()
        return result

    #Gets the username and password for check.
    def getUser(self, username):
        self.cur.execute("select CustomerID, Password from Password where CustomerID = (%s)", (username))
        result = self.cur.fetchall()
        return result

    #Gets the email for check.
    def getEmail(self, email):
        self.cur.execute("select Email from Customer where Email = (%s)", (email))
        result = self.cur.fetchall()
        return result

    #Insert into Customer Table.
    def insertUser(self, username, fname, sname, city, street, pcode, phone, email, salary):
        self.cur.execute("insert into Customer(CustomerID, Given, Family, City, Street, PostalCode, Phone, Email, Salary) values (%s,%s,%s,%s,%s,%s,%s,%s,%s)", (username, fname, sname, city, street, pcode, phone, email, salary))
        self.con.commit()
        return "Successful!"

    #Insert into Password Table.
    def insertPassword(self, username, password):
        self.cur.execute("insert into Password(CustomerID, Password) values (%s,%s)", (username, password))
        self.con.commit()
        return "Successful!"

    #Gets the locations for display.
    def displayAllLocations(self):
        self.cur.execute("select BranchNumber, City from Location")
        result = self.cur.fetchall()
        return result

    #Gets the all the loan packages for display.
    def displayAllLoans(self):
        self.cur.execute("select LoanNumber, Type, TotalPrice, Years, InterestRate from LoanType")
        result = self.cur.fetchall()
        return result

    #Insert into Applications Table.
    def insertApp(self, branchNumber, username, loanNumber):
        self.cur.execute("insert into Application(BranchNumber, CustomerID, LoanNumber) values (%s,%s,%s)", (branchNumber, username, loanNumber))
        self.con.commit()
        return "Successful!"

    #Gets the name for session.
    def getName(self, username):
        self.cur.execute("select Given, Family from Customer where CustomerID = (%s)", (username))
        result = self.cur.fetchall()
        return result

    #Gets Applications for the user.
    def getApplication(self, username):
        self.cur.execute("select a.AppNumber, l.BranchNumber, l.City, l.Street, l.PostalCode, l.Phone, lt.Type, lt.TotalPrice, lt.Years, lt.InterestRate, m.Given, m.Family from Application as a join Location as l on a.BranchNumber = l.BranchNumber join LoanType as lt on a.LoanNumber = lt.LoanNumber join Manager as m on l.Manages = m.BranchManagerID where CustomerID = (%s)", (username))
        result = self.cur.fetchall()
        return result
#####################################

#Main Page Bank
@app.route('/')
def Bank():
    db = Connection()
    result = db.displayLoans()
    result2 = db.displayLocations()
    return render_template("Bank.html", result=[result,result2], content_type = "application/json")

#Application Page
@app.route('/Application', methods=["GET","POST"])
def Application():
    if session.get("user") is None:
        return redirect("/SignIn")
    else:
        db = Connection()

        if request.method == "POST":
            branchNumber = request.form['branchNumber']
            username = session["user"]
            loanNumber = request.form['loanNumber']

            db.insertApp(branchNumber, username, loanNumber)
            return redirect("/ViewApplication")

        result2 = db.displayAllLoans()
        result = db.displayAllLocations()
        return render_template("Application.html", result=[result,result2], content_type = "application/json")

#View Application Page
@app.route('/ViewApplication')
def ViewApplication():
    db = Connection()
    result = db.getApplication(session["user"])
    return render_template("ViewApplication.html", result=result, content_type = "application/json")

#Sign In Page
@app.route('/SignIn', methods=["GET","POST"])
def SignIn():
    if request.method == "POST":
        # Clears the values stored in the session object
        session.pop('user', default=None)
        session.pop('name', default=None)

        username = request.form['username']
        password = request.form['password']
        error = None

        #Connects to database and querys username and password.
        db = Connection()
        result = db.getUser(username)

        #If there is no username return error. If the username or password is incorrect return error.
        if not result:
            error = 'Username or password is incorrect. Try again! - Not Registered'
        else:
            if str(username) != str(result[0]["CustomerID"]):
                error = 'Username or password is incorrect. Try again! - Wrong Username'
            if str(password) != str(result[0]["Password"]):
                error = 'Username or password is incorrect. Try again! - Wrong Password'
        if error:
            return render_template('SignIn.html', error = error, username = username, content_type = "application/json")

        session["user"] = username
        name = db.getName(username)
        session["name"] = name[0]["Given"] + " " + name[0]["Family"]
        return redirect("/")
    return render_template("SignIn.html")

#Log Out Request
@app.route('/Logout')
def log_out():
    # Clears the values stored in the session object
    session.pop('user', default=None)
    session.pop('name', default=None)
    return redirect("/")

#Create Account Page
@app.route('/CreateAccount', methods=["GET","POST"])
def CreateAccount():
    if request.method == "POST":
        username = request.form['username']
        password = request.form['password']
        fname = request.form['fname']
        sname = request.form['sname']
        salary = request.form['salary']
        email = request.form['email']
        phone = request.form['phone']
        city = request.form['city']
        street = request.form['street']
        pcode = request.form['pcode']
        error = None

        #Connects to database and querys username.
        db = Connection()
        result = db.getUser(username)

        #If there is no username insert values. If there is a username return error.
        if not result:
            #If username is a integer insert values. If not return error.
            if username.isdigit():
                #If there is no email insert values. If there is a email return error.
                result2 = db.getEmail(email)
                if not result2:
                    db.insertUser(username, fname, sname, city, street, pcode, phone, email, salary)
                    db.insertPassword(username, password)
                else:
                    error = 'Email is alreay used. Try again! - Email Already Registered'
            else:
                error = 'Invalid Username. Try again! - Enter an integer'
        else:
            error = 'Username already exists. Try again! - User Already Registered'

        if error:
            return render_template('CreateAccount.html', error = error, fname = fname, sname = sname, city = city, street = street, pcode = pcode, phone = phone, salary = salary, content_type = "application/json")

        return redirect("/SignIn")
    return render_template("CreateAccount.html")


if __name__ == '__main__':
    app.run()
