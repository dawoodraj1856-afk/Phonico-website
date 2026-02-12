"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-col md:flex-row mt-10 justify-between bg-white">
        <div className="ml-30 mt-5">
          <img
            src="https://phonico.com/_next/image/?url=%2Fimages%2FsiteLogo.png&w=128&q=75"
            alt=""
          />
          <p className="font-medium mt-5">
            Stay Connected, Anytime and Anywhere <br /> with Phonico! Your
            Journey, Our <br /> Commitment to Unbeatable Connectivity.
          </p>

          <div className="flex flex-row gap-2 mt-5">
            <img src="https://phonico.com/images/headphone.svg" alt="" />
            <p className="text-[#ec3c65]">(484)746-6426</p>
          </div>
          <div className="flex flex-row gap-2 mt-2">
            <img src="https://phonico.com/images/emailIcon.svg" alt="" />
            <p className="text-[#ec3c65]">support@phonico.com</p>
          </div>

          <div className="flex flex-row gap-5 mt-5 flex-wrap">
            <img src="https://phonico.com/images/instaIcon.svg" alt="" />
            <img
              className="mt-2"
              src="https://phonico.com/images/linkedinIcon.svg"
              alt=""
            />
            <img
              className="mt-2"
              src="https://phonico.com/images/facebookIcon.svg"
              alt=""
            />
            <img
              className="mt-2"
              src="https://phonico.com/images/twitterIcon.svg"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 ml-10 mt-20 ">
          <h1 className="font-semibold text-2xl ">Quick Links</h1>
          <Link href="/">
            <li className="list-none hover:text-[#ec3c65]">Home</li>
          </Link>
          <Link href="/blogs">
            <li className="list-none hover:text-[#ec3c65]">Blog</li>
          </Link>

          <Link href="/terms-and-conditions">
            <li className="list-none hover:text-[#ec3c65]">Terms of Use</li>
          </Link>
          <Link href="/privacy-policy">
            <li className="list-none hover:text-[#ec3c65]">Privacy Policy</li>
          </Link>
        </div>

        <div className="mr-30 mt-20 ">
          <h1 className="font-semibold text-xl">Download the App now</h1>
          <div className="flex flex-row gap-4 mt-5 flex-wrap">
            <Link href="https://play.google.com/store/apps/details?id=com.activatewireless.phonico&amp;hl=en&amp;gl=US">
              <img src="	https://phonico.com/images/appleLink.svg" className="h-10" alt="" />
            </Link>
            <Link href="https://apps.apple.com/app/id6468944607">
              <img
                className="h-10"
                src="https://phonico.com/images/playLink.svg"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
      <p className="font-semibold text-center">
        Phonico © 2025. All Rights Reserved
      </p>
    </>
  );
};

export default Footer;
