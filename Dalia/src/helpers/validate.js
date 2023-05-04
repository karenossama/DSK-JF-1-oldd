
// validate login page username 
export async function usernameValidate(values) {
    const errors = usernameVerify({}, values);
    return errors;
}

// Validate Register Form
export async function registerValidation(values){
    const errors = usernameVerify({}, values);
    passwordVerify(errors, values);
    emailVerify(errors, values);
    return errors;
}

// validate username 
function usernameVerify(error = {}, values) {
    const errors = document.getElementById('errors');
    if (!values.username) {
        error.username = errors.innerHTML = "Username is Required";
        errors.style.display = 'block';
    } else if (values.username.includes(' ')) {
        error.username = errors.innerHTML = "Invalid Username!";
        errors.style.display = 'block';
    } else {
        errors.style.display = 'none';
    }
    return error;
}

// validate login page password 
export async function passwordValidate(values) {
    const errors = passwordVerify({}, values);
    return errors;
}

// validate password 
function passwordVerify(error = {}, values) {
    const errors = document.getElementById('errors');
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (!values.password) {
        error.password = errors.innerHTML = 'Invalid password';
        errors.style.display = 'block';
    } else if (values.password.includes(' ')) {
        error.password = errors.innerHTML = "Wrong password!";
        errors.style.display = 'block';
    } else if (values.password.length <= 6) {
        error.password = errors.innerHTML = "Password must be more than 6 characters";
        errors.style.display = 'block';
    } else if (!specialChars.test(values.password)) {
        error.password = errors.innerHTML = "Password must have special characters";
        errors.style.display = 'block';
    } else {
        errors.style.display = 'none';
    }
    return error;
}


// validate reset password

export async function resetPasswordValidation(values) {
    const errors = passwordVerify({}, values);
    const error = document.getElementById('errors');
    if (values.password !== values.confirmPassword) {
        error.exist = error.innerHTML = "Password doesn's match!";
        error.style.display = 'block';
    } else {
        error.style.display = 'none';
    }
    return errors;
}



// Validate email
function emailVerify(error = {}, values) {
    const errors = document.getElementById('errors');
    if (!values.email) {
        error.email = errors.innerHTML = "Email is Required";
        errors.style.display = 'block';
    } else if (values.email.includes(' ')) {
        error.email = errors.innerHTML = "Wrong Email";
        errors.style.display = 'block';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        error.email = errors.innerHTML = "Invalid email address";
        errors.style.display = 'block';
    } else {
        errors.style.display = 'none';
    }
    return error;
}


// validate profile page

export async function profileValidation(values) {
    const errors = emailVerify({}, values);
    return errors;
}