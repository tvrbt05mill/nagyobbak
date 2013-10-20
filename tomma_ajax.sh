#!/bin/bash

echo "Content-type:    text/html"
echo ""

echo $(basename "$0")'         <html>'
#echo  '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'
echo $(basename "$0")'         <body>'

echo $(basename "$0")".         Helo there<br />"
echo $(basename "$0")".         Just testade<br /> "
echo $(basename "$0")".         <hr>"
date 
date    >> /var/www/omx.utc/aaa.cgibol
echo "<br>"$(basename "$0")"                 <hr>"


# PARAMETER FELDOLGOZAS
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
 
  for i in $Args ;
  do
 
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
 
echo $(basename "$0")'               Parsed Values:<br>'
echo $(basename "$0")'               ARGX: '$ARGX   '...ARGY: ' $ARGY   '...ARGZ: ' $ARGZ   '...KONYVT: ' $KONYVT  '<br>' 
echo $(basename "$0")"               MMMMMMMMMMMMMMMMMMMMMMMMMM"  >>$KONYVT"checkout/tomma_ajax.log"
date  >>$KONYVT"checkout/log"
echo $(basename "$0")"               ARGX  "$ARGX ";;  ARGY  "$ARGY  ";;  ARGZ  "$ARGZ     >>$KONYVT"checkout/tomma_ajax.log"

# PARAMETER FELDOLGOZAS VEEEEEGE



#####for f in "/var/www/omx.utc/"*"_UTC";  
for f in "$ARGX"*"$ARGZ";
#for f in *;
do
echo $(basename "$0")"         <br />"
echo $(basename "$0")"          $f <br>" 
echo $(basename "$0")'         '$(basename "$f")'<br>' 
echo $(basename "$0")"         WWWWWWWWWWWWWWWWWW<br>" 








########cat $f   >>  "/var/www/omx.utc.ark/"$(basename "$f") 
cat $f   >>  $KONYVT""$(basename "$f") 
echo "$(basename "$0")          concat :::"  $f  " ---  $KONYVT"$(basename "$f")     >> /var/www/omx.utc/aaa.cgibol
echo "$(basename "$0")          concat :::"   $f " ---  $KONYVT"$(basename "$f")   "<br>"

#>>   /var/www/omx.utc/aaa.cgibol
echo "$(basename "$0")         <br />"
#> /var/www/omx.utc/aaa.cgibol

mv  $f $KONYVT"zott/"$(basename "$f").$(date  +%Y-%m-%d-%H-%M)

done
echo "$(basename "$0")         <br />"
echo "$(basename "$0")         <hr>"

#zip /home/www/cgi-bin/aaa.zip /home/www/cgi-bin/*
#zip -j /var/www/omx.utc/zip.zipCGIBOL  /var/www/omx.utc/*_UTC*
#rm *_UTC*

echo "$(basename "$0")         vége  xxxxxxxxxxxxxxxxxxxxxxxxx"
echo '$(basename "$0")         </body></html>'
