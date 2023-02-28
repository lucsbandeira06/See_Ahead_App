
//GeoAPI to fetch cities around the world 
export const geoApiOptions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "9220a5cb53msh696d866d437bc04p1a830djsn6466600c6887",
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  };

  //booking.com API, you can see that the api key for this API is the same as the api key for dbCities as both of them come from the same place. (RapidAPI)
export const bookingApiOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '9220a5cb53msh696d866d437bc04p1a830djsn6466600c6887',
      'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
    }
  };
  
  export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";
  
  //weather API for real time and forecast weather
  export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
  export const WEATHER_API_KEY = "f646564abb343146f89724a0072d6758"; 