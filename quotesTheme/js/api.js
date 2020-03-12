(function($) {
  console.log(red_vars);
  console.log(red_vars.rest_url);
  console.log(
    red_vars.rest_url +
      'wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=10'
  );

  $('.randomQuote').on('click', function(event) {
    console.log('Enter to function...');
    $.ajax({
      type: 'GET',
      url: red_vars.rest_url
      // + '/wp/v2/posts'
      'wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=10'
    })
      .done(function(data) {
        console.log('Ajax done...');
        // console.log(data);
      })
      .fail(function(data) {
        console.log('Ajax fail...');
      });
    console.log('Finish...');
  });
})(jQuery);
