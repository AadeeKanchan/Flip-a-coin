let heads = 0;
let tails = 0;
let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset");

flipBtn.addEventListener("click",() =>{
    let i= Math.floor(Math.random()*2);
    coin.style.animation="none";
    if(i){
        setTimeout(function(){
            coin.style.animation="spin-heads 3s forwards";   
        },100);
        heads++;
    }
    else{
        setTimeout(function(){
            coin.style.animation="spin-tails 3s forwards";
        },100);
        tails++;
    }
    playSound();
    setTimeout(updateStatus,3000);
    disableBotton();

});

function updateStatus() {
    document.querySelector("#heads-count").textContent = `Heads : ${heads}`;
    document.querySelector("#tails-count").textContent =  `Tails : ${tails}`;
}

function playSound(){
    const sound =document.getElementById("coin-sound");
    sound.play();
}

function disableBotton() {
    flipBtn.disabled = true;
    setTimeout(function(){
        flipBtn.disabled = false;
    },3000);
}

resetBtn.addEventListener("click",()=>{
    coin.style.transform = "rotateX(0)";
    heads= 0;
    tails= 0;
    updateStatus();

});

