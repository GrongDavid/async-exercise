BASE_URL = 'http://numbersapi.com'



async function asyncFavNumber(num){
    const favNumber = await axios.get(`${BASE_URL}/${num}?json`);
    console.log(favNumber.data.data.text);
}
asyncFavNumber(7);

// const favNumber = axios.get(`${BASE_URL}/7?json`);
// favNumber
//     .then(data => {
//         console.log(data['data'].text);
//     });

async function asyncMultiNumbers(numbers){
    const multiNumbers = await axios.get(`${BASE_URL}/${numbers}?json`);
    for(let num of numbers){
        console.log(multiNumbers.data.data[`${num}`]);
    }
}

// let numbers = [8, 5, 10];
// const multiNumbers = axios.get(`${BASE_URL}/${numbers}?json`);
// multiNumbers
//     .then(data => {
//         for(let num of numbers){
//             console.log(data['data'][`${num}`]);
//         }
//     })

let promises = [];
let fourNums = [1, 2, 3, 4];

for(let num of fourNums){
    promises.push(
        axios.get(`${BASE_URL}/${num}?json`)
    );
}
console.log(promises)
Promise.all(promises)
    .then(dataArr => {
        dataArr.forEach(item => console.log(item.data.text))
    })
    .catch(err => console.log(err))



