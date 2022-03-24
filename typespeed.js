let messages = [
    "Hi,I am Akash",
    "Please play the music",
    "I am Batman",
    "Programming is easy",
    "Financial Literay is required to gain financial freedom",
    "Did you watch Spiderman:No way home"
];



let btn = document.getElementById('btn');
let text =  document.getElementById('textarea');
let shownMsg = document.getElementById('msg');
let start;
let end;
let totalTime;



function calculate() {
  

   
    if(btn.innerText=='Start'){
        
        document.getElementById('textarea').disabled = false
        document.getElementById('textarea').focus()
        let randomMsg = Math.floor(Math.random()*messages.length);
        document.getElementById('msg').innerText =messages[randomMsg]
        let date = new Date();
        let startTime = date.getTime();
        start=startTime
        btn.innerText = 'Done'
       console.log(startTime);
    }
   
    
    else if(btn.innerText=='Done'){
        document.getElementById('textarea').disabled = false
        
        let result = text.value.split(' ')
        console.log(result)
        let date = new Date();
        let endTime = date.getTime();
        end=endTime
        totalTime =( end-start)/60000
        console.log(totalTime)
        if(result.length==1||result.length==0){
            document.getElementById('msg').innerText=`You did not type any words.Please type the sentences`
        }
        else{
            document.getElementById('msg').innerText=`Your speed is ${result.length/totalTime} words per minute`
        }
       
        btn.innerText="Start"
        
        
        

    }
    
   
   
}
