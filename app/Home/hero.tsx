import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="bg-[#f8f8f8]">
      <div className="flex flex-col md:flex-row">
        <div>
          <p className="mt-10 ml-4 md:ml-30">
            Phonico - Your Gateway to USA Connectivity
          </p>
          <img
            className="ml-4 md:ml-32 mt-1"
            src="https://phonico.com/images/blueLine.svg"
            alt=""
          />
          <h1 className="text-6xl font-semibold ml-4 md:ml-30 mt-5">
            Stay Connected With <br />
            <span className="text-[#ec3c65] mt-2 mb-2">Phonico</span> eSIM
            Across <br />
            the USA, Instantly!
          </h1>
          <p className="text-xl font-light ml-4 md:ml-30 mt-4">
            With Phonico eSIM, getting online in the U.S. is fast, easy,
            <br /> and completely digital. No KYC and no restrictions on
            <br /> Hotspot Sharing or Tethering. Select your Plan, Scan the
            <br /> QR, Activate, and Explore with uninterrupted coverage
            <br /> in all 50 states of the USA. Starting from $15/Month!
          </p>
          <Link href="/plans">
            <button className="p-3 font-bold w-60 ml-4 md:ml-32 mt-5 bg-[#f5577c] hover:bg-[#d83b60] rounded text-white">
              Get Your USA eSIM Now
            </button>
          </Link>
        </div>

        <div className="flex justify-center md:justify-start mt-5 md:mt-25">
          <img
            className="h-110 w-120   ml-0 md:ml-20"
            src="/femaleHero2.webp"
            alt=""
          />
        </div>
      </div>

      <div className="flex flex-row gap-5 justify-center mt-10 flex-wrap">
        <div className="w-65 bg-[#dfdfdfdc] p-2 h-76">
          <img className="mt-8 ml-5" src="/phoneIcon.svg" alt="" />
          <h1 className="ml-5 mt-2 font-bold">
            Unlimited Calls & <br /> Sms
          </h1>
          <p className="ml-5 mt-3 font-semibold">
            Phonico wants you to stay connected with your loved ones all the
            time with no limits on Calls and Sms.
          </p>
        </div>
        <div className="w-65 bg-[#dfdfdfdc] h-76 p-2">
          <img className="mt-8 ml-5" src="/moneybag.svg" alt="" />
          <h1 className="ml-5 mt-2 font-bold">Variety of Data Plans</h1>
          <p className="ml-5 mt-8 font-semibold">
            Multiple travel eSIM Data plans packages, tailored to your needs so
            you can stay connected.
          </p>
        </div>
        <div className="w-65 bg-[#dfdfdfdc] h-76 p-2">
          <img className="mt-8 ml-5" src="/speaker.svg" alt="" />
          <h1 className="ml-5 mt-2 font-bold">
            Easy Activation <br /> Process
          </h1>
          <p className="ml-5 mt-3 font-semibold">
            Phonico eSIM activation is so easy that anyone can do it. Just Scan
            the QR code or Activate it from the Phonico eSIM App.
          </p>
        </div>
        <div className="w-65 bg-[#dfdfdfdc] p-2 h-76">
          <img className="mt-8 ml-5" src="/globe (1).svg" alt="" />
          <h1 className="ml-5 mt-2 font-bold">
            WirelessSecure <br />
            Network
          </h1>
          <p className="ml-5 mt-3 font-semibold">
            Phonico understands your data privacy. We have applied the highest
            standard of security protocols to avoid any cyber threat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
