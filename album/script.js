/*
  up & down 아이콘 추가
*/
const iconAdd = () => {
  $('.song-name, .song-title').each(function() {
      const parentElement = $(this);
      // 새로운 li 요소 생성 후 클래스&id값 추가
      const upArrow = $('<i>').addClass('bx bx-chevron-up').attr('id', 'up-icon');
      const downArrow = $('<i>').addClass('bx bx-chevron-down').attr('id', 'down-icon');

      parentElement.append(upArrow, downArrow);
  });
}

/* 
  (jQuery 이용) 가사를 슬라이드 효과로 보여주는 메서드 구현 
*/ 
function viewLyrics(){
const lyricsElement = $(this).next();
const upArrow = $(this).children().first();
const downArrow = $(this).children().last();

  // 인접한 p 요소가 있을 경우에만 동작
  if (lyricsElement.length !== 0) {
      const isVisible = lyricsElement.css('visibility') !== 'hidden';

      isVisible ? upArrow.hide() : upArrow.show();               
      isVisible ? downArrow.show() : downArrow.hide();
      
      // 가사가 안보이는 경우
      if(isVisible){
        lyricsElement.removeClass('lyrics-container-visible');
        console.log(lyricsElement.css('opacity'));
        lyricsElement.css('height', 0);
      }

      // 가사가 보이는 경우
      else{
        const scrollHeight = lyricsElement[0].scrollHeight;
        lyricsElement.css('height',scrollHeight + 'px');
        lyricsElement.addClass('lyrics-container-visible');
        console.log(lyricsElement.css('opacity'));
      }
    }
}


/* 아이콘 추가 & 각 클래스의 이벤트 핸들러 추가 */
$(function(){
  iconAdd();
  $('.song-name, .song-title').each(function() {
    $(this).on('click', viewLyrics);  // 함수를 인자로 넘길 시 괄호 생략
  });

});




 
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
