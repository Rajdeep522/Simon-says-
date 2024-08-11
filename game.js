let gameseq=[];
let userseq=[];
let btns=["yellow","purple","green","pink"];

let started=false;
let level=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if (started==false) {
        console.log("Game started");
        started=true;
    }

    levelUp();
})

function flashbtn(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 200);
}


function userpress(btn){
    btn.classList.add("userpress");
    setTimeout(function(){
        btn.classList.remove("userpress");
    }, 200);
}

function levelUp(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randIdx=Math.floor(Math.random()*4);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameseq.push(randColor);
    console.log(gameseq);

    flashbtn(randBtn);
}

function btnpress(){
    let btn=this;   
    userpress(btn);

    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
   
    checkAns(userseq.length-1);
}


function checkAns(idx){
    if(gameseq[idx]===userseq[idx]){
        if(gameseq.length==userseq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){ 
            document.querySelector("body").style.backgroundColor="white"
        },150);
        h2.innerHTML=`Game over! <b/>Your score was ${level}<b/> <br> Press any key to restart the game`;
        level=0;
        started=false;
        gameseq=[];
        userseq=[];
    }
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnpress);
}
