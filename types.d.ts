type ArrayOfStrings = string[];
type ArrayOfNumbers = number[];

type HourlyObject = {
  time: ArrayOfStrings;
  temperature_2m: ArrayOfNumbers;
  relative_humidity_2m: ArrayOfNumbers;
  wind_speed_10m: ArrayOfNumbers;
  current: {
    time: ArrayOfStrings;
    temperature_2m?: string;
    wind_speed_10m?: string;
  };
};

type geoResults = {
  [index: string]: string | number;
  id?: string | number;
  name: string;
  latitude: string | number;
  longitude: string | number;
  elevation?: string | number;
  feature_code?: string;
  country_code?: string;
  admin1_id?: number;
  admin2_id?: number;
  admin3_id?: number;
  admin4_id?: number;
  timezone?: string;
  population?: number;
  postcodes?: ArrayOfStrings;
  country_id?: number;
  country?: string;
  admin1?: string;
  admin2?: string;
  admin3?: string;
  admin4?: string;
};
/* 
type meteoSearchObject = {
  latitude: string;
  longitude: string;
  hourly?: string;
  id?: string;
  name: string;
  elevation?: string;
  feature_code?: string;
  country_code?: string;
  admin1_id?: string;
  timezone?: string;
  population?: string;
  country_id?: string;
  country?: string;
  admin1?: string;
  forecast_days?: string;
};
 */
type meteoResults = {
  latitude: number;
  longitude: number;
  elevation: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  hourly: HourlyObject;
  current: {
    temperature_2m?: string;
    wind_speed_10m?: string;
  };
  hourly_units: {
    temperature_2m?: ArrayOfNumbers;
  };
};
type SearchObject = {
  [index: string]: string;
  name: string;
  latitude: string;
  longitude: string;
  hourly?: string;
  forecast_days?: string;
};
