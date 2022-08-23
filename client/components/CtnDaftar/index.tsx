import Button from "../Button";
import Gap from "../Gap";
import TxtInputDaftar from "../TxtInputDaftar";
import styles from "./ctndaftar.module.css";
import btnStyles from "../Button/button.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";
import Axios from "axios";

export default function CtnDaftar() {
  const router = useRouter();

  const [namaReg, setNamaReg] = useState("");
  const [sandiReg, setSandiReg] = useState("");
  const [nipReg, setNipReg] = useState("");
  const [activeSubBidang, setActiveSubBidang] = useState(false);

  const btnDaftar = () => {
    Axios.post("http://localhost:3001/api/insert", {
      nama: namaReg,
      sandi: sandiReg,
      nip: nipReg,
    }).then(() => {
      alert("successfull insert");
    });
    router.push("/DaftarSukses");
  };

  const btnMasuk = () => {
    router.push("/");
  };

  const handleChange = () => {};

  return (
    <div className={styles.container}>
      <div className={styles.headerTxt}>
        <p className={styles.txtStyled}>Daftar</p>
        <p className={styles.txtNormal}>Masuk</p>
        <p className={styles.txtNormal}>Sandi</p>
      </div>
      <div className={styles.content}>
        <div className={styles.contentKiri}>
          <TxtInputDaftar
            image="/namaPenggunaUmum.svg"
            title="Nama Pengguna"
            placeholder="Masukkan Nama"
            width={20}
            height={25}
            onChange={(e) => {
              setNamaReg(e.target.value);
            }}
            type="text"
          />
          <Gap width={0} height={35} />
          <TxtInputDaftar
            image="/jabatanUmum.svg"
            width={30}
            height={35}
            title="Jabatan"
            placeholder="Pilih Jabatan"
            onChange={handleChange}
            type="text"
          />
          {/* DROPDOWN JABATAN */}
          <div className={styles.dropdownJabatan}>
            <div className={styles.selectJabatan}>
              <Image src={"/Dropdown_umum.svg"} width={30} height={30} />
            </div>
            <div className={styles.dropdownList}>
              <div className={styles.dropdownList_item}>
                <p>Kepala Badan</p>
              </div>
              <div className={styles.dropdownList_item}>
                <p>Sekertaris</p>
              </div>
              <div className={styles.dropdownList_item}>
                <p>Kepala Sub Bagian</p>
              </div>
              <div className={styles.dropdownList_item}>
                <p>Kepala Bidang</p>
              </div>
              <div className={styles.dropdownList_item}>
                <p>Kepala Sub Bidang</p>
              </div>
              <div className={styles.dropdownList_item}>
                <p>Staff</p>
              </div>
            </div>
          </div>
          <Gap width={0} height={35} />
          <TxtInputDaftar
            image="/Nip.svg"
            width={25}
            height={30}
            title="NIP / NPNP"
            placeholder="Masukkan NIP / NPNP"
            onChange={(e) => {
              setNipReg(e.target.value);
            }}
            type="number"
          />
        </div>
        <Gap width={67} height={0} />
        <div className={styles.contentKanan}>
          <TxtInputDaftar
            image="/bidangUmum.svg"
            width={30}
            height={35}
            title="Bidang"
            placeholder="Pilih Sub Bidang"
            onChange={handleChange}
            type="text"
          />
          {/* DROPDOWN BIDANG */}
          <div className={styles.dropdownBidang}>
            <div className={styles.selectBidang}>
              <Image src={"/Dropdown_umum.svg"} width={30} height={30} />
            </div>
            <div className={styles.wrapperSelectBidang}>
              <div className={styles.dropdownListBidang}>
                <div className={styles.dropdownList_item}>
                  <p>Sekertaris</p>
                </div>
                <div className={styles.dropdownListBidang_item}>
                  <p>Pajak Daerah</p>
                </div>
                <div className={styles.dropdownListBidang_item}>
                  <p>Retribusi & Lain-lain ...</p>
                </div>
                <div className={styles.dropdownListBidang_item}>
                  <div className="div">
                    <p>Perencanaan dan ...</p>
                  </div>
                  //! CONTOH DROPDOWN SUB-BIDANG
                  {/* <div className={styles.dropdownSubBidang}>
                    <div className={styles.dropdownListSubBidang}>
                      <p>Pengelolaan</p>
                    </div>
                    <div className={styles.dropdownListSubBidang}>
                      <p>Pengembangan</p>
                    </div>
                    <div className={styles.dropdownListSubBidang}>
                      <p>Pelaporan</p>
                    </div>
                  </div> */}
                </div>
                <div className={styles.dropdownListBidang_item}>
                  <p>Pengendalian dan ...</p>
                </div>
                <div className={styles.dropdownListBidang_item}>
                  <p>Staff</p>
                </div>
              </div>
            </div>
          </div>
          <Gap width={0} height={35} />
          <TxtInputDaftar
            image="/noHpUmum.svg"
            width={28}
            height={28}
            title="No HP"
            placeholder="Masukkan No HP"
            type="number"
            onChange={handleChange}
          />
          <Gap width={0} height={35} />
          <TxtInputDaftar
            image="/Password.svg"
            width={20}
            height={25}
            title="Password"
            placeholder="Masukkan Kata Sandi"
            type="password"
            onChange={(e) => {
              setSandiReg(e.target.value);
            }}
          />
        </div>
      </div>
      <Gap width={0} height={72} />
      <Button
        className={btnStyles.container}
        title="Daftar"
        onClick={btnDaftar}
      />
      <Gap width={0} height={20} />
      <Button
        className={`${btnStyles.container} ${btnStyles.btnDaftar}`}
        title="Masuk"
        onClick={btnMasuk}
      />
    </div>
  );
}
