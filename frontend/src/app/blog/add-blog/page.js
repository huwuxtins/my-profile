'use client'

import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { compress, decompress } from 'lz-string';
import { addBlog } from '~/api/blog';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { toast } from "sonner";
import { useRouter } from 'next/navigation';

function AddBlogPage() {
    const router = useRouter();

    const [value, setValue] = useState('');

    const [isSaved, setIsSaved] = useState(0)

    const handleChange = (value, editor) => {
        setValue(value)
    }

    const handleSave = async (blogTitle, value) => {
        // alert("Size of sample is: " + value.length);
        // var compressed = compress(string);
        // alert("Size of compressed sample is: " + compressed.length);
        // var string = decompress(compressed);
        // alert("Sample is: " + string);
        // const blog = await addBlog(accessToken, {
        //     id: uuidv4(),
        //     createdAt: new Date(Date.now()).toISOString().slice(0, 19),
        //     title: blogTitle,
        //     content: value,
        // })
        // console.log(blog)

        const response = await axios.post("/api/blog", {
            id: uuidv4(),
            createdAt: new Date(Date.now()).toISOString().slice(0, 19),
            title: blogTitle,
            content: value,
        })

        if (response) {
            toast("Add blog successfully!", {
                description: "You can check by going to blog page!",
                action: {
                    label: "Check",
                    onClick: () => router.push('/blog'),
                },
            })
        }
    }

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
        <div className='flex flex-row justify-between items-center'>
            <span className='text-4xl font-bold my-10 text-gray-800 dark:text-gray-200'>Add blog</span>
        </div>
        {isSaved != 0 ? <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">{isSaved > 0 ? 'Success' : 'Failed'}</strong>
            <span className="block sm:inline">{isSaved > 0 ? 'Blog is saved successfully!' : 'Saving this blog failed, please check and try again!'}</span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                <svg className="fillCurrent h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
            </span>
        </div> : null}
        <div className='flex flex-col lg:flex-row justify-between'>
            <ReactQuill theme="snow"
                value={value}
                onChange={(value, delta, source, editor) => handleChange(value, editor)}
                className='border-2 overflow-hidden rounded-lg lg:basis-1/2 mb-5 lg:mb-0 lg:mr-5' style={{ height: '550px' }}
                modules={modules}
                formats={formats}
            />
            <div className='flex flex-col border-2 rounded-lg lg:basis-1/2' style={{ height: '550px' }}>
                <span className='items-center border-t-2 border p-5 font-bold'>
                    Preview
                </span>
                <div className='overflow-scroll w-full p-5 h-full' dangerouslySetInnerHTML={{ __html: value }}></div>
            </div>
        </div>
        <div className='flex flex-row mt-6 justify-between'>
            <button type="button" className="rounded-md bg-slate-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Cancel
            </button>

            <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={() => handleSave("test", value)}
            >
                Save
            </button>
        </div>
    </div>;
}

export default AddBlogPage;