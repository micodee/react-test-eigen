import React, { useState } from "react";

// Terdapat string "NEGIE1", silahkan reverse alphabet nya dengan angka tetap diakhir kata Hasil = "EIGEN1"

//cara 1 replace
const string = "NEGIE1";
const replace = string.replace("NEGIE", "EIGEN");
//cara 2 reverse
const array = string.split("").reverse().join("").slice(1);
const reverse = array + "1";

const Soal1 = () => {
  const [name, setName] = useState(reverse);

  function setChange(obj) {
    setName(obj.target.value);
  }
  return (
    <div className="container">
      <div className="content">
        <div className="output">
          <h2>{replace} - is replace</h2>
          <h2>{name} - is reverse</h2>
        </div>
        <input
          type="text"
          placeholder={string}
          onChange={setChange}
        />
      </div>
    </div>
  );
};

export default Soal1;
