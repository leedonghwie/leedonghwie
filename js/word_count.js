const para = document.getElementsByTagName("p");

const word_count = () => {
    for(let i=0; i < para.length; i++){
        const word = para[i].textContent.split(" ").length;
        para[i].append(" ["+word+" words]");
    }
}

word_count();