import React from "react";

export default function TernaryOp() {
  let coba = "hebat";

  return (
    <div>
      {coba == "Mantap" ? (
        <p>Mantap</p>
      ) : coba == "Hebat" ? (
        <p>Hebat</p>
      ) : (
        <p>Else</p>
      )}
    </div>
  );
}
