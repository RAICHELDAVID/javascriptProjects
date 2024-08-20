$('button').click(()=>{
    var randomColorCode="#" + Math.floor(Math.random() * 16777215).toString(16);
    $('.main-div').css('background-color',randomColorCode);
    $('#background-color-text').text('BACKGROUND COLOR '+ randomColorCode.toUpperCase());
})

