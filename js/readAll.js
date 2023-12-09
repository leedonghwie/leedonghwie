import {quoteArray} from "./quoteArray.js";
const textblocksGrid=document.getElementById("textblocksGrid");

function listPush(){

    let i=0;
    while(i<quoteArray.length){
        const div=document.createElement("div");
        const createA = document.createElement("a");
            createA.href=`${quoteArray[i].link}`;
            createA.innerText=`${quoteArray[i].title}`;
        const result=quoteArray[i].link.includes(".html");
        if(result){
            createA.target="_self";
        }else{
            createA.target="_blank";
        }           
        div.appendChild(createA);
        textblocksGrid.prepend(div);
        i=i+1;
    };
}

listPush();
console.log(quoteArray.length);