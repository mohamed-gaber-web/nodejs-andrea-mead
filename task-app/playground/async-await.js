// first async and await

// const msg = () => { // undefined

// }

// const msg = async () => { // Promise undefined

// }


const msg = async () => { // return Promise must be use then and catch
    const message1 = await "hello";
    const message2 = await message1 + " Async";
    const message3 = await message2 + " and await ";

    return message3.toUpperCase();
}

msg().then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})