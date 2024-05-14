document.addEventListener("DOMContentLoaded", function () {
  const convertBtn = document.getElementById("convert-btn");
  const output = document.getElementById("output-paragraph");

  convertBtn.addEventListener("click", function () {
    const numberInput = document.getElementById("number");
    const number = numberInput.value;

    // Checking for empty input
    if (number === "") {
      output.textContent = "Please enter a valid number";
      return;
    }

    const num = parseInt(number, 10);

    // Checking if number is less than 1
    if (num < 1) {
      output.textContent = "Please enter a number greater than or equal to 1";
      return;
    }

    // Checking if number is 4000 or greater
    if (num >= 4000) {
      output.textContent = "Please enter a number less than or equal to 3999";
      return;
    }

    // If all checks pass, convert the number to Roman numeral
    output.textContent = convertToRoman(num);
  });

  function convertToRoman(num) {
    const romanNumerals = [
      ["M", 1000],
      ["CM", 900],
      ["D", 500],
      ["CD", 400],
      ["C", 100],
      ["XC", 90],
      ["L", 50],
      ["XL", 40],
      ["X", 10],
      ["IX", 9],
      ["V", 5],
      ["IV", 4],
      ["I", 1],
    ];
    let roman = "";
    for (let i = 0; i < romanNumerals.length; i++) {
      while (num >= romanNumerals[i][1]) {
        roman += romanNumerals[i][0];
        num -= romanNumerals[i][1];
      }
    }
    return roman;
  }
});
