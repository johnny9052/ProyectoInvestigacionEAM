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
            $("#pestania5").html("<div class='tableauPlaceholder' style='width: 1304px; height: 469px;'><noscript><a href='#'><img alt='Dashboard (genero - ingresos) ' src='https:&#47;&#47;public.tableausoftware.com&#47;static&#47;images&#47;De&#47;DepartamentoIngresos-Edad-ExpansinAnual&#47;Dashboardgenero-ingresos&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz' width='1304' height='469' style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableausoftware.com%2F' /> <param name='site_root' value='' /><param name='name' value='DepartamentoIngresos-Edad-ExpansinAnual&#47;Dashboardgenero-ingresos' /><param name='tabs' value='no' /><param name='toolbar' value='no' /><param name='static_image' value='https:&#47;&#47;public.tableausoftware.com&#47;static&#47;images&#47;De&#47;DepartamentoIngresos-Edad-ExpansinAnual&#47;Dashboardgenero-ingresos&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='showVizHome' value='no' /></object></div><div style='width:1304px;height:22px;padding:0px 10px 0px 0px;color:black;font:normal 8pt verdana,helvetica,arial,sans-serif;'><div style='float:right; padding-right:8px;'><a href='http://www.tableausoftware.com/public/about-tableau-products?ref=https://public.tableausoftware.com/views/DepartamentoIngresos-Edad-ExpansinAnual/Dashboardgenero-ingresos' target='_blank'>Obtener información sobre Tableau</a></div></div>");
            break;
        case 6:
            $("#pestania6").html("<div class='tableauPlaceholder' style='width: 1304px; height: 469px;'><noscript><a href='#'><img alt='Dashboard (genero - ingresos) ' src='https:&#47;&#47;public.tableausoftware.com&#47;static&#47;images&#47;De&#47;DepartamentoIngresos-Edad-ExpansinAnual&#47;Dashboardgenero-ingresos&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz' width='1304' height='469' style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableausoftware.com%2F' /> <param name='site_root' value='' /><param name='name' value='DepartamentoIngresos-Edad-ExpansinAnual&#47;Dashboardgenero-ingresos' /><param name='tabs' value='no' /><param name='toolbar' value='no' /><param name='static_image' value='https:&#47;&#47;public.tableausoftware.com&#47;static&#47;images&#47;De&#47;DepartamentoIngresos-Edad-ExpansinAnual&#47;Dashboardgenero-ingresos&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='showVizHome' value='no' /></object></div><div style='width:1304px;height:22px;padding:0px 10px 0px 0px;color:black;font:normal 8pt verdana,helvetica,arial,sans-serif;'><div style='float:right; padding-right:8px;'><a href='http://www.tableausoftware.com/public/about-tableau-products?ref=https://public.tableausoftware.com/views/DepartamentoIngresos-Edad-ExpansinAnual/Dashboardgenero-ingresos' target='_blank'>Obtener información sobre Tableau</a></div></div>");
            break;
    }
}

function limpiarPestania() {
    $("#pestania2").html("");
    $("#pestania4").html("");
    $("#pestania5").html("");
    $("#pestania6").html("");
}