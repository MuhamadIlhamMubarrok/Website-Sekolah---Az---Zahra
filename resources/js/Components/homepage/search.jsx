import React, { useState } from "react";
import axios from "axios";
const Search = () => {

    // const [query, setQuery] = useState("");

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     window.location.href = `/search?q=${query}`;
    // };

    const [news, setNews] = useState([]);

    //define method "searchhandler"
    const searchHandler = (e) => {
        //set products to null
        setNews([]);
        axios
            .post(`/search`, {
                q: e.target.value,
            })
            .then((response) => {
                //set response to state
                setNews(response.data.news);
            });
    };

    return (
        <div>
            <h1 className="md:text-[38px] text-[28px] font-plusjktsans font-bold text-black text-center my-[10px]">
                All News About Az-Zahra
            </h1>
            <form className="px-[10px] md:px-[380px]" onSubmit={searchHandler}>
                <label
                    for="default-search"
                    class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                    Search
                </label>
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                            aria-hidden="true"
                            class="w-5 h-5 text-gray-500 dark:text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            ></path>
                        </svg>
                    </div>
                    <input
                        type="search"
                        id="default-search"
                        class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:border-[#439A97] focus:ring-[#439A97] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                        placeholder="Search Mockups, Logos..."
                        onChange={(e) => searchHandler(e)}
                    />
                    <button
                        type="submit"
                        class="text-white absolute right-2.5 bottom-2.5 bg-[#63cecf] hover:bg-[#62B6B7] focus:ring-4 focus:outline-none focus:ring-blue-700 font-medium rounded-lg text-sm px-4 py-2 "
                    >
                        Search
                    </button>
                </div>
            </form>

            <div>
                {news.map((item) => (
                    <h1>{item.title}</h1>
                ))}
            </div>
        </div>
    );
};

export default Search;
