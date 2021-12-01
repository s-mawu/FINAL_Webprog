import React from "react";
import "./styles.css";

const About = () => {
  return (
    <div className="ContainerAbout">
      <h1>Tentang Aplikasi</h1>
      <p>
        Aplikasi ini adalah aplikasi yang menampilkan laporan jumlah kasus
        Covid-19 secara Global, di Indonesia dan di tiap-tiap Provinsi di
        Indonesia.
      </p>
      <p>
        Pada halaman provinsi kita dapat mencari data kasus Covid-19 daerah
        berdasarkan search keyword.
      </p>
      <h1>API yang digunakan</h1>
      <p>~ Global : https://covid19.mathdro.id/api</p>
      <p>~ Indonesia : https://covid19.mathdro.id/api/countries/indonesia</p>
      <p>~ Provinsi : https://indonesia-covid-19.mathdro.id/api/provinsi</p>
      <h1>Owner</h1>
      <p>Raul Schivo William Mawu</p>
      <p>S21910202</p>
      <p>FIK/Sistem Informasi</p>
    </div>
  );
};

export default About;
