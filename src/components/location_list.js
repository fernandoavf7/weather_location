import React from 'react';
import WeatherLocation from './../components/index';
import PropTypes from 'prop-types';



const LocationList = ({ cities, onSelectedLocation }) => {
    const handleWeatherLocationClick = city => {
        console.log("handleWeatherLocationClick");
        onSelectedLocation(city);
    };
    const stringToComponents = cities => (
        //anti natural key
        //cities.map((city, index) => <WeatherLocation key={index} city={city} />)
        //natural key
        cities.map(city => <WeatherLocation 
            key={city} 
            city={city} 
            onWeatherLocationClick ={()=> handleWeatherLocationClick(city)}/>)
    );
    return (
        <div>
           {stringToComponents(cities)};
        </div>
    );
};

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation : PropTypes.func,
};

export default LocationList;