<!DOCTYPE html>
<html lang="en">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0"/>

        <title>Analitica visual</title>
        
        <link rel="shortcut icon" type="image/png" href="Resources/public/image/favicon.ico"/>

        <!-- CSS  -->
        <!-- <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">-->
        <link href="Resources/public/css/fonts.css" rel="stylesheet" type="text/css"/>
        <link href="Resources/public/css/icons/icons.css" rel="stylesheet" type="text/css"/>
        <link href="Resources/public/css/materialize.css" type="text/css" rel="stylesheet" media="screen,projection"/>
        <link href="Resources/public/css/style.css" type="text/css" rel="stylesheet" media="screen,projection"/>
        <link href="Resources/public/css/exaudi.css" rel="stylesheet" type="text/css"/>
        <link href="Resources/public/css/icons/MaterialDesign-Webfont-master/css/materialdesignicons.css" rel="stylesheet" type="text/css"/>

        <!--  Scripts-->
        <script src="Resources/public/js/materialize/jquery-2.1.1.min.js" type="text/javascript"></script>
        <script src="Resources/public/js/materialize/materialize.js"></script>
        <script src="Resources/public/js/materialize/init.js"></script>

        <script src="Resources/public/js/menu.js" type="text/javascript"></script>
        
    </head>
    <body>



        <!-- MASTER PAGE CONTROL  -->
        <?php
        include("View/public/main/banner.php");


        if (isset($_GET['page'])) {
            include("View/public/" . $_GET['page'] . ".php");
        } else {
            include("View/public/home.php");
        }

        
        include("View/public/main/helper.php");

        include("View/public/main/footer.php");
        
        
        
        ?>                        
        <!--END MASTER PAGE CONTROL  -->






    </body>
</html>
