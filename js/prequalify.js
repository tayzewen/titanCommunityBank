function formValidation() {
    let email = document.getElementById("email");
    let emailConfirm = document.getElementById("emailConfirm");
    let fname = document.getElementById("fname");
    let lname = document.getElementById("lname");
    let city = document.getElementById("city");
    let state = document.getElementById("state");
    let zip = document.getElementById("zip");
    let income = document.getElementById("income");
    let cb = document.getElementById("terms");
    const emailError = "Fields do not match";
    const blankFieldError = "Field required";

    let validationData = [];

    if (email.value === "") {
        addErrorMsg("email", blankFieldError)
        validationData.push(["Email address:", blankFieldError + " &#10060;"]);
    } else {
        removeErrorMsg("email");
        validationData.push(["Email address:", email.value + " &#9989;"])
    }
    
    if (email.value != emailConfirm.value) {
        addErrorMsg("emailConfirm", emailError)
        validationData.push(["Email confirmation:", emailError + " &#10060;"])
    } else if (email.value != "" && emailConfirm.value != "") {
        removeErrorMsg("emailConfirm")
        validationData.push(["Email confirmation", emailConfirm.value + " &#9989;"])
    }
    
    if (fname.value === "") {
        addErrorMsg("fname", blankFieldError)
        validationData.push(["First name:", blankFieldError + " &#10060;"])
    } else {
        removeErrorMsg("fname")
        validationData.push(["First name:", fname.value + " &#9989;"])
    }

    if (lname.value === "") {
        addErrorMsg("lname", blankFieldError)
        validationData.push(["Last name:", blankFieldError + " &#10060;"])
    } else {
        removeErrorMsg("lname")
        validationData.push(["Last name:", lname.value + " &#9989;"])
    }

    if (city.value === "") {
        addErrorMsg("city", blankFieldError)
        validationData.push(["City:", blankFieldError + " &#10060;"])
    } else {
        removeErrorMsg("city")
        validationData.push(["City:", city.value + " &#9989;"])
    }

    if (state.value === "") {
        addErrorMsg("state", blankFieldError)
        validationData.push(["State:", blankFieldError + " &#10060;"])
    } else {
        removeErrorMsg("state")
        validationData.push(["State:", state.value + " &#9989;"])
    }
    
    if (zip.value === "") {
        addErrorMsg("zip", blankFieldError)
        validationData.push(["Zip code:", blankFieldError + " &#10060;"])
    } else {
        removeErrorMsg("zip")
        validationData.push(["Zip code:", zip.value + " &#9989;"])
    }

    if (income.value === "") {
        addErrorMsg("income", blankFieldError)
        validationData.push(["Income:", blankFieldError + " &#10060;"])
    } else {
        removeErrorMsg("income")
        validationData.push(["Income:", income.value + " &#9989;"])
    }

    if (cb.checked) {
        validationData.push(["Terms:", " &#9989;"])
        removeErrorMsg("terms")
    } else {
        addErrorMsg("terms", "You must agree to terms")
        validationData.push(["Terms:", " &#10060;"])
    }
    
    let errors = document.querySelectorAll(".error");
    if (errors.length === 0) {
        incomeValidation();
    }

    let tableBody = document.getElementById("validationTable").getElementsByTagName("tbody")[0];
    tableBody.innerHTML = "";
  
    validationData.forEach(function(data) {
        addTableData(data[0], data[1]);
    });
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

function incomeValidation() {
    let income = document.getElementById("income")
    if (income.value > 45000) {
        alert("Congratulations, Your are prequalified for a loan. A representative will contact you soon")
    } else if (income.value < 45000) {
        alert("We're sorry, you do not qualify for a loan at this time")
    }
}

function addTableData(field, msg) {
    let table = document.getElementById("validationTable");
    let row = table.insertRow();
    let fieldCell = row.insertCell();
    let msgCell = row.insertCell();
    fieldCell.innerHTML = field;
    msgCell.innerHTML = msg;
}

function clear() {
    document.getElementById("loanQualification").reset();
}