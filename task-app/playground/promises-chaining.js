const add = (a, b) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(a + b);
        }, 1000)
    })
}

// add(1, 2).then(result => {
//     console.log(result) // 3
    
//     add(result, 5).then((res2) => { // 3 + 5
//         console.log(res2)

//         add(res2, 2).then(res3 => { // 8 + 2
//             console.log(res3) // 10
//         })
//     })
// }).catch(error => {
//     console.log(error)
// });

add(1, 2).then(sum => {
    console.log(sum) // 3

    return add(sum, 5)
}).then((sum2) => {
    console.log(sum2)

    return add(sum2, 2)
}).then((sum3) => {
    console.log(sum3)
})