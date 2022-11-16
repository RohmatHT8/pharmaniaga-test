const countNumberOfTimes = (number) => {
    const numberToString = number.toString()
    let arrNumber = []
    let count = {
        '0':0,
        '1':0,
        '2':0,
        '3':0,
        '4':0,
        '5':0,
        '6':0,
        '7':0,
        '8':0,
        '9':0
    }
    for(let i = 0; i < numberToString.length; i++){
        arrNumber.push(numberToString[i])
    }
    arrNumber.forEach(el => {
        count[el] = (count[el] || 0) + 1;
    })
    for(const number in count){
        console.log(`The ${number} appears ${count[number]}`)
    }
}

countNumberOfTimes(1000212312)