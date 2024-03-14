<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="icon" href="imgs/page_icon.png" >
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="css/index_style.css" rel="stylesheet" type="text/css">
    <title>VISUAL NOVELS</title>
</head>
<body class="body">

    <p class="center">──┤choose a story├──</p>

    
    <?php
    $imgsExtension = ".jpeg";
    $storiesNames = ["Luke's story","sara's story"];
    $storiesFolders = ["luke","sara"];

    for ($i = 0; $i < sizeof($storiesNames); $i++){
        echo ('<object class="center" data="imgs/' . $storiesFolders[$i] . '/story_cover'.$imgsExtension.'" type="image/png">');
        echo ('<img class="center default_cover" src="imgs/question_mark'.$imgsExtension.'">');
        echo ('</object>');
        echo('<form action="story.php" method="post">');
        echo('<input class="center" type="submit" value="'.$storiesNames[$i].'" name="btn">');
        echo('</form>');
    }
    ?>

    <script type='text/javascript'>
    let v
        v = document.querySelectorAll(".center")
        for(let i = 0; i < v.length; i++){
            let tmp = v[i];
            //console.log(tmp.tagName);
            if (screen.width >= screen.height) {
                switch(tmp.tagName){
                    case "INPUT" :
                        tmp.classList.add("story_btn")
                        break
                    case "OBJECT" :
                        tmp.classList.add("story_cover")
                        break
                    case "P" :
                        tmp.classList.add("title")
                        break
                }
            } else {
                switch(tmp.tagName){
                    case "INPUT" :
                        tmp.classList.add("story_btn_m")
                        break
                    case "OBJECT" :
                        tmp.classList.add("story_cover_m")
                        break
                    case "P" :
                        tmp.classList.add("title_m")
                        break
                }
            }
        }

        
    </script>

    



    
</body>
</html>