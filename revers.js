function reverseword (word) {
    const arr = word.split('');
    reversedarray=[];

    for (let x of arr){
        reversedarray.unshift(x)
    }
    return reversedarray .join('')
}
console.log(reverseword('Mohamed'))