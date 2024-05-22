/*
  up&down 아이콘 추가
*/
const iconAdd = () => {
  $('.song-name, .song-title').each(function() {
      const parentElement = $(this);
      // 새로운 li 요소 생성 후 클래스&id값 추가
      const upIcon = $('<i>').addClass('bx bx-chevron-up').attr('id', 'up-icon');
      const downIcon = $('<i>').addClass('bx bx-chevron-down').attr('id', 'down-icon');

      parentElement.append(upIcon, downIcon);
  });
}

/* 
  (jQuery 이용) 가사를 슬라이드 효과로 보여주는 메서드 구현 
*/ 
function viewLyrics() {
const lyricsElement = $(this).next();
const downIcon = $(this).children().first();
const upIcon = $(this).children().last();

// 인접한 p 요소가 있을 경우에만 동작
  if (lyricsElement.length !== 0) {
      const isVisible = lyricsElement.css('visibility') !== 'hidden';

      downIcon.css('display', isVisible ? 'inline-block':'none');
      upIcon.css('display', isVisible ? 'none':'inline-block');
      lyricsElement.toggleClass('lyrics-container-visible');   // 해당 클래스에 이미 요소가 적용된 경우 제거 & 그렇지 않으면 추가

  }
}

 
/* (jQuery 이용X) 가사를 슬라이드 효과로 보여주는 메서드 구현 
  function viewLyrics() {
    const lyricsElement = this.nextElementSibling;  
    const DownIcon = this.firstElementChild;
    const UpIcon = this.lastElementChild;

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
*/
