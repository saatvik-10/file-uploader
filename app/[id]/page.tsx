'use client'

import { PhotoIcon } from '@heroicons/react/24/outline'
import axios from 'axios'
import { Download, File } from 'lucide-react'
import React, { ChangeEventHandler, useEffect, useState } from 'react'

const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
]

const Dashboard = ({ params: { id = 'files' } }) => {
    const [files, setFiles] = useState<IFile[]>([])

    const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        if (!e.target.files) return
        if (!e.target.files[0]) return
        const file = e.target.files[0]
        const data = new FormData()
        data.append('file', file)
        axios.post(`http://localhost:5000/upload/${id}`, data).then((res) => {
            const data = res.data as IFile
            data.createdAt = new Date().toISOString()
            setFiles([...files, data])
        })
    }
    useEffect(() => {
        axios.get(`http://localhost:5000/upload/${id}`).then((res) => {
            setFiles(res.data)
        })
    }, [])

    return (
        <div>
            <div className='col-span-full'>
                <p className='block text-sm font-medium leading-6 text-gray-900'>
                    Upload File
                </p>
                <label
                    htmlFor='file-upload'
                    className='mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10'
                >
                    <div className='text-center'>
                        <PhotoIcon
                            className='mx-auto h-12 w-12 text-gray-300'
                            aria-hidden='true'
                        />
                        <div className='mt-4 flex text-sm leading-6 text-gray-600'>
                            <div
                                className='relative cursor-pointer rounded-md bg-white font-semibold text-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 hover:text-primary'>
                                <span>Upload a file</span>
                            </div>
                            <p className='pl-1'>or drag and drop</p>
                        </div>
                        <p className='text-xs leading-5 text-gray-600'>
                            Upload Your File
                        </p>
                    </div>

                    <input
                        onChange={onChange}
                        id='file-upload'
                        name='file-upload'
                        type='file'
                        className='sr-only'
                    />
                </label>
            </div>
            <ul
                role='list'
                className='divide-y mt-10 divide-gray-100 overflow-hidden bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl'
            >
                {files.map((file) => (
                    <a
                        download={true}
                        href={file.url}
                        key={file.key}
                        className='relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6'
                    >
                        <div className='flex min-w-0 gap-x-4 items-center'>
                            <File
                                className='h-10 flex-none '
                                aria-hidden='true'
                            />
                            <div className='min-w-0 flex-auto'>
                                <p className='text-sm font-semibold leading-6 text-gray-900'>
                                    <span className='absolute inset-x-0 -top-px bottom-0' />
                                    {file.name}
                                </p>
                            </div>
                        </div>
                        <div className='flex shrink-0 items-center gap-x-4'>
                            <div className='hidden sm:flex sm:flex-col sm:items-end'>
                                <p className='mt-1 text-xs leading-5 text-gray-500'>
                                    <time dateTime={file.createdAt}>
                                        {new Date(file.createdAt).getDate()}
                                        {' '}
                                        {
                                            months[
                                                new Date(
                                                    file.createdAt,
                                                ).getMonth()
                                                ]
                                        }{' '}
                                        {new Date(file.createdAt).getHours()}
                                        {':'}
                                        {new Date(file.createdAt).getDate()}
                                    </time>
                                </p>
                            </div>
                            <Download
                                className='h-5 w-5 flex-none text-gray-400'
                                aria-hidden='true'
                            />
                        </div>
                    </a>
                ))}
            </ul>
        </div>
    )
}

export default Dashboard
