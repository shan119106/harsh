
let seconds = 0;
let minutes = 0;


//Define vars to hold "display" value
let displaySeconds = 0;
let displayMinutes = 0;

//Define var to hold setInterval() function
let interval = null;
let bestime="10.00";

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

   

    //Display updated time values to 
    document.getElementById("display").innerHTML = displayMinutes + ":" + displaySeconds;

}



function startStop(){

    if(status === "stopped"){

        //Start the stopwatch (by calling the setInterval() function)
        interval = window.setInterval(stopWatch, 1000);
        document.getElementById("startStop").innerHTML = "  ";
        status = "started";

    }
    else{
    	 window.clearInterval(interval);
         let t=document.getElementById("display");
          if(bestime>(t.innerHTML)){
         	bestime=t.innerHTML;
           }
         seconds=0;
         minutes=0;
         document.getElementById("display").innerHTML="00:00";
         document.getElementById("startStop").innerHTML = "newgame";
         status = "stopped";
         document.getElementById("best time").innerHTML=bestime;
         
     
    }

}

let ar=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let stp=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let large=0;
let a=0;
let shuffle=function(arr){
	let newPos;
	let temp;
	for( let i=arr.length-1;i>0;i--){
		newPos=Math.floor(Math.random()*(i+1));
		temp=arr[i];
		arr[i]=arr[newPos];
		arr[newPos]=temp;
	}
	return arr;
}

function game(){
	let shufar=shuffle(ar);
	for(let j=1;j<21;j++){
		
		document.getElementById(j).innerHTML=shufar[j-1];
	}
	stp=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	large=0;
    a=0;
    startStop();
}
function count(e){
	let r=Number(e);
    let k=document.getElementById(e);
    if(large+1===+(k.innerHTML)){
    	large=large+1;
        stp[r-1]++;
    if(stp[r-1]===1){
    document.getElementById(e).innerHTML=Number(k.innerHTML)+20;
    }
    else if(stp[r-1]===2){
    document.getElementById(e).innerHTML="&nbsp";
    a++
    }
    else{ stp[r-1]=2;
    }
        }
    else{
    	alert("ur pressing a wrong number");
        }  
	if(a===20){
    	startStop();
    }
    
}

