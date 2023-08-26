import { PhotoIcon } from '@heroicons/react/24/outline'
import React from 'react'

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
        </div>
    )
}

export default Dashboard
