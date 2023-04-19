import type { ComponentProps } from "react";
import { BEGIN_YEAR, NOW_YEAR, STACK_SIZE, Skill } from "~/data";
import { cn } from "~/lib/utils";

export interface TimelineProps extends Pick<ComponentProps<'div'>, 'className'>, Pick<Skill, 'begin' | 'end'> { }

export function Timeline({ begin, end, className }: TimelineProps) {
  const offsetBeg = (begin - BEGIN_YEAR) * STACK_SIZE;
  const offsetEnd = (end ? ((NOW_YEAR - end) * STACK_SIZE) : 0);
  const experienceYears = (end || NOW_YEAR) - begin;

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <div className="text-sm text-teal-400">
        <span className="font-bold mr-1">{experienceYears}</span>
        <span>{experienceYears === 1 ? 'year' : 'years'} experience</span>
      </div>
      <div className="h-9">
        <div className="h-3 bg-gray-300">
          <div className="relative">
            <div
              className="absolute h-3 bg-teal-400"
              style={{
                left: `${offsetBeg}%`,
                right: `${offsetEnd}%`,
              }}
            >
              <span className="absolute z-[2] text-xs text-white pt-6 left-0 pl-[22px] -translate-x-1/2 after:absolute after:w-[2px] after:bg-white after:top-0 after:h-[18px] after:left-1/2">
                {begin}
              </span>
              <span className="absolute z-[2] text-xs text-white pt-6 right-0 pr-[22px] translate-x-1/2 after:absolute after:w-[2px] after:bg-white after:top-0 after:h-[18px] after:right-1/2">
                {end ?? 'Now'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}