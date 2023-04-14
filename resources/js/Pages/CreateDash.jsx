import { Head } from "@inertiajs/inertia-react";

import Aside from "@/Components/dashboard/aside";
import Content from "@/Components/dashboard/Content";
import Footer from "@/Components/dashboard/footer";
import Navbar from "@/Components/dashboard/Navbar";
import Create from "@/Components/dashboard/create";

export default function CreateDash(props) {
    return (
        <>
            <Head>
                <title>Dashboard | Az-Zahra</title>
                {/* Google Font: Source Sans Pro */}
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback"
                />
                {/* Google Font: Source Sans Pro */}
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback"
                />
                {/* Font Awesome */}
                <link
                    rel="stylesheet"
                    href="../../plugins/fontawesome-free/css/all.min.css"
                />
                {/* Theme style */}
                <link rel="stylesheet" href="../../dist/css/adminlte.min.css" />
                {/* bootstrap */}
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                    integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
                    crossorigin="anonymous"
                ></link>
            </Head>
            <div className="wrapper">
                {/* Navbar */}
                <Navbar />
                {/* /.navbar */}
                {/* Main Sidebar Container */}
                <Aside user={props.auth.user} />
                {/* Content Wrapper. Contains page content */}
                <Create role={props.role} gender={props.kelamin} />
                {/* /.content-wrapper */}
                <Footer />
            </div>
        </>
    );
}
