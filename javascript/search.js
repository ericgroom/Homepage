document.getElementById("search").addEventListener("submit", function(e) {
  e.preventDefault();
  var search_text = document.getElementById("search-text").value;
  search(search_text);

  function search(query) {
    if (query[0] != "/" || query[0] == "!") {
      var url = "https://duckduckgo.com/?q=" + query;
    } else {
      if (query.includes("r/")) {
        url = reddit(query);
      }
    }
    window.location = url;
  }

  function reddit(query) {
    query = query.split(" ");
    var subreddit = query.shift();
    query = query.join(" ");
    if (subreddit.startsWith("/r/")){
      subreddit = subreddit.slice(3)
    } else if (subreddit.startsWith("r/")) {
      subreddit = subreddit.slice(2)
    }
    query = joinWithPlus(query);
    var url = "https://www.reddit.com/r/" + subreddit;
    if (query != "") {
      url+="/search?q=" + query + "&restrict_sr=on&sort=relevance&t=all";
    }
    return url;
  }

  function joinWithPlus(text) {
    var list = text.split(" ");
    list = list.join("+");
    return list;
  }
})

function toggleGreeting() {
  var el = document.getElementById("greeting");
  if ( el.style.display != 'none' ) {
    el.style.display = 'none';
  } else {
    el.style.display = 'block';
  }
}

function toggleSearch() {
  var els = document.getElementsByClassName("search");
  var el = els[0]
  if ( el.style.display != 'none' ) {
    el.style.display = 'none';
  } else {
    el.style.display = 'flex';
  }
}

document.getElementById("greeting").addEventListener("click", function() {
  toggleSearch();
  document.getElementById("search-text").focus();
})
