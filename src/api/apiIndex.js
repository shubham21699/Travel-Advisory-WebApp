import { Data } from '@react-google-maps/api';
import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const getPlacesData = async (sw, ne) => {
    try {
        const {data: { data }} = await axios.get(URL, {
            params: {
                // bl is bottom left and tr is top right
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: sw.lng,
            },
            headers: {
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
                'x-rapidapi-key': 'bcb0a31f39msh21afb09ab87fc27p18bd37jsndfa1d6c3560a'
            }
        });
        return data;
    } catch (error) {
        console.log(error);
    }
}