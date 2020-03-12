(function($) {
  $('.randomQuote').on('click', function(event) {
    $.ajax({
      type: 'get',
      url:
        red_vars.rest_url +
        'wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=100'
    })
      .done(function(data) {
        console.log('Ajax done...');
        console.log(data.title);
      })
      .fail(function(data) {
        console.log('Ajax fail...');
      });
    // console.log('Finish...');
  });
})(jQuery);
