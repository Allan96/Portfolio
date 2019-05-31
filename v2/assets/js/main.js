// $.ajax({ 
//     type: 'GET', 
//     url: 'https://api.github.com/users/Allan96/repos', 
//     data: { get_param: 'value' }, 
//     dataType: 'json',
//     success: function (data) { 
//         var i = 0;
//         while (i < data.length){
//             $('.repo-add').append(
//                 '<a href="' + data[i]['html_url'] + 
//                 '" target="_blank" class="col-12 col-sm-6"><div class="repo-box"><p class="bold upper mb-0 repo-title c-white">' + 
//                 data[i]['name'] + '</p><p class="c-white repo-desc">' + 
//                 data[i]['description'] + '</p></div></a>'
//             );
//             i++;
//         }
//     }
// });



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