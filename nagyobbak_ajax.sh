#!/bin/bash

echo "Content-type:       text/html"
echo ""

date

echo ""   > /home/www/cgi-bin/nagyobbak.log  
date   >> /home/www/cgi-bin/nagyobbak.log  
echo ""

for i in 1 2 3 4 5  6 7 8 9 10 
do
echo "$i   nagyobbak_ajax.bash-bol<br>"   >> /home/www/cgi-bin/nagyobbak.log  2>&1
echo "$i   nagyobbak_ajax.bash-bol<br>"   
ls 
find /  -name "nagyob*"  >> /home/www/cgi-bin/nagyobbak.log  2>&1
echo ""
echo ""
echo ""
echo ""
echo ""
echo ""
echo "     nagyobbak_ajax.bash-bol<br>"   >> /home/www/cgi-bin/nagyobbak.log  2>&1
echo "     nagyobbak_ajax.bash-bol<br>"   
echo ""
echo ""
echo ""
echo ""
echo ""
echo ""
done

echo "     nagyobbak_ajax.bash-bolveeeeeeggggggeeeeeee"
echo "     nagyobbak_ajax.bash-bolveeeeeeggggggeeeeeee">> /home/www/cgi-bin/nagyobbak.log  
