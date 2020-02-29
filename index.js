// Get Profile Id
const name = document.getElementById('nameInput')
const email = document.getElementById('emailInput')
const age = document.getElementById('ageInput')
const submit = document.getElementById('submit')
const showData = document.getElementById('row')

// Submit Event Handler
submit.addEventListener('click', function (e) {
    // Get the all Data from Profile Input
    const nameValue = name.value
    const emailValue = email.value
    const ageValue = age.value

    // All profile data
    const allProfileDate = {
        name: nameValue,
        email: emailValue,
        age: ageValue
    }

    // Local Storage
    setInLocalStorage(allProfileDate)
    // Show profile Function
    const profileDate = showProfile(allProfileDate)
    // Push the profile area inside the row
    if (allProfileDate.name === '' || allProfileDate.email === '' || allProfileDate.age === '') {
        alert('please add your profile data')
    } else {
        showData.innerHTML += profileDate
        // Reset all input field
        name.value = ''
        email.value = ''
        age.value = ''
    }
})

// Show profile Data
function showProfile({name, email, age}) {
    return `
    <div class="col-md-6">
        <div class="card my-2 border-0">
            <div class="card-body shadow border-0">
                <h3>Profile</h3>
                <h5>Name: ${name} </h5>
                <h5>Email: ${email} </h5>
                <h5>Age: ${age} </h5>
            </div>
        </div>
    </div>
    `
}

// Set Data in Local Storage
function setInLocalStorage(inputData) {
    let allData
    if (localStorage.getItem('allData') === null) {
        allData = []
    } else {
        allData = JSON.parse(localStorage.getItem('allData'))
    };

    allData.push(inputData)
    // Set data
    localStorage.setItem('allData', JSON.stringify(allData))
}

// Show profile data from local storage
document.addEventListener('DOMContentLoaded', function () {
    let allData
    if (localStorage.getItem('allData') === null) {
        allData = []
    } else {
        allData = JSON.parse(localStorage.getItem('allData'))
    };

    allData.forEach((data) => {
        if (data.name !== '' && data.email !== '' && data.age !== '') {
            showData.innerHTML += showProfile(data)
        }
    })
})