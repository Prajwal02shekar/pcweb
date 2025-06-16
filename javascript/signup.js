const { jsx } = require("react/jsx-runtime")

let myForm = document.getElementById('myForm')
        console.log(myForm)

        myForm.addEventListener('submit', (e) => {
            e.preventDefault()
            let inputs = document.querySelectorAll('input')
            console.log(inputs)

            let formData = {};

            inputs.forEach((input) => {
                formData[input.name] = input.value;
            })

            console.log(formData)

            localStorage.setItem('formData',JSON.stringify(formData))
            alert("User Registration Successfull")
            window.location.href='./login.html'
        })
