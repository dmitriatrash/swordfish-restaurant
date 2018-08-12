/*
Created by: Dmitri Atrash
Course Name: ICT-4510, Adv Website Design & Mgmt (Summer 2018)
Final Assignment
This script makes use of jQuery, PHP, and the jQuery Validation Plugin to validate the results of the form
and display a message confirming submission to the server via a JSON response.
 */

    //Hide the refresh button
$("#refresh").hide();

(function () {

    //Get form values and validate using JQuery Validation
$('#submit').click(getFormValues);

    $('#contact').validate(
        { //Validation Rules
            rules: {
                firstName: "required",
                lastName: "required",
                emailAddress: {
                    required: true,
                    email: true
                },
                phoneNumber: {
                    required: true,
                    minlength: 10,
                    digits: true
                }
            },
            messages: { //Error Messages
                firstName: "Please enter your First Name",
                lastName: "Please enter your Last Name",
                emailAddress: {
                    required: "Please enter a valid email address"
                },
                phoneNumber: {
                    required: "Please provide a valid phone number",
                    minlength: "Your phone number must be at least 10 digits long"
                }
            },
        submitHandler: function () {
            var values = getFormValues();
            var url = 'http://localhost/scripts/process.php';
            $.post(url, values, function (json) {
                displayMessage(json);
            });
        }
    });

    //Retrieve form values
    function getFormValues () {

        var formValues = {

            firstName: $('#firstName').val(),
            lastName: $('#lastName').val(),
            emailAddress: $('#emailAddress').val(),
            phoneNumber: $('#phoneNumber').val()
        };

        return formValues;
    }

    //Display message
    function displayMessage (json) {

        var display = $('#display');
        var data = '<p>' + json.message + '</p>';

        display.empty().append(data);
        $('form').fadeOut('slow');
        $("#refresh").show();
    }

    //Refresh page on click
    $('#refresh').click(function() {
        location.reload();
    });

})();

