$(document).ready(function() {
    // Initialize EmailJS with your account ID
    emailjs.init("4Ka-C28fB9Wo7uUUS");

    // Add event listener to the button for sending emails
    $("#emailjs").on("click", function (e) {
        e.preventDefault();
        
        // Check if required fields are filled out
        if (isValidForm()) {
            // If validation passes, proceed to send emails
            sendEmails();
        } else {
            Swal.fire({
                title: "Please fill out all required fields.",
                
                icon: "error",
                confirmButtonColor: "#d46a00" // Set the color of the "OK" button
              });
              
              
            // Show alert if required fields are empty
            // alert('Please fill out all required fields.');
        }
    });

    // Function to check if required fields are filled out
    function isValidForm() {
        // Add conditions to check if the required fields are not empty or equal to 0
        if ($("#name").val() === "" ||
            $("#email").val() === "" ||
            $("#date-2a").val() === "" ||
            $("#date-2b").val() === "" ||
            $("#f_num").val() === "" ||
            $("#num").val() === "" ||
            $("#enquiry").val() === "") {
            return false;
        }
        return true;
    }

    // Function to send emails
    function sendEmails() {
        const formData = {
            name: $("#name").val(),
            email: $("#email").val(),
            arrival_date: $("#date-2a").val(),
            departure_date: $("#date-2b").val(),
            flight_number: $("#f_num").val(),
            travelers_number: $("#num").val(),
            enquiry: $("#enquiry").val()
        };

        // Send email to yourself
        emailjs.send('service_66vfecl', 'template_9wwe9hr', formData)
            .then(function(response) {
                console.log('Email sent to yourself:', response);

                // Send email to the customer
                emailjs.send('service_66vfecl', 'template_l3sruvd', formData)
                    .then(function(response) {
                        console.log('Email sent to customer:', response);
                        // Redirect to thank-you.html after successful email sending
                        window.location.href = 'thank-you.html';
                    }, function(error) {
                        console.error('Error sending email to customer:', error);
                        // Show error message in a popup
                        alert('Error sending email to customer: ' + error);
                    });
            }, function(error) {
                console.error('Error sending email to yourself:', error);
                // Show error message in a popup
                alert('Error sending email to yourself: ' + error);
            });
    }
});
