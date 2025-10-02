import React from "react";
import getSunResults from "@/lib/getSunResults";

export default async function SunPage({ name }: { name: string }) {
  const sunResults: SunsetSunrizeResult = await getSunResults(name);
  const result = sunResults.results;
  const content = (
    <div className="">
      <p className="text-3xl text-nowrap bg-slate-600 text-amber-300 py-10 text-center rounded-[15px] w-202">
        In {name}
      </p>
      <div className="flex gap-2 mt-2">
        <p className="text-3xl bg-slate-800 text-amber-400 py-5 px-15 rounded-[15px] min-w-100">
          Sunrise: {result.sunrise}
        </p>
        <p className="text-3xl bg-slate-800 text-amber-400 py-5 px-15 rounded-[15px] min-w-100">
          SunSet: {result.sunset}
        </p>
      </div>
      <p>Day Length: {result.day_length}</p>
      <p>Time Zone: {result.timezone}</p>
      <p className="text-green-800">Status: {sunResults.status}</p>
    </div>
  );
  return content;
}
