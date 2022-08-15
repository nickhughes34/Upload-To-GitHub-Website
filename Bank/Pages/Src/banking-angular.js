var app = angular.module('BankPage', []);

app.controller("MainController", function($scope){
  $scope.accordion = [
    {targetID:"q-collapse1", question: "What Is The Difference Between Secured And Unsecured Loans?", answer:
                {p1:"Secured Loans: Allow you to put an asset as collateral in exchange for higher borrowing amount and lower interest rate.",
                  p2:"Unsecured Loans: You do not put any asset up for collateral in exchange for faster approval, lower borrowing amount and higher interest rate."}},
    {targetID:"q-collapse2", question: "What Is The Difference Between Variable and Fixed Rate?", answer:
                {p1:"Variable Rate: Means that your interest rate can change based on our prime rate.",
                  p2:"Fixed Rate: Means that the rate of interest agreed upon at the time of the loan will continue for the duration of the loan."}},
    {targetID:"q-collapse3", question: "Who Can Qualify For The Prime Rate?", answer:
                {p1:"Our prime interest rate is given to those in good credit standing."}},
    {targetID:"q-collapse4", question: "How Much Does My Credit History Effect My Loan?", answer:
                {p1:"Your credit history shows us how well you handled repaying your debt. It plays a major role in deciding whether you get the loan approved."}},
    {targetID:"q-collapse5", question: "Do You Need A Cosigner For A Loan?", answer:
                {p1:"If you are in good credit standing and depending on the borrowing amount you don't need a cosigner."}},
  ];

  $scope.info = [
    {title:"Loans?",descrp:"Learn how to apply for them today:", tasks:
                                                                            {task1:"Apply for the loan.",
                                                                              task2:"Get the desired money you needed.",
                                                                              task3:"Create a schedule that works for your budget.",
                                                                              task4:"Pay it back on time."},
                                                                            note:"You can have multiple loan applications open at once."},
    {title:"Line of Credit?",descrp: "Here's how to apply for them today:",tasks:
                                                                            {task1:"Apply for the line of credit.",
                                                                              task2:"Set the limit you can borrow and use it at anytime.",
                                                                              task3:"Pay the interest on the amout you borrowed.",
                                                                              task4:"Continue to use the line of credit as you see fit."},
                                                                            note:"Get a better interest rate if you secure your line of credit."}];
})
