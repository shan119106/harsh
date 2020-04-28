//variables for working of the table
let ar=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
let stp=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let large=0;
let a=0;
//function for shuffling
let shufar=shuffle(ar){
	let newPos;
	let temp;
	for( let i=ar.length-1,i>0,i--){
		newPos=Math.floor(Math.random()*(i+1));
		temp=ar[i];
		ar[i]=ar[newPos];
		ar[newPos]=temp;
	}
	return ar;
}
function game1(){
	 for( let j=1,j<17,j++){
	document.getElementById(j.toString()).innerHTML=shufar[j-1];
    }
	stp=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	large=0;
}
function stop(){
	for(let p=0,p<17,p++){
		if(stp[p]===2){
			let a++;
		}
	}
	if(a===16){
		startStop();
	}
	a=0;
}
function count(){
	let ID=this.id;
	stp[+ID]++;
	let number=document.getElementById(ID);
	if((large+1)===number){
		large=large+1;
	}
	else(){
		alert("ur pressing a wrong number");
	}
	if(stp[+ID]===1){
		document.getElementById(ID).innerHTML+=16;
	}
	else if(stp[+ID]===2){
		document.getElementById(ID).innerHTML=&nbsp;
	}
	else(){
		stp[+ID]=2;
	}
	stop();
}
	
	

//Define vars to hold time values
let seconds = 0;
let minutes = 0;
let hours = 0;

//Define vars to hold "display" value
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;
let besttime="00:00";

//Define var to hold setInterval() function
let interval = null;

//Define var to hold stopwatch status
let status = "stopped";

//Stopwatch function (logic to determine when to increment next value, etc.)
function stopWatch(){

    seconds++;

    //Logic to determine when to increment next value
    if(seconds / 60 === 1){
        seconds = 0;
        minutes++;

       }

    //If seconds/minutes/hours are only one digit, add a leading 0 to the value
    if(seconds < 10){
        displaySeconds = "0" + seconds.toString();
    }
    else{
        displaySeconds = seconds;
    }

    if(minutes < 10){
        displayMinutes = "0" + minutes.toString();
    }
    else{
        displayMinutes = minutes;
    }

   

    //Display updated time values to user
    document.getElementById("display").innerHTML =  displayMinutes + ":" + displaySeconds;
    
	

}



function startStop(){
    
    if(status === "stopped"){

        //Start the stopwatch (by calling the setInterval() function)
        document.getElementById("startStop").innerHTML = "Stop";
	interval = window.setInterval(stopWatch, 1000);
        status = "started";

    }
    else{
	let time=document.getElementById("display");
	if(besttime < time){
		besttime= (+time);
	}
        window.clearInterval(interval);
	seconds = 0;
   	 minutes = 0;
    	document.getElementById("display").innerHTML = "00:00";
        document.getElementById("startStop").innerHTML = "newgame";
        status = "stopped";
	document.getElementById("best time").innerHTML= besttime;

    }
	game1();
}