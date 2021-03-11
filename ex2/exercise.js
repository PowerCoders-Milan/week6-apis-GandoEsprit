function clickButton(){
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${country.value}&appid=e400fe723927568613bb124cb3e8b111&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then((data)=>{
            console.log(data);
            var pTag = document.getElementById('meteo');
            pTag.innerHTML = 'The temperature of ' + country.value + ' is: ' + data.main.temp;
    });
}

var country = document.getElementById('texte');

var button = document.getElementsByTagName('input')[1];

button.addEventListener('click', clickButton);