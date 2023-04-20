import { Timeline } from "./common/Timeline";
import { cn } from "~/lib/utils";
import { SKILLS } from "~/data";

export function Skills() {
  return (
    <section className="relative bg-gray-900 z-[2]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="mt-4 text-2xl font-bold text-white lg:mt-5 lg:text-3xl">Skills</h2>
        <p className="mt-5 block text-gray-300 lg:text-lg max-w-md">Here are some of Language or Framework that i've used for building an apps</p>
        <ul className="mx-auto mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3" role="list">
          {SKILLS?.map((item) => (
            <li
              className={cn(
                "p-6 rounded-2xl border bg-transparent border-gray-600 hover:bg-gray-800/70 transition-colors duration-300 ease-in-out",
                item.color,
              )}
              key={item.name}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8">
                  <img src={item.icon} alt={item.name} />
                </div>
                <h5 className="font-semibold text-lg text-white">{item.name}</h5>
              </div>
              <Timeline className="mt-5" begin={item.begin} end={item.end} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}