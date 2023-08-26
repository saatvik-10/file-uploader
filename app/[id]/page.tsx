import { PhotoIcon } from '@heroicons/react/24/outline'
import { Download, File } from 'lucide-react'
import React from 'react'

const people = [
    {
        name: 'Leslie Alexander',
        email: 'leslie.alexander@example.com',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        href: '#',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        name: 'Michael Foster',
        email: 'michael.foster@example.com',
        role: 'Co-Founder / CTO',
        imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        href: '#',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        name: 'Dries Vincent',
        email: 'dries.vincent@example.com',
        role: 'Business Relations',
        imageUrl:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        href: '#',
        lastSeen: null,
    },
    {
        name: 'Lindsay Walton',
        email: 'lindsay.walton@example.com',
        role: 'Front-end Developer',
        imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        href: '#',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        name: 'Courtney Henry',
        email: 'courtney.henry@example.com',
        role: 'Designer',
        imageUrl:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        href: '#',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        name: 'Tom Cook',
        email: 'tom.cook@example.com',
        role: 'Director of Product',
        imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        href: '#',
        lastSeen: null,
    },
]
const Dashboard = () => {
    return (
        <div>
            <div className="col-span-full">
                <p className="block text-sm font-medium leading-6 text-gray-900">
                    Upload File
                </p>
                <label
                    htmlFor="file-upload"
                    className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10"
                >
                    <div className="text-center">
                        <PhotoIcon
                            className="mx-auto h-12 w-12 text-gray-300"
                            aria-hidden="true"
                        />
                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                            <div className="relative cursor-pointer rounded-md bg-white font-semibold text-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 hover:text-primary">
                                <span>Upload a file</span>
                            </div>
                            <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs leading-5 text-gray-600">
                            Upload Your File
                        </p>
                    </div>

                    <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                    />
                </label>
            </div>
            <ul
                role="list"
                className="divide-y mt-10 divide-gray-100 overflow-hidden bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl"
            >
                {people.map((person) => (
                    <li
                        key={person.email}
                        className="relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6"
                    >
                        <div className="flex min-w-0 gap-x-4 items-center">
                            <File
                                className="h-10 flex-none "
                                aria-hidden="true"
                            />
                            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold leading-6 text-gray-900">
                                    <span className="absolute inset-x-0 -top-px bottom-0" />
                                    {person.name}
                                </p>
                            </div>
                        </div>
                        <div className="flex shrink-0 items-center gap-x-4">
                            <div className="hidden sm:flex sm:flex-col sm:items-end">
                                <p className="mt-1 text-xs leading-5 text-gray-500">
                                    Last seen
                                    <time dateTime={person.lastSeenDateTime}>
                                        {person.lastSeen}
                                    </time>
                                </p>
                            </div>
                            <Download
                                className="h-5 w-5 flex-none text-gray-400"
                                aria-hidden="true"
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Dashboard
