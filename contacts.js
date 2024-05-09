$(document).ready(function() {
    // Initialize EmailJS with your account ID
    emailjs.init("4Ka-C28fB9Wo7uUUS");

    // Add event listener to the submit button
    $("#submitForm").on("click", function (e) {
        e.preventDefault();
        
        // Check if required fields are filled out
        if (isValidForm()) {
            // If validation passes, proceed to send emails
            sendEmail();
        } else {
            Swal.fire({
                title: "Please fill out all required fields.",
                icon: "error",
                confirmButtonColor: "#d46a00"
            });
        }
    });

    // Function to check if required fields are filled out
    function isValidForm() {
        if ($("#name-2").val() === "" ||
            $("#email-2").val() === "" ||
            $("#enquiry-2").val() === "") {
            return false;
        }
        return true;
    }

    // Function to send email
    function sendEmail() {
        const formData = {
            name: $("#name-2").val(),
            email: $("#email-2").val(),
            enquiry: $("#enquiry-2").val()
        };

        // Send email
        emailjs.send('service_66vfecl', 'template_9wwe9hr', formData)
            .then(function(response) {
                console.log('Email sent:', response);
                Swal.fire({
                    title: "Success.",
                    icon: "success",
                    confirmButtonColor: "#d46a00",
                    preConfirm: function() {
                        // Reset form after successful submission if needed
                        $("#name-2").val("");
                        $("#email-2").val("");
                        $("#enquiry-2").val("");
                    }
                });
            }, function(error) {
                console.error('Error sending email:', error);
                Swal.fire({
                    title: "Error",
                    text: "Failed to send email. Please try again later.",
                    icon: "error",
                    confirmButtonColor: "#d46a00"
                });
            });
    }
});
