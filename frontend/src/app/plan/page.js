'use client'
import { useState } from "react";
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

function PlanPage({ children }) {

    const [open, setOpen] = useState(false)
    const [event, setEvent] = useState(false)

    const openDialog = () => {
        setOpen(!open)
    }

    const openEvent = () => {
        setEvent(!event)
    }

    return <div>
        {/* Dialog add event */}
        <Dialog className="relative z-10" open={open} onClose={setOpen}>
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 bg-opacity-80 dark:bg-opacity-80 bg-gray-600 dark:bg-gray-600 ">
                    <DialogPanel
                        transition="true"
                        className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                    >
                        <div className=" px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                    <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                                </div>
                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                    <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                        Deactivate account
                                    </DialogTitle>

                                    <div daterangepicker="true" className="flex items-center">
                                        <div className="relative">
                                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                                </svg>
                                            </div>
                                            <input name="start" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date start" />
                                        </div>
                                        <span className="mx-4 text-gray-500">to</span>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                                </svg>
                                            </div>
                                            <input name="end" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date end" />
                                        </div>
                                    </div>

                                    <div className="mt-2">

                                        <div>
                                            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                                Email
                                            </label>
                                            <div className="mt-2.5">
                                                <input
                                                    type="text"
                                                    name="last-name"
                                                    id="last-name"
                                                    autoComplete="family-name"
                                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                                Email
                                            </label>
                                            <div className="mt-2.5">
                                                <input
                                                    type="text"
                                                    name="last-name"
                                                    id="last-name"
                                                    autoComplete="family-name"
                                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button
                                type="button"
                                className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                onClick={() => setOpen(false)}
                            >
                                Deactivate
                            </button>
                            <button
                                type="button"
                                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                onClick={() => setOpen(false)}
                                data-autofocus
                            >
                                Cancel
                            </button>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>

        {/* Dialog event */}
        <Dialog className="relative z-10" open={event} onClose={setEvent}>
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 bg-opacity-80 dark:bg-opacity-80 bg-gray-600 dark:bg-gray-600 ">
                    <DialogPanel
                        transition="true"
                        className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                    >
                        <div className=" px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                    <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                                </div>
                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                    <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                        Deactivate account
                                    </DialogTitle>
                                    <div className="mt-2">

                                        <div>
                                            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                                Email
                                            </label>
                                            <div className="mt-2.5">
                                                <input
                                                    type="text"
                                                    name="last-name"
                                                    id="last-name"
                                                    autoComplete="family-name"
                                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button
                                type="button"
                                className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                onClick={() => setEvent(false)}
                            >
                                Deactivate
                            </button>
                            <button
                                type="button"
                                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                onClick={() => setEvent(false)}
                                data-autofocus
                            >
                                Cancel
                            </button>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
        <div className="lg:flex lg:h-full lg:flex-col px-4 py-16 sm:px-2 sm:py-24">
            <header className="flex items-center justify-between border-b border-gray-200 px-6 py-4 lg:flex-none">
                <h1 className="text-base font-semibold leading-6 text-gray-900 dark:text-gray-200" onClick={openEvent}>
                    <time dateTime="2022-01">January 2022</time>
                </h1>
                <div className="flex items-center">
                    <div className="relative flex items-center rounded-md bg-white dark:bg-gray-800 shadow-sm md:items-stretch">
                        <button type="button" className="flex h-9 w-12 items-center justify-center rounded-l-md border-y border-l border-gray-300 pr-1 text-gray-400 dark:text-gray-200 hover:text-gray-500 dark:text-gray-200 focus:relative md:w-9 md:pr-0 md:hover:bg-gray-50">
                            <span className="sr-only">Previous month</span>
                            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
                            </svg>
                        </button>
                        <button type="button" className="hidden border-y border-gray-300 px-3.5 text-sm font-semibold text-gray-900 dark:text-gray-200 hover:bg-gray-50 focus:relative md:block">Today</button>
                        <span className="relative -mx-px h-5 w-px bg-gray-300 md:hidden"></span>
                        <button type="button" className="flex h-9 w-12 items-center justify-center rounded-r-md border-y border-r border-gray-300 pl-1 text-gray-400 dark:text-gray-200 hover:text-gray-500 dark:text-gray-200 focus:relative md:w-9 md:pl-0 md:hover:bg-gray-50">
                            <span className="sr-only">Next month</span>
                            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    <div className="hidden md:ml-4 md:flex md:items-center">
                        <div className="relative">
                            <button type="button" className="flex items-center gap-x-1.5 rounded-md bg-white dark:bg-gray-800 px-3 py-2 text-sm font-semibold text-gray-900 dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="false" aria-haspopup="true">
                                Month view
                                <svg className="-mr-1 h-5 w-5 text-gray-400 dark:text-gray-200" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                </svg>
                            </button>
                            <div className="absolute right-0 z-10 mt-3 w-36 origin-top-right overflow-hidden rounded-md bg-white dark:bg-gray-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                                <div className="py-1" role="none">
                                    <a href="#" className="text-gray-700 dark:text-gray-200 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">Day view</a>
                                    <a href="#" className="text-gray-700 dark:text-gray-200 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Week view</a>
                                    <a href="#" className="text-gray-700 dark:text-gray-200 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Month view</a>
                                    <a href="#" className="text-gray-700 dark:text-gray-200 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-3">Year view</a>
                                </div>
                            </div>
                        </div>
                        <div className="ml-6 h-6 w-px bg-gray-300"></div>
                        <button
                            type="button"
                            className="ml-6 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                            onClick={openDialog}
                        >
                            Add event
                        </button>
                    </div>
                    <div className="relative ml-6 md:hidden">
                        <button type="button" className="-mx-2 flex items-center rounded-full border border-transparent p-2 text-gray-400 dark:text-gray-200 hover:text-gray-500 dark:text-gray-200" id="menu-0-button" aria-expanded="false" aria-haspopup="true">
                            <span className="sr-only">Open menu</span>
                            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
                            </svg>
                        </button>
                        <div className="absolute right-0 z-10 mt-3 w-36 origin-top-right divide-y divide-gray-100 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-0-button" tabIndex="-1">
                            <div className="py-1" role="none">
                                <a href="#" className="text-gray-700 dark:text-gray-200 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-0-item-0">Create event</a>
                            </div>
                            <div className="py-1" role="none">
                                <a href="#" className="text-gray-700 dark:text-gray-200 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-0-item-1">Go to today</a>
                            </div>
                            <div className="py-1" role="none">
                                <a href="#" className="text-gray-700 dark:text-gray-200 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-0-item-2">Day view</a>
                                <a href="#" className="text-gray-700 dark:text-gray-200 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-0-item-3">Week view</a>
                                <a href="#" className="text-gray-700 dark:text-gray-200 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-0-item-4">Month view</a>
                                <a href="#" className="text-gray-700 dark:text-gray-200 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-0-item-5">Year view</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="shadow ring-1 ring-black ring-opacity-5 lg:flex lg:flex-auto lg:flex-col">
                <div className="grid grid-cols-7 gap-px border-b border-gray-300 bg-gray-200 text-center text-xs font-semibold leading-6 text-gray-700 dark:text-gray-200 lg:flex-none">
                    <div className="flex justify-center bg-white dark:bg-gray-800 py-2">
                        <span>M</span>
                        <span className="sr-only sm:not-sr-only">on</span>
                    </div>
                    <div className="flex justify-center bg-white dark:bg-gray-800 py-2">
                        <span>T</span>
                        <span className="sr-only sm:not-sr-only">ue</span>
                    </div>
                    <div className="flex justify-center bg-white dark:bg-gray-800 py-2">
                        <span>W</span>
                        <span className="sr-only sm:not-sr-only">ed</span>
                    </div>
                    <div className="flex justify-center bg-white dark:bg-gray-800 py-2">
                        <span>T</span>
                        <span className="sr-only sm:not-sr-only">hu</span>
                    </div>
                    <div className="flex justify-center bg-white dark:bg-gray-800 py-2">
                        <span>F</span>
                        <span className="sr-only sm:not-sr-only">ri</span>
                    </div>
                    <div className="flex justify-center bg-white dark:bg-gray-800 py-2">
                        <span>S</span>
                        <span className="sr-only sm:not-sr-only">at</span>
                    </div>
                    <div className="flex justify-center bg-white dark:bg-gray-800 py-2">
                        <span>S</span>
                        <span className="sr-only sm:not-sr-only">un</span>
                    </div>
                </div>
                <div className="flex bg-gray-200 text-xs leading-6 text-gray-700 dark:text-gray-200 lg:flex-auto  grid-cols-7 grid-rows-6 lg:grid lg:grid-cols-7 lg:grid-rows-6 lg:gap-px">
                    <div className="hidden w-full grid" onClick={openEvent}>
                        <time dateTime="2021-12-27">27</time>
                    </div>
                    <div className="relative bg-white dark:bg-gray-800 px-3 py-2 text-gray-500 dark:text-gray-200" onClick={openEvent}>
                        <time dateTime="2021-12-28">28</time>
                    </div>
                    <div className="relative bg-white dark:bg-gray-800 px-3 py-2 text-gray-500 dark:text-gray-200" onClick={openEvent}>
                        <time dateTime="2021-12-29">29</time>
                    </div>
                    <div className="relative bg-white dark:bg-gray-800 px-3 py-2 text-gray-500 dark:text-gray-200" onClick={openEvent}>
                        <time dateTime="2021-12-30">30</time>
                    </div>
                    <div className="relative bg-white dark:bg-gray-800 px-3 py-2 text-gray-500 dark:text-gray-200" onClick={openEvent}>
                        <time dateTime="2021-12-31">31</time>
                    </div>
                    <div className="relative bg-white dark:bg-gray-800 px-3 py-2" onClick={openEvent}>
                        <time dateTime="2022-01-01">1</time>
                    </div>
                    <div className="relative bg-white dark:bg-gray-800 px-3 py-2" onClick={openEvent}>
                        <time dateTime="2022-01-01">2</time>
                    </div>
                    <div className="relative bg-white dark:bg-gray-800 px-3 py-2" onClick={openEvent}>
                        <time dateTime="2022-01-03">3</time>
                        <ol className="mt-2">
                            <li>
                                <a href="#" className="group flex">
                                    <p className="flex-auto truncate font-medium text-gray-900 dark:text-gray-200 group-hover:text-indigo-600">Design review</p>
                                    <time dateTime="2022-01-03T10:00" className="ml-3 hidden flex-none text-gray-500 dark:text-gray-200 group-hover:text-indigo-600 xl:block">10AM</time>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="group flex">
                                    <p className="flex-auto truncate font-medium text-gray-900 dark:text-gray-200 group-hover:text-indigo-600">Sales meeting</p>
                                    <time dateTime="2022-01-03T14:00" className="ml-3 hidden flex-none text-gray-500 dark:text-gray-200 group-hover:text-indigo-600 xl:block">2PM</time>
                                </a>
                            </li>
                        </ol>
                    </div>
                    <div className="relative bg-white dark:bg-gray-800 px-3 py-2" onClick={openEvent}>
                        <time dateTime="2022-01-04">4</time>
                    </div>
                    <div className="relative bg-white dark:bg-gray-800 px-3 py-2" onClick={openEvent}>
                        <time dateTime="2022-01-05">5</time>
                    </div>
                    <div className="relative bg-white dark:bg-gray-800 px-3 py-2" onClick={openEvent}>
                        <time dateTime="2022-01-06">6</time>
                    </div>
                    <div className="relative bg-white dark:bg-gray-800 px-3 py-2" onClick={openEvent}>
                        <time dateTime="2022-01-07">7</time>
                        <ol className="mt-2">
                            <li>
                                <a href="#" className="group flex">
                                    <p className="flex-auto truncate font-medium text-gray-900 dark:text-gray-200 group-hover:text-indigo-600">Date night</p>
                                    <time dateTime="2022-01-08T18:00" className="ml-3 hidden flex-none text-gray-500 dark:text-gray-200 group-hover:text-indigo-600 xl:block">6PM</time>
                                </a>
                            </li>
                        </ol>
                    </div>
                    <div className="relative bg-white dark:bg-gray-800 px-3 py-2" onClick={openEvent}>
                        <time dateTime="2022-01-08">8</time>
                    </div>
                    <div className="relative bg-white dark:bg-gray-800 px-3 py-2" onClick={openEvent}>
                        <time dateTime="2022-01-09">9</time>
                    </div>
                    <div className="relative bg-white dark:bg-gray-800 px-3 py-2" onClick={openEvent}>
                        <time dateTime="2022-01-10">10</time>
                    </div>
                    <div className="relative bg-white dark:bg-gray-800 px-3 py-2" onClick={openEvent}>
                        <time dateTime="2022-01-11">11</time>
                    </div>
                    <div className="relative bg-white dark:bg-gray-800 px-3 py-2" onClick={openEvent}>
                        <time dateTime="2022-01-12" className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white">12</time>
                        <ol className="mt-2">
                            <li>
                                <a href="#" className="group flex">
                                    <p className="flex-auto truncate font-medium text-gray-900 dark:text-gray-200 group-hover:text-indigo-600">Sam's birthday party</p>
                                    <time dateTime="2022-01-25T14:00" className="ml-3 hidden flex-none text-gray-500 dark:text-gray-200 group-hover:text-indigo-600 xl:block">2PM</time>
                                </a>
                            </li>
                        </ol>
                    </div>
                    <div className="relative bg-white dark:bg-gray-800 px-3 py-2" onClick={openEvent}>
                        <time dateTime="2022-01-13">13</time>
                    </div>
                    <div className="relative bg-white dark:bg-gray-800 px-3 py-2" onClick={openEvent}>
                        <time dateTime="2022-01-14">14</time>
                    </div>
                    <div className="relative bg-white dark:bg-gray-800 px-3 py-2" onClick={openEvent}>
                        <time dateTime="2022-01-15">15</time>
                    </div>
                    <div className="relative bg-white dark:bg-gray-800 px-3 py-2" onClick={openEvent}>
                        <time dateTime="2022-01-16">16</time>
                    </div>
                    <div className="relative bg-white dark:bg-gray-800 px-3 py-2" onClick={openEvent}>
                        <time dateTime="2022-01-17">17</time>
                    </div>
                    <div className="relative bg-white dark:bg-gray-800 px-3 py-2" onClick={openEvent}>
                        <time dateTime="2022-01-18">18</time>
                    </div>
                    <div className="relative bg-white dark:bg-gray-800 px-3 py-2" onClick={openEvent}>
                        <time dateTime="2022-01-19">19</time>
                    </div>
                    <div className="relative bg-white dark:bg-gray-800 px-3 py-2" onClick={openEvent}>
                        <time dateTime="2022-01-20">20</time>
                    </div>
                    <div className="relative bg-white dark:bg-gray-800 px-3 py-2" onClick={openEvent}>
                        <time dateTime="2022-01-21">21</time>
                    </div>
                    <div className="relative bg-white dark:bg-gray-800 px-3 py-2" onClick={openEvent}>
                        <time dateTime="2022-01-22">22</time>
                        <ol className="mt-2">
                            <li>
                                <a href="#" className="group flex">
                                    <p className="flex-auto truncate font-medium text-gray-900 dark:text-gray-200 group-hover:text-indigo-600">Maple syrup museum</p>
                                    <time dateTime="2022-01-22T15:00" className="ml-3 hidden flex-none text-gray-500 dark:text-gray-200 group-hover:text-indigo-600 xl:block">3PM</time>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="group flex">
                                    <p className="flex-auto truncate font-medium text-gray-900 dark:text-gray-200 group-hover:text-indigo-600">Hockey game</p>
                                    <time dateTime="2022-01-22T19:00" className="ml-3 hidden flex-none text-gray-500 dark:text-gray-200 group-hover:text-indigo-600 xl:block">7PM</time>
                                </a>
                            </li>
                        </ol>
                    </div>
                    <div className="relative bg-white dark:bg-gray-800 px-3 py-2" onClick={openEvent}>
                        <time dateTime="2022-01-23">23</time>
                    </div>
                    <div className="relative bg-white dark:bg-gray-800 px-3 py-2" onClick={openEvent}>
                        <time dateTime="2022-01-24">24</time>
                    </div>
                    <div className="relative bg-white dark:bg-gray-800 px-3 py-2" onClick={openEvent}>
                        <time dateTime="2022-01-25">25</time>
                    </div>
                    <div className="relative bg-white dark:bg-gray-800 px-3 py-2" onClick={openEvent}>
                        <time dateTime="2022-01-26">26</time>
                    </div>
                    <div className="relative bg-white dark:bg-gray-800 px-3 py-2" onClick={openEvent}>
                        <time dateTime="2022-01-27">27</time>
                    </div>
                    <div className="relative bg-white dark:bg-gray-800 px-3 py-2" onClick={openEvent}>
                        <time dateTime="2022-01-28">28</time>
                    </div>
                    <div className="relative bg-white dark:bg-gray-800 px-3 py-2" onClick={openEvent}>
                        <time dateTime="2022-01-29">29</time>
                    </div>
                    <div className="relative bg-white dark:bg-gray-800 px-3 py-2" onClick={openEvent}>
                        <time dateTime="2022-01-30">30</time>
                    </div>
                    <div className="relative bg-white dark:bg-gray-800 px-3 py-2" onClick={openEvent}>
                        <time dateTime="2022-01-31">31</time>
                    </div>
                    <div className="relative bg-white dark:bg-gray-800 px-3 py-2 text-gray-500 dark:text-gray-200" onClick={openEvent}>
                        <time dateTime="2022-02-01">1</time>
                    </div>
                    <div className="relative bg-white dark:bg-gray-800 px-3 py-2 text-gray-500 dark:text-gray-200" onClick={openEvent}>
                        <time dateTime="2022-02-02">2</time>
                    </div>
                    <div className="relative bg-white dark:bg-gray-800 px-3 py-2 text-gray-500 dark:text-gray-200" onClick={openEvent}>
                        <time dateTime="2022-02-03">3</time>
                    </div>
                    <div className="relative bg-white dark:bg-gray-800 px-3 py-2 text-gray-500 dark:text-gray-200" onClick={openEvent}>
                        <time dateTime="2022-02-04">4</time>
                        <ol className="mt-2">
                            <li>
                                <a href="#" className="group flex">
                                    <p className="flex-auto truncate font-medium text-gray-900 dark:text-gray-200 group-hover:text-indigo-600">Cinema with friends</p>
                                    <time dateTime="2022-02-04T21:00" className="ml-3 hidden flex-none text-gray-500 dark:text-gray-200 group-hover:text-indigo-600 xl:block">9PM</time>
                                </a>
                            </li>
                        </ol>
                    </div>
                    <div className="relative bg-white dark:bg-gray-800 px-3 py-2 text-gray-500 dark:text-gray-200" onClick={openEvent}>
                        <time dateTime="2022-02-05">5</time>
                    </div>
                    <div className="relative bg-white dark:bg-gray-800 px-3 py-2 text-gray-500 dark:text-gray-200" onClick={openEvent}>
                        <time dateTime="2022-02-06">6</time>
                    </div>
                </div>
                <div className="isolate grid w-full grid-cols-7 grid-rows-6 gap-px lg:hidden">
                    <button type="button" className="flex h-14 flex-col bg-white dark:bg-gray-800 px-3 py-2 text-gray-500 dark:text-gray-200 hover:bg-gray-100 focus:z-10" onClick={openEvent}>
                        <time dateTime="2021-12-27" className="ml-auto">27</time>
                        <span className="sr-only">0 events</span>
                    </button>
                    <button type="button" className="flex h-14 flex-col bg-white dark:bg-gray-800 px-3 py-2 text-gray-500 dark:text-gray-200 hover:bg-gray-100 focus:z-10" onClick={openEvent}>
                        <time dateTime="2021-12-28" className="ml-auto">28</time>
                        <span className="sr-only">0 events</span>
                    </button>
                    <button type="button" className="flex h-14 flex-col bg-white dark:bg-gray-800 px-3 py-2 text-gray-500 dark:text-gray-200 hover:bg-gray-100 focus:z-10" onClick={openEvent}>
                        <time dateTime="2021-12-29" className="ml-auto">29</time>
                        <span className="sr-only">0 events</span>
                    </button>
                    <button type="button" className="flex h-14 flex-col bg-white dark:bg-gray-800 px-3 py-2 text-gray-500 dark:text-gray-200 hover:bg-gray-100 focus:z-10" onClick={openEvent}>
                        <time dateTime="2021-12-30" className="ml-auto">30</time>
                        <span className="sr-only">0 events</span>
                    </button>
                    <button type="button" className="flex h-14 flex-col bg-white dark:bg-gray-800 px-3 py-2 text-gray-500 dark:text-gray-200 hover:bg-gray-100 focus:z-10" onClick={openEvent}>
                        <time dateTime="2021-12-31" className="ml-auto">31</time>
                        <span className="sr-only">0 events</span>
                    </button>
                    <button type="button" className="flex h-14 flex-col bg-white dark:bg-gray-800 px-3 py-2 text-gray-900 dark:text-gray-200 hover:bg-gray-100 focus:z-10" onClick={openEvent}>
                        <time dateTime="2022-01-01" className="ml-auto">1</time>
                        <span className="sr-only">0 events</span>
                    </button>
                    <button type="button" className="flex h-14 flex-col bg-white dark:bg-gray-800 px-3 py-2 text-gray-900 dark:text-gray-200 hover:bg-gray-100 focus:z-10" onClick={openEvent}>
                        <time dateTime="2022-01-02" className="ml-auto">2</time>
                        <span className="sr-only">0 events</span>
                    </button>
                    <button type="button" className="flex h-14 flex-col bg-white dark:bg-gray-800 px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10" onClick={openEvent}>
                        <time dateTime="2022-01-03" className="ml-auto">3</time>
                        <span className="sr-only">2 events</span>
                        <span className="-mx-0.5 mt-auto flex flex-wrap-reverse">
                            <span className="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400"></span>
                            <span className="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400"></span>
                        </span>
                    </button>
                    <button type="button" className="flex h-14 flex-col bg-white dark:bg-gray-800 px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10" onClick={openEvent}>
                        <time dateTime="2022-01-04" className="ml-auto">4</time>
                        <span className="sr-only">0 events</span>
                    </button>
                    <button type="button" className="flex h-14 flex-col bg-white dark:bg-gray-800 px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10" onClick={openEvent}>
                        <time dateTime="2022-01-05" className="ml-auto">5</time>
                        <span className="sr-only">0 events</span>
                    </button>
                    <button type="button" className="flex h-14 flex-col bg-white dark:bg-gray-800 px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10" onClick={openEvent}>
                        <time dateTime="2022-01-06" className="ml-auto">6</time>
                        <span className="sr-only">0 events</span>
                    </button>
                    <button type="button" className="flex h-14 flex-col bg-white dark:bg-gray-800 px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10" onClick={openEvent}>
                        <time dateTime="2022-01-07" className="ml-auto">7</time>
                        <span className="sr-only">1 event</span>
                        <span className="-mx-0.5 mt-auto flex flex-wrap-reverse">
                            <span className="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400"></span>
                        </span>
                    </button>
                    <button type="button" className="flex h-14 flex-col bg-white dark:bg-gray-800 px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10" onClick={openEvent}>
                        <time dateTime="2022-01-08" className="ml-auto">8</time>
                        <span className="sr-only">0 events</span>
                    </button>
                    <button type="button" className="flex h-14 flex-col bg-white dark:bg-gray-800 px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10" onClick={openEvent}>
                        <time dateTime="2022-01-09" className="ml-auto">9</time>
                        <span className="sr-only">0 events</span>
                    </button>
                    <button type="button" className="flex h-14 flex-col bg-white dark:bg-gray-800 px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10" onClick={openEvent}>
                        <time dateTime="2022-01-10" className="ml-auto">10</time>
                        <span className="sr-only">0 events</span>
                    </button>
                    <button type="button" className="flex h-14 flex-col bg-white dark:bg-gray-800 px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10" onClick={openEvent}>
                        <time dateTime="2022-01-11" className="ml-auto">11</time>
                        <span className="sr-only">0 events</span>
                    </button>
                    <button type="button" className="flex h-14 flex-col bg-white dark:bg-gray-800 px-3 py-2 font-semibold text-indigo-600 hover:bg-gray-100 focus:z-10" onClick={openEvent}>
                        <time dateTime="2022-01-12" className="ml-auto">12</time>
                        <span className="sr-only">1 event</span>
                        <span className="-mx-0.5 mt-auto flex flex-wrap-reverse">
                            <span className="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400"></span>
                        </span>
                    </button>
                    <button type="button" className="flex h-14 flex-col bg-white dark:bg-gray-800 px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10" onClick={openEvent}>
                        <time dateTime="2022-01-13" className="ml-auto">13</time>
                        <span className="sr-only">0 events</span>
                    </button>
                    <button type="button" className="flex h-14 flex-col bg-white dark:bg-gray-800 px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10" onClick={openEvent}>
                        <time dateTime="2022-01-14" className="ml-auto">14</time>
                        <span className="sr-only">0 events</span>
                    </button>
                    <button type="button" className="flex h-14 flex-col bg-white dark:bg-gray-800 px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10" onClick={openEvent}>
                        <time dateTime="2022-01-15" className="ml-auto">15</time>
                        <span className="sr-only">0 events</span>
                    </button>
                    <button type="button" className="flex h-14 flex-col bg-white dark:bg-gray-800 px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10" onClick={openEvent}>
                        <time dateTime="2022-01-16" className="ml-auto">16</time>
                        <span className="sr-only">0 events</span>
                    </button>
                    <button type="button" className="flex h-14 flex-col bg-white dark:bg-gray-800 px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10" onClick={openEvent}>
                        <time dateTime="2022-01-17" className="ml-auto">17</time>
                        <span className="sr-only">0 events</span>
                    </button>
                    <button type="button" className="flex h-14 flex-col bg-white dark:bg-gray-800 px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10" onClick={openEvent}>
                        <time dateTime="2022-01-18" className="ml-auto">18</time>
                        <span className="sr-only">0 events</span>
                    </button>
                    <button type="button" className="flex h-14 flex-col bg-white dark:bg-gray-800 px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10" onClick={openEvent}>
                        <time dateTime="2022-01-19" className="ml-auto">19</time>
                        <span className="sr-only">0 events</span>
                    </button>
                    <button type="button" className="flex h-14 flex-col bg-white dark:bg-gray-800 px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10" onClick={openEvent}>
                        <time dateTime="2022-01-20" className="ml-auto">20</time>
                        <span className="sr-only">0 events</span>
                    </button>
                    <button type="button" className="flex h-14 flex-col bg-white dark:bg-gray-800 px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10" onClick={openEvent}>
                        <time dateTime="2022-01-21" className="ml-auto">21</time>
                        <span className="sr-only">0 events</span>
                    </button>
                    <button type="button" className="flex h-14 flex-col bg-white dark:bg-gray-800 px-3 py-2 font-semibold text-white hover:bg-gray-100 focus:z-10" onClick={openEvent}>
                        <time dateTime="2022-01-22" className="ml-auto flex h-6 w-6 items-center justify-center rounded-full bg-gray-900">22</time>
                        <span className="sr-only">2 events</span>
                        <span className="-mx-0.5 mt-auto flex flex-wrap-reverse">
                            <span className="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400"></span>
                            <span className="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400"></span>
                        </span>
                    </button>
                    <button type="button" className="flex h-14 flex-col bg-white dark:bg-gray-800 px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10" onClick={openEvent}>
                        <time dateTime="2022-01-23" className="ml-auto">23</time>
                        <span className="sr-only">0 events</span>
                    </button>
                    <button type="button" className="flex h-14 flex-col bg-white dark:bg-gray-800 px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10" onClick={openEvent}>
                        <time dateTime="2022-01-24" className="ml-auto">24</time>
                        <span className="sr-only">0 events</span>
                    </button>
                    <button type="button" className="flex h-14 flex-col bg-white dark:bg-gray-800 px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10" onClick={openEvent}>
                        <time dateTime="2022-01-25" className="ml-auto">25</time>
                        <span className="sr-only">0 events</span>
                    </button>
                    <button type="button" className="flex h-14 flex-col bg-white dark:bg-gray-800 px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10" onClick={openEvent}>
                        <time dateTime="2022-01-26" className="ml-auto">26</time>
                        <span className="sr-only">0 events</span>
                    </button>
                    <button type="button" className="flex h-14 flex-col bg-white dark:bg-gray-800 px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10" onClick={openEvent}>
                        <time dateTime="2022-01-27" className="ml-auto">27</time>
                        <span className="sr-only">0 events</span>
                    </button>
                    <button type="button" className="flex h-14 flex-col bg-white dark:bg-gray-800 px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10" onClick={openEvent}>
                        <time dateTime="2022-01-28" className="ml-auto">28</time>
                        <span className="sr-only">0 events</span>
                    </button>
                    <button type="button" className="flex h-14 flex-col bg-white dark:bg-gray-800 px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10" onClick={openEvent}>
                        <time dateTime="2022-01-29" className="ml-auto">29</time>
                        <span className="sr-only">0 events</span>
                    </button>
                    <button type="button" className="flex h-14 flex-col bg-white dark:bg-gray-800 px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10" onClick={openEvent}>
                        <time dateTime="2022-01-30" className="ml-auto">30</time>
                        <span className="sr-only">0 events</span>
                    </button>
                    <button type="button" className="flex h-14 flex-col bg-white dark:bg-gray-800 px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10" onClick={openEvent}>
                        <time dateTime="2022-01-31" className="ml-auto">31</time>
                        <span className="sr-only">0 events</span>
                    </button>
                    <button type="button" className="flex h-14 flex-col bg-white dark:bg-gray-800 px-3 py-2 text-gray-500 hover:bg-gray-100 focus:z-10" onClick={openEvent}>
                        <time dateTime="2022-02-01" className="ml-auto">1</time>
                        <span className="sr-only">0 events</span>
                    </button>
                    <button type="button" className="flex h-14 flex-col bg-white dark:bg-gray-800 px-3 py-2 text-gray-500 hover:bg-gray-100 focus:z-10" onClick={openEvent}>
                        <time dateTime="2022-02-02" className="ml-auto">2</time>
                        <span className="sr-only">0 events</span>
                    </button>
                    <button type="button" className="flex h-14 flex-col bg-white dark:bg-gray-800 px-3 py-2 text-gray-500 hover:bg-gray-100 focus:z-10" onClick={openEvent}>
                        <time dateTime="2022-02-03" className="ml-auto">3</time>
                        <span className="sr-only">0 events</span>
                    </button>
                    <button type="button" className="flex h-14 flex-col bg-white dark:bg-gray-800 px-3 py-2 text-gray-500 hover:bg-gray-100 focus:z-10" onClick={openEvent}>
                        <time dateTime="2022-02-04" className="ml-auto">4</time>
                        <span className="sr-only">1 event</span>
                        <span className="-mx-0.5 mt-auto flex flex-wrap-reverse">
                            <span className="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400"></span>
                        </span>
                    </button>
                    <button type="button" className="flex h-14 flex-col bg-white dark:bg-gray-800 px-3 py-2 text-gray-500 hover:bg-gray-100 focus:z-10" onClick={openEvent}>
                        <time dateTime="2022-02-05" className="ml-auto">5</time>
                        <span className="sr-only">0 events</span>
                    </button>
                    <button type="button" className="flex h-14 flex-col bg-white dark:bg-gray-800 px-3 py-2 text-gray-500 hover:bg-gray-100 focus:z-10" onClick={openEvent}>
                        <time dateTime="2022-02-06" className="ml-auto">6</time>
                        <span className="sr-only">0 events</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
}

export default PlanPage;