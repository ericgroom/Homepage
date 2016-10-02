var request = new XMLHttpRequest();
request.open('GET', 'https://www.reddit.com/.json', true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    // Success!
    var data = JSON.parse(request.responseText);
    var top = data.data.children.slice(0, 3);

    for(var i = 0; i < top.length; i++) {
        var title = truncate(top[i].data.title);
        var url = top[i].data.url;
        var text = '<li><a href="' + url + '">' + title + '</a></li>';
        document.getElementById('reddit').insertAdjacentHTML('beforeend', text);
    }
    
  }
};

function truncate(title) {
    if (title.length > 18) {
        return title.substring(0, 15).trim() + '...';
    } else {
        return title;
    }
}
request.send();