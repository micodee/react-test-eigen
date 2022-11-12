import { getValue } from '@testing-library/user-event/dist/utils';
import React from 'react'

//Terdapat dua buah array yaitu array INPUT dan array QUERY, silahkan tentukan 
//berapa kali kata dalam QUERY terdapat pada array INPUT
const input = ['xc', 'dz', 'bbb', 'dz'];
const query = ['bbb', 'ac', 'dz'];
const matched = [];

for (let index = 0; index < query.length; index++) {
   for (let outerIndex = 0; outerIndex < input.length; outerIndex++) {
      if (query[index].includes(input[outerIndex])) {
         matched.push(input[outerIndex]);
      }
   }
}





const Soal3 = () => {
  return (
    <div>
        {matched}
    </div>
  )
}

export default Soal3