(function($) {
  console.log(red_vars);
  console.log(red_vars.rest_url);
  $('.randomQuote').on('click', function(event) {
    $.ajax({
      method: 'GET',
      url:
        red_vars.rest_url +
        'wp/v2/posts/?filter[orderby]=rand&filter[posts_per_page]=10'
    }).done(function(data) {
      console.log('123...');
      console.log(data);
      console.log('Get a date - ', data[0].date);
      //   alert('Success! Comments are closed for this post.');
    });
  });
})(jQuery);
