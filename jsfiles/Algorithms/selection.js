import swap from "../swap.js";

const selectionSort = async (arr) => {
  let barsArr = document.querySelectorAll(".bars");

  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    // swap(arr[i] , arr[minIdx]);
    await swap(barsArr[i], barsArr[minIdx]);
    const a = arr[i];
    arr[i] = arr[minIdx];
    arr[minIdx] = a;
    barsArr[i].style.background = "lightseagreen";
    barsArr[minIdx].style.background = "lightseagreen";
    barsArr[i].style.background = "green";
  }
  barsArr[len - 1].style.background = "green";
  console.log(arr);
};

export default selectionSort;
