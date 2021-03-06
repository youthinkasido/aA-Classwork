const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Write this first.
function askIfGreaterThan(el1, el2, callback) {
    reader.question (`Is ${el1}  > ${el2}?`, function(answer) {
        if (answer === 'yes'){
            callback(true);
    
        } else if (answer === 'no'){
            callback(false);

        } else {
            console.log('please enter yes or no');
            askIfGreaterThan(el1, el2, callback)
        }
    })
    // Prompt user to tell us whether el1 > el2; pass true back to the
    // callback if true; else false.
}

// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i < arr.length - 1 ){
      askIfGreaterThan(arr[i], arr[i + 1], function (isGreaterThan){
       if(isGreaterThan){
          [arr[i], arr[i+1]] = [arr[i +1], arr[i]];
          console.log(arr)
          console.log('-----------------')
          madeAnySwaps = true;   
      };
      innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
    }) 
} else {
     outerBubbleSortLoop(madeAnySwaps)
      return
      }
    // if(i == arr.length - 1){
    //     outerBubbleSortLoop(madeAnySwaps);
    //   } else {
    //     askIfGreaterThan(arr[i], arr[i+1])
    // } 

}

    
    
    // Do an "async loop":
    // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
    //    know whether any swap was made.
    // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
    //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
    //    continue the inner loop. You'll want to increment i for the
    //    next call, and possibly switch madeAnySwaps if you did swap.


// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
    function outerBubbleSortLoop(madeAnySwaps) {
        if(madeAnySwaps){
            innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop)
        } else {
            sortCompletionCallback(arr)
        }
        // Begin an inner loop if you made any swaps. Otherwise, call
        // `sortCompletionCallback`.
    }

    // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

// absurdBubbleSort([3, 2, 1], function (arr) {
//     console.log("Sorted array: " + JSON.stringify(arr));
//     reader.close();
// });

// innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop)
// askIfGreaterThan(1, 3, answer => console.log(`${answer}`))
// let abc = [3, 1, 5, 6, 4, 7];
// innerBubbleSortLoop(abc, 0, false, answer => console.log(`In outerloop: ${answer}`))
absurdBubbleSort([3, 2, 1], function(arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});