import React from "react";
import getMeteoResults from "@/lib/getMeteoResults";
import clsx from "clsx";

type Props = {
  searchObject: SearchObject;
};

export default async function MeteoPage({ searchObject }: Props) {
  const meteoData: Promise<meteoResults> = getMeteoResults(searchObject);
  const meteo = await meteoData;

  let timeTemperature: string[][] = [];
  meteo.hourly.time.forEach((element) =>
    timeTemperature.push([
      element,
      meteo.hourly.temperature_2m[meteo.hourly.time.indexOf(element)] + "",
    ])
  );

  const content = (
    <div className="text-black m-5">
      <h1 className="text-3xl font-bold underline">Content</h1>
      <article>
        <p>Sunrise:</p>
        <p>Sunset:</p>
        <br />
      </article>
      {/*    {Object.entries(meteo).map(([key, value]) => (
        <p key={key}>
          {JSON.stringify(key)} : {JSON.stringify(value)}
        </p>
      ))} */}

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
              <p>Wind: "wind"</p>
              <p>Precipitation: "Almost Zero "</p>
            </section>
            <article>
              <p>Comment:</p>
              <br />
            </article>
          </div>
        );
      })}
    </div>
  );

  return content;
}
