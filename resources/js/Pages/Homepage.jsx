import React from "react";
import { Head } from "@inertiajs/inertia-react";
import Navbar from "@/Components/homepage/Navbar";
import Hero from "@/Components/homepage/hero";
import Sambutan from "@/Components/homepage/sambutan";
import Akademik from "@/Components/homepage/akademik";
import Comment from "@/Components/homepage/comment";
import Count from "@/Components/homepage/count";
import Footer from "@/Components/homepage/footer";

export default function Homepage(props) {
    return (
        <div className="bg-[#CBEDD5]">
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            <Hero />
            <Sambutan />
            <Akademik />
            <Comment />
            <Count />
            <Footer />
        </div>
    );
}
