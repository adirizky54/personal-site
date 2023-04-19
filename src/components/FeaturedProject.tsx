import { ArrowRight } from "lucide-react";
import { Button } from "./common/Button";
import { Badge } from "./common/Badge";
import { PROJECTS } from "~/data";

export function FeaturedProject() {
  return (
    <section className="relative bg-gray-900 z-[2]">
      <span className="absolute inset-x-1 -top-px h-[2px] bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0"></span>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="mt-4 text-2xl font-bold text-white lg:mt-5 lg:text-3xl">Featured Projects</h2>
        <p className="mt-5 block text-gray-300 lg:text-lg max-w-md">Here are some of my favorite projects. I‘ve included details about the project.</p>
        <div className="my-16">
          <ul className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3" role="list">
            {PROJECTS.map((item, index) => (
              <li className="group relative flex flex-col" key={index}>
                <div className="relative z-10 flex-shrink-0">
                  <img className="h-56 w-full object-cover rounded-lg" src={item.imageUrl} alt={item.title} />
                </div>
                <div className="flex flex-1 flex-col justify-between mt-6">
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-white">
                      <div className="absolute -inset-y-8 -inset-x-4 z-0 scale-95 bg-gray-800/70 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl"></div>
                      <a href={item.href}>
                        <span className="absolute -inset-y-8 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                        <span className="relative z-10">{item.title}</span>
                      </a>
                    </h2>
                    <p className="relative z-10 mt-2 text-base text-gray-400">{item.description}</p>
                    <div className="relative z-10 flex gap-2 mt-8">
                      {item?.technologies?.map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center">
          <Button
            variant="white"
            icon={<ArrowRight size={18} />}
            iconPosition="right"
          >
            See Other Projects
          </Button>
        </div>
      </div>
    </section>
  )
}