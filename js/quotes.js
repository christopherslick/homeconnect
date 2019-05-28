
function dailyQuote() {
    $.ajax({
        url: "https://api.forismatic.com/api/1.0/?",
        dataType: "jsonp",
        data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
        success: function (dailyQuoteData) {
//if there is no author it is unknown
            if (dailyQuoteData.quoteAuthor === '') {
                dailyQuoteData.quoteAuthor = 'Unknown';
            };
//printing text and author
            $("#dailyQuote").html("<p class='quoteArea'> \"" + dailyQuoteData.quoteText + "\"</p>");
            $("#dailyQuoteAuthor").html("<p class='quoteArea'>" + dailyQuoteData.quoteAuthor + "</p>")


        }
    });
}

$(function () {
    dailyQuote();
});

$("#newQuote").click(function () {
    dailyQuote();

});
