import Image from 'next/image'

const ForecastCard = ({ dayName, dayImg }) => {
    return (
        <div>
            <Image src={`/images/${dayImg}.png`} width={160} height={160} alt="day" className="mb-4" />
            <div>
                <h3 className="font-medium">{dayName}</h3>
                <span className="text-sm font-light">18°C / 25°C</span>
            </div>
        </div>
    )
}

export default ForecastCard