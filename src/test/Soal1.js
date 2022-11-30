import React from "react";

// Terdapat string "NEGIE1", silahkan reverse alphabet nya dengan angka tetap diakhir kata Hasil = "EIGEN1"

//cara 1 replace
const string = "NEGIE1";
const replace = string.replace("NEGIE", "EIGEN");
//cara 2 reverse
const array = string.split("").reverse().join("").slice(1);
const reverse = array + "1";

const Soal1 = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="output">
          <h2>{replace}</h2>
          <h2>{reverse}</h2>
        </div>
        <input type="text" placeholder={string} />
      </div>
    </div>
  );
};

export default Soal1;
