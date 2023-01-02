import { useState, useEffect, useRef } from "react";
import Axios from "axios";

const AmbilDataRenaksi = () => {
  const [dataRenaksi, setDataRenaksi] = useState([]);

  const shouldLog = useRef(true);
  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;

      Axios.get("http://localhost:3001/kasubidAmbilRenaksiMRD").then(
        (ambilRenaksiMRD) => {
          ambilRenaksiMRD.data.map((renaksi) => {
            setDataRenaksi((nextData) => {
              return [...nextData, renaksi];
            });
            // console.log(renaksi);
          });
        }
      );
    }
  }, []);
  //   let data2 = dataRenaksi;
  return dataRenaksi;
};

export default AmbilDataRenaksi;
