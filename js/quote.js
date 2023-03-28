const quote=document.getElementById("quote");
const quote_text=document.getElementById("quote_text");
const quote_title=document.getElementById("quote_title");

const quoteArray = [
    {
        text: "그렇다면 지금까지 살펴본 아도르노의 가설은 타당한가? 이 가설의 실증성―‘정말로’ 혐오는 불안에서 오는지―을 평가하기는 쉽지 않다. 정신분석학의 세부 내용의 실증성을 검토하는 일이 필자의 역량 및 초점을 벗어나기 때문이다",
        title: "아도르노 반유대주의론의 감정적 토대",
        link: "https://aesthetics.jams.or.kr/po/volisse/sjPubsArtiPopView.kci?soceId=INS000001331&artiId=SJ0000000832&sereId=SER000000001&submCnt=2"
    },
    {
        text:"그러므로 ‘D’의 도난은 이 작품에서 내내 반복되며, 그러한 반복의 원점 a0에 놓인 것은 도둑 맞은 ‘D’의 세계 즉 ‘할리우’이다. 그러므로 우리는 S1 E6의 제목처럼 말할 수 있다—‘우리의 이야기는 D스토리이다.’ 혹은 D스토리는 다름 아닌 《보잭 홀스맨》의 원초적 장면이다.",
        title:"도둑 맞은 ‘D’에 관한 세미나 : 《보잭 홀스맨》과 ‘할리우’",
        link:"https://off-magazine.net/TEXT/horseman",
    },
    {
        text:"그리고 '김감계'라는 음식을 개발했는데, 이 부분이 중요하다. 김감계는 날계란에 적신 김에다가 익은 감을 한 조각 싼 뒤에 익혀서 또는 그냥 먹는 음식이다. 내가 꿈에서 개발한 음식인데, 언뜻 생각하기에 괴메뉴인지 아닌지 잘 구별이 안 간다. 김감계라는 이름도 꿈에서 떠올렸다. 김감계, 김감계. 언젠가 진짜로 해먹어볼 수 있으면 좋겠다 김감계.",
        title:"3.14",
        link:"https://blog.naver.com/mollumbo/223044189094",
    },
    {
        text:"근데 나한테 그런 욕하기에 왜 문제가 있냐고 물어본다면... 내가 뭐라고 하겠어요... 하세요... 다만 한마디 내가 속으로만 한다면, 이동진이 어떤 권력이 있어서 그 권력이 대중들에게 악영향을 끼친다 어쩐다 하는 소리는 안 했으면 좋겠다는 것뿐이다. 이동진의 손에 일말의 권력이 있어서 대중이 얻어맞고 있다면, 그건 이동진도 심지어 대중도 아니라 이런 말을 하는 관찰자들이 쥐어주고 휘둘렀다고 호소하는 권력일 뿐이다.",
        title:"10.6 (이동진 욕하기)",
        link:"https://blog.naver.com/mollumbo/222894319579",
    },
];

function arrayPush(){
    i=Math.floor(Math.random(quoteArray.length)*quoteArray.length);
    console.log(Math.random(quoteArray.length)*quoteArray.length);
    quote_text.innerText=`${quoteArray[i].text}`;
    const link = document.createElement('a'); 
    link.href=`${quoteArray[i].link}`;
    link.innerText=`${quoteArray[i].title}`;
    quote_title.appendChild(link);
}
arrayPush();