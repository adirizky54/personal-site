import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import clsx from "clsx";

import { Logo } from "./Logo";

function MobileNavigation() {
  return (
    <Popover>
      {({ open, close }) => (
        <>
          <Popover.Button className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none">
            <span className="sr-only">Toggle Navigation</span>
            <svg
              aria-hidden="true"
              className="h-3.5 w-3.5 overflow-visible stroke-slate-200"
              fill="none"
              strokeWidth={2}
              strokeLinecap="round"
            >
              <path
                d="M0 1H14M0 7H14M0 13H14"
                className={clsx("origin-center transition", {
                  "scale-90 opacity-0": open,
                })}
              />
              <path
                d="M2 2L12 12M12 2L2 12"
                className={clsx("origin-center transition", {
                  "scale-90 opacity-0": !open,
                })}
              />
            </svg>
          </Popover.Button>
          <Transition.Root>
            <Transition.Child
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="duration-150 ease-in"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                as="ul"
                className="absolute inset-x-0 top-full mt-4 origin-top space-y-4 rounded-2xl bg-white p-6 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
              >
                <li>
                  <a href="#features" className="block w-full" onClick={() => close()}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="block w-full" onClick={() => close()}>
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="block w-full" onClick={() => close()}>
                    Contact
                  </a>
                </li>
              </Popover.Panel>
            </Transition.Child>
          </Transition.Root>
        </>
      )}
    </Popover>
  );
}

export function Header() {
  return (
    <header className="fixed top-0 z-40 flex-none mx-auto w-full transition-all ease-in duration-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <nav className="relative z-50 text-sm">
          <ul className="flex items-center">
            <li>
              <a href="#">
                <span className="sr-only">Home</span>
                <Logo />
              </a>
            </li>
            <li className="ml-12 hidden md:block">
              <a href="#features" className="rounded-lg py-1 px-2 dark:text-slate-100 dark:hover:bg-slate-700">
                Home
              </a>
            </li>
            <li className="ml-6 hidden md:block">
              <a href="#testimonials" className="rounded-lg py-1 px-2 dark:text-slate-100 dark:hover:bg-slate-700">
                Projects
              </a>
            </li>
            <li className="ml-6 hidden md:block">
              <a href="#pricing" className="rounded-lg py-1 px-2 dark:text-slate-100 dark:hover:bg-slate-700">
                Contact
              </a>
            </li>
            <li className="ml-auto -mr-1 md:hidden">
              <MobileNavigation />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
