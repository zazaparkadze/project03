import React from "react";
import MeteoPage from "../components/MeteoPage";
import getGeoResults from "@/lib/getGeoResults";
import objValuesToString from "@/lib/objValuesToString";

type Prop = {
  params: {
    name: string;
  };
};

export default async function Meteo({ params }: Prop) {
  const { name } = await params;
  const geoData = getGeoResults(name);
  const geoResultsRaw = await geoData;
  /*   console.log(geoResultsRaw); */
  const geoResults: geoResults[] = geoResultsRaw.results;
  /*   console.log(geoResults); */
  const { latitude, longitude } = geoResults[0];

  const meteoParamObjectRaw: geoResults = { name, latitude, longitude };
  const meteoParamObject: SearchObject = objValuesToString(meteoParamObjectRaw);

  return (
    <div className={`text-3xl text-amber-500`}>
      <h1>Under Construction</h1>
      <MeteoPage searchObject={meteoParamObject} />
    </div>
  );
}
