function getUnique(arr){
    
    let uniqueArr = [];
    
    for(let i of arr) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    console.log(uniqueArr);
}

const array = [1, 2, 3, 2, 3, 4, 4, 7, 8, 6, 5, 6];
getUnique(array);