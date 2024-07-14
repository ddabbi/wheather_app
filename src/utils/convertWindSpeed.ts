export function convertWindSpeed(speedInMeterPerSecond : number) : string{
    const speedInKilometerPerHour = (speedInMeterPerSecond * 3.6).toFixed(1);
    return `${speedInKilometerPerHour}km/h`
}