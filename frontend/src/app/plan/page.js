'use client'
import { useState } from "react";
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import Datepicker from "tailwind-datepicker-react"
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const options = {
    title: "Choose a date",
    autoHide: true,
    todayBtn: false,
    clearBtn: true,
    clearBtnText: "Clear",
    maxDate: new Date("2030-01-01"),
    minDate: new Date("1950-01-01"),
    theme: {
        background: "bg-gray-100 dark:bg-gray-800",
        todayBtn: "",
        clearBtn: "",
        icons: "",
        text: "",
        disabledText: "bg-gray-400",
        input: "",
        inputIcon: "",
        selected: "",
    },
    icons: {
        // () => ReactElement | JSX.Element
        prev: () => <span>Previous</span>,
        next: () => <span>Next</span>,
    },
    datepickerClassNames: "top-20 p-0 border-2 rounded-lg",
    defaultDate: new Date("2022-01-01"),
    language: "en",
    disabledDates: [],
    weekDays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
    inputNameProp: "date",
    inputIdProp: "date",
    inputPlaceholderProp: "Select Date",
    inputDateFormatProp: {
        day: "numeric",
        month: "long",
        year: "numeric"
    }
}

const people = [
    {
        id: 1,
        name: 'Wade Cooper',
        avatar:
            'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
]
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function PlanPage({ children }) {
    const [selected, setSelected] = useState(people[0])

    const [open, setOpen] = useState(false)
    const [plan, setplan] = useState({ date: new Date(Date.now()), event: [] })

    const openDialog = (plan) => {
        if (plan != null) {
            console.log(plan)
            setplan(plan)
        }
        setOpen(!open)
    }

    const [show, setShow] = useState(false)
    const [selectedDate, setSelectedDate] = useState(Date.now())
    const handleChange = (selectedDate) => {
        setSelectedDate(selectedDate)
    }
    const handleClose = (state) => {
        setShow(state)
    }
    const [showEnd, setShowEnd] = useState(false)
    const [selectedEndDate, setSelectedEndDate] = useState(Date.now())
    const handleChangeEnd = (selectedEndDate) => {
        setSelectedEndDate(selectedEndDate)
    }
    const handleCloseEnd = (state) => {
        setShowEnd(state)
    }

    const [weeks, setWeeks] = useState(generateCalendar(new Date(Date.now()).getMonth(), new Date(Date.now()).getFullYear()))

    function generateCalendar(month, year) {

        const firstDayOfMonth = new Date(year, month, 1);
        const lastDayOfMonth = new Date(year, month + 1, 0);

        // Calculate the day of the week the month starts on (0 = Sunday, ..., 6 = Saturday)
        let startDay = firstDayOfMonth.getDay();
        startDay = startDay === 0 ? 7 : startDay; // Adjust if the first day is Sunday

        let date = 1;
        let weeks = [];

        for (let i = 0; i < 6; i++) {
            const week = [];
            for (let j = 1; j <= 7; j++) {
                if (i === 0 && j < startDay) {
                    week.push({ date: '', event: [] });
                } else if (date > lastDayOfMonth.getDate()) {
                    week.push({ date: '', event: [] });
                } else {
                    week.push(
                        {
                            date,
                            event: [{
                                id: 'a5875e64-4b24-4e8d-aa9c-d6f928bb6ecd',
                                time: new Date(Date.now()),
                                startDate: new Date(Date.now()),
                                endDate: new Date('2024-06-30'),
                                task: "Task",
                            }]
                        });
                    date++;
                }
            }
            weeks.push(week);
        }
        return weeks
    }

    return <div>
        {/* Dialog add event */}
        <Dialog className="relative z-10" open={open} onClose={setOpen}>
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 bg-opacity-80 dark:bg-opacity-80 bg-gray-600 dark:bg-gray-600 ">
                    <DialogPanel
                        transition="true"
                        className="relative transform rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                    >
                        <div className=" px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                    <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                                </div>
                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                                    <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                        {plan.event.length != 0 ? 'Edit event' : 'Add event'}
                                    </DialogTitle>
                                    {plan.event.length != 0 ? plan.event.map((task, index) => {
                                        return <div key={index} className="mt-5 border-2 p-2">
                                            <div>
                                                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                                    Event's name
                                                </label>
                                                <div className="mt-2.5">
                                                    <input
                                                        type="text"
                                                        name="last-name"
                                                        id="last-name"
                                                        autoComplete="family-name"
                                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        value={task.task}
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                                    Description
                                                </label>
                                                <div className="mt-2.5">
                                                    <textarea
                                                        name="message"
                                                        id="message"
                                                        rows={4}
                                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        defaultValue={''}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    }) : null}
                                    <div date-rangepicker className="flex items-center mt-5">
                                        <div className="relative">
                                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                                </svg>
                                            </div>
                                            <Datepicker options={options} onChange={handleChange} show={show} setShow={handleClose} />
                                        </div>
                                        <span className="mx-4 text-gray-500">to</span>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                                </svg>
                                            </div>
                                            <Datepicker options={options} onChange={handleChangeEnd} show={showEnd} setShow={handleCloseEnd} />
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <div>
                                            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                                Event's name
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
                                                Description
                                            </label>
                                            <div className="mt-2.5">
                                                <textarea
                                                    name="message"
                                                    id="message"
                                                    rows={4}
                                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    defaultValue={''}
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

        <div className="lg:flex lg:h-full lg:flex-col px-4 py-16 sm:px-2 sm:py-24">
            <header className="flex items-center justify-between border-b border-gray-200 px-6 py-4 lg:flex-none">
                <h1 className="text-base font-semibold leading-6 text-gray-900 dark:text-gray-200">
                    <time dateTime="2022-01">January 2022</time>
                </h1>
                <div className="flex items-center">
                    <div className="hidden md:ml-4 md:flex md:items-center">
                        <Listbox value={selected} onChange={setSelected}>
                            {({ open }) => (
                                <>
                                    <Label className="block text-sm font-medium leading-6 text-gray-900">Choose view mode</Label>
                                    <div className="relative ml-2">
                                        <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                                            <span className="flex items-center">
                                                <img src={selected.avatar} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" />
                                                <span className="ml-3 block truncate">{selected.name}</span>
                                            </span>
                                            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                            </span>
                                        </ListboxButton>

                                        <ListboxOptions
                                            transition
                                            className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
                                        >
                                            {people.map((person) => (
                                                <ListboxOption
                                                    key={person.id}
                                                    className={({ focus }) =>
                                                        classNames(
                                                            focus ? 'bg-indigo-600 text-white' : '',
                                                            !focus ? 'text-gray-900' : '',
                                                            'relative cursor-default select-none py-2 pl-3 pr-9',
                                                        )
                                                    }
                                                    value={person}
                                                >
                                                    {({ selected, focus }) => (
                                                        <>
                                                            <div className="flex items-center">
                                                                <img src={person.avatar} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" />
                                                                <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}>
                                                                    {person.name}
                                                                </span>
                                                            </div>

                                                            {selected ? (
                                                                <span
                                                                    className={classNames(
                                                                        focus ? 'text-white' : 'text-indigo-600',
                                                                        'absolute inset-y-0 right-0 flex items-center pr-4',
                                                                    )}
                                                                >
                                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                </span>
                                                            ) : null}
                                                        </>
                                                    )}
                                                </ListboxOption>
                                            ))}
                                        </ListboxOptions>
                                    </div>
                                </>
                            )}
                        </Listbox>
                        <div className="ml-6 h-6 w-px bg-gray-300"></div>
                        <button
                            type="button"
                            className="ml-6 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                            onClick={() => openDialog({date: new Date(Date.now()), event: []})}
                        >
                            Add event
                        </button>
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
                <div className="flex bg-gray-200 text-xs leading-6 text-gray-700 dark:text-gray-200 grid grid-cols-7 grid-rows-6 lg:grid lg:grid-cols-7 lg:grid-rows-6 lg:gap-px">

                    {/* <div className="relative bg-white dark:bg-gray-800 px-3 py-2 text-gray-500 dark:text-gray-200" onClick={openEvent}>
                        <time dateTime="2021-12-28">28</time>
                    </div> */}
                    {weeks.map((week, index) => (
                        week.map((plan, index) => {
                            return <div className="relative bg-white dark:bg-gray-800 px-3 py-2" onClick={() => openDialog(plan)}>
                                <time dateTime="2022-01-03">{plan.date}</time>
                                <ol className="mt-2">
                                    {plan.event.map((event, index) => {
                                        return <li>
                                            <a href="#" className="group flex">
                                                <p className="flex-auto truncate font-medium text-gray-900 dark:text-gray-200 group-hover:text-indigo-600">{event.task}</p>
                                                <time dateTime="2022-01-03T10:00" className="ml-3 hidden flex-none text-gray-500 dark:text-gray-200 group-hover:text-indigo-600 xl:block">10AM</time>
                                            </a>
                                        </li>
                                    })}
                                </ol>
                            </div>
                        })
                    ))}

                </div>
            </div>
        </div>
    </div>
}

export default PlanPage;