/* Banking! */
/* Today we are going to be building off of the javascript we wrote in the previous class.
   We are going to be taking all of that logic and plugging onto an actual website!

   If you open up index.html, you'll see a whole bunch of markup for these exercises.
   You'll also notice that there are a TON of tags with ID attributes attached
   to them. This is so we can use the DOM API and the document.getElementById() 
   function to grab those elements

   INSERT IN CLASS EXPLANATION OF THE DOM HERE

   INSERT IN CLASS EXPLANATION OF THE DOM API HERE

   ' '        ' '          ' '        DOCUMENT.GETELEMENTBYID FUNCTION HERE

     */



/* Let's try a few practice examples! */

/* Exercise 1 */
/* Use the DOM API and it's functions ( .getElementById() ) to grab the following elements by their ID:
        1. The "thisIsTheHTML" element.
        2. The "thisIsTheHead" element.
        3. The "thisIsTheBody" element. */
// document.getElementById('thisIsTheHTML');
// document.getElementById('thisIsTheHead');
// document.getElementById('thisIsTheBody');



/* Exercise 2 */
/* Use the DOM API to do the following:
        1. Grab the "thisIsTheBody" element and use console.log to log out the INNER HTML of that element. (google it!) 
        2. Grab the same body element, and use the same method from part 1 to SET the INNER HTML of the body tag
           to a your name (as a string), e.g. "Josh Soileau" 
        3. Grab the body element and use the .style attribute to change the background color to "purple" (hint, you want
           to get the backgroundColor attribute from the .style attribute */

// console.log( document.getElementById('thisIsTheBody').innerHTML );
// document.getElementById('thisIsTheBody').innerHTML = "Josh Soileau";
// document.getElementById('thisIsTheBody').style.backgroundColor = "purple";



/* Exercise 3 */
/* Now we get in to the real stuff for our banking app. The first thing you'll notice about the page is that
   there is a massive overlay clogging up the screen. We want to remove this when the user signs in.
   If you look in the html at the "#overlay" div, on the <button> tag, you'll see it has an "onclick"
   attribute that calls a "login()" function.

   We are going to write that function right now.

        1. at the top of the function, use a "prompt()" call to ask the user to input a username, and save that value to a variable.
        2. after you have the user's username, use the DOM API and .getElementById() function to grab the element
           with the id "userName" and set the .innerHTML of that element to the variable that you saved in step 1.
        3. after you've set the HTML to the name that the user put in, we want to remove the overlay. So, grab the 
           element with the id "overlay" and set it's innerHtml to an empty string "". */
var login = function() {

  /* Write code here */
  var user = prompt("Enter your Username");
  document.getElementById("userName").innerHTML = user;
  document.getElementById('overlay').innerHTML = "";

}



/* Exercise 4 */
/* This exercise is broken out into 3 extremely similar parts.
   
   In each, we'll be prompting a user for input, saving it as a variable, and setting the DOM HTML to that variable we got back.

   Simple enough. We will write the functions that are called by 3 different <button> tags on the page

        1. Write the changeUserAddress() function. It should
            a. Prompt the user for a new address, and save that to a variable.
            b. set the innerHTML of the correct element on the page to that variable.
        2. Write the changeAccountNumber() function with the same requirements as above.
        3. Write the changeAccountOpenDate() function with the same requirements as above. */
var changeUserAddress = function() {

  /* Write code here */
  var userAddress = prompt("Enter your Address");
  document.getElementById("userAddress").innerHTML = userAddress;


}
var changeAccountNumber = function() {

  /* Write code here */
  var accountNumber = prompt("What would you like to change your account number to?");
  document.getElementById("accountNumber").innerHTML = accountNumber;

}
var changeAccountOpenDate = function() {

  /* Write code here */
  var accountOpenDate = prompt("On what day did you open your account?");
  document.getElementById("accountOpenDate").innerHTML = accountOpenDate;

}



/* Exercise 5 */
/* Now we will be writing the fun functions. The deposit and withdraw functions */
/*        1. Write the deposit() function. It should prompt the user for an input, and save that to a variable AS A
             NUMBER NOT A STRING (google "convert javascript string to a number").
          2. Next, grab the contents of the "#balance" element and save it AS A NUMBER NOT A STRING  to a variable. 
          3. Add your result from part 1 from your result to part 2 and save it in a third variable.
          4. Set the .innerHTML of the "#balance" element to the result of your part 3!  */
var deposit = function() {

  /* Write code here */
  var depositAmount = parseInt( prompt("How much would you like to deposit?") );
  var currentBalance = parseInt( document.getElementById('balance').innerHTML );
  var newBalance = currentBalance + depositAmount;
  document.getElementById('balance').innerHTML = newBalance;

}




/* Exercise 6 */
/*        1. Write the withdraw() function. It should work very similarly to Exercise 5, except that instead of adding
             the 2 variables together, you'll be subtracting one from the other  */
var withdraw = function() {

  /* Write code here */
  var withdrawAmount = parseInt( prompt("How much would you like to withdraw?") );
  var currentBalance = parseInt( document.getElementById('balance').innerHTML );
  var newBalance = currentBalance - withdrawAmount;
  document.getElementById('balance').innerHTML = newBalance;

}




/* Exercise 7 - ADDING INTEREST */
/* Let's say our Bank is the MOST AWESOME BANK IN THE WORLD. Let's pretend that our bank gives a 3% interest rate ACCUMULATED 
   EVERY SINGLE DAY OF THE YEAR. We're going to write that logic now. This function is what happens when you click the 
   "Go forward a day" button. Write the forward() function.
            1. Get, and save the current balance AS A NUMBER. Perform a 3% raise  on that number, and save it back into the 
               html for the balance. */
var forward = function() {

  /* Write code here */
  var currentBalance = parseInt( document.getElementById('balance').innerHTML );
  var newBalance = currentBalance * 1.03;
  document.getElementById('balance').innerHTML = newBalance;

}



/* Exercise 7 - SUBTRACTING INTEREST */
/* Let's pretend our bank gets pissed off pretty easily, and sometimes wants to confiscate a 3% TAX on our bank balance.
   Crazy stupid idea for a bank, but we're going to build it anyways!
            1. Get, and save the current balance AS A NUMBER. Perform a 3% DEDUCTION on that number, and save it back into the 
               html for the balance. */
var back = function() {

  /* Write code here */
  var currentBalance = parseInt( document.getElementById('balance').innerHTML );
  var newBalance = currentBalance * .97;
  document.getElementById('balance').innerHTML = newBalance;

}
















