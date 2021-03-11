function seachMovies(){
    var allDiv = document.querySelectorAll('div');
    allDiv.forEach(element => element.remove());

    var input = document.querySelector('input').value;
    fetch(`http://www.omdbapi.com/?s=${input}&apikey=adf1f2d7`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            data.Search.forEach(element => {
                var div = document.createElement('div');

                var pTagTitl = document.createElement('p');
                pTagTitl.innerHTML = element.Title;
                pTagTitl.style.backgroundColor = 'green';
                pTagTitl.style.color = 'white';
                pTagTitl.style.marginBottom = '0px';
                div.appendChild(pTagTitl);

                var pTagYear = document.createElement('p');
                pTagYear.innerHTML = element.Year;
                div.appendChild(pTagYear);

                var imgTag = document.createElement('img');
                imgTag.setAttribute('src', element.Poster);
                div.appendChild(imgTag);

                document.body.appendChild(div);
            })
        })
}

document.querySelector('input').addEventListener('keyup', seachMovies);