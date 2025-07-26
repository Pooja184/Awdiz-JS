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
      // console.log(arr[top][i]);
      spiralArr.push(arr[top][i]);
    }
    top++;
    for (let i = top; i <= bottom; i++) {
      // console.log(arr[i],"b")
      // console.log(arr[i][right]);
      spiralArr.push(arr[i][right]);
    }
    right--;
    // console.log(top <= bottom,"==") false
    //   console.log(right,"r")
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        // console.log(arr[bottom][i], "arr[bottom][i]");
        spiralArr.push(arr[bottom][i]);
      }
      bottom--;
    }
    // console.log(left <= right, "++");
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        // console.log(arr[i][left]);
        spiralArr.push(arr[i][left]);
      }
      left++;
    }
  }
  console.log(spiralArr.join(" "));
};
// twoD_SpiralArr();

const twoD_z_pattern = () => {
  let arr = [
    [1, 2, 3, 10],
    [4, 5, 6, 11],
    [7, 8, 9, 12],
    [13, 14, 15, 16],
  ];
  let left = 0;
  let right = arr[0].length - 1;
  let top = 0;
  let bottom = arr.length - 1;
  let zArr = [];
  for (let i = left; i <= right; i++) {
    // console.log(arr[top][i]);
    zArr.push(arr[top][i]);
  }
  top++;
  for (let i = top; i <= bottom; i++) {
    right--;
    // console.log(right,"r")
    // console.log(arr[i][right])
    zArr.push(arr[i][right]);
  }
  left++;
  for (let i = left; i <= bottom; i++) {
    // console.log(arr[bottom][i])
    zArr.push(arr[bottom][i]);
  }
  console.log(zArr);
};
// twoD_z_pattern();

const twoD_N_pattern=()=>{
  let arr=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ]

  let left=0;
  let right=arr[0].length-1;
  let top=0;
  let bottom=arr.length-1;
  for(let i=bottom;i>=top;i--){
    console.log(arr[i][left]);
  }
  left++
  for(let i=left;i<=bottom;i++){
    console.log(arr[i][i])
  }
  right--
  for(let i=right;i>=top;i--){
    console.log(arr[i][bottom])
  }
}
// twoD_N_pattern()

const twoD_N_values = () => {
  let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

  let n = arr.length;

  for (let  i = n-1;  i >= 0; i--) {
    console.log(arr[i][0])
    
  }
  for(let i=1;i<n-1;i++){
    console.log(arr[i][i])
  }
  for(let i=n-1;i>=0;i--){
    console.log(arr[i][n-1])
  }
};
// twoD_N_values();

const twoD_SpiralArr_Reverse = () => {
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
      // console.log(arr[top][i]);
      spiralArr.push(arr[top][i]);
    }
    top++;
    for (let i = top; i <= bottom; i++) {
      // console.log(arr[i],"b")
      // console.log(arr[i][right]);
      spiralArr.push(arr[i][right]);
    }
    right--;
    // console.log(top <= bottom,"==") false
    //   console.log(right,"r")
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        // console.log(arr[bottom][i], "arr[bottom][i]");
        spiralArr.push(arr[bottom][i]);
      }
      bottom--;
    }
    // console.log(left <= right, "++");
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        // console.log(arr[i][left]);
        spiralArr.push(arr[i][left]);
      }
      left++;
    }
  }
  console.log(spiralArr.reverse().join(" "));
};
// twoD_SpiralArr_Reverse();

const z_pattern=()=>{
      let arr = [
    [1, 2, 3, 10],
    [4, 5, 6, 11],
    [7, 8, 9, 12],
    [13, 14, 15, 16],
  ];

  let n=arr.length-1;

  for(let i=0;i<=n;i++){
    console.log(arr[0][i])
  }

  for(let i=1;i<=n;i++){
    console.log(arr[i][n-i])
  }
  for(let i=1;i<=n;i++){
    console.log(arr[n][i])
  }

}
z_pattern();



