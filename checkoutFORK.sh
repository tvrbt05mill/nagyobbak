#!/bin/bash

set -x

echo "Content-type:    text/html"
echo ""


#echo '<html>'
#echo  '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'
#echo '<body>'

#echo "Helo there<br />"
#echo " Just testade<br /> "
#echo "<hr>"
#date 
#date    >> /var/www/omx.utc/chekcout.sh.cgibol
#echo "<hr>"


echo "checkoutFORK     1" $1" ;; 2 "$2"  ;;  3  "$3   ";; 4" $4  #>>/var/www/omx.utc.ark/checkout/log
echo "checkoutFORK     ARGX  $ARGX ;;  ARGY  $ARGY  ;;  ARGZ  $ARGZ  ;; KONYVT: $KONYVT" #>>/var/www/omx.utc.ark/checkout/log
#echo "<hr>"
#echo 'Parse Variables:'



# Save the old internal field separator.
  OIFS="$IFS"
 
# Set the field separator to & and parse the QUERY_STRING at the ampersand.
  IFS="${IFS}&"
  set $QUERY_STRING
  Args="$*"
  IFS="$OIFS"
 
# Next parse the individual "name=value" tokens.
 
  ARGX=""
  ARGY=""
  ARGZ=""
  KONYVT=""
  for i in $Args ;do
 
#       Set the field separator to =
        IFS="${OIFS}="
        set $i
        IFS="${OIFS}"
 
        case $1 in
                # Don't allow "/" changed to " ". Prevent hacker problems.
                namex) ARGX="`echo $2 | sed 's|[\]||g' | sed 's|%20| |g'`"
                       ;;
                # Filter for "/" not applied here
                namey) ARGY="`echo $2 | sed 's|%20| |g'`"
                       ;;
                namez) ARGZ="${2/\// /}"
                       ;;
                KONYVT) KONYVT="${2/\// /}"
                       ;;       
                *)     echo "<hr>Warning:"\
                            "<br>Unrecognized variable \'$1\' passed by FORM in QUERY_STRING.<hr>"
                       ;;
 
        esac
  done
 
echo "checkoutFORK     Parsed Values:"
echo "checkoutFORK     <br>ARGX:"$ARGX  " <br> ARGY:"$ARGY    "<br>ARGZ:"$ARGZ   "<br>KONYVT:"$KONYVT
echo "checkoutFORK     1" $1" ;; 2 "$2"  ;;  3  "$3   ";;"  $4  #>>/var/www/omx.utc.ark/checkout/log
  echo ""

fileITT=$( wc -l  "/var/www/omx.utc.ark/"$ARGZ"_UTC")
echo "checkoutFORK     sorok szama :: file ittTT:"  $fileITT
echo "checkoutFORK     <br></br>"
echo "checkoutFORK     "  >>/var/www/omx.utc.ark/checkout/log
date  >>/var/www/omx.utc.ark/checkout/log












#tail  "/var/www/omx.utc.ark/"$ARGZ"_UTC"  #>>/var/www/omx.utc.ark/checkout/log
#ARGX=150
#ARGY="orvos"
#######################xtail  -n+$ARGX  "/var/www/omx.utc.ark/"$ARGZ"_UTC"
#######################tail  -n+$ARGX  "/var/www/omx.utc.ark/"$ARGZ"_UTC"  >>  /var/www/omx.utc.ark/checkout/DAX_UTC"$ARGY"

echo "checkoutFORK     "
echo "checkoutFORK     "
ls -l $KONYVT""$ARGZ"_UTC"
echo "checkoutFORK     "
echo "checkoutFORK     "


echo "checkoutFORK     <br></br>"
echo "checkoutFORK     tail vege"
echo "checkoutFORK     </body></html>"
