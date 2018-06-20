
<div class="section no-pad-bot" id="index-banner">
    <div class="container">
        <br><br>
        <h1 class="header center textoAzul">¿Cómo iniciar?</h1>
        <div class="row center">
            <h5 class="header col s12 light">Análisis de datos web EAM para la toma de decisiones</h5>
        </div>
        <div class="row center">
            <a href="#modalTutorial" class="grisEAM waves-effect waves-light btn modal-trigger" >Tutorial</a>

            <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>

            <!-- Modal Structure -->
            <div id="modal1" class="modal modal-fixed-footer"><!--La clase modal-fixed-footer es para ajustar el texto cuando es demasiado largo-->
                <div class="modal-content">
                    <h4>Modal Header</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </div>
                <div class="modal-footer">
                    <a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
                </div>
            </div>


        </div>        

    </div>
</div>


<div class="container">
    <div class="section">

        <!--   Icon Section   -->
        <div class="row">
            <div class="col s12 m4">
                <div class="icon-block">
                    <h2 class="center light-blue-text"><i class="material-icons textoAzul">timer</i></h2>
                    <h5 class="center">Análisis rapidos</h5>

                    <p class="light justifyText">
                        Analice y cruce información de manera instantánea, para ver el comportamiento de los datos según sus necesidades.
                    </p>
                </div>
            </div>

            <div class="col s12 m4">
                <div class="icon-block">
                    <h2 class="center light-blue-text"><i class="material-icons textoAzul">group</i></h2>
                    <h5 class="center">Sistema comunitario</h5>

                    <p class="light justifyText">
                        Cualquier persona de la comunidad universitaria puede acceder a los datos para poder analizarlos
                    </p>
                </div>
            </div>

            <div class="col s12 m4">
                <div class="icon-block">
                    <h2 class="center light-blue-text"><i class="material-icons textoAzul">cloud_queue</i></h2>
                    <h5 class="center">Datos en la web</h5>

                    <p class="light justifyText">Acceda a los datos en cualquier momento y desde cualquier dispositivo, siempre que tenga conexion a internet</p>
                </div>
            </div>
        </div>


        <div class="row">
            <div class="col s12 m4">
                <div class="icon-block">
                    <h2 class="center light-blue-text"><i class="material-icons textoAzul">extension</i></h2>
                    <h5 class="center">Descubre conocimiento</h5>

                    <p class="light justifyText">
                        Analiza datos a profundidad aplicando analítica visual para descubrir conocimiento oculto en los datos. 
                    </p>
                </div>
            </div>

            <div class="col s12 m4">
                <div class="icon-block">
                    <h2 class="center light-blue-text"><i class="material-icons textoAzul">poll</i></h2>
                    <h5 class="center">Reportes graficos</h5>

                    <p class="light justifyText">
                        Utiliza los gráficos interactivos e indicadores claves de rendimiento para cruzar información y ver el estado de estos.  
                    </p>
                </div>
            </div>

            <div class="col s12 m4">
                <div class="icon-block">
                    <h2 class="center light-blue-text"><i class="material-icons textoAzul">visibility</i></h2>
                    <h5 class="center">Vigilancia</h5>

                    <p class="light justifyText">
                        Encuentra patrones que ayuden a la toma de decisiones y por ende, el mejoramiento permanente de la Institución Universitaria EAM. 
                    </p>
                </div>
            </div>
        </div>

    </div>
    <br><br>
</div>

<script>
    $(document).ready(function () {
        // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
        $('.modal-trigger').leanModal();


        //Para programarlos
        //$('#modal1').openModal();//ABRIR MODAL
        //  $('#modal1').closeModal();//CERRAR MODAL

        //configuracion completa
        /*
         
         $('.modal-trigger').leanModal({
         dismissible: true, // Modal can be dismissed by clicking outside of the modal
         opacity: .5, // Opacity of modal background
         in_duration: 300, // Transition in duration
         out_duration: 200, // Transition out duration
         ready: function() { alert('Ready'); }, // Callback for Modal open
         complete: function() { alert('Closed'); } // Callback for Modal close
         }
         ); 
         */
    });
</script>




