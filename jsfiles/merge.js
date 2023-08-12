const mergeSort = (arr) => {
  const len = arr.length;
  const animationArr = [];

  const mergeSortedArrays = (s, e) => {
    const auxiliaryArray = arr.slice();
    const mid = (s + e) >> 1;

    let i = s,
      j = mid + 1;

    let k = s;

    while (i <= mid && j <= e) {
      animationArr.push([i, j]);
      animationArr.push([i, j]);

      if (auxiliaryArray[i] > auxiliaryArray[j]) {
        animationArr.push([k, auxiliaryArray[j]]);
        arr[k++] = auxiliaryArray[j++];
      } else {
        animationArr.push([k, auxiliaryArray[i]]);
        arr[k++] = auxiliaryArray[i++];
      }
    }

    while (i <= mid) {
      animationArr.push([i, i]);
      animationArr.push([i, i]);
      animationArr.push([k, auxiliaryArray[i]]);
      arr[k++] = auxiliaryArray[i++];
    }
    while (j <= e) {
      animationArr.push([j, j]);
      animationArr.push([j, j]);
      animationArr.push([k, auxiliaryArray[j]]);
      arr[k++] = auxiliaryArray[j++];
    }
  };

  const mergeS = (s, e) => {
    if (s === e) return;

    const mid = (s + e) >> 1;

    mergeS(s, mid);
    mergeS(mid + 1, e);
    mergeSortedArrays(s, e);
  };

  mergeS(0, len - 1);
  console.log(arr);
  return animationArr;
};

export default mergeSort;
