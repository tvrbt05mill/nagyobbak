#!/bin/bash


#ragasztINA.sh  VER:: 2.0.2  MOD:: netfond letolt

#NETFONDS				       # netfonds   letöltése

#feldolgozasIFEK       # + + + + + + +     feldolgozasIFEK     + + + + + #
				       #
				       
				       
##  "_UTC"  file véget átadjuk a ARGY paraméternek már itt


s_dbg on 


#+ + + + + + + + + + + + + + + + + + + + + + + + #
#+ + + + + + + + + + + + + + + + + + + + + + + + #
#+ + + + + + +                         + + + + + #
#+ + + + + + +     feldolgozasJS ()    + + + + + #
#+ + + + + + +                         + + + + + #
#+ + + + + + + + + + + + + + + + + + + + + + + + #
#+ + + + + + + + + + + + + + + + + + + + + + + + #

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

#+ + + + + + + + + + + + + + + + + + + + + + + + #
#+ + + + + + + + + + + + + + + + + + + + + + + + #
#+ + + + + + +                         + + + + + #
#+ + + + + + +     feldolgozasIFEK     + + + + + #
#+ + + + + + +                         + + + + + #
#+ + + + + + + + + + + + + + + + + + + + + + + + #
#+ + + + + + + + + + + + + + + + + + + + + + + + #

feldolgozasIFEK ()  {
  echo "kortname:XXXXXXXXXXXXXX" $1
  echo '<SCRIPT  SRC="'$1'.js" TYPE="text/javascript"></SCRIPT> '	  >> ""$2""$SCRIPTNEVEK
  echo '"'$1'": mydata'$1','                          	  >> ""$2""$TOMBNEVEK
  echo '<option value="'$1'">'$1'</OPTION> '	  >> ""$2""$SELECTEK
  echo "					if (\$('#selectem').val()=='"$1"') {"	  >> $2""$IFEK
  echo "					     chart.addSeries({"	                              >> $2""$IFEK
  echo "					     data: mydata"$1	  >> $2""$IFEK
  echo "					     })"	  						>> $2""$IFEK
  echo "					     };"	  						>> $2""$IFEK
  
	
	
}


#######################################################################
#######                 ###############################################
#######   ragasztHTML   ###############################################
#######                 ###############################################
#######################################################################
ragasztHTML(){
cat  $1                  | sed "s@$2@$3@"          >   $4"000"$5".html"
}







konyvtar="/media/fujilakare5/XXXhomokozo/highchart_dwn/examples/basic-line.data/OMX_DAX_feldolgozas/"
SERVER="192.168.0.190:8008"

##::::::::::::::::::::::::::::::::::::::::::::: ##
##::::::::::::::::::::::::::::::::::::::::::::: ##
##::::::::::::                ::::::::::::::::: ##
## :::::::::::    UJH gépen   ::::::::::::::::: ##
##::::::::::::::::::::::::::::::::::::::::::::: ##
##::::::::::::::::::::::::::::::::::::::::::::: ##
##                  ADS   ALV  ...              ##

konyvtar="/media/fujilakare5/XXXhomokozo/highchart_dwn/examples/basic-line.UTC/realtimedax/"
for mit in ADS   ALV    BAS       BAYN       BEI       BMW       CBK       CON       DAI       DB1       DBK       DPW       DTE       EOAN       FME       FRE       HEI       HEN3       IFX       LHA       LIN       LXS       MRK       MUV2       RWE       SAP       SDF       SIE       TKA       VOW3 
do
sorok_szama=$(wc -l "$konyvtar""$mit"  | cut -d ' ' -f1)
echo "ragaszt          + + + + + + + + + + + + + + + + + + + + + + + + + + +:  " 
echo "ragaszt          + + + + + + + + + + + + + + + + + + + +:  " 
echo "ragaszt          for LOOP"
echo "ragaszt         "$sorok_szama    $mit    $konyvtar$mit
echo "ragaszt          + + + + + + + + tomma.sh  INDULNA"
#########cgi="tomma.sh"
#########curl http://192.168.0.190:8008/cgi-bin/$cgi
#########echo "ragaszt          + + + + + + + + tomma.sh  VÉGEEEE"
echo "ragaszt          + + + + + + + +     checkout.sh   INDULNA"
cgi="checkout.sh"
KONYVT="/var/www/realtimedax.utc.ark/"
curl http://rvs.dyndns.dk:8008/cgi-bin/$cgi\?namex=$sorok_szama\&namey=orvos\&namez=$mit\&KONYVT=$KONYVT | grep "\[" >> $konyvtar""$mit
echo "ragaszt          + + + + + + + +     checkout.sh  VÉGEEEEEEE"
echo "ragaszt          + + + + + + + +          checkout.sh   feldolgozasJS()   INDULNA"
konyvtarJS="/media/fujilakare5/XXXhomokozo/highchart_dwn/examples/basic-line/"
feldolgozasJS $konyvtar$mit  $mit  $konyvtarJS 
  ragasztHTML $konyvtarJS"0KICSER0_ver03.html" "KICSER" $mit $konyvtarJS $mit

done
echo "ragaszt          + + + + + + + +          checkout.sh   feldolgozasJS()   VEGGEEE"



















##:::::::::::::::::::::::::::::::::::::::::::::##
##:::::::::::::::::::::::::::::::::::::::::::::##
##::::::::::::                :::::::::::::::::##
## :::::::::::    UJH gépen   :::::::::::::::::##
##:::::::::::::::::::::::::::::::::::::::::::::##
##:::::::::::::::::::::::::::::::::::::::::::::##
##                 OMX DAX             _UTC    ##

konyvtar="/media/fujilakare5/XXXhomokozo/highchart_dwn/examples/basic-line.UTC/omxspi/"
for mit in DAX OMXSPI
do
sorok_szama=$(wc -l "$konyvtar""$mit"  | cut -d ' ' -f1)
echo "ragaszt          + + + + + + + + + + + + + + + + + + + + + + + + + + +:  " 
echo "ragaszt          + + + + + + + + + + + + + + + + + + + +:  " 
echo "ragaszt          for LOOP"
echo "ragaszt         "$sorok_szama    $mit    $konyvtar$mit
echo "ragaszt          + + + + + + + + tomma.sh  INDULNA"
#########cgi="tomma.sh"
#########curl http://192.168.0.190:8008/cgi-bin/$cgi
#########echo "ragaszt          + + + + + + + + tomma.sh  VÉGEEEE"
echo "ragaszt          + + + + + + + +     checkout.sh   INDULNA"
cgi="checkout.sh"
KONYVT="/var/www/omx.utc.ark/"
curl http://rvs.dyndns.dk:8008/cgi-bin/$cgi\?namex=$sorok_szama\&namey=orvos\&namez=$mit\_UTC\&KONYVT=$KONYVT | grep "\[" >> $konyvtar""$mit
echo "ragaszt          + + + + + + + +     checkout.sh  VÉGEEEEEEE"
echo "ragaszt          + + + + + + + +          checkout.sh   feldolgozasJS()   INDULNA"
#konyvtarJS="/media/Lubuntuuuuu/VirtualBoxDisks_12_10_old_LUBUNTU/transfer/f/higstock_dwn/examples/basic-line/"
konyvtarJS="/media/fujilakare5/XXXhomokozo/highchart_dwn/examples/basic-line/"
feldolgozasJS $konyvtar$mit  $mit  $konyvtarJS 
  ragasztHTML $konyvtarJS"0KICSER0_ver03.html" "KICSER" $mit $konyvtarJS $mit

done
echo "ragaszt          + + + + + + + +          checkout.sh   feldolgozasJS()   VEGGEEE"




##::::::::::::::::::::::::::::::::::::::::::::: ##
##::::::::::::::::::::::::::::::::::::::::::::: ##
##::::::::::::                ::::::::::::::::: ##
## :::::::::::    UJH gépen   ::::::::::::::::: ##
##::::::::::::::::::::::::::::::::::::::::::::: ##
##::::::::::::::::::::::::::::::::::::::::::::: ##
##                  netfonds                    ##

#konyvtar="/media/Lubuntuuuuu/VirtualBoxDisks_12_10_old_LUBUNTU/transfer/f/higstock_dwn/examples/basic-line.data/UTC_es_tombok_js_alakitasa/fardig/"
SCRIPTNEVEK="000scripts"  
TOMBNEVEK="000tombok"  
SELECTEK="000select"  
IFEK="000ifek"  
konyvtarIFEK="/media/fujilakare5/XXXhomokozo/highchart_dwn/examples/basic-line.UTC/ifek_select_tombok/"

echo 'xxx' > $konyvtarIFEK$SCRIPTNEVEK
echo  'var tomb = {'  > $konyvtarIFEK""$TOMBNEVEK
echo  '<select id="selectem" multiple>'  > $konyvtarIFEK$SELECTEK
echo '' > $konyvtarIFEK$IFEK



konyvtar="/media/fujilakare5/XXXhomokozo/highchart_dwn/examples/basic-line.UTC/netfonds/"
for mit in AAK ABB ACTI AERO_B AF_B AKSOO ALFA ALIV_SDB AOI AOIL_SDB ARCM ASSA_B ATCO_A ATCO_B AXFO AXIS AZN BETS_B BIGG_B BILI_A BILL BINV BOL CAST CDON CLS_B CTEC DNBO EKTA_B ELUX_B ENQ ENRO EPCT ERIC_B FABG FING_B FOEO GETI_B GJFO GOLD HEXA_B HLDX HM_B HOGA_B HOLM_B HPOL_B HUFV_A HUSQ_B IJ INDU_A INDU_C INVE_A INVE_B JM KAHL KARO KDEV KINV_B KLED LIAB LOOM_B LUMI_SDB LUND_B LUPE MEDA_A MHGO MICR MIC_SDB MTG_B MVIR_B NCC_B NDA_SEK NEWA_B NHYO NIBE_B NOBI NOKI_SEK NOMI OASM OPCO ORI_SDB ORKO PAR PEAB_B PGSO PREC RATO_B RCLO RURI_B SAAB_B SAND SAS SCA_B SCH_O SCV_B SDRLO SEB_A SECU_B SEMC SENS SHB_A SKA_B SKF_B SMF SNM SOBI SSAB_A SSAB_B STBO STE_R STLO SUBCO SWED_A SWMA TAUR_B TELO TGSO TLSN TREL_B UNIB_SDB VOLV_A VOLV_B XACT_BEAR XACT_BULL YARO

do
sorok_szama=$(wc -l "$konyvtar""$mit"  | cut -d ' ' -f1)

echo "ragaszt          + + + + + + + + + + + + + + + + + + + + + + + + + + +:  " 
echo "ragaszt          + + + + + + + + + + + + + + + + + + + +:  " 
echo "ragaszt          for LOOP"
echo "ragaszt         "$sorok_szama    $mit    $konyvtar$mit
echo "ragaszt          + + + + + + + + tomma.sh  INDULNA"
#########cgi="tomma.sh"
#########curl http://192.168.0.190:8008/cgi-bin/$cgi
#########echo "ragaszt          + + + + + + + + tomma.sh  VÉGEEEE"
echo "ragaszt          + + + + + + + +     checkout.sh   INDULNA"
cgi="checkout.sh"
KONYVT="/var/www/netfonds.utc/UTC_zes_netfondson/fardig/"
curl http://rvs.dyndns.dk:8008/cgi-bin/$cgi\?namex=$sorok_szama\&namey=orvos\&namez=$mit\&KONYVT=$KONYVT | grep "\[" >> $konyvtar""$mit
echo "ragaszt          + + + + + + + +     checkout.sh  VÉGEEEEEEE"
echo "ragaszt          + + + + + + + +          checkout.sh   feldolgozasJS()   INDULNA"
#konyvtarJS="/media/Lubuntuuuuu/VirtualBoxDisks_12_10_old_LUBUNTU/transfer/f/higstock_dwn/examples/basic-line/"
konyvtarJS="/media/fujilakare5/XXXhomokozo/highchart_dwn/examples/basic-line/"
feldolgozasJS $konyvtar$mit  $mit  $konyvtarJS 
  ragasztHTML $konyvtarJS"0KICSER0_ver03.html" "KICSER" $mit $konyvtarJS $mit
feldolgozasIFEK $mit  $konyvtarIFEK
done
echo "ragaszt          + + + + + + + +          checkout.sh   feldolgozasJS()   VEGGEEE"


echo "" >> $konyvtarIFEK$SCRIPTNEVEK
echo  "}"  >> $konyvtarIFEK$TOMBNEVEK
echo  '</select>'  >> $konyvtarIFEK$SELECTEK






