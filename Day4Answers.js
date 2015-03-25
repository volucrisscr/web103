/* BASEBALL! */
/* Today we get to build a baseball simulator! Scoring, hitting, teams and all! */
/* The instructions for each bit of the app are given below,  */
/* see if you can complete them all at your own pace. */



/* Exercise 0: Warmup! */
/* Create an event listener for the 'edit' button on the title. When you click the edit button, it should:
      1. Prompt the use for a 'name' and save it in a variable.
      2. Replace the text "Person" with the text from that prompt.
*/
document.getElementsByClassName('edit')[0].addEventListener('click', function() {
    document.querySelectorAll('.name span')[0].innerHTML = prompt('Enter your name');
});



/* Exercise 1 */
/* Write a function that will:
      1. Create a new 'div' with a class and save  to a variable.
      2. Set the class of that variable to '.batter'.
      3. Insert that new div into the element with the class '.grass'.
*/
function addBatter() {
	var newBatter = document.createElement('div');
	newBatter.className = "batter";
	document.querySelectorAll('.grass')[0].appendChild(newBatter);
}






/* Exercise 2 */
/* Insert Play Ball Event Listener. When you click it, it should do the following:
      1. Reset the scoreboard '.score' elements to say 0.
      2. Set the class of <body> to ONLY either .homeActive or .awayActive
      3. Remove all '.batter' elements from the DOM completely
      4. Call the addBatter() function to insert a new batter on the field.
*/
document.querySelectorAll('.playball')[0].addEventListener('click', function() {
	// 1
	var scores = document.querySelectorAll('.scores');
	for( i=0; i<scores.length; i++ ) {
		scores[i].innerHTML = 0;
	}
	// 2
	var body = document.getElementsByTagName('body')[0];
	if( body.className === "homeActive") {
		body.className = "awayActive";
	} else {
		body.className = "homeActive";
	}
	// 3
	var batterElems = document.querySelectorAll('.batter');
	for( i=0; i<batterElems.length; i++ ) {
		batterElems[i].parentNode.removeChild( batterElems[i] );
	}
	// 4
	addBatter();

});






/* Exercise 3 */
/* Add event observer to 'single' button. When you click it, it should:
      1. Save all '.batter' elements to a variable.
      2. Use a loop to iterate through all those elements and:
          a. if batter has ID 'first', change his ID to 'second'
          b. if batter has ID 'second', change his ID to 'third'
          c. if batter has ID 'third', change his ID to 'home', then remove that batter from DOM using clearBatter function (which we will write next)
          d. if batter has ID 'home', DO NOTHING
          e. if batter HAS NO ID, move him to first.
                    Note: initially the batter has NO ID, we don't add a 'home' ID until we move him from third to home.
      3. Create a new <div> element and give it a class '.batter'.
      4. Append that div at the end of the 'infield' element.
*/
document.querySelectorAll('.single')[0].addEventListener('click', function() {
	// 1
	var batters = document.querySelectorAll('.batter');
	var batterId;
	for( i=0; i<batters.length; i++ ) {
		batterId = batters[i].id;
		switch(batterId) {
			case "first":
				batters[i].id = "second";
				break;
			case "second":
				batters[i].id = "third";
				break;
			case "third":
				batters[i].id = "home";
				increaseScore();
				break;
			case "home":
				break;
			default:
				batters[i].id = "first";
		}
	}
	// 2
	addBatter();
});







/* Exercise 4 */
/* Write a function called clearBatter that will:
      1. Accept an HTML element as a parameter.
      2. Use a setTimeout with a timeout of 1 seconds.
      3. Remove the element from the DOM
      4. Increase the score of the 'active' Team by 1, by calling the increaseScore function (which we will write next)

   We can use this function after each hit to clean up or DOM heirarchy. 
*/						// 1
function clearBatter( batterToClear ) {
	// 2
	setTimeout(function() {
		// 3
		batterToClear.parentNode.removeChild( batterToClear );
	}, 1000);
	// 4
	increaseScore();
}





/* Exercise 5 */
/* Write a function called increaseScore that will:
    1. Check the class of the <body> tag to see which team is active.
    2. Increase the '.score' element value for that team by 1.
*/
function increaseScore() {
	// 1
	var body = document.querySelectorAll('body')[0];
	var currentScore;
	if( body.className === "homeActive" ) {
		// 2
		currentScore = document.querySelectorAll('.home .score')[0].innerHTML;
		document.querySelectorAll('.home .score')[0].innerHTML = parseInt(currentScore) + 1;
	} else if( body.className === "awayActive" ) {
		// 2
		currentScore = document.querySelectorAll('.away .score')[0].innerHTML;
		document.querySelectorAll('.away .score')[0].innerHTML = parseInt(currentScore) + 1;
	}
}






/* Exercise 6 */
/* Insert event listener for 'Swap Teams' button that will:
      1. Check the 'class' attribute of the <body> element.
          a. If it is 'awayActive', change it to 'homeActive'.
          b. If it is 'homeActive', change it to 'awayActive'.
      2. Clear all '.batter's on the field
      3. Call "addBatter()" to insert a new batter on the field.
*/
document.querySelectorAll('.swap')[0].addEventListener('click', function() {
	// 1
	var body = document.querySelectorAll('body')[0];
	if( body.className === "homeActive") {
		body.className = "awayActive";
	} else {
		body.className = "homeActive";
	}
	// 2
	var batters = document.querySelectorAll('.batter');
	for( i=0; i<batters.length; i++ ) {
		batters[i].parentNode.removeChild( batters[i] );
	}
	// 3
	addBatter();
});





/* Exercise 7 */
/* Add event observer to 'double' button. When you click it, it should:
      1. Save all '.batter' elements to a variable.
      2. Use a loop to iterate through all those elements and:
          a. if batter has ID 'first', change his ID to 'third'
          b. if batter has ID 'second', change his ID to 'home', then remove that batter from DOM using clearBatter function
          c. if batter has ID 'third', change his ID to 'home',, then remove that batter from DOM using clearBatter function
          d. if batter has ID 'home', DO NOTHING
          e. if batter HAS NO ID, move him to first.
                    Note: initially the batter has NO ID, we don't add a 'home' ID until we move him from third to home.
      3. Create a new <div> element and give it a class '.batter'.
      4. Append that div at the end of the 'infield' element.
*/
document.querySelectorAll('.double')[0].addEventListener('click', function() {
	// 1
	var batters = document.querySelectorAll('.batter');
	var batterId;
	for( i=0; i<batters.length; i++ ) {
		batterId = batters[i].id;
		switch(batterId) {
			case "first":
				batters[i].id = "third";
				break;
			case "second":
				batters[i].id = "home";
				increaseScore();
				break;
			case "third":
				batters[i].id = "home";
				increaseScore();
				break;
			case "home":
				break;
			default:
				batters[i].id = "second";
		}
	}
	// 2
	addBatter();
});





/* Exercise 8 */
/* Add event observer to 'triple' button. When you click it, it should:
      1. Save all '.batter' elements to a variable.
      2. Use a loop to iterate through all those elements and:
          a. if batter has ID 'first', change his ID to 'third'
          b. if batter has ID 'second', change his ID to 'home', then remove that batter from DOM using clearBatter function
          c. if batter has ID 'third', change his ID to 'home',, then remove that batter from DOM using clearBatter function
          d. if batter has ID 'home', DO NOTHING
          e. if batter HAS NO ID, move him to first.
                    Note: initially the batter has NO ID, we don't add a 'home' ID until we move him from third to home.
      3. Create a new <div> element and give it a class '.batter'.
      4. Append that div at the end of the 'infield' element.
*/
document.querySelectorAll('.triple')[0].addEventListener('click', function() {
	// 1
	var batters = document.querySelectorAll('.batter');
	var batterId;
	for( i=0; i<batters.length; i++ ) {
		batterId = batters[i].id;
		switch(batterId) {
			case "first":
				batters[i].id = "home";
				increaseScore();
				break;
			case "second":
				batters[i].id = "home";
				increaseScore();
				break;
			case "third":
				batters[i].id = "home";
				increaseScore();
				break;
			case "home":
				break;
			default:
				batters[i].id = "third";
		}
	}
	// 2
	addBatter();
});







/* Exercise 9 */
/* Add event observer to 'homerun' button. When you click it, it should:
      1. Save all '.batter' elements to a variable.
      2. Use a loop to iterate through all those elements and:
          a. if batter has ID 'first', change his ID to 'home', then remove that batter from DOM using clearBatter function
          b. if batter has ID 'second', change his ID to 'home', then remove that batter from DOM using clearBatter function
          c. if batter has ID 'third', change his ID to 'home',, then remove that batter from DOM using clearBatter function
          d. if batter has ID 'home', DO NOTHING
          e. if batter HAS NO ID, change his ID to 'home', then remove that batter from DOM using clearBatter function
                    Note: initially the batter has NO ID, we don't add a 'home' ID until we move him from third to home.
      3. Create a new <div> element and give it a class '.batter'.
      4. Append that div at the end of the 'infield' element.
*/
document.querySelectorAll('.homerun')[0].addEventListener('click', function() {
	// 1
	var batters = document.querySelectorAll('.batter');
	var batterId;
	for( i=0; i<batters.length; i++ ) {
		batterId = batters[i].id;
		switch(batterId) {
			case "first":
				batters[i].id = "home";
				increaseScore();
				break;
			case "second":
				batters[i].id = "home";
				increaseScore();
				break;
			case "third":
				batters[i].id = "home";
				increaseScore();
				break;
			case "home":
				break;
			default:
				batters[i].id = "home";
				increaseScore();
		}
	}
	// 2
	addBatter();
});





/* Additional Exercises */
/* If time permits, here's some things we can do to spice up the simulator:
        1. Implement the inning logic.
        2. Implement 'game over' logic.
        2. Have some sort of on screen message for each 'hit' from a batter.
*/





















