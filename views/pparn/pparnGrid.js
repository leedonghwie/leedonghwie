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
    {
        title: "11.7 (네이버블로그)",
        link: "https://blog.naver.com/moreundaenikan/222561442431",
    },
    {
        title: "일기12.1 (네이버블로그)",
        link: "https://blog.naver.com/moreundaenikan/222583455655",
    },
    {
        title: "12.17 (네이버블로그)",
        link: "https://blog.naver.com/moreundaenikan/222597475393",
    },
    {
        title: "01.08",
        link: "../../text/pparn/220108.html",
    },    
];

function arrayPush(){
    i=0;
    while(i<pparnArray.length){
        console.log(pparnArray[i].title);
        const div=document.createElement("div");
        const createA = document.createElement("a");
            createA.href=`${pparnArray[i].link}`;
            createA.innerText=`${pparnArray[i].title}`;
        const result=pparnArray[i].link.includes(".html");
        if(result){
            createA.target="_self";
        }else{
            createA.target="_blank";
        }           
        div.appendChild(createA);
        pparnGrid.prepend(div);
        i=i+1;
    };
};
arrayPush();