import React, { useState, useEffect } from "react";
import styles from "./coba.module.css";
import Axios from "axios";
import Image from "next/image";
// import { Image } from "cloudinary-react";

Axios.defaults.withCredentials = true;

export default function coba() {
  const [image, setImage] = useState("/Batal.svg");
  const [saveImage, setSaveImage] = useState(null);
  const [nip, setNip] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/masuk").then((response) => {
      setNip(response.data.user[0].nip);
      setImage("/Bukti Chat_1663656986073.jpeg");
    });
  }, []);

  const uploadImage = (e) => {
    console.log(e.target.files[0]);
    let uploaded = e.target.files[0];
    // setImage(URL.createObjectURL(uploaded));
    setSaveImage(uploaded);
  };

  const btnSubmit = () => {
    if (!saveImage) {
      alert("Upload Gambar Dulu");
    } else {
      let formData = new FormData();
      formData.append("photo", saveImage);

      fetch("http://localhost:3001/uploadFoto", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status === "success") {
            // window.location.href = data.image;
            setImage(`/${data.image}`);

            // console.log(data.image);

            Axios.post("http://localhost:3001/simpanFotoDB", {
              foto: `/${data.image}`,
              nip: nip,
            });
          }
        });
    }
  };

  return (
    <div>
      <input type="file" onChange={uploadImage} />
      <button onClick={btnSubmit}>Submit</button>
      <Image src={image} height={50} width={50} />
    </div>
  );
}
