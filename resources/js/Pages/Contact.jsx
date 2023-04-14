import React from "react";
import { Head } from "@inertiajs/inertia-react";
import Navbar from "@/Components/homepage/Navbar";
import Contact from "@/Components/homepage/contact";

export default function Contacts(props) {
    return (
        <div className="min-h-screen">
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            <Contact props={props} />
        </div>
    );
}
