$('document').ready(function() {
    console.log('Document ready');

    var oldImg = $('img').attr('src');
    var newImg = $('img').attr('alt-img-src');

    $('img').hover(
        function(){
            var oldImg = $(this).attr('src');
            var newImg = $(this).attr('alt-img-src');
            $(this).attr('src',newImg);
        },
        function(){
            $(this).attr('src',oldImg);
        }
    );
});