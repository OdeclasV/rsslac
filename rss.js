// var feedcontainer = document.getElementById("feed");
// var feedurl = "http://www.laprensagrafica.com/Generales/Rss?rss=Politica";
// var feedlimit = 10;
// var rssoutput = "<h2>Lo mas destacado en El Salvador:</h2><ul>";

// var rssfeedsetup = function () {
// 	var feedpointer = new google.feeds.Feed(feedurl);
// 	feedpointer.setNumEntries(feedlimit);
// 	feedpointer.load(displayfeed);
// }

//  function displayfeed (result) {
// 	if(!result.error) {
// 		var thefeeds = result.feed.entries;
// 		for(var i = 0; i < thefeeds.length; i++) {

// 			rssoutput += "<li><a href=' " + thefeeds[i].link + "'>" + thefeeds[i].title + "</a></li>";
// 			rssoutput += "</ul>";
// 			feedcontainer.innerHTML = rssoutput;
// 		}
// 	} else {
// 		alert("Error fetching feeds!");
// 	}
// }

// window.onload = function () {
// 	rssfeedsetup();
// }