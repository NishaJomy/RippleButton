const btnE1=document.querySelector(".btn");

btnE1.addEventListener("mouseover",(event) =>{

const x=(event.pageX -btnE1.offsetLeft);
const y=(event.pageY-btnE1.offsetTop);

btnE1.Style.SetProperty("--xPos",x+"px");

btnE1.Style.SetProperty("--yPos",y+"px");

});