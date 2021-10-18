const addOne = (arr) => { 
    const arr2 = [];
    arr.forEach( function (element , index) {
    arr2.push(element + 1)

        });
    return arr2;
}; // DONE

  const addExclamation = (arr) => {
    const arr2 = [];
    arr.forEach( function (element , index) {
        arr2.push(element + "!")
    });
    return arr2;
}; // DONE


const addOneByMap = (arr) => {
    const newArray = arr.map(function(element) {
    return element + 1;
    });
    return newArray
}; // DONE


const addQuestion = (arr) => {
    const newArray = arr.map(function(element) {
        return element + "?";
        });
        return newArray
}; // DONE


const forLoopTwoToThe = (arr) => {
  
  const arr2 = arr.map(function(element, i ) {
      i = 2;
      let powe = Math.pow(element, i);
      return powe
  });
      return arr2;
}; // don't start from arr[0].!!!


const typeNum = (arr) => {
    const arr2 = arr.filter(function(element) {
        if (typeof element === 'number') {
            return element;
        }
    });
    return arr2
}; // DONE


const containsAnd = (arr) => {
    let index = 'and';
    const newArray = arr.filter( function(element){
            return element.includes('and'); 
        });

        return newArray;
}; // DONE


const oddValues = (arr) => {
    const arr0 = arr.filter(function(item){
        return item%2 != 0;

    });

    return arr0;
}; // DONE


const addValues = (arr) => {
    arr.reduce()
};









