function generateRandomArray(length) {
    var randomArray = [];
    for (var i = 0; i < length; i++) {
        randomArray.push(Math.floor(Math.random() * 100)); // 在 0 到 99 之间生成随机数
    }
    return randomArray;
}
var arrayLength = 10;
var randomArray = generateRandomArray(arrayLength);
console.log("随机数组为：", randomArray);
console.log("遍历输出：");
randomArray.forEach(function (element, index) {
    console.log("\u7D22\u5F15 ".concat(index, " \u7684\u5143\u7D20\u4E3A\uFF1A").concat(element));
});
