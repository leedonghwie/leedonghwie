import {quoteArray} from "./quoteArray.js"

const quote=document.getElementById("quote");
const quote_text=document.getElementById("quote_text");
const quote_title=document.getElementById("quote_title");


function arrayPush(){
    let i=Math.floor(Math.random(quoteArray.length)*quoteArray.length);
    quote_text.innerText=`${quoteArray[i].text}`;
    const link = document.createElement('a'); 
    link.href=`${quoteArray[i].link}`;
    link.innerText=`${quoteArray[i].title}`;
    quote_title.appendChild(link);
    console.log((i+1)+"/"+quoteArray.length);
}

arrayPush();