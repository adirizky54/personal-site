import clsx from "clsx";

export function Logo({ active = false }) {
  return (
    <div className="flex items-center gap-2 font-[1000] leading-none">
      <div
        className={clsx(
          'border-box flex h-8 w-8 items-center justify-center rounded-lg border-2 sm:h-6 sm:w-6',
          [
            active
              ? 'border-teal-600 bg-teal-600 text-white'
              : 'border-teal-600 text-teal-600',
          ]
        )}
      >
        #
      </div>
      <div className="hidden text-lg sm:block">
        <span className="text-slate-900 dark:text-slate-200">
          Adi Rizky
        </span>
      </div>
    </div>
  );
}
