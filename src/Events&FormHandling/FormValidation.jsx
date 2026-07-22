import React, { useState } from 'react'

const FormValidation = () => {


    // store the state
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmpassword: ""
    })

    const [errors, setErrors] = useState({})


    // Regex Patterns
    const nameRegex = /^[A-Za-z]{3,30}$/
    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/
    const phoneRegex = /^[6-9]\d{9}$/
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // handling changes

    const HandleChange = (e) => {

        setFormData({ ...formData, [e.target.name]: e.target.value })

    }

    // Validation Function

    const validate = () => {

        let newErrors = {};

        // name validation

        if (!formData.name.trim()) {
            newErrors.name = "Name is required"
        } else if (!nameRegex.test(formData.name)) {
            newErrors.name = "Name should be contain only should be letters and characters "
        }

        // Email Validation 

        if (!formData.email.trim()) {
            newErrors.email = "email is required"

        } else if (!emailRegex.test(formData.email)) {
          newErrors.email =  "Enter valid email address"
        }


        // phone validation

        if (!formData.phone.trim()) {
            newErrors.phone = "phone is required"

        } else if (!phoneRegex.test(formData.phone)) {
           newErrors.phone =  "Enter valid 10 digit number"
        }

        //  Password Validation 

        if (!formData.password.trim()) {
            newErrors.password = "password is required"

        } else if (!passwordRegex.test(formData.password)) {
          newErrors.password =  "Enter uppercase, lowercase, numbers, special chars, must be 8 "
        }

        if (!formData.confirmpassword.trim()) {
            newErrors.confirmpassword = "Confirm Password is required";
        } else if (formData.password !== formData.confirmpassword) {
            newErrors.confirmpassword = "Passwords do not match";
        }


        setErrors(newErrors)

        return Object.keys(newErrors).length === 0;
    }



    // Handle Submit

    const HandleSubmit = (e) => {

        e.preventDefault();

        if (validate()) {

            alert("Registration Successfull")

            setFormData({
                name: "",
                email: "",
                phone: "",
                password: "",
                confirmpassword: ""
            })

            setErrors({})

        }

    }



    return (
        <div>

            <form onSubmit={HandleSubmit}>


                <input type="text" name='name' value={formData.name} onChange={HandleChange} />

                <p style={{ color: "red" }}> {errors.name}  </p>

                <input type="email" name='email' value={formData.email} onChange={HandleChange} />

                <p style={{ color: "red" }}> {errors.email}  </p>

                {/* <h2> {formData.email} </h2> */}

                <input type="text" name='phone' value={formData.phone} onChange={HandleChange} />

                <p style={{ color: "red" }}> {errors.phone}  </p>

                <input type="password" name='password' value={formData.password} onChange={HandleChange} />
                <p style={{ color: "red" }}> {errors.password}  </p>


                <input type="password" name='confirmpassword' value={formData.confirmpassword} onChange={HandleChange} />

                <p style={{ color: "red" }}> {errors.confirmpassword}  </p>

                <button type="submit">  Submit  </button>


            </form>


        </div>
    )
}

export default FormValidation


// 6 Steps
// Create Form State
// Store the validation errors
// Regular Expressions
// Validate The Form
// Submit the form
// Display Errors
