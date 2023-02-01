


const app = Vue.createApp({
    data() {
        return {
            locationCity : '',
            locationState : '',
            sunOrRain: '',
            tempHigh: '',
            humidity: '',
            windSpeed: ''
        }
    },
    methods: {
        searchWeather(){
            let searchLocation = document.getElementById('userSearchBar').value;
            console.log(searchLocation);


            let url = 'https://weatherapi-com.p.rapidapi.com/forecast.json?q='+searchLocation+'&days=3';

            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'd90268b3c2msh8583ae29a70c433p181829jsnd5732741dcb2',
                    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
                }
            };

            fetch(url, options)
                .then(res => res.json())
                .then(json => {
                    console.log(json);

                    this.locationCity = json.location.name;
                    this.locationState = json.location.region;
                    this.tempHigh = json.current.temp_f+' degrees';
                    this.sunOrRain = json.current.condition.text;
                    this.humidity = json.current.humidity + '% humidity';
                    this.windSpeed = 'Wind: '+json.current.wind_mph + ' mph';


                    if (json.current.condition.text === 'Partly cloudy'){

                        document.getElementById('html').classList.replace((document.getElementById('html').classList.value),'partly-cloudy');
                        document.getElementById('mountHere').classList.replace((document.getElementById('mountHere').classList.value),'partly-cloudy');



                    } else if (json.current.condition.text === 'Overcast'){

                        document.getElementById('html').classList.replace((document.getElementById('html').classList.value),'overcast');
                        document.getElementById('mountHere').classList.replace((document.getElementById('mountHere').classList.value),'overcast');

                    } else if (json.current.condition.text === 'Sunny'){

                        document.getElementById('html').classList.replace((document.getElementById('html').classList.value),'sunny');
                        document.getElementById('mountHere').classList.replace((document.getElementById('mountHere').classList.value),'sunny');

                    } else if (json.current.condition.text === 'Rainy'){

                        document.getElementById('html').classList.replace((document.getElementById('html').classList.value),'rainy');
                        document.getElementById('mountHere').classList.replace((document.getElementById('mountHere').classList.value),'rainy');


                    } else {

                        document.getElementById('html').classList.replace((document.getElementById('html').classList.value),'grid-container');
                        document.getElementById('mountHere').classList.replace((document.getElementById('mountHere').classList.value),'grid-container');
                    }


                })
                .catch(err => console.error('error:' + err));

        }
    }
})

app.mount('#mountHere');