import clsx from "clsx";

export function Hero() {
  return (
    <section className="relative flex flex-col items-stretch flex-shrink-0 basis-auto min-h-0 min-w-0">
      <div className="relative flex flex-col items-stretch flex-shrink-0 basis-auto p-0 z-[2] min-h-0 min-w-0 border-b border-gray-900">
        <div
          className={clsx([
            "absolute top-0 left-0 right-0 -z-[1]",
            "flex flex-col items-stretch flex-shrink-0 basis-0",
            "min-h-0 min-w-0 lg:h-[1600px] opacity-20",
            "bg-gradient-radial from-teal-600 via-black to-transparent/[72%]"
          ])}
        />
        <div
          className={clsx([
            "absolute bottom-0",
            "flex flex-col items-stretch flex-shrink-0 basis-0",
            "min-h-0 min-w-0 w-full h-5/6 opacity-10",
            "bg-[url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoAQMAAAC2MCouAAAABlBMVEWBgYFHcEyMaNnGAAAAAnRSTlP/AOW3MEoAAAAQSURBVHgBY4CA+v9AMBJIALryrr41QoYVAAAAAElFTkSuQmCC)]",
            "gradient-mask-t-20",
          ])}
        />
        <div className="relative flex flex-col items-stretch flex-shrink-0 basis-0 w-full mx-auto max-w-md px-4 md:max-w-xl lg:max-w-4xl sm:px-6 lg:px-8 pt-52 pb-20">
          <div className="text-center">
            <p className="text-xl md:text-2xl text-white font-semibold mb-4">Hey, I'm Adi Rizky 🤘</p>
            <h1 className="text-5xl font-extrabold tracking-tight text-white leading-[1.1] lg:text-7xl lg:leading-[1.125em] lg:tracking-[-0.0375em]">
              a <span className="text-teal-600">front-end developer</span> who loves to code.
            </h1>
            <p className="mt-8 text-lg leading-[1.4] text-gray-300 lg:text-xl">I specialize in Front-end development with 4+ years of experiences. If you would like to work together, or just want to chat, feel free to say hi!</p>
            <div className="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-14">
              <div className="rounded-md shadow">
                <a href="#" className="flex w-full items-center justify-center rounded-md border border-transparent bg-teal-600 text-base px-6 py-3 font-medium text-white hover:bg-teal-700 md:text-lg">Get in touch</a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a href="#" className="flex w-full items-center justify-center rounded-md border border-transparent text-base px-6 py-3 font-medium text-teal-600 hover:bg-teal-100 md:text-lg">Resume</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}