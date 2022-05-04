const current_MMDD_HHMM=document.getElementById("current_MMDD_HHMM");

function getTime(){
    const date = new Date();
    const Month = String(date.getMonth()+1).padStart(2,"0");
    const Date1 = String(date.getDate()).padStart(2,"0");
    const Hours = String(date.getHours()).padStart(2,"0");
    const Minutes = String(date.getMinutes()).padStart(2,"0");
    current_MMDD_HHMM.innerText=`${Month}-${Date1} ${Hours}:${Minutes}`;
};

getTime();
setInterval(getTime, 60000);