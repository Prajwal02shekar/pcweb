let myForm = document.getElementById('myForm')
console.log(myForm)

myForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value


    console.log(email, password)


    let storedData = localStorage.getItem('formData');
    console.log(storedData)

    if (storedData) {
        let parsedData = JSON.parse(storedData)
        console.log(parsedData)
        if (email == parsedData.email && password == parsedData.password) {
            alert("Login Successfull")
            window.location.href = './homePage.html'
        }
        else {
            alert("Invalid Email or Password")
        }
    }
})