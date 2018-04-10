let page = 0;

const searchFlickr = function(term) {
  page++;

  // We haven't discussed jsconcallback yet.
  const flickrURL = "https://api.flickr.com/services/rest?jsoncallback=?";
  //console.log(`https://api.flickr.com/services/rest?jsoncallback=?${page}`)
  // Not really AJAX
  $.getJSON(flickrURL, {
    method: "flickr.photos.search",
    api_key: "2f5ac274ecfac5a455f38745704ad084", // public
    text: term,
    format: "json",
    page: page
  }).done(showImages);
};

const showImages = function(results) {

  console.log('current page: ', results.photos.page);

  if (results.photos.page <= results.photos.pages) {
    const generateURL = function(p) {
      return [
        "http://farm",
        p.farm,
        ".static.flickr.com/",
        p.server,
        "/",
        p.id,
        "_",
        p.secret,
        "_q.jpg" // Change "q" to something else for different sizes
      ].join("");
    };

    results.photos.photo.forEach(function(photo) {
      const thumbnailURL = generateURL(photo);
      const $img = $("<img />", { src: thumbnailURL, class: 'hvr-buzz' }); // .attr('src', thumbnailURL)
      $img.appendTo("#images"); // Alternatively $('#images').append($img);
    });
  }
};


const throttled = _.throttle(searchFlickr, 3000);

$(document).ready(function() {
  $("#search").on("submit", function(event) {
    event.preventDefault();
    document.getElementById("images").innerHTML = ''
    page = 0;
    const query = $("#query").val();
    searchFlickr(query);
  });

  $(window).on("scroll", function() {
    const documentHeight = $(document).height();
    const windowHeight = $(window).height();
    const scrollTop = $(document).scrollTop();

    const scrollBottom = documentHeight - (windowHeight + scrollTop);
    if (scrollBottom < 500) {
      //Tweak this value
      const query = $("#query").val();

      throttled(query);
    }
  });
});

/*
TODO:

1. throttle the requests
2. pagination (through infinite scroll, without showing the same result over and over)
3. Stop at the end of result
4. Bonus - whatever
*/
