import swap from "./swap.js";

export default async function bubbleSort(arr) {
  let barsArr = document.querySelectorAll(".bars");
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // barsArr[j].style.background = "red";
        // barsArr[j+1].style.background = "red";
        await swap(barsArr[j], barsArr[j + 1]);
        const a = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = a;
        barsArr[j].style.background = "lightseagreen";
        barsArr[j + 1].style.background = "lightseagreen";
      }
    }
    barsArr[len - i - 1].style.background = "green";
  }
  barsArr[0].style.background = "green";
  console.log(arr);
}

