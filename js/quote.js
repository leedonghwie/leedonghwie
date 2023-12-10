import {quoteArray} from "./quoteArray.js"

const quote=document.getElementById("quote");
const quote_text=document.getElementById("quote_text");
const quote_title=document.getElementById("quote_title");


/*function arrayPush(){
    let i=Math.floor(Math.random(quoteArray.length)*quoteArray.length);
    quote_text.innerText=`${quoteArray[i].text}`;
    const link = document.createElement('a'); 
    link.href=`${quoteArray[i].link}`;
    link.innerText=`${quoteArray[i].title}`;
    quote_title.appendChild(link);
    console.log((i+1)+"/"+quoteArray.length);
}*/
function shuffleArray(array){
    const length=array.length;
    const lengthArray=Array.from({length:length}, (v,i)=>i); 
    let shuffledArray=lengthArray.sort(() => Math.random() - 0.5);
    console.log(shuffledArray);
    let n=0;
    const i=shuffledArray[n];
    quote_text.innerText=`${quoteArray[i].text}`;
        const link = document.createElement('a'); 
            link.href=`${quoteArray[i].link}`;
            link.innerText=`${quoteArray[i].title}`;
    quote_title.appendChild(link);

    while(n<shuffledArray.length){
        const i_1=shuffledArray[n+1]
        const p=document.createElement("p");
        quote.append(p);
        p.innerText=`${quoteArray[i_1].text}`;
        p.className="text";
        const link_1 = document.createElement('a');
            link_1.href=`${quoteArray[i_1].link}`;
            link_1.innerText=`${quoteArray[i_1].title}`;
        const quote_title_1=document.createElement('p');
        quote.append(quote_title_1);
        quote_title_1.appendChild(link_1);
        quote_title_1.className="title";
        n=n+1;
        }
    };


/*
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
*/
shuffleArray(quoteArray);