/*
 show 아이콘 클릭 시 password가 화면에 노출되는 이벤트 핸들러
*/
$(function(){
    $('.show').on('click',function(){
        if( $(':password').attr('type') === 'password'){
            $(':password').attr('type','text');
        }
    });
});