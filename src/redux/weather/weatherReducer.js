import { recieve_weather_erorr, recieve_weather_response, send_weather_request } from "./weatherType"

const init = {
    loading: false,
    data: {},
    error:''
}

const weatherReducer = (state=init , action)=>{
    switch (action.type) {
        case send_weather_request:
            return {...state , loading: true}
        case recieve_weather_response:
            return {loading: false , data:action.payload , error:''}
        case recieve_weather_erorr:
            return {loading: false , data:{} , error:action.payload}
    
        default:
            return state
    }
}

export default weatherReducer;