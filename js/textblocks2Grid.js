const textblocksGrid=document.getElementById("textblocksGrid");

const textblocksArray = [
    /*{
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
    },*/
    {
        title: "아도르노 반유대주의론의 감정적 토대(미학)",
        link: "https://aesthetics.jams.or.kr/po/volisse/sjPubsArtiPopView.kci?soceId=INS000001331&artiId=SJ0000000832&sereId=SER000000001&submCnt=2",
    },
    {
        title: "도둑 맞은 D에 관한 세미나 : 보잭 홀스맨과 할리우(웹매거진 OFF)",
        link: "https://off-magazine.net/TEXT/horseman",
    },
    /*{
        title: "「체르노빌」: 한 가지 관찰과 해석",
        link: "https://donghwilee.com/13091",
    },*/
    {
        title: "Desire as D (html)",
        link: "../../text/Desire_as_D.html",
    },
    {
        title: "대상 없음: 현시원의 열한 페이지(colleague)",
        link: "https://colleague.co.kr/forum/view/523629",
    },
    {
        title: "루이ck, sincerely (html)",
        link: "../../text/louis_ck.html",
    },
    {
        title: "월터 화이트와 헤어지기(postype)",
        link: "https://leetunnel.postype.com/post/11320741",
    },
    {
        title: "파워 오브 도그 (네이버 블로그)",
        link: "https://blog.naver.com/mollumbo/222589548744",
    },
    {
        title: "『분더카머』 어려움 (읽기-어려움) (네이버 블로그)",
        link: "https://blog.naver.com/mollumbo/222635223236",
    },
    {
        title: "[번역] You see (너는 시 /최재원)(chogwa.com)",
        link: "../../text/You_see_chogwa.html",
    },
    {
        title: "[단락이없는글] 물은 생각했다 (postype)",
        link: "https://posty.pe/sos67w",
    },
    {
        title: "[단락이없는글] 신분증 (postype)",
        link: "https://posty.pe/277fsk",
    },
    {
        title: "[단락이없는글] 시가바 (postype)",
        link: "https://posty.pe/dk2m67",
    },
    {
        title: "[단락이없는글] 주석 (postype)",
        link: "https://posty.pe/29r9le",
    },
    {
        title: "하양지 [안녕이 오고 있어](노트)(html)",
        link: "../../text/hayang_ji.html",
    },
    {
        title: "마음의 상처 (네이버 블로그)",
        link: "https://blog.naver.com/mollumbo/222689309340",
    },
    {
        title: "이동진 욕하기 (네이버 블로그)",
        link: "https://blog.naver.com/mollumbo/222894319579",
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