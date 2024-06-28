'use client'

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
