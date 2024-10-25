<?php

$rows = 5;

for ($i = $rows; $i >= 1; $i--) {
    
    for ($j = $rows; $j > $i; $j--) {
        echo "&nbsp;&nbsp;";
    }
    
    for ($k = 1; $k <= (2 * $i - 1); $k++) {
        echo "*";
    }
    
    echo "<br>";
}
?>
