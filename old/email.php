<?php
header("Content-type: text/plain; charset=UTF-8");
$i=0;
$used=array();
while($i<1){
	$cash = $_GET['cash'.$i];
	if(!$cash) die($i.': No signature.');
	if(in_array($cash, $used)) die($i.': Duplicate signature');
	$used[] = $cash;
	$d = explode(";",$cash);
	$t = $d[0];
	if(abs($t - time()) > 60*60*24){
		die($i.": Your system clock is off. Please resync your clock.");
	}
	$sha1 = sha1($cash);
	if(substr($sha1, 0, 4) != "0000"){
		die($i.": Your hash: ".$sha1." doesn't starts with 0000");
	}
	$i++;
}
print "whs@whs.whs.in.th";