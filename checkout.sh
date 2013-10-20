#!/bin/bash


echo "                  Content-type:       text/html"
echo ""

echo "checkcout.sh      <html>"
echo 'checkcout.sh      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'
echo ''


echo 'checkcout.sh      <body>'
echo "checkcout.sh      Helo there<br />"
echo "checkcout.sh      Just testade  ____<br /> "
echo "checkcout.sh      <hr>"
echo "checkcout.sh      <hr>"
echo "checkout.sh  "        >> /var/www/omx.utc/chekcout.sh.cgibol
		date    >> /var/www/omx.utc/chekcout.sh.cgibol




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
 
echo 'chekcout.sh      Parsed Values:'
echo 'chekcout.sh      <br>'   $ARGX  'chekcout.sh<br>'   $ARGY   '<br>'  $ARGZ  '<br>'  $KONYVT  
echo "checkout.sh  MMMMMMMMMMMMMMMMMMMMMMMMMM"  >>/var/www/omx.utc.ark/checkout/log
date  >>/var/www/omx.utc.ark/checkout/log
echo "checkout         ARGX  $ARGX ;;  ARGY  $ARGY  ;;  ARGZ  $ARGZ    " >>/var/www/omx.utc.ark/checkout/log

#itt fenn az ARG paraméter ki kellett bontani
# ARG ki kell  bontani, mert nem $-ben adja át neki, ghanem STRINGben !!!





echo "checkout.sh      <hr>iiiiiiiiiiiiii"
echo "checkout.sh      checkoutFORk.sh  INDITJUK...   " $ARGX ";;"  $ARGY " ;; " $ARGZ  ";; "$KONYVT    ";; valami"



##########/home/www/cgi-bin/checkoutFORK.sh   $ARGX  $ARGY  $ARGZ 
/home/www/cgi-bin/checkoutFORK.sh   $ARGX  $ARGY  $ARGZ  $KONYVT "valamiiiiii"





echo "checkout.sh      <br></br>"
#echo "checkout.shtail vege"
echo 'checkout.sh      </body></html>'

exit















tail  "/var/www/omx.utc.ark/"$ARGZ"_UTC"  >>/var/www/omx.utc.ark/checkout/log
#ARGX=150
#ARGY="orvos"
tail  -n+$ARGX  "/var/www/omx.utc.ark/"$ARGZ"_UTC"
tail  -n+$ARGX  "/var/www/omx.utc.ark/"$ARGZ"_UTC"  >>  /var/www/omx.utc.ark/checkout/DAX_UTC"$ARGY"



#echo " <br></br>"
#echo "tail vege"
#echo '</body></html>'
