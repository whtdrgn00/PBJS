function solution(arrayOne, arrayTwo) {
    if (Array.isArray(arrayOne) && Array.isArray(arrayTwo)) {
        
        if (arrayOne.length == 0 && arrayTwo.length == 0) return [];
        
        let result = (Number(arrayOne.join('')) + Number(arrayTwo.join(''))).toLocaleString('en-us', { useGrouping: false });
        
        return result.split('');

    } else throw new Error('parameter is not an Array');
}


console.log(solution([2, 4, 3], [5, 6, 4])); // [8, 0, 7]
console.log(solution([1, 4, 5], [4, 4, 2])); // [5, 8, 7]
console.log(solution([1, 1, 1], [])); // [1, 1, 1]
console.log(solution([], [9, 9, 9])); // [9, 9, 9]
console.log(solution([9, 9, 9], [9, 9, 9])); // [1, 9, 9, 8]
console.log(solution([], [])); // []
console.log(solution([], [0])); // [0]
console.log(solution([0], [0])); // [0]
console.log(solution([1, 1, 1, 1, 1, 1, 1, 1], [1, 0])); // [1, 1, 1, 1, 1, 1, 2, 1]
console.log(solution([9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9], [1]));
// // [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]