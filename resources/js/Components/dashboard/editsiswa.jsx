import { Link } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import images from "../../../../public/assets/profile.jpg";

const EditSiswa = ({ data, kelamins, role }) => {
    console.log("data", data, data.nama);
    const urlPath =
        window.location.protocol +
        "//" +
        window.location.host +
        "/storage/datasiswa/";
    console.log("gender", kelamins);
    const [foto, setFoto] = useState("");
    const [nama, setNama] = useState(data.nama);
    const [kelamin, setKelamin] = useState(data.kelamin.id);
    const [jenjang, setJenjang] = useState(data.role_siswa.id);
    const [ttl, setTtl] = useState(data.ttl);
    const [alamat, setAlamat] = useState(data.alamat);
    const [isNotif, setIsNotif] = useState(false);
    const [uploadImg, setUploadImg] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // intinya ketika multipart pakai spoofing seperti (put, patch delete) agar laravel membaca bahwa form tersebut merupakan method post

        const datas = {
            nama,
            kelamin,
            jenjang,
            ttl,
            alamat,
            isNotif,
        };

        if (uploadImg == true) {
            // karena bakal jadi multipart
            const uploadImage = {
                // spoofing buat beberapa method yang tidak disupport seccara native "PUT,PATCH, or DELETE"
                // reference: https://inertiajs.com/file-uploads#multipart-limitations
                _method: "patch",
                foto,
            };
            console.log("oke");
            return Inertia.post("/datasiswa/" + data.id, {
                ...uploadImage,
                ...datas,
            });
        }

        return Inertia.patch("/datasiswa/" + data.id, datas);
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
                            {!foto ? (
                                data.image ? (
                                    <img
                                        src={urlPath + data.image}
                                        alt="foto_utama"
                                        className=" w-[200px] h-[200px] mb-2"
                                    />
                                ) : (
                                    <img
                                        src={images}
                                        alt="foto_utama"
                                        className=" w-[200px] h-[200px] mb-2"
                                    />
                                )
                            ) : (
                                <img
                                    src={URL.createObjectURL(foto)}
                                    alt="foto_utama"
                                    className=" w-[200px] h-[200px] mb-2"
                                />
                            )}
                            <input
                                type="file"
                                className="form-control-file bg-white rounded-md"
                                id="fotoInput"
                                onChange={(e) => {
                                    setUploadImg(true);
                                    setFoto(e.target.files[0]);
                                }}
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
                                defaultValue={nama}
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
                                defaultValue={kelamin}
                                required
                            >
                                <option>Pilih Jenis Kelamin</option>
                                {kelamins.map((gender, u) => (
                                    <option value={gender.id}>
                                        {gender.name}
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
                                defaultValue={jenjang}
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
                                defaultValue={ttl}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="alamatInput">Alamat</label>
                            <textarea
                                className="form-control"
                                id="alamatInput"
                                rows={3}
                                onChange={(e) => setAlamat(e.target.value)}
                                defaultValue={alamat}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className=" font-poppins btn btn-primary"
                            onClick={() => handleSubmit()}
                        >
                            update
                        </button>
                    </form>
                </div>
            </section>
            {/* /.content */}
        </div>
    );
};

export default EditSiswa;
