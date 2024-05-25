let player=prompt("Enter the name of the player: ");
document.querySelector('#name').innerText=player;
let user=0;
let comp=0;

const getCompChoice=() =>{
    const options=["rock","paper","scissors"];
    let num=Math.floor(Math.random()*options.length);
    return options[num];
}
let msg=document.querySelector("#msg");
let userScore=document.querySelector("#playerscore");
let compScore=document.querySelector("#compscore");
const whoWin=(userRes)=>{
    if(userRes){
        msg.innerText= player+" Won! :)";
        user++;
        userScore.innerText=user;
        msg.style.backgroundColor='green';
    }
    else{
        msg.innerText=player+" Lost! :(";
        comp++;
        compScore.innerText=comp;
        msg.style.backgroundColor='red';
    }
}
const playGame=(userChoice,compChoice) =>{
    console.log(userChoice,compChoice);
    if(userChoice===compChoice){
        msg.innerText="Game Was Draw. Play Again";
        msg.style.backgroundColor='black';
    }
    else {
        let userRes=true;
        if(userChoice==='rock'){
            userRes=(compChoice==="paper")?false:true;
        }
        else if(userChoice==='paper'){
            userRes=(compChoice==="scissors")?false:true;
        }
        else{
            userRes=(compChoice==="rock")?false:true;
        }
        whoWin(userRes)
    }

}
let choices=document.querySelectorAll('img');
choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        let userChoice=choice.getAttribute('id');
        let compChoice=getCompChoice();
        playGame(userChoice,compChoice);
    });
});

