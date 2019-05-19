
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
            var quote = dailyQuoteData.quoteText;
            var result = quote.split(" ");
            var preps = [];
            //list of words that have no synonyms
            preps = ["aboard","about","across","above","after","against","ahead of","along","amid","amidst","among","around","as","aside","at","athwart","atop","barring","because","before","behind","below","beside","besides",
            "beneath","between","beyond","but","by","circa","concerning","despite","down","during","except","excluding","far","from","following","for","in","accordance","with","addition","case","front","lieu","place","spite",
            "including","inside","instead","of","into","like","minus","near","next","notwithstanding","of","off","on","account","of","behalf","top","onto","opposite","out","outside","over","past","plus","prior",
            "regarding","regardless","save","since","than","through","throughout","till","to","toward","towards","under","underneath","unlike","until","up","upon","versus","via","with","regard","to","within","without","a","is","he","the"
          ,"what", "which", "that","what", "you", "and","yourself","them","your","if","won't","you","we","this","mentally","everything","don't","it","if","they"]
//checking for key character that will mess up the thesaurus
                  for( var y = 0; y < preps.length; y++){
                      for( var i = 0; i < result.length; i++){
                         result[i] = result[i].replace(/\./, '' );
                         result[i] = result[i].replace(/\,/, '' );
                         result[i] = result[i].replace(/\:/, '' );
                         result[i] = result[i].replace(/\;/, '' );
                         result[i] = result[i].replace(/\-/, '' );
                         if ( result[i] === preps[y]) {
                           result.splice(i, 1);
                           i--;
                         }
                      }
                  }
                  //sending result to thesaurus
            thesaurus(result);
            console.log(result);

        }
    });
}

var word;
function thesaurus(s) {

var list = [];
var nounlist = [];

for( var y = 0; y < s.length; y++){
//console.log(y);
//console.log(s[y]);
var  word = s[y];
var url1= "https://words.bighugelabs.com/api/2/11e1d89b91ae400fdfccc335e390124f/";
var word =s[y];
var url2="/json"

list[y] +=  word + "<br>";
//console.log(word);
nounlist[y] +=  word + "<br>";
//trying a throw and catch to get the "word" into the ajax function
try{throw y}

catch(y){
    $.ajax({

        url: url1 + word + url2,
        data: JSON.stringify({ paramName: word }),
        dataType: "json",
        success: function (thesaurusData) {
          //console.log(y);
          word = s[y];

console.log(thesaurusData);
//attempt to print out things, only prints out if all three items are present
/*console.log(typeof thesaurusData.verb.syn);
if(thesaurusData.noun.syn != undefined){
for(var x = 0; x < 3; x++){

  console.log("hey there " + x);
list[y] +=  thesaurusData.noun.syn[x] + "<br>";}}
if(thesaurusData.verb.syn != undefined){

for(var x = 0; x < 3; x++){
  console.log("hey there " + x);

list[y] +=  thesaurusData.verb.syn[x] + "<br><br>";}}
if(thesaurusData.adjective.syn != undefined){

for(var x = 0; x < 3; x++){

list[y] +=  thesaurusData.adjective.syn[x] + "<br><br>";

}}
$("#thesaurusPrint").html("<div class=\"border border-primary thes\">" + list[y] + "</div>" );
*/

          for(var x = 0; x < 3; x++){
          list[y] +=  thesaurusData.verb.syn[x] + "<br>";
          //console.log("this is a verb");

          }
         for(var x = 0; x < 3; x++){
          nounlist[y] +=  thesaurusData.noun.syn[x] + "<br>";
          //console.log("this is a noun");

          }


       $("#thesaurusPrint").html("<div class=\"border border-dark\">" + list[y] + "</div>" );
       $("#nounthesaurusPrint").html("<div class=\"border border-dark\">" + nounlist[y] + "</div>" );



}/*,error: function(e) {
        alert("there was a problem with word" + s[y]);
    }*/
    });
  }
    //console.log(y);
    //console.log(s[y]);
}

}


$(function () {
    dailyQuote();
});

$("#newQuote").click(function () {
    dailyQuote();

});
