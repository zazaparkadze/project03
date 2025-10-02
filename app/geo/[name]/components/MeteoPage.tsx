import React from "react";
import getMeteoResults from "@/lib/getMeteoResults";
import SunPage from "./SunPage";
import clsx from "clsx";

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
          <div key={time}>
            <section>
              <p className="font-bold text">
                {dateTime}:{" "}
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
              <br />
            </section>
          </div>
        );
      })}
    </div>
  );

  return content;
}
