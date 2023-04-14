import React from "react";
import { Head } from "@inertiajs/inertia-react";
import Navbar from "@/Components/homepage/Navbar";
import Register from "@/Components/homepage/register";

export default function Homepage(props) {
    return (
        <div className="min-h-screen bg-[#CBEDD5]">
            <Head title={props.title} />
            <Navbar />
            <Register />
        </div>
    );
}
