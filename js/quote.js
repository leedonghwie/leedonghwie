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
    {
        text:"제가 여기저기 자기소개에도 썼듯이 텀블벅이라는 회사에서 일을 하고 있는데 4월부로 워크룸 프레스라는 출판사의 편집자로 이직을 하게 되었습니다. 여기서 처음 말하네요. 그래서 2월이 바빴어요. 바쁘고 뭔가가 결정된 뒤에도 회사 쪽에 이렇게 이야기를 해드려야 해서 조심스럽게 이렇게 지내다 보니 녹음을 못한 게 있었습니다.",
        title:"3.19 (오랜만)",
        link:"https://steadio.co/creator/mollumbo/posts/e009b0ea-f5cf-4086-8531-e888dad1c89a",
    },
    {
        text:"북토크 이야기를 더 할까요. 북토크의 전날에 문득 빈손으로 가면 안 되겠다. 이런 생각이 들어서 두 쪽짜리 글을 번역해갔어요. 제가 번역한 책을 쓴 분이 C. 티 응우옌이라는 미국의 교수님인데 그분의 관한 정보가 사람들에게 더 있으면 좋지 않을까 싶어서 그분이 쓴 짧은 글을 또 하나 빠르게 번역해서 가져갔습니다. 인쇄를 해서 나눠드렸어요.",
        title:"2.11 (북토크 후기)",
        link:"https://steadio.co/creator/mollumbo/posts/f206b636-6425-4cd0-83d7-7a11638da053",
    },
    {
        text:"의주가 운전해 주는 차를 타고 다녀왔다. 나도 운전을 해야 하는데라는 생각이 계속 들었다. 언제까지 이렇게 얻어만 타고 다닐 수는 없다. 하지만 운전은...... 특히 고속도로 운전은 너무나 무섭다. 고속도로는 커녕 남부순환로 나가서도 나는 너무 무서웠다. 하지만 해야겠지 할 수 있겠지 그러니까 다들 하는 거겠지",
        title:"3.28",
        link:"https://blog.naver.com/mollumbo/223057521143",
    },
    {
        text:"추상에 관한 멋진 정의를 봤다. '너는 사전을 집어서 아무 페이지나 펼치고 Fraction이라는 단어를 찾아 그에 대한 정의를 읽었다. 단어들은 추상화 같았다. 너는 글자들을 알아봤고, 발음되는 소리대로 그것들을 정렬했지만, 네가 읽던 문장에서 아무런 의미도 찾아볼 수 없었다.' '그는 배경에서 윤곽이 떨어져 나온 사물들처럼 추상적이었다.'(에두아르 르베, 「자살」, 82, 83쪽) 추상적이란, 알아보고 정렬하더라도 의미도 윤곽도 없이 느껴지는 것에 붙이는 이름이다. 마치 죽음의 경우처럼. 혹은 내 경우에는 예술의 경우처럼.",
        title:"3.23",
        link:"https://blog.naver.com/mollumbo/223053666674",
    },
    {
        text:"그러니까'striving'은 분투, 'struggle'은 고투가 됩니다. 좀 낡거나 특수하게 느껴지는 단어이긴 하지만, 단행본을 옮기며 struggle의 명사 용법에 깔끔하게 대응할 번역어가 필요하다고 생각하여 부득이하게 선택했습니다. 이를 포함하여 번역 제안이 있으시면 감사히 듣겠습니다. (페이지 하단에 '제안 보내기'란을 만들어놓았습니다.) \n\n 이 번역문의 공개를 허락해주신 C. 티 응우옌 교수님께 감사드립니다.",
        title:"예술은 게임이다: 왜 중요한 건 (예술과의) 고투인가",
        link:"https://economic-writings.xyz/text/textblocks1/art_is_a_game.html",
    },
    {
        text:"이를 살펴본 이유는, 작품(그리고 작업work) 개념이 언어를 매개로 하는 생산자들 사이에서 이렇게까지 적대시되는 줄을 최근에서야 알았기 때문이다. 이 적대의 이유는 말하는 이들마다 조금씩 다른데, 누구는 개별 작품이 내재적인 완결성을 전제하고 사람들로 하여금 그것이 ‘좋기 때문에 좋다’고 떠들며 그 가치를 동어반복적으로 ‘선취’하게끔 (유혹?)하기 때문이라 하고, 누구는 그것이 사회경제적 환경과 단절된 순수성을 과장하기 때문이라 한다.",
        title:"작품의 죽음",
        link:"https://economic-writings.xyz/text/death_of_artwork.html",
    },
    {
        text:"You see \n/ Jaewon Che\ntranslated by donghwi lee\n\nI vapor away again\nunknowingly a poem,\nI slowly for you to\n\nsee\n\na work only quick but rashest\nmostly by who reads\nEat\nthis fresh bread I bake and\n\nsee\n\nmy piece\nwould you\ntoday\n\n(from what you wan do wit me?, Minumsa, 2021)",
        title:"너는 시",
        link:"https://economic-writings.xyz/text/You_see_chogwa.html",
    },
    {
        text:"친구는 많이 행복해 보였다 안정되어 보였다 친구는 내가 약을 먹고 있다는 사실에 놀랐다 점점 보헤미안이 되어 가는 것 같다고도 말했다 점점 더 작가처럼 살고 있다고 말했다 나는 그렇기도 하고 아니기도 한 것 같아서 아무 말도 하지 않았다 친구와는 내내 화기애애했다 14살 때 함께 감자탕 먹던 친구였다 우리는 열네 살 때부터 감자탕을 같이 먹었다 어떤 축하가 필요할 때 감자탕을 먹었다 이미상 작가의 '많이많이 빨리빨리 말하자'라는 글을 읽고 싶다 많이많이 빨리빨리라는 말 중에서 빨리빨리가 의미하는게 무엇인지 궁금하다 빨리빨리라니 정말 동의할 수 있는 말이다",
        title:"3.16",
        link:"https://blog.naver.com/mollumbo/223046847048",    
    },
    {
        text:"잡담을 잘 하는 사람이면 좋겠다. 잡담의 제왕이 되고 싶다. 실상은 잡담을 좀 하면 말줄임표 뿐이다. 어...... 잡담을 잘 하고 싶다. 잡담을 잘 하면 회사 생활도 훨씬 편할 텐데. 잡담을 잘 하는 사람들이 대단한 것 같다. 다들 나름의 방법이 있는 것 같다. 그런데 나는 방법이 별로 없다.",
        title: "2.28",
        link: "https://blog.naver.com/mollumbo/223030975609",
    },
    {
        text:"화학은 앞서 말했듯 「브레이킹 배드」의 세계관의 토대인데, 「브레이킹 배드」는 화학 바깥의 온갖 사건들을 외면하거나 회피하지 않고 오히려 그것들로 하여금 제왕적 화학자의 내면과 드라마 자체의 근거까지도 침식하게끔 한다. 「브레이킹 배드」에서 우리가 주목해야 하는 것은, 이런 탈화학적 문제가 왜 구성되는지 그리고 우리는 그 문제 앞에 무엇을 느끼는지이다.",
        title:"월터 화이트와 헤어지기: 「브레이킹 배드」 속 제왕적 남성성 너머의 스카일러",
        link: "https://leetunnel.postype.com/post/11320741",
    },
    {
        text: "근데 좀 생각해 보면 너무 바빴던 한 주였던 것 같기도 합니다. 월요일부터 라디오 나간다고 부산을 떨고 장에서도 일이 적지 않았고 출퇴근도 꽤 꽤 소진이 된 출퇴근으로 꽤 소진이 되기도 해서 쉽지 않은 한 주였다고 판단할 수도 있겠습니다. 객관적인 평가가 잘 안 되는데 이렇게 떠들다 보니까 그렇다는 생각이 드네요. 잠을 많이 자서 보충을 하려고 했는데 악몽도 꾸고 중간에 깨기도 하고 그랬던 것 같고요 건강이 아주 미세하게 꺾였다고 볼 수도 있지 않을까 싶습니다. 그래서 생각이 툭툭 끊기는 것 같아요. 생각을 계속할 힘이 부족한 까닭입니다. 그러면 어떻게 해야 되지 모르겠습니다. 이렇게 얘기를 녹음해보니 꽤 힘든 한 주였다는 게 드러나서 좋네요.",
        title: "2.3 (정신상태 자가진단)",
        link: "https://steadio.co/creator/mollumbo/posts/b92e953c-8599-458e-84cf-b1b0ddb9d9fc",
    },
    {
        text: "뭔가 삑구가 날 것 같다 했다 슈박. 오늘 교훈: 모두의 책을 YONCHE하지 말자",
        title: "10.12",
        link: "https://blog.naver.com/mollumbo/222898505659",
    },
    {
        text: "말하자면 예술이론은 경험주의, 즉 이론가의 경험이 곧 독자의 지식이 되는 당연한 메커니즘이 정지하는 이론의 망명지이고, '예술이론은 어렵다'라는 말의 의미가 바로 이것이다. 그러면 예술이론성의 척도는 어디서 찾아야 하나? 바로 언어이다. 예술이론은 이론이기 이전에 '말'이고 '글'이다. 나는 예술이론성의 척도가 예술이론의 내용이 아니라 언어에 있다고 제안한다.",
        title: "『시급하지만 인기는 없는 문제: 예술, 언어, 이론』",
        link: "https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=298349119",
    },
    {
        text: "하지만 아무래도 ‘할리우’의 가장 큰 특징은 글자 그대로 ‘D가 없다’는 점이다. ‘할리우’를 이해하려 할 때 우리는 외면할 수 없다. ‘D’라는 도둑맞은 글자(the purloined letter)를 말이다.",
        title: "도둑 맞은 ‘D’에 관한 세미나 : 《보잭 홀스맨》과 ‘할리우’",
        link: "https://off-magazine.net/TEXT/horseman.html",
    },
    {
        text:"네.. 게임 잘 안해요... 저도... 어... 네 좋지 않다고 생각합니다. (책으로만 공부하시는군요?) 네 그렇죠... 책벌레입니다...",
        title:"국악방송 2023-01-30(월) 문화시대 * 월요초대석 : <게임: 행위성의 예술>",
        link:"https://www.podbbang.com/channels/1786347/episodes/24617407",
    },
    {
        text:"이동휘\n근데 태우가 보고 좋은 걸 느꼈던 것들은 너무 빨리 사라져 버리니까 머릿속에서? \n\n하태우\n그렇기도 하고 사라지니까 그냥 '왜 이렇게 안 좋을까...' 할 때 뭔가 좋은 거를 생각하려고 해 뭔가 잘 안 보이니까. 근데 그게 안 남는 것 같아 잘 그리고 그랬을 때 더 뭔가 왜 밖에 나갈 때보다 혼자 집에 있을 때, 더 뭔가 안으로 파고 들어가면서 막 내 안에서만 생각이 갇히고 하니까.\n\n근데 사진을 찍는 거는, 내가 막 우울하고 저거 징그럽다고 찍지는 않잖아. ‘좋다’ 찍고 ‘좋다’ 찍고. 나는 이제 너무 좋고, ‘좋아 좋아 좋아 좋아’ 좋은 게 막 모여 있어. 그러니까 내 사진 작업은 사실 사진 예술하고는 1차적으로는 상관이 없어. 특히 저런 거[잡지 'vostok' 수록 사진들]의 작업물들과는. (이동휘: 좁은 의미의 예술적인 사진들?) 응, 그러니까 어떤 미적인 뭐 그런 거랑은 1차적으로는 상관이 없어.\n\n그런데 그런 사진들이 어쨌든 남게 되잖아. 컴퓨터에, 카메라에.\n\n그리고 여전히 나는 이제 괜찮은 사람은 아닌 것 같고, 여전히 뭔가 우울할 때가 많고. 여전히 막 가라앉아 있고. 뭐 올라가고 싶은 생각도 별로 없고. 뭐 누가 멀어지면은 ‘그래 멀어져라. 난 어차피 가라앉고 있었어 잠깐 봐서 즐거웠다.’ 이렇게 해버리지.\n\n그런데 저 사진들이 기억이야. 저거를 보니까 ‘근데 이때는 괜찮았지, 이거 되게 좋았다.’ 그렇게 하다 보니까 그냥 이제 ‘좋음이 있었다’라는 희미한 기억이 만들어지는 거지. 그러니까 내 사진을 내가 전부 기억하지 못하니까 무슨 벽화의 파노라마처럼 펼쳐져 있는 건 전혀 아닌데, 저런 것들을 많이 찍고 그걸 다시 보면서 좋아하고, 또 그거를 같이 그 시간에 겪은 사람들한테 나눠주고, 보여주고, 하면서 또 좋고. 그런 기억들이 진짜 희미하게 남는 것 같은 거야. 그래서 결과적으로 내가 이렇게 혼자 갇혀 있더라도 사진이 ‘근데… 안 좋은 것만 있는 거는 아니다’라는 것을 알게 해준다.",
        title:"10.4 (기획의 변, 하태우 인터뷰)",
        link:"https://blog.naver.com/mollumbo/222891878958",
    },
    {
        text: "하지만 필은 (그리고 관객은) 모른다. 피터가 건넨 선물이 사실은 죽음에 이르는 병임을.",
        title:"파워 오브 도그",
        link:"https://blog.naver.com/mollumbo/222589548744",
    },
    {
        text:"▷/6.\n개념에 형태를 귀속시켜 개념을 ‘표현’하려는 시도는 개념을 오해하고 있는 것인지도 모르겠다.",
        title:"Desire as D\n**'들뢰즈에 대한 것은 아닌' 워크샵 3회차 (4회차?) ‘D for Desire’에 들고간 글.",
        link:"https://economic-writings.xyz/text/Desire_as_D.html",
    },
];

function arrayPush(){
    i=Math.floor(Math.random(quoteArray.length)*quoteArray.length);
    quote_text.innerText=`${quoteArray[i].text}`;
    const link = document.createElement('a'); 
    link.href=`${quoteArray[i].link}`;
    link.innerText=`${quoteArray[i].title}`;
    quote_title.appendChild(link);
    console.log((i+1)+"/"+quoteArray.length);
}
arrayPush();