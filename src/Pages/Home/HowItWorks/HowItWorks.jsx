import React from "react";
import Title from "../../../Components/Title/Title";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "নবী ﷺ এর জীবনকে সহজভাবে তুলে ধরা",
      description:
        "কুরআন, হাদীস ও প্রামাণ্য গ্রন্থ থেকে সীরাতের তথ্য সংগ্রহ করে ব্যবহারকারীদের জন্য সহজবোধ্যভাবে উপস্থাপন করা।",
    },
    {
      number: "2",
      title: "অনুপ্রেরণা ও চরিত্র গঠন",
      description:
        "সীরাতের আলোকে ব্যক্তিগত, পারিবারিক ও সামাজিক জীবনের দিকনির্দেশনা দেওয়া",
    },
    {
      number: "3",
      title: "শিক্ষা ও দাওয়াহ",
      description:
        "মুসলিম ও অমুসলিম উভয়ের কাছে ইসলামের প্রকৃত চিত্র ও রাসূল ﷺ এর আদর্শ তুলে ধরা।",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        {/* Left Section - Title & Subtitle */}
        <div className="space-y-4 text-center md:text-left">
          <Title normalText={"আমাদের"} blueText={"লক্ষ্য ও উদ্দেশ্য"} />
          <p className="text-gray-600 dark:text-gray-300 text-justify">
            আমাদের মূল লক্ষ্য হলো প্রামাণ্য সূত্রের আলোকে প্রিয় নবী মুহাম্মদ ﷺ
            এর জীবনী বা সীরাতকে সহজ ও আকর্ষণীয়ভাবে উপস্থাপন করা। এখানে সীরাতের
            ঘটনাগুলোকে শিক্ষামূলক দৃষ্টিকোণ থেকে সাজানো হয়েছে, যাতে পাঠক শুধু
            ইতিহাস জানার মধ্যে সীমাবদ্ধ না থেকে বরং জীবনের প্রতিটি ক্ষেত্রে
            রাসূলুল্লাহ ﷺ এর দিকনির্দেশনা থেকে বাস্তব শিক্ষা নিতে পারেন। আমাদের
            উদ্দেশ্য হলো তরুণ প্রজন্ম ও সাধারণ পাঠকের কাছে সীরাতকে আরও সহজলভ্য
            করে তোলা এবং একটি অনলাইন প্ল্যাটফর্ম তৈরি করা যেখানে ইসলামি জ্ঞান
            অন্বেষণ সহজ ও আনন্দদায়ক হয়।
          </p>
          <div className="mx-auto md:mx-0 w-16 h-0.5 bg-gray-300 dark:bg-gray-600"></div>
        </div>

        {/* Middle Section - Image with numbers */}
        <div className="relative flex justify-center">
          <img
            src="https://i.ibb.co.com/DHbVkTky/Gemini-Generated-Image-wmxup9wmxup9wmxu.png"
            alt="Student learning"
            className="rounded-2xl shadow-lg object-cover w-full h-[350px] md:h-[400px]"
          />

          {/* Step Numbers aligned vertically (only visible on md+) */}
          <div className="hidden md:flex absolute inset-y-0 -right-6 flex-col justify-around">
            {steps.map((step) => (
              <div
                key={step.number}
                className="w-14 h-14 flex items-center justify-center bg-white dark:bg-gray-700 text-pink-600 dark:text-pink-400 font-bold text-lg rounded-full shadow-lg"
              >
                {step.number}
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Step details */}
        <div className="space-y-12 md:space-y-16">
          {steps.map((step) => (
            <div key={step.number} className="text-center md:text-left">
              {/* Show number circles inline for mobile */}
              <div className="md:hidden mb-2 flex justify-center">
                <div className="w-10 h-10 flex items-center justify-center bg-white dark:bg-gray-700 text-pink-600 dark:text-pink-400 font-bold rounded-full shadow-lg">
                  {step.number}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-blue-500 dark:text-white">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
