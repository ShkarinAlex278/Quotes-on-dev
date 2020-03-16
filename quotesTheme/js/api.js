(function($) {
  $('.randomQuote').on('click', function(event) {
    $.ajax({
      type: 'get',
      url: red_vars.rest_url + 'wp/v2/posts'
      // 'wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=100'
    })
      .done(function(data) {
        // console.log('Ajax done...');
        console.log(data);
        let randomNumber = Math.floor(Math.random() * 10);
        console.log(randomNumber);
        const title = data[randomNumber].title.rendered;
        console.log(data[randomNumber].title);
        console.log(data[randomNumber].title.rendered);
        const content = data[randomNumber].content.rendered;
        console.log('cont - ', data[randomNumber].content.rendered);
        const source = data[randomNumber]._qod_quote_source;
        console.log(data[randomNumber]._qod_quote_source);
        const url = data[randomNumber]._qod_quote_source_url;
        console.log(data[randomNumber]._qod_quote_source_url);
        $('#content').html(
          ` <span class="merged">
               <div class="my-content">
                    ${content}
                </div>
                <div class="title">
                    <h2>
                    <span>- </span>${title}<a class="entry-title" href="${url}">${source}</a>
                    </h2> 
                </div>
            </span>`
        );
      })
      .fail(function(data) {
        console.log('Ajax fail...');
      });
    // console.log('Finish...');
  });
})(jQuery);
