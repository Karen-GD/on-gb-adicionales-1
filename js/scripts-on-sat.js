$(document).ready(function(){
    $(".basico-contains").show();
    $(".extremo-contains").hide();
    $("#suscribe-basico").click(function(){
        $(".basico-contains").show();
        $(".extremo-contains").hide();
        $("#suscribe-basico").addClass("suscribe-sat-active");
        $("#suscribe-basico").removeClass("suscribe-sat-inactive");
        $("#suscribe-extremo").removeClass("suscribe-sat-active");
        $("#suscribe-extremo").addClass("suscribe-sat-inactive");
    });
    $("#suscribe-extremo").click(function(){
        $(".extremo-contains").show();
        $(".basico-contains").hide();
        $("#suscribe-extremo").removeClass("suscribe-sat-inactive");
        $("#suscribe-extremo").addClass("suscribe-sat-active");
        $("#suscribe-basico").removeClass("suscribe-sat-active");
        $("#suscribe-basico").addClass("suscribe-sat-inactive");
    });
});