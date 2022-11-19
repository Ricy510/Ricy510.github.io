// s1 outfit
let s1 = document.getElementById("s1");/* get #s1 outfit */
/* the process: */
s1.onclick = function() {
	/* 1. hide #body (set display to none)
	/* 2. call the function you created to hide all the outfits 
	(remember: get the list of .outfit elements and use a for loop to hide each outfit)
	/* 3. show #o1 outfit (set display to block)*/
	let body = document.getElementById("body");
	body.style.display= "none";
	let outfit = document.getElementsByClassName("outfit");
	for (i=0;i<outfit.length;i++){
		outfit[i].style.display= "none";
	}
	let o1 = document.getElementById("o1");
	o1.style.display="block";

}

// s2 outfit
/* get #s2 outfit */
let s2 = document.getElementById("s2");
/* repeat process */
s2.onclick = function() {

	let body = document.getElementById("body");
	body.style.display= "none";
	let outfit = document.getElementsByClassName("outfit");
	for (i=0;i<outfit.length;i++){
		outfit[i].style.display= "none";
	}
	let o2 = document.getElementById("o2");
	o2.style.display="block";

}


// s3 outfit
/* get #s3 outfit */
let s3 = document.getElementById("s3");
/* repeat process */
s3.onclick = function() {

	let body = document.getElementById("body");
	body.style.display= "none";
	let outfit = document.getElementsByClassName("outfit");
	for (i=0;i<outfit.length;i++){
		outfit[i].style.display= "none";
	}
	let o3 = document.getElementById("o3");
	o3.style.display="block";

}

// s4 outfit
/* get #s4 outfit */
let s4 = document.getElementById("s4");
/* repeat process */
s4.onclick = function() {

	let body = document.getElementById("body");
	body.style.display= "none";
	let outfit = document.getElementsByClassName("outfit");
	for (i=0;i<outfit.length;i++){
		outfit[i].style.display= "none";
	}
	let o4 = document.getElementById("o4");
	o4.style.display="block";

}

// s5 outfit
/* get #s5 outfit */
let s5 = document.getElementById("s5");
/* repeat process */
s5.onclick = function() {

	let body = document.getElementById("body");
	body.style.display= "none";
	let outfit = document.getElementsByClassName("outfit");
	for (i=0;i<outfit.length;i++){
		outfit[i].style.display= "none";
	}
	let o5 = document.getElementById("o5");
	o5.style.display="block";

}

// strip outfit
let strip = document.getElementById("strip-button");/* get #strip-button */
strip.onclick = function() {
	/* call the function you created to hide all the outfits */
	let outfit = document.getElementsByClassName("outfit");
	for (i=0;i<outfit.length;i++){
		outfit[i].style.display= "none";
	}
	/* show #body */
	let body = document.getElementById("body");
	body.style.display= "block";

}