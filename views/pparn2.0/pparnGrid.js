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
];

function arrayPush(){
    i=0;
    while(i<pparnArray.length){
        console.log(pparnArray[i].title);
        const div=document.createElement("div");
        const createA = document.createElement("a");
            createA.href=`${pparnArray[i].link}`;
            createA.innerText=`${pparnArray[i].title}`;
        div.appendChild(createA);
        pparnGrid.prepend(div);
        i=i+1;
    };
};
arrayPush();