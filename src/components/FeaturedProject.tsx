const posts = [
  {
    title: 'Tahura Djuanda Reservation System',
    href: '#',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    imageUrl: '/tahura.png',
  },
  {
    title: 'Billionaire Store Partnership',
    href: '#',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
    imageUrl: '/bs_partnership.png',
  },
  {
    title: 'Bank Raya - Landing Page',
    href: '#',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
    imageUrl: '/bank_raya.png',
  },
];

export function FeaturedProject() {
  return (
    <section className="relative bg-gray-900 z-[2]">
      <span className="absolute inset-x-1 -top-px h-[2px] bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0"></span>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="mt-4 text-2xl font-bold text-white lg:mt-5 lg:text-3xl">Featured Projects</h2>
        <p className="mt-3 block text-gray-300 lg:text-lg max-w-md">Here are some of my favorite projects. I‘ve included details about the project.</p>
        <div className="mt-16">
          <ul className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <li className="group relative flex flex-col">
                <div className="relative z-10 flex-shrink-0">
                  <img className="h-56 w-full object-cover rounded-lg" src={post.imageUrl} alt="" />
                </div>
                <div className="flex flex-1 flex-col justify-between mt-6">
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-white">
                      <div className="absolute -inset-y-8 -inset-x-4 z-0 scale-95 bg-gray-800/70 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl"></div>
                      <a href={post.href}>
                        <span className="absolute -inset-y-8 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                        <span className="relative z-10">{post.title}</span>
                      </a>
                    </h2>
                    <p className="relative z-10 mt-2 text-base text-gray-400">{post.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}