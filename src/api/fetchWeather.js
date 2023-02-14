import axios from 'axios';
const url = 'https://api.openweathermap.org/data/2.5/weather';
const key ='21b17ce1518a5be6b1097495053cb5eb'


const fetchWeather = async (query) =>{
    const { data } = await axios.get(url,{
        params:{
            q:query,
            units:'metric', //these are the supported in the APi  
            APPID:key
        }
    });
    return data;
}


export default fetchWeather;