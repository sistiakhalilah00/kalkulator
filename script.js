const numbers = document.querySelectorAll(".number");

// menambahkan argument event untuk mengakses angka dari value button
numbers.forEach((number)=>{
    number.addEventListener("click", (event) => {
        console.log(event.target.value);
    });
});

const calculatorScreen = document.querySelector('.calculator-screen');

// memperbarui atribut nilai dari tag input
const updateScreen = (number)=>{
    calculatorScreen.value = number;
}
//updateScreen(event.target.value) sebagai argument saat tombol diklik
numbers.forEach((number)=>{
    number.addEventListener("click",(event)=>{
        updateScreen(event.target.value);
    });
});

//mendefinisikan 3 variable
let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';

//mendefinisikan function inputNumber
const inputNumber = (number)=>{
    //dapat meng-input lebih dari 1 digit angka
    if(currentNumber === '0'){
        currentNumber = number
    }else{
        currentNumber += number
    }
}
numbers.forEach((number)=>{
    //function inputNumber memberikan angka yang di klik ke currentNumber
    number.addEventListener("click", (event)=>{
        inputNumber(event.target.value)
        //merubah argument “updateScreen” menjadi currentNumber
        updateScreen(currentNumber)
    });
});

//mengambil element button menggunakan class operator
const operators = document.querySelectorAll(".operator");
operators.forEach((operator)=>{
    operator.addEventListener("click",(event)=>{
        console.log(event.target.value)
    });
});
//mendefinisi inputOperator
const inputOperator = (operator)=>{
    if(calculationOperator === ''){
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = '0'
}
operators.forEach((operator)=>{
    operator.addEventListener("click", (event)=>{
        inputOperator(event.target.value)
    })
})
const equalSign = document.querySelector('.equal-sign');

equalSign.addEventListener("click", (event)=>{
    console.log("equal button is pressed")
})

const calculate = ()=>{
    let result = ''
    switch(calculationOperator){
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-":
            result = prevNumber - currentNumber
            break
        case "*":
            result = prevNumber * currentNumber
            break
        case "/":
            result = prevNumber / currentNumber
            break
        case "%":
            result = (prevNumber / 100) * currentNumber
            break
        default:
            break
    }
    //perbarui variable currentNumber dengan result
    currentNumber = result
    //nilai dari calculationOperator kosong
    calculationOperator =''
}

equalSign.addEventListener("click", (event)=>{
    //menjalankan function calculate saat = di klik
    calculate()
    //memperbarui layar input
    updateScreen(currentNumber)
})

const clearBtn = document.querySelector('.all-clear');

clearBtn.addEventListener("click", (event)=>{
    console.log("AC button is pressed")
})

const clearAll = ()=>{
    prevNumber = ''
    calculationOperator = ''
    currentNumber='0'
}
clearBtn.addEventListener("click", ()=>{
    clearAll()
    updateScreen(currentNumber)
})

const decimal = document.querySelector('.decimal');

decimal.addEventListener("click", (event)=>{
    console.log(event.target.value)
})
const inputDecimal = (dot)=>{
    if(currentNumber.includes('.')){
        return
    }
    currentNumber += dot
}
decimal.addEventListener("click", (event)=>{
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})
