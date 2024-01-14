let weather = {
    "apiKey": "7aba842e64b400bc3e38cde75bea3037",
    fetchWeather: function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city
            +"&appid=7aba842e64b400bc3e38cde75bea3037"
        ).then((response) => response.json())
        .then((data)=>this.displayWeather(data));
    },

    displayWeather: function(data){
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        var sicaklik = (temp - 273.15).toString().substr(0, 4);
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerText = name + "'da hava durumu";
        document.querySelector(".icon").src= "https://openweathermap.org/img/wn/"+icon+"@4x.png";
        document.querySelector(".description").innerText= description;
        document.querySelector(".temp").innerText = sicaklik + " °С";
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?"+name+"')";
    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
    
};

document.querySelector(".searchButton").addEventListener("click", function(){
    weather.search();
    
});

document.querySelector(".search-bar").addEventListener("keyup", function(){
    if(event.key == "Enter"){
        weather.search();
    }
});