class Calculator {
    constructor(previousOperationTextElement, currentOperationTextElement) {
        this.previousOperationTextElement = previousOperationTextElement
        this.currentOperationTextElement = currentOperationTextElement
        this.clear()
    }

    clear() {
        this.currentOperation = ''
        this.previousOperation = ''
        this.operation = undefined
    }

    delete() {
        if (this.currentOperation === '') return
        this.currentOperation = this.currentOperation.slice(0,-1)
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperation.includes('.')) return
        this.currentOperation = this.currentOperation.toString() + number.toString()
    }

    chooseOperation(operation) {
        if (this.currentOperation === '') return
        this.operation = operation
        this.previousOperation = this.currentOperation.toString() + operation.toString()
        this.currentOperation = ''
    }

    compute() {
        var result
        switch(this.operation) {
            case '+':
                if (this.currentOperation.includes('.') || this.previousOperation.includes('.')){
                    result = parseFloat(this.previousOperation.slice(0,-1)) + parseFloat(this.currentOperation)
                }
                else {
                    result = parseInt(this.previousOperation.slice(0,-1)) + parseInt(this.currentOperation)
                }
                break;
            case '-':

                break;
            case '*':
                
                break;
            case '/':
                
                break;
            default:
                break;
        }
        this.clear()
        this.previousOperation = toString(result)
    }

    updateDisplay() {
        this.currentOperationTextElement.innerText = this.currentOperation
        this.previousOperationTextElement.innerText = this.previousOperation
    }
}


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperationTextElement = document.querySelector('[data-previous-operation]')
const currentOperationTextElement = document.querySelector('[data-current-operation]')

const calculator = new Calculator(previousOperationTextElement, currentOperationTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})

allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})

equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

