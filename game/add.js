let boxs = document.querySelectorAll(".box");
let reset_btn = document.querySelector("#reset-btn");
let new_btn = document.querySelector("#new-btn");
let msg = document.querySelector(".msg");
let msgpera = document.querySelector("#msg");

let truno =true;

 
const winpatterns =[

    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

 const resetgame =()=>{
    let truno =true;
    enablebtn();
    msg.classList.add("hide");


    
 }



 boxs.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("box was click ");
        if(truno){
            box.innerText ="o";
            truno=false;

        }else{
            box.innerText="x";
            truno=true;
        }
        box.disabled = true;
        chackwinner();
    });
 });

 const disabledbtn =() =>{
    for(let bx of boxs){
        bx.disabled= true;
    }
 }



const enablebtn =() =>{
    for(let bx of boxs){
        bx.disabled= false;
        bx.innerText ="";
    }
 }


 const showwinner =(winner)=>{
    msgpera.innerText=`congratulations , winner is ${winner}`;
    msg.classList.remove("hide");
    
 }      
const chackwinner = ()=>{
    for(let pattern of winpatterns)
    {
    let pos1val = boxs[pattern[0]].innerText;
    let pos2val = boxs[pattern[1]].innerText;
    let pos3val = boxs[pattern[2]].innerText;Text

    if(pos1val !="" && pos2val !="" && pos3val !=""){
        if(pos1val === pos2val && pos2val === pos3val){
            // console.log(`winner ${pos1val}`);

            disabledbtn();
            showwinner(pos1val);
        }
        
    }
    }
};
new_btn.addEventListener("click" ,resetgame);
reset_btn.addEventListener("click",resetgame);
