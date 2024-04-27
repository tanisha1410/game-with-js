let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#rst-btn");
let newGBt = document.querySelector("#newbtn");
let msgCnt = document.querySelector(".msg-ctn");
let msg = document.querySelector("#msg");
let turnO = true; //for player X,O...
let count = 0;

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [2,4,6],
    [6,7,8]

]; 
const resetGame =() =>{
    turnO = true;
    count = 0;
    enableBoxes();
    msgCnt.classList.add("hide");
}
boxes.forEach((box) => {
    box.addEventListener("click"  , () => {
        if(turnO){
            box.innerText= "O";
            turnO= false; 
        } 
        else{
            
            box.innerText = "X";
            turnO = true ;
        }
        box.disabled = true;
        count++;
        checkWin();

    });
});
const disableBoxes =() =>{
    for (let box of boxes){
           box.disabled = true;
    }
}
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText ='';
    }
}
const showWinner =(Winner) => {
     msg.innerText = `Congratulation, Winner is ${Winner}`;
     msgCnt.classList.remove("hide");
     disableBoxes(); 
}
const showDraw = ()=> {
    msg.innerText="Match is Draw Play again.... ";
    msgCnt.classList.remove("hide");
    disableBoxes(); 

}
const checkWin = () =>{
    for(let pattern of winPattern) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if(pos1Val != "" && pos2Val != "" && pos3Val !=""){
            if(pos1Val=== pos2Val && pos3Val===pos2Val){
                showWinner(pos1Val);
                
        }
        else{
            if(count===9){
                showDraw();
            }
        }
      }
}
};
newGBt.addEventListener("click", resetGame);
resetBtn.addEventListener("click",resetGame);