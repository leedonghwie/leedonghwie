const para = document.getElementsByTagName("p");

/*
const word_count = () => {
    for(let i=0; i < para.length; i++){
        const word = para[i].textContent.split(" ").length;
        const char = para[i].textContent.length;
        para[i].append(" ["+word+" words, "+char+" chrs]");
    }
}

word_count();
*/


let words_count = 0;
let chars_count = 0;
const total_word = () => {
    for(let i=0; i < para.length; i++){
        const word = para[i].textContent.split(" ").length;
        const char = para[i].textContent.length;
        words_count+=word;
        chars_count+=char;         
    }
    const newBr=document.createElement("br");
    para[para.length-1].append(newBr);    
    para[para.length-1].append(" ["+words_count+" words, "+chars_count+" chrs]");
}

total_word();

