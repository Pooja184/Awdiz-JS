const twoD_SpiralArr = () => {
  let arr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ];

  let left = 0;
  let right = arr[0].length - 1;
  let top = 0;
  let bottom = arr.length - 1;
  let spiralArr = [];
  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      console.log(arr[top][i]);
      spiralArr.push(arr[top][i]);
    }
    top++;
    for (let i = top; i <= bottom; i++) {
      // console.log(arr[i],"b")
      console.log(arr[i][right]);
      spiralArr.push(arr[i][right]);
    }
    right--;
    // console.log(top <= bottom,"==") false
    //   console.log(right,"r")
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        console.log(arr[bottom][i], "arr[bottom][i]");
        spiralArr.push(arr[bottom][i]);
      }
      bottom--;
    }
    console.log(left <= right,"++")
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        console.log(arr[i][left]);
        spiralArr.push(arr[i][left]);
      }
      left++;
    }
  }
  console.log(spiralArr.join(" "));
};
twoD_SpiralArr();
