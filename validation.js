function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}


function validateForm() {
    var name = document.advisingForm.name.value;
    var id = document.advisingForm.id.value;
    var email = document.advisingForm.email.value;
    var password = document.advisingForm.password.value;
    var mobile = document.advisingForm.mobile.value;
    var course = document.advisingForm.course.value;
    var enoughcredit = document.advisingForm.enoughcredit.value;
    var credit = document.advisingForm.credit.value;
    var cgpa = document.advisingForm.cgpa.value;
    var contact = document.advisingForm.contact.value;
    var nameErr = idErr = emailErr = passwordErr = mobileErr = courseErr = enoughcreditErr = creditErr = cgpaErr = contactErr = true;
    
    if(name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }
    
    if(id == "") {
        printError("idErr", "Please enter your id");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(id) === false) {
            printError("idErr", "Please enter a valid 10 digit id");
        } else{
            printError("idErr", "");
            idErr = false;
        }
    }

    if(password == "") {
        printError("passwordErr", "Please enter strong password");
    } else {
        printError("passwordErr", "");
        passwordErr = false;
    }
    
    
    if(mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
    } else {
        var regex = /^[1-9]\d{10}$/;
        if(regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 11 digit mobile number");
        } else{
            printError("mobileErr", "");
            mobileErr = false;
        }
    }
    
    if(course == "Courses List") {
        printError("courseErr", "Please Select course");
    } else {
        printError("courseErr", "");
        courseErr = false;
    }
    
    if(enoughcredit == "") {
        printError("enoughcreditErr", "Please select one");
    } else {
        printError("enoughcreditErr", "");
        enoughcreditErr = false;
    }
    
    if(credit == "") {
        printError("creditErr", "Please enter your total completed credit");
    } else {
        printError("creditErr", "");
        creditErr = false;
    }
 
    if(cgpa == "") {
        printError("cgpaErr", "Please enter last semester's cgpa");
    } else {
        printError("cgpaErr", "");
        cgpaErr = false;
    }
    

    if((nameErr || idErr || emailErr || passwordErr || mobileErr || courseErr || enoughcreditErr || creditErr || cgpaErr || contactErr) == true) {
       return false;
    } else {
        var dataPreview = "You've entered the following details: \n" +
                          "Name: " + name + "\n" +
                          "Student ID: " + id + "\n" +
                          "Email Address: " + email + "\n" +
                          "Password: " + password + "\n" +
                          "Contact Number: " + mobile + "\n" +
                          "Course List: " + course + "\n" +
                          "Completed Enough Credit: " + enoughcredit + "\n" +
                          "Total Credit: " + credit + "\n";
                          "Last Semester's CGPA: " + cgpa + "\n";
                          "Additional Contact: " + contact + "\n";
        alert(dataPreview);
    }
};