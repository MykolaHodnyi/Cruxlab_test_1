"use strict";

//Читання з файлу
document.querySelector('button').addEventListener('click', () => {
   const file = document.querySelector('#file').files[0];

   if (!file) {
      console.log("Please select a file.");
      return;
   }

   const reader = new FileReader();
   reader.readAsText(file);
   reader.onload = () => console.log(counterOfValidPasswords(reader.result));
   reader.onerror = () => console.log(reader.error);
})

function counterOfValidPasswords(str) {
   let validPasswordsCounter = 0;
   
   const lines = str.trim().split('\n');

   lines.forEach(line => {
      const [_, char, min, max, password] = line.match(/(\S) (\d+)-(\d+): (.+)/);
      const charCount = [...password].filter(c => c === char).length;

      if (charCount >= min && charCount <= max) {
         validPasswordsCounter++;
      }
   })

   return `Number of valid passwords in the file: ${validPasswordsCounter}`;
}