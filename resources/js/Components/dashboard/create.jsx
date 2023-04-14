import { Link } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import image from "../../../../public/assets/profile.jpg";

const Create = ({ role, gender }) => {
    console.log("role", role);
    console.log("gender", gender);
    const [foto, setFoto] = useState("");
    const [nama, setNama] = useState("");
    const [kelamin, setKelamin] = useState("");
    const [jenjang, setJenjang] = useState("");
    const [ttl, setTtl] = useState("");
    const [alamat, setAlamat] = useState("");
    const [isNotif, setIsNotif] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            foto,
            nama,
            kelamin,
            jenjang,
            ttl,
            alamat,
            isNotif,
        };

        Inertia.post("/dashboard/create", data);
        setFoto("");
        setNama("");
        setKelamin("");
        setJenjang("");
        setTtl("");
        setAlamat("");
        setIsNotif(true);
    };
    return (
        <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Tambah Data siswa</h1>
                        </div>

                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item">
                                    <Link href={route("home")}>Home</Link>
                                </li>
                                <li className="breadcrumb-item active">
                                    Data Siswa
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
                {/* /.container-fluid */}
            </section>
            {isNotif && (
                <div className="alert alert-success shadow-lg w-[300px] md:w-[700px] mb-4 px-[20px] ml-3">
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="stroke-current flex-shrink-0 h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <span className=" font-plusjktsans">
                            Siswa Berhasil Ditambah
                        </span>
                    </div>
                </div>
            )}
            {/* Main content */}
            <section className="content">
                <div className=" p-3 md:w-[1000px] rounded-md">
                    <form
                        autoComplete="off"
                        className="p-[20px]"
                        onSubmit={(e) => handleSubmit(e)}
                    >
                        <div className="form-group">
                            <label htmlFor="fotoInput">Foto</label>
                            {/* {!img ? <img className=" preview w-6 h-6" src={img} /> : <img />} */}
                            {foto ? (
                                <img
                                    src={URL.createObjectURL(foto)}
                                    alt="foto_utama"
                                    className=" w-[200px] h-[200px] mb-2"
                                />
                            ) : (
                                <img
                                    src={image}
                                    alt="azzanews"
                                    className=" w-[200px] h-[200px] mb-2"
                                />
                            )}
                            <input
                                type="file"
                                className="form-control-file bg-white rounded-md"
                                id="fotoInput"
                                onChange={(e) => setFoto(e.target.files[0])}
                                required
                                autoFocus
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="namaInput">Nama</label>
                            <input
                                type="text"
                                className="form-control"
                                id="namaInput"
                                placeholder="Masukkan nama"
                                onChange={(e) => setNama(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="jenisKelaminInput">
                                Jenis Kelamin
                            </label>
                            <select
                                className="form-control"
                                id="jenisKelaminInput"
                                onChange={(e) => setKelamin(e.target.value)}
                                required
                            >
                                <option>Pilih Jenis Kelamin</option>
                                {gender.map((kelamins, u) => (
                                    <option value={kelamins.id}>
                                        {kelamins.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="jenjangSekolahInput">
                                Jenjang Sekolah
                            </label>
                            <select
                                className="form-control"
                                id="jenjangSekolahInput"
                                onChange={(e) => setJenjang(e.target.value)}
                                required
                            >
                                <option>Pilih Jenjang</option>
                                {role.map((roles, i) => (
                                    <option value={roles.id}>
                                        {roles.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="tempatTanggalLahirInput">
                                Tempat Tanggal Lahir
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="tempatTanggalLahirInput"
                                placeholder="Masukkan tempat tanggal lahir"
                                onChange={(e) => setTtl(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="alamatInput">Alamat</label>
                            <textarea
                                className="form-control"
                                id="alamatInput"
                                rows={3}
                                defaultValue={""}
                                onChange={(e) => setAlamat(e.target.value)}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className=" font-poppins btn btn-primary"
                            onClick={() => handleSubmit()}
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </section>
            {/* /.content */}
        </div>
    );
};

export default Create;
