export default function SuccessStories() {
  const testimonialsRow1 = [
    {
      rating: "5/5",
      platform: "G",
      text: `"Lectus, nonummy et. Occaecat delectus erat, minima dapibus ornare nunc, autem."`,
      name: "Lily Granger",
      image:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=80&h=80&q=80",
    },
    {
      rating: "4/5",
      platform: "Yelp",
      text: `"Lectus, nonummy et. Occaecat delectus erat, minima dapibus ornare nunc, autem."`,
      name: "Jeson Foxx",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=80&h=80&q=80",
    },
  ];

  const testimonialsRow2 = [
    {
      rating: "5/5",
      platform: "Yelp",
      text: `"Lectus, nonummy et. Occaecat delectus erat, minima dapibus ornare nunc, autem."`,
      name: "Ron Burnwood",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=80&h=80&q=80",
    },
    {
      rating: "4/5",
      platform: "Yelp",
      text: `"Lectus, nonummy et. Occaecat delectus erat, minima dapibus ornare nunc, autem."`,
      name: "Judy Sewell",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=80&h=80&q=80",
    },
    {
      rating: "4/5",
      platform: "G",
      text: `"Lectus, nonummy et. Occaecat delectus erat, minima dapibus ornare nunc, autem."`,
      name: "Anne Mcfadden",
      image:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=80&h=80&q=80",
    },
  ];

  return (
    <section className="relative bg-gray-50 dark:bg-gray-900 py-16">
      {/* Background diagonal lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-10">
          <div className="absolute inset-0 rotate-45 space-y-10">
            <div className="w-full h-[6px] bg-gray-400 dark:bg-gray-700"></div>
            <div className="w-full h-[6px] bg-gray-400 dark:bg-gray-700"></div>
            <div className="w-full h-[6px] bg-gray-400 dark:bg-gray-700"></div>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Left side title (spans 2 rows) */}
          <div className="lg:row-span-1 w-full h-full flex justify-center items-center">
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
              Our success <br /> stories
            </h2>
          </div>

          {/* Row 1 → 2 cards */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {testimonialsRow1.map((t, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 flex flex-col items-center text-center"
              >
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-3">
                  <span className="font-bold">{t.platform}</span>
                  <span>{t.rating}</span>
                </div>
                <p className="text-gray-700 dark:text-gray-200 text-sm mb-4">
                  {t.text}
                </p>
                <div className="flex flex-col items-center">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover mb-2"
                  />
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {t.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 → 3 cards */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonialsRow2.map((t, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 flex flex-col items-center text-center"
              >
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-3">
                  <span className="font-bold">{t.platform}</span>
                  <span>{t.rating}</span>
                </div>
                <p className="text-gray-700 dark:text-gray-200 text-sm mb-4">
                  {t.text}
                </p>
                <div className="flex flex-col items-center">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover mb-2"
                  />
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {t.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
