import clsx from "clsx";

export function Logo({ active = false }) {
  return (
    <div className={clsx('flex items-center gap-2 font-[1000] leading-none')}>
      <div
        className={clsx(
          'border-box flex h-8 w-8 items-center justify-center rounded-xl border-2',
          'sm:h-6 sm:w-6 sm:rounded-lg',
          [
            active
              ? 'border-teal-600 bg-teal-600 dark:border-teal-500 dark:bg-teal-500'
              : 'border-teal-600 dark:border-teal-500',
          ]
        )}
      >
        <div
          className={clsx(
            'h-3.5 w-0.5 rotate-12 rounded-full',
            'sm:h-3 sm:w-0.5',
            [active ? 'bg-white' : 'bg-teal-600 dark:bg-teal-400']
          )}
        />
      </div>
      <div className={clsx('hidden text-xl', 'sm:block')}>
        <span className={clsx('text-slate-900', 'dark:text-slate-200')}>
          Adi Rizky
        </span>
      </div>
    </div>
  );
}
