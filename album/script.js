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
  
    // icon을 부모 요소에 추가
    ParentElement.append(up_icon);
    ParentElement.append(down_icon);
    }
  );
}

// 화살표 메서드 사용
const viewLyrics = (event) => {
  const songName = event.currentTarget; // 클릭된 요소를 가져옴
  const lyricsElement = songName.nextElementSibling; // songName과 인접한 요소를 가져옴
  const DownIcon = songName.firstElementChild;     // 해당 요소의 첫 번째 자식 엘리먼트 노드를 반환
  const UpIcon = songName.lastElementChild;        // 헤딩 요소의 마지막 자식 엘리먼트 노드를 반환

   // 인접한 p 요소가 있을 경우에만 동작
   if (lyricsElement) {
      const computedStyle = window.getComputedStyle(lyricsElement);

      if (computedStyle.display === 'none') {
          DownIcon.style.display = 'inline-block';
          UpIcon.style.display = 'none';
          lyricsElement.style.display = 'block'
          setTimeout(() => {
            lyricsElement.classList.add('lyrics-visible');
          }, 10);
      } 
      else {
          UpIcon.style.display = 'inline-block';
          DownIcon.style.display = 'none';
          lyricsElement.style.display = 'none';
          lyricsElement.classList.remove('lyrics-visible');
      }
  }
}
