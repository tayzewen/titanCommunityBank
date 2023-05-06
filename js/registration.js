const blankFieldError = "Field required";
const invalidEntry = "Invalid entry "
const confirmPassError = "Passwords must match";

function validateRegForm () {
    let email = document.getElementById("reg-email")
    let password = document.getElementById("password")
    let confirmPass = document.getElementById("confirmPass")

    let inputElements = document.getElementsByTagName("input")

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    let validationData = [];

    if (!emailPattern.test(email.value)) {
        addErrorMsg("reg-email", invalidEntry)
        validationData.push(["Email address:", invalidEntry + " &#10060;"]);
    } else {
        removeErrorMsg("reg-email")
        validationData.push(["Email address:", email.value + " &#9989;"]);
    }

    if (!passwordPattern.test(password.value)) {
        addErrorMsg("password", invalidEntry)
        validationData.push(["Password:", invalidEntry + " &#10060;"]);
    } else {
        removeErrorMsg("password")
        validationData.push(["Password:", " &#9989;"])
    }

    if (!passwordPattern.test(confirmPass.value)) {
        addErrorMsg("confirmPass", invalidEntry)
        validationData.push(["Confirm Password:", invalidEntry + " &#10060;"]);
    } else if (confirmPass.value !== password.value) {
        addErrorMsg("confirmPass", confirmPassError)
        validationData.push(["Confirm Password:", confirmPassError + " &#10060;"])
    } else {
        removeErrorMsg("confirmPass")
        validationData.push(["Confirm Password:", " &#9989;"])
    }


    let errors = document.querySelectorAll(".error");
    if (errors.length === 0) {
        const user = {
            email: email.value,
            password: password.value
        };

        let userJSON = JSON.stringify(user);

        localStorage.setItem('user', userJSON)

        return true;
    } else {
        let tableBody = document.getElementById("regValidationTbl").getElementsByTagName("tbody")[0];
        tableBody.innerHTML = "";
      
        validationData.forEach(function(data) {
            addTableData(data[0], data[1]);
        });
        return false;
    }
}

function addErrorMsg(id, msg) {
	let formElement = document.getElementById(id);
    let spanId = id + "Error";
    let span = document.getElementById(spanId);
    
    if (span) {
        span.firstChild.value = msg;
    } else {
        let errorSpan = document.createElement("span");
        errorSpan.id = spanId;
        errorSpan.className = "error";
        errorSpan.innerHTML = msg;

        formElement.parentNode.insertBefore(errorSpan, formElement.nextSibling);
    }
}

function removeErrorMsg(id) {
    let errorSpan = document.getElementById(id + "Error")
    if (errorSpan) {
        errorSpan.remove();
    }
}

function addTableData(field, msg) {
    let table = document.getElementById("regValidationTbl");
    let row = table.insertRow();
    let fieldCell = row.insertCell();
    let msgCell = row.insertCell();
    fieldCell.innerHTML = field;
    msgCell.innerHTML = msg;
}

function login() {
    let userJSON = localStorage.getItem('user');
    let user = JSON.parse(userJSON);

    let emailInput = document.getElementById('email-login')
    let passInput = document.getElementById('password-login')

    if (emailInput.value === user.email && passInput.value === user.password) {
        return true;
    } else {
        addErrorMsg("password-login", "Invalid username or password")
        return false;
    }
}

function resetPassword() {
    let email = document.getElementById("email-reset")
    let password = document.getElementById("password-reset")
    let newPassword = document.getElementById("newPassword")

    let userJSON = localStorage.getItem('user');
    let user = JSON.parse(userJSON);

    if (email.value === user.email && password.value === user.password) {
        user.password = newPassword.value;
        removeErrorMsg("password-reset")
        console.log("Success")
        localStorage.setItem('user', JSON.stringify(user))
        return true;
    } else {
        addErrorMsg("password-reset", "Invalid username or password")
        return false;
    }

}