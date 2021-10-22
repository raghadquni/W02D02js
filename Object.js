const checkValue = (obj, value) => {
    return Object.values(obj).includes(value);

} // DONE


const courseInfo = {
    name: "Code 301",
    duration: { dayTrack: "4 weeks", eveningTrack: "8 weeks" },
    topics: [
      "SMACSS",
      "APIs",
      "NodeJS",
      "SQL",
      "jQuery",
      "functional programming",
    ],
    finalExam: true,
  };
  
  const getCourseKeys = (obj) => {
    for(key in obj) {
        console.log(key);
    }
  }; // DONE


  {
    GraceHopper: '222-303-5938',
    AdaLovelace: '222-349-9842',
    AlanTuring: '222-853-5933'
  }
  
  //HR has asked you to change the data to make it easier to print so that it looks like this: 
  
  [
    'Grace Hopper: 222-303-5938','Ada Lovelace: 222-349-9842','Alan Turing: 222-853-5933'
  ]
  
  
  const updateNumbers = (obj) => {
    // Solution code here...
  };



  