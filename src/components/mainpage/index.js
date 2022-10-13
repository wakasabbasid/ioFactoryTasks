import React from "react";

const Varieties = () => {
  return (
    <div className="w-full  h-full pl-10 pr-10">
      {/* header */}
      <div className="flex flex-col justify-center items-center mb-3">
        <div className="flex justify-center items-center flex-col">
          <p
            className="text-xs md:text-base lg:text-2xl  font-poppins font-extralight pt-5 lg:pb-1"
            style={{ fontStyle: "normal" }}
          >
            VARIETIES
          </p>
          <div className="border-b  lg:border-b-2 border-slate-800 w-10 md:w-14 lg:w-16 pt-3"></div>
        </div>
      </div>

      {/* midel section */}
      <div className="mt-5 w-full h-full grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-x-2 gap-y-3 sm:gap-y-0">
        <div className="w-full flex flex-col h-97 relative">
          <div className=" w-full absolute z-10 h-97 ">
            <img
              src={require("../../assets/Bitmap.png")}
              className="w-full h-full object-cover rounded-xl "
              alt="Bitmap"
            />
          </div>
          <div
            className="z-50 w-full absolute bottom-0 opacity-90 flex flex-col justify-center items-center rounded-xl p-4"
            style={{ background: "#533972", height: "40%" }}
          >
            <div style={{ width: "90%" }} className="flex flex-col  gap-y-5">
              <div className="text-white font-Poppins w-full">
                <p className="text-lg font-bold leading-10 mb-2 line-clamp-1">
                  Pizza is a savory dish of Italian origin
                </p>
                <p className="leading-8 font-light w-full line-clamp-2 ">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry.
                </p>
              </div>
              <div className="flex flex-col w-full items-center gap-y-3">
                <div className="border-b-2 w-full "></div>
                <div className="flex flex-row w-full text-white">
                  <div className="flex p-2 border-2 border-white rounded-3xl w-32">
                    <button className=" leading-6 font-Poppins">Explore</button>
                    <div className="mt-1 ml-auto mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className=" ml-auto mr-1 flex  gap-x-2 mt-1">
                    <div className="mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    </div>
                    <p>Rated</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* second part */}
        <div className="w-full h-97 flex flex-col gap-y-2">
          <div className="flex w-full h-1/2 gap-x-2">
            <div className=" w-full flex flex-col h-full  relative ">
              <div className=" w-full absolute z-10 h-full ">
                <img
                  src={require("../../assets/Fries.png")}
                  className="w-full h-full object-cover rounded-xl"
                  alt="Bitmap"
                />
              </div>
              <div
                className="z-50 w-full absolute bottom-0 opacity-80 flex flex-col justify-center items-center rounded-xl p-4"
                style={{ background: "#FFFFFF", height: "50%" }}
              >
                <div
                  style={{ width: "90%" }}
                  className="flex flex-col  gap-y-1"
                >
                  <div className="text-black font-Poppins w-full">
                    <p className="text-base font-bold leading-6 line-clamp-1">
                    Crispy French Fries
                    </p>
                    <p className="leading-6 text-xs  w-full line-clamp-2 ">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                  <div className="flex flex-col w-full items-center gap-y-1">
                    <div className="border-b-2 border-black w-full "></div>
                    <div className="flex flex-row w-full text-black">
                      <div className="flex  w-28">
                        <button className=" leading-6 font-Poppins">
                          Explore
                        </button>
                        <div className="mt-1 ml-auto mr-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M8.25 4.5l7.5 7.5-7.5 7.5"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className=" ml-auto mr-1 flex  gap-x-2 mt-1">
                        <div className="mt-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                            />
                          </svg>
                        </div>
                        <p className="hidden md:block">Rated</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-full flex flex-col h-full  relative ">
              <div className=" w-full absolute z-10 h-full ">
                <img
                  src={require("../../assets/Paneer.png")}
                  className="w-full h-full object-cover rounded-xl"
                  alt="Bitmap"
                />
              </div>
              <div
                className="z-50 w-full absolute bottom-0 opacity-80 flex flex-col justify-center items-center rounded-xl p-4"
                style={{ background: "#FFFFFF", height: "50%" }}
              >
                <div
                  style={{ width: "90%" }}
                  className="flex flex-col  gap-y-1 "
                >
                  <div className="text-black font-Poppins w-full mt-0 mb-10">
                    <p className="text-base font-bold leading-6 line-clamp-1">
                    Paneer Tikka
                    </p>
                  </div>
                  <div className="flex flex-col w-full items-center gap-y-1">
                    <div className="border-b-2 border-black w-full "></div>
                    <div className="flex flex-row w-full text-black">
                      <div className="flex  w-28">
                        <button className=" leading-6 font-Poppins">
                          Explore
                        </button>
                        <div className="mt-1 ml-auto mr-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M8.25 4.5l7.5 7.5-7.5 7.5"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className=" ml-auto mr-1 flex  gap-x-2 mt-1">
                        <div className="mt-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                            />
                          </svg>
                        </div>
                        <p className="hidden md:block">Rated</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full h-1/2 gap-x-2">
            <div className=" w-full flex flex-col h-full  relative ">
              <div className=" w-full absolute z-10 h-full ">
                <img
                  src={require("../../assets/Macaroon.png")}
                  className="w-full h-full object-cover rounded-xl"
                  alt="Bitmap"
                />
              </div>
              <div
                className="z-50 w-full absolute bottom-0 opacity-75 flex flex-col justify-center items-center rounded-xl p-4"
                style={{ background: "#000000", height: "50%" }}
              >
                <div
                  style={{ width: "90%" }}
                  className="flex flex-col  gap-y-1"
                >
                  <div className="text-white font-Poppins w-full">
                    <p className="text-base font-bold leading-6 line-clamp-1">
                           Macaroon
                    </p>
                    <p className="leading-6 text-xs t w-full line-clamp-2 ">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                  <div className="flex flex-col w-full items-center gap-y-1">
                    <div className="border-b-2 border-white w-full "></div>
                    <div className="flex flex-row w-full text-white">
                      <div className="flex  w-28">
                        <button className=" leading-6 font-Poppins">
                          Explore
                        </button>
                        <div className="mt-1 ml-auto mr-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M8.25 4.5l7.5 7.5-7.5 7.5"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className=" ml-auto mr-1 flex  gap-x-2 mt-1">
                        <div className="mt-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                            />
                          </svg>
                        </div>
                        <p className="hidden md:block">Rated</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-full flex flex-col h-full  relative ">
              <div className=" w-full absolute z-10 h-full ">
                <img
                  src={require("../../assets/Doughnut.png")}
                  className="w-full h-full object-cover rounded-xl"
                  alt="Bitmap"
                />
              </div>
              <div
                className="z-50 w-full absolute bottom-0 opacity-80 flex flex-col justify-center items-center rounded-xl p-4"
                style={{ background: "#FFFFFF", height: "50%" }}
              >
                <div
                  style={{ width: "90%" }}
                  className="flex flex-col  gap-y-1"
                >
                  <div className="text-black font-Poppins w-full">
                    <p className="text-base font-bold leading-6 line-clamp-1">
                    Doughnut
                    </p>
                    <p className="leading-6 text-xs  w-full line-clamp-2 ">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                  <div className="flex flex-col w-full items-center gap-y-1">
                    <div className="border-b-2 border-black w-full "></div>
                    <div className="flex flex-row w-full text-black">
                      <div className="flex  w-28">
                        <button className=" leading-6 font-Poppins">
                          Explore
                        </button>
                        <div className="mt-1 ml-auto mr-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M8.25 4.5l7.5 7.5-7.5 7.5"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className=" ml-auto mr-1 flex  gap-x-2 mt-1">
                        <div className="mt-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                            />
                          </svg>
                        </div>
                        <p className="hidden md:block">Rated</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="grid sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 mt-24 mx-4 gap-x-7 mb-3">
        <div className=" py-2 px-4">
          <p className="text-3xl font-bold mb-3 font-Poppins">Indian Cuisine</p>
          <p className="text-lg font-medium line-clamp-3 font-Poppins">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>
        <div className="px-4 py-2">
          <p className="text-3xl font-bold mb-3 font-Poppins">
            American Cuisine
          </p>
          <p className="text-lg font-medium line-clamp-3 font-Poppins">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard.
          </p>
        </div>
        <div className="px-4 py-2">
          <p className="text-3xl font-bold mb-3 font-Poppins">
            Chinese Cuisine
          </p>
          <p className="text-lg font-medium line-clamp-3 font-Poppins">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Varieties;