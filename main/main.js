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
  speed : 400,              // 슬라이드 속도 
  loop: true,   
  // nav 화살표 추가                
  navigation: {
      nextEl: ".swiper-button-next",      // 이전 버튼
      prevEl: ".swiper-button-prev",      // 다음 버튼
    },
});

$(function(){
  setInterval(printNode, 3000);  // 3초마다 printNode 함수 호출(공지사항 반복)
});