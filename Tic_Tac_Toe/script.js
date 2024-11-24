let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn")
let newbtn =document.querySelector("#newgame-btn")
let msgcontainer= document.querySelector(".msg-container")
let msg=document.querySelector("#msg")

// resetbtn.addEventListener("click", ()=>{
//     console.log("great");
// })
let count=0;
let turn0 = true; //if its player X then it will become as false.
const winningPattern =[[0,1,2],[0,3,6],
                       [0,4,8],[1,4,7],
                       [2,5,8],[3,4,5],
                       [2,4,6],[6,7,8]];


boxes.forEach((val) => {
    val.addEventListener("click",()=>{
        
        if(turn0===true){
            val.innerText="O";
            val.style.color="#a01a7d";
            turn0=false;
        }else{
            val.innerText="X";
            val.style.color="#003E1F";
            turn0=true;
        }
        val.disabled = true;
        count++;
        let isWinner = checkWinner();
        if(count===9 && !isWinner){
            showdraw();
        }
        
    });
});

//Code from 31 tp 45 written on behalf of 78 to 98
const enable=()=>{
    boxes.forEach((val)=>{
        val.disabled=false;
        val.innerText="";
    });
}

//when will the enabled function be called? when newbtn and reset btns are pressed;
const resetGame=()=>{
     turn0=true;
     count=0;
     enable();
     msgcontainer.classList.add("hide");

     
}

const disable=()=>{
    boxes.forEach((val)=>{
        val.disabled=true;
    });
}
const showWinner = (winner) => { 
    msg.innerText=`Congrats! the winner is ${winner}`
    msgcontainer.classList.remove("hide");
    disable();//line 37
};

const showdraw=()=>{
    msg.innerText="The match is draw";
    msgcontainer.classList.remove("hide");
    disable();

}
const checkWinner= ()=>{
    for(let pattern of winningPattern){
        // console.log(pattern[0],pattern[1],pattern[2]);//[0 1 2]
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);//0 1 2
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if((pos1!="" && pos2!="" && pos3!="")){
            if(pos1===pos2&&pos2===pos3){
                //console.log("Congrats you are the winner",pos1);
                showWinner(pos1);   
                return true;   
            }
       }
    }
};

newbtn.addEventListener("click",resetGame)
resetbtn.addEventListener("click",resetGame)
/* Instead of this we have written enable and disable functions.
newbtn.addEventListener("click",()=>{
    msgcontainer.classList.add("hide");      
    boxes.forEach((val)=>{
        val.innerText= " ";
        val.disabled=false;
        
    });
});


resetbtn.addEventListener("click",()=>{
        msgcontainer.classList.add("hide");      
        boxes.forEach((val)=>{
            val.innerText= " ";
            val.disabled=false;
            
        });
    });

*/