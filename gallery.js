$(function() {
    
    var sels = $('div[class^=gallery-]');
    sels.each(function() {
        set_gallery($(this));
        //console.log($(this).attr('class'));
    });
    
    function set_gallery(elem) {
        var sel = elem.attr('class');
        if (sel) {
            var id = sel.split('-')[1];
            $.ajax({
                type: 'GET',
                url: 'get_images.php',
                data: {gallery_id: id},
                dataType: 'json',
                success: function getimages(data) {
                    $.each(data, function() {
                        $('<img />').attr({
                          src: this.image_thumb,
                          //width: 100,
                          height: 70
                        }).appendTo($('<a />').attr({
                          class: 'fancy',
                          href: this.image_big,
                          title: this.title,
                          rel: 'group1'
                        }).appendTo($('div.' + sel)));
                    });
                }
            });
        }
    }
    
    /*$('.fancy').fancybox( {
        arrows: true
    });*/
    
})