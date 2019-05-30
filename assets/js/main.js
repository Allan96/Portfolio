$.ajax({ 
    type: 'GET', 
    url: 'https://api.github.com/users/Allan96/repos', 
    data: { get_param: 'value' }, 
    dataType: 'json',
    success: function (data) { 
        var i = 0;
        while (i < data.length){
            $('.repo-add').append(
                '<a href="' + data[i]['html_url'] + 
                '" target="_blank" class="col-12 col-sm-3"><div class="repo-box"><p class="bold upper mb-0 repo-title c-white">' + 
                data[i]['name'] + '</p><p class="c-white repo-desc">' + 
                data[i]['description'] + '</p></div></a>'
            );
            i++;
        }
    }
});



$('.second').click(function (e) { 
    e.preventDefault();
    $('#first').fadeOut('fast');
    $('#second').fadeIn('1000');
    
});

$('.first').click(function (e) { 
    e.preventDefault();
    $('#second').fadeOut();
    $('#first').fadeIn('1000');
    
});