var app = angular.module('MainPage', []);

app.controller("MainController", function($scope){
  var html = "text-orange fa-brands fa-html5 fa-3x";
  var css = "text-primary fa-brands fa-css3-alt fa-3x";
  var javascript = "text-warning fa-brands fa-js-square fa-3x";
  var angular = "text-danger fa-brands fa-angular fa-3x";
  var bootstrap = "text-secondary fa-brands fa-bootstrap fa-3x";
  var mdb = "text-primary fa-brands fa-mdb fa-3x";
  var react = "text-info fa-brands fa-react fa-3x";
  var nodeJs = "text-success fa-brands fa-node fa-3x";
  var python = "text-warning fa-brands fa-python fa-3x";
  var jQuery = "jQuery";
  var c = "cProgramming";
  var linux = "text-dark fa-brands fa-linux fa-3x";
  var flask = "flask";

  $scope.projects = [
    {id:"pro1",status:"active",title:"Bank Page", name:"Bank of Sunshine Loan Page",image:"Src/Bank-of-Sunshine-screenshot.png",alt:"bank screenshot",description:"This project takes user input and checks for validation with custom validation messages. Also has server side validation for usernames, email and passwords. Used Flask framework in python and sessions to keep the user logged in while using the website.",code:"https://github.com/nickhughes34/nickhughes34.github.io/tree/main/Bank",link:"https://nickhughes34.pythonanywhere.com/",tech:{html, css, javascript, bootstrap, angular, python}},
    {id:"pro2",status:"",title:"Stock Viewer", name:"NDVP Stock Viewer",image:"Src/NDVP-stock-app.png",alt:"stock viewer screenshot",description:"This project takes user input as a prop and interacts with other components. Uses the TradeView import to lookup and display stock values.",code:"https://github.com/nickhughes34/nickhughes34.github.io/tree/main/stock_app",link:"",tech:{react, bootstrap, mdb}},
    {id:"pro3",status:"",title:"Real Estate Page", name:"Real Esate Webpage",image:"Src/Real-Estate-screenshot.png",alt:"real estate screenshot",description:"This project lets the user view a real estate homepage for Real Estate Today. Used Bootstrap for easy placement of elements.",code:"https://github.com/nickhughes34/nickhughes34.github.io/tree/main/Real_Estate",link:"https://nickhughes34.github.io/Real_Estate/Real_Estate.html",tech:{html, css, javascript, bootstrap, mdb}},
    {id:"pro4",status:"",title:"Coffee Menu", name:"Coffee Menu Webpage",image:"Src/Coffee-screenshot.png",alt:"coffee menu screenshot",description:"This project lets the user view a menu for Coffee Cafe Today. Used jQuery to setup a delayed animation for when user scrolls into view. Used Bootstrap and Angular for easy placement of elements.",code:"https://github.com/nickhughes34/nickhughes34.github.io/tree/main/Coffee",link:"https://nickhughes34.github.io/Coffee/coffee.html",tech:{html, css, javascript, angular, bootstrap, mdb}},
    {id:"pro5",status:"",title:"Weather App", name:"Weather Checker Webpage",image:"Src/Weather-screenshot.png",alt:"weather app screenshot",description:"This project lets the user input a city name to get the weather results. This project used plain Javascript to control the DOM to add all the weather elements.",code:"https://github.com/nickhughes34/nickhughes34.github.io/tree/main/Weather",link:"https://nickhughes34.github.io/Weather/weather.html",tech:{html, css, javascript}}];

  $scope.proficient = [
    ["Python", "5 years", python],
    ["HTML", "5 years", html], 
    ["CSS", "5 years", css], 
    ["Javascript", "5 years", javascript],  
    ["Angular","3 years", angular],
    ["Node.js", "3 years", nodeJs],
    ["C", "2 years", c], 
    ["jQuery", "2 years", jQuery],
    ["Linux", "2 year", linux], 
    ["Flask", "2 years", flask],
    ["React", "1 year", react]
  ];

  $scope.description1 = "\
                        I am currently attending Ontario Tech University studying Networking and IT Security. \
                        Over the years of attending this school I have gained various skills. \
                        Some of them would include network design, python programming, front end and back end web design. \
                        I have developed some projects such as a Bank Loan Page, Weather App, Product Webpage, and more listed below. \
                        I have also used various technologies such as API's, Amazon's RDS, Python Anywhere's MySQL, and MongoDB.";
  
  $scope.description2 = "I have developed some mobile applications such as a game, and a food delivery app in Android Studio. \
                         I make abundant long-term and short-term goals to stay organized. \
                         I have plenty of experience with coding and network systems.";

  $scope.description3 = "I am currenty working at SAIN Lab at Ontario Tech University. I have been working here since the start of May 2022. \
                         Over my time here at SAIN Lab I have gained and developed various skills. \
                         Some of them would be my Python skills, Linux skills, front end skills, and back end skills. \
                         I had the opportunity to work with a production level server. I was able to create several scripts for the server. \
                         Some of them include, the automation of deletion of old data, the automation of installation of security patches, scheduled reboot of the system, and etc. \
                         I also preformed maintenance on the server, using LVM’s to increase SWAP memory, and reparation drives, more of my experience is listed below.";

  $scope.hobbies = [
    ["Leafs Fan", "https://images.unsplash.com/photo-1653408333886-510ce003d440?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80"], 
    ["Reading", "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"], 
    ["Coding", "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"], 
    ["Walking", "https://images.unsplash.com/photo-1582454235987-29762ef064f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80"], 
    ["Moblie Game Design", "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"], 
    ["Building Computers", "https://images.unsplash.com/photo-1520520688967-7bdc16e77dc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"], 
    ["Solving Puzzels", "https://images.unsplash.com/photo-1494059980473-813e73ee784b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"], 
    ["Network Design", "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80"], 
    ["Website Design", "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1336&q=80"], 
    ["Machine Learning", "https://images.unsplash.com/photo-1495592822108-9e6261896da8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"]
  ];

  $scope.workExperience1 = [{
    work: "SAIN Lab / Lab Technician / May 2022 - Present",
    description: [
    "Implemented UX and UI designs for university research lab using Bootstrap, CSS, JavaScript, Node, Express, etc.",
    "Updated and improved old and preexisting architecture.",
    "Tested and debugged websites regularly to improve performance.",
    "Collaborated with team members to improve technical and creative aspects of our website.",
    "Managed the SAIN Lab website. That includes updating pages, create new pages, and creating user profiles.",
    "Preformed maintenance on a production level server, using LVM’s to increase SWAP memory, and reparation drives.",
    "Implemented Python scripts to help automate the delete of old data, automate the installation of security patches, and scheduled reboot of the system."
    ]
  }]

  $scope.Animation = function(index, $event){
    //console.log(index, $event["currentTarget"]);
    //$event["currentTarget"].classList.add("clicken");
    var value = ((index + 1) * 10) + "vw";
    document.querySelector(":root").style.setProperty('--waveAnimationLength', value)
    document.getElementById("wave").classList.add("waveAnimation");
  }
})
