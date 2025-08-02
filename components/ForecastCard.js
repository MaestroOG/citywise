import Image from 'next/image'

const ForecastCard = ({ dayName, dayImg, tempMin, tempMax }) => {
    return (
        <div>
            <Image src={`/images/${dayImg}.png`} width={160} height={160} alt="day" className="mb-4 rounded-lg" />
            <div>
                <h3 className="font-medium">{dayName}</h3>
                <span className="text-sm font-light">{tempMin}°C / {tempMax}°C</span>
            </div>
        </div>
    )
}

export default ForecastCard