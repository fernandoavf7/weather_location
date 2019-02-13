import moment from 'moment';
import 'moment/locale/es';
import transformWeather from './transformWeather';

const transformForecast = (data) => (
    //filtra los datos
    //para 6:00 horas, 12:00 hrs o 18:00 hrs
    data.list.filter(item => (
        moment.unix(item.dt).hour() === 6 ||
        moment.unix(item.dt).hour() === 12 ||
        moment.unix(item.dt).hour() === 18
    )).map(item => (
        {
        weekDay : moment.unix(item.dt).format("ddd"),
        hour: moment.unix(item.dt).hour(),
        data: transformWeather(item)
    }
    ))
);

export default transformForecast;