export function FeaturedProject() {
  return (
    <section className="relative bg-gray-900 z-[2]">
      <span className="absolute inset-x-1 -top-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"></span>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="mt-4 text-2xl font-bold text-white lg:mt-5 lg:text-3xl">Featured Projects</h2>
        <p className="mt-3 block text-gray-300 lg:text-lg max-w-md">Here are some of my favorite projects. I‘ve included details about the project.</p>
      </div>
    </section>
  )
}