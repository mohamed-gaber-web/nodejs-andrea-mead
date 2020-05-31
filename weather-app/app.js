//
// async / non-bloking
// request => npm => used to request and response api 
// darksky.net => get api weather
// callback() => function return function
//

setTimeout(() => {
    console.log("tow second waiting...");
    
}, 2000)

// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 0
//         }
//         callback(data);
//     }, 2000)

// }

// geocode("helwan", (data) => {
//     console.log(data)
// })

const add = (a, b, sum) => {
    setTimeout(() => {
        sum(a + b)
    }, 2000)
}


add(1, 4, (sum) => {
    console.log(sum)
})


