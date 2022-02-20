$(function() {

    $("#fname_error_message").hide();
    $("#lname_error_message").hide();
    $("#email_error_message").hide();
    $("#password_error_message").hide();
    $("#number_error_message").hide();

    var error_fname = false;
    var error_lname = false;
    var error_email = false;
    var error_password = false;
    var error_number = false;
    
    $("#fnamee").focusout(function(){
       check_fname();
    });
    $("#lnamee").focusout(function(){
      check_lname();
   });
    $("#emaill").focusout(function() {
       check_email();
    });
    $("#passwordd").focusout(function() {
      check_password();
   });
    $("#numberr").focusout(function() {
       check_number();
    });
    
    function check_fname() {
        var pattern = /^[a-zA-Z]{3,20}$/;
        var fname = $("#fnamee").val();
        if (pattern.test(fname) && fname !== '') {
           $("#fname_error_message").html("");
           $("#fnamee").css("border-bottom","1px solid #34F458");
        } else {
           $("#fname_error_message").html("It will check your name to be 3-20 characters long and contain only letters");
           $("#fname_error_message").show();
           $("#fnamee").css("border-bottom","1px solid #F90A0A");
           error_fname = true;
        }
     }

     function check_lname() {
      var pattern = /^[a-zA-Z]{3,20}$/;
      var fname = $("#lnamee").val();
      if (pattern.test(fname) && fname !== '') {
         $("#lname_error_message").html("");
         $("#lnamee").css("border-bottom","1px solid #34F458");
      } else {
         $("#lname_error_message").html("It will check your name to be 3-20 characters long and contain only letters");
         $("#lname_error_message").show();
         $("#lnamee").css("border-bottom","1px solid #F90A0A");
         error_lname = true;
      }
   }


     function check_email() {
        var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var email = $("#emaill").val();
        if (pattern.test(email) && email !== '') {
           $("#email_error_message").html("");
           $("#emaill").css("border-bottom","1px solid #34F458");
        } else {
           $("#email_error_message").html("Invalid Email");
           $("#email_error_message").show();
           $("#emaill").css("border-bottom","1px solid #F90A0A");
           error_email = true;
        }
     }

     
     function check_password() {
      var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
      var fname = $("#passwordd").val();
      if (pattern.test(fname) && fname !== '') {
         $("#password_error_message").html("");
         $("#passwordd").css("border-bottom","1px solid #34F458");
      } else {
         $("#password_error_message").html("Use a combination of Upper case, Lower case, numbers, and special symbols");
         $("#password_error_message").show();
         $("#passwordd").css("border-bottom","1px solid #F90A0A");
         error_password = true;
      }
   }

     function check_number() {
        var pattern = /^(\+?1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}$/;
        var number = $("#numberr").val();
        if (pattern.test(number) && number !== '') {
           $("#number_error_message").html("");
           $("#numberr").css("border-bottom","1px solid #34F458");
        } else {
           $("#number_error_message").html("Invalid Number(Number should be 10 digits)");
           $("#number_error_message").show();
           $("#numberr").css("border-bottom","1px solid #F90A0A");
           error_number = true;
        }
     }



     $("#formValidation").submit(function() {
        error_fname = false;
        error_lname =false
        error_email = false;
        error_password = false;
        error_number = false;

        check_fname();
        check_lname();
        check_email();
        check_number();
        check_password();

        if (error_fname == false && error_lname == false && error_email == false && error_password == false && error_number == false) {
            alert("Registration Successfull");
            return true;
         } else {
            alert("Please Fill the form Correctly");
            return false;
         }

      });
   });
