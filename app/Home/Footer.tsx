"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between bg-white px-5 md:px-20 py-10 gap-10">
        {/* Left Section */}
        <div className="flex flex-col md:w-1/3">
          <img
            src="https://phonico.com/_next/image/?url=%2Fimages%2FsiteLogo.png&w=128&q=75"
            alt="Phonico Logo"
            className="h-12 w-20"
          />
          <p className="font-medium mt-5 text-sm md:text-base">
            Stay Connected, Anytime and Anywhere <br />
            with Phonico! Your Journey, Our <br />
            Commitment to Unbeatable Connectivity.
          </p>

          <div className="flex items-center gap-2 mt-5">
            <img src="https://phonico.com/images/headphone.svg" alt="Phone" className="h-5 w-5" />
            <p className="text-[#ec3c65] text-sm md:text-base">(484) 746-6426</p>
          </div>

          <div className="flex items-center gap-2 mt-2">
            <img src="https://phonico.com/images/emailIcon.svg" alt="Email" className="h-5 w-5" />
            <p className="text-[#ec3c65] text-sm md:text-base">support@phonico.com</p>
          </div>

          <div className="flex flex-wrap gap-4 mt-5">
            <img src="https://phonico.com/images/instaIcon.svg" alt="Instagram" className="h-6 w-6" />
            <img src="https://phonico.com/images/linkedinIcon.svg" alt="LinkedIn" className="h-6 w-6" />
            <img src="https://phonico.com/images/facebookIcon.svg" alt="Facebook" className="h-6 w-6" />
            <img src="https://phonico.com/images/twitterIcon.svg" alt="Twitter" className="h-6 w-6" />
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col md:w-1/4 gap-2 mt-10 md:mt-0">
          <h1 className="font-semibold text-xl md:text-2xl">Quick Links</h1>
          <Link href="/"><li className="list-none hover:text-[#ec3c65]">Home</li></Link>
          <Link href="/blogs"><li className="list-none hover:text-[#ec3c65]">Blog</li></Link>
          <Link href="/terms-and-conditions"><li className="list-none hover:text-[#ec3c65]">Terms of Use</li></Link>
          <Link href="/privacy-policy"><li className="list-none hover:text-[#ec3c65]">Privacy Policy</li></Link>
        </div>

        <div className="flex flex-col md:w-1/4 mt-10 md:mt-0">
          <h1 className="font-semibold text-xl md:text-xl">Download the App now</h1>
          <div className="flex flex-wrap gap-4 mt-5">
            <Link href="https://play.google.com/store/apps/details?id=com.activatewireless.phonico&amp;hl=en&amp;gl=US">
              <img src="https://phonico.com/images/playLink.svg" className="h-10" alt="Google Play" />
            </Link>
            <Link href="https://apps.apple.com/app/id6468944607">
              <img src="https://phonico.com/images/appleLink.svg" className="h-10" alt="App Store" />
            </Link>
          </div>
        </div>
      </div>

      <p className="font-semibold text-center py-5 text-sm md:text-base">
        Phonico © 2025. All Rights Reserved
      </p>
    </>
  );
};

export default Footer;
