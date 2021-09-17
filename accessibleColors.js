

function redSolution() {
    document.getElementById("red").style.backgroundColor="#a70505";
    document.getElementById("red").style.border="2px solid #a70505";
    document.getElementById("red").style.color="#ffffff";
    document.getElementById("red").style.fontSize="22px";
    document.getElementById("red").innerHTML="#a70505";
    //select the text in the text box
    h2.select();
     //copy the text to the clipboard
     document.execCommand("copy");
    
}

function blueSolution() {
    document.getElementById("blue").style.backgroundColor="blue";
    document.getElementById("blue").style.border="2px solid blue";
    document.getElementById("blue").style.color="#ffffff";
   
    document.getElementById("blue").innerHTML="#jfk3kj";
}

function greenSolution() {
    document.getElementById("green").style.backgroundColor="#11571a";
    document.getElementById("green").style.color="#11571a";
    document.getElementById("green").style.border="2px solid #11571a";
    document.getElementById("green").style.color="#ffffff";
   
    document.getElementById("green").innerHTML="#g3j3j";
}

function purpleSolution() {
    document.getElementById("purple").style.backgroundColor="#5c1c9e";
    document.getElementById("purple").style.color="#5c1c9e";
    document.getElementById("purple").style.border="2px solid #5c1c9e";
    document.getElementById("purple").style.color="#ffffff";
   
    document.getElementById("purple").innerHTML="#5c1c9e";
}

function blackSolution() {
    document.getElementById("black").style.backgroundColor="#070707";
    document.getElementById("black").style.color="#070707";
    document.getElementById("black").style.border="2px solid #070707";
    document.getElementById("black").style.color="#ffffff";
   
    document.getElementById("black").innerHTML="#070707";
}




function cancel(){
    document.getElementByClass("button").style.backgroundColor="#ffffff";
    document.getElementById("red").style.border="2px solid black";
    document.getElementById("red").style.color="black";
    document.getElementById("red").innerHTML="Red";



}





