const textblocksGrid=document.getElementById("textblocksGrid");

const textblocksArray = [
    {
        title: "작품의 죽음(html)",
        link: "../../text/textblocks1/death_of_artwork.html",
    },
    {
        title: "예술과 개념(책에 수록됨)",
        link: "../../text/textblocks1/art_and_concept.html",
    },
    {
        title: "[번역] 예술은 게임이다: 왜 중요한 건 (예술과의) 고투인가 (html)",
        link: "../../text/textblocks1/art_is_a_game.html",
    },
    {
        title: "예술이론의 이론: '예술이론성'과 언어(책에 수록됨)",
        link: "https://leetunnel.postype.com/post/11047373",
    },
    {
        title: "예술은 사적이다: 한 가지 댓글에 답변하며(책에 수록됨)",
        link: "https://leetunnel.postype.com/post/11193649",
    },
];

function arrayPush(){
    i=0;
    while(i<textblocksArray.length){
        console.log(textblocksArray[i].title);
        const div=document.createElement("div");
        const createA = document.createElement("a");
            createA.href=`${textblocksArray[i].link}`;
            createA.innerText=`${textblocksArray[i].title}`;
        const result=textblocksArray[i].link.includes(".html");
        if(result){
            createA.target="_self";
        }else{
            createA.target="_blank";
        }           
        div.appendChild(createA);
        textblocksGrid.prepend(div);
        i=i+1;
    };
};
arrayPush();