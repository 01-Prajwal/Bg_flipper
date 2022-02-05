const colors=["green","red","rgba(133,122,200)","#f15025"];
const btn=document.getElementById("btn");
const color=document.querySelector(".color");

btn.addEventListener("click",function(){
    // console.log(document.body);
    //get random number between 0-3 colors[0]
    const randomnumber=getrandom();
    console.log(randomnumber);
    document.body.style.backgroundColor=colors[randomnumber];
    color.textContent=colors[randomnumber];
});

function getrandom(){
    return Math.floor(Math.random()*colors.length);
}