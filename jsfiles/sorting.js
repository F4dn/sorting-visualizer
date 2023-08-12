import bubbleSort from "./Algorithms/bubble.js";
import selectionSort from "./Algorithms/selection.js";
import insertionSort from "./Algorithms/insertion.js";
import quickSort from "./Algorithms/quick.js";
import mergeSort from "./Algorithms/merge.js";

// if (typeof window !== 'undefined') {
let arr = [];

let arrSize = document.getElementById("arr_size");
arrSize.addEventListener("input", newBars);

function startOver() {
  arr = [];
  let element = document.querySelectorAll(".bars");
  element.forEach((bar) => {
    bar.remove();
  });
}
function newBars() {
  startOver();

  let no_of_bars = arrSize.value;

  for (let i = 0; i < no_of_bars; i++) {
    arr.push(Math.floor(Math.random() * 100 + 1));
  }
  const numWidth = Math.floor(document.body.clientWidth / (arr.length * 3));
  const barWidth = numWidth + "px";

  let par = document.getElementById("sorting-bars");
  for (let i = 0; i < no_of_bars; i++) {
    const ele = document.createElement("div");
    ele.classList.add("bars");
    ele.style.height = arr[i] * 5 + "px";
    ele.style.width = barWidth;
    par.appendChild(ele);
  }
}
newBars();

let ele = document.getElementById("newSeq");
ele.addEventListener("click", () => {
  startOver();
  newBars();
});

let buttonArr = document.getElementById("bubble");

buttonArr.addEventListener("click", () => {
  bubbleSort(arr);
});

let selectionId = document.getElementById("selection");

selectionId.addEventListener("click", () => {
  selectionSort(arr);
});

let insertionId = document.getElementById("insertion");

insertionId.addEventListener("click", () => {
  insertionSort(arr);
});

let quickId = document.getElementById("quick");

quickId.addEventListener("click", () => {
  quickSort(arr);
});

let mergeId = document.getElementById("merge");

let animationTimeouts = []; // To keep track of animation timeouts

const mergeSortBars = () => {
  // Clear any existing animation timeouts before starting a new merge sort
  animationTimeouts.forEach((timeout) => clearTimeout(timeout));
  animationTimeouts = [];

  const animationArr = mergeSort(arr);
  const barsArr = document.querySelectorAll(".bars");

  let currentIndex = 0;
  const updateSpeed = () =>
    parseInt(document.getElementById("sorting-speed").value);

  const processNextStep = () => {
    if (currentIndex >= animationArr.length) {
      return; // Sorting is complete
    }

    const isColorChange = currentIndex % 3 !== 2;
    if (isColorChange) {
      const [barOneIdx, barTwoIdx] = animationArr[currentIndex];
      const barOneStyle = barsArr[barOneIdx].style;
      const barTwoStyle = barsArr[barTwoIdx].style;
      const color = currentIndex % 3 === 0 ? "red" : "green";
        barOneStyle.backgroundColor = color;
        barTwoStyle.backgroundColor = color;
    } else {
        const [barOneIdx, newHeight] = animationArr[currentIndex];
        const barOneStyle = barsArr[barOneIdx].style;
        barOneStyle.height = `${newHeight * 5}px`;
    }

    currentIndex++;

    // Process the next step with the updated speed
    const timeout = setTimeout(processNextStep, 25 - updateSpeed());
    animationTimeouts.push(timeout);
  };

  processNextStep(); // Start the animation
};


mergeId.addEventListener("click", () => {
  console.log(typeof mergeId.id);
  mergeSortBars();
});

// }
