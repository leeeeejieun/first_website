function toggleDarkMode(button) {
  var $body = $('body');
  var $paragraphs = $('.first-info');
  var $lists = $('ul');
  var $linkes=$('.channel a');
  var $button = $(button);

  if ($body.css('background-color') === 'rgb(0, 0, 0)') {
    // Dark Mode가 켜져 있는 경우
    $body.css('background-color', 'white');
    $paragraphs.css('color', 'black');
    $lists.css('color', 'black');
    $linkes.css('color','black');
    $button.val('Dark Mode ON');
  } else {
    // Dark Mode가 꺼져 있는 경우
    $body.css('background-color', 'black');
    $paragraphs.css('color', 'white');
    $lists.css('color', 'white');
    $linkes.css('color','white');
    $button.val('Dark Mode OFF');
  }
}

// up/down 아이콘 추가
const iconAdd = () =>{
  const ParentElements = document.querySelectorAll('.song-name, .song-title');
  
  ParentElements.forEach(ParentElement =>{
    const up_icon = document.createElement('i');
    const down_icon = document.createElement('i');
  
    down_icon.classList.add('bx','bx-chevron-down');
    up_icon.classList.add('bx','bx-chevron-up');
  
    up_icon.id='up-icon'
    down_icon.id='down-icon'
  
    /*
     해당 요소들을 부모 노드의 자식 노드 리스트의 마지막에 추가
     append() : 여러 요소 추가 메서드
     appendChild() : 단일 요소 추가 메서드
    */
    ParentElement.append(up_icon, down_icon);
    }
  );
}

// 화살표 메서드 사용
const viewLyrics = (event) => {
  const songName = event.currentTarget; // 클릭된 요소를 가져옴
  const lyricsElement = songName.nextElementSibling; // songName의 다음 형제 엘리먼트 노드 반환
  const DownIcon = songName.firstElementChild;     // songName의 첫 번째 자식 엘리먼트 노드 반환
  const UpIcon = songName.lastElementChild;        // songName의 마지막 자식 엘리먼트 노드 반환

   // 인접한 p 요소가 있을 경우에만 동작
   if (lyricsElement) {
      const computedStyle = window.getComputedStyle(lyricsElement);

      if (computedStyle.visibility === 'hidden') {
          DownIcon.style.display = 'inline-block';
          UpIcon.style.display = 'none';
          lyricsElement.classList.add('lyrics-container-visible');
      } 
      else {
          UpIcon.style.display = 'inline-block';
          DownIcon.style.display = 'none';
          lyricsElement.classList.remove('lyrics-container-visible');
      }
  }
}

class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

const node1 = new node("https://weverse.io/plave/notice/19099");
const node2 = new node("https://weverse.io/plave/notice/19099");
const node3 = new node("https://weverse.io/plave/notice/19099");