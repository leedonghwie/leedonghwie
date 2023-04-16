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
        text:"이 '욕하기'의 참여자들은 이동진을 스루하지 못한다/스루하지 않는다. 그리고 그럼으로써 이동진에게 (나는 별로 있지 않다고 생각하는) 권력을 자기들 스스로 부여하고 그 권력이 자기를 한대 후려치기라도 한양 드러누워서 '저 못된노무 새끼를 좀 보소' 하고 호소한다.\n\n(이동진이 가진 것이 '권력'으로 뭉뚱그리는 순간 이동진이 가진 것이 곧 나 혹은 '우리'가 갖지 못한 것이 되는데, 나는 그렇게 생각하지 않는다. 이동진이 나에게 무엇을 뺏었나? 누가 유명해지면 그게 자동으로 권력이 되나? 난 그렇게 생각하지 않는다. 이동진과 유명인들이 가지고 있는 게 많지만 그걸 '권력'이라고 추상화할 필요를 나는 못 느낀다. 그런 추상화는 외적인 필요에 의해서만 수행될 뿐이라고 생각한다. 그 권력은 인정하면 생기고 부정하면 무화된다.)\n\n근데 정작 나는 저런 '이동진 욕하기' 게임을 하지 말라고 한 적이 없다. (그래요 이건 게임입니다. 예전에 관악구 카페에서 만난 나원영 씨가 '악틱 몽키즈 욕하기'가 일종의 게임이라고 한 것처럼요.) 나는 그냥 그런 욕하기 게임을 할거면, 욕하기 게임을 하면 된다고 생각한다. 사람들은 유명인을 잘 욕한다. 이 게임은 유구한 게임이다.\n\n근데 나한테 그런 욕하기에 왜 문제가 있냐고 물어본다면... 내가 뭐라고 하겠어요... 하세요... 다만 한마디 내가 속으로만 한다면, 이동진이 어떤 권력이 있어서 그 권력이 대중들에게 악영향을 끼친다 어쩐다 하는 소리는 안 했으면 좋겠다는 것뿐이다. 이동진의 손에 일말의 권력이 있어서 대중이 얻어맞고 있다면, 그건 이동진도 심지어 대중도 아니라 이런 말을 하는 관찰자들이 쥐어주고 휘둘렀다고 호소하는 권력일 뿐이다.",
        title:"10.6 (이동진 욕하기)",
        link:"https://blog.naver.com/mollumbo/222894319579",
    },
    {
        text:"또 『게임: 행위성의 예술』은 빠르고 가볍다. 게임의 진면모를 보이겠다는 고전적인 목표를 견지하는 반면에 '모든 것을 설명하겠다'며 달려들지 않는다. 모든 것을 설명하기 전까지 용건을 말 안하고 버티면 독자는 소진된다. '총정리'는 독자에게 별로 줄 것 없는 '훈장님들'이 생각하고 대화하기를 회피할 때 사용하는 핑계일 따름이다.",
        title: "「역자 후기」, 『게임: 행위성의 예술』",
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
        text:"추상에 관한 멋진 정의를 봤다. '너는 사전을 집어서 아무 페이지나 펼치고 Fraction이라는 단어를 찾아 그에 대한 정의를 읽었다. 단어들은 추상화 같았다. 너는 글자들을 알아봤고, 발음되는 소리대로 그것들을 정렬했지만, 네가 읽던 문장에서 아무런 의미도 찾아볼 수 없었다.' '그는 배경에서 윤곽이 떨어져 나온 사물들처럼 추상적이었다.'(에두아르 르베, 『자살』, 82, 83쪽) 추상적이란, 알아보고 정렬하더라도 의미도 윤곽도 없이 느껴지는 것에 붙이는 이름이다. 마치 죽음의 경우처럼. 혹은 내 경우에는 예술의 경우처럼.",
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
        text:"You see \nby Jaewon Che\ntr. donghwi lee\n\nI vapor away again\nunknowingly a poem,\nI slowly for you to\n\nsee\n\na work only quick but rashest\nmostly by who reads\nEat\nthis fresh bread I bake and\n\nsee\n\nmy piece\nwould you\ntoday\n\n(from what you wan do wit me?, Minumsa, 2021)",
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
        text: "예술이론가의 입장에서 예술가, 예술작품 등을 포함한 예술 제도는 해석의 대상이다. 그리고 「예술은 사적이다」에서 말했듯이 그것들은 이 예술이론가 개인에게 사적으로만 존재한다고 할 수 있다. 그렇기 때문에 예술이론가의 해석은 아무리 보편타당한 말을 오래 한다고 해도, 언젠가는 사적 대상에 대한 개인적 해석을 포함하게 된다. 거기서 예술이론가가 보고 듣고 지각하는 것이 돌출한다. 이론가를 제외한 독자는 이 돌출부 앞에 멈춰 선다. 이론가가 아무리 독촉해도, 독자는 이 돌출부를 한동안 응시해야 한다. 독자 개인은 이론가 개인이 아니기 때문에 해석을 이해하는 데 시간이 걸린다. 이는 뉴턴의 중력과 아인슈타인의 빛을 이해하는 이론적인 노력과는 다르다. 예술이론의 근거 따위야 소설가 정지돈의 말처럼 \"어쩌면 영원히 제쳐둘지도\" 모른다.\n말하자면 예술이론은 경험주의, 즉 이론가의 경험이 곧 독자의 지식이 되는 당연한 메커니즘이 정지하는 이론의 망명지이고, '예술이론은 어렵다'라는 말의 의미가 바로 이것이다. 그러면 예술이론성의 척도는 어디서 찾아야 하나? 바로 언어이다. 예술이론은 이론이기 이전에 '말'이고 '글'이다. 나는 예술이론성의 척도가 예술이론의 내용이 아니라 언어에 있다고 제안한다.",
        title: "「예술이론, 예술이론성, 언어」, 『시급하지만 인기는 없는 문제: 예술, 언어, 이론』",
        link: "https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=298349119",
    },
    {
        text: "하지만 아무래도 ‘할리우’의 가장 큰 특징은 글자 그대로 ‘D가 없다’는 점이다. ‘할리우’를 이해하려 할 때 우리는 외면할 수 없다. ‘D’라는 도둑맞은 글자(the purloined letter)를 말이다. \n\n 간판 ’D’가 도둑맞는 것은 첫 번째 시즌에서이다. 금방 제자리로 돌아올 듯하던 ‘D’는 그것을 운반하던 헬리콥터가 추락하는 바람에 아예 파괴된다. 그렇게 간판 ‘D’는 쭉 없는 채로 남아있다가, 마지막 시즌 최종화에 가서야 복원된다. 그런데 베일을 걷어보니 웬걸, 복원된 간판은 ‘D’가 아니라 ‘B’이다(\“Hollywoo…B?!\”). 그러니 ‘D’는 돌아오지 않고 ‘할리우’는 여전히 ‘할리우’이다.\n\n한편, 보잭은 이와 무슨 상관인가? 보잭은 바로 할리우드에게서 D를 훔친 자(robber)이면서도 또 다른 '할리우’ 라이벌에게 다시 D를 도둑맞은 자(loser)이다. 달리 말해 보잭은 할리우드를 되돌릴 수 없이 훼손함으로써 ‘할리우’를 창조하고 영속화시킨 장본인이다.",
        title: "도둑 맞은 ‘D’에 관한 세미나 : 《보잭 홀스맨》과 ‘할리우’",
        link: "https://off-magazine.net/TEXT/horseman.html",
    },
    {
        text:"네.. 게임 잘 안해요... 저도... 어... 네 좋지 않다고 생각합니다. (책으로만 공부하시는군요?) 네 그렇죠... 책벌레입니다...",
        title:"국악방송 2023-01-30(월) 문화시대 * 월요초대석 : <게임: 행위성의 예술>",
        link:"https://www.podbbang.com/channels/1786347/episodes/24617407",
    },
    {
        text:"이동휘\n근데 태우가 보고 좋은 걸 느꼈던 것들은 너무 빨리 사라져 버리니까 머릿속에서? \n\n하태우\n그렇기도 하고 사라지니까 그냥 '왜 이렇게 안 좋을까...' 할 때 뭔가 좋은 거를 생각하려고 해 뭔가 잘 안 보이니까. 근데 그게 안 남는 것 같아 잘 그리고 그랬을 때 더 뭔가 왜 밖에 나갈 때보다 혼자 집에 있을 때, 더 뭔가 안으로 파고 들어가면서 막 내 안에서만 생각이 갇히고 하니까.\n\n근데 사진을 찍는 거는, 내가 막 우울하고 저거 징그럽다고 찍지는 않잖아. ‘좋다’ 찍고 ‘좋다’ 찍고. 나는 이제 너무 좋고, ‘좋아 좋아 좋아 좋아’ 좋은 게 막 모여 있어. 그러니까 내 사진 작업은 사실 사진 예술하고는 1차적으로는 상관이 없어. 특히 저런 거[잡지 『vostok』 수록 사진들]의 작업물들과는. (이동휘: 좁은 의미의 예술적인 사진들?) 응, 그러니까 어떤 미적인 뭐 그런 거랑은 1차적으로는 상관이 없어.\n\n그런데 그런 사진들이 어쨌든 남게 되잖아. 컴퓨터에, 카메라에.\n\n그리고 여전히 나는 이제 괜찮은 사람은 아닌 것 같고, 여전히 뭔가 우울할 때가 많고. 여전히 막 가라앉아 있고. 뭐 올라가고 싶은 생각도 별로 없고. 뭐 누가 멀어지면은 ‘그래 멀어져라. 난 어차피 가라앉고 있었어 잠깐 봐서 즐거웠다.’ 이렇게 해버리지.\n\n그런데 저 사진들이 기억이야. 저거를 보니까 ‘근데 이때는 괜찮았지, 이거 되게 좋았다.’ 그렇게 하다 보니까 그냥 이제 ‘좋음이 있었다’라는 희미한 기억이 만들어지는 거지. 그러니까 내 사진을 내가 전부 기억하지 못하니까 무슨 벽화의 파노라마처럼 펼쳐져 있는 건 전혀 아닌데, 저런 것들을 많이 찍고 그걸 다시 보면서 좋아하고, 또 그거를 같이 그 시간에 겪은 사람들한테 나눠주고, 보여주고, 하면서 또 좋고. 그런 기억들이 진짜 희미하게 남는 것 같은 거야. 그래서 결과적으로 내가 이렇게 혼자 갇혀 있더라도 사진이 ‘근데… 안 좋은 것만 있는 거는 아니다’라는 것을 알게 해준다.",
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
        title:"Desire as D\n(워크숍 《들뢰즈에 대한 것은 아닌》 ‘D for Desire’에서)",
        link:"https://economic-writings.xyz/text/Desire_as_D.html",
    },
    {
        text:"물은 생각했다\n\n얼어가면서\n\n아\n나는\n\n흐를\n수\n\n있\n\n었\n구나!",
        title:"물은 생각했다",
        link:"https://leetunnel.postype.com/post/12271801",
    },
    {
        text: "얼마간 검토 끝에 8월에 출간 결정이 내려졌다. 판권 계약이 완료된 10월에 나도 계약서를 쓰러 출판사 사무실(당시 창성동)에 갔다.",
        title: "8.8 (번역작업기2)",
        link: "https://blog.naver.com/mollumbo/222843416687",
    },
    {
        text:"아까 가수 노을의 2011년 [그리워 그리워]라는 노래를 듣는데 슬이 '가사가 이상한데?' 그랬다. 맨 마지막 가사가 '정말 널 잊고 싶지 않아서 / 널 다시 붙잡고 싶어서 / 지금 너무나 / 난 니가 그리워'인데, '보고 싶어서 붙잡고 싶어서'라고 했으면 그다음엔 '그래서 뭔가를 했다'로 끝이 나야지, '그래서 너무 그리워'가 뭔 소리냐는 거다. 정말 그때부터 이 노래가 별 뾰족한 의욕 없는 자아도취처럼 들리기 시작했고 다시 돌아갈 수 없다.",
        title:"5.16",
        link:"https://blog.naver.com/mollumbo/222735114232",
    },
    {
        text:"또 회고해야 할 부분이 있나\n올해는 일기를 많이 썼어요. 작년도 많이 썼겠지만 올해는 70편이 넘는 일기를 썼고 녹음은 30편 정도 했죠. 뭔가를 만드는 일은 열심히 한 해인 것 같아요.\n그리고 책을 열심히 읽지는 않았던 또 한 해였습니다. 독서를 하는 것을 즐기기가 쉽지 않더라고요 최근에는. 부피도 많이 차지하고 필요한 책이 손에는 있는 경우가 또 많지가 않아서. 그래도 뭔가를 계속 읽고 보고 하는 일은 멈추지 않기는 했던 것 같아요. 그 작품들을 기억하지는 않지만.\n그러다 보니까 뭐 올해의 작품 이런 것은 잘 꼽기가 어려운데 하나 꼽자면 노래 음반 얼마 전에 말했던 악틱 몽키스의 신보 [더 카]를 지금까지도 즐겁게 듣고 있습니다. 아름다운 음반이에요.",
        title:"12.28 (회고)",
        link:"https://steadio.co/creator/mollumbo/posts/2cdcf5f2-f8dc-406f-b6f4-13f356d10e13",
    },
    {
        text:"홍상수 영화는 카메라 워크가 없다시피 해요. 뭐 당연히 알겠지만 아시는 분들은 알겠지만 보통 촬영을 한다 그러면은 배우를 이 각도에서도 찍고 있고 저 각도에서도 찍고 있고가까이에서 찍고 있고 멀리서도 찍고 있고하여간 그래도 카메라가 여러 대가 동시에 그 사람들을 찍잖아요. 그리고 그걸 번갈아서 이렇게 보여줌으로써 입체감을 느끼게 하는데,홍상수 영화에는 입체감이 없어요. 왜냐하면 카메라가 하나거든요. 한 신에 카메라 하나. 그게 약간 고집인 것 같아요. 특징, 특징이죠.  한 신에 카메라 시점이 하나. 그래서 입체감을 빼는 거죠. 그냥 배우가 있고 카메라 하나가 그 배우를 쳐다보고 그 카메라로만. 줌을 당기기도 하지만 하여간에 일단 카메라 하나. 그 하나로만 쳐다본다는 것에 대해서 좀 생각을 좀 했습니다.  종종 생각을 해요. 왜 하나로만 볼까 왜는 모르겠고 그냥 편할 것 같아요. 촬영하는 게 편할 것 같아요. 한 명만 있으면 되니까. 카메라 하는 사람. 뭘 찍든, 대화 신을 찍든 이동하는 신을 찍든 도착하는 걸 찍든 출발하는 걸 찍든 둘이 뽀뽀하는 걸 찍든 자는 걸 찍든 사물을 찍든 사람을 찍든 풍경을 찍든 그냥 하나로만 찍는 거 같아요. 일단은 그 점이 제일 눈에 남는 것 같아요.  근데 그러다 보니까 카메라가 여러 대 있으면 이게 거꾸로 카메라가 무슨 생각하는지는 별로 안 중요한데, 카메라가 하나니까 카메라는 뭔 생각을 할까, 카메라는 저걸 쳐다보면서 뭔 생각을 할까 이런 생각이 좀 들더라고요 김상경을 바라보는 카메라 춘천에 있는 김상경 경주에 내려온 김상경 다 카메라가 한 대가 걔를 김상경을 계속 쫓아다니는 것 같고 그러면은 카메라는 여기까지 따라오는데 피곤했겠다.  카메라가 먼저 가서 이걸 찍느라 피곤했겠다.  이런 생각이 좀 들어요. 그러니까 카메라맨에 대한 생각이 좀 그런 의미에서 좋은 영화라고 하는 건가 뭔가 영화는 카메라로 찍는다 이런 얘기를 하잖아요.  (그럼 카메라로 찍지 뭐를 숟가락으로 찍나) 근데 그 말이 가진 의미가 약간 홍상수 영화에서 드러나는 게 아닐까 그런 생각이 들었습니다.",
        title:"12.9(즐거운일, 또홍상수 등)",
        link:"https://steadio.co/creator/mollumbo/posts/175ad99a-3572-4658-a653-b66111a129bd",
    },
    {
        text:"책 말고는 뭘 하고 지내지 영화 [페일 블루 아이]라는 넷플릭스 영화를 최근에 봤습니다. 19세기 배경, 미국을 배경으로 한 범죄 수사 영화인데, 크리스천 베일이 주연이고 그 상대역으로 해리 포터의 두들리 더즐리로, 더즐리 두들린인가, 나왔던 해리 멜링이 열연합니다. 해리 멜링은 참 잘자란 것 같아요. 어떻게 두들리에서 애드거 엘런 포로 성장했는지 신기합니다. 물론 그도 이제 30대 중반의 원숙한 배우가 되었습니다. 오히려 해리 포터보다 좀 더 깊이 있는 배우가 된 게 아닌가 싶은데 연기를 참 잘하고 영화가 19세기 미국의 겨울 육군사관학교 의 분위기를 아주 멋지게 담아내고 있습니다. 좋아하는 장면은 해리 멜링이 연기하는 에드거 앨런 포가 처음으로 범죄를 수사하러 온 크리스천 베일을 만나고 그에게 접근하는 다짜고짜 접근하는 장면입니다. 말을 너무 맛깔나게 해요. 그 약간 찐따 같은 말투로 찐따력을 발휘하면서 접근합니다. 그렇게 기억에 남는 찐따들이 인생의 찐따들이 좀 있거든요. 내 인생의 찐따들. 제가 찐따가 아니라는 건 아니지만. 저는 찐따들과 잘 어울렸거든요. 이렇게 말해도 되나. 그런 쿨가이들이랑은 잘 못 어울렸습니다. 쿨가이들은 너무 쿨해요. 찐따들이 마음이 편합니다.",
        title:"1.14 (페일 블루 아이)",
        link:"https://steadio.co/creator/mollumbo/posts/b84c8985-f9ab-493b-af17-123232c0ea9f",
    },
    {
        text:"일기는 내 상념을 시간 순서대로 늘어놓기 위해서 씁니다. 그러니까 영양가는 사실 중요한 요소가 아니죠. 영양가는 없을수록, 영양가는 없을수록 이 활동 목표에 더 적합해요. 제가 하는 빠른 일기의 창작 목표에 영양가는 오히려 좀 핸디캡입니다 핸디캡. 그러니까 정확하게는 '영양가에 집착하는 마음'이 핸디캡이에요. 그러니까 쓸 데가 없어야 돼요 이 일기는 쓸 데가 없을수록 기획 의도에 더 적합합니다. 쓸 데가 없어야 어떤 듣는 사람, 아니면 말하는 저로 하여금 어떤 선행하는 지식을 가지고 있어야 한다는 혹은 선행하는 배경을 공유해야 한다는 강박을 내려놓게 할 수가 있지요. 왜냐하면 뭔가 영양가가 있으려면 토양이 있어야 되고 그 토양을 듣는 사람들이 공유하고 있으리라는 믿음을, 믿음이 필요로 하거든요. 그것은 청자를 조금 어느 정도는 소외시키는 면이 있는 것 같아요. 저 자신도 그렇고. 지금 현재 듣고 있는 사람 지금 이 자리에서 듣고 있는 사람들이 손발을 비우고 들을 수 있으려면 최대한 아무런 아무런 조건이나 기대가 없어야 한다고 생각하는 편입니다. 그래야 가장 예상하기 어려운 결과물이 나올 수 있다고 생각하거든요.",
        title:"12.22 (즉흥적인 일기 등)",
        link:"https://steadio.co/creator/mollumbo/posts/6c3341d9-3417-497b-a8b4-759969c0c92f",
    },
    {
        text:"어제 밤에 충동적으로 치킨을 시켜먹었다. 미친 사람 같았다. 갑자기 술마시다가 배고프다고 주문을 갑자기 확 해버렸다. 후라이드치킨 시켰는데 진짜 한시간 걸려서 왔다. 그런데 그 한시간 사이에 배가 불러졌다 왜냐면 그 전부터 뭘 잘 처먹고 있었기 때문이다. 그래서 치킨이 온 뒤에는 이미 정신이 질려버렸는데 뭔가 입끝에서 바삭바삭하니까 막 먹었다. 콜라가 왔는데 위스키콕인가 그 예전에 엄살원에서 제임슨으로 먹던 게 생각나서 그것도 만들어서 먹었다. 집에 레몬즙도 얼려놓은 게 있어서 넣어서 먹었다. 그리고 3시반까지 못잤다 소화안돼서 고생했다. 힘들어하면서 언젠가 또 이럴 미래의 나한테 보내는 영상편지도 찍었다. 요새 스트레스도 많이 받았고 몸도 차고 운동도 안하고 운동에 갔지만 추웠고… 하여간 몸이 안 좋아서인지 뭔지 소화가 안되어서 난리 피우다가 3시 넘어서야 잤다. 그렇게 깨서 점심도 또 대충 먹고……. ",
        title:"1. 27.",
        link:"https://blog.naver.com/mollumbo/222632974357",
    },
    {
        text:"끝이 다가오기에 원저자와 두 가지 사안으로 메일을 주고받았다. 첫째 사안은 오타 수정이었다. 오타 수정 관련 대화는 이게 사실 두 번째이다. 사소한 오타와 오기들에 대해 모두 수정 승인을 받았다. 둘째는 전에 올린 「예술은 게임이다 Art is a Game」의 번역문에 대해 포스팅 허가를 구했다. 일단 9개월 전에 허락없이 번역하고 올린 것에 먼저 코박고 사죄를 표했다. 저작권 위반으로 인터폴에 체포되어 미국으로 압송되는 건가 하고 떨었는데 다행히 흔쾌히 허락을 해주셨다.",
        title:"2.22",
        link:"https://blog.naver.com/mollumbo/222655186650",
    },
    {
        text:"\"아트는 안돼\n아트는 노노노\n아트하면 안돼\"",
        title:"4.17",
        link:"https://blog.naver.com/mollumbo/222703447225",
    },
    {
        text:"이렇게 예술이론의 어려움은 그 자체로 비난을 사거나(이동진 한줄평의 경우) 혹은 시스템의 조정을 일으키는(분석미학의 경우) 문제적인 현상이다. 그러나 개인들의 독서 상황만 놓고 볼 때, 예술이론에 대해 어렵다, 어렵다 말하는 것은 그저 초심자의 참을성 없는 불평으로만 치부되곤 한다. 이론으로 가는 길은 당연히 어렵고 그러니 걸을 수 있는 자가 걸어갈 뿐 누구도 불평할 필요는 없다면서 말이다.\n\n그런데 예술이론이 어렵다는 것을 그냥 자연스러운 부대 현상처럼 받아들이는 대신 예술이론의 핵심에 가까운 무엇이라고 생각해 보는 것은 어떨까. 예술이론의 '난해함'이 혹시 예술이론에 관한 어떤 중요한 무엇을 말해줄 수는 없을까? 그 불평이 기어코 예술까지도 이론화해버리는 인간의 정신에 접근할 가장 일차적인 단서일 수도 있지 않겠는가. 마치 프로이트가 농담이나 말실수 같은 사소한 현상에서부터 개인의 무의식에 접근할 길을 찾았던 것처럼 말이다. 내가 예술이론 전체에 대해서 가장 오래, 진지하게 느껴온 감상은 그것의 '어려움'이다. 나 같은 사람이 더러 있다면 그것에 한번 주목할 만하지 않겠는가?\n\n한번, 예술이론이 어려운 이유를 잠시 생각해 보자. 이때 '어려움'이란 말하자면 '그것이 합당하다고 독자가 즉각 확신할 수가 없음'을 가리킨다. 그러니까 예술이론이 어렵다는 것은, 그 독자인 내가 어떤 이유에서건 그것이 정말 그러한지 아닌지를 당장 확답할 수가 없음을 말한다.",
        title:"「이토록 어려운 예술이론」, 『시급하지만 인기는 없는 문제: 예술, 언어, 이론』",
        link:"https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=298349119",
    },
    {
        text:"반면, 예술은 사적이다. 이것은 예술작품에 관해서라면 아무리 합의를 시도하더라도 사람마다 그것에 대해 가지는 표상을 동일하게 합의하지 못할 가능성이 언제나 있다는 말이다.",
        title:"「예술은 사적이다」, 『시급하지만 인기는 없는 문제: 예술, 언어, 이론』",
        link:"https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=298349119",
    },
    {
        text:"예술과 개념의 관계 문제는, '예술이 철학보다 열등한가'라는 인기 문제보다도, '예술에 대한 설명과 판단 즉 예술이론이 어떻게 가능한가'라는 더 시급하지만 인기는 없는 문제와 특히 연관된다.",
        title:"「예술과 개념」, 『시급하지만 인기는 없는 문제: 예술, 언어, 이론』",
        link:"https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=298349119",
    },
    {
        text:"어떤 텍스트가 예술이론을 하고 있다는 것을 우리는 어떻게 판단할 것인가? \"이동휘\"라는 텍스트가 예술이론일 수 있는 조건은 무엇인가? 예술이론의 언어들로 이루어진 배열 a를 생성하는 것이 바로 그 조건이다. 해당 텍슽트의 저자가, 자신과 같은 목표를 지니고 있다고 인식하는 서로 다른 텍스트들 즉 예술이론들의 언어들로써 하나의 배열 a를 생성하는 것이 바로 예술이론성의 최소 조건이다. 거꾸로 말해서, 어떤 텍스트가 이러한 예술이론들의 배열을 가지고 있을 때, 독자는 그것이 '예술이론임'을 인지한다.",
        title:"「배열 a [Array, petit, a]」, 『시급하지만 인기는 없는 문제: 예술, 언어, 이론』",
        link:"https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=298349119",
    },
    {
        text:"일반화해서 말해보자면, (1)이론-텍스트의 내용이 그에 상응하는 이론가-텍스트의 형식을 언제나 보장하지는 않습니다. 그렇기에 (2)우리는 이론을 한다는 것이 무엇인지를 규정할 때 이 점을 이론의 환경이자 매체로 포함시켜야 합니다.",
        title:"「독후감 혹은 코미디」, 『시급하지만 인기는 없는 문제: 예술, 언어, 이론』",
        link:"https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=298349119",    
    },
    {
        text:"역주: 이 장에서 'aesthetics'라는 용어는 특정 학문 분과를 가리키기보다, 예술성(artness)과 관련된 구조, 원리, 혹은 작동방식이라는 매우 넓은 의미로 쓰인다. A의 미학이라는 말이 사용되는 경우, 이는 A가 모종의 미적 요소를 산출하는, 또 이로써 A가 어떤 것을 예술로 만드는 구조, 원리, 방식을 가리킨다. 가령, 행위성의 미학이란, 행위성이 모종의 미적 요소를 산출하고 이로써 게임을 예술로 볼 수 있게끔 만드는 구조, 원리, 방식을 의미한다. 앞으로 언급될 '스토리의 미학', '음악의 미학', '뛰어난 체육 퍼포먼스의 미학' 등도 마찬가지로 미적 혹은 예술적 구조, 원리, 방식에 관련지어 넓게 이해하면 될 것이다.",
        title: "『게임: 행위성의 예술』, 각주 39",
        link: "https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=308296834&start=slayer",
    },
    {
        text:"요새는 어느 모임에를 가도 저는 놀림을 받는 역할을 하는 것 같아요. 놀림을 많이 받고 삽니다. 왜 이렇게 놀려... 놀림을 많이 받고 살아요. 사람들이 저를 놀립니다. 뭐 이게 어째대내 저게 저쨌대내 놀림을 받습니다. 놀림을 받아서 좋냐고요? 좋아요. 그래도 놀림을 받는다는 건 사람이 쉽다는 얘기니까. 놀리기 어려운 사람도 있잖아요. 모르겠습니다. 뭐 하여간 놀림을 많이 받고 살아요.",
        title:"4.1 (짧게)",
        link:"https://steadio.co/creator/mollumbo/posts/d241748c-9a93-460e-89e1-b28066975035",
    },
    {
        text:"4월과 피터지게 싸우고, 어떻게든 이겨먹고 싶다.",
        title:"4.2",
        link:"https://blog.naver.com/mollumbo/223062784092",
    },
    {
        text:"오늘은 정말 녹음한 거를 다시 듣기가 두려운 날이네요. 뭐라고 지껄여 놨는지 지금 잘 기억이 안 납니다.",
        title:"4.2 (얼이 빠져서 정신이 약간 나가 있음)",
        link:"https://steadio.co/creator/mollumbo/posts/2f6cd85f-aec4-4cb4-9a8f-f24e23758a35",
    },
    {
        text:"하태우\n아무튼 뒤샹의 변기라든가(네) 모나리자 그림이라든가(네) 그런 것들도 일단 기본적으로 그 물성이 있는 어떤 물체가 있잖아요. (그렇죠) 3차원 평면을 나타낼 수 있는 (그렇죠) 그런데 예술 작품의 해석을 무조건 포함하는 거죠?\n\n이동휘\n어.. 그렇죠\n\n하태우\n그런 것처럼 예술 작품은 그러면 그것의 사물성은 아예 그럼 포함을 안 하는 건가.\n\n이동휘\n약간 이렇게 생각하면 좋을 것 같아. 미술사학자의 일과 비평가의 일이 다르다는 거지. 그러니까 미술사학자의 일과, 감상자의 일이 달라요. 미술사학자는 그 작품이 언제 그려졌는지, 누가 그렸는지, 어떤 배경에서 그렸는지, 그리고 물감은 뭘 썼는지, 크기는 얼마인지, 뭐 재료는 얼마인지, 내가 지금 열거한 것들은 그 예술 작품의 사물적인 성격에 주목한다는 거야. 그게 미술 사학자의 일이에요. 근데 미술사학자는, 그 작품이 좋은 작품인지, 왜 예술 작품이라고 할 수 있는지, 같은 건 신경 쓰지 않아. 그거는 감상자의 일이야. '와 이거 좋다. 왜 좋을까', '와 이거 예술 작품 같다. 왜 예술 작품일까?', '이게 왜 일반적인 내가 평소에 마주치는 일상적인 사물과 왜 다르다고 할 수 있을까', 약간 이런 식의 고민을 하는 거는 감상자의 일이에요. 그러니까 어떻게 보면 미술사학자의 일과 미학자의 일이 다른 거죠. 그러니까 미술사학자가 주목하는 것은 사물로서의 그 대상이고, 후자--감상자 혹은 미학자--가 주목하는 거는 예술 작품, 워크로서의 대상인 거지. 그래서 만약에 그러면 워크로서의 작품에 사물로서의 성질은 전혀 없나? 라고 하면 당연히 아니겠지. 왜냐하면 그 워크라는 것에 사실 사실 아트워크니스라고 내가 말한 그 예술작품성이 당연히 사물로부터 비롯될 수도 있으니까. 그런데 꼭 그것만이 아니라, 그것을 바라보는 감상자의 생각, 감흥, 감상자가 거기에 투사하는 자신의 생각, 혹은 가치... 이런 것이 사실은 미학적인 분석 과정에서는 훨씬 본질적이라는 거죠.",
        title:"사진작가 하태우와의 대화: 하태우가 『시급하지만 인기는 없는 문제: 예술·언어·이론』 속 이동휘의 글에 대해 보충 설명을 요구함",
        link:"https://economic-writings.xyz/text/Talk_with_Haboksun.html",
    },
    {
        text:"하태우\n그럼 나도 물어볼게. 그러면 예를 들면 '헤겔이 변증법을 뭐, 예를 들면, 열었다'. 뭐 이렇게 철학에서 명제를 가져왔다고 치자. 그래 그럼 헤겔도 누군지를 알아야 되고, 헤겔이 누구야?\n\n이동휘\n그렇지\n\n하태우\n변증법으로 뭘 열었다는 거야? (그렇지) 똑같은 거 아니야?\n\n이동휘\n근데 그.. 헤겔이... 하... 헤겔? 헤겔이 무슨 명제를 말했나 모르겠다...",
        title:"사진작가 하태우와의 대화: 하태우가 『시급하지만 인기는 없는 문제: 예술·언어·이론』 속 이동휘의 글에 대해 보충 설명을 요구함",
        link:"https://economic-writings.xyz/text/Talk_with_Haboksun.html",
    },
    {
        text:"이 웹페이지의 서버는 깃허브이다. 원래 주소는 ***.github.io인데 economic-writings.xyz라는 도메인 주소를 걸어두었다. 도메인 주소에서 알 수 있듯이 내 웹페이지 이름은 '경제적 글쓰기'이고 좀 더 쉬운 말로 옮기면 '빠른 일기'이다. 로고에는 두 제목이 겹쳐져 있고, 인디자인으로 만들었다. 제목과 본문과 연락처 텍스트들이 각기 다른 레이어를 차지하고 겹쳐진다. 새로고침 버튼(⟳, 버튼은 마찬가지로 인디자인으로 만든 이미지이다)을 누르면 내가 지금까지 썼던 여러 글들의 인용문들이 랜덤으로 나온다. 인용문, 제목, 새로고침 버튼에는 페이드인 효과가 입혀져 있고, 인용문은 스크롤해서 읽을 수 있다. 인용문이 총 몇 개이고 지금 떠 있는 게 몇 번째 것인지 궁금한 사람(=나)을 위해 크롬이나 사파리 등 브라우저에서 오른쪽 버튼을 클릭하고 '검사'를 눌러서 '콘솔'에 들어가면 해당 정보가 'mm/nn'의 형식으로 나오도록 되어 있다. 글자는 큼직하다. 읽기 쉽게 혹은 글이 아닌 '덩어리'처럼 느껴질 수 있도록 하기 위함이었다. 각 인용문의 아래에는 그 인용문이 포함된 글의 제목과 링크가 덧붙는다. 오른편 새로고침 버튼 아래(아래가 아니라 아래)에는 내 이메일 주소, 'webpage by mollumbo'라는 문구가 뜨고 이중에서 'mollumbo'를 클릭하면 내 트위터(https://twitter.com/leedonghwii)로 이동한다.",
        title:"4.9",
        link:"https://blog.naver.com/mollumbo/223069675578",
    },
    {
        text:"글을 쓰다 보면 나는 참 정돈을 못 하는 사람이구나 이런 생각이 들어요. 요리로 치면 레시피대로 재료 이렇게 요리를 한다기보다 장도 마음 가는 대로 보고 재료 손질도 마음 가는 대로 하고 일단은 그릇에 다 때려 놓고 불을 켜는 스타일이라는 생각이 듭니다. 글도 그렇게 써요. 자료도 내 마음대로 찾고 그 자료에 손질도 마음대로 하고 그리고 일단 다 때려 놓습니다. 머릿속에 그림이 있어서 이렇게 되겠지 하고 불을 켜요. 그렇게 안 되죠 지금 그 단계입니다. 그렇게 안 되더라고요 어떡하지? 백종원 아저씨가 나타났으면 좋겠다. 글쓰기의 백종원... 이런 생각을 합니다. 글쓰기의 백종원이 나타나서 내가 만들고 있는 이 말도 안 되는 볶음 스튜를 어떻게든 구제해 줬으면 좋겠다. 이런 생각을 합니다. 글쓰기의 백종원은 누가 있을까요. 글쓰기에 백종원은 글을 잘 쓰는 사람이라기보다 수습을 잘하는 사람일 것 같아요. 눈앞에 있는 게 무엇이든 수습을 잘하는 사람이... 지금은 그런 수습할 사람이 필요합니다. 그건 나죠, 내가 해야죠. 누가 해주겠습니까...",
        title:"4.10",
        link:"https://steadio.co/creator/mollumbo/posts/c63e935e-daf2-4cde-b433-6b247e59c22d",
    },
    {
        text:"제가 약을 좀 먹는데 그중에 불안증 약이 있습니다. 제가 불안을 좀 느껴요. 근데 불안이 어떤 뭐 덜덜 떨림 이런 걸로 온다기보다, 약간 좀 붕 뜨는 느낌, 어떨 때는 심심함, 어떨 때는 '뭘 할 지 못 찾겠음' 이런 느낌으로. 그리고 그럴 때 '아 이건 불안이구나' 이렇게 생각하고 불안약을 먹어요. 효과가 좀 있습니다. 심심하다는 생각이 사라진다거나 '뭘 할 줄 모르겠다' 이런 생각이 좀 잦아드는 거죠. 그런 약들의 효과를 좀 보는 편이에요. 티는 잘 나지 않는 것 같아요. 그냥 다른 사람이 보기에는. 집 안에서만 좀 주로 그러기 때문에. 불안약을 제가 좀 좋아하는 것 같아요. '심심하다', '이 인생 어떻게 해야 될지 모르겠다' 이런 이상한 기분이 들 때 그것을 다스릴 수 있는 장치가 있다는 게 저에게 좋은 것 같습니다.\n\n재미있게도... 재미있게도? 저의 석사 논문 주제가 불안이었거든요. 그때는 불안에 대해 뭐라고 말했냐면, 불안이... 뭐라고 했는지 완전 까먹었다. 뭐 무슨 다섯 단계를 말했는데... 뭐에서 오고 뭐 뭐에서 오고, 뭐에서 불안이 오고, 그래서 뭐가 어쩌게 되고... 약간 이렇게... 약간 그런 거였는데, 어떤 대상을 사랑하고, 그런데 그 사랑을 들키면 안 되어서 불안이 생기고, 그래서 결국에 그 대상을 혐오하게 된다. 이런 식의... 뇌피셜이죠, 뇌피셜. 뇌피셜이라기보다 그냥 문헌-피셜. 실제로 그런지는 모르고 그냥 문헌이 그렇게 말한다, 약간 이런 이런 내용을 논문으로 썼습니다. 꾸역꾸역 썼어요. 그때도 저도 이게 뇌피셜 혹은 문헌-피셜이라는 걸 몰라서 그거를 썼다기보다, 그걸 알지만 그냥 이거 안 쓸 수가 없어서 그냥 꾸역꾸역 썼던 기억이 납니다. 링크라도 걸어둘까요.\n\n그런 논문을 썼어요. 그래서 그 논문을 고쳐서 다른 데다가 논문을 낸 적이 있는데, 거기서는 '그래도 이게 실제로 그런가? 그렇다고 말할 수는 없다. 그건 알 수 없다.' 이렇게 써놨습니다. 그 논문 게재 심사가 다 완료된 다음에 그 문장을 추가했어요. '이게 실제로 그런가? 그건 모른다. 모르는데도 할 수 있는 말이니까 한다.' 그때는 그거를 '사변'이라고 했거든요, '사변'. 지금은 '추상'이라고 생각하는 것 같아요. 실제로 그런지 모르지만 일단은 할 수 있는 말이니까 하는 거. 그럴 수도 있고 아닐 수도 있지만 일단 말은 그렇다는 거다... 저는 그런 말놀이를 좀 재밌어 하는 편인 것 같아요. 실제로 그게 그런지 아닌지는 중요하지 않다고 보는 편인 것 같고요. 말을 이리저리 갖다 붙일 수 있다면 실제로 그런지는 크게 상관하지 않는 편입니다.\n\n하여간에 세월이 그렇게 흘러서 지금은 내가 불안에 시달리고 있다, 그런 말을 하려고 했습니다.",
        title:"4.10",
        link:"https://steadio.co/creator/mollumbo/posts/c63e935e-daf2-4cde-b433-6b247e59c22d",
    },
    {
        text:"오늘은 일요일. ​아침 일찍 눈이 떠졌다. 아침에는 [비프]를 마저 보았다. 아침에는 글을 써야 하는데, 글을 써야 좋을텐데 그렇게 하지 못했다. '아침에 글 써야 한다'는 작가들의 말과 글이 하나둘씩 눈에 들어오던 차였다. 아침에 글 쓸 수 있으면 썼을텐데 그러지 못했다. 글이라면 어제 지겹게 썼기 때문이다. 어제는 글 또 하나를 완성했다. 완성해서 송고까지 했다. 잘못된 송고처였지만 하여간 한번 했다 송고. 그러니까 이전에 말하던 '수습'을 어제 해냈다. 어제 나는 수습을 하나 했다. 내 글은 언제나 '쌓고 수습한다' 정도의 단계로 써지는 것 같다. 일단 쌓고, 그 다음 수습한다. 쌓고, 수습한다. 쌓고, 수습한다. 수습을 잘 하고 싶었다. 그래서 '글쓰기의 백종원'이 나왔으면 좋겠다 같은 소리도 했다. 다행히 수습이 되었다. 다 수습하고 보니 정말 '수습된 무더기' 같아 보이기는 하지만 일단 수습을 했으니 나 자신을 칭찬하기로 한다. 아침에 보리차를 한잔 마셨다. 정신이 차려지지 않았다. 그래도 이렇게 일기를 찌끄리는 걸 보아서는 힘이 좀 다시 생겼나보다. 글을 쓰면서는 글을 읽었다. 소리 내어서 읽었다. 글이 길다보니 한번 읽는데 40분씩 걸렸다. 40분씩 걸리는 글읽기를 슬이 두 번이나 같이 들어주고, 두번 다 같은 곳에서 잠들었다. 나 같아도 잘 것 같다. 40분씩 남의 글을 읽어야 한다니 그건 정말 고된 노역일 것이다. 나는 더 이상 하지 않는 노역인데 슬이 해주어서 고마웠다. 덕분에 글을 수습할 수 있었다. '잘 수습했다' 라는 말을 하지 않게 된다. '잘 수습'된 것인지는 모르겠다. 하지만 나중에 글이 인쇄되어 나오고 나면 아마 예뻐하게 되지 않을까 싶다. 나는 언제나 그러니까. 이제 힘을 내어서 다음 원고 작업도 시작해야 한다. 원고 작업이 계속 있다. 이렇게 사는 건 정말 쉽지 않은 것 같다. 그냥 '나 원고 작업 합네'하고 말하기만 좋지 정작 하는 것은 너무 힘이 든다. 힘든 일이다. 쥐어짜면 다소 진부하더라도 계속 글즙이 나온다는 것이 신기하기도 하다. 왜 자꾸 쥐어짜게 만드는 거야......",
        title:"4.16",
        link:"https://blog.naver.com/mollumbo/223076136121",
    },
    {
        text:"지난 번에 지하철에서, 교대역이었는데, 3호선-2호선 환승 구간, 환승 구간에서 종이 컵 커피를 뽑아 마시고 있는 사람을 봤습니다. 그 사람이 지하철 휴지통 위에 자기 짐을 올려놓고 종이컵 커피를 마시고 있었어요. 사람들은 2호선이나 3호선으로 움직이고 있었고, 그 사람은 서 있었습니다. 커피를 마시면서요. 그래서 속으로 깔깔깔 웃었습니다. 어떤 사람이 지하철 환승 구간에서 종이컵 커피를 뽑아 마시고 있나, 왜 마시나... 어 안 가나? 누구 기다리나? 누굴 기다리는 게 아마 제일 합리적인 추측이겠죠? 누구를 기다린다. 근데 만약에 누구를 기다리지 않는다면, 그때가 시간이 한 8시 됐거든요, 저녁 8시? 만약에 그 사람이 누구를 기다리는 게 아니라고 생각한다면, 그 사람은 거기서 왜 갑자기 커피를 뽑아 마실 생각을 했을까요? 그게 궁금했습니다. 거기서 왜 그걸 마시고 앉아 있을까, 서 있을까... 음 2호선이나 3호선으로 가야 할 텐데... 2호선에도 아닌 것 같고, 3호선도 아닌 것 같고. 커피를 뽑아 마시고 있었습니다. 배가 고팠나? 당이 떨어졌나? 지하철에서 비상사태가 생기면 오만 이상한 일을 하게 되지요. 저도 한번 지하철에서 그 약 부작용으로 갑자기 체기가 올라와서 뛰어내려서 벤치에 앉아 있었던 적이 있긴 합니다. 하여간에 바쁘게 3호선에서 2호선으로 갈아타러 가는 길에 그 아저씨가 굉장히 눈에 밟혔습니다. 환승 구간에서 종이컵 커피 뽑아 마시고 있던 아저씨. 맛있었을까, 커피 맛있었을까? 맛이 없었겠죠. 그 커피 200원인가 300원 하는 종이컵 커피. 왜 마셨을까...",
        title:"4.16(우물)",
        link:"https://steadio.co/creator/mollumbo/posts/909ca262-fc7e-403f-8088-8488d91dd0f9",
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