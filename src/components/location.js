import React from 'react';

const Location = ({city}) => {
   //destructuring from js6
   //const {city} = props;

   //normal way
   //const city2 = props.city;
   //console.log(props);
   //punto de funcion, detiene ejecucion
   //debugger;
   return (
      <div><h1>{city}</h1></div>
   );
};

export default Location;