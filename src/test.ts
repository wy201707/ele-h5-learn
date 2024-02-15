
function generateRandomArray(length: number): number[] {
    const randomArray: number[] = [];
    for (let i = 0; i < length; i++) {
        randomArray.push(Math.floor(Math.random() * 100)); // 在 0 到 99 之间生成随机数
    }
    return randomArray;
}

const arrayLength = 10;
const randomArray = generateRandomArray(arrayLength);

console.log("随机数组为：", randomArray);

console.log("遍历输出：");
randomArray.forEach((element, index) => {
    console.log(`索引 ${index} 的元素为：${element}`);
});
