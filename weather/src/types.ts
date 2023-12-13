export interface WeatherInterface {
   location: LocationInterface;
   current: CurrentInterface;
   forecast: ForecastInterface;
   error: ErrorInterface
}

export interface ErrorInterface {
    code: number;
    message: string;
 
}


export interface LocationInterface {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime_epoch: number;
    localtime: string;


    
}

export interface CurrentInterface {
    cloud: number;
    condition: ConditionInterface;
    feelslike_c: number;
    feelslike_f: number;
    gust_kph: number;
    gust_mph: number;
    humidity: number;
    is_day: number;
    last_updated: string;
    last_updated_epoch: number;
    precip_in: number;
    precip_mm: number;
    pressure_in: number;
    pressure_mb: number;
    temp_c: number;
    temp_f: number;
    uv: number;
    vis_km: number;
    vis_miles: number;
    wind_degree: number;
    wind_dir: string;
    wind_kph: number;
    wind_mph: number;

}

export interface ConditionInterface {
text: string;
icon: string;
code: number;
}

export interface ForecastInterface{
    forecastday: ForecastDayInterface[];

}

export interface ForecastDayInterface{
    astro: AstroInterface;
    date: string;
    date_epoch: number;
    day: DayInterface;

}



export interface AstroInterface{
    sunrise: string;
    sunset: string;
    moonrise: string;
    moonset: string;
    moon_phase: string;
    is_moon_up: number;
    is_sun_up: number;
    moon_illumination: string

}

export interface DayInterface{
    avghumidity: number;
    avgtemp_c: number;
    avgtemp_f: number;
    avgvis_km: number;
    avgvis_miles: number;
    condition: DayConditionInterface;
    daily_chance_of_rain: number;
    daily_chance_of_snow: number;
    daily_will_it_rain: number;
    daily_will_it_snow: number;
    maxtemp_c: number;
    maxtemp_f: number;
    maxwind_kph: number;
    maxwind_mph: number;
    mintemp_c: number;
    mintemp_f: number;
    totalprecip_in: number;
    totalprecip_mm: number;
    totalsnow_cm: number;
    uv: number;

}

export interface DayConditionInterface{
   code: number;
   icon: string;
   text: string;

}