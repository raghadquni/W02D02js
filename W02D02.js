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
  
  const arr2 = arr.map(function(element ) {
      return Math.pow( 2 , element);
  });
      return arr2;
}; // DONE


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
    const arr2 = arr.reduce(function(element, acc){
        element += acc;
        return element;

    });

    return arr2
}; // DONE


const countNumberOfElements = (arr) => {
    const arr2 = arr.reduce(function(acc ,element, index) {
        acc = ++index;
        return acc;

    });

    return arr2;

}; // DONE


const items  = [{
    item: 'switch',
    purchasePrice: 399},
    {
    item: 'nike',
    purchasePrice: 150
    }]


    // Extra
  
  const sortNumbers = (arr) => {
    let sortednumbers = arr.sort((s, c) => s - c);
    return sortednumbers;
  }; // DONE EXTRA 2


  const sortBackwards = (arr) => {
    let sortednumbers = arr.sort((s, c) => c - s);
    return sortednumbers;
  }; // done extra 3
  










