const textblocksGrid=document.getElementById("textblocksGrid");

const textblocksArray = [
    {
        title: "작품의 죽음(html)",
        link: "../../text/death_of_artwork.html",
    },
    {
        title: "예술과 개념(책에 수록됨)",
        link: "../../text/art_and_concept.html",
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
    {
        title: "사진작가 하태우와의 대화: 하태우가 『시급하지만 인기는 없는 문제: 예술·언어·이론』 속 이동휘의 글에 대해 보충 설명을 요구함",
        link: "../../text/Talk_with_Haboksun.html",
    },
    {
        title: "11.1 (배열 n)",
        link: "https://blog.naver.com/mollumbo/222917063130",
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