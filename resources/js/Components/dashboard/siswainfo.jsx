import { Link } from "@inertiajs/inertia-react";
import { BiNews } from "react-icons/bi";

const SiswaInfo = ({ props }) => {
    console.log(props);
    const urlPath =
        window.location.protocol +
        "//" +
        window.location.host +
        "/storage/datasiswa/";
    return (
        <div className="content-wrapper relative">
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <BiNews className="nav-icon inline-block text-xl mt-[-13px]" />
                            <h1 className="inline ml-2">Informasi Siswa</h1>
                        </div>

                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item">
                                    <Link href={route("home")}>Home</Link>
                                </li>
                                <li className="breadcrumb-item active">
                                    Informasi Siswa
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
            <div>
                <section className="flex justify-stars mb-5 ml-4">
                    <img
                        className="w-[300px]"
                        src={urlPath + props.data.image}
                        alt=""
                    />
                </section>
                <section className="flex mt-4 justify-start">
                    <div className="pl-4">
                        <h4>Nama</h4>
                        <h4>Jenjang Sekolah</h4>
                        <h4>Jenis Kelamin</h4>
                        <h4>Tempat, Tanggal Lahir</h4>
                        <h4>Alamat</h4>
                    </div>
                    <div className="ml-5">
                        <h4>:</h4>
                        <h4>:</h4>
                        <h4>:</h4>
                        <h4>:</h4>
                        <h4>:</h4>
                    </div>
                    <div className="ml-5">
                        <h4>{props.data.nama}</h4>
                        <h4>{props.data.role_siswa.name}</h4>
                        <h4>{props.data.kelamin.name}</h4>
                        <h4>{props.data.ttl}</h4>
                        <h4>{props.data.alamat}</h4>
                    </div>
                </section>
            </div>
            <Link
                as="button"
                href={route("dashboard")}
                className="mt-4 mb-8 ml-4 inline-flex items-center px-4 py-2 mr-3 text-sm font-medium text-white bg-gray-500 border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
                Back to Data Siswa
            </Link>
        </div>
    );
};

export default SiswaInfo;
