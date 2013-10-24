u1-1:: FILEmentes NETFONDS,  iMACROS javascript <?php 

ini_set('display_errors', 'On');
error_reporting(E_ALL);


function fwrite_stream($fp, $string) {
    for ($written = 0; $written < strlen($string); $written += $fwrite) {
        $fwrite = fwrite($fp, substr($string, $written));
        if ($fwrite === false) {
            return $written;
        }
    }
    return $written;
}




$htmlText=$_POST['text'];
$symbol=$_POST['papper'];
$date_=$_POST['date'];


//$fppnameNAP = "netfonds/". date("Y_m_d") . "_" . $symbol . ".csv";
$fppnameNAP = "netfonds/". $symbol . "-"  .  $date_  .  ".token";
$fpppNAP = fopen($fppnameNAP, "w");
$uzenet=date("Y_m_d h:i:s A") . "::NETFONDS_LETOLTES_BEFEJEZVE  kiirta a NetfondLetolt() ajax hívás az iutso letöltése utan, mikor a COUNTER=MAX"
$bytes = fwrite_stream($fpppNAP, $uzenet);
fclose($fpppNAP);






echo "TOKEN kiiras vege a NetfondLetolt() -böl" . PHP_EOL;


?>
