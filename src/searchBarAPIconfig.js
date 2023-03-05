
export const BookingHoteloptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.REACT_APP_X_RapidAPI_Hotel_Key,
		'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
	}
};

export const bookingSearchCityoptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_X_RapidAPI_Search_Key,
      'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
    }
};
// URL to look for cities within booking.com
export const bookingSearchCityURL = "https://booking-com.p.rapidapi.com/v1/hotels/locations"
//weather API for real time and forecast weather
export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
export const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY; 