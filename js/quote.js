const quote=document.getElementById("quote");
const quote_text=document.getElementById("quote_text");
const quote_title=document.getElementById("quote_title");

const quoteArray = [
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
    {
        text:"또 『게임: 행위성의 예술』은 빠르고 가볍다. 게임의 진면모를 보이겠다는 고전적인 목표를 견지하는 반면에 '모든 것을 설명하겠다'며 달려들지 않는다. 모든 것을 설명하기 전까지 용건을 말 안하고 버티면 독자는 소진된다. '총정리'는 독자에게 별로 줄 것 없는 '훈장님들'이 생각하고 대화하기를 회피할 때 사용하는 핑계일 따름이다.",
        title: "『게임: 행위성의 예술』 역자 후기",
        link: "https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=308296834&start=slayer",
    },
    {
        text:"이건 일종의 공고화 작업이다. 왜냐면 그가 말하는 '마음의 상처'는 어떤 최종심급을 의미하기 때문이다. 좋게 들어주면 상처를 존중해달라는 거지만, 좀 꼬아서 듣자면 이젠 나도 이유를 모르겠으니 반박하지 말라는 것이다. 나도 이유는 모르지만 내말대로 하라는 말이다.",
        title: "마음의 상처",
        link: "https://blog.naver.com/mollumbo/222689309340",
    },
    {
        text:"나는 무언가를 그 자체로 좋다고 말하는 편이 아닌 것 같다. 싫다는 느낌과 달리 좋다는 느낌은 그렇게 직관적이지가 않다. (싫다는 느낌은 직관적이고 싫다고 말하는 일은 그 자체로 유쾌하다. 나를 대학원까지 가게 한 건 무언가를 보고 '하여튼 개좆같다'라고 말하는 순전한 기쁨이었다.)",
        title:"10.4 (기획의 변, 하태우 인터뷰)",
        link:"https://blog.naver.com/mollumbo/222891878958",
    },
    {
        text:"그런데 이 책이 “깊은 책”일 수가 있나? 그렇지 않다. 적어도 출판사 소개글과 추천사에서는 그렇게 말하고 있지 않다. 그냥 이 책은 ‘완결이 되지 않는’, ‘분류 되지 않는’, ‘무한히 (어딘가에) 다가서는’ 책이다. 그러니까 과정 중에 있는 책이다. 과정 중에 있는 것이 깊을 수는 없다. 물론 깊은 과정이 있다고 할 수도 있지만, 그 깊이는 무얼 기준으로 재는가? 모른다. 왜냐면 다 모르기 때문이다. 아니 어디에 ‘도착’했는지를 알아야 깊이를 잴 거 아닌가. 그런데 도착을 안했다고 하는데 대체 무얼로 어느 깊이에 도달했는지를 재겠는가?",
        title:"『분더카머』 어려움 (읽기-어려움)",
        link:"https://blog.naver.com/mollumbo/222635223236",
    },
    {
        text:"루이ck는 아무도 들으려하지 않을 말—변명—을 듣게 만든다. 이 공연 전체가 그의 things를 둘러싼 심심한(sincerely) 변명이었다면, 찌질하거나 잘해봐야 무의미한 그 장르 내에서는 최상의 결과물이다. 당연히 이건 윤리적인 판단이 아니지만,",
        title:"루이 ck, <sincerely>(2020)",
        link:"https://economic-writings.xyz/text/louis_ck.html",
    },
    {
        text:"생각은 대상의 자리를 향한다. 이 사고 습관을 계속 의심하게 된다. 욕망은 대상을 ‘갖는’ 듯하지만 사실 대상을 정면으로 향하기보다 그것을 우회하여 다시 주체를 관통한다. 그런데 욕망이 그렇게 우회하려는 대상이 만약 ‘대상 없음’ 자체라면 어떨까. ‘대상으로서 대상 없음’이라는 이러한 사태에 귀찮음, 무관심, 무기력증, 무성애(?!)라는 (문자 그대로) 부정적인 이름을 부여하지 않은 채로, 그로부터 어떤 적극적인 의미를 찾고자 시도할 수 있을까?",
        title:"대상 없음: 현시원의 열한 페이지",
        link:"https://colleague.co.kr/forum/view/523629",        
    },
];

function arrayPush(){
    i=Math.floor(Math.random(quoteArray.length)*quoteArray.length);
    quote_text.innerText=`${quoteArray[i].text}`;
    const link = document.createElement('a'); 
    link.href=`${quoteArray[i].link}`;
    link.innerText=`${quoteArray[i].title}`;
    quote_title.appendChild(link);
}
arrayPush();