import React from "react";
import getMeteoResults from "@/lib/getMeteoResults";
import SunPage from "./SunPage";
import clsx from "clsx";
import { format } from "date-fns";

type Props = {
  searchObject: SearchObject;
};

export default async function MeteoPage({ searchObject }: Props) {
  const meteoData: Promise<meteoResults> = getMeteoResults(searchObject);
  const meteo = await meteoData;

  const timeTemperature: string[][] = [];
  meteo.hourly.time.forEach((element) =>
    timeTemperature.push([
      element,
      meteo.hourly.temperature_2m[meteo.hourly.time.indexOf(element)] + "",
    ])
  );

  const content = (
    <div className="text-black m-5">
      <SunPage name={searchObject.name} />
      <br />

      {timeTemperature.map(([time, value]) => {
        const dateTime = new Date(time).toString();
        return (
          <section
            key={time}
            className="w-[100%] bg-gradient-to-r from-gray-400 to-gray-100 flex flex-col items-center justify-center gap-1 mt-3 py-2 rounded-[15px]"
          >
            <p className="font-bold text-3xl">
              {format(dateTime, "dd-MM-yyyy\thh:mm:ss")}:{" "}
              <span
                className={`${clsx({
                  "text-green-900": Number(value) > 26,
                  "text-blue-900": Number(value) <= 26,
                })} underline`}
              >
                {" "}
                {value} ℃
              </span>
            </p>
            <p>Wind: {meteo.current.wind_speed_10m}</p>
            <p>Precipitation: Almost Zero </p>
          </section>
        );
      })}
    </div>
  );

  return content;
}
