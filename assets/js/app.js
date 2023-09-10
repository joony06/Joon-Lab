function fetchPage(name) {
    fetch(`./data/${name}`).then(function(response) {
        response.text().then(function(text){
            document.querySelector('#main').innerHTML = text;

        })
    });
}

fetchPage("./Joon's Lab");
/* if(location.hash){
    fetchPage(location.hash.substring(2));
} else {
    fetchPage('welcom');
}
*/
/*
fetchPage('list').then(function(response) {
    response.text().then(function(text) {
        let items = text.split(',');
        let i = 0;
        let tags = '';
        while(i<items.length) {
            let item = item[i];
            item = item.trim();
            let tag = `<li><a href="#!${item}" onclick="fetchPage('${item}')">${item}</a></li>`;
            tags = tags = tag;
            i = i + 1;
        }
        document.querySelector('#nav').innerHTML = tags;
    })
}); 
*/