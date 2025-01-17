const readline=require("readline");//readline is used for taking user input
const rl=readline.createInterface({input:process.stdin,output:process.stdout});// process is global object which handles arguments like input and output,used for holding environment varibales,process information is given
let num1=Math.floor(Math.random()*10+1);
let num2=Math.floor(Math.random()*10+1);
let ans=num1+num2;
console.log(num1);
console.log(num2);
rl.question(`what is ${ num1 } + ${ num2 }? \n`,(user)=>{//dont use "" or '' when you want variable output to get printed lie here 
    if(user.trim()==ans){//we can use question for one time userinputs if we want more than onces we use setprompt(),prompt() and on combined
        rl.close();
    }
    else{
        rl.setPrompt("incorrect try again\n");
        rl.prompt();
        rl.on("line",(user)=>{//here we are not using emit() because readline is event drien when user enters input in new line it activates on which has line
            if(user==ans){
                rl.close();
            }
            else{
                rl.setPrompt(`incorrect ${user} try again\n`);
                rl.prompt();
            }
        })
    }
});
rl.on("close",()=>{
    console.log("correct!!!");
});