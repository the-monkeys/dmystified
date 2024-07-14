import Image from "next/image";

const Hero = () => {
  return (
    <section className="mx-auto max-w-7xl mb-6 sm:mb-8 px-4 pt-10 cursor-default">
      <div className="flex flex-col md:flex-row items-end sm:items-center">
        <div className="w-full lg:w-1/2">
          <div className="mb-4 lg:px-10">
            <h1 className="text-4xl leading-tight font-bold text-black sm:text-5xl md:text-6xl">
              <span className="text-orange italic">Empower</span> Your Future
              with <span className="text-orange italic">Expert</span> Learning
            </h1>

            <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-gray-800">
              Welcome to <span className="text-black">Dmystified</span>, your
              hub for affordable, live tech courses. Master programming
              languages and thrive in the tech world with expert instruction and
              hands-on learning experiences.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <Image
            src="online_learning.svg"
            alt="Learn with Experts"
            width={250}
            height={250}
            className="md:w-4/5 scale-x-[-1] float-right"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
