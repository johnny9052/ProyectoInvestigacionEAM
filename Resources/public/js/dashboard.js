$(document).ready(function () {
    $('ul.tabs').tabs();

    $("#pst2").click(function () {
        actualizarDashboard(2);
    });

    $("#pst4").click(function () {
        actualizarDashboard(4);
    });

    $("#pst5").click(function () {
        actualizarDashboard(5);
    });

    $("#pst6").click(function () {
        actualizarDashboard(6);
    });
});




function actualizarDashboard(codeTab) {

    limpiarPestania();

    switch (codeTab) {
        case 2:
            $("#pestania2").html('<iframe width="100%" height="800" src="https://app.powerbi.com/view?r=eyJrIjoiZDVmMGZlOTYtMmI5My00OWNmLTk5MDEtNmRlMGM1NjRkOWY5IiwidCI6IjdmNmFjMTI0LTVhMTYtNDYwMC04ZjlmLThhNDI4YTcxZTI4OSIsImMiOjR9" frameborder="0" allowFullScreen="true"></iframe>');
            break;
        case 4:
            $("#pestania4").html('<iframe width="100%" height="800" src="https://app.powerbi.com/view?r=eyJrIjoiNzY4MGVhMDctNTFkNy00NzYzLTg4NDEtMTMyMWM3OWY4YzBjIiwidCI6IjdmNmFjMTI0LTVhMTYtNDYwMC04ZjlmLThhNDI4YTcxZTI4OSIsImMiOjR9" frameborder="0" allowFullScreen="true"></iframe>');
            break;

        case 5:
            $("#pestania5").html('<iframe width="100%" height="800" src="https://app.powerbi.com/view?r=eyJrIjoiNmFlZjdiZWItMGNhYi00NGQ2LTk4OWEtOGYwNDNhNmZjYmVjIiwidCI6IjdmNmFjMTI0LTVhMTYtNDYwMC04ZjlmLThhNDI4YTcxZTI4OSIsImMiOjR9" frameborder="0" allowFullScreen="true"></iframe>');
            break;
        case 6:
            $("#pestania6").html('<iframe width="100%" height="800" src="https://app.powerbi.com/view?r=eyJrIjoiNzgzOTg0MjItMmU1Mi00MDVhLTk2MzAtZWFmMTAyMjAyNGU3IiwidCI6IjdmNmFjMTI0LTVhMTYtNDYwMC04ZjlmLThhNDI4YTcxZTI4OSIsImMiOjR9" frameborder="0" allowFullScreen="true"></iframe>');
            break;
    }
}

function limpiarPestania() {
    $("#pestania2").html("");
    $("#pestania4").html("");
    $("#pestania5").html("");
    $("#pestania6").html("");
}