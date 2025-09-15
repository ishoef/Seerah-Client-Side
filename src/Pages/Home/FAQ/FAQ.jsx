import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "১. সীরাত শিক্ষা কি ?",
    answer:
      "সীরাত শিক্ষা হলো একটি অনলাইন শিক্ষামূলক প্ল্যাটফর্ম যেখানে নবীজির (সা.) সীরাতকে ভিত্তি করে একজন মুসলিমের জীবনধারার আদর্শ শিক্ষা প্রদান করা হয়। এখানে শিক্ষার্থীরা কেবল ইতিহাস শিখেই থেমে থাকে না, বরং বাস্তব জীবনে কিভাবে সীরাতের আলোকে জীবন গঠন করা যায়, সে বিষয়েও দিকনির্দেশনা দেওয়া হয়।",
  },
  {
    question: "২. এই ওয়েবসাইটে কি কি শিখতে পারবো ?",
    answer:
      "এই প্ল্যাটফর্মে আপনি নবীজির সীরাত, ইসলামের ইতিহাস, সাহাবাদের জীবনকথা, নৈতিকতা ও আদর্শ, এবং মুসলিম উম্মাহর ঐতিহ্য সম্পর্কে জানতে পারবেন। এছাড়া কুইজ, অ্যাসাইনমেন্ট, আলোচনা এবং সার্টিফিকেট প্রোগ্রামের মাধ্যমে জ্ঞানকে দৃঢ়ভাবে আয়ত্ত করা সম্ভব হবে।",
  },
  {
    question: "৩. সার্টিফিকেট কিভাবে পাবো ?",
    answer:
      "সার্টিফিকেট অর্জনের জন্য আপনাকে নির্ধারিত কোর্স সম্পন্ন করতে হবে। প্রতিটি অধ্যায়ের শেষে কুইজ এবং পরীক্ষা থাকবে। সবগুলো কুইজে ন্যূনতম পাস মার্কস অর্জন করলে এবং চূড়ান্ত মূল্যায়নে উত্তীর্ণ হলে আপনি ডিজিটাল সার্টিফিকেট পাবেন, যা আপনার শেখার প্রমাণ হিসেবে সংরক্ষণ ও ব্যবহার করা যাবে।",
  },
  {
    question: "৪. এই ওয়েবসাইট কি ফ্রি ?",
    answer:
      "আমাদের বেশিরভাগ কন্টেন্ট এবং কোর্স সম্পূর্ণ বিনামূল্যে দেওয়া হয় যাতে সবাই সহজেই ইসলামের আলোকে জীবন গঠন করতে পারে। তবে উন্নত মানের প্রিমিয়াম কোর্স, বিশেষ সেশন, অথবা সার্টিফিকেট প্রোগ্রামের জন্য সামান্য সাবস্ক্রিপশন প্রয়োজন হতে পারে।",
  },
  {
    question: "৫. কিভাবে শেখার প্রক্রিয়া চলবে ?",
    answer:
      "শেখার প্রক্রিয়াটি অত্যন্ত সহজভাবে সাজানো হয়েছে। প্রতিটি বিষয় ধাপে ধাপে পাঠ আকারে উপস্থাপন করা হয়। প্রতিটি পাঠের সাথে ব্যাখ্যা, উদাহরণ, এবং ব্যবহারিক প্রয়োগ দেখানো হয়। এরপর থাকবে কুইজ এবং আলোচনা সেশন, যা আপনাকে শিখিত জ্ঞানকে গভীরভাবে বুঝতে সাহায্য করবে।",
  },
  {
    question: "৬. আমি কি মোবাইল থেকে শিখতে পারবো ?",
    answer:
      "হ্যাঁ, অবশ্যই। আমাদের ওয়েবসাইটটি সম্পূর্ণ রেসপন্সিভ, অর্থাৎ মোবাইল, ট্যাবলেট, এবং ডেস্কটপ—সব ডিভাইসে এটি সমানভাবে ব্যবহার করা যাবে। এর ফলে যেকোনো সময়, যেকোনো স্থান থেকে আপনি সহজেই আপনার শিক্ষার যাত্রা চালিয়ে যেতে পারবেন।",
  },
  {
    question: "৭. শেখার জন্য ইংরেজি জানা কি বাধ্যতামূলক ?",
    answer:
      "না, ইংরেজি জানার প্রয়োজন নেই। আমাদের সব কোর্স বাংলা ভাষায় তৈরি করা হয়েছে। এর মাধ্যমে বাংলাদেশের প্রত্যন্ত অঞ্চল থেকে শুরু করে সবার কাছে ইসলামের আলো পৌঁছে দেওয়াই আমাদের লক্ষ্য। যারা ইংরেজি দুর্বল, তারাও এখানে সহজে শিখতে পারবেন।",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-48">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold dark:text-white">
            প্রায়শই <span className="text-blue-600">জিজ্ঞাসিত প্রশ্নাবলী</span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            আমাদের ব্যবহারকারীদের সাধারণ কিছু প্রশ্ন এবং তার বিস্তারিত উত্তর
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className=" bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                className="cursor-pointer w-full flex justify-between items-center px-6 py-6 text-left"
              >
                <span className="text-lg font-medium text-gray-800 dark:text-gray-200">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-blue-600 dark:text-blue-400 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer with smooth animation */}
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-60 px-6 pb-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 dark:text-gray-300 text-md leading-6">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
