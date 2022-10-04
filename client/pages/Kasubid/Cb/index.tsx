import {
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState, useEffect } from "react";

export default function Cb() {
  const [data, setData] = useState([
    {
      id: 1,
      nama: "Erick",
    },
    {
      id: 2,
      nama: "Geo",
    },
    {
      id: 3,
      nama: "Andre",
    },
    {
      id: 4,
      nama: "Poco",
    },
  ]);

  let arr = [];

  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const handleChange = ({ target }) => {
    if (target.checked === true) {
      arr.push({ value: target.name });
    } else if (target.checked === false) {
      arr.findIndex((item) => {
        if (item.value === target.name) {
          arr = arr.filter((e) => e !== item);
        }
      });
    }
  };

  return (
    <>
      {domLoaded && (
        <div>
          <TableContainer
            style={{ paddingLeft: 50, paddingRight: 40, zIndex: 998 }}
          >
            <Table sx={{ tableLayout: "fixed" }}>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell>ID</TableCell>
                  <TableCell>Nama</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((item) => (
                  <TableRow>
                    <TableCell>
                      <Checkbox onChange={handleChange} name={item.nama} />
                    </TableCell>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.nama}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <button onClick={() => console.log(arr)}>Submit</button>
        </div>
      )}
    </>
  );
}
