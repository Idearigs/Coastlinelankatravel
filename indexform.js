$(document).ready(function() {
    // Initialize EmailJS with your account ID
    emailjs.init("KOM6zqqW8trM21JVm");

    // Add event listener to the submit button
    $(".btnff").on("click", function (e) {
        e.preventDefault();
        
        // Check if required fields are filled out
        if (isValidForm()) {
            // If validation passes, proceed to send email
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
        // Add conditions to check if the required fields are not empty
        if ($("#name-2").val() === "" ||
            $("#email-2").val() === "" ||
            $("#date-2a").val() === "" ||
            $("#date-2b").val() === "" ||
            $("#f_num").val() === "" ||
            $("#numA").val() === "" ||
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
            arrival_date: $("#date-2a").val(),
            departure_date: $("#date-2b").val(),
            flight_number: $("#f_num").val(),
            travelers_number: $("#numA").val(),
            child_number: $("#numC").val(),
            enquiry: $("#enquiry-2").val()
        };

        // Send email
        emailjs.send("service_abomylq", "template_y9ahw43", formData).then(
          function (response) {
            console.log("Email sent:", response);
            Swal.fire({
              title: "Email sent successfully!",

              icon: "success",
              confirmButtonColor: "#d46a00",
            }).then((result) => {
              // Reset form after successful submission if needed
              if (result.isConfirmed) {
                $("#name-2").val("");
                $("#email-2").val("");
                $("#date-2a").val("");
                $("#date-2b").val("");
                $("#f_num").val("");
                $("#numA").val("");
                $("#enquiry-2").val("");
              }
            });
          },
          function (error) {
            console.error("Error sending email:", error);
            Swal.fire({
              title: "Failed to send email.",

              icon: "error",
              confirmButtonColor: "#d46a00",
            });
          }
        );
    }
});
