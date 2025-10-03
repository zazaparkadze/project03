import React from "react";
import getGeoResults from "@/lib/getGeoResults";
import GeoPage from "./components/GeoPage";
import type { Metadata } from "next";

type Props = {
  params: {
    name: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { name } = await params;

  return {
    title: `${name} weather`,
    description: `${name} weather forecast`,
  };
}

export default async function page({ params }: Props) {
  const { name } = await params;

  const geoData = getGeoResults(name);
  const geoResultsRaw = await geoData;
  const geoResults: geoResults[] = geoResultsRaw.results;

  if (!geoResults) {
    return (
      <h1 className="text-3xl text-red-700">{`Location with name ${name} was not found`}</h1>
    );
  }
  const content = (
    <div className="flex flex-col wrap-break-word bg-gray-300 text-black min-h-[100vh] justify-center items-center">
      <h1 className="text-4xl text-center font-bold"> {name.toUpperCase()}</h1>
      {geoResults.map((result) => (
        <GeoPage result={result} key={result.id} />
      ))}
    </div>
  );

  return content;
}
