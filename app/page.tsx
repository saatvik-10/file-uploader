import Button from "@/components/ui/Button";
import { ChevronLast, User } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import { users } from '@/lib/users'


export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-background py-20 px-5">
            <ul
                role="list"
                className="divide-y mt-10 divide-gray-100 overflow-hidden bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl w-full max-w-6xl mx-auto"
            >
                {users.map((user,index) => (
                    <Link
                        href={user.href}
                        key={index}
                        className="relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6"
                    >
                        <div className="flex min-w-0 gap-x-4 items-center">
                            <User
                                className="h-10 flex-none "
                                aria-hidden="true"
                            />
                            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold leading-6 text-gray-900">
                                    <span className="absolute inset-x-0 -top-px bottom-0" />
                                    {user.name}
                                </p>
                            </div>
                        </div>
                        <div className="flex shrink-0 items-center gap-x-4">
                            <ChevronLast
                                className="h-5 w-5 flex-none text-gray-400"
                                aria-hidden="true"
                            />
                        </div>
                    </Link>
                ))}
            </ul>
        </main>
    );
}
