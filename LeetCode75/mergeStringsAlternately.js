/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let newArr = [];
    let word1Arr = word1.split("");
    let word2Arr = word2.split("");

    if(word1.length>word2Arr.length){
         for(let i=0; i<word1.length; i++){
        newArr.push(word1Arr[i]);
        if(word2Arr[i]){
            newArr.push(word2Arr[i]);
        }
    }
    }else{
        for(let i=0; i<word2.length; i++){
        if(word1Arr[i]){
            newArr.push(word1Arr[i]);
        }
        newArr.push(word2Arr[i]);
    }
    }
   
    let mergedArr = newArr.join("")


    return mergedArr
};