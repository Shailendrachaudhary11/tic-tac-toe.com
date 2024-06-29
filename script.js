let boxes=document.querySelectorAll(".box");
let reset_btn=document.querySelector("#button-Reset");
let msg_container=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];  
let turn=true;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn){
            box.innerText="O";
            turn=false;
        }
        else{
            box.innerText="X";
            turn=true;
        }
        box.disabled=true; // button pr ek bar click krne
        // baad dobara click na ho isliye box ko  disbaled krne
        // ke liye ye property lagai hain..
       checkWinner(); // winner check krne ke liye
    })
})

const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enabled=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        msg_container.classList.add("hide");
    }
}

const reset=()=>{
    turn=true;
    enabled();

}

reset_btn.addEventListener("click",()=>{
    reset();
})

const winnweprint=(winner)=>{
    msg.innerText=`Contraluation!! Winner is ${winner}`;
    msg_container.classList.remove("hide"); // kisi class se ko hta deti h us contianer se!!
    disableboxes();
}
const checkWinner=()=>{
for(let pattern of winpatterns){
    let pos1=boxes[pattern[0]].innerText;
    let pos2=boxes[pattern[1]].innerText;
    let pos3=boxes[pattern[2]].innerText
   if(pos1!="" && pos2!="" && pos3!=""){
    if(pos1 === pos2 && pos2=== pos3){
        winnweprint(pos1);
       
    }
   }

}
}

