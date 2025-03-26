let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let turn0 = true;
let winningPatterns = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
boxes.forEach((box) => {
    box.addEventListener('click', ()=>{
        console.log("box was clicked");
        if(turn0){
            box.innerText = "O";
            turn0 = false;
        }
        else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    })
});
const checkWinner = () =>{
    for(let pattern of winningPatterns){
        let position1 = boxes[pattern[0]].innerText;
        let position2 = boxes[pattern[1]].innerText;
        let position3 = boxes[pattern[2]].innerText;
        console.log(position1, position2, position3);
        if(position1 != "" && position2 != "" && position3 != ""){
            if(position1 === position2 && position2 == position3){
                console.log('Winner');
                document.querySelector(".win").innerText = `Winner ${position1}` 
                disableAllBoxes();
                break;
            }
        }
    } 
}
const disableAllBoxes = () =>{
    boxes.forEach(box => {
        box.disabled = true;
    });
}
resetbtn.addEventListener('click', () =>{
    location.reload();
})

