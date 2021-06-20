// 根据每个对象的某一个具体属性来进行去重，并指定字段进行计数。


const responseList = [
  { id: 1, value: 1 },
  { id: 2, value: 2 },
  { id: 3, value: 3 },
  { id: 1, value: 4 },
];

const distinct = (arr, key) => { 
  let count = 0;
  let checkArr = [];

  for (let i =0 ;i < arr.length ; i++){
    let currentKey = Object.keys(arr[i])[0];
    console.log(currentKey);
    count +=1;
    if ( checkArr.hasOwnProperty(currentKey)) {
      delete arr[i]
      console.log(checkArr);
    } else { 
      checkArr.push(currentKey);
    }
     
  }
  return { arr, count }
}

const result = distinct(responseList, 'id');

console.log(result); // -> {result: [{ id: 1, a: 1}, {id: 2, a: 2}, {id: 3, a: 3}], times: 4}

const test = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presents: ["@babel/env"],
      plugins: ["@babel/plugin-proposal-class-properties"]
    }
  }
}