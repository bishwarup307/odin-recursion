const merge = (arr1, arr2) => {
    let sortedArray = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            sortedArray.push(arr1[i]);
            i += 1;
        } else {
            sortedArray.push(arr2[j]);
            j += 1;
        }
    }
    if (i === arr1.length) sortedArray = sortedArray.concat(arr2.slice(j));
    else if (j === arr2.length) sortedArray = sortedArray.concat(arr1.slice(i));
    return sortedArray;
};

// console.log(merge(x, y))

const sort = (arr) => {
    if (arr.length === 1 || arr.length === 0) return arr;

    const mid = Math.floor(arr.length / 2);
    return merge(sort(arr.slice(0, mid)), sort(arr.slice(mid)));
};

const x = [105, 79, 100, 110];

console.log(sort(x));
