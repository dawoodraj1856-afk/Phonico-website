import Link from "next/link";

const Package = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="mt-20 bg-[#ffe9ee] p-4">
        <h1 className="font-bold text-4xl sm:text-5xl text-center mt-10">
          Buy the Best eSIM Prepaid Plans Meeting All Your <br />
          <span className="text-[#ec3c65] mt-5 block">Expectations!</span>
        </h1>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 justify-items-center">
          {/* Plan Card */}
          {[
            {
              title: "1GB",
              price: "$15/month",
              description: "1GB Data and Unlimited Talk & Text",
              planName: "Quick Start Plan",
              planDetails:
                "Enjoy our basic eSIM plan for a Month of Travel without getting a hole in your Pocket.",
              link: "/plans/1gb-data-and-unlimited-talk-text",
              bgColor: "#fd577d",
            },
            {
              title: "3GB",
              price: "$20/month",
              description: "3GB Data and Unlimited Talk & Text",
              planName: "Traveler’s Choice Plan",
              planDetails:
                "Planning another adventure trip? Don’t forget to buy the best eSIM Plan for Staying Connected.",
              link: "/plans/3gb-data-and-unlimited-talk-text",
              bgColor: "rgb(81,176,253)",
            },
            {
              title: "5GB",
              price: "$25/month",
              description: "5GB Data and Unlimited Talk & Text",
              planName: "Business Boost Plan",
              planDetails:
                "Rushing to an International Conference for New Business Ventures? Enjoy Hi-Speed Connectivity.",
              link: "/plans/5gb-data-and-unlimited-talk-text",
              bgColor: "rgb(81,176,253)",
            },
            {
              title: "10GB",
              price: "$35/month",
              description: "10GB Data and Unlimited Talk & Text",
              planName: "Explorer’s Dream Plan",
              planDetails:
                "Are you a Browsing Addict or an Explorer? Get the best prepaid eSIM Plan that Covers all Your Journey.",
              link: "/plans/10gb-data-and-unlimited-talk-text",
              bgColor: "rgb(81,176,253)",
            },
            {
              title: "20GB",
              price: "$50/month",
              description: "20GB Data and Unlimited Talk & Text",
              planName: "Premium Plan",
              planDetails:
                "Enjoy our Going to Sign Deals with the Staff with you? Buy Perfect eSIM Prepaid Plan to Share Data via Hotspot.",
              link: "/plans/20gb-data-and-unlimited-talk-text",
              bgColor: "rgb(81,176,253)",
            },
          ].map((plan, i) => (
            <div
              key={i}
              className="w-full sm:w-80 bg-white rounded-xl shadow-lg p-4 flex flex-col justify-between"
            >
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center">
                {plan.title}
              </h1>
              <div
                className="mt-6 rounded-lg w-full px-4 py-6 text-white text-center"
                style={{ backgroundColor: plan.bgColor }}
              >
                <h1 className="font-bold text-xl sm:text-2xl">{plan.price}</h1>
                <p className="mt-2 text-sm sm:text-base">{plan.description}</p>
              </div>
              <h1 className="mt-5 text-lg sm:text-xl font-semibold text-gray-800 text-center">
                {plan.planName}
              </h1>
              <p className="mt-3 text-sm sm:text-base text-gray-600 text-center">
                {plan.planDetails}
              </p>
              <div className="mt-5 space-y-2">
                {[
                  "High-speed internet",
                  "Unlimited talk & text",
                  "High-quality video streaming",
                  "No hidden fees",
                  "No contract (cancel anytime)",
                ].map((text, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 justify-center sm:justify-start"
                  >
                    <img
                      src="https://phonico.com/images/checkIcon.svg"
                      className="w-4 h-4"
                    />
                    <p className="text-sm sm:text-base">{text}</p>
                  </div>
                ))}
              </div>
              <Link href={plan.link}>
                <button className="mt-5 w-full sm:w-48 bg-[#f34b72] hover:bg-[#f33f69] h-10 rounded text-white block mx-auto">
                  View Plan
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Coverage Banner */}
      <div className="mt-10">
        <div className="bg-[#fad9e3] p-2 mt-10 rounded-3xl w-full sm:w-[700px] mx-auto h-auto sm:h-56 flex items-center justify-center">
          <h1 className="font-bold text-3xl sm:text-4xl text-center">
            Full Coverage With the Best Prepaid <br />
            <span className="text-[#f17a96]">USA</span> eSIM Plans
          </h1>
        </div>

        <h1 className="font-semibold text-3xl sm:text-5xl mt-10 px-4 text-center">
          You can get your <span className="text-[#f34b72]">Phonico </span>
          <br /> eSIM in 3 easy steps!
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 mt-10 px-4 sm:px-10 justify-center sm:justify-between text-center sm:text-left">
          <div>
            <h1 className="font-bold text-2xl">1. Choose Your Plan</h1>
            <p className="font-semibold text-sm sm:text-base">
              Select the best eSIM plan <br /> that meets your needs.
            </p>
          </div>
          <div>
            <h1 className="font-bold text-2xl">2. Buy Your eSIM Online</h1>
            <p className="font-semibold text-sm sm:text-base">
              You can buy your eSIM online, <br /> and it’s ready to use in
              minutes.
            </p>
          </div>
          <div>
            <h1 className="font-bold text-2xl">3. Active Instantly</h1>
            <p className="font-semibold text-sm sm:text-base">
              There is no wait, and there is no <br /> paperwork. Just click buy
              now, and you will <br /> receive a QR code in your e-mail for
              activation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Package;
