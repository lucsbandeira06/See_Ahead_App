
export const BookingHoteloptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'dee87c220fmshaa315c46b987a0fp158364jsn7ad1d8fe8f32',
		'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
	}
};

export const bookingSearchCityoptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '9220a5cb53msh696d866d437bc04p1a830djsn6466600c6887',
      'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
    }
};
// URL to look for cities within booking.com
export const bookingSearchCityURL = "https://booking-com.p.rapidapi.com/v1/hotels/locations"

  
  export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";
  
  //weather API for real time and forecast weather
  export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
  export const WEATHER_API_KEY = "f646564abb343146f89724a0072d6758"; 