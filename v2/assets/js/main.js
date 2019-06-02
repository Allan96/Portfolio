$.ajax({
    type: 'GET',
    url: 'https://api.github.com/users/Allan96/repos',
    data: { get_param: 'value' },
    dataType: 'json',
    success: function(data) {
        var i = 0;
        while (i < data.length) {
            $('#repository #carouselExampleControls .carousel-inner .carousel-item:last .row').append(
                ' <div class="col-12 col-lg-4 b-dashed">' +
                '<p class="bold c-white"> <a href="' + data[i]['html_url'] + '" target="_blank"> ' +
                data[i]['name'] + ' → </a></p>' +
                '<p>' +
                data[i]['description'] +
                ' </p>' +
                '</div>'
            );

            if (((i + 1) % 3) == 0) {
                // alert(i);
                $('#repository #carouselExampleControls .carousel-inner').append(
                    '<div class="carousel-item"><div class="row"></div></div>'
                );
            }
            i++;
        }
    }
});



$('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    pageDots: false,
    prevNextButtons: false,
    autoPlay: 1500,
    wrapAround: true
});


$('#works').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    pageDots: false,
    prevNextButtons: true,
    wrapAround: true,
    arrowShape: 'M0.625977 22.9619V17.6445L22.0273 0.110352L28.2676 7.40527L17.9844 15.4912H42.5498V25.2031H18.0723L28.2676 33.2451L22.0273 40.54L0.625977 22.9619Z'
});