'use client'
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function AddBlogPage() {
    const [value, setValue] = useState('');

    const modules = {
        toolbar: [
            ['bold', 'italic', 'underline',],        // toggled buttons
            ['blockquote', 'code-block'],
            ['link', 'image', 'video',],

            [{ 'header': 1 }, { 'header': 2 }],               // custom button values
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }],
            [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
            [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent

            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

            [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
            [{ 'font': [] }],
            [{ 'align': [] }],

            ['clean']                                         // remove formatting button
        ]
    }

    const formats = [
        "header",
        "font",
        "size",
        "bold",
        "italic",
        "underline",
        "blockquote",
        "code-block",
        "list",
        "bullet",
        "indent",
        "link",
        "align",
        "image",
        "video",
        "script",
    ]

    return <div className='flex flex-col mx-auto max-w-2xl px-4 py-16 h-auto sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 bg-white dark:bg-gray-800'>
        <span className='text-4xl font-bold my-10 text-gray-800 dark:text-gray-200'>Add blog</span>
        <ReactQuill theme="snow" value={value} onChange={setValue} className='w-full border-2 overflow-hidden rounded-lg h-96' modules={modules} formats={formats} />
        <div className='flex flex-row mt-6 justify-between'>
            <button type="button"
                className="rounded-md bg-emerald-700 px-3 py-2 text-sm font-semibold text-white border-2 shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={() => router.push('/view/1')}
            >
                Preview
            </button>
            <div className="flex items-center justify-end gap-x-6">
                <button type="button" className="rounded-md bg-slate-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Cancel
                </button>
                <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Save
                </button>
            </div>
        </div>
    </div>;
}

export default AddBlogPage;