import React from 'react';
import WeatherLocation from './../components/index';
import PropTypes from 'prop-types';

const stringToComponents = cities => (
    //anti natural key
    //cities.map((city, index) => <WeatherLocation key={index} city={city} />)
    //natural key
    cities.map(city => <WeatherLocation key={city} city={city} />)
);

const LocationList = ({ cities }) => {
    console.log("cities");
    console.log(cities);
    return (
        <div>
           {stringToComponents(cities)};
        </div>
    );
};

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
};

export default LocationList;