$(document).ready(function(){
    $(".pospago-contains").show();
    $(".prepago-contains").hide();
    $("#suscribe-pospago").click(function(){
        $(".pospago-contains").show();
        $(".prepago-contains").hide();
        $("#suscribe-pospago").addClass("suscribe-inalam-active");
        $("#suscribe-pospago").removeClass("suscribe-inalam-inactive");
        $("#suscribe-prepago").addClass("suscribe-inalam-inactive");
        $("#suscribe-prepago").removeClass("suscribe-inalam-active");
    });
    $("#suscribe-prepago").click(function(){
        $(".prepago-contains").show();
        $(".pospago-contains").hide();
        $("#suscribe-prepago").removeClass("suscribe-inalam-inactive");
        $("#suscribe-prepago").addClass("suscribe-inalam-active");
        $("#suscribe-pospago").removeClass("suscribe-inalam-active");
        $("#suscribe-pospago").addClass("suscribe-inalam-inactive");
    });
});