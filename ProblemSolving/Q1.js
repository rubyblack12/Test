let A1 = prompt("Nhập vào mảng A1");
let arrA1 = A1.split(",").map(function(num) {
    return num;
});
let A2 = prompt("Nhập vào mảng A2");
let arrA2 = A2.split(",").map(function(num) {
    return num;
});

function arr_A3(A1, A2) {
    var A3 = [],
        diff = [];

    for (var i = 0; i < A1.length; i++) {
        A3[A1[i]] = true;
    }

    for (var i = 0; i < A2.length; i++) {
        if (A3[A2[i]]) {
            delete A3[A2[i]];
        } else {
            A3[A2[i]] = true;
        }
    }

    for (var k in A3) {
        diff.push(k);
    }
    console.log(diff);
    return diff;
}

arr_A3(arrA1, arrA2)