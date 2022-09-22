BASE_URL = 'http://numbersapi.com'



const favNumber = axios.get(`${BASE_URL}/7?json`);
favNumber
    .then(data => {
        console.log(data['data'].text);
    });

let numbers = [8, 5, 10];
const multiNumbers = axios.get(`${BASE_URL}/${numbers}?json`);
multiNumbers
    .then(data => {
        for(const num of numbers){
            console.log(data['data'][`${num}`]);
        }
    })

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



