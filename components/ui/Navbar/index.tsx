'use client'
import React, { Fragment } from 'react'

import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

import { cn } from '@/lib/utils'
import Link from 'next/link'

const navigation = [
    { name: 'Chirag', href: '/chirag', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
    { name: 'Reports', href: '#', current: false },
]

const Navbar = () => {
    return (
        <Disclosure as="nav" className=" bg-primary lg:border-none">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="flex items-center px-2 lg:px-0">
                                <div className="shrink-0">
                                    <img
                                        className="block h-8 w-8"
                                        src="https://tailwindui.com/img/logos/mark.svg?color=white"
                                        alt="Your Company"
                                    />
                                </div>
                                <div className="hidden lg:ml-10 lg:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={cn(
                                                    'rounded-md px-3 py-2 text-sm font-medium',
                                                    {
                                                        'bg-white bg-opacity-20 text-white':
                                                            item.current,
                                                        'bg-white bg-opacity-0 text-white hover:bg-opacity-10':
                                                            !item.current,
                                                    }
                                                )}
                                                aria-current={
                                                    item.current
                                                        ? 'page'
                                                        : undefined
                                                }
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="flex lg:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-primary p-2 text-white focus:outline-none">
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
                                    {open ? (
                                        <XMarkIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <Bars3Icon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>
                    <Disclosure.Panel className="lg:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as={Link}
                                    href={item.href}
                                    className={cn(
                                        'block rounded-md px-3 py-2 text-base font-medium',
                                        {
                                            'bg-primary text-white':
                                                item.current,
                                            'text-white hover:bg-opacity-75':
                                                !item.current,
                                        }
                                    )}
                                    aria-current={
                                        item.current ? 'page' : undefined
                                    }
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

export default Navbar
