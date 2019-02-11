import React from 'react';
import WeatherLocation from './../components/index';
import PropTypes from 'prop-types';

const LocationList = ({ cities }) => {
    console.log("cities");
    console.log(cities);
    return (
        <div>
            <WeatherLocation city="Santiago,cl"></WeatherLocation>
            <WeatherLocation city="Bogota,col"></WeatherLocation>
            <WeatherLocation city="Mexico,mex"></WeatherLocation>
            <WeatherLocation city="Washington,us"></WeatherLocation>
            <WeatherLocation city="Madrid,es"></WeatherLocation>
        </div>
    );
};

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
};

export default LocationList;