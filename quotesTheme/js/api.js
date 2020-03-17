(function($) {
  $('.randomQuote').on('click', function(event) {
    $.ajax({
      type: 'get',
      url:
        red_vars.rest_url +
        'wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1'
    }).done(function(data) {
      const title = data[0].title.rendered,
        content = data[0].content.rendered,
        source = data[0]._qod_quote_source,
        url = data[0]._qod_quote_source_url;

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
    });
  });
})(jQuery);

// Rob function...
// ('use strict');
// !(function(a) {
//   a(function() {
//     var e = '';

//     a('#new-quote-button').on('click', function(t) {
//       t.preventDefault(),
//         (e = document.URL),
//         a
//           .ajax({
//             method: 'get',
//             url:
//               api_vars.root_url +
//               'wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1',
//             cache: !1
//           })
//           .done(function(t) {
//             var e = t.shift(),
//               o = a('.source'),
//               n = e._qod_quote_source,
//               u = e._qod_quote_source_url,
//               r = e.slug,
//               s = api_vars.home_url + '/' + r + '/';
//             a('.entry-content').html(e.content.rendered),
//               a('.entry-title').html(
//                 '<h2 class="entry-title">&mdash; ' + e.title.rendered + '</h2>'
//               ),
//               n.length && u.length
//                 ? o.html(', <a href="' + u + '">' + n + '</a>')
//                 : n.length
//                 ? o.html(', ' + n)
//                 : o.text(''),
//               history.pushState(null, null, s);
//           });
//     }),
//       a(window).on('popstate', function() {
//         if (1 === window.location.hash.indexOf('qm-overview')) return !1;
//         window.location.replace(e);
//       });
//   }),
//     a(function() {
//       a('#quote-submission-form').on('submit', function(t) {
//         t.preventDefault();
//         var e = {
//           title: a('#quote-author').val(),
//           content: a('#quote-content').val(),
//           _qod_quote_source: a('#quote-source').val(),
//           _qod_quote_source_url: a('#quote-source-url').val(),
//           post_status: 'pending'
//         };
//         a.ajax({
//           method: 'post',
//           url: api_vars.root_url + 'wp/v2/posts',
//           data: e,
//           beforeSend: function(t) {
//             t.setRequestHeader('X-WP-Nonce', api_vars.nonce);
//           }
//         })
//           .done(function() {
//             a('#quote-submission-form')
//               .slideUp()
//               .find('input[type="text"], input[type="url"], textarea')
//               .val(''),
//               a('.submit-success-message')
//                 .text(api_vars.success)
//                 .slideDown('slow');
//           })
//           .fail(function() {
//             alert(api_vars.failure);
//           });
//       });
//     });
// })(jQuery);
