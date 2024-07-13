// convertKelvinToCelsius.ts

// 절대온도에서 섭씨온도로 바꾸는 함수
export function convertKelvinToCelsius(tempInKelvin : number) : number
{
    let tempInCelsius = tempInKelvin - 273.15;
    return Math.floor(tempInCelsius)            // 반올림
}