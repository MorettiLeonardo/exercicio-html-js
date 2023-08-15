const form = document.querySelector('form')
const fieldA = document.getElementById('field-a')
const fieldB = document.getElementById('field-b')

function validaCampos() {
    if (fieldB.value > fieldA.value) {
        return true
    } else {
        return false
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault()

    const successMessage = `SUCESSO! Campo B é maior que o Campo A`
    const errorMessage = `ERRO! Campo B não é maior que o Campo A`
    
    if (validaCampos()) {
        const containerSuccessMessage = document.querySelector('.success-message')
        containerSuccessMessage.innerHTML = successMessage
        containerSuccessMessage.style.display = 'block'

        document.querySelector('.error-message').style.display = 'none'
        
        fieldA.value = ''
        fieldB.value = ''
    } else {
        const containerErrorMessage = document.querySelector('.error-message')
        containerErrorMessage.innerHTML = errorMessage
        containerErrorMessage.style.display = 'block'

        document.querySelector('.success-message').style.display = 'none'
    }
})