import React from 'react';
import WeatherLocation from './../components/index';
import PropTypes from 'prop-types';

const stringToComponents = cities => (
    cities.map(city => <WeatherLocation city={city} />)
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