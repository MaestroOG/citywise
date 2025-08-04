import { getCountryName, kelvinToCelsius, formatUnixTo12Hour } from "@/lib/weather"
import Container from "./Container"
import Image from "next/image"


const WeatherInfo = ({ weather }) => {
    return (
        <>
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


            <Container className="flex flex-col md:flex-row items-start gap-6 w-full">
                <div className="w-full md:w-1/3 border-t border-gray-200 py-5">
                    <h3 className="text-blue-420 mb-1">Feels like</h3>
                    <p>{kelvinToCelsius(weather?.main.feels_like).toFixed(2)}°C</p>
                </div>
                <div className="w-full md:w-2/3 border-t border-gray-200 py-5">
                    <h3 className="text-blue-420 mb-1">Humidity</h3>
                    <p>{weather?.main.humidity}%</p>
                </div>
            </Container>


            <Container className="flex items-start flex-col md:flex-row gap-6 w-full">
                <div className="w-full md:w-1/3 border-t border-gray-200 py-5">
                    <h3 className="text-blue-420 mb-1">Wind Speed</h3>
                    <p>{weather?.wind.speed} km/h</p>
                </div>
                <div className="w-full md:w-2/3 border-t border-gray-200 py-5">
                    <h3 className="text-blue-420 mb-1">Sunrise</h3>
                    <p>{formatUnixTo12Hour(weather?.sys.sunrise)}</p>
                </div>
            </Container>

            <Container className="flex items-start gap-6 w-full">
                <div className="w-full md:w-1/3 border-t border-gray-200 py-5">
                    <h3 className="text-blue-420 mb-1">Sunset</h3>
                    <p>{formatUnixTo12Hour(weather?.sys.sunset)}</p>
                </div>
            </Container>
        </>
    )
}

export default WeatherInfo