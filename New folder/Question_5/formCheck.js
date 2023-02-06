function checkForm() {
    let name = document.getElementById('name');
    if (name == "") {
        alert("Name is required");
        return false;
    } else if (name.length > 10) {
        alert("Name should be at most 10 characters long");
        return false;
    }
    if (!checkNameChar(name)) {
        alert("Name must contain alphanumeric character and/or underscore")
    }
    let password = document.getElementById('password');
    if (password.length < 6 || password.length > 10) {
        alert("Password should be 6-10 characters long!");
        return false;
    } else if (!checkPassword(password)) {
        alert("Password should contain at least one Uppercase letter and numeric value!");
        return false;
    }
    return true;
}

function checkNameChar(str) {
    for (let i = 0; i < str.length; i++) {
        var ch = str.charAt(i);
        var cc = str.charCodeAt(i);
        if (!((cc > 64 && cc < 91) || (cc > 95 && cc < 121) || (cc > 47 && cc < 58))) {
            return false;
        }
    }
    return true;
}

function checkPassword(str) {
    var regex = /[A-Z0-9]+/g;
    return regex.test(str);
}