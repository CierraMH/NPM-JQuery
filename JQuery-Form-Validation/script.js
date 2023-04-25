$(document).ready(function() {
    $("#submit").on("click", (event) => {
        $(this).html("button clicked") 
        const name = $("#name");
        const email = $("#email");
        const phone = $("#phone");
        const required = [name, email, phone];
        let message = "";
        for (let index = 0; index < required.length; index++) {
            const element = required[index];
            if (element.val() == "") {
                message = "Please Fill Out Required Fields";
                $("#message").addClass("warning");
                $(`label[for='${element.attr("id")}']`).addClass("warning");
            } else {
                 $(`label[for='${element.attr("id")}']`).removeClass("warning");
            }
        };
        $("#message").html(message);
        if (message === "") {
            $("#message").removeClass("warning");
        }
        if ($(".warning").length === 0) {
            $("#form").remove();
            return $("h2").html("Thanks for your feedback!");
        };
        console.log($("#submit"));
    })

})

