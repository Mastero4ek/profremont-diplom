export const calculator = () => {
    const balkony = document.querySelector('.balkony')

    if (!balkony) return

    const calcBlock = balkony.querySelector('#calc'),
        calcType = balkony.querySelector('#calc-type'),
        calcTypeMaterial = balkony.querySelector('#calc-type-material'),
        calcInput = balkony.querySelector('#calc-input'),
        calcTotal = balkony.querySelector('#calc-total');

    calcInput.addEventListener('input', (e) => e.target.value = e.target.value.replace(/\D+/, ""))

    const calculate = () => {
        let totalValue = 0

        if (calcType.value && calcTypeMaterial.value) {
            totalValue = calcInput.value * calcType.value * calcTypeMaterial.value;
        } else {
            totalValue = 0;
        }

        calcTotal.value = totalValue
    }

    const calcDefault = () => {
        calcType.options[0].selected = true
        calcTypeMaterial.options[0].selected = true
        calcInput.value = ''
        calcTotal.value = ''
    }

    calcDefault()

    calcBlock.addEventListener('input', (e) => {
        if (e.target === calcType || e.target === calcTypeMaterial || e.target === calcInput) calculate()
    })
}