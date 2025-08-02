import { getDayOfWeek } from "@/lib/weather"
import Container from "./Container"
import ForecastCard from "./ForecastCard"


const SevenDayInfo = ({ sevenDayWeather }) => {
    return (
        <>
            <Container>
                <h1 className="text-2xl font-bold mb-5">7-Day Forecast</h1>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-3 shrink-0">
                    {sevenDayWeather?.forecastday.map(forecast => (
                        <ForecastCard key={forecast?.date} dayImg={getDayOfWeek(forecast?.date).toLowerCase()} dayName={getDayOfWeek(forecast?.date).slice(0, 3)} tempMin={forecast?.day.mintemp_c} tempMax={forecast?.day.maxtemp_c} />
                    ))}
                </div>
            </Container>
        </>
    )
}

export default SevenDayInfo