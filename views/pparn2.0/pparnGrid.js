const pparnGrid = document.getElementById("pparnGrid");

const pparnArray = [
    {
        title: "8.24",
        link: "../../text/pparn/210824.html",
    },
    {
        title: "8.30",
        link: "../../text/pparn/210830.html",
    },
    {
        title: "8.31",
        link: "../../text/pparn/210831.html",
    },
    {
        title: "9.21",
        link: "../../text/pparn/210921.html",
    },
    {
        title: "9.22",
        link: "../../text/pparn/210922.html",
    },
    {
        title: "지금도 하고 있고 아마 겨울 동안 내내 할 것 같은 일들-번역, 세미나, 연구 (네이버블로그)",
        link: "https://blog.naver.com/moreundaenikan/222525728941",
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