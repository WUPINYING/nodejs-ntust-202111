//// 資料型別 #1
// Number  , 數值資料
console.log(123);
console.log(3.1415);

// String , 字串 ,  文字資料
console.log("傑夫老師");
console.log('今天禮拜六～');
console.log(`我是字串～`);  // 數字1 的左邊 

// Boolean , 布林值 , 只有 true / false
console.log(true);
console.log(false);
console.log(123 > 456); // false

// Date , 時間資料
console.log(new Date());
let time = new Date();
console.log(time.getFullYear());

console.log("-".repeat(50));

///////////////////////////////////////////////////////////////////////////

// Array , 陣列資料
let arr1 = [1,2,3,4,5];
let arr2 = ["jeff","leo","keven"];
let arr3 = [3.1415, "Jeff老師" , true , { "message" : "嗨嗨"} ];  // 每一個資料稱為 -> 元素 element

console.log(arr1);
console.log(arr2);
console.log(arr3);

// Object , 物件資料
let obj1 = { "name" : "jeff" , "age" : 18 };
let obj2 = {
  "name2" : "Leo",   //  key-value pair
  "age2"  : 22,      //  pair pair 之間 , 以 ',' 做為分隔
  "other2" : [1,2,3,4,5],
  "message2" : {
    "math_score" : 100,
    "eng_score"  : 95
  }
};
let obj3 = {
  "Phycal_score" : 80,
  "Phycal score" : 80 
};
console.log(obj1);
console.log(obj2);
console.log(obj3);

///////////////////////////////////////////////////////////////////////////

// null
let data1 = null;
console.log(data1);

// undefined
let data2;
console.log(data2);

console.log("-".repeat(50));

///////////////////////////////////////////////////////////////////////////
// Array , 陣列資料
let arr4 = [100,80,95,75,80];

// 取值
let a = arr4[0];   // 取出 100 
let b = arr4[2];   // 取出 95
console.log("a:",a);
console.log("b:",b);

// 修改值
arr4[4] = 1000;   // index=4 修改為 1000
arr4[1] = -20;    // index=1 修改為 -20
console.log(arr4);

// 新增值 -> 使用 .push
arr4.push(27);   // array 內建的 「方法」 (method)
arr4.push(31);
arr4.push(99);
arr4.push(87);
arr4.push(78);

console.log(arr4);

// 取得 array 的長度 (元素個數)
console.log("Array 長度: ",arr4.length);  // array 內建的 「屬性」 (property)

// .map / .filter
let arr5 = [1,2,3,4,5];

let map1 = arr5.map(n => n*2);   // 將每個元素 x2 
let map2 = arr5.map(n => n**3);  // 將每個元素 3 次方

console.log("map1 :",map1);
console.log("map2 :",map2);

let filter1 = arr5.filter(n=>n>3);        // 抓出 n>3 的元素
let filter2 = arr5.filter(n=> n%2 === 0); // 抓出 對2取餘數為0 的元素 (抓出偶數)

console.log("filter1 :",filter1);
console.log("filter2 :",filter2);

// 數字放大 3倍 , 再-1 , 抓出奇數值 
let map3 = arr5.map(n => n*3);
console.log("map3 :",map3);

let map4 = map3.map(n => n-1);
console.log("map4 :",map4);

let filter3 = map4.filter(n => n%2 === 1); // 抓出奇數
console.log("filter3 :",filter3);

// 組合動作 (function chain)
let result1 = arr5.map(n=>n*3) 
                  .map(n=>n-1)
                  .filter(n => n%2 ===1 );

console.log("result1 :",result1);

console.log("-".repeat(50));

///////////////////////////////////////////////////////////////////////////
// Object 物件資料
let obj4 = {
   "name" : "Jeff" ,   // key-value pair , key 要為字串
   "age"  : 18 ,
   message : "嗨嗨" ,
   today   : "禮拜六"
};

console.log(obj4);

// 取值
let name2 = obj4["name"];
let age2  = obj4["age"];
let day = obj4["today"];   // 抓 key 為 "today" 的 value 

let today = "age";         // 宣告 today 為 "age" 字串
let today2 = obj4[today];  // 如同抓 obj4["age"] 的 value 

console.log("name :", name2);
console.log("age :" , age2);
console.log("today :", day);
console.log("today2 :", today2);  // 抓到 obj4["age"] 的 value 

// 修改值
obj4["name"] = "Keven"   // 修改 name 的 value 為 Keven
obj4["age"]  = 30        // 修改 age 的 value 為 30
console.log(obj4);
    
// 新增值
obj4["scores"] = [95,100,77];  // 直接新增 key-value pairs
obj4["movies"] = "Spider Man";
console.log(obj4);

obj4["movies"] = "Avengers !!!";
console.log(obj4);

// Object.keys() / Object.values()
console.log("Object.keys(obj4) :",Object.keys(obj4));
console.log("Object.values(obj4) :",Object.values(obj4));

console.log("-".repeat(50));

////// 小試身手 #1
// a.
let data = {
  name : "Jeff",
  height : 170,
  weight : 65,
  age : 26 ,
  class : "A-",
  interest : ["喝酒","爬山","寫程式"]
};
console.log(data);

// b. 
let message = "嗨嗨 , 我是" + data["name"] + ", 階級為" + data["class"];
console.log(message);

// c. 
data["height"] = 180;
let message2 = "修改 " + data["name"] + " 的身高為 " + data["height"];
console.log(message2);

// d. 
// data["interest"] // 此時該變數為  ["喝酒","爬山","寫程式"] array 資料
data["interest"].push("彈吉他");
console.log(data);
