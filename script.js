/*Create an application that generates an array of 5 random numbers 1-10. The user should then guess 
a number and the app will tell them how many time that number exists within the array*/




	const randomNum=[];
		randomNum[0]=Math.floor(Math.random() * 10) + 1;
		randomNum[1]=Math.floor(Math.random() * 10) + 1;
		randomNum[2]=Math.floor(Math.random() * 10) + 1;
		randomNum[3]=Math.floor(Math.random() * 10) + 1;
		randomNum[4]=Math.floor(Math.random() * 10) + 1;
			console.log(randomNum);


function go(){
		var count=0;
		userChoice=parseInt(prompt("Guess one number from 1-10"));
		for(var i=0;i<randomNum.length;++i){
			if(randomNum[i] == userChoice){
				count++;
			}
		}
				alert("Your number " +userChoice+ " exist: " +count+ " times");
								
			}
		
		
				
			
				
