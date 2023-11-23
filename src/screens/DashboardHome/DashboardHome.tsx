import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Rooms from "../../components/Rooms";
import Members from "../../components/Members";

export const DashboardHome = (): JSX.Element => {
  return (
    <div className="bg-indigo-50 pl-7 pr-11 max-md:px-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[19%] max-md:w-full max-md:ml-0">
          <div className="items-stretch flex flex-col mt-7 max-md:mt-10">
            <Sidebar />
          </div>
        </div>
        <div className="flex flex-col items-stretch w-[81%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex justify-between gap-5 mt-8 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10">
            <Rooms />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e67a9ff-29f5-4c40-b90b-e9da8f6a1075?apiKey=7ccb326431b54c7687bfd19361dd1f94&"
              className="aspect-[0] object-contain object-center w-px stroke-[1px] stroke-zinc-400 overflow-hidden shrink-0 max-w-full mt-20 max-md:mt-10"
            />
            <Members />
          </div>
        </div>
      </div>
    </div>
  );
};
