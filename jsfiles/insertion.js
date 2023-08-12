import swap from "./swap.js";

const insertionSort = async (arr) => {
  let barArr = document.querySelectorAll(".bars");

  const len = arr.length;

  for (let i = 1; i < len; i++) {
    let j = i - 1;

    const temp = arr[i];

    barArr[0].style.background = "green";

    while (j >= 0 && arr[j] >= temp) {
      await swap(barArr[j + 1], barArr[j]);
      barArr[j + 1].style.background = "green";
      barArr[j].style.background = "green";
      const a = arr[j + 1];
      arr[j + 1] = arr[j];
      arr[j] = a;
      j--;
    }
    console.log(arr);
    // barArr[j+1].style.background = "green";
  }
};

export default insertionSort;
