

const location = "London,uk";
const api_key = "dd99a27a3420b1559dc48cd3aa63eaab";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather"
//example
//const full_api = "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=dd99a27a3420b1559dc48cd3aa63eaab";

export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;
;