const textblocksGrid=document.getElementById("textblocksGrid");

const textblocksArray = [
    {
        title: "‘층간소음’ 없는 방",
        link: "https://donghwilee.com/9275",
    },
    {
        title: "편견과 기질",
        link: "https://donghwilee.com/9519",
    },
    {
        title: "모두안녕...zzz",
        link: "https://donghwilee.com/10417",
    },
    {
        title: "도둑 맞은 ‘D’에 관한 세미나 : 《보잭 홀스맨》과 ‘할리우’(웹매거진 OFF)",
        link: "https://off-magazine.net/TEXT/horseman.html",
    },
    {
        title: "월터 화이트와 헤어지기",
        link: "https://donghwilee.com/12183",
    },
    {
        title: "「체르노빌」: 한 가지 관찰과 해석",
        link: "https://donghwilee.com/13091",
    },
    {
        title: "Desire as D",
        link: "https://donghwilee.com/13945",
    },
    {
        title: "대상 없음: 현시원의 열한 페이지(colleague)",
        link: "https://colleague.co.kr/forum/view/523629",
    },
    {
        title: "루이ck, <sincerely>(html)",
        link: "../../text/textblocks2/louis_ck.html",
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
        div.appendChild(createA);
        textblocksGrid.prepend(div);
        i=i+1;
    };
};
arrayPush();