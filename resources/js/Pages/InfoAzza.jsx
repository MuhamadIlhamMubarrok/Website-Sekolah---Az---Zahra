import React from "react";
import { Head } from "@inertiajs/inertia-react";
import Navbar from "@/Components/homepage/Navbar";
import AzzaNews from "@/Components/homepage/AzzaNews";
import { data } from "autoprefixer";
import Search from "@/Components/homepage/search";
import Pagination from "@/Components/homepage/pagination";

export default function InfoAzza(props) {
    console.log("info", props);
    const urlPath =
        window.location.protocol +
        "//" +
        window.location.host +
        "/storage/news/";
    console.log("info", props);
    return (
        <div className="bg-[#CBEDD5] pb-10 pb-[100px]">
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            <div>
                <h1 className=" text-center mt-[80px] text-black text-4xl font-bold font-plusjktsans">
                    {props.news.title}
                </h1>
                <div className=" flex justify-center mt-[60px]">
                    <img
                        src={urlPath + props.news.foto}
                        alt="Shoes"
                        className="h-[600px] flex justify-center"
                    />
                </div>
                <p className="text-center mt-16 text-black font-thin font-poppins">
                    {props.news.body}
                </p>
            </div>
        </div>
    );
}
