import React, { useEffect, useState } from "react";
import styles from "./profilekanan.module.css";
import Image from "next/image";
import ProfileKananKonten from "../ProfileKananKonten";
import Gap from "../Gap";
import Axios from "axios";

Axios.defaults.withCredentials = true;

interface ProfileKananProps {
  nama: string;
  bidang: string;
  subBidang: string;
  jabatan: string;
  noHp: string;
  fotoProfil: string;
}

export default function ProfileKanan(props: ProfileKananProps) {
  const {
    nama,
    bidang,
    subBidang,
    jabatan,
    noHp,
    fotoProfil = "/User5.svg",
  } = props;

  const [image, setImage] = useState("");
  const [saveImage, setSaveImage] = useState(null);
  const [nip, setNip] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/masuk").then((response) => {
      setNip(response.data.user[0].nip);
      setImage(response.data.user[0].foto);
      console.log("Foto: ", response.data.user[0].foto);
    });
  }, []);

  const uploadImage = (e) => {
    console.log(e.target.files[0]);
    let uploaded = e.target.files[0];
    // setImage(URL.createObjectURL(uploaded));
    // setSaveImage(uploaded);

    let formData = new FormData();
    formData.append("photo", uploaded);

    fetch("http://localhost:3001/uploadFoto", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          // window.location.href = data.image;
          setImage(`/${data.image}`);

          console.log(data.image);

          Axios.post("http://localhost:3001/simpanFotoDB", {
            foto: `/${data.image}`,
            nip: nip,
          });
        }
      });

    // if (!saveImage) {
    //   alert("Upload Gambar Dulu");
    // } else {
    // }
  };

  return (
    <div className={styles.container}>
      <div className={styles.profileHeader}>
        {!image ? (
          <Image
            src={"/SidebarProfile.svg"}
            width={150}
            height={150}
            alt="User 2"
            style={{ borderRadius: 150 }}
          />
        ) : (
          <Image
            src={image}
            width={150}
            height={150}
            alt="User 2"
            style={{ borderRadius: 150 }}
          />
        )}

        <div className={styles.imgEditProfile}>
          <input
            type="file"
            style={{ display: "none" }}
            id="firstimg"
            onChange={uploadImage}
          />
          <label for="firstimg">
            <Image
              src="/EditProfile.svg"
              width={35}
              height={35}
              alt="Edit Profile"
            />
          </label>
        </div>
        <p className={styles.nama}>{nama}</p>
        <p className={styles.jabatan}>ASN</p>
        <div className={styles.content}>
          <Gap height={50} width={0} />
          <ProfileKananKonten
            title="Bidang"
            subTitle={bidang}
            icon="/orgBidang.svg"
          />
          <Gap height={45} width={0} />
          <ProfileKananKonten
            title="Sub Bidang"
            subTitle={subBidang}
            icon="/orgSubBidang.svg"
          />
          <Gap height={45} width={0} />
          <ProfileKananKonten
            title="Jabatan"
            subTitle={jabatan}
            icon="/orgJabatan.svg"
          />
          <Gap height={45} width={0} />
          <ProfileKananKonten
            title="Nomor HP"
            subTitle={noHp}
            icon="/orgNoHp.svg"
          />
        </div>
      </div>
    </div>
  );
}
