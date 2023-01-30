


const app = Vue.createApp({
    data() {
        return {
            locationCity : '',
            locationState : '',
            sunOrRain: '',
            tempHigh: '',
            tempLow: '',
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

                })
                .catch(err => console.error('error:' + err));

        }
    }
})

app.mount('#mountHere');