export function Hero() {
  return (
    <section className="relative flex flex-col">
      <div className="mb-12 mt-64 border-white/5 md:mt-28 lg:my-44 lg:border-y lg:py-6">
        <div className="absolute inset-0 -z-10">
          <div className="relative flex justify-center overflow-hidden">
            <img alt="" srcSet="https://tailwindcss.com/_next/static/media/docs-dark@tinypng.1bbe175e.png" className="w-[90rem] flex-none max-w-none hidden dark:block" />
          </div>
        </div>
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-6 lg:px-8">
          <div>
            <div className="sm:max-w-2xl">
              <p className="text-2xl text-white mb-4">Hey, I'm Adi Rizky,</p>
              <h1 className="text-3xl font-extrabold tracking-tight text-white md:text-[40px] md:leading-[1.1] lg:col-span-2 lg:text-[58px] lg:leading-[1.125em] lg:tracking-[-0.0375em]">
                a <span className="text-teal-600">front-end developer</span> who loves to code.
              </h1>
              <p className="mt-12 max-w-lg space-y-6 text-lg leading-[1.4] text-gray-300 md:max-w-xl lg:text-xl">
                <span className="font-semibold">4 years of experience</span> in using ReactJS for front-end development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}