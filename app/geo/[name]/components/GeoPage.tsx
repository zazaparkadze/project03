import MeteoPage from "./MeteoPage";
import objValuesToString from "@/lib/objValuesToString";
import Link from "next/link";

type Props = {
  result: geoResults;
};

export default function GeoPage({ result }: Props) {
  const { id, name, latitude, longitude, timezone } = result;

  const meteoParamObjectRaw: geoResults = { name, latitude, longitude };
  const meteoParamObject: SearchObject = objValuesToString(meteoParamObjectRaw);
  return (
    <div>
      <ol className="text-2xl text-center ">
        <li>id: {id}</li>
        <li>Name: {name}</li>
        <li>Longitude: {longitude}</li>
        <li>Latitude: {latitude}</li>
        <li>Timezone: {timezone}</li>
      </ol>
      <p className="text-4xl text-center font-extrabold underline">
        <Link href={`/geo/${name}/meteo`}> Get Weather Info</Link>
      </p>
      <div className={`text-2xl text-amber-300`}>
        <MeteoPage searchObject={meteoParamObject} />
      </div>
    </div>
  );
}
