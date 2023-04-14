import React, { useState } from "react";
import { Head } from "@inertiajs/inertia-react";
import Navbar from "@/Components/homepage/Navbar";
import AzzaNews from "@/Components/homepage/AzzaNews";
import Pagination from "@/Components/homepage/pagination";

export default function Azzanews(props) {
    const [news, setNews] = useState([]);
    return (
        <div className="bg-[#CBEDD5] pb-10">
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            {/* <Search />*/}
            <div className="m-20">
                <h1 className="text-center text-black font-bold font-plusjktsans md:text-[50px] text-[25px] mb-[20px]">
                    All News About Az-zahra
                </h1>

                <form
                    action="/azzanews"
                    className="flex items-center md:px-[200px]"
                >
                    <label
                        for="simple-search"
                        className="sr-only"
                        name="search"
                    >
                        Search
                    </label>
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg
                                ariaHidden="true"
                                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </div>
                        <input
                            name="search"
                            type="text"
                            id="search"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search"
                        />
                    </div>
                    <button
                        type="submit"
                        className="p-2.5 ml-2 text-sm font-medium text-white rounded-lg border bg-[#439A97] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-bg-[#439A97] dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            ></path>
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>
                </form>
            </div>
            <div>
                {news.map((item) => (
                    <h1>{item.title}</h1>
                ))}
            </div>
            <div className=" px-[50px] mt-[50px]">
                <AzzaNews news={props.news.data} />
            </div>
            <div className="flex justify-center">
                <Pagination meta={props.news.meta} className="" />
            </div>{" "}
        </div>
    );
}
