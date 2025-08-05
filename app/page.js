import Container from "@/components/Container"
import SearchBar from "@/components/SearchBar"
import WeatherInfo from "@/components/WeatherInfo"
import { getWeatherForCity, getCityImage, get7DayWeather, kelvinToCelsius } from "@/lib/weather"
import Image from "next/image"
import SevenDayInfo from "@/components/SevenDayInfo"
import LifestyleTips from "@/components/LifeStyleTips"
import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"


const Home = async ({ searchParams }) => {

  const city = searchParams.city || '';

  const user = await currentUser()



  let weather;
  let cityImage;
  let sevenDayWeather;
  let photo;
  let photoUrl;


  if (!user) {
    redirect('/sign-in')
  }

  if (city) {
    weather = await getWeatherForCity(city);
    cityImage = await getCityImage(city);
    sevenDayWeather = await get7DayWeather(city);
    photo = cityImage.results[0];
    photoUrl = photo.urls.regular;
  }

  if (!city) {
    return (
      <main className="lg:px-40 py-5">
        <Container>
          <SearchBar city={city} />
        </Container>
      </main>
    )
  }

  return (
    <main className="lg:px-40 py-5">
      <Container>
        <SearchBar city={city} />
      </Container>
      <Container className={'relative w-[97%] h-56 mx-auto'}>
        <Image src={photoUrl} fill alt="city-image" className="object-cover rounded-xl" />
      </Container>

      <WeatherInfo weather={weather} />

      <SevenDayInfo sevenDayWeather={sevenDayWeather} />


      <Container className={'mt-5 w-[95vw] mx-auto'}>
        <h1 className="text-2xl font-bold mb-5">Lifestyle Tips</h1>

        {weather?.name && <LifestyleTips temperature={kelvinToCelsius(weather?.main.temp)} city={city} desc={weather?.weather[0].description} />}

      </Container>

    </main>
  )
}

export default Home