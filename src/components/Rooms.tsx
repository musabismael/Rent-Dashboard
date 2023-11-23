import React, { useState } from "react";

type Props = {};

const Rooms = (props: Props) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
      <div className="items-stretch self-stretch flex grow basis-[0%] flex-col max-md:max-w-full">
        <div className="flex w-full justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
          <div className="text-zinc-800 text-2xl leading-7 mt-6">Rooms</div>
          <div className="shadow-sm bg-white self-stretch flex items-stretch justify-between gap-4 pl-4 pr-20 py-3.5 rounded-xl max-md:max-w-full max-md:flex-wrap max-md:pr-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ab717e4-759b-414b-a836-7b2ceed3895f?apiKey=7ccb326431b54c7687bfd19361dd1f94&"
              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
            />
            <div className="text-zinc-900 text-base leading-5 opacity-[0.73] grow whitespace-nowrap mt-1.5 self-start">
              <input
                placeholder="Search Anything Here..."
                value={inputValue}
                className="text-zinc-900 text-base leading-5 opacity-[0.73] grow whitespace-nowrap mt-1.5 self-start"
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className="mt-7 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0 rounded-[20px] shadow-[0px_2px_6px_#00000040] [background:linear-gradient(180deg,rgb(86.49,103.34,255)_0%,rgb(35,150,239)_100%)]">
              <div className="shadow-sm flex grow flex-col items-center w-full mx-auto pl-5 pr-20 pt-7 pb-4 rounded-3xl max-md:mt-6 max-md:pr-5">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/53f6b27c-d07f-468c-a86d-46e8282d1c46?apiKey=7ccb326431b54c7687bfd19361dd1f94&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/53f6b27c-d07f-468c-a86d-46e8282d1c46?apiKey=7ccb326431b54c7687bfd19361dd1f94&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/53f6b27c-d07f-468c-a86d-46e8282d1c46?apiKey=7ccb326431b54c7687bfd19361dd1f94&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/53f6b27c-d07f-468c-a86d-46e8282d1c46?apiKey=7ccb326431b54c7687bfd19361dd1f94&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/53f6b27c-d07f-468c-a86d-46e8282d1c46?apiKey=7ccb326431b54c7687bfd19361dd1f94&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/53f6b27c-d07f-468c-a86d-46e8282d1c46?apiKey=7ccb326431b54c7687bfd19361dd1f94&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/53f6b27c-d07f-468c-a86d-46e8282d1c46?apiKey=7ccb326431b54c7687bfd19361dd1f94&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/53f6b27c-d07f-468c-a86d-46e8282d1c46?apiKey=7ccb326431b54c7687bfd19361dd1f94&"
                  className="aspect-[1.5] object-contain object-center w-[72px] overflow-hidden            "
                />
                <div className="text-white text-xl leading-6 self-stretch whitespace-nowrap mt-8 ">
                  Kitchen
                </div>
                <div className="text-white text-base leading-5 opacity-[0.76] self-stretch whitespace-nowrap mt-1">
                  8 Devices
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="shadow-sm bg-white flex grow flex-col items-center w-full mx-auto pl-5 pr-9 pt-7 pb-4 rounded-3xl max-md:mt-6 max-md:pr-5">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/84783678-fcba-41cf-9f60-8d904b42073f?apiKey=7ccb326431b54c7687bfd19361dd1f94&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/84783678-fcba-41cf-9f60-8d904b42073f?apiKey=7ccb326431b54c7687bfd19361dd1f94&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/84783678-fcba-41cf-9f60-8d904b42073f?apiKey=7ccb326431b54c7687bfd19361dd1f94&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/84783678-fcba-41cf-9f60-8d904b42073f?apiKey=7ccb326431b54c7687bfd19361dd1f94&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/84783678-fcba-41cf-9f60-8d904b42073f?apiKey=7ccb326431b54c7687bfd19361dd1f94&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/84783678-fcba-41cf-9f60-8d904b42073f?apiKey=7ccb326431b54c7687bfd19361dd1f94&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/84783678-fcba-41cf-9f60-8d904b42073f?apiKey=7ccb326431b54c7687bfd19361dd1f94&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/84783678-fcba-41cf-9f60-8d904b42073f?apiKey=7ccb326431b54c7687bfd19361dd1f94&"
                  className="aspect-[2.38] object-contain object-center w-[114px] overflow-hidden"
                />
                <div className="text-stone-900 text-xl leading-6 self-stretch whitespace-nowrap mt-8">
                  Living Room
                </div>
                <div className="text-stone-900 text-base leading-5 opacity-[0.76] self-stretch whitespace-nowrap mt-1">
                  12 Devices
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="shadow-sm bg-white flex grow flex-col items-center w-full mx-auto pl-5 pr-16 pt-7 pb-4 rounded-3xl max-md:mt-6 max-md:pr-5">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b47c2a0f-16e9-42dd-b4dc-c2572b6f6b2c?apiKey=7ccb326431b54c7687bfd19361dd1f94&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47c2a0f-16e9-42dd-b4dc-c2572b6f6b2c?apiKey=7ccb326431b54c7687bfd19361dd1f94&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47c2a0f-16e9-42dd-b4dc-c2572b6f6b2c?apiKey=7ccb326431b54c7687bfd19361dd1f94&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47c2a0f-16e9-42dd-b4dc-c2572b6f6b2c?apiKey=7ccb326431b54c7687bfd19361dd1f94&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47c2a0f-16e9-42dd-b4dc-c2572b6f6b2c?apiKey=7ccb326431b54c7687bfd19361dd1f94&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47c2a0f-16e9-42dd-b4dc-c2572b6f6b2c?apiKey=7ccb326431b54c7687bfd19361dd1f94&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47c2a0f-16e9-42dd-b4dc-c2572b6f6b2c?apiKey=7ccb326431b54c7687bfd19361dd1f94&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b47c2a0f-16e9-42dd-b4dc-c2572b6f6b2c?apiKey=7ccb326431b54c7687bfd19361dd1f94&"
                  className="aspect-[1.79] object-contain object-center w-[86px] overflow-hidden"
                />
                <div className="text-stone-900 text-xl leading-6 self-stretch whitespace-nowrap mt-8">
                  Bedroom
                </div>
                <div className="text-stone-900 text-base leading-5 opacity-[0.76] self-stretch whitespace-nowrap mt-1">
                  4 Devices
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="shadow-sm bg-white flex grow flex-col items-center w-full mx-auto pl-5 pr-14 pt-7 pb-4 rounded-3xl max-md:mt-6 max-md:pr-5">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/dba8ff93-7874-46b0-b2b4-b56abc1a1652?apiKey=7ccb326431b54c7687bfd19361dd1f94&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/dba8ff93-7874-46b0-b2b4-b56abc1a1652?apiKey=7ccb326431b54c7687bfd19361dd1f94&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dba8ff93-7874-46b0-b2b4-b56abc1a1652?apiKey=7ccb326431b54c7687bfd19361dd1f94&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/dba8ff93-7874-46b0-b2b4-b56abc1a1652?apiKey=7ccb326431b54c7687bfd19361dd1f94&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/dba8ff93-7874-46b0-b2b4-b56abc1a1652?apiKey=7ccb326431b54c7687bfd19361dd1f94&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dba8ff93-7874-46b0-b2b4-b56abc1a1652?apiKey=7ccb326431b54c7687bfd19361dd1f94&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/dba8ff93-7874-46b0-b2b4-b56abc1a1652?apiKey=7ccb326431b54c7687bfd19361dd1f94&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/dba8ff93-7874-46b0-b2b4-b56abc1a1652?apiKey=7ccb326431b54c7687bfd19361dd1f94&"
                  className="aspect-[1.96] object-contain object-center w-[94px] overflow-hidden"
                />
                <div className="text-stone-900 text-xl leading-6 self-stretch whitespace-nowrap mt-8">
                  Bathroom
                </div>
                <div className="text-stone-900 text-base leading-5 opacity-[0.76] self-stretch whitespace-nowrap mt-1">
                  3 Devices
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between gap-5 mt-11 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
          <div className="text-zinc-800 text-2xl leading-7 my-auto">Levels</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d858c298-00f3-465c-8428-b9cc2c07cf6a?apiKey=7ccb326431b54c7687bfd19361dd1f94&"
            className="aspect-square object-contain object-center w-6 fill-black fill-opacity-0 overflow-hidden self-stretch shrink-0 max-w-full"
          />
        </div>
        <div className="mt-7 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
              <div className="shadow-sm bg-white flex w-full grow flex-col items-stretch mx-auto pl-5 pr-6 py-6 rounded-2xl max-md:mt-6 max-md:pr-5">
                <div className="flex w-full items-stretch justify-between gap-5">
                  <div className="flex items-stretch justify-between gap-4">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/280d3bad-f9eb-4fd8-a51d-add1a72aad8d?apiKey=7ccb326431b54c7687bfd19361dd1f94&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/280d3bad-f9eb-4fd8-a51d-add1a72aad8d?apiKey=7ccb326431b54c7687bfd19361dd1f94&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/280d3bad-f9eb-4fd8-a51d-add1a72aad8d?apiKey=7ccb326431b54c7687bfd19361dd1f94&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/280d3bad-f9eb-4fd8-a51d-add1a72aad8d?apiKey=7ccb326431b54c7687bfd19361dd1f94&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/280d3bad-f9eb-4fd8-a51d-add1a72aad8d?apiKey=7ccb326431b54c7687bfd19361dd1f94&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/280d3bad-f9eb-4fd8-a51d-add1a72aad8d?apiKey=7ccb326431b54c7687bfd19361dd1f94&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/280d3bad-f9eb-4fd8-a51d-add1a72aad8d?apiKey=7ccb326431b54c7687bfd19361dd1f94&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/280d3bad-f9eb-4fd8-a51d-add1a72aad8d?apiKey=7ccb326431b54c7687bfd19361dd1f94&"
                      className="aspect-square object-contain object-center w-12 overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="text-neutral-600 text-2xl leading-7 self-center grow whitespace-nowrap my-auto">
                      Humidity
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 mt-5 self-start">
                    <div className="text-stone-900 text-base leading-5 my-auto">
                      Today
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/9aad4e72-5f90-42fa-a962-f42665e91c85?apiKey=7ccb326431b54c7687bfd19361dd1f94&"
                      className="aspect-square object-contain object-center w-5 fill-black fill-opacity-0 overflow-hidden self-stretch shrink-0 max-w-full"
                    />
                  </div>
                </div>
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/24a835f1-91d7-4560-9585-f5d1df2b1403?apiKey=7ccb326431b54c7687bfd19361dd1f94&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/24a835f1-91d7-4560-9585-f5d1df2b1403?apiKey=7ccb326431b54c7687bfd19361dd1f94&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/24a835f1-91d7-4560-9585-f5d1df2b1403?apiKey=7ccb326431b54c7687bfd19361dd1f94&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/24a835f1-91d7-4560-9585-f5d1df2b1403?apiKey=7ccb326431b54c7687bfd19361dd1f94&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/24a835f1-91d7-4560-9585-f5d1df2b1403?apiKey=7ccb326431b54c7687bfd19361dd1f94&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/24a835f1-91d7-4560-9585-f5d1df2b1403?apiKey=7ccb326431b54c7687bfd19361dd1f94&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/24a835f1-91d7-4560-9585-f5d1df2b1403?apiKey=7ccb326431b54c7687bfd19361dd1f94&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/24a835f1-91d7-4560-9585-f5d1df2b1403?apiKey=7ccb326431b54c7687bfd19361dd1f94&"
                  className="aspect-[7.2] object-contain object-center w-[317px] stroke-[1px] stroke-sky-500 overflow-hidden self-center mt-8"
                />
                <div className="flex items-stretch justify-between gap-5 ml-4 mt-7 self-start max-md:justify-center max-md:ml-2.5">
                  <div className="text-neutral-700 text-sm leading-4 opacity-75">
                    24°
                  </div>
                  <div className="text-neutral-700 text-sm leading-4 opacity-75">
                    33°
                  </div>
                  <div className="text-neutral-700 text-sm leading-4 opacity-75">
                    29°
                  </div>
                  <div className="text-neutral-700 text-sm leading-4 opacity-75">
                    35°
                  </div>
                  <div className="text-neutral-700 text-sm leading-4 opacity-75">
                    24°
                  </div>
                  <div className="text-neutral-700 text-sm leading-4 opacity-75 whitespace-nowrap">
                    40°
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="shadow-sm bg-white flex w-full grow flex-col items-stretch mx-auto pl-5 pr-7 py-6 rounded-2xl max-md:mt-6 max-md:pr-5">
                <div className="flex w-full items-stretch justify-between gap-5">
                  <div className="flex items-stretch justify-between gap-4">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1dbfb2a4-4025-4dc7-969b-acc2e9574755?apiKey=7ccb326431b54c7687bfd19361dd1f94&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1dbfb2a4-4025-4dc7-969b-acc2e9574755?apiKey=7ccb326431b54c7687bfd19361dd1f94&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1dbfb2a4-4025-4dc7-969b-acc2e9574755?apiKey=7ccb326431b54c7687bfd19361dd1f94&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1dbfb2a4-4025-4dc7-969b-acc2e9574755?apiKey=7ccb326431b54c7687bfd19361dd1f94&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1dbfb2a4-4025-4dc7-969b-acc2e9574755?apiKey=7ccb326431b54c7687bfd19361dd1f94&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1dbfb2a4-4025-4dc7-969b-acc2e9574755?apiKey=7ccb326431b54c7687bfd19361dd1f94&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1dbfb2a4-4025-4dc7-969b-acc2e9574755?apiKey=7ccb326431b54c7687bfd19361dd1f94&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1dbfb2a4-4025-4dc7-969b-acc2e9574755?apiKey=7ccb326431b54c7687bfd19361dd1f94&"
                      className="aspect-square object-contain object-center w-12 overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="text-neutral-600 text-2xl leading-7 self-center grow whitespace-nowrap my-auto">
                      Energy
                    </div>
                  </div>
                  <div className="flex gap-1.5 mt-5 self-start">
                    <div className="text-stone-900 text-base leading-5">
                      Week
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/46343383-8d1c-47d0-9ea9-f58d96087f00?apiKey=7ccb326431b54c7687bfd19361dd1f94&"
                      className="aspect-square object-contain object-center w-5 fill-black fill-opacity-0 overflow-hidden self-stretch shrink-0 max-w-full"
                    />
                  </div>
                </div>
                <div className="flex justify-between gap-0 mt-6">
                  <div className="flex mr-0 gap-0 mt-9 pr-20 max-md:pr-5">
                    <div className="bg-stone-300 mr-0 shrink-0 h-px mt-7" />
                    <div className="rounded bg-indigo-50 self-stretch flex w-6 shrink-0 h-[30px] flex-col" />
                  </div>
                  <div className="self-stretch flex items-start justify-between gap-3.5 max-md:justify-center">
                    <div className="rounded bg-indigo-50 flex w-6 shrink-0 h-[52px] flex-col mt-4 self-start" />
                    <div className="rounded bg-indigo-50 flex w-6 shrink-0 h-[34px] flex-col mt-8 self-end" />
                    <div className="rounded bg-indigo-50 flex w-6 shrink-0 h-[60px] flex-col mt-2 self-start" />
                    <div className="rounded bg-indigo-50 flex w-6 shrink-0 h-12 flex-col mt-5 self-start" />
                    <div className="flex grow basis-[0%] flex-col items-stretch mt-8 self-end">
                      <div className="text-sky-500 text-xs leading-3 whitespace-nowrap">
                        20.6 kWh
                      </div>
                      <div className="rounded bg-sky-500 flex shrink-0 h-[23px] flex-col mt-2" />
                    </div>
                    <div className="rounded bg-indigo-50 self-stretch flex w-6 shrink-0 h-[67px] flex-col" />
                  </div>
                </div>
                <div className="flex items-stretch justify-between gap-5 mt-4 max-md:justify-center">
                  <div className="text-neutral-700 text-sm leading-4">Sun</div>
                  <div className="text-neutral-700 text-sm leading-4">Mon</div>
                  <div className="text-neutral-700 text-sm leading-4">Tue</div>
                  <div className="text-neutral-700 text-sm leading-4">Wed</div>
                  <div className="text-neutral-700 text-sm leading-4">Thu</div>
                  <div className="text-neutral-700 text-sm leading-4">Fri</div>
                  <div className="text-neutral-700 text-sm leading-4 whitespace-nowrap">
                    Sat
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between gap-5 mt-11 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
          <div className="text-zinc-800 text-2xl leading-7 my-auto">
            Devices
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e509d88-da14-4f00-94e6-dc44e4e5eac9?apiKey=7ccb326431b54c7687bfd19361dd1f94&"
            className="aspect-square object-contain object-center w-6 fill-black fill-opacity-0 overflow-hidden self-stretch shrink-0 max-w-full"
          />
        </div>
        <div className="mt-7 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
              <div className="shadow-sm bg-white flex w-full grow flex-col items-center mx-auto pt-7 pb-5 px-6 rounded-3xl max-md:mt-6 max-md:px-5">
                <div className="self-stretch flex items-center justify-between gap-5">
                  <div className="text-zinc-600 text-xl leading-6 my-auto">
                    Off
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f0438e44-0d3b-4fc6-9bc3-a33707cf4f38?apiKey=7ccb326431b54c7687bfd19361dd1f94&"
                    className="aspect-[2] object-contain object-center w-10 overflow-hidden self-stretch shrink-0 max-w-full"
                  />
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c2e660a0-6f1f-48c0-90dc-42ea5887928e?apiKey=7ccb326431b54c7687bfd19361dd1f94&"
                  className="aspect-[2.4] object-contain object-center w-[120px] overflow-hidden mt-8"
                />
                <div className="text-blue-900 text-base leading-5 self-stretch whitespace-nowrap mt-5">
                  Air Conditioner
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="shadow-sm bg-blue-200 flex w-full grow flex-col items-center mx-auto pt-7 pb-5 px-6 rounded-3xl max-md:mt-6 max-md:px-5">
                <div className="self-stretch flex items-center justify-between gap-5">
                  <div className="text-zinc-600 text-xl leading-6 my-auto">
                    On
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d6cf6f7-f57b-470e-b21e-1aac80e99da2?apiKey=7ccb326431b54c7687bfd19361dd1f94&"
                    className="aspect-[2] object-contain object-center w-10 overflow-hidden self-stretch shrink-0 max-w-full"
                  />
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/599a6075-9ff7-4d9d-9d2c-57bb354ef689?apiKey=7ccb326431b54c7687bfd19361dd1f94&"
                  className="aspect-[2.4] object-contain object-center w-[120px] overflow-hidden mt-8"
                />
                <div className="text-blue-900 text-base leading-5 self-stretch whitespace-nowrap mt-5">
                  Smart TV
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="shadow-sm bg-white flex w-full grow flex-col items-center mx-auto pt-7 pb-5 px-6 rounded-3xl max-md:mt-6 max-md:px-5">
                <div className="self-stretch flex items-center justify-between gap-5">
                  <div className="text-zinc-600 text-xl leading-6 my-auto">
                    Off
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c0fe9a7-cb76-4765-86af-4ce5f8b291d4?apiKey=7ccb326431b54c7687bfd19361dd1f94&"
                    className="aspect-[2] object-contain object-center w-10 overflow-hidden self-stretch shrink-0 max-w-full"
                  />
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/51a07384-46a7-4245-bed7-1c95f624aeb1?apiKey=7ccb326431b54c7687bfd19361dd1f94&"
                  className="aspect-[2.4] object-contain object-center w-[120px] overflow-hidden mt-8"
                />
                <div className="text-blue-900 text-base leading-5 self-stretch whitespace-nowrap mt-5">
                  Coffee Machine
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="shadow-sm bg-blue-200 flex w-full grow flex-col items-center mx-auto pt-7 pb-4 px-6 rounded-3xl max-md:mt-6 max-md:px-5">
                <div className="self-stretch flex items-center justify-between gap-5">
                  <div className="text-zinc-600 text-xl leading-6 my-auto">
                    On
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ab6371a-07e3-4ea1-a73d-da18ed1855a5?apiKey=7ccb326431b54c7687bfd19361dd1f94&"
                    className="aspect-[2] object-contain object-center w-10 overflow-hidden self-stretch shrink-0 max-w-full"
                  />
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/29a3f973-cc92-4feb-a81e-86e2ef5df934?apiKey=7ccb326431b54c7687bfd19361dd1f94&"
                  className="aspect-[2.4] object-contain object-center w-[120px] overflow-hidden mt-8"
                />
                <div className="text-blue-900 text-base leading-5 self-stretch whitespace-nowrap mt-5">
                  Refrigerator
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Rooms;
