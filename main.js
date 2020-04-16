var requestURL = 'https://avonpreet.github.io/lab4/main.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var elecProd = request.response;
    avlElec(elecProd);
};

function avlElec(jsonObj) {
    let avlElec = jsonObj.avlElec;
    for (let i = 0; i < avlElec.length; i++) {
        let article = document.createElement('article');
        let h2 = document.createElement('h2');
        let img = document.createElement('img');
        let p = document.createElement('p');
        let list = document.createElement('ul');
        let hr = document.createElement('hr');
        let br = document.createElement('br');
        let section = document.querySelector('section');
        img.setAttribute('src', 'https://avonpreet.github.io/lab4/img/' + avlElec[i].picture);
          img.setAttribute('alt', avlElec[i].name);
        img.setAttribute('height', '400px');
        img.setAttribute('width', '400px');
        h2.textContent = avlElec[i].name;
        p.textContent = 'Price: ' +
            avlElec[i].price;
        let features = avlElec[i].features;
        for (let j = 0; j < features.length; j++) {
            let listItem = document.createElement('li');
            listItem.textContent = features[j];
            list.appendChild(listItem);
        }
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(p);
        article.appendChild(list);
        article.appendChild(hr);
        article.appendChild(br);
        section.appendChild(article);
    }
}
