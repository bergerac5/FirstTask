function arraySum(array , target) {
    let start= 0;
    let sum = 0;
    
    for (let index = 0; index < array.length; index++) {
        sum += array[index];

        // Check if the current sum exceeds the target
        while (sum > target && start <= index) {
            sum -= array[start];
            start++;
        }

        //Check if the current sum equals the target
        if (sum === target) {
            return true;
        }
    }

    return false
}

const array  = [4, 2, 7, 1, 9, 5];
const target = 17;

console.log(arraySum(array, target)); 