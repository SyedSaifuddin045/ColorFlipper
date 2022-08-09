const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const btn =document.getElementById("btn");
const color=document.querySelector(".color");

btn.addEventListener('click',function(){
    let C="#";
    for(let i=0;i<6;i++)
    {
        const random=getRandom();
        C=C+hex[random];
    }
    //console.log(C);
    document.body.style.backgroundColor=C;
    color.textContent=C;
})
function getRandom()
{
    return Math.floor(Math.random()*hex.length);
}