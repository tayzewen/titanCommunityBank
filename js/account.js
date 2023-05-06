function showPersonalInfo() {
    window.scrollTo(0, 0);
    let editPersonalInfo = document.getElementById("editPersonalInfo")
    editPersonalInfo.style.display = "block";
}

function showEmailAddresses() {
    window.scrollTo(0, 0);
    let editEmailAddresses = document.getElementById("editEmailAddresses")
    editEmailAddresses.style.display = "block";
}

function showPhoneNumbers() {
    window.scrollTo(0, 0);
    let editPhoneNumbers = document.getElementById("editPhoneNumbers")
    editPhoneNumbers.style.display = "block";
}

function hideDiv() {
    let editFormDivs = document.getElementsByClassName("popup");
    for (let i = 0; i < editFormDivs.length; i++) {
        editFormDivs[i].style.display = "none";
    }
}

function resetPersonalInfo() {
    document.getElementById("personalInfoForm").reset()
}

function resetEmailAddresses() {
    document.getElementById("emailAddressForm").reset()
}

function resetPhoneNumbers() {
    document.getElementById("phoneNumberForm").reset()
}

function editPersonalInfo() {
    const firstNameInput = document.getElementById("fnameInput")
    const firstName = firstNameInput.value
    document.getElementById("firstName").innerHTML = firstName

    const lastNameInput = document.getElementById('lnameInput')
    const lastName = lastNameInput.value
    document.getElementById("lastName").innerHTML = lastName

    const birthdateInput = document.getElementById("birthdateInput")
    const birthdate = birthdateInput.value
    document.getElementById("birthdate").innerHTML = birthdate

    const addressOneInput = document.getElementById('address-line1Input')
    const addressOne = addressOneInput.value
    document.getElementById("address-one").innerHTML = addressOne

    const addressTwoInput = document.getElementById("address-line2Input")
    const addressTwo = addressTwoInput.value
    document.getElementById("address-two").innerHTML = addressTwo

    const cityInput = document.getElementById("cityInput")
    const city = cityInput.value
    document.getElementById("city").innerHTML = city

    const stateInput = document.getElementById("stateInput")
    const state = stateInput.value
    document.getElementById("state").innerHTML = state

    const zipInput = document.getElementById("zipInput")
    const zip = zipInput.value
    document.getElementById("zip").innerHTML = zip

    const personalInfo = {
        firstName: firstName,
        lastName: lastName,
        birthdate: birthdate,
        addressLineOne: addressOne,
        addressLineTwo: addressTwo,
        city: city,
        state: state,
        zip: zip
    };

    let personalInfoJSON = JSON.stringify(personalInfo);

    localStorage.setItem('personalInfo', personalInfoJSON)

    hideDiv();
    return false;
}

function editEmailAddresses() {
    const primaryEmailInput = document.getElementById("primaryEmailInput")
    const primaryEmail = primaryEmailInput.value
    document.getElementById("primaryEmail").innerHTML = primaryEmail

    const secondaryEmailInput = document.getElementById('secondaryEmailInput')
    const secondaryEmail = secondaryEmailInput.value
    document.getElementById("secondaryEmail").innerHTML = secondaryEmail

    const emailAddresses = {
        primaryEmail: primaryEmail,
        secondaryEmail: secondaryEmail
    };

    let emailAddressesJSON = JSON.stringify(emailAddresses);
    localStorage.setItem('emailAddresses', emailAddressesJSON)

    hideDiv();
    return false
}

function editPhoneNumbers() {
    const primaryPhoneInput = document.getElementById("primaryPhoneInput")
    const primaryPhone = primaryPhoneInput.value
    document.getElementById("primaryPhone").innerHTML = primaryPhone

    const mobilePhoneInput = document.getElementById("mobilePhoneInput")
    const mobilePhone = mobilePhoneInput.value
    document.getElementById("mobilePhone").innerHTML = mobilePhone

    const workPhoneInput = document.getElementById("workPhoneInput")
    const workPhone = workPhoneInput.value
    document.getElementById("workPhone").innerHTML = workPhone

    const phoneNumbers = {
        primaryPhone: primaryPhone,
        mobilePhone: mobilePhone,
        workPhone: workPhone
    }

    let phoneNumbersJSON = JSON.stringify(phoneNumbers)
    localStorage.setItem('phoneNumbers', phoneNumbersJSON)

    hideDiv();
    return false
}

function displayFormData() {

    // PERSONAL INFO
    const personalInfoJSON = localStorage.getItem("personalInfo")
    const personalInfo = JSON.parse(personalInfoJSON)

    const firstName = document.getElementById("firstName")
    const lastName = document.getElementById("lastName")
    const birthdate = document.getElementById("birthdate")
    const addressLineOne = document.getElementById("address-one")
    const addressLineTwo = document.getElementById("address-two")
    const city =  document.getElementById("city")
    const state = document.getElementById("state")
    const zip = document.getElementById("zip")

    const newCustomerName = document.getElementById("customer-name")
    if (personalInfo.firstName !== "") {
        newCustomerName.innerHTML = personalInfo.firstName
    } 

    firstName.innerHTML = personalInfo.firstName
    lastName.innerHTML = personalInfo.lastName
    birthdate.innerHTML = personalInfo.birthdate
    addressLineOne.innerHTML = personalInfo.addressLineOne
    addressLineTwo.innerHTML = personalInfo.addressLineTwo
    city.innerHTML = personalInfo.city
    state.innerHTML = personalInfo.state
    zip.innerHTML = personalInfo.zip

    // EMAIL ADDRESSES
    const emailAddressesJSON = localStorage.getItem("emailAddresses")
    const emailAddresses = JSON.parse(emailAddressesJSON)

    const primaryEmail = document.getElementById("primaryEmail")
    const secondaryEmail = document.getElementById("secondaryEmail")

    primaryEmail.innerHTML = emailAddresses.primaryEmail
    secondaryEmail.innerHTML = emailAddresses.secondaryEmail

    // PHONE NUMBERS
    const phoneNumbersJSON = localStorage.getItem("phoneNumbers")
    const phoneNumbers = JSON.parse(phoneNumbersJSON)
    
    const primaryPhone = document.getElementById("primaryPhone")
    const mobilePhone = document.getElementById("mobilePhone")
    const workPhone = document.getElementById("workPhone")

    primaryPhone.innerHTML = phoneNumbers.primaryPhone
    mobilePhone.innerHTML = phoneNumbers.mobilePhone
    workPhone.innerHTML = phoneNumbers.workPhone

}

displayFormData()

function populateForm() {

    // PERSONAL INFO
    const personalInfoJSON = localStorage.getItem("personalInfo")
    const personalInfo = JSON.parse(personalInfoJSON)

    if (personalInfo.firstName !== "") {
        document.getElementById("fnameInput").value = personalInfo.firstName
    }

    if (personalInfo.lastName !== "") {
        document.getElementById("lnameInput").value = personalInfo.lastName
    }

    if (personalInfo.birthdate !== "") {
        document.getElementById("birthdateInput").value = personalInfo.birthdate
    }

    if (personalInfo.addressLineOne !== "") {
        document.getElementById("address-line1Input").value = personalInfo.addressLineOne
    }

    if (personalInfo.addressLineTwo !== "") {
        document.getElementById("address-line2Input").value = personalInfo.addressLineTwo
    }

    if (personalInfo.city !== "") {
        document.getElementById("cityInput").value = personalInfo.city
    }

    if (personalInfo.state !== "") {
        document.getElementById("stateInput").value = personalInfo.state
    }

    if (personalInfo.zip !== "") {
        document.getElementById("zipInput").value = personalInfo.zip
    }

    // EMAIL ADDRESSES
    const emailAddressesJSON = localStorage.getItem("emailAddresses")
    const emailAddresses = JSON.parse(emailAddressesJSON)

    if (emailAddresses.primaryEmail !== "") {
        document.getElementById("primaryEmailInput").value = emailAddresses.primaryEmail
    }

    if (emailAddresses.secondaryEmail !== "") {
        document.getElementById("secondaryEmailInput").value = emailAddresses.secondaryEmail
    }

    // PHONE NUMBERS
    const phoneNumbersJSON = localStorage.getItem("phoneNumbers")
    const phoneNumbers = JSON.parse(phoneNumbersJSON)

    if (phoneNumbers.primaryPhone !== "") {
        document.getElementById("primaryPhoneInput").value = phoneNumbers.primaryPhone
    }

    if (phoneNumbers.mobilePhone !== "") {
        document.getElementById("mobilePhoneInput").value = phoneNumbers.mobilePhone
    }

    if (phoneNumbers.workPhone !== "") {
        document.getElementById("workPhoneInput").value = phoneNumbers.workPhone
    }


}

populateForm()
