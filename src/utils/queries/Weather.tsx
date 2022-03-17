import { useQuery } from 'react-query';
import { weatherKey } from './keys';

export const getWeatherData = (lat:number,lon:number,exclude?:string[]) => {
  const SNOWPACK_PUBLIC_WEATHER_API_KEY = weatherKey;
  const excludeString= exclude?.toString
  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${
        lat
      }&lon=${
        lon
      }&exclude=${
        excludeString
      }&appid=${
        SNOWPACK_PUBLIC_WEATHER_API_KEY
      }`
    ).then((res) => res.json()),
  );
  if (isLoading) return 'Loading...';
  if (error) return `Ah crikey! Error Message: ${error.message}`;
  return data;
};
