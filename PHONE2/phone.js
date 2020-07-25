 

let generateRandom =()=>{
		if (network.value == "mtn") {
	let pin = Math.floor(1000000000000000 + 
	Math.random()* 9000000000000000)
	return pin;

		}else{
		// let pin = Math.floor(100000000000000 + 
		// Math.random()* 900000000000000)
		// console.log(pin)
		// return pin;
	
}
}

let generate = ()=>{
	 for (var i = 0; i < box.value; i++) {
var obj = {
	network:network.value,
	amount:amount.value,
	pin:generateRandom(),
	used:"false"
}

if (!localStorage.hasOwnProperty("phone")) {
	localStorage.setItem("phone", JSON.stringify([]))
}
	let card = JSON.parse(localStorage.phone)
	card.push(obj)
	localStorage.phone= JSON.stringify(card)
}
}
	
	let show =()=>{
		let showed = " "
		let card = JSON.parse(localStorage.phone)
	for (var i = 0; i < card.length; i++) {
		showed += `${card[i].network} ${card[i].amount}
		 ${card[i].pin}  ${card[i].used}<br>` 
	}
	shows.innerHTML = showed;
	}

// save card and get card from localStorage
	let num=0;
	function saveCard(){	
      localStorage.setItem("balance",JSON.stringify(num));
	}

	function getCard(){
		 num = JSON.parse(localStorage.getItem("balance"))
     	}

// calling function
      var set;
	function call() {
			getCard()
		var val = loader.value.trim();
	let card = JSON.parse(localStorage.phone)
	for (var i = 0; i < card.length; i++) {
		let cd = card[i].pin
		if(loader.value.trim() == "*555*"+cd+'#' && card[i].used=="false"){
loader.value = ` ${card[i].amount} ${card[i].network} successful`;
     num+=parseInt(card[i].amount)
     console.log(card[i].used)
   card[i].used= "true";
     
   
     saveCard()
     localStorage.phone=JSON.stringify(card)
    

   
     // To check Balance
	}if(loader.value == "*556#"){
     loader.value = ("Your balance is "+num);
     break;

     // To make call
	}if(loader.value.length === 11){
		document.getElementById('clock').style.display="block"
            document.getElementById('endcall').style.display="block"
	        document.getElementById('call').style.display="none";
	       set = setInterval(myTimer,1000)
	    
	}else{
		
}

}	
	}


		// End call function
function endcall(){
		clearTimeout(myTimer); 
	     document.getElementById('endcall').style.display="none"
	     document.getElementById('call').style.display="block";
	     alert("Yello, your new balance is " +num)    
	   hrId.value=0
	   minId.value = 0
	   secId.value = 0
	}

	function myTimer(){
 		num-=0.5;
       secId.value++;
     if(secId.value==60){
     	minId.value++;
     	 secId.value =0;
     }
     else if(minId.value==60) {
       hrId.value ++
       minId.value = 0;
       secId.value = 0;

     }else{

     }
 }



 	// To display number
let dis=(num)=>{
		loader.value +=num;
	}

// To delete number
	let del=()=>{
	loader.value=loader.value.slice(0,-1);
	}
	
	// To display clock
let off = ()=>{
		setInterval(off, 1000)
		var d = new Date()
		var time = d.toLocaleTimeString()
		loader.value = time;
	}

	// To clear screen input
	let end = ()=>{
		loader.value = "";
	}
	
	
	
