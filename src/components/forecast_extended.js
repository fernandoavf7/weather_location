import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './forecast_item';

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
   
    renderForecastItemDays(){
        return days.map(day => <ForecastItem weekday={day} hour={10} key={day} data={data}/>)
    }
   
    render() {
        const { city } = this.props;
        return (
            <div>
                <div style={forecast_extended}>Pronostico Extendido para {city}</div>
                {this.renderForecastItemDays()}
            </div>
        )
    }
}

ForecastExtended.propTypes = {

    city: PropTypes.string.isRequired,
  
}

export default ForecastExtended;