<!-- 

// $rand = rand(100,393);
// $guess = $_GET['guess'];
// $submit = $_GET['submit'];
// if(isset ($submit)) {
//     if ($guess<150 || $guess>250){
//         echo "Your guess must be a number between 150 and 250";
//     }
//     else{
//         if($guess!=$rand) {
//             echo "Incorrent answer. The correct answer is $rand";
        

//         }
//         else{
//             echo "That is correct";
//         }
//     }
// }
// else {

//     header("Location:index.php");
//     exit();
// }




<?php
$rand = rand(100,393);

$guess = $_GET['guess'];
$submit = $_GET['submit'];


if ( ! isset($guess) ) { 
    echo("Missing guess parameter");
  } else if ( strlen($guess) < 1 ) {
    echo("Your guess is too short");
  } else if ( ! is_numeric($guess) ) {
    echo("Your guess is not a number");
  } else if ( $guess< 42 ) {
    echo("Your guess is too low");
  } else if ( $guess > 42 ) {
    echo("Your guess is too high");
  } else {
    echo("Congratulations - You are right");
  }
?>
