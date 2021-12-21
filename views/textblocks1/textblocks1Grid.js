const textblocksGrid=document.getElementById("textblocksGrid");

const textblocksArray = [
    {
        title: "작품의 죽음(html)",
        link: "../../text/textblocks1/death_of_artwork.html",
    },
    {
        title: "예술과 개념(html)",
        link: "../../text/textblocks1/art_and_concept.html",
    },
    {
        title: "예술이론의 언어",
        link: "https://donghwilee.com/13660",
    },
    {
        title: "예술이론의 언어2: 언어를 선택함",
        link: "https://donghwilee.com/13721",
    },
    {
        title: "예술이론의 언어3/3: 사변의 검증",
        link: "https://donghwilee.com/13751",
    },
    {
        title: "예술이론의 순환성 (분석미학 비판?)",
        link: "https://donghwilee.com/13826",
    },
    {
        title: "먼지가 뭔지: 이다민의 ‘먼지란 무엇인가’에 또 부쳐",
        link: "https://donghwilee.com/14380",
    },
    {
        title: "[번역] 예술은 게임이다: 왜 중요한 건 애쓰는 일인가",
        link: "https://donghwilee.com/14406",
    },
    {
        title: "예술이론의 이론: '예술이론성'과 언어(postype)",
        link: "https://leetunnel.postype.com/post/11047373",
    },
    {
        title: "예술작품이라는 사적-해석적 존재: 한 가지 댓글에 답변하며(postype)",
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