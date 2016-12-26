<?php

    // INCLUDE SASS COMPILER
    require "sass-compiler/scss.inc.php";
    $scss = new scssc();

    $sc_width = $_POST['sc_width'];
    $sc_animation_type = $_POST['sc_animation_type'];
    $sc_direction = $_POST['sc_direction'];
    $sc_overlay = $_POST['sc_overlay'];
    $sc_animation_duration = $_POST['sc_animation_duration']/1000;
    $sc_effect = $_POST['sc_effect'];

    //COMPILE SAS
    $compiled_data = $scss->compile('
        //shift-content config
        $sc-width:'.$sc_width.'px; 
        $sc-animation-type:'.$sc_animation_type.'; //options overlay or shift
        $sc-direction:'.$sc_direction.'; //for overlay right,left,top and bottom     For shift top,left and right
        $sc-overlay:'.$sc_overlay.'; //options yes or no

        //animation effect
        $sc-duration:'.$sc_animation_duration.'s;
        $sc-effect:'.$sc_effect.';
        @import "assets/src/sass/main.scss";

     ');

    //SAVE COMPILED SASS INTO FILE
    $myfile = fopen("assets/dist/css/main.css", "w") or die("Unable to open file!");
    fwrite($myfile, $compiled_data);
    fclose($myfile);
    
    //PRINT RESPONSE
    echo "done";

?>