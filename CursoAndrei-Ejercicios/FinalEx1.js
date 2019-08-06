// Clean the room function: given an input of
// [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20],
// make a function that organizes these into
// individual array that is ordered.
// For example answer(ArrayFromAbove) should return :
// [[1, 1, 1, 1], [2, 2, 2], 4, 5, 10, [20, 20], 391, 392, 591].

// Bonus: Make it so it organizes strings differently
// from number types.i.e.[1, "2", "3", 2] should return
// [ [1, 2], ["2", "3"]]

let arr = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];
arraySort(arr);
// [[1, 1, 1, 1], [2, 2, 2], 4, 5, 10, [20, 20], 391, 392, 591]

function arraySort(arr) {
    // First sort all elements into numeric order.
    arr.sort(function(a, b) {
        return a - b;
    });

    let counter = 0;
    arr.forEach(function(num, i) {
        /*First statement checks the element one by one
        If elements are equal, it counts how many of similar ones*/
        if (arr[i] === arr[i + 1]) {
            counter++;
        }
        // second statement finds the last element of similar element.
        else if (arr[i] !== arr[i + 1] && arr[i] === arr[i - 1]) {
            /*i-counter is the first index of similar ones
            i is the last index of similar ones
            create a new array between similar elements and put it into first index of similar ones*/
            arr[i - counter] = arr.slice(i - counter, i + 1);
            // counter is 0 and ready count new similar ones
            counter = 0;
        }
    });
    /*nested array have been built but need to delete similar ones from original array
    check the first element of nested array equal to next element and delete it*/
    arr.forEach(function(num, ind) {
        while (arr[ind][0] && arr[ind][0] === arr[ind + 1]) {
            arr.splice(ind + 1, 1);
        }
    });
    return arr;
}