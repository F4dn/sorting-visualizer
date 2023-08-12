import swap from "./swap.js";
const quickSort = async (arr) => {
  const len = arr.length;

  const barArr = document.querySelectorAll(".bars");

  const findPartn = async (low, high) => {
    const pivot = arr[low];
    let i = low,
      j = high;

    while (i <= j) {
      while (i <= high && arr[i] <= pivot) i++;
      while (j >= low && arr[j] > pivot) j--;
      if (i < j) {
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Using destructuring for swapping
        await swap(barArr[i], barArr[j]);
        barArr[i].style.background = "lightseagreen";
        barArr[j].style.background = "lightseagreen";
      }
    }

    [arr[low], arr[j]] = [arr[j], arr[low]]; // Swap pivot into its correct position
    await swap(barArr[j], barArr[low]);
    barArr[low].style.background = "lightseagreen";
    barArr[j].style.background = "green";

    return j;
  };

  const qs = async (low, high) => {
    if (low <= high) {
      const partn = await findPartn(low, high);

      await qs(low, partn - 1);
      await qs(partn + 1, high);
    }
  };

  await qs(0, len - 1);
};

export default quickSort;
