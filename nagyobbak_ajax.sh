#!/bin/bash

echo "Content-type:       text/html"
echo ""

date


#  várunk a TOKEN-re, amit a netfonds.letoltes.elhelez
#  akor kezdödhet a feldolgozas
#  mert ha gyorsaabban klezd el futni, kimaradnak file-ok és letörlőd-
#  hetnének

#  while not exit a TOKEN addig itt futkosunk
#  ha megjüön elengedjük
#  esetleg lehet logba kiirni, hogy TOKENre várunk meg

 

echo ""   > /home/www/cgi-bin/nagyobbak.log  
date   >> /home/www/cgi-bin/nagyobbak.log  
echo ""


#datum="1018"
#year= $(date | cut -d" " -f 2  | awk -F"." '{print $3}' )
#honap=$(date | cut -d" " -f 2  | awk -F"." '{print $2$1}' )
year=$(date +'%Y' )
honap=$(date +'%m%d' )
echo "year:"$year


			#cd /var/www/netfonds; zip  ./ark/2013_05_24.zip  *20130524*.csv; ./000nagyobbak.fut


echo "0. arkiv.fut hivja:: arkivalunk"
cd /var/www/netfonds

#zip  ./ark/$year"_"$honap.zip  "*"$year""$honap".csv"
#arkiv="/var/www/netfonds/ark/"$(echo "$year")"_"$(echo "$honap")".zip"
arkiv=$(echo "$year")"_"$(echo "$honap")".zip"
echo "arkiv:["$arkiv"]"
#zip  /var/www/netfonds/ark/"$year"_"$honap".zip  *"$year""$honap".csv
#zip  $arkiv  *"$year""$honap".csv
zip   -q $arkiv  *.csv


mv -v "$arkiv" ./ark/"$arkiv"
mv -v BBB.zip ./ark/AAA.zip
echo "mv eredmenye volt"

			####ls  *2013$ho_nap.csv
echo "1. arkiv.fut hivja:: 000nagyobbak.fut"




echo "........................................................................................."

#######      ./000nagyobbak.fut    ###########
##############################################
##############################################
cd /var/www/netfonds



echo "000nagyobbak.fut::  nev szerint betsz a ./nagyobbak konyvtarba, mindegy melyik datummal
echo "...............................................................................................""
echo "utana ugyis DATUM alapjan zippeljuk be a z arkiv.fut ban"
for f  in  AAK-*.*	ABB-*.*	ACTI-*.*	AERO_B-*.*	AF_B-*.*	AKSOO-*.*	ALFA-*.*	ALIV_SDB-*.*	AOI-*.*	AOIL_SDB-*.*	ARCM-*.*	ASSA_B-*.* 	ATCO_A-*.*	ATCO_B-*.*	AXFO-*.*	AXIS-*.*	AZN-*.*	BETS_B-*.*	BIGG_B-*.*	BILI_A-*.*	BILL-*.*	BINV-*.*	BOL-*.*	CAS-*.*	CAST-*.*	CDON-*.*	CLS_B-*.*	CTEC-*.*	DIAM_B-*.*	DNBO-*.*	EKTA_B-*.*	ELUX_B-*.*	ENQ-*.*	ENRO-*.*	EPCT-*.*	ERIC_B-*.*	FABG-*.*	FING_B-*.*	FOEO-*.*	GETI_B-*.*	GJFO-*.*	GOLD-*.*	HEXA_B-*.*	HLDX-*.*	HM_B-*.*	HOGA_B-*.*	HOLM_B-*.*	HPOL_B-*.*	HUFV_A-*.*	HUSQ_B-*.*	IJ-*.*	INDU_A-*.*	INDU_C-*.*	INVE_A-*.*	INVE_B-*.*	JM-*.*	KAHL-*.*	KARO-*.*	KDEV-*.*	KINV_B-*.*	KLED-*.*	LIAB-*.*	LOOM_B-*.*	LUMI_SDB-*.*	LUND_B-*.*	LUPE-*.*	MEDA_A-*.*	MHGO-*.*	MICR-*.*	MIC_SDB-*.*	MTG_B-*.*	MVIR_B-*.*	NCC_B-*.*	NDA_SEK-*.*	NEWA_B-*.*	NHYO-*.*	NIBE_B-*.*	NOBI-*.*	NOKI_SEK-*.*	NOMI-*.*	OASM-*.*	OPCO-*.*	ORI_SDB-*.*	ORKO-*.*	PAR-*.*	PEAB_B-*.*	PGSO-*.*	PREC-*.*	RATO_B-*.*	RCLO-*.*	RURI_B-*.*	SAAB_B-*.*	SAND-*.*	SAS-*.*	SCA_B-*.*	SCH_O-*.*	SCV_B-*.*	SDRLO-*.*	SEB_A-*.*	SECU_B-*.*	SEMC-*.*	SENS-*.*	SHB_A-*.*	SKA_B-*.*	SKF_B-*.*	SMF-*.*	SNM-*.*	SOBI-*.*	SSAB_A-*.*	SSAB_B-*.*	STBO-*.*	STE_R-*.*	STLO-*.*	SUBCO-*.*	SWED_A-*.*	SWMA-*.*	TAUR_B-*.*	 TEL-*.*	TELO-*.*	TGSO-*.*	TLSN-*.*	TREL_B-*.*	UNIB_SDB-*.*	VOLV_A-*.*	VOLV_B-*.*	XACT_BEAR-*.*	XACT_BULL-*.*	 YARO-*.*
do

mv -v -f $f  ./nagyobbak

done


mv -v -f *-*.* ./kisebbek


echo "000nagyobbak.fut  KESZ"






#for f in *.zip 
#do

#unzip $f -d ./kicsom


#done





#######      ./000nagyobbak.fut    ##  V E G E 
##############################################
##############################################





			#cd /var/www/netfonds/ark_nagyobbak; zip  2013_05-24.zip  ../nagyobbak/*20130524.csv
cd /var/www/netfonds/ark_nagyobbak
echo "2. XXXX  arkiv.fut hivja:: ./ark_nagyobbak-ban    zippeles DATUM szerint"
echo ".........................................................................................."

arkiv=$(echo "$year")"_"$(echo "$honap")".zip"
echo "arkiv22222:["$arkiv"]"

zip -q $arkiv  ../nagyobbak/*$year$honap.csv





echo "3. arkiv.fut hivja::  sendemail indul"
sendemail -s smtp.upcmail.hu:25 -f skandihaz@yahoo.se \
       -t skandihaz@yahoo.se -u "sendemail OMX  :: $honap.zip"  \
            -m "omx  $year_$honap.zip"  -a $arkiv
            
 echo "vegeeeeeeeeeeeee"

echo "     nagyobbak_ajax.bash-bolveeeeeeggggggeeeeeee"
echo "     nagyobbak_ajax.bash-bolveeeeeeggggggeeeeeee">> /home/www/cgi-bin/nagyobbak.log  
