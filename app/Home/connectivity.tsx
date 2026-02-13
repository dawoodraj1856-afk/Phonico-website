import React from "react";

const Connectivity = () => {
  return (
    <>
      <div className="mt-10  md:ml-20 flex flex-col md:flex-row gap-30  p-4 md:p-10">
        <div className="md:w-1/3 flex flex-col items-center md:items-start">
          <h1 className="font-semibold text-3xl sm:text-5xl mt-10 text-center md:text-left">
            Why Choose <br />
            <span className="text-[#ec3c65] mt-3 block">PHONICO eSIM?</span>
          </h1>
          <p className="font-semibold mt-6 text-sm sm:text-base text-center md:text-left max-w-md md:max-w-full">
            When you are in the United States, there should be no complications,
            especially with connectivity. Phonico makes it simple with
            affordable USA eSIM plans built for travellers, remote workers, and
            locals who want fast, reliable mobile data without the extra hassle.
            From Alaska to Hawaii or California to Maine, you’ll get strong
            nationwide coverage with instant activation, and clear voice quality
            powered by trusted U.S. carrier networks. No contracts & no hidden
            charges. Just seamless connectivity wherever you go. Phonico keeps
            you online with flexible data, call, and text plans that fit the way
            you travel and live. Choose Phonico to stay connected in the USA
            effortlessly.
          </p>
        </div>

        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            className="w-72 sm:w-96 mt-6 md:mt-20"
            src="https://phonico.com/_next/image/?url=%2Fimages%2FbenefitsImg1.png&w=2048&q=75"
            alt=""
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 p-4 sm:p-6 mt-10 bg-white   shadow rounded-2xl justify-center items-center mx-4 sm:mx-auto max-w-[1100px]">
        <h1 className="font-bold text-3xl text-center mb-4 md:mb-0 md:mr-6">
          Uninterrupted <br /> Connectivity <br /> Across the USA
        </h1>

        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <div className="flex flex-col items-center sm:flex-row sm:items-start gap-2">
            <img
              src="https://phonico.com/images/Coverage.svg"
              alt=""
              className="w-10 h-10"
            />
            <h1 className="font-bold text-xl sm:text-2xl text-center sm:text-left">
              Effortless <br /> Coverage
            </h1>
          </div>

          <div className="flex flex-col items-center sm:flex-row sm:items-start gap-2">
            <img
              src="https://phonico.com/images/Plans.svg"
              alt=""
              className="w-10 h-10"
            />
            <h1 className="font-bold text-xl sm:text-2xl text-center sm:text-left">
              Custom Plans <br /> To Choose
            </h1>
          </div>

          <div className="flex flex-col items-center sm:flex-row sm:items-start gap-2">
            <img
              src="https://phonico.com/images/247Support.svg"
              alt=""
              className="w-10 h-10"
            />
            <h1 className="font-bold text-xl sm:text-2xl text-center sm:text-left">
              24/7 Support
            </h1>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-10 mt-10 p-4 md:p-10 bg-[#eeebeb] rounded-3xl mx-4 sm:mx-auto max-w-[1100px] items-center">
        <div className="md:w-1/2 flex flex-col items-center md:items-start">
          <h1 className="font-semibold text-3xl sm:text-5xl text-center md:text-left">
            Introducing a World <br /> of Connectivity with <br />
            the <span className="text-[#ec3c65]">Phonico</span> eSIM <br /> App
          </h1>
          <p className="font-semibold text-sm sm:text-base mt-6 text-center md:text-left">
            Download our eSIM App for monitoring your real-time data usage. You
            can also use this app to activate your eSIM, manage profiles, and
            get updates on new features and promotions. You can find this app on
            the Play Store and Apple Store.
          </p>
          <p className="font-bold mt-6 text-sm sm:text-lg text-center md:text-left">
            Download the App now
          </p>
          <div className="flex flex-row gap-4 mt-4 justify-center md:justify-start">
            <img
              src="https://phonico.com/images/appleLink.svg"
              alt="Apple Store"
            />
            <img
              src="https://phonico.com/images/playLink.svg"
              alt="Play Store"
            />
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            className="w-64 sm:w-96 mt-6 md:mt-0"
            src="https://phonico.com/_next/image/?url=%2Fimages%2FmobileImg.png&w=1920&q=75"
            alt=""
          />
        </div>
      </div>

      <div className="mt-10 text-center px-4">
        <p className="font-semibold text-sm sm:text-xl">
          2,157 people have said how good Phonico
        </p>
        <h1 className="font-semibold text-3xl sm:text-5xl mt-4">
          The Love We’ve Earned From Our{" "}
          <span className="text-[#ec3c65]">Users</span>
        </h1>
      </div>
    </>
  );
};

export default Connectivity;
