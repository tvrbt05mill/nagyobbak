#!/bin/bash


##  TOMMA.SH debug 

echo "Content-type:    text/html"
echo ""

echo 'tomma.sh         <html>'
#echo  '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'
echo 'tomma.sh         <body>'

echo "tomma.sh         Helo there<br />"
echo "tomma.sh         Just testade<br /> "
echo "tomma.sh         <hr>"
date 
date    >> /var/www/omx.utc/aaa.cgibol
echo "                 <hr>"

for f in "/var/www/omx.utc/"*"_UTC";
#for f in *;
do
echo "tomma.sh         <br />"
echo "tomma.sh          /var/www/omx.utc.ark/" 
echo 'tomma.shv        '$(basename "$f") 
echo "tomma.sh         WWWWWWWWWWWWWWWWWW" 





cat $f   >>  "/var/www/omx.utc.ark/"$(basename "$f") 
echo "tomma.sh          concat :::"  $f  " ---  /var/www/omx.utc.ark/"$(basename "$f")     >> /var/www/omx.utc/aaa.cgibol
echo "tomma.sh         concat :::"   $f " ---  /var/www/omx.utc.ark/"$(basename "$f")

#>>   /var/www/omx.utc/aaa.cgibol
echo "tomma.sh         <br />"
#> /var/www/omx.utc/aaa.cgibol

mv  $f "/var/www/omx.utc.ark/zott/"$(basename "$f").$(date  +%Y-%m-%d-%H-%M)

done
echo "tomma.sh         <br />"
echo "tomma.sh         <hr>"

#zip /home/www/cgi-bin/aaa.zip /home/www/cgi-bin/*


#zip -j /var/www/omx.utc/zip.zipCGIBOL  /var/www/omx.utc/*_UTC*



#rm *_UTC*

echo "tomma.sh         vége  xxxxxxxxxxxxxxxxxxxxxxxxx"
echo 'tomma.sh         </body></html>'
