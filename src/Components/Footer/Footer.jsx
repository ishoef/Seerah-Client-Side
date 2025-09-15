export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-700 dark:text-gray-300 dark:border-t dark:border-t-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row gap-8 md:justify-between ">
          {/* Logo + About */}
          <div className=" basis-[25%] ">
            <div className="flex items-center space-x-2">
              <span className="text-2xl text-blue-700 dark:text-blue-400">
                📘
              </span>
              <h2 className="text-lg font-bold text-blue-700 dark:text-blue-400">
                সীরাত শিক্ষা
              </h2>
            </div>
            <p className="mt-4 text-sm leading-6 text-justify">
              নবীজির সীরাত শিক্ষার মাধ্যমে আদর্শ মুসলিম হওয়ার প্ল্যাটফর্ম। এখানে
              আপনি সীরাত, ইসলামের ইতিহাস, কুইজ, সার্টিফিকেট এবং বাস্তব জীবনে
              প্রয়োগযোগ্য শিক্ষা লাভ করতে পারবেন।
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-md font-semibold mb-4 text-blue-700 dark:text-blue-400">
              দ্রুত লিংক
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-blue-600 dark:hover:text-blue-300"
                >
                  মূলপাতা
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-600 dark:hover:text-blue-300"
                >
                  সীরাত
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-600 dark:hover:text-blue-300"
                >
                  কুইজ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-600 dark:hover:text-blue-300"
                >
                  আমাদের সম্পর্কে
                </a>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-md font-semibold mb-4 text-blue-700 dark:text-blue-400">
              সহায়তা
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-blue-600 dark:hover:text-blue-300"
                >
                  ব্যবহারবিধি
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-600 dark:hover:text-blue-300"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-600 dark:hover:text-blue-300"
                >
                  যোগাযোগ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-600 dark:hover:text-blue-300"
                >
                  প্রাইভেসি পলিসি
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-md font-semibold mb-4 text-blue-700 dark:text-blue-400">
              যোগাযোগ
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                ইমেইল:{" "}
                <a
                  href="mailto:info@seerutshiksha.com"
                  className="hover:text-blue-600 dark:hover:text-blue-300"
                >
                  info@seerutshiksha.com
                </a>
              </li>
              <li>ফোন: +৮৮০ ১৭৫২ ৩৪৫৬৭৮</li>
              <li>ঠিকানা: ঢাকা, বাংলাদেশ</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-300 dark:border-gray-700 mt-8 pt-6 text-center text-sm">
          © ২০২৫{" "}
          <span className="text-blue-700 dark:text-blue-400">সীরাত শিক্ষা</span>
          । সকল অধিকার সংরক্ষিত।
          <br />
          Structure & Design -{" "}
          <a
            href="https://ismailnayef.vercel.app"
            target="_blank"
            className="cursor-pointer text-blue-500 underline"
          >
            Ismail Nayef
          </a>
        </div>
      </div>
    </footer>
  );
}
