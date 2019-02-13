import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './forecast_item';
import { api_key, url_base_forecast } from './../constants/api_url';
import transformForecast from './../services/transformForecast';
import { CircularProgress } from '@material-ui/core';

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


    componentDidMount() {
        this.updateCity(this.props.city);
    }

    //para que se actualice el componente al seleccionar otra ciudad
    //nextProps son las actualizaciones de las props
    componentWillReceiveProps(nextProps) {
        if (nextProps.city !== this.props.city) {
            this.setState({ forecastData: null });
            this.updateCity(nextProps.city);
        }
    }

    updateCity = city => {
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
                console.log(forecastData);
                this.setState({
                    forecastData: forecastData
                });

            }
        )
    }

    renderForecastItemDays(forecastData) {
        return forecastData.map((forecast, index) =>
            <ForecastItem
                key={index}
                weekday={forecast.weekday}
                hour={forecast.hour}
                data={forecast.data} />)
    }

    renderProgress() {
        return (
            <div className="center">
                <CircularProgress size={50} />
                <h2>Cargando</h2>
            </div>
        );
    }
    render() {
        const { city } = this.props;
        const { forecastData } = this.state;
        return (
            <div>
                <div style={forecast_extended}>Pronostico Extendido para {city}</div>

                {forecastData ?
                    this.renderForecastItemDays(forecastData) :
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