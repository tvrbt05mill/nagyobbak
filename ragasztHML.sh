#!/bin/bash
#							#VER 2.00
#                           # már kész mintát alakítunk  át, a létezőben 
#							# csak a SYMBOL csere lesz benne
#
#							#VER 1.00
#							cat  0KICSER0_ver03.html \
#								| sed "s@KICSER@$mit@"  \
#									  >   $konyvtarJS"000"$mit".html"
#
#
#
#
#
#
#
#

#######################################################################
#######                 ###############################################
#######   ragasztHTML   ###############################################
#######                 ###############################################
#######################################################################
ragasztHTML(){
	
cat  $1                  | sed "s@$2@$3@"          >   $4"000"$5".html"
}



    
    
konyvtarJS="/media/Lubuntuuuuu/VirtualBoxDisks_12_10_old_LUBUNTU/transfer/f/higstock_dwn/examples/basic-line/"
#cd $konyvtarJS           # már kész mintát alakítunk  át, a létezőben 
						   # csak a SYMBOL csere lesz benne

echo "ragasztHTML          + + + + + + + +          + + + + + + + + + + + + + + + "
echo "ragasztHTML          + + + + + + + +          + + + + + + + + + + + + + + + "
echo "ragasztHTML          + + + + + + + +          + + + + + + + + + + + + + + + "
echo "ragasztHTML          + + + + + + + +          + + + + + + + + + + + + + + + "
echo "ragasztHTML          "
echo "ragasztHTML          "
echo "ragasztHTML          "


for mit in AAK 
#ABB  ACTI AERO_B AF_B AKSOO ALFA ALIV_SDB AOI AOIL_SDB ARCM ASSA_B ATCO_A ATCO_B AXFO AXIS AZN BETS_B BIGG_B BILI_A BILL BINV BOL CAST CDON CLS_B CTEC DNBO EKTA_B ELUX_B ENQ ENRO EPCT ERIC_B FABG FING_B FOEO GETI_B GJFO GOLD HEXA_B HLDX HM_B HOGA_B HOLM_B HPOL_B HUFV_A HUSQ_B IJ INDU_A INDU_C INVE_A INVE_B JM KAHL KARO KDEV KINV_B KLED LIAB LOOM_B LUMI_SDB LUND_B LUPE MEDA_A MHGO MICR MIC_SDB MTG_B MVIR_B NCC_B NDA_SEK NEWA_B NHYO NIBE_B NOBI NOKI_SEK NOMI OASM OPCO ORI_SDB ORKO PAR PEAB_B PGSO PREC RATO_B RCLO RURI_B SAAB_B SAND SAS SCA_B SCH_O SCV_B SDRLO SEB_A SECU_B SEMC SENS SHB_A SKA_B SKF_B SMF SNM SOBI SSAB_A SSAB_B STBO STE_R STLO SUBCO SWED_A SWMA TAUR_B TELO TGSO TLSN TREL_B UNIB_SDB VOLV_A VOLV_B XACT_BEAR XACT_BULL YARO

do
ragasztHTML  $konyvtarJS"0KICSER0_ver03.html" "KICSER" $mit $konyvtarJS $mit
done
echo "ragasztHTML          + + + + + + + +          + + + + + + + + + + + + + + + "
echo "ragasztHTML          "
#echo "ragasztHTML         "$(ls -l  | grep "$mit" |grep  html   | awk '{ print $9 "... ..."$8"...   ..." $6 " "  $7  "...  méret:"  $5}')
echo "ragasztHTML         "$(ls -l  "$konyvtarJS"|grep "$mit"  |grep  html | awk '{ print $9 "... ..."$8"...   ..." $6 " "  $7  "...  méret:"  $5}')
echo "ragasztHTML          "
echo "ragasztHTML          "

echo "ragasztHTML          + + + + + + + +          checkout.sh   feldolgozasJS()   VEGGEEE"






