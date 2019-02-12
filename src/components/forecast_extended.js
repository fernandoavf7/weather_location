import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ForecastExtended extends Component{
    render(){
        const {city} = this.props;
        return (<div>Pronostico Extendido para {city}</div>)
    }
}

ForecastExtended.PropTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;