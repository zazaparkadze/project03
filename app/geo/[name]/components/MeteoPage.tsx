import React from "react";
import getMeteoResults from "@/lib/getMeteoResults";

type Props = {
  searchObject: SearchObject;
};

export default async function MeteoPage({ searchObject }: Props) {
  const meteoData: Promise<meteoResults> = getMeteoResults(searchObject);
  const meteo = await meteoData;

  let content = (
    <div className="text-black m-5">
      <h1 className="text-3xl font-bold underline">Content</h1>
      {Object.entries(meteo).map(([key, value]) => (
        <p key={key}>
          {JSON.stringify(key)} : {JSON.stringify(value)}
        </p>
      ))}
      {meteo.hourly.time.map((value) => (
        <p key={meteo.hourly.time.indexOf(value)}>{value}</p>
      ))}
    </div>
  );

  return content;
}
