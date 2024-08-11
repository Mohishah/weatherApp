import { recieve_weather_erorr, recieve_weather_response, send_weather_request } from "./weatherType"
import axios from 'axios'

export const sendWeatherRequest =(query)=>{
    return{
        type : send_weather_request,

        //saga
        // payload : query
    }
}

export const recieveWeatherResponse =(data)=>{
    return{
        type : recieve_weather_response,
        payload : data
    }
}

export const recieveWeatherErorr =(data)=>{
    return{
        type : recieve_weather_erorr,
        payload : data
    }
}

const getWeatherInfo = (query)=>{
    return (dispatch)=>{
        dispatch(sendWeatherRequest());
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=7ebcd0b29f8e07a508956a38313b3ce0`)
        .then(res=>{
            dispatch(recieveWeatherResponse(res.data))
        }).catch(error=>{
            dispatch(recieveWeatherErorr(error.message))
        })
    }
}

export default getWeatherInfo