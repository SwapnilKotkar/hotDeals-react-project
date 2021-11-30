const validateInfo = (values) => {
    let errors = {};
  
    if (!values.firstName.trim()) {
      errors.firstName = 'Firstname required';
    }

    if (!values.lastName.trim()) {
        errors.lastName = 'Lastname required';
    }

    // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    //   errors.name = 'Enter a valid name';
    // }
  
    if (!values.email) {
      errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.password1) {
      errors.password1 = 'Password is required';
    } else if (values.password1.length < 6) {
      errors.password1 = 'Password needs to be 6 characters or more';
    }
  
    if (!values.password2) {
      errors.password2 = 'Password is required';
    } else if (values.password1 !== values.password2) {
      errors.password2 = 'Passwords do not match';
    }
    return errors;
  }

  export default validateInfo;
  