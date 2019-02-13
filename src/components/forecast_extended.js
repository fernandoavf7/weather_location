import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './forecast_item';
import {api_key, url_base_forecast} from './../constants/api_url';
import transformForecast from './../services/transformForecast';

const forecast_extended = {
    color: 'white',
    padding: '10px',
    textAlign: 'center'
}

const days = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes"
];

const data = {
    temperature: 20,
    weatherState: "normal",
    humidity: 10,
    wind: 'normal'
}

class ForecastExtended extends Component {

    constructor() {
        super();
        this.state = { forecastData: null }
    }


    componentDidMount(){
        const url_forecast = `${url_base_forecast}?q=${this.props.city}&APPID=${api_key}`;
       //trae datos
        fetch(url_forecast).then(
            //pasa a json
            data => (data.json())
        ).then(
            //json extraido, lo imprime en consola
            weather_data => {
                console.log(weather_data);
                const forecastData = transformForecast(weather_data);
                this.setState({
                    forecastData: forecastData
                });
            }
        )
    }

    renderForecastItemDays() {
       return "Render Items";
        //return days.map(day => <ForecastItem weekday={day} hour={10} key={day} data={data} />)
    }

    renderProgress(){
        return "Cargando Pronostico extendido";
    }
    render() {
        const { city } = this.props;
        const { forecastData } = this.state;
        return (
            <div>
                <div style={forecast_extended}>Pronostico Extendido para {city}</div>

                {forecastData ?
                    this.renderForecastItemDays() :
                    this.renderProgress()
                }
            </div>
        )
    }
}

ForecastExtended.propTypes = {

    city: PropTypes.string.isRequired,

}

export default ForecastExtended;