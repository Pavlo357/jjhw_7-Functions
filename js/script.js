const arrNum = [1, 2, 3, -1, -2, -3, ];

function getArrWithPosNum(arr) {
    const examplArr = [];
    if (arr.length === 0) {
        return "YOU SUCK";
    }
    for (i = 0; i <= arr.length - 1; i++) {
        if (arr[i] >= 0) {
            examplArr.push(arr[i])
        }
    }
    if (examplArr.length === 0) {
        return null;
    } else {
        return examplArr;
    }

}
console.log(getArrWithPosNum(arrNum));