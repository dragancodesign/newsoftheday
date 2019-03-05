// app.js // STARTED MY APP 

$(document).ready(function () {
    // My BUTTON ANIMATION with animate.css 
    $(".btn").addClass("animated rotateInDownRight"); // bounce, tada, fadeIn

    // CODING STARTED FROM HERE first my URL LINK, if not work ...
    // var url="https://newsapi.org/v2/top-headlines?country=ch&apiKey=307cd047de4d482e8d1d6c3e788a28ad";

    // ... then USE his from tutorial:
    var url = "http://hn.algolia.com/api/v1/search?query=javascript";

    $.getJSON(url, function (data) {

        var currentQuote = '';
        var quotes = data.hits;

        $('.read').on('click', function () {
            currentQuote = quotes[Math.floor(Math.random() * quotes.length)];
            // console.log(currentQuote);

            // MAKING quoteBody and quoteAuthor
            // in lesson 85 we will FIRST remove the Title to make it clickable
            // $('.quoteBody').html(currentQuote.title);
            $('.quoteBody').hide();
            $('.quoteBodyLink').html(currentQuote.title);
            // to open in new window ADD ATTRIBUTE _blank
            $('.quoteBodyLink')
                .attr('href', currentQuote.url)
                .attr('target', '_blank');

            $('.quoteAuthor').html(currentQuote.author);

            // LINK TO Tweeter TO TWEET (develoment page reference: here we simply want to tweet the text)
            $('.tweetQuote')
                .attr('href', 'https://twitter.com/intent/tweet?text= ' + currentQuote.title + ' - ' + currentQuote.author)
                .attr('target', '_blank')
                .attr('disabled', false);
            // add code to change BUTTON text after showing 1st Tweet
            $('.read').html('Show me one more');
        });

        // console.log(quotes[0].title);
        // console.log(data);
    });
});