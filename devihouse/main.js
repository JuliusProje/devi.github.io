$("#signup").click(function() {
    $("#first").fadeOut("fast", function() {
        $("#second").fadeIn("fast");
    });
});

$("#signin").click(function() {
    $("#second").fadeOut("fast", function() {
        $("#first").fadeIn("fast");
    });
});



$(function() {
    $("form[name='login']").validate({
        rules: {

            email: {
                required: true,
                email: true
            },
            password: {
                required: true,

            }
        },
        messages: {
            email: "S'il vous plaît, mettez une adresse email valide",

            password: {
                required: "Veuillez entrer le mot de passe",

            }

        },
        submitHandler: function(form) {
            form.submit();
        }
    });
});



$(function() {

    $("form[name='registration']").validate({
        rules: {
            firstname: "required",
            lastname: "required",
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 6
            }
        },

        messages: {
            firstname: "Entrez votre prénom s'il vous plait",
            lastname: "Veuillez entrer votre nom de famille",
            password: {
                required: "Veuillez fournir un mot de passe",
                minlength: "Votre mot de passe doit contenir au moins 6 caractères"
            },
            email: "S'il vous plaît, mettez une adresse email valide"
        },

        submitHandler: function(form) {
            form.submit();
        }
    });
});