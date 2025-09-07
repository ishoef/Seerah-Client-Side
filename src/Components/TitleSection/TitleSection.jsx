export default function TitleSection() {
  return (
    <div
      className="w-full py-16 px-6 flex flex-col items-center justify-center 
      bg-gradient-to-br from-gray-900 via-gray-950 to-black text-center"
    >
      {/* Illustration */}
      <div className="mb-6">
        <img
          src="/illustration.png"
          alt="Illustration"
          className="w-32 h-auto mx-auto"
        />
      </div>

      {/* Main Title */}
      <h1 className="text-2xl md:text-4xl font-extrabold text-white leading-snug">
        এক নজরে আমাদের রিয়্যাক্টিভ{" "}
        <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          এক্সক্লারেটর কোর্স
        </span>
      </h1>

      {/* Subtitle */}
      <p className="mt-4 text-gray-300 text-sm md:text-base">
        এই কোর্সে যা যা থাকছে
      </p>
    </div>
  );
}
