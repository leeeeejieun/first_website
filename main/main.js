class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

// 텍스트 연결 리스트 생성
const textNode1 = new Node("PLAVE 2024 BIRTHDAY KIT [ MY SWEETIE EUNHO ] INFORMATION");
const textNode2 = new Node(" PLAVE OFFICIAL FANCLUB PLLI 1ST MEMBERSHIP 추가 모집 및 KIT 추가 판매 안내");
const textNode3 = new Node("PLAVE Monthly Scheduler May (+240511 Updated)");

textNode1.next = textNode2;
textNode2.next = textNode3;
textNode3.next = textNode1;

let currentTextNode = textNode1;

// 주소 연결 리스트 생성
const hrefNode1 = new Node("https://weverse.io/plave/notice/19487");
const hrefNode2 = new Node("https://weverse.io/plave/notice/19430");
const hrefNode3 = new Node("https://weverse.io/plave/notice/19099");

hrefNode1.next = hrefNode2;
hrefNode2.next = hrefNode3;
hrefNode3.next = hrefNode1;

let currentHrefNode = hrefNode1;

// 공지사항 변경 메서드
const printNode =  () =>{
  const official = document.getElementById("official");
  official.textContent = currentTextNode.data;  // 텍스트 변경
  official.setAttribute("href",currentHrefNode.data);  // 주소 변경
  // 다음 노드로 포인터 변경
  currentTextNode = currentTextNode.next;        
  currentHrefNode =  currentHrefNode.next;
}

// swiper js
const swiper = new Swiper('.swiper-container', {
  breakpoints: {
    900: {
        slidesPerView: 4,    // 900px 이상일 때
    },
    0: {
        slidesPerView: 1,    // 900px 미만일 때
    },
},
  spaceBetween: 30,         // 슬라이드 사이의 여백 20px으로 지정
  speed : 300,              // 슬라이드 속도 
  loop: true,   
  // nav 화살표 추가                
  navigation: {
      nextEl: ".swiper-button-next",      // 이전 버튼
      prevEl: ".swiper-button-prev",      // 다음 버튼
    },
});


// 공식 & 커버 영상 주소 배열
const officialList = [
  "https://www.youtube.com/embed/FxB6_qaqHlY?",
  "https://www.youtube.com/embed/KCT3ZagR9-M",
  "https://www.youtube.com/embed/c_yCRwh97M8", 
  "https://www.youtube.com/embed/Q_TzqcWKz00", 
  "https://www.youtube.com/embed/cFm8fTRW_so", 
  "https://www.youtube.com/embed/I2qgmAh1em0",
]

const coverList = [
  "https://www.youtube.com/embed/kAAcl3nIe24",
  "https://www.youtube.com/embed/aUw8wfmuKPY",
  "https://www.youtube.com/embed/EajvXC4b3Os",
  "https://www.youtube.com/embed/EpUaeLOLZ_w",
  "https://www.youtube.com/embed/4bkEAGNFrf4",
  "https://www.youtube.com/embed/u1Wp2coFDB4"
]

// 영상 설명 배열
const officialContent = [
  "PLAVE(플레이브) 'WAY 4 LUV' M/V",
  "PLAVE(플레이브) 'Merry PLLIstmas' Special Video",
  "PLAVE(플레이브) '여섯 번째 여름 (The 6th Summer)' M/V",
  "PLAVE (플레이브) '왜요 왜요 왜? (Why?)' | Official Lyric Video",
  "PLAVE (플레이브) 'Pixel world' | Official Lyric Video",
  "PLAVE (플레이브) '기다릴게 (Wait For You)' M/V"
]

const coverContent = [
  "새소년 ‘난춘 (亂春)’ Covered by PLAVE Yejun ",
  "페노메코(PENOMECO) '걘 아니야 Pt.2' Covered by PLAVE Noah",
  "길구봉구 '바람이 불었으면 좋겠어' Covered by PLAVE Bamby",
  "지코(ZICO) '걘 아니야' Covered by PLAVE Eunho",
  "윤종신 '오르막길 (Feat. 정인)' Covered by PLAVE Hamin (Prod. 은호)",
  "DAY6 'Love me or Leave me' Covered by PLAVE Noah & Hamin"
]

/* 영상 변경 기능 */
const transVedio = () =>{
  const currentIframe = $('#video-container');
  let videoTitle, changeList, changeContent;
 
  if(currentIframe.hasClass('official')){
    changeList = coverList; 
    videoTitle = 'COVER SONGS';
    changeContent = coverContent;
  }
  else{
    changeList = officialList; 
    videoTitle = 'OFFICIAL M/V';
    changeContent = officialContent;
  }

  currentIframe.toggleClass('official');

  $('.video').each(function(index){
    $(this).attr('src',changeList[index]);
  });

  setTimeout(()=>{
    $('.video-content').each(function(index){
      $(this).text(changeContent[index]);
    });
  },2000);

  $('.transfer').text(videoTitle);
}

$(function(){
   // 3초마다 printNode 함수 호출(공지사항 반복)
  setInterval(printNode, 3000); 

  // 공식 뮤비 영상(기본 세팅)
  $('.video-grid-item').each(function(index){
    $(this).append(
        $('<iframe>').addClass('video').attr({
          'src': officialList[index],
          'frameborder': '0'
        }),
        $('<p>').addClass('video-content').text(officialContent[index])
    );
  });

  $('.transfer').on('click',transVedio);
});
