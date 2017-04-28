    var box = $('#blue-box');
    box.on('click', function(){
        box.toggleClass('box-change');
        if (box.hasClass('box-change'))
            console.log("testing123");
        else
            console.log("testing testing!");
    });