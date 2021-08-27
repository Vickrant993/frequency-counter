// To check the frequency of square numbers in second arrays of first numbers, with time complexity O(n).
function same(arr1, arr2){
    if(arr1.length !== arr2.length) {
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for(let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) +1;
    }

    for(let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) +1;
    }

    console.log(frequencyCounter1)
    console.log(frequencyCounter2)
    for(let key in frequencyCounter1){
        if(!(key ** 2 in  frequencyCounter2)) {
            console.log('here')
            return false;
        }
        if(frequencyCounter2[key**2] !== frequencyCounter1[key]) {
            return false;
        }
    }
    
}

same([1,2,3,2,6], [4,4,9,36,1])
// length same but if square of the number is not present
// same([1,2,3,5,6], [25,4,9,8,1])
