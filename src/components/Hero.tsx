import React from "react";

const Hero = () => {
  return (
    <section className="mx-auto max-w-7xl mt-3">
      <div className="px-2 lg:flex lg:flex-row lg:items-center">
        <div className="w-full lg:w-1/2">
          <div className="my-10 lg:my-0 lg:px-10">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Get full access to Platform
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              nesciunt eos facilis debitis voluptas iure consectetur odit fugit
              voluptate recusandae?
            </p>
            <form action="#" method="POST" className="mt-8 max-w-xl">
              <div className="flex flex-col sm:flex-row sm:items-center">
                <div className="flex w-full max-w-sm items-center space-x-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 "
                    type="email"
                    placeholder="Email"
                  />
                  <button
                    type="button"
                    className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1603575448878-868a20723f5d?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
            alt="ManWith Laptop"
            className="h-full w-full rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
