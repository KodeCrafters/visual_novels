<!DOCTYPE html>
<html lang="en">
<head>
    <title>visual novel</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="imgs/page_icon.png" >
    <link href="css/story_style.css" rel="stylesheet" type="text/css">


</head>

<body class="body">
    <?php
    //redirect
    if(!isset($_POST["btn"])){
        header("Location: index.php");
    }
    ?>

    <script type='text/javascript'>var STORY_ID = <?php echo '"'.$_POST["btn"].'"' ?></script>
    <script type="module" src="js/story_script.js"></script>

</body>



</html>












