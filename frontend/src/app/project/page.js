'use client'

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link"
import React, { useRef, useEffect, useState } from 'react';

const callouts = [
    {
        id: '6491ee1c-b1a1-4090-a029-8e59ad16d544',
        name: 'Desk and Office',
        description: 'Work from home accessories',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
        imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
        href: '/project',
    },
    {
        id: '6491ee1c-b1a1-4090-a029-8e59ad16d545',
        name: 'Self-Improvement',
        description: 'Journals and note-taking',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
        imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
        href: '/project',
    },
    {
        id: '6491ee1c-b1a1-4090-a029-8e59ad16d546',
        name: 'Travel',
        description: 'Daily commute essentials',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '/project',
    },
    {
        id: '6491ee1c-b1a1-4090-a029-8e59ad16d547',
        name: 'Desk and Office',
        description: 'Work from home accessories',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
        imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
        href: '/project',
    },
    {
        id: '6491ee1c-b1a1-4090-a029-8e59ad16d548',
        name: 'Self-Improvement',
        description: 'Journals and note-taking',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
        imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
        href: '/project',
    },
    {
        id: '6491ee1c-b1a1-4090-a029-8e59ad16d549',
        name: 'Travel',
        description: 'Daily commute essentials',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '/project',
    },
]

export default function ProjectPreview() {

    const calloutRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1
            }
        );

        if (calloutRef.current) {
            observer.observe(calloutRef.current);
        }

        return () => {
            if (calloutRef.current) {
                observer.unobserve(calloutRef.current);
            }
        };
    }, []);

    return (
        <div className="bg-gray-100 dark:bg-gray-800">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                    <div className="flex flex-row justify-between items-center">
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Projects</h2>
                    </div>
                    <div className="flex flex-col-reverse mt-2 items-start sm:flex-row sm:items-center justify-between">
                        <button
                            type="button"
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 my-2"
                        >
                            Add project
                        </button>
                        <div className="relative my-2">
                            <input
                                type="text"
                                name="query-text"
                                id="query-text"
                                autoComplete="given-name"
                                placeholder="Search"
                                className="dark:bg-gray-800 block w-full rounded-full border-0 pl-10 pr-4 py-2 text-gray-900 dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            <div class="absolute inset-y-0 left-0 pl-3  
                            flex items-center  
                            pointer-events-none"
                            >
                                <FontAwesomeIcon icon={faSearch} color={'gray'} />
                            </div>
                        </div>
                    </div>
                    <div
                        ref={calloutRef}
                        className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0"
                    >
                        {callouts.map((callout) => (
                            <div key={callout.id} className={`group relative transition ease-linear delay-150 mb-5 ${isVisible ? 'translate-y-0 opacity-1' : 'translate-y-10 opacity-0'} duration-300`}>
                                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                    <img
                                        src={callout.imageSrc}
                                        alt={callout.imageAlt}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <h3 className="mt-6 text-sm text-gray-500 dark:text-white">
                                    <a href={`${callout.href}/${callout.id}`}>
                                        <span className="absolute inset-0" />
                                        {callout.name}
                                    </a>
                                </h3>
                                <p className="text-base font-semibold text-gray-900 dark:text-white">{callout.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
