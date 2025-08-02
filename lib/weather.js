export async function getWeatherForCity(cityName) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.WEATHER_API_KEY}`);
    if (response.ok) {
        const result = await response.json();
        return result;
    } else if (!response.ok) {
        return {
            error: 'City Not Found'
        }
    }
}

export function getCountryName(code) {
    const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });
    return regionNames.of(code);
};

export function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}

export function formatUnixTo12Hour(unixSeconds) {
    const date = new Date(unixSeconds * 1000); // Convert to milliseconds
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    const paddedMinutes = minutes.toString().padStart(2, '0');

    return `${hours}:${paddedMinutes} ${ampm}`;
}

export async function getCityImage(cityName) {
    const response = await fetch(`https://api.unsplash.com/search/photos?query=${cityName}&client_id=${process.env.CITY_WISE_ACCESS_KEY}`);
    if (response.ok) {
        const result = await response.json();
        return result;
    }
}

export async function get7DayWeather(cityName) {
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${process.env.SEVEN_WEATHER_API_KEY}&q=${cityName}&days=7`);
    if (response.ok) {
        const result = await response.json();
        return result.forecast;
    }
}

export function getDayOfWeek(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'long' });
}
