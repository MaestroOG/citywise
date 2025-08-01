import Container from "@/components/Container"
import ForecastCard from "@/components/ForecastCard"
import SearchBar from "@/components/SearchBar"
import { getWeatherForCity, getCountryName, kelvinToCelsius, formatUnixTo12Hour, getCityImage } from "@/lib/weather"
import Image from "next/image"


const Home = async ({ searchParams }) => {
  const city = searchParams.city || '';

  let weather;
  let cityImage;

  if (city) {
    weather = await getWeatherForCity(city);
    cityImage = await getCityImage(city)
  }

  if (!city) {
    return (
      <main className="px-40 py-5">
        <Container>
          <SearchBar city={city} />
        </Container>
      </main>
    )
  }

  return (
    <main className="px-40 py-5">
      <Container>
        <SearchBar city={city} />
      </Container>
      <Container className={'relative w-[97%] h-56 mx-auto'}>
        <Image src={cityImage?.results[0].urls.raw} fill alt="city-image" priority className="object-cover rounded-xl" />
      </Container>
      <Container className={'mt-3'}>
        <h1 className="text-2xl font-bold mb-3">Current Weather</h1>
        <div className="flex items-center gap-4">
          <button className="bg-[#E8EDF2] p-2.5 rounded-lg cursor-pointer">
            <Image src={'/images/flag.png'} width={24} height={24} alt="flag" />
          </button>
          <div>
            <h3 className="font-medium text-base">{weather?.name}</h3>
            <p className="font-light text-sm">{getCountryName(weather?.sys.country)}</p>
          </div>
        </div>
      </Container>
      <Container className={'w-full'}>
        <div className="bg-gray-420 w-full rounded-xl p-6">
          <h3 className="font-medium text-base mb-2">Temperature</h3>
          <h2 className="text-2xl font-bold">{kelvinToCelsius(weather?.main.temp).toFixed(2)}°C</h2>
        </div>
      </Container>
      <Container className={'mt-2'}>
        <span>{weather?.weather[0].description.charAt(0).toUpperCase()}{weather?.weather[0].description.slice(1, weather?.weather[0].description.length)}</span>
      </Container>


      <Container className="flex items-start gap-6 w-full">
        <div className="w-1/3 border-t border-gray-200 py-5">
          <h3 className="text-blue-420 mb-1">Feels like</h3>
          <p>{kelvinToCelsius(weather?.main.feels_like).toFixed(2)}°C</p>
        </div>
        <div className="w-2/3 border-t border-gray-200 py-5">
          <h3 className="text-blue-420 mb-1">Humidity</h3>
          <p>{weather?.main.humidity}%</p>
        </div>
      </Container>


      <Container className="flex items-start gap-6 w-full">
        <div className="w-1/3 border-t border-gray-200 py-5">
          <h3 className="text-blue-420 mb-1">Wind Speed</h3>
          <p>{weather?.wind.speed} km/h</p>
        </div>
        <div className="w-2/3 border-t border-gray-200 py-5">
          <h3 className="text-blue-420 mb-1">Sunrise</h3>
          <p>{formatUnixTo12Hour(weather?.sys.sunrise)}</p>
        </div>
      </Container>

      <Container className="flex items-start gap-6 w-full">
        <div className="w-1/3 border-t border-gray-200 py-5">
          <h3 className="text-blue-420 mb-1">Sunset</h3>
          <p>{formatUnixTo12Hour(weather?.sys.sunset)}</p>
        </div>
      </Container>

      <Container>
        <h1 className="text-2xl font-bold mb-5">7-Day Forecast</h1>
        <div className="flex items-center gap-3 shrink-0">
          <ForecastCard dayImg={'monday'} dayName={"Mon"} />
          <ForecastCard dayImg={'tuesday'} dayName={"Tue"} />
          <ForecastCard dayImg={'wednesday'} dayName={"Wed"} />
          <ForecastCard dayImg={'thursday'} dayName={"Thu"} />
          <ForecastCard dayImg={'friday'} dayName={"Fri"} />
          <ForecastCard dayImg={'monday'} dayName={"Sat"} />
          <ForecastCard dayImg={'monday'} dayName={"Sun"} />
        </div>
      </Container>

      <Container className={'mt-5'}>
        <h1 className="text-2xl font-bold mb-5">Lifestyle Tips</h1>


        <ul className="w-full text-sm font-medium bg-white border border-gray-200 rounded-lg dark:border-gray-200">
          <li className="w-full px-6 py-4 border-b border-gray-200 rounded-t-lg dark:border-gray-200">Aim for 7–8 hours of sleep.</li>
          <li className="w-full px-6 py-4 border-b border-gray-200 dark:border-gray-200">Drink at least 2–3 liters of water daily.</li>
          <li className="w-full px-6 py-4 border-b border-gray-200 dark:border-gray-200">Walk at least 6,000–10,000 steps per day.</li>
          <li className="w-full px-6 py-4 rounded-b-lg">Try daily "offline" hours to reconnect with real life.</li>
        </ul>

      </Container>

    </main>
  )
}

export default Home