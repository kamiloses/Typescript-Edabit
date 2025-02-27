//1 How Much is True?

function countTrue(arr: boolean[]): number {


    return arr.filter(Boolean).length
}


//2
//Given a number, n, return a function which adds n to the number passed to it.
function add(n: number) {
    return function (m: number): number {
        return n + m;
        //console.log(add(10)(20));
    };

}

//przyjmuje obiekt
function toArray(obj: { [key: string]: [value: string] }) {

    return null;
}

function arrayOfMultiples(number: number, howMany: number) {
    let array: number[] = new Array(number);
    for (let i = 0; i < howMany; i++) {
        array[i] = (i + 1) * number
    }
    return array;

    console.log(arrayOfMultiples(7, 5)); // ➞ [7, 14, 21, 28, 35]
    console.log(arrayOfMultiples(12, 10)); // ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
    console.log(arrayOfMultiples(17, 6)); // ➞ [17, 34, 51, 68, 85, 102]

}
