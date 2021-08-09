var chocolates = [
  "green",
  "green",
  "green",
  "silver",
  "blue",
  "crimson",
  "purple",
  "red",
  "crimson",
  "purple",
  "purple",
  "green",
  "pink",
  "blue",
  "red",
  "silver",
  "crimson",
  "purple",
  "silver",
  "silver",
  "red",
  "green",
  "red",
  "silver",
  "pink",
  "crimson",
  "purple",
  "green",
  "red",
  "silver",
  "crimson",
  "pink",
  "silver",
  "blue",
  "pink",
  "crimson",
  "crimson",
  "crimson",
  "red",
  "purple",
  "purple",
  "green",
  "pink",
  "blue",
  "red",
  "crimson",
  "silver",
  "purple",
  "purple",
  "purple",
  "red",
  "purple",
  "red",
  "blue",
  "silver",
  "green",
  "crimson",
  "silver",
  "blue",
  "crimson",
  "purple",
  "green",
  "pink",
  "green",
  "red",
  "silver",
  "crimson",
  "blue",
  "green",
  "red",
  "red",
  "pink",
  "blue",
  "silver",
  "pink",
  "crimson",
  "purple",
  "green",
  "red",
  "blue",
  "red",
  "purple",
  "silver",
  "blue",
  "pink",
  "silver",
  "crimson",
  "silver",
  "blue",
  "purple",
  "purple",
  "green",
  "blue",
  "blue",
  "red",
  "red",
  "silver",
  "purple",
  "silver",
  "crimson",
];

//Progression 1: Add ___ chocolates of ____ color
function addChocolates(chocolates, color, count) {
  //console.log("Color is:" + color + " count is:" + count);
  if (count > 0) {
    for (let i = 0; i < count; i++) {
      chocolates.unshift(color);
    }
  } else {
    return "Number cannot be zero/negative";
  }
}

//Progression 2: Remove ___ chocolates from the top the dispenser
function removeChocolates(chocolates, number) {
  //console.log(number + " " + chocolates);
  let removeArr = [];
  if (number > 0) {
    if (chocolates.length >= number) {
      for (let i = 0; i < number; i++) {
        removeArr.push(chocolates.shift());
      }
    } else {
      return "Insufficient chocolates in the dispenser";
    }
  } else {
    return "Number cannot be zero/negative";
  }
  //console.log("output :" + removeArr);
  return removeArr;
}
//Progression 3: Dispense ___ chocolates
function dispenseChocolates(chocolates, number) {
  //console.log(number, chocolates);
  let outputArr = [];
  if (number > 0) {
    if (chocolates.length >= number) {
      for (let i = 0; i < number; i++) {
        outputArr.push(chocolates.pop());
      }
    } else {
      return "Insufficient chocolates in the dispenser";
    }
  } else {
    return "Number cannot be zero/negative";
  }
  return outputArr;
}
//Progression 4: Dispense ___ chocolates of ____ color
function dispenseChocolatesOfColor(chocolates, number, color) {
  let outputArr = [];
  //   console.log(
  //     "chocolates :" + chocolates + " number :" + number + " color :" + color
  //   );
  if (number > 0) {
    if (chocolates.length >= number) {
      for (let i = 0; i < number; i++) {
        outputArr.push(color);
      }
    } else {
      return "Insufficient chocolates in the dispenser";
    }
  } else {
    return "Number cannot be zero/negative";
  }
  return outputArr;
}
//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
function noOfChocolates(chocolates) {
  //console.log(chocolates);
  let newArr = [];
  chocolates.forEach((e) => (newArr.indexOf(e) == -1 ? newArr.push(e) : ""));

  let number = [];
  for (let i = 0; i < newArr.length; i++) {
    number[i] = chocolates.reduce((inital, chocolate) => {
      return (inital += chocolate == newArr[i] ? 1 : 0);
    }, 0);
  }
  //console.log(number);
  return number;
}
//Progression 6: Sort chocolates based on count in each color. Return array of colors
function sortChocolateBasedOnCount(chocolates) {
  let cho = chocolates.reduce(function (allChocolates, chocolate) {
    //console.log("b :" + b + " a :" + a);
    if (chocolate in allChocolates) {
      //b[a] = b[a] + 1
      allChocolates[chocolate]++;
    } else {
      allChocolates[chocolate] = 1;
    }
    return allChocolates;
  }, {});
  //console.log(cho);
  let Array = chocolates.sort((a, b) => {
    //console.log("a : " + a + " b: " + b);
    if (cho[b] > cho[a]) {
      return 1;
    }
    if (cho[b] < cho[a]) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
  });

  return Array;
}
//Progression 7: Change ___ chocolates of ____ color to ____ color
function changeChocolateColor(chocolates, count, currentColor, finalColor) {
  if (currentColor == finalColor) {
    return "Can't replace the same chocolates";
  } else if (count > 0) {
    for (let i = 0; i < chocolates.length; i++) {
      if (chocolates[i] == currentColor) {
        for (let j = 0; j < count; j++) {
          chocolates[i] = finalColor;
        }
      }
    }
    return chocolates;
  } else {
    return "Number cannot be zero/negative";
  }
}
//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]
function changeChocolateColorAllOfxCount(chocolates, currentColor, finalColor) {
  var output = [];
  console.log(
    "chocalates : " +
      chocolates +
      " currentColor : " +
      currentColor +
      " finalColor : " +
      finalColor
  );
  if (currentColor == finalColor) {
    return "Can't replace the same chocolates";
  } else {
    for (let i = 0; i <= chocolates.length; i++) {
      if (chocolates[i] == currentColor) {
        chocolates[i] = finalColor;
      }
    }
  }
  output = [chocolates.length, chocolates];
  console.log("output : " + output);
  return output;
}
//Challenge 1: Remove one chocolate of ____ color from the top

//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
