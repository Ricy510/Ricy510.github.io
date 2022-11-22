

let index=1;
showPic(index);//show images[0]
function buttonClick(t){
	
	showPic(index=index+t);
}

function showPic(n){
	let images = document.getElementsByClassName("pic");

	if (n>=images.length+1){//e.g. 3 pics, n=4, x[4-1]=x[3] out of bounds
		index=1 //Go back to first pic x[0]
	}
	if(n<=0){
		index=images.length //Go to last pic x[len-1]
	}
	for(i=0;i<images.length;i++){
		images[i].style.display="none";
	}
	images[index-1].style.display="block";
}


showPic1(index);

function buttonClick1(t){
	
	showPic1(index=index+t);
}

function showPic1(n){
	let images = document.getElementsByClassName("pic1");

	if (n>=images.length+1){//e.g. 3 pics, n=4, x[4-1]=x[3] out of bounds
		index=1 //Go back to first pic x[0]
	}
	if(n<=0){
		index=images.length //Go to last pic x[len-1]
	}
	for(i=0;i<images.length;i++){
		images[i].style.display="none";
	}
	images[index-1].style.display="block";
}

showPic2(index);

function buttonClick2(t){
	
	showPic2(index=index+t);
}

function showPic2(n){
	let images = document.getElementsByClassName("pic2");

	if (n>=images.length+1){//e.g. 3 pics, n=4, x[4-1]=x[3] out of bounds
		index=1 //Go back to first pic x[0]
	}
	if(n<=0){
		index=images.length //Go to last pic x[len-1]
	}
	for(i=0;i<images.length;i++){
		images[i].style.display="none";
	}
	images[index-1].style.display="block";
}

showPic3(index);

function buttonClick3(t){
	
	showPic3(index=index+t);
}

function showPic3(n){
	let images = document.getElementsByClassName("pic3");

	if (n>=images.length+1){//e.g. 3 pics, n=4, x[4-1]=x[3] out of bounds
		index=1 //Go back to first pic x[0]
	}
	if(n<=0){
		index=images.length //Go to last pic x[len-1]
	}
	for(i=0;i<images.length;i++){
		images[i].style.display="none";
	}
	images[index-1].style.display="block";
}

showPic4(index);

function buttonClick4(t){
	
	showPic4(index=index+t);
}

function showPic4(n){
	let images = document.getElementsByClassName("pic4");

	if (n>=images.length+1){//e.g. 3 pics, n=4, x[4-1]=x[3] out of bounds
		index=1 //Go back to first pic x[0]
	}
	if(n<=0){
		index=images.length //Go to last pic x[len-1]
	}
	for(i=0;i<images.length;i++){
		images[i].style.display="none";
	}
	images[index-1].style.display="block";
}


showPic5(index);

function buttonClick5(t){
	
	showPic5(index=index+t);
}

function showPic5(n){
	let images = document.getElementsByClassName("pic5");

	if (n>=images.length+1){//e.g. 3 pics, n=4, x[4-1]=x[3] out of bounds
		index=1 //Go back to first pic x[0]
	}
	if(n<=0){
		index=images.length //Go to last pic x[len-1]
	}
	for(i=0;i<images.length;i++){
		images[i].style.display="none";
	}
	images[index-1].style.display="block";
}

