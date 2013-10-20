#!/bin/bash



s_dbg on 

feldolgozasJS ()  {
# eredeti fejlec valtozoba
echo "ragaszt           feldolgozasJS            " $1
elsosor=$(head -n1 $1 );
utsosor=$(tail -n1 $1 );

echo "ragaszt           feldolgozasJS parameter  "$2
echo 'var ticker'$2'="'$2'";'                   > ""$3""$2".js";


echo "var mydata"$2"= [    " $elsosor   >> ""$3""$2".js";
##### fejlesz nélkül         # utolso sor  nélkül
tail -n +2 $1  |   head -n -1           >> ""$3""$2".js";
echo $utsosor    "    ];"                >> ""$3""$2".js";

	
	
}




konyvtar="/media/fujilakare5/XXXhomokozo/highchart_dwn/examples/basic-line.data/OMX_DAX_feldolgozas/"


for mit in DAX OMXSPI
do
sorok_szama=$(wc -l "$konyvtar""$mit"  | cut -d ' ' -f1)
echo "ragaszt          + + + + + + + + + + + + + + + + + + + + + + + + + + +:  " 
echo "ragaszt          + + + + + + + + + + + + + + + + + + + +:  " 
echo "ragaszt          for LOOP"

echo "ragaszt         "$sorok_szama    $mit    $konyvtar$mit

echo "ragaszt          + + + + + + + + tomma.sh  INDULNA"
cgi="tomma.sh"
#########curl http://192.168.0.190:8008/cgi-bin/$cgi

echo "ragaszt          + + + + + + + + tomma.sh  VÉGEEEE"
echo "ragaszt          + + + + + + + +     checkout.sh   INDULNA"

cgi="checkout.sh"
sorok_szama=333
KONYVT="/var/www/omx.utc.ark/"
##################curl http://192.168.0.190:8008/cgi-bin/$cgi\?namex=$sorok_szama\&namey=orvos\&namez=$mit\&KONYVT=\/var\/www\/omx.utc.ark\/  
curl http://127.0.0.1/cgi-bin/$cgi\?namex=$sorok_szama\&namey=orvos\&namez=$mit\&KONYVT=$KONYVT 
# | grep "\[" >> $konyvtar""$mit
echo "ragaszt          + + + + + + + +     checkout.sh  VÉGEEEEEEE"


echo "ragaszt          + + + + + + + +          checkout.sh   feldolgozasJS()   INDULNA"
konyvtarJS="/media/fujilakare5/XXXhomokozo/highchart_dwn/examples/basic-line/"
####################feldolgozasJS $konyvtar$mit  $mit  $konyvtarJS 
echo "ragaszt          + + + + + + + +          checkout.sh   feldolgozasJS()   VEGGEEE"




done
