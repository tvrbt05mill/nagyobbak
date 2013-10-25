const stopORA = 18;
const stopPERC = 6;
const stopMASODPERC=6;

const indulORA = 8;
const indulPERC = 59;
const indulMASODPERC=0;

const frissitesPERCmulva = 10;


Number.prototype.padLeft = function(base,chr){
    var  len = (String(base || 10).length - String(this).length)+1;
    return len > 0? new Array(len).join(chr || '0')+this : this;
}




esti_feldolgozas();
////////////////////index_netfonds_NAGYOBBAK();

/*
 
 * 2013-10-06              UTC átalakítás n2-ben
 *					
 *
 *
 * 2013-07-23	i3_2::     INDUL és STOP idők ujraszmamitasa a figyel WHILE körbefuto vegen 
 * 						   utotesztelessel, mert kolunben folyamatos üzemmodnal az elozo napi 
 * 						   dátum marad benn a valtozokban!
 * 
 * 						   tUjNordne = new Date(); tUjNordne = addMinutes(tUjNordne, frissitesPERCmulva); 
 * 						   beallitasa elsö indulasnal, hogy ne csinaljon 2x LOGGAIN-t
 * 
 * 2013-07-23	u3_1::     javascrpt kod atemelése a NETFUNDS js-böl
 * 						   loggol()	
 * 
 * 2013-07-23	i2_9::     legelsö inditasnal refRESH
 * 2013-07-23	i2_8::     loggain.iim elinditas ebbeol

 * 2013-07-23	ugy2_7::   Frakfurt Boerse berakott egy 
                           frissitesi kenyszer MESSAGE BOX-ot
 
 
 * 2013-07-23	ujh2_7::   Frakfurt Boerse berakott egy 
                           frissitesi kenyszer MESSAGE BOX-ot
                           ami 45 percenként kikényszeitia  
                           felhasznalotol a Realtime LINK-kel a frissi-
                           test
                           megoldas:
                           beraktuk a f()  elejebe a figyeles,
                           és MEGADOTT idonként megnyomjuk a LINK-et


 * 2013-07-21	ujh2_6::   DAX, OMXSPI extract külön véve, 
						   n2(volt f2()) hivasa elött string feldolg ( komma 
						   csere, space elim) es utana adjuk at a
						   fgv-nek 
						   XMLHttprequestnek külön paraméterben átadva
						   a mentendő filenév képzéshez a TICKER
 


 * 2012-12-19	ugy2_6::   OMXSPI extract
 
 
 
 * 2012-12-19	ugy2_5::   loggol.php
 * 				sajnos az sima alert megakasztja afutast
 * 				igy leall az egész script
 * 				loggolással a amüködőkéseke legalább mennek
 * 
 * 
 */


/*  volt js_OMX_TICKER_i1-0_u2-0_1_0_ */
/*readyState!!4 nem vizsgáőélható az AJAX miatt   472 sor
 * 
 * */   

/* js_OMX  ***   js_OMX  ***  js_OMX  ***  js_OMX  ***  js_OMX  ***/
//var munka_string_php= "munka_string_0_3_i1_u1_ugy1-2.php";

/*   hivja
     :: KoteslistaLeker()  
     :: 2. ajax:
     müködes
     :: eredmeny atadas PHP-nek
     .: DAX részvények honlapról lementett
     .. értékei
*/
var munka_string_php= "capslockka_ph_i1-0_u1-0_ugy1-1.php";


/* ***  nordnet.user.js hivta  * ***  nordnet.user.js hivta  * ***  nordnet.user.js hivta  **/
//volt:  var nordnet_munka_string_php= "nordnet_user_php_i0-0_u0-0_ugy0_1.php";


/*   hivja
     :: f2()  
     :: 2. ajax:
     müködes
     ::eredmeny atadas PHP-nek
     .:NORDNET részvények honlapról lementett omxspi, DAX index
     ..értékei
*/
var nordnet_munka_string_php= "capslockka_nord_i1-0_u1-0_ugy1_1.php";



/*
 * 
 * fujilakare3@fujilakare3-desktop:~/iMacros/Macros/Demo-Firefox$ 
 * cat aktier.html | grep 'identifier=' | cut   -d '"'  -f 6 > href

változóba tesszük OFFLINE müködéshez  
!!!DE AZ nem ugyanaz az ONLINE-al akpott EXTRACT-hot z képes
retcode = iimPlay("munka MKR VAR_ba_beteve_a_TICKER.iim");


 */


var i,loop, retcode;
var report;
var macrolist = new Array();
var loopuzenet;
var max = (60/20)*60*(18-9)-(15)*(60/20);



var tDateAkt = new Date();
var tUjBoerse = new Date();
var tUjNordne = new Date();


function getXMLHttp() {
  var XMLHttp = null;
  if (window.XMLHttpRequest) {
    try {
      XMLHttp = new XMLHttpRequest();
    } catch (e) { }
  } else if (window.ActiveXObject) {
    try {
      XMLHttp = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
      try {
        XMLHttp = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (e) { }
    }
  }
  return XMLHttp;
}


//hozzaadva 2013-07-23:   Frankfurt boerse 45 perces frissétési kényszert 
// küls Message Boxban, ezt kell megelőzni
function addMinutes(date, minutes) {
	return new Date(date.getTime() + minutes*60000);
}

var str;


var timerID;
var tStart ;
var tDate  ;
var tDiff ;
var prevStr;


var macro, macrofejlec, macro2, macro3, macroR;
var jsLF = "\n";
var errtext;
var MyDelay;
var MyPosts;
var url;
var count;


report  =  "Self-Test Report\n\n";
var reportOUT="hehe, hazudik :-) ,  elsö indulas, igy az... OMX_DAG alla ne futott meg...";


macrofejlec = "CODE:";
macrofejlec += "SET !EXTRACT_TEST_POPUP NO" + jsLF;   //1.sor
macrofejlec += "WAIT SECONDS=1" + jsLF;				//2.sor
macrofejlec += "SET !TIMEOUT_PAGE 5" + jsLF;		//3.
macrofejlec += "wait seconds=1" + jsLF;				//4.
macrofejlec += "SET !ERRORIGNORE YES" + jsLF;		//5.
macrofejlec += "wait seconds=1" + jsLF;				//6.
macrofejlec += "" + jsLF;							//7.


//************************************************
//* 
//*
//*
//*************************************************

//boerse behivasa  
/*retcode = iimPlay("INDIT.iim"); var varakozik = 0; while (500 > varakozik) { 	varakozik++; } */


//************************************************
//* 
//*
//*
//*************************************************


loop=1;
loopuzenet=""+loop+"/ "+max+"::ss:: ";


tDate = new Date();


var tIndul =new Date();
var tStop =new Date();
var tTimeIndul;
var timeStop;
var tDiff;


function indulora_szamol(){
tIndul =new Date();
tIndul.setHours(indulORA);
tIndul.setMinutes(indulPERC);
tIndul.setSeconds(indulMASODPERC);
tTimeIndul = tIndul.getTime();
}


indulora_szamol();


function stoppora_szamol(){
tStop =new Date();
tStop.setHours(stopORA);
tStop.setMinutes(stopPERC);
tStop.setSeconds(stopMASODPERC);
timeStop = tStop.getTime();
if (tDate.getMinutes()>tStop.getMinutes() ) {
  tStop.setHours(stopORA-1);
	
	}
tDiff = tStop.getTime() - tDate.getTime();
tDate.setTime(tDiff);
}


stoppora_szamol();


//reset loopuzenet
loopuzenet="[prev:" +tDate.getMinutes() + ":" +tDate.getSeconds()+"]" +prevStr+"\n";
// akt kijelzése, és felette a PREV:


loopuzenet ="[van még: " +tDate.getHours().padLeft() + ":" +tDate.getMinutes().padLeft() + ":" +tDate.getSeconds().padLeft()+"]" ;


var ccc=0;


/*******************************************/
/*******************************************
 *                      * >>>
 *                   *        >>
 *                 *            >
 *                 *           *
 *                   *        *
 *                     * * *                
 */
/*******************************************
   *                                    
   *                                    
   *            *                       
   *     * *    *          *            
   * *          *         *       *     
   **    **  ** ***   **  ** *  * **    
   **   *  * *  *  * *  * *  *  * *     
   * *  *  * *  *  * **** *  *  * *     
   * ** *  * *  *  * *    *  *  * *     
   *  * ***  *  ***   *** *  **** **    
                                        
   a fö korbefuto
********************************************/


tDateAkt = new Date();
tDate2   = new Date();
var ho   = tDate2.getMonth()+1;


loggol("312::log::"+tDate2.getFullYear()+"-"+ho+"-"
       +tDate2.getDate().padLeft()+"["+tDate2.getHours().padLeft()
       +":"+ tDate2.getMinutes().padLeft() + ":" +tDate2.getSeconds().padLeft()+"]" + 
       "PROGRAM ELINDULT...");


function legelso_inditas(loggba_uzenet)
	{ 


	  var wm = Components.classes["@mozilla.org/appshell/window-mediator;1"]
                   .getService(Components.interfaces.nsIWindowMediator);
	  var mainWindow = wm.getMostRecentWindow("navigator:browser");
	  gBrowser.mTabContainer.advanceSelectedTab(-1, true);



iimPlay("BOERSE_FR_refresh.iim"); 


	  var wm = Components.classes["@mozilla.org/appshell/window-mediator;1"]
                   .getService(Components.interfaces.nsIWindowMediator);
	  var mainWindow = wm.getMostRecentWindow("navigator:browser");
	  gBrowser.mTabContainer.advanceSelectedTab(1, true);



iimPlay("NORDNETloggaIn.iim"); 



	 tDate2 = new Date();
	 ho = tDate2.getMonth()+1;
	 loggol("315::log::"+tDate2.getFullYear()+"-"+ho+"-"
       +tDate2.getDate().padLeft()+"["+tDate2.getHours().padLeft()
       +":"+ tDate2.getMinutes().padLeft() + ":" +tDate2.getSeconds().padLeft()+"]" 
       + loggba_uzenet);
	
	
	 tUjNordne = new Date(); tUjNordne = addMinutes(tUjNordne, frissitesPERCmulva); 
	 tUjBoerse = new Date(); tUjBoerse = addMinutes(tUjBoerse, frissitesPERCmulva); 
	}


















//////legelso_inditas("legelso_inditas");  
// kivesszük mert  elindul a INDULora körben
//  és sima NORDNET-REFRESH lesz a ha a 
// az INDULoranal nagyonbb a z idő a ELSE agaban 480 as sor


OMX_DAG_ALLA_futott_ma_mar=true;
// álléandó körbefutó, az indulás fiygelésére 2.6-2.7
figyel=true;


while (figyel) 
	{
		// ha a reggeli idő még ne lérte ez au indulás idejét
		// várunk,
		// ha elérte az ELSE ágban az eddigi körbefutó mehet
		// de teljesen a végén nem lépünk hanem
		// függvénybe tettük a OMX-DAGH_ALLAt
	if (new Date().getTime() < tIndul.getTime()) 
		{    	/*             _0_           */  /* if   tIndul.getTime())  */
		  iimDisplay("akt. ido::"+new Date().getHours()+":"+new Date().getMinutes()
		  +":"+new Date().getSeconds()+"\n" 
	      +"tIndul::"+tIndul.getHours()+":"+tIndul.getMinutes()+":"
	      +tIndul.getSeconds()  );



iimPlay("code: wait seconds=15"+"\n"+"' varunk az indulasra::indulora-perc-ms: "
		  +indulORA +"-"+indulPERC+"-"+indulMASODPERC);
	
		  OMX_DAG_ALLA_futott_ma_mar=false;
		}	   /*             _0_           */
		else
		{	   /*             _0_           */

			if (new Date().getTime() < timeStop)    
			{          // STOP if _1_ 



legelso_inditas("belepett a STOP fihgyelesbe --- WHILE");



					while (new Date().getTime() < timeStop) 
					{  // _2_     
															   //whileSTOP figyeles  
							ccc+=1;
							tStart = new Date();
							iimDisplay( loopuzenet );


							var wm = Components.classes["@mozilla.org/appshell/window-mediator;1"]
							.getService(Components.interfaces.nsIWindowMediator);
							var mainWindow = wm.getMostRecentWindow("navigator:browser");
							gBrowser.mTabContainer.advanceSelectedTab(-1, true);


f();


							   /* retcode = iimPlay("realtimedax_refresh.iim");   if (retcode < 0) 
							   {              // an error has occured     errtext = iimGetLastError();     alert(errtext);   } 
							  */
							var wm = Components.classes["@mozilla.org/appshell/window-mediator;1"]
							.getService(Components.interfaces.nsIWindowMediator);
							var mainWindow = wm.getMostRecentWindow("navigator:browser");
							gBrowser.mTabContainer.advanceSelectedTab(1, true);


n();


							var wm = Components.classes["@mozilla.org/appshell/window-mediator;1"]
							.getService(Components.interfaces.nsIWindowMediator);
							var mainWindow = wm.getMostRecentWindow("navigator:browser");
							gBrowser.mTabContainer.advanceSelectedTab(1, true);


retcode = iimPlay("aaa8_koteslista.iim");  



							if (retcode < 0) {              // an error has occured
									errtext = iimGetLastError();
									tDate = new Date();
									/*
									*egyelöre hibas ra allitottuk, igy nem kell log.
									loggol("391-sorbol::"+tDate.getFullYear()+"-"
									* +tDate.getMonth().padLeft()+"-"
									+tDate.getDate().padLeft()+"["
									* +tDate.getHours().padLeft()
									+":"+ tDate.getMinutes().padLeft() + ":" 
									* +tDate.getSeconds().padLeft()+"]" 
									+ "capslockka_js_i2-0_u2-4_ugy2_5_.js::240::"
									* +"sor::aaa8_koteslista.iim HIVASA"
									* +errtext );									*/
								}
  
  
							var wm = Components.classes["@mozilla.org/appshell/window-mediator;1"]
							.getService(Components.interfaces.nsIWindowMediator);
							var mainWindow = wm.getMostRecentWindow("navigator:browser");
							gBrowser.mTabContainer.advanceSelectedTab(-1, true);


retcode = iimPlay("NORDNETfreshindex.iim");  
							if (retcode < 0) {              // an error has occured
							      errtext = iimGetLastError();
									tDate = new Date();
									loggol("410::hiba::"+tDate.getFullYear()+"-"
									+tDate.getMonth().padLeft()+"-"
									+tDate.getDate().padLeft()+"["+tDate.getHours().padLeft()
									+":"+ tDate.getMinutes().padLeft() + ":" 
									+tDate.getSeconds().padLeft()+"]"
									+"hiba  404 dorbol"+errtext);
							}


							tDate = new Date();


							if (tDate.getMinutes()>tStop.getMinutes() ) {
								tStop.setHours(stopORA-1);
							}


							tDiff = tDate.getTime() - tStart.getTime();
							tDate.setTime(tDiff);
							//tDate.getMinutes() + ":"
							//tDate.getSeconds();
							//reset loopuzenet
							loopuzenet="[prev:" +tDate.getMinutes() + ":" 
							+tDate.getSeconds()+"]" +prevStr+"\n";
							// akt kijelzése, és felette a PREV:   
							//loopuzenet=loopuzenet+" akt:"+loop+"/"+max+"\n";
							iimDisplay(loopuzenet );


							tDate = new Date();
							tDiff = tStop.getTime() - tDate.getTime();
							tDate.setTime(tDiff);
							//if (tDate.getHours()==23) tDate.setHours(tDate.getHours()+1);
							//reset loopuzenet
							loopuzenet +="[van még: " +tDate.getHours().padLeft() 
							+ ":" +tDate.getMinutes().padLeft() + ":" 
							+tDate.getSeconds().padLeft()+"]" ;
							iimDisplay( loopuzenet );
	

							// 2013-07-30::ha belement,
							// átáálítjuk a OMX-menteshez:
							OMX_DAG_ALLA_futott_ma_mar=false;
					}  /* STOP figyeles _2_ WHILe veghe   program fö WHILE  */


					// de teljesen a végén nem lépünk hanem
					// függvénybe tettük a OMX-DAGH_ALLAt
					if (OMX_DAG_ALLA_futott_ma_mar) 
					{
					}
					else
					{



index_netfonds_php_hiv_in1_2();


	
						tDate2 = new Date();
						ho = tDate2.getMonth()+1;

						loggol("511::log::"+tDate2.getFullYear()+"-"+ho+"-"
						+tDate2.getDate().padLeft()+"["+tDate2.getHours().padLeft()
						+":"+ tDate2.getMinutes().padLeft() + ":" 
						+tDate2.getSeconds().padLeft()+"]" 
						+ "index_netfonds_php_hiv_in1_2() lefutott ...");


// kivettük, mert nagyon időigényes
// realtime-ba esetleg fel lelhetne használni
iimPlay("NORDNETloggaIn.iim");
OMX_DAG_ALLA();




esti_feldolgozas();
/* VOLT index_netfonds_NAGYOBBAK();*/




						tDate2 = new Date();
						ho = tDate2.getMonth()+1;
						loggol("517::log::"+tDate2.getFullYear()+"-"+ho+"-"
						+tDate2.getDate().padLeft()+"["+tDate2.getHours().padLeft()
						+":"+ tDate2.getMinutes().padLeft() + ":" +tDate2.getSeconds().padLeft()+"]" 
						+     "esti felodolgozas() hivasa megvolt lefutott ...");


						OMX_DAG_ALLA_futott_ma_mar=true;


					}	


			}       /* _1_        STOP if else elott     */
			else
			{       /* _1_        else ág STOP if else elott     */

						iimDisplay("akt::"+new Date().getMonth()+"-"+new Date().getDate()+"  :"
						+new Date().getHours()+":"+new Date().getMinutes()+":"
						+new Date().getSeconds()+"\n" 
	                    +"tIndul::"+tIndul.getFullYear()+"-"+tIndul.getMonth().padLeft()+"-"
						+tIndul.getDate().padLeft()+"["
	                    +tIndul.getHours()+":"+tIndul.getMinutes()+":"+tIndul.getSeconds() +"]\n"
	                    +"tStop::"+tStop.getFullYear()+"- ho:"+tStop.getMonth().padLeft()+"- nap"
						+tStop.getDate().padLeft()+"["+tStop.getHours().padLeft()
						+":"+ tStop.getMinutes().padLeft()+":"+tStop.getSeconds() +"]");



iimPlay("code: wait seconds=20"+"\n"+"' STOP idön tul vagyunk, (lefutott a napi gyüjtes mar egyszer?) "+
        "\n"+"' (OMX_DAG_ALLA_futott_ma_mar:"+OMX_DAG_ALLA_futott_ma_mar+")"+
        "\n"+"' "+reportOUT);



			}  		/* _1_    STOP if else vegeelse ág STOP if else elott     */

		}  	   /*             _0_           */  
		// //  if   tIndul.getTime()) if INDULora



	 indulora_szamol();



	 stoppora_szamol();



	}  // figyel WHILE










/********************************************
 * 											*
 * 			     							*
 * 		   f  n n n								*
 * 		   f n      n  						*
 * 		 f f         n						*
 * 		   f 	     n						*
 * 		   f	     n	  n 				*
 * 		   f 	       n n					*
 * 		OMX DAX extract feldolgozásap		*
 * 		és									*
 * 		átadása a n2()-nek PHP kiírásra		*
 ********************************************/



function n()
	{

		tDateAkt = new Date();

		// ha lejár a timeOut frissitjük az oldalon aa ticker 
		// táblázatott  linkkel    
		if (tUjNordne.getTime()>tDateAkt.getTime()) 
		{
		}
		else
		{
			tUjNordne = new Date(); tUjNordne = addMinutes(tUjNordne, frissitesPERCmulva); 
   
   
   
retcode=iimPlay("NORDNETloggaIn.iim"); 
	
	
	
			tDate2 = new Date();
			var ho = tDate2.getMonth()+1;

			loggol("584::log::"+tDate2.getFullYear()+"-"+ho+"-"
			+tDate2.getDate().padLeft()+"["+tDate2.getHours().padLeft()
			+":"+ tDate2.getMinutes().padLeft() + ":" +tDate2.getSeconds().padLeft()+"]" 
			+        "tUjNordne frissites...");

		}



retcode = iimPlay("NORDNETfreshindex.iim");  


		if (retcode < 0) 
		{              // an error has occured
			errtext = iimGetLastError();
			tDate = new Date();
		
			loggol("520::hiba::"+tDate.getFullYear()+"-"+tDate.getMonth().padLeft()+"-"
			+tDate.getDate().padLeft()+"["+tDate.getHours().padLeft()
			+":"+ tDate.getMinutes().padLeft() + ":" +tDate.getSeconds().padLeft()+"]"
			+"hiba a n()-bol"+errtext);
		}


	omx=iimGetLastExtract();

	omx2=omx.replace(/\s{2,}/g,";"); 

	om=omx2.split(";");
	om2=om[0].replace(/,/,'.')



		n2("OMXSPI",om2);



	mycode = "code:TAG POS=3 TYPE=A ATTR=TXT:Index"+"\n"+"wait seconds=2"+"\n"+"TAG POS=6 TYPE=TD ATTR=CLASS:text  " + "\n" +"TAG POS=r1 TYPE=TD ATTR=*  extract=txt"+ "\n"+"wait seconds=2"; 



iimPlay(mycode);



		dax2=(iimGetLastExtract());
		dax3=dax2.replace(/\r/,'');
		dax2=dax3.replace(/^\s+|\s+$/g, '');
		dax3=dax2.replace(/\s{1,}/g,''); 
		dax2=dax3.replace(/,/,'.')

n2("DAX",dax2);
 
 }







/********************************************
 * 											*
 * 			fffff							*
 * 		   f								*
 * 		   ffff								*
 * 		   f 								*
 * 		   f 								*
 * 		   f								*
 * 		   f 								*
 * 		    								*
 ********************************************/


function f() 
{
  tDateAkt = new Date();

  // ha lejár a timeOut frissitjük az oldalon aa ticker 
  // táblázatott  linkkel    
  if (tUjBoerse.getTime()>tDateAkt.getTime()) 
	{
	}
	else
	{
	  iimPlay("code: TAG POS=1 TYPE=A ATTR=TXT:Realtime<SP>Quotes");
	  iimPlay("code: wait seconds=2"+"\n"+"' Realtime frissites");
	  tUjBoerse = new Date(); tUjBoerse = addMinutes(tUjBoerse, frissitesPERCmulva); 

	  tDate2 = new Date();
	  var ho = tDate2.getMonth()+1;

	  loggol("664::log::"+tDate2.getFullYear()+"-"+ho+"-"
       +tDate2.getDate().padLeft()+"["+tDate2.getHours().padLeft()
       +":"+ tDate2.getMinutes().padLeft() + ":" +tDate2.getSeconds().padLeft()+"]" + 
       "tUjBoerse frissites...");


	}
  loopuzenet ="[vege: ";// +tDate.getHours().padLeft() + ":" +tDate.getMinutes().padLeft() + ":" +tDate.getSeconds().padLeft()+"] \n" ;//+
//"[uj idő: " +tUjBoerse.getHours().padLeft() + ":" +tUjBoerse.getMinutes().padLeft() + ":" +tUjBoerse.getSeconds().padLeft()+"]  rrrrrrrr";
//



KoteslistaLeker();



  tDate = new Date();
  var clockka = window.content.document.getElementById("clock");
  tDiff = tStop.getTime() - tDate.getTime();
						//    tDiff=tDiff-60*60*1000;
  tDiff_ = new Date(tDiff);
  loopuzenetKoteslistaLeker ="f()-böl: [" +tDiff_.getHours().padLeft() + ":" +tDiff_.getMinutes().padLeft() + ":" +tDiff_.getSeconds().padLeft()+"]," +stopORA + ":" + stopPERC  + ":" + stopMASODPERC ;

					/*  Nem a honlapon jelezzük ki az időt ...
 
					var newTextNode=window.content.document.createTextNode(loopuzenetKoteslistaLeker);
	
					var kij = window.content.document.getElementById("kijelzo");
		
					if( kij!=null) {kij.value=loopuzenetKoteslistaLeker}
					else
					{
					var newTextNode2=window.content.document.createTextNode(loopuzenetKoteslistaLeker);
					var newP2 = window.content.document.createElement("p");
					newP2.id="kijelzo";
					newP2.appendChild(newTextNode2);
					div=window.content.document.getElementsByTagName("div");
					z=15;
	
					if (div.length>0) {
					div[z].innerHTML=loopuzenetKoteslistaLeker;}
					}  
					*/
  i++;
  iimDisplay( ccc+"		::  \n"+loopuzenetKoteslistaLeker );
    
      /*  if(tDate.getTime() < timeStop){
		alert("ujra");
     gBrowser.mTabContainer.advanceSelectedTab(-1, true);
	f2();
      alert("f2 hivas bege");
             gBrowser.mTabContainer.advanceSelectedTab(1, true);
    
    setTimeout( f, 4000 );
    }
    else
    
    {
	  
  	loopuzenet2 ="[lefutott, vége: " ;//+tDateVege.getHours().padLeft() + ":" +tDateVege.getMinutes().padLeft() + ":" +tDateVege.getSeconds().padLeft()+"]" ;

    var kij = document.getElementById("kijelzo");

    if( kij!=null) {kij.value=loopuzenet2}
    else
    {
	//	alert("belement");
	var newTextNode2=document.createTextNode(loopuzenet2);
	var newP2 = document.createElement("p");
    newP2.id="kijelzo";
    newP2.appendChild(newTextNode2);
    div=document.getElementsByTagName("div");
	  z=15;
    div[z].innerHTML=loopuzenet2;
    }  

}
*/

    

}






function KoteslistaLeker() {

var s='';
var st='';
var ss = '';

  function handlerFunction1() 
	{
		if (XMLHttp1.readyState != 4) 
			{
			  return;
			}	
			else
			{	
					//}	
					//	if (XMLHttp1.readyState == 200) {
					//if (3>ccc) {alert('ccc=1 handlerfuuuuu'+XMLHttp1.readyState);}
			  s=XMLHttp1.responseText;
						
						
						/*re = s.replace(/[']/g, '"');
						re2 = re.replace(/[<div>]/g, 'XXX');
						re3 = re2.replace(/[</div>]/g, 'YYY');
						re4 = re3.replace(/[/]/g, '_');
						re5 = re4.replace(/[\]/g, '_');
						*/
						rep=s_feldolgozas(s);
						
						
						
			  ss = 'word1='+s+'&word2=Phrasebook';//+'&word3='+rep;
					//str = dformatMINSS + "-töl hiba (" + tDate.getMinutes() + ":" +tDate.getSeconds()+"), " + prevStr ;
			  


eredmeny(ss);



			}
	}  




	function getXMLHttp() 
	{
	  var XMLHttp = null;
		if (window.XMLHttpRequest) 
		{
			try 
				{
				  XMLHttp = new XMLHttpRequest();
				} catch (e) { }
		} else if (window.ActiveXObject) 
		{
			try 
			{
				  XMLHttp = new ActiveXObject("Msxml2.XMLHTTP");
			} catch (e) 
				{
				  try 
					{
					  XMLHttp = new ActiveXObject("Microsoft.XML");
					} catch (e) { }
				}
		}
	return XMLHttp;
	}

  /*  DAX aktie lekérése HTML -ben visszakapjuk   */	
  /*  egymásbaágyazott AJAX                                            */
  var XMLHttp1 = getXMLHttp();
  XMLHttp1.open("GET", "http://www.boerse-frankfurt.de/en/parts/boxes/realtimequotes/realtimequotes.m?secu=isin.DE0008469008&COMPONENT_ID=tPREb25c71b63fa64ec1a4275e69e4f08522_DAX", true);
  XMLHttp1.onreadystatechange = handlerFunction1;
  XMLHttp1.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  /*  HTML -ben visszakapjuk   */
  /*  majd az eredmeny()-nek atadjuk aa Function törzsből!   */
  XMLHttp1.send(null);
					//XMLHttp1.send("secu=isin.DE0008469008&COMPONENT_ID=tPREb25c71b63fa64ec1a4275e69e4f08522_DAX");
					//alert("f() ...  XMLHttp");
					//if (ccc==1) {alert('2.belement HTTPppppppppppppp'); 	//}








  function eredmeny(se)	
	{
		function handlerFunctione() 
		{
		  if (XMLHttpe.readyState != 4) {	return;	}
						//if (XMLHttpe.readyState == 200) {
					//    window.alert("Returned data: " + XMLHttp.responseText);
		  s=XMLHttpe.responseText;
				//str = dformatMINSS + "-töl hiba (" + tDate.getMinutes() + ":" +tDate.getSeconds()+"), " + prevStr ;
			     //}
		}  

	  var XMLHttpe = getXMLHttp();
	  XMLHttpe.open("POST", "http://127.0.0.1:8008/"+munka_string_php);
	  XMLHttpe.onreadystatechange = handlerFunctione;
	  XMLHttpe.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	  XMLHttpe.send(se);
	}

//   alert("megallitju2222k");
}






/*		 iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii             
         iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii             
         iiiii..iiiiiii....iiiii.....iiii.....iiii....iii..iiiiiiii             
         iiiii..iiiiii..iii.iii..iii.iii..iii.iii..iii.ii..iiiiiiii             
         iiiii..iiiii..iiii..i..iiiiiii..iiiiiii..iiii..i..iiiiiiii             
         iiiii..iiiii.iiiiii.i.iiiiiiii.iiiiiiii.iiiiii.i..iiiiiiii             
         iiiii..iiiii.iiiiii.i.iiii...i.iiii...i.iiiiii.i..iiiiiiii             
         iiiii..iiiii.iiiiii.i.iiiii..i.iiiii..i.iiiiii.i..iiiiiiii             
         iiiii..iiiii..iiii..i..iiii..i..iiii..i..iiii..i..iiiiiiii             
         iiiii..iiiiii..iii.iii..iii..ii..iii..ii..iii.ii..iiiiiiii             
         iiiii......iii....iiiii.....iiii.....iiii....iii......iiii             
         iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii             
         iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii             

*/

function loggol(uzenet) {
	
	
/*
	function handlerFunctionL() {
	if (XMLHttpL.readyState != 4) {
		return;
	}
		s=XMLHttpL.responseText;
		//alert("loggol responseText;"+s);
	}  

	var XMLHttpL = getXMLHttp();
	//XMLHttpL.open("POST", "http://127.0.0.1/loggol.php");
	XMLHttpL.open("POST", "http://users.atw.hu/omx/loggol.php");
	XMLHttpL.onreadystatechange = handlerFunctionL;
	XMLHttpL.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	XMLHttpL.send("uzenet="+uzenet);

*/

var filename = "loggol";
var folder=" FOLDER=/var/www/tmp/";
var szovegOUT=uzenet;
var dr = new Date,
    drformat = [dr.getFullYear(),
               (dr.getMonth()+1).padLeft(),
               dr.getDate().padLeft()].join('');
//alert(dformat);
var   drformatMINSS = [dr.getHours().padLeft(),
               dr.getMinutes().padLeft(),
               dr.getSeconds().padLeft()].join(':');


var dr2 = new Date,
    dr2format = [dr2.getFullYear(),
               (dr2.getMonth()+1).padLeft(),
               dr2.getDate().padLeft()].join('');
//alert(dformat);
var   dr2formatMINSS = [dr2.getHours().padLeft(),
               dr2.getMinutes().padLeft(),
               dr2.getSeconds().padLeft()].join(':');


//szovegOUT=drformatMINSS+szovegOUT;

macro4 =macrofejlec +"SET !EXTRACT "+String.fromCharCode(34)+szovegOUT+String.fromCharCode(34) + jsLF;  
//debug:
//macro4 +="PROMPT {{!EXTRACT}} !VAR4  " + jsLF; 

macro4 += "SAVEAS TYPE=EXTRACT "+folder+" FILE="+ filename+drformat+"__.log" + jsLF;
//alert(macro4);


//iimDisplay("Start macro4: ");
retcode = iimPlay(macro4);
  if (retcode < 0) {              // an error has occured
    errtext = iimGetLastError();
    //alert("loggol()::bol:hiba a 1634 sorbol  iimGetLastError:"+errtext);
  }
 



	
}




/*
if (document.readyState === "complete") { alert("doc ready") }
else {alert("doc NOT ready?")}
*/
//alert("sleep ready");

/*
var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
        init();
        clearInterval(readyStateCheckInterval);
    }
}, 10);

alert("sleep ready");

*/



/*
var s="";
var newTextNode0=document.createTextNode("wwwwwwwwwwww");
	var newP0 = document.createElement("p");
    newP0.id="kijelzo0";
    newP0.appendChild(newTextNode0);
    div=document.getElementsByTagName("div");
	  z=15;
	 div[z].parentNode.appendChild(document.createTextNode(z+"WWWWWW"));




	 div[z].parentNode.appendChild(document.createTextNode(z+"WWWWWW"));
    
    var kijelzo = document.getElementById("kijelzo");
    alert("kijelzo.innerHTML:"+kijelzo);
if (kijelzo==null){sleep(4000); var kijelzo = document.getElementById("kijelzo");
    alert("kijelzo.innerHTML:"+kijelzo);}	 
	 
/*
for(var r=0; r<850000;r++){
}

*/


function sleep(ms)
	{
		var dt = new Date();
		dt.setTime(dt.getTime() + ms);
		while (new Date().getTime() < dt.getTime());
	}

//sleep(2000);
//alert("mivan");




/*
var newTextNode2=document.createTextNode("wwwwwwwwwwww");
	var newP2 = document.createElement("p");
    newP2.id="kijelzo";
    newP2.appendChild(newTextNode2);
    div=document.getElementsByTagName("div");
	  z=14;
	 div[z].parentNode.appendChild(document.createTextNode(z+"WWWWWW"));

*/

// debug 10 sec után lekapcsol
/*const stopORA = 22;
const stopPERC = new Date().getMinutes();
const stopMASODPERC=new Date().getSeconds()+10;
*/








function Left(str, n){
	if (n <= 0)
	    return "";
	else if (n > String(str).length)
	    return str;
	else
	    return String(str).substring(0,n);
}
function Right(str, n){
    if (n <= 0)
       return "";
    else if (n > String(str).length)
       return str;
    else {
       var iLen = String(str).length;
       return String(str).substring(iLen, iLen - n);
    }
}



/********************************************
 * 												*
 * 			     								*
 * 		   f  n n n					2 2 2		*				*
 * 		   f n      n  			  2		 2		*			*
 * 		 f f         n				   2		*		*
 * 		   f 	     n				  2 		*			*
 * 		   f	     n	   n 		 2			*  			*
 * 		   f 	       n  n			2			*		*
 * 		   f 			n			22222222	*		*
 ********************************************/


function n2(ticker, ertek) {                 //refresh.iim ből átadujuk OMXSPI








//  NEM KEL AZ EGESZ csaj az eredmeny(se)
//  ////////////////  )KoteslistaLeker();

var currentTime = new Date();
var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();

var currentTime = new Date();
var month = currentTime.getMonth() + 1;
var day = currentTime.getDate();
var year = currentTime.getFullYear();



var ma= currentTime.getFullYear()+month.padLeft()+currentTime.getDate().padLeft();
var ido=currentTime.getHours().padLeft()+currentTime.getMinutes().padLeft()+currentTime.getSeconds().padLeft();

var str='';


/*  VALAMI felodolgozoo futott itt
var ID=window.content.document.getElementById('writeroot_varlden');	
var s=ID.innerHTML;
s_feldolgozas(s);  
*/


ski=ticker+";"+ertek+";;;"+ma+";"+ido+"\n";
str=str+ski;

/*   UTC átalakítás n2-ben*/
utc=Date.UTC(currentTime.getFullYear(),currentTime.getMonth().padLeft(),currentTime.getDate().padLeft(),currentTime.getHours().padLeft(),currentTime.getMinutes(),currentTime.getSeconds().padLeft())
var shighchartki="["+utc+","+ertek+",'"+ma+"-"+ido+"'],\n";


function hasNumber(ss) 
{
var re = /\d/;
return re.test(ss);
}; 


if   (shighchartki.indexOf(',,')<0)  {
	           if    ( hasNumber(ertek)  )	 {
eredmeny("ticker="+ticker+"&word1="+str+"&word2="+shighchartki);
				}
				else
				{
					loggol("1039::log::"+tDate2.getFullYear()+"-"+ho+"-"
       +tDate2.getDate().padLeft()+"["+tDate2.getHours().padLeft()
       +":"+ tDate2.getMinutes().padLeft() + ":" +tDate2.getSeconds().padLeft()+"]" + 
       "nordnet ...shighchartkiirása hiba "+ticker+"nem számot adott vissza <ertek>-t adott vissza:"+ertek+"   xxx");

				};
}				
else
{
loggol("1039::log::"+tDate2.getFullYear()+"-"+ho+"-"
       +tDate2.getDate().padLeft()+"["+tDate2.getHours().padLeft()
       +":"+ tDate2.getMinutes().padLeft() + ":" +tDate2.getSeconds().padLeft()+"]" + 
       "nordnet ...shighchartkiirása hiba "+ticker+"hibas <ertek>-t adott vissza:"+ertek+"   xxxx");
	
};



function eredmeny(se)
	{
	  ////////////////////////////////////alert("function eredmeny(se):"+se);
	  function handlerFunctione() 
		{
			if (XMLHttpe.readyState == 4) 
				{
				  s=XMLHttpe.responseText;
				  //hiba = dformatMINSS + "-töl hiba (" + tDate.getMinutes() + ":" +tDate.getSeconds()+"), " + prevStr ;
				}
		}  
	  var XMLHttpe = getXMLHttp();
	  XMLHttpe.open("POST", "http://127.0.0.1:8008/"+nordnet_munka_string_php);
	  XMLHttpe.onreadystatechange = handlerFunctione;
	  XMLHttpe.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	  XMLHttpe.send(se);
	}





}

//}  nem kel az egesz koteslistaleker()  !!!!!!!!!!!!











iimDisplay("FUTAS::: js_OMX_ALLA_MVIR_MedivirAB se B.js");

//                         ***********                          
//                  *****************************              
//          *********************************************      
//    ******************************************************   
//  **************                                    ******** 
//****************          OMX_DAG_ALLA()            *********
//  **************                                    ******** 
//    ******************************************************   
//         *********************************************        
//                **********************************           
//                         *************                       



function OMX_DAG_ALLA() {

var i, retcode;
var report;
var macrolist = new Array();
//var folder="FOLDER=/media/virtboxTRANSFER/virtBox_DeladeMappar/tzsD/OMX_DAG_ALLA";
//var folder=" FOLDER=/home/fujilakare7/tzs/OMX_DAG_ALLA/";


// mod 2013.03.22:
var folder=" FOLDER=/var/www/OMX_DAG_ALLA/";

var macro, macrofejlec, macro2, macro3, macro4;
var jsLF = "\n";
var errtext;
var MyDelay;
var MyPosts;
var url;







macrolist.push("32838");


macrolist.push("43396");

macrolist.push("51621");

macrolist.push("1063");
macrolist.push("57018");
macrolist.push("80");
macrolist.push("1050");
macrolist.push("3081");
macrolist.push("43302");
macrolist.push("40936");
macrolist.push("260");
macrolist.push("942");
macrolist.push("935");
macrolist.push("20017");
macrolist.push("63225");
macrolist.push("13469");
macrolist.push("40342");
macrolist.push("66436");
macrolist.push("13467");
macrolist.push("33359");
macrolist.push("5209");
macrolist.push("4212");
macrolist.push("14922");
macrolist.push("27709");
macrolist.push("13348");
macrolist.push("4025");
macrolist.push("79252");
macrolist.push("72565");
macrolist.push("3546");
macrolist.push("365");
macrolist.push("261");
macrolist.push("998");
macrolist.push("2170");
macrolist.push("366");
macrolist.push("46");
macrolist.push("3966");
macrolist.push("14354");
macrolist.push("817");
macrolist.push("34362");
macrolist.push("24227");
macrolist.push("11046");
macrolist.push("66922");
macrolist.push("76085");
macrolist.push("361");
macrolist.push("36950");
macrolist.push("13557");
macrolist.push("1044");

macrolist.push("45");
macrolist.push("40583");
macrolist.push("82457");
macrolist.push("792");
macrolist.push("31885");
macrolist.push("891");
macrolist.push("49615");
macrolist.push("980");
macrolist.push("36986");
macrolist.push("896");
macrolist.push("1056");
macrolist.push("62494");
macrolist.push("301");
macrolist.push("981");
macrolist.push("3871");
macrolist.push("18765");
macrolist.push("74570");
macrolist.push("31293");
macrolist.push("812");
macrolist.push("819");
macrolist.push("15285");
macrolist.push("82889");
macrolist.push("341");
macrolist.push("1054");
macrolist.push("41044");
macrolist.push("37472");
macrolist.push("914");
macrolist.push("824");
macrolist.push("3599");
macrolist.push("4359");
macrolist.push("300");
macrolist.push("966");
macrolist.push("971");
macrolist.push("284");
macrolist.push("4928");
macrolist.push("81");
macrolist.push("875");
macrolist.push("18634");
macrolist.push("281");
macrolist.push("945");
macrolist.push("61536");
macrolist.push("161");
macrolist.push("18962");
macrolist.push("75073");
macrolist.push("285");
macrolist.push("5053");
macrolist.push("1062");
macrolist.push("1149");
macrolist.push("340");
macrolist.push("88584");
macrolist.push("84981");
macrolist.push("992");
macrolist.push("862");
macrolist.push("4590");
macrolist.push("4963");
macrolist.push("142");
macrolist.push("323");
macrolist.push("143");
macrolist.push("22335");
macrolist.push("4714");
macrolist.push("56154");
macrolist.push("37352");
macrolist.push("13217");
macrolist.push("3219");
macrolist.push("999");
macrolist.push("816");
macrolist.push("283");
macrolist.push("74282");
macrolist.push("5095");
macrolist.push("55907");
macrolist.push("43046");
macrolist.push("923");
macrolist.push("3540");
macrolist.push("120");
macrolist.push("61365");
macrolist.push("5150");
macrolist.push("81878");
macrolist.push("14336");
macrolist.push("34271");
macrolist.push("912");
macrolist.push("101");
macrolist.push("220");
macrolist.push("29759");
macrolist.push("820");
macrolist.push("160");
macrolist.push("47");
macrolist.push("364");
macrolist.push("988");
macrolist.push("322");
macrolist.push("222");
macrolist.push("3524");
macrolist.push("861");
macrolist.push("863");
macrolist.push("1074");
macrolist.push("14353");
macrolist.push("43007");
macrolist.push("1061");
macrolist.push("937");
macrolist.push("936");
macrolist.push("1546");
macrolist.push("1058");
macrolist.push("14531");
macrolist.push("401");
macrolist.push("3083");
macrolist.push("4003");
macrolist.push("10751");
macrolist.push("34961");
macrolist.push("1032");
macrolist.push("2282");
macrolist.push("76461");
macrolist.push("4000");
macrolist.push("5116");
macrolist.push("4872");
macrolist.push("19095");
macrolist.push("40347");
macrolist.push("53228");
macrolist.push("3598");
macrolist.push("835");
macrolist.push("834");
macrolist.push("3922");
macrolist.push("3921");
macrolist.push("85846");
macrolist.push("4986");
macrolist.push("3223");
macrolist.push("1014");
macrolist.push("1049");
macrolist.push("14335");
macrolist.push("56940");
macrolist.push("995");
macrolist.push("994");
macrolist.push("3571");
macrolist.push("2346");
macrolist.push("821");
macrolist.push("221");
macrolist.push("991");
macrolist.push("82823");
macrolist.push("903");
macrolist.push("72798");
macrolist.push("88768");
macrolist.push("947");
macrolist.push("806");
macrolist.push("897");
macrolist.push("4005");
macrolist.push("66929");
macrolist.push("82656");
macrolist.push("40679");
macrolist.push("84962");
macrolist.push("13288");
macrolist.push("892");
macrolist.push("953");
macrolist.push("37656");
macrolist.push("877");
macrolist.push("20016");
macrolist.push("928");
macrolist.push("1012");
macrolist.push("1027");
macrolist.push("959");
macrolist.push("5000");
macrolist.push("3887");
macrolist.push("75712");
macrolist.push("41047");
macrolist.push("282");
macrolist.push("838");
macrolist.push("27701");
macrolist.push("800");
macrolist.push("32443");
macrolist.push("920");
macrolist.push("946");
macrolist.push("917");
macrolist.push("24507");
macrolist.push("31308");
macrolist.push("86345");
macrolist.push("930");
macrolist.push("1039");
macrolist.push("794");
macrolist.push("100");
macrolist.push("939");
macrolist.push("905");
macrolist.push("793");
macrolist.push("990");
macrolist.push("34913");
macrolist.push("37758");
macrolist.push("39854");
macrolist.push("36273");
macrolist.push("1045");
macrolist.push("1051");
//macrolist.push("85&marketplace=13
macrolist.push("25319");
macrolist.push("5081");
macrolist.push("34601");
macrolist.push("49775");
macrolist.push("4870");
macrolist.push("40543");
macrolist.push("964");
macrolist.push("34915");
macrolist.push("921");
macrolist.push("2169");
macrolist.push("29954");
macrolist.push("3967");
macrolist.push("5121");
macrolist.push("40286");
macrolist.push("1040");
macrolist.push("13094");
macrolist.push("19459");
macrolist.push("4145");
macrolist.push("1011");
macrolist.push("79303");
macrolist.push("55913");
macrolist.push("5177");
macrolist.push("402");
macrolist.push("1020");
macrolist.push("1026");
macrolist.push("4208");
macrolist.push("4345");
macrolist.push("929");
macrolist.push("70690");
macrolist.push("37309");
macrolist.push("1036");
macrolist.push("5110");
macrolist.push("36316");
macrolist.push("12241");
macrolist.push("803");
macrolist.push("813");
macrolist.push("43045");
macrolist.push("3974");
macrolist.push("78547");
macrolist.push("1023");
macrolist.push("837");
macrolist.push("82239");
macrolist.push("3927");
macrolist.push("31884");
macrolist.push("4287");
macrolist.push("37400");
macrolist.push("66668");
macrolist.push("5219");
macrolist.push("13291");
macrolist.push("927");
macrolist.push("941");
macrolist.push("81547");
macrolist.push("59064");
macrolist.push("1031");
macrolist.push("1007");






var dr = new Date,
    drformat = [dr.getFullYear(),
               (dr.getMonth()+1).padLeft(),
               dr.getDate().padLeft()].join('');
//alert(dformat);
var   drformatMINSS = [dr.getHours().padLeft(),
               dr.getMinutes().padLeft(),
               dr.getSeconds().padLeft()].join(':');


var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!

var yyyy = today.getFullYear();
if(dd<10){dd='0'+dd} if(mm<10){mm='0'+mm} today = mm+'/'+dd+'/'+yyyy;


report="OMX_ALLA_egy_napra_esti_letöltés\\n";
reportOUT("OMX_ALLA_egy_napra_esti_letöltés elindult\\n","log");

//for (i = 0; i < macrolist.length; i++) {
for (i = 0; i < macrolist.length/10; i++) {

url = "URL GOTO=https://www.nordnet.se/mux/popups/marknaden/aktiehemsidan/avslut.html?"
       +"containerid=avslut&identifier=" 
       + macrolist[i] 
       + "&marketplace=11&limit=100000";
       
macrofejlec = "CODE:";
//macrofejlec += "SET !EXTRACT_TEST_POPUP NO" + jsLF;   //1.sor
macrofejlec += "WAIT SECONDS=1" + jsLF;				//2.sor
macrofejlec += "SET !TIMEOUT_PAGE 10" + jsLF;		//3.
macrofejlec += "wait seconds=1" + jsLF;				//4.
macrofejlec += "SET !ERRORIGNORE YES" + jsLF;		//5.
macrofejlec += "wait seconds=1" + jsLF;				//6.
macrofejlec += "" + jsLF;							//7.

macro = macrofejlec + url + jsLF;							//8.
/////////macrofejlec += "wait seconds=3" + jsLF;	//9.
macro += "" + jsLF;							//10.


macro +=  "TAG POS=1 TYPE=H1 ATTR=TXT:* EXTRACT=TXT" + jsLF;  //11
//iimDisplay("Start macro: a beolvasas OMX aktie orderdjup popup ALLA");



retcode = iimPlay(macro);



  if (retcode < 0) {              // an error has occured
    errtext = iimGetLastError();
    tDate = new Date();
	
	 loggol("1519::hiba::"+tDate.getFullYear()+"-"+tDate.getMonth().padLeft()+"-"
	+tDate.getDate().padLeft()+"["+tDate.getHours().padLeft()
	+":"+ tDate.getMinutes().padLeft() + ":" +tDate.getSeconds().padLeft()+"]"+
	 "errtext:"+errtext);
    
    
  }


var ss=iimGetLastExtract();
ss=ss.replace(/(\r\n|\n|\r)/gm,"")
var VAR2=ss.substring(0,ss.indexOf('·'));
VAR2=VAR2.replace(/\s/gm,"_");
var VAR3=ss.substring(ss.indexOf('·')+1,ss.length);
VAR3=VAR3.replace(/\s/gm,"_");

				//alert("VAR3: " + VAR3 + "; VAR2: " + VAR2 + ";");

macro2 =macrofejlec +   "TAG POS=1 TYPE=TABLE ATTR=TXT:* EXTRACT=TXT" + jsLF;  //12.

macro2 += " "+jsLF;		//13.
						//14.
//macro2 += "SAVEAS TYPE=EXTRACT FOLDER=/media/virtboxTRANSFER/virtBox_DeladeMappar/tzsD/OMX_DAG_ALLA FILE="+VAR3+"-"+VAR2+"-" + macrolist[i] + "_DAGALLA_{{!NOW:yymmdd_hhnnss}}.extract" + jsLF;
//macro2 += "SAVEAS TYPE=EXTRACT FOLDER=/media/virtboxTRANSFER/virtBox_DeladeMappar/tzsD/OMX_DAG_ALLA FILE="+VAR3 + jsLF;
//macro2 += "PAUSE" + jsLF;						//15
//////////////macro2 += "wait seconds=13" + jsLF;




retcode = iimPlay(macro2);




  if (retcode < 0) {              // an error has occured
    errtext = iimGetLastError();
    tDate = new Date();
	
	 loggol("1554::hiba::"+tDate.getFullYear()+"-"+tDate.getMonth().padLeft()+"-"
	+tDate.getDate().padLeft()+"["+tDate.getHours().padLeft()
	+":"+ tDate.getMinutes().padLeft() + ":" +tDate.getSeconds().padLeft()+"]"+
	 "errtext:"+errtext);
  }

//ss +=VAR3+";"+temp[sor] + ";"+temp[sor2] +";"+dformat+";"+temp[sor3]+"\\n" ;
/////////////retcode = iimPlay("munka javascript prg embedd.iim");


var ss=iimGetLastExtract();
ss=ss.replace(/[:]/gm,"");


//ss=ss.replace(/["]/g,"x");
//ss=ss.replace(/[x.]/g,";");
//ss=ss.replace(/(\r\n|\n|\r)/gm,"")
//alert("ss:"+ss);


var temp = new Array();
temp = ss.split("\"");
var sx=""; 
// DEBUGG nál itt lehet kiolvasni
// soronként az, hogy milyen pozicio/sorban 
// vannak az INFO
// az ii értékét kell emelni lépésenként

for (var ii=11;ii<temp.length-1;ii++)
	{
	  sx +=ii+".::"+temp[ii] +jsLF;
	}

// DEBUGG hoz, uitt kell megnézni és 
// beáűllítani azt, hogy hányadik
// sorból kel az info
  
//alert("sx:  "+sx);  

var sx=""; 
var sor;
var sor2;
var sor3;

ss="";


var d = new Date,
    dformat = [d.getFullYear(),
               (d.getMonth()+1).padLeft(),
               d.getDate().padLeft()].join('');
///////////alert(dformat);

ss="";
var ii=0;

// VÉGIG kellene mennia  az ARRAY-on ???
 for ( ii=0; ii<( (temp.length-15-1)/(10)); ii++)  //for (var ii=0;ii<2;ii++)
	{
	  sor=15+10*ii;
	  sor2=17+10*ii;
	  sor3=19+10*ii;

	  sx +=sor+". sor:"+ jsLF + temp[sor] + jsLF+temp[sor2] +jsLF+temp[sor3] +jsLF;
	  //ss +=VAR3+String.fromCharCode(92)+String.fromCharCode(34) +";"+temp[sor] + ";"+temp[sor2] +";"+temp[sor3]+"\\n" ;
	  ss +=VAR3+";"+VAR2+";"+temp[sor] + ";"+temp[sor2] +";"+dformat+";"+temp[sor3]+"\\n" ;
	}
  

		//ss=VAR3+";"+temp[sor] + ";"+temp[sor2] +";"+temp[sor3] ;

ii=ii-2;
report += VAR3+";"+VAR2+";"+ macrolist[i]+";" +ii+";db_aktie\\n";

ss=ss.replace(/[,]/gm,".");
ss=ss.replace(/[\s]/gm,"");
ss=ss.substr(0,ss.length-2);

// DEBUGG hoz, uitt kell megnézni és 
// hogy nincs-e sortöté, mert
// akkor a MAKRO elakad, mert külön
// parancsnakl értelmezi a szóköz/sortörés utáni részt


//alert("macro3 elott"+ss);  
//alert("macro3 elott"+ss.substr(ss.length-120,120));  

//exit;
macro3 =macrofejlec +"SET !EXTRACT "+String.fromCharCode(34)+ss+String.fromCharCode(34) + jsLF;  
						//macro3 +="PROMPT {{!EXTRACT}} !VAR4  " + jsLF;  
						//macro3 +="PROMPT macro3EXTRACT !VAR4"+ jsLF;  

// ALLA-ba nem kell a masodperc, perc,óra a FILEnevbe, hiszen egy napra mentünk
// rögtön mehet .csv-be

//macro3 += "SAVEAS TYPE=EXTRACT FOLDER=/media/virtboxTRANSFER/virtBox_DeladeMappar/tzsD/OMX_DAG_ALLA FILE="+VAR3+"-___"+VAR2+"___-" + macrolist[i] + "-DAGALLA_{{!NOW:yymmdd_hhnnss}}.extract" + jsLF;
macro3 += "SAVEAS TYPE=EXTRACT "+folder+" FILE="+VAR3+"-___"+VAR2+"___-" + macrolist[i] + "-DAGALLA_{{!NOW:yymmdd}}.csv" + jsLF;
//alert(macro3);

			//alert("macro3:"+macro3);  
//iimDisplay("Start macro3: ");



retcode = iimPlay(macro3);



  if (retcode < 0) {              // an error has occured
    errtext = iimGetLastError();
    tDate = new Date();
	
	 loggol("1664::hiba::"+tDate.getFullYear()+"-"+tDate.getMonth().padLeft()+"-"
	+tDate.getDate().padLeft()+"["+tDate.getHours().padLeft()
	+":"+ tDate.getMinutes().padLeft() + ":" +tDate.getSeconds().padLeft()+"]"+
	 "errtext:"+errtext);
  }


	//report += "No: " + i + "., aktie No: " + macrolist[i] +jsLF;

iimDisplay("No: " + i + ". aktie /" + macrolist.length + ", No: " + macrolist[i]  + jsLF);


}

reportOUT("OMX_ALLA_egy_napra_esti_letöltés VEGE\\n"+", "+today,"log");


reportOUT(report,"report");

function reportOUT(szoveg,filename) {
var szovegOUT=szoveg;
var dr2 = new Date,
    dr2format = [dr2.getFullYear(),
               (dr2.getMonth()+1).padLeft(),
               dr2.getDate().padLeft()].join('');
//alert(dformat);
var   dr2formatMINSS = [dr2.getHours().padLeft(),
               dr2.getMinutes().padLeft(),
               dr2.getSeconds().padLeft()].join(':');


szovegOUT=drformatMINSS+"-"+dr2formatMINSS+"\\n"+szovegOUT;
szovegOUT=szovegOUT.substr(0,szovegOUT.length-2);
macro4 =macrofejlec +"SET !EXTRACT "+String.fromCharCode(34)+szovegOUT+String.fromCharCode(34) + jsLF;  
//debug:
//macro4 +="PROMPT {{!EXTRACT}} !VAR4  " + jsLF; 

macro4 += "SAVEAS TYPE=EXTRACT "+folder+" FILE="+dr2format+"_"+dr2formatMINSS	+"_"+ filename+"{{!NOW:yymmdd}}."+filename + jsLF;
//alert(macro4);



//iimDisplay("Start macro4: ");
retcode = iimPlay(macro4);



	if (retcode < 0) 
	{              // an error has occured
	  errtext = iimGetLastError();
	  tDate = new Date();
	
	  loggol("1692::hiba::"+tDate.getFullYear()+"-"+tDate.getMonth().padLeft()+"-"
	  +tDate.getDate().padLeft()+"["+tDate.getHours().padLeft()
	  +":"+ tDate.getMinutes().padLeft() + ":" +tDate.getSeconds().padLeft()+"]"+
	  ""+errtext);
	}
 

}

}




//*************************************************************
//*************************************************************
//*************************************************************
//*************************************************************
//****************                                    *********
//****************    index_netfonds_php_hiv_in1_2    *********
//****************                                    *********
//*************************************************************
//*************************************************************
//*************************************************************
//*************************************************************



function index_netfonds_php_hiv_in1_2(){
var NAPUNK;
var csv="";
var macrolist = new Array();
var counter=0;
macrolistbetolt();
var MAX=macrolist.length;
var UTOLSOMEGVOLT=false;

const LEMENTO_PHP="http://127.0.0.1:8008/index_netfondsIGOR.php";		// lementjük a CSV-t
const NETFONDS_url= "http://www.netfonds.se/quotes/tradedump.php";
const TOKEN_url="http://127.0.0.1:8008/index_netfondsTOKEN.php";  


function getXMLHttp() {
  var XMLHttp = null;
  if (window.XMLHttpRequest) {
    try {
      XMLHttp = new XMLHttpRequest();
    } catch (e) { }
  } else if (window.ActiveXObject) {
    try {
      XMLHttp = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
      try {
        XMLHttp = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (e) { }
    }
  }
  return XMLHttp;
}

//

Number.prototype.padLeft = function(base,chr){
    var  len = (String(base || 10).length - String(this).length)+1;
    return len > 0? new Array(len).join(chr || '0')+this : this;
}
var currentTime = new Date();
var month = (currentTime.getMonth()+1).padLeft() ;
var day = currentTime.getDate().padLeft();
var year = currentTime.getFullYear();
EVHO=year+month;
EVHONAP=EVHO+day;   /*EVHONAP=EVHO+NAPUNK; */

//////////////////////var beker=prompt("Ellenőrizd a letöltendő dátumot helyes-e!",EVHONAP);
//////////////////////EVHONAP=beker;

//////////////////////alert(EVHONAP);


/* **************************************************
 *        N      N              t            f f
 *        NN     N              t           f
 *        N  N   N   l l l      t           f
 *        N   N  N   l      l  tt tt       ff f
 *        N    N N   l l l l    t           f
 *        N     NN   l          t      t    f 
 *        N      N    l l ll     t t t      f 
 * **************************************************/
function NetfondsLetolt(mit,date_, url_nf) {
	
			function handlerFunction_Netf1() {
			if ((XMLHttp_Netf1.readyState == 4) && (XMLHttp_Netf1.status == 200)) 
			{
				//
				//    window.alert("Returned data: " + XMLHttp.responseText);
				//alert(date_);
			s=XMLHttp_Netf1.responseText;
			lem(mit,s, date_, LEMENTO_PHP);
			}
			}
		
var XMLHttp_Netf1 = getXMLHttp();
			XMLHttp_Netf1.open("POST", url_nf);
			XMLHttp_Netf1.onreadystatechange = handlerFunction_Netf1;
			XMLHttp_Netf1.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			XMLHttp_Netf1.send("date="+date_+"&paper="+mit+"&csv_format=csv");
}
	

/* **********************************************
 *        l                  
 *        l                  
 *        l        l l l     
 *        l       l      l   h h h h  m m m
 *        l       l l l l    h      h       n
 *        l       l          h      h       n
 *         l l      l l ll   h      h       n
 * ********************************************* */

	

function lem( symbol_, text_, date_, url_) {
			function hF1() {
			if ((XMLHttp_F1.readyState == 4) && (XMLHttp_F1.status == 200)) 
			{
				//
				//    window.alert("Returned data: " + XMLHttp.responseText);
				//alert(XMLHttp1.status);
			s=XMLHttp_F1.responseText;
			iimDisplay("NetfondsLetolt " + (counter) +"-szor futott");
			
			if (counter<MAX) {
			counter = counter + 1;
			NetfondsLetolt(macrolist[counter],date_, NETFONDS_url);
			}
			else
			{   if (counter==MAX)   {
			        counter = counter + 1;/*   vege. DE counter MAX fölé
						kell léptetni, mert kül. örökKörbefutó lesz!
						* és mindig hívogatja Netfondsletolt-t .- és magát is
						
						MAjd így token elhelyezése
						ezt majd a nagyobbak_ajax.sh figyeli egy WHILE 
						körbefutoban a héttérben
						   */  
					//XMLHttp_Netf1.send("date="+date_+"&paper="+mit+"&csv_format=csv");	   
			        NetfondsLetolt("BEFEJEZVE_TOKEN",date_, TOKEN_url);
						
				}
			}

			//alert("counter:" +counter+ "  ;   s :"+s);	
			}
			}
		
var XMLHttp_F1 = getXMLHttp();
		XMLHttp_F1.open("POST", url_);
		XMLHttp_F1.onreadystatechange = hF1;
		XMLHttp_F1.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		XMLHttp_F1.send("symbol="+symbol_+"&text="+text_+"&date="+date_);
	
	
	
	
}




/* ************************************************************
                                     
   *                                    
   *                    *                          *
   *                    *             * *          *
   *  *     * *         *            *             *
   * *                  *            *             * 
   **       * *   * *   * **    *   ****   *   *  ***    
   **      *   *  *     *   *  *  *  *     *   *   *     
                                        
   NEM IGAZI korbefuto, mert beágyazva láncolva hivodik 
   meg a lem()  XNLHttp-ből!!!!
************************************************************* */

var varakozik=0;
var i=0;
UTOLSOMEGVOLT=false;

//MAX=4;
function korbefuto(){
	
//	alert("belement");
	//for (i=1; i<macrolist.length; i++) {
iimDisplay("NetfondsLetolt " + (counter) +"-szor futott");
			
if (counter<MAX) {

	NetfondsLetolt(macrolist[counter], EVHONAP, NETFONDS_url);

	}


}

korbefuto();
UTOLSOMEGVOLT=true;
// TOKEN kiirasa	NetfondsLetolt(macrolist[counter], EVHONAP);



function macrolistbetolt(){

macrolist.push("203.ST");
macrolist.push("24H.ST");
macrolist.push("2E.ST");
macrolist.push("ACOM.ST");

macrolist.push("ABB.ST");
macrolist.push("ASCO.ST");
macrolist.push("ACAP-A.ST");
macrolist.push("ACAP-B.ST");
macrolist.push("ADDV.ST");
macrolist.push("AFGO.ST");
macrolist.push("AKVAO.ST");
macrolist.push("ALM.ST");
macrolist.push("ALM-PREF.ST");
macrolist.push("AQ.ST");
macrolist.push("ASSA-B.ST");
macrolist.push("AUH.ST");
macrolist.push("AAK.ST");
macrolist.push("ABE.ST");
macrolist.push("ACAN-B.ST");
macrolist.push("ACCE-B.ST");
macrolist.push("ACTI.ST");
macrolist.push("ANOD-B.ST");
macrolist.push("ADDT-B.ST");
macrolist.push("AERO-B.ST");
macrolist.push("AOI.ST");
macrolist.push("AGIS.ST");
macrolist.push("AKERO.ST");
macrolist.push("AKSOO.ST");
macrolist.push("ALME.ST");
macrolist.push("ALFA.ST");
macrolist.push("ALGETAO.ST");
macrolist.push("ATEL.ST");
macrolist.push("ALNX.ST");
macrolist.push("AOIL-SDB.ST");
macrolist.push("AAGR.ST");
macrolist.push("ALPA.ST");
macrolist.push("ALPH.ST");
macrolist.push("ATO-B.ST");
macrolist.push("AMH2-B.ST");
macrolist.push("ANGL.ST");
macrolist.push("ANOT.ST");
macrolist.push("AQER.ST");
macrolist.push("ATI.ST");
macrolist.push("ARCM.ST");
macrolist.push("ARCH-B.ST");
macrolist.push("ARCHERO.ST");
macrolist.push("ARCT.ST");
macrolist.push("AWP.ST");
macrolist.push("AROC.ST");
macrolist.push("ARTI-B.ST");
macrolist.push("AODO.ST");
macrolist.push("ASP.ST");
macrolist.push("AZN.ST");
macrolist.push("ATEAO.ST");
macrolist.push("ATCO-A.ST");
macrolist.push("ATCO-B.ST");
macrolist.push("LJGR-B.ST");
macrolist.push("AUR.ST");
macrolist.push("AUSSO.ST");
macrolist.push("ALIV-SDB.ST");
macrolist.push("AZA.ST");
macrolist.push("AVEG-B.ST");
macrolist.push("AVMO.ST");
macrolist.push("AVON.ST");
macrolist.push("AVT-B.ST");
macrolist.push("AWDRO.ST");
macrolist.push("AXFO.ST");
macrolist.push("AXIS.ST");
macrolist.push("BBTO-B.ST");
macrolist.push("BEGR.ST");
macrolist.push("BTS-B.ST");
macrolist.push("BWGO.ST");
macrolist.push("BAHN-B.ST");
macrolist.push("BAKKAO.ST");
macrolist.push("BEIJ-B.ST");
macrolist.push("BEIA-B.ST");
macrolist.push("BELE.ST");
macrolist.push("BEO-SDB.ST");
macrolist.push("BRG-B.ST");
macrolist.push("BETS-B.ST");
macrolist.push("BETT.ST");
macrolist.push("BILI-A.ST");
macrolist.push("BILL.ST");
macrolist.push("BIOG-B.ST");
macrolist.push("BINV.ST");
macrolist.push("BIONORO.ST");
macrolist.push("BIAP-A.ST");
macrolist.push("BIOT.ST");
macrolist.push("BIGG-B.ST");
macrolist.push("BORG.ST");
macrolist.push("BEF-SDB.ST");
macrolist.push("PXXS-SDB.ST");
macrolist.push("BOL.ST");
macrolist.push("BONG.ST");
macrolist.push("BONO.ST");
macrolist.push("BORE.ST");
macrolist.push("BOTX.ST");
macrolist.push("BOUL.ST");
macrolist.push("BRE2.ST");
macrolist.push("BRIDGEO.ST");
macrolist.push("BRIG.ST");
macrolist.push("BWL.ST");
macrolist.push("BURE.ST");
macrolist.push("BCS.ST");
macrolist.push("BMAX.ST");
macrolist.push("CRAD-B.ST");
macrolist.push("CDON.ST");
macrolist.push("CTT.ST");
macrolist.push("CWS.ST");
macrolist.push("CAPE.ST");
macrolist.push("CASO.ST");
macrolist.push("CAST.ST");
macrolist.push("CAT-A.ST");
macrolist.push("CAT-B.ST");
macrolist.push("CATE.ST");
macrolist.push("CAOI.ST");
macrolist.push("CCC.ST");
macrolist.push("CEFO-B.ST");
macrolist.push("CEVI.ST");
macrolist.push("CPNT.ST");
macrolist.push("CEQO.ST");
macrolist.push("CHAL-B.ST");
macrolist.push("CHER-B.ST");
macrolist.push("CTEC.ST");
macrolist.push("CSN.ST");
macrolist.push("CLAS-B.ST");
macrolist.push("CLAVISO.ST");
macrolist.push("CTEH.ST");
macrolist.push("CLS-B.ST");
macrolist.push("CLA-B.ST");
macrolist.push("COA.ST");
macrolist.push("COMQ.ST");
macrolist.push("CEAB.ST");
macrolist.push("COIC.ST");
macrolist.push("CCOR-B.ST");
macrolist.push("CONF.ST");
macrolist.push("CNTA.ST");
macrolist.push("CONP-A.ST");
macrolist.push("CONP-B.ST");
macrolist.push("CONS-B.ST");
macrolist.push("COPO.ST");
macrolist.push("CORE.ST");
macrolist.push("CORE-PREF.ST");
macrolist.push("CRED-A.ST");
macrolist.push("CAS.ST");
macrolist.push("CZON-B.ST");
macrolist.push("CBA.ST");
macrolist.push("CYBE.ST");
macrolist.push("DGC.ST");
macrolist.push("DIBS.ST");
macrolist.push("XESC.ST");
macrolist.push("XSSX.ST");
macrolist.push("DNBO.ST");
macrolist.push("DNOO.ST");
macrolist.push("DORO.ST");
macrolist.push("DMAB-B.ST");
macrolist.push("DEDI.ST");
macrolist.push("DESSCO.ST");
macrolist.push("DEFL-B.ST");
macrolist.push("DELT.ST");
macrolist.push("DETNORO.ST");
macrolist.push("DIAH.ST");
macrolist.push("DIAM-B.ST");
macrolist.push("DIGN.ST");
macrolist.push("DIOS.ST");
macrolist.push("DOLPO.ST");
macrolist.push("DRIL.ST");
macrolist.push("DUNI.ST");
macrolist.push("DURC-B.ST");
macrolist.push("BLIT.ST");
macrolist.push("ECOM.ST");
macrolist.push("XMEA.ST");
macrolist.push("EMSO.ST");
macrolist.push("XEL2.ST");
macrolist.push("XEDS.ST");
macrolist.push("EVRYO.ST");
macrolist.push("EXINI.ST");
macrolist.push("ECEX.ST");
macrolist.push("ECO-B.ST");
macrolist.push("ECHEMO.ST");
macrolist.push("EKOO.ST");
macrolist.push("ELAN-B.ST");
macrolist.push("ELEC.ST");
macrolist.push("ELUX-A.ST");
macrolist.push("ELUX-B.ST");
macrolist.push("EMGSO.ST");
macrolist.push("EKTA-B.ST");
macrolist.push("ELN.ST");
macrolist.push("ELOS-B.ST");
macrolist.push("ELTO.ST");
macrolist.push("ELV.ST");
macrolist.push("EMP-B.ST");
macrolist.push("ENQ.ST");
macrolist.push("ENDO.ST");
macrolist.push("ENEA.ST");
macrolist.push("EOS.ST");
macrolist.push("ENRO.ST");
macrolist.push("ENRO-PREF.ST");
macrolist.push("ENJO-B.ST");
macrolist.push("ENZY.ST");
macrolist.push("EOLU-B.ST");
macrolist.push("EPCT.ST");
macrolist.push("EPIS-B.ST");
macrolist.push("ERIC-A.ST");
macrolist.push("ERIC-B.ST");
macrolist.push("ETX.ST");
macrolist.push("EUCI.ST");
macrolist.push("EURO.ST");
macrolist.push("EURI-B.ST");
macrolist.push("FDT.ST");
macrolist.push("XX25.ST");
macrolist.push("XFVT.ST");
macrolist.push("FXI.ST");
macrolist.push("FABG.ST");
macrolist.push("FAG.ST");
macrolist.push("FARO.ST");
macrolist.push("FPAR.ST");
macrolist.push("BALD-PREF.ST");
macrolist.push("BALD-B.ST");
macrolist.push("FEEL.ST");
macrolist.push("FIX-B.ST");
macrolist.push("FING-B.ST");
macrolist.push("FINM-B.ST");
macrolist.push("FBAB.ST");
macrolist.push("FIRE.ST");
macrolist.push("FORE.ST");
macrolist.push("FPIP.ST");
macrolist.push("FOHF-B.ST");
macrolist.push("FOEO.ST");
macrolist.push("FOPO.ST");
macrolist.push("FROO.ST");
macrolist.push("FUNCOMO.ST");
macrolist.push("FUND.ST");
macrolist.push("FF.ST");
macrolist.push("G5EN.ST");
macrolist.push("GROO.ST");
macrolist.push("GENI.ST");
macrolist.push("GENE.ST");
macrolist.push("GENO.ST");
macrolist.push("GETI-B.ST");
macrolist.push("GIM.ST");
macrolist.push("GVKO-B.ST");
macrolist.push("GJFO.ST");
macrolist.push("GHP.ST");
macrolist.push("GOGLO.ST");
macrolist.push("GJAB.ST");
macrolist.push("GUNN.ST");
macrolist.push("GHUS-B.ST");
macrolist.push("H1-B.ST");
macrolist.push("HPOL-B.ST");
macrolist.push("HMS.ST");
macrolist.push("HQ.ST");
macrolist.push("HAKN.ST");
macrolist.push("HLDX.ST");
macrolist.push("HMED.ST");
macrolist.push("HAV-B.ST");
macrolist.push("HCH.ST");
macrolist.push("HEBA-B.ST");
macrolist.push("HEDS.ST");
macrolist.push("HEMX.ST");
macrolist.push("HM-B.ST");
macrolist.push("HEXA-B.ST");
macrolist.push("HTRO.ST");
macrolist.push("HIQ.ST");
macrolist.push("HIFA-B.ST");
macrolist.push("HOLM-A.ST");
macrolist.push("HOLM-B.ST");
macrolist.push("HOME-B.ST");
macrolist.push("HUFV-A.ST");
macrolist.push("HUFV-C.ST");
macrolist.push("HUSQ-A.ST");
macrolist.push("HUSQ-B.ST");
macrolist.push("HLNGO.ST");
macrolist.push("HOGA-B.ST");
macrolist.push("IAR-B.ST");
macrolist.push("IDL-B.ST");
macrolist.push("ITAB-B.ST");
macrolist.push("IS.ST");
macrolist.push("IMPC.ST");
macrolist.push("INXL.ST");
macrolist.push("IFS-B.ST");
macrolist.push("INDU-A.ST");
macrolist.push("INDU-C.ST");
macrolist.push("INDT.ST");
macrolist.push("IPL.ST");
macrolist.push("ICTA-B.ST");
macrolist.push("ITXO.ST");
macrolist.push("IJ.ST");
macrolist.push("INVE-A.ST");
macrolist.push("INVE-B.ST");
macrolist.push("IVSO.ST");
macrolist.push("ISCO.ST");
macrolist.push("JLT.ST");
macrolist.push("JM.ST");
macrolist.push("JAYS.ST");
macrolist.push("JINO.ST");
macrolist.push("JOJK.ST");
macrolist.push("KABE-B.ST");
macrolist.push("KAN.ST");
macrolist.push("KAHL.ST");
macrolist.push("KARO.ST");
macrolist.push("KDEV.ST");
macrolist.push("KINV-A.ST");
macrolist.push("KINV-B.ST");
macrolist.push("KLIC-B.ST");
macrolist.push("KLOV.ST");
macrolist.push("KLOV-PREF.ST");
macrolist.push("KNOW.ST");
macrolist.push("KOGO.ST");
macrolist.push("KOAO.ST");
macrolist.push("KMIN-B.ST");
macrolist.push("KOPY.ST");
macrolist.push("KLED.ST");
macrolist.push("XLDX.ST");
macrolist.push("LYYN.ST");
macrolist.push("LAGR-B.ST");
macrolist.push("LAMM-B.ST");
macrolist.push("GOLD.ST");
macrolist.push("LATO-B.ST");
macrolist.push("LATF-B.ST");
macrolist.push("LLSW-B.ST");
macrolist.push("LIAB.ST");
macrolist.push("LOOM-B.ST");
macrolist.push("LOVI.ST");
macrolist.push("LUC.ST");
macrolist.push("LUCE.ST");
macrolist.push("LUND-B.ST");
macrolist.push("LUMI-SDB.ST");
macrolist.push("LUPE.ST");
macrolist.push("LUXO-SDB.ST");
macrolist.push("MQ.ST");
macrolist.push("MSC-B.ST");
macrolist.push("XAXJ.ST");
macrolist.push("XMBR.ST");
macrolist.push("XMAS.ST");
macrolist.push("XMLA.ST");
macrolist.push("XMEM.ST");
macrolist.push("XMKO.ST");
macrolist.push("XPXJ.ST");
macrolist.push("XMTW.ST");
macrolist.push("MABI.ST");
macrolist.push("MACK-B.ST");
macrolist.push("MEAB-B.ST");
macrolist.push("MANG.ST");
macrolist.push("MHGO.ST");
macrolist.push("MAXP.ST");
macrolist.push("MCAP.ST");
macrolist.push("MCOR.ST");
macrolist.push("MEDA-A.ST");
macrolist.push("MEDF.ST");
macrolist.push("MEDR-B.ST");
macrolist.push("MEPR.ST");
macrolist.push("MPEN.ST");
macrolist.push("MROX-A.ST");
macrolist.push("MROX-B.ST");
macrolist.push("MVIR-B.ST");
macrolist.push("MEKO.ST");
macrolist.push("MELK.ST");
macrolist.push("MSAB-B.ST");
macrolist.push("MICR.ST");
macrolist.push("MPOS.ST");
macrolist.push("MSON-A.ST");
macrolist.push("MSON-B.ST");
macrolist.push("MIDW-A.ST");
macrolist.push("MIDW-B.ST");
macrolist.push("MIC-SDB.ST");
macrolist.push("MII.ST");
macrolist.push("MIR.ST");
macrolist.push("MISE.ST");
macrolist.push("MOB.ST");
macrolist.push("MMG.ST");
macrolist.push("MOBI-SDB.ST");
macrolist.push("MTG-A.ST");
macrolist.push("MTG-B.ST");
macrolist.push("MORP-B.ST");
macrolist.push("MULQ.ST");
macrolist.push("MCAB-SDB.ST");
macrolist.push("NAXS.ST");
macrolist.push("NCC-A.ST");
macrolist.push("NCC-B.ST");
macrolist.push("CAMP.ST");
macrolist.push("NIBE-B.ST");
macrolist.push("NOTE.ST");
macrolist.push("NTEK-B.ST");
macrolist.push("NMAN.ST");
macrolist.push("NET-B.ST");
macrolist.push("NETG.ST");
macrolist.push("NETI-B.ST");
macrolist.push("NJOB.ST");
macrolist.push("NVP.ST");
macrolist.push("NNH.ST");
macrolist.push("NEWA-B.ST");
macrolist.push("NIS.ST");
macrolist.push("NOBI.ST");
macrolist.push("NOKI-SEK.ST");
macrolist.push("NOLA-B.ST");
macrolist.push("NDIQ.ST");
macrolist.push("NDA-SEK.ST");
macrolist.push("NEPS.ST");
macrolist.push("NLAB.ST");
macrolist.push("NOMI.ST");
macrolist.push("NOMO.ST");
macrolist.push("NSP-B.ST");
macrolist.push("NORDK.ST");
macrolist.push("NN-B.ST");
macrolist.push("NECO.ST");
macrolist.push("NHYO.ST");
macrolist.push("NSGO.ST");
macrolist.push("NAURO.ST");
macrolist.push("NASO.ST");
macrolist.push("NORO.ST");
macrolist.push("NPROO.ST");
macrolist.push("NOVE.ST");
macrolist.push("NOVU.ST");
macrolist.push("OEM-B.ST");
macrolist.push("OASM.ST");
macrolist.push("ODD.ST");
macrolist.push("OLDM.ST");
macrolist.push("OBAB.ST");
macrolist.push("OPCO.ST");
macrolist.push("OPERAO.ST");
macrolist.push("OPUS.ST");
macrolist.push("OS.ST");
macrolist.push("ORX.ST");
macrolist.push("ORI-SDB.ST");
macrolist.push("ORKO.ST");
macrolist.push("ORTI-A.ST");
macrolist.push("ORTI-B.ST");
macrolist.push("PAR.ST");
macrolist.push("PSIO.ST");
macrolist.push("PALS-B.ST");
macrolist.push("PENO.ST");
macrolist.push("PDXE.ST");
macrolist.push("PARA.ST");
macrolist.push("PART.ST");
macrolist.push("PEAB-B.ST");
macrolist.push("PETRO.ST");
macrolist.push("PGSO.ST");
macrolist.push("PFE.ST");
macrolist.push("PHAL.ST");
macrolist.push("PHON.ST");
macrolist.push("PIL-B.ST");
macrolist.push("PLED.ST");
macrolist.push("PLCSO.ST");
macrolist.push("POLY.ST");
macrolist.push("POOL-B.ST");
macrolist.push("PRCO-B.ST");
macrolist.push("PREC.ST");
macrolist.push("PCOM-B.ST");
macrolist.push("PREV-B.ST");
macrolist.push("PRIC-B.ST");
macrolist.push("PACT.ST");
macrolist.push("PROB.ST");
macrolist.push("PROE-B.ST");
macrolist.push("PROF-B.ST");
macrolist.push("PRONO.ST");
macrolist.push("PRSO.ST");
macrolist.push("QFRO.ST");
macrolist.push("QECO.ST");
macrolist.push("REHA-B.ST");
macrolist.push("RLS.ST");
macrolist.push("RNBS.ST");
macrolist.push("RAIL.ST");
macrolist.push("RAST.ST");
macrolist.push("RATO-A.ST");
macrolist.push("RATO-B.ST");
macrolist.push("RAY-B.ST");
macrolist.push("RSOF-B.ST");
macrolist.push("RABT-B.ST");
macrolist.push("REJL-B.ST");
macrolist.push("RBAB-B.ST");
macrolist.push("RECO.ST");
macrolist.push("RXTO.ST");
macrolist.push("RESP.ST");
macrolist.push("REZT.ST");
macrolist.push("RROS.ST");
macrolist.push("RCLO.ST");
macrolist.push("RUSF.ST");
macrolist.push("RURI-B.ST");
macrolist.push("RTIM-B.ST");
macrolist.push("XT21.ST");
macrolist.push("XSL2.ST");
macrolist.push("XNIF.ST");
macrolist.push("SAAB-B.ST");
macrolist.push("SAS.ST");
macrolist.push("SCV-A.ST");
macrolist.push("SCV-B.ST");
macrolist.push("SECT-B.ST");
macrolist.push("XSD2.ST");
macrolist.push("SJR-B.ST");
macrolist.push("SKF-A.ST");
macrolist.push("SKF-B.ST");
macrolist.push("SSAB-A.ST");
macrolist.push("SSAB-B.ST");
macrolist.push("SWEC-A.ST");
macrolist.push("SWEC-B.ST");
macrolist.push("SAFE.ST");
macrolist.push("SAGA-A.ST");
macrolist.push("SAGA-PREF.ST");
macrolist.push("SAND.ST");
macrolist.push("SBOK.ST");
macrolist.push("SCH-O.ST");
macrolist.push("SBXO.ST");
macrolist.push("SDRLO.ST");
macrolist.push("SEAM.ST");
macrolist.push("SECU-B.ST");
macrolist.push("SOGH.ST");
macrolist.push("SMF.ST");
macrolist.push("SEMC.ST");
macrolist.push("SDET.ST");
macrolist.push("SENS.ST");
macrolist.push("SEZI.ST");
macrolist.push("SEVDRO.ST");
macrolist.push("SEVANO.ST");
macrolist.push("SNM.ST");
macrolist.push("SHEL-B.ST");
macrolist.push("SIOFFO.ST");
macrolist.push("SIGM-B.ST");
macrolist.push("SINOO.ST");
macrolist.push("SINT.ST");
macrolist.push("SEB-A.ST");
macrolist.push("SEB-C.ST");
macrolist.push("SKA-B.ST");
macrolist.push("SKIS-B.ST");
macrolist.push("SKMO.ST");
macrolist.push("SEAB-B.ST");
macrolist.push("SMAQ-B.ST");
macrolist.push("SOF-B.ST");
macrolist.push("SOLVO.ST");
macrolist.push("SONGO.ST");
macrolist.push("SRBANKO.ST");
macrolist.push("SPOR.ST");
macrolist.push("SJOH-B.ST");
macrolist.push("SPOTRBEAR-OMXS30.ST");
macrolist.push("SPOTRBULL-OMXS30.ST");
macrolist.push("SPOTR-OMXS30.ST");
macrolist.push("STVA-B.ST");
macrolist.push("STAR.ST");
macrolist.push("STLO.ST");
macrolist.push("STIL.ST");
macrolist.push("STFY.ST");
macrolist.push("SNIO.ST");
macrolist.push("STE-A.ST");
macrolist.push("STE-R.ST");
macrolist.push("STBO.ST");
macrolist.push("SVIK.ST");
macrolist.push("SGLD-B.ST");
macrolist.push("SUBCO.ST");
macrolist.push("SVED-B.ST");
macrolist.push("SCA-A.ST");
macrolist.push("SCA-B.ST");
macrolist.push("SHB-A.ST");
macrolist.push("SHB-B.ST");
macrolist.push("SVOL-A.ST");
macrolist.push("SVOL-B.ST");
macrolist.push("SWED-PREF.ST");
macrolist.push("SWED-A.ST");
macrolist.push("SWER-OMXS30.ST");
macrolist.push("SWER-BEAR.ST");
macrolist.push("SWER-BULL2.ST");
macrolist.push("SERS-B.ST");
macrolist.push("SWMA.ST");
macrolist.push("SOBI.ST");
macrolist.push("SWOL-B.ST");
macrolist.push("SCOR-A.ST");
macrolist.push("SCOR-B.ST");
macrolist.push("SYSR.ST");
macrolist.push("TGSO.ST");
macrolist.push("TTSO.ST");
macrolist.push("TAGM-B.ST");
macrolist.push("TAUR-B.ST");
macrolist.push("TEL2-A.ST");
macrolist.push("TEL2-B.ST");
macrolist.push("TELO.ST");
macrolist.push("TLSN.ST");
macrolist.push("TETY.ST");
macrolist.push("THK-B.ST");
macrolist.push("TIEN.ST");
macrolist.push("TIGR.ST");
macrolist.push("TOMO.ST");
macrolist.push("TOWO.ST");
macrolist.push("TRAT-B.ST");
macrolist.push("TRAC-B.ST");
macrolist.push("TRAD.ST");
macrolist.push("TWW-SDB-A.ST");
macrolist.push("TWW-SDB-B.ST");
macrolist.push("TSUO.ST");
macrolist.push("TRAN-A.ST");
macrolist.push("TRAN-B.ST");
macrolist.push("GRRO.ST");
macrolist.push("TRMO.ST");
macrolist.push("TRAV-A.ST");
macrolist.push("TREL-B.ST");
macrolist.push("TAGR.ST");
macrolist.push("TRUE-B.ST");
macrolist.push("TBDY.ST");
macrolist.push("THEM.ST");
macrolist.push("E50SKA.ST");
macrolist.push("JPNSKA.ST");
macrolist.push("PACSKA.ST");
macrolist.push("USASKA.ST");
macrolist.push("WRDSKA.ST");
macrolist.push("EURSKA.ST");
macrolist.push("UNIB-SDB.ST");
macrolist.push("UFLX-B.ST");
macrolist.push("UMED.ST");
macrolist.push("UTG.ST");
macrolist.push("VBG-B.ST");
macrolist.push("1890.ST");
macrolist.push("VEIO.ST");
macrolist.push("VEND-B.ST");
macrolist.push("VRG-B.ST");
macrolist.push("VPOSO.ST");
macrolist.push("VICP.ST");
macrolist.push("VSEC.ST");
macrolist.push("VINO.ST");
macrolist.push("VIT-B.ST");
macrolist.push("VITR.ST");
macrolist.push("VOLV-A.ST");
macrolist.push("VOLV-B.ST");
macrolist.push("VNIL-SDB.ST");
macrolist.push("WALL-B.ST");
macrolist.push("WESC.ST");
macrolist.push("WINT.ST");
macrolist.push("WIHL.ST");
macrolist.push("WIKM.ST");
macrolist.push("WWASAO.ST");
macrolist.push("WWIO.ST");
macrolist.push("WISE.ST");
macrolist.push("WNT.ST");
macrolist.push("WTG.ST");
macrolist.push("XACT-BANK.ST");
macrolist.push("XACT-BASINDUSTRI.ST");
macrolist.push("XACT-BEAR.ST");
macrolist.push("XACT-BEAR-2.ST");
macrolist.push("XACT-BULL.ST");
macrolist.push("XACT-BULL-2.ST");
macrolist.push("XACT-BYGGFAST.ST");
macrolist.push("OBXEXDBEARO.ST");
macrolist.push("OBXEXDBULLO.ST");
macrolist.push("XACT-ENERGI.ST");
macrolist.push("XACT-EURO-BEAR-2.ST");
macrolist.push("XACT-EURO-BULL-2.ST");
macrolist.push("XACT-KINA.ST");
macrolist.push("XACT-KONSUMENT.ST");
macrolist.push("XACT-LAKEMEDEL.ST");
macrolist.push("XACT-NORDEN-120.ST");
macrolist.push("XACT-NORDEN-30.ST");
macrolist.push("XACT-OBLIGATION.ST");
macrolist.push("XACT-OMXS30.ST");
macrolist.push("XACT-OMXSB.ST");
macrolist.push("XACT-RAVAROR.ST");
macrolist.push("XACT-REPO.ST");
macrolist.push("XACT-VERKSTAD.ST");
macrolist.push("XANO-B.ST");
macrolist.push("XCT.ST");
macrolist.push("XTRA.ST");
macrolist.push("XVIVO.ST");
macrolist.push("YARO.ST");
macrolist.push("YILD-B.ST");
macrolist.push("ZETA.ST");
macrolist.push("ZZ-B.ST");
macrolist.push("AXIC-A.ST");
macrolist.push("XDAX.ST");
macrolist.push("XMEU.ST");
macrolist.push("XMJP.ST");
macrolist.push("XMUS.ST");
macrolist.push("XMWO.ST");
macrolist.push("SXPX.ST");
macrolist.push("XSDX.ST");
macrolist.push("XS7R.ST");
macrolist.push("XS7S.ST");
macrolist.push("XSES.ST");
macrolist.push("XSER.ST");
macrolist.push("XSPS.ST");
macrolist.push("EWRK.ST");
macrolist.push("AF-B.ST");
macrolist.push("ORES.ST");



/*

macrolist.push("AAK.ST");
macrolist.push("ABB.ST");
macrolist.push("ACTI.ST");

macrolist.push("AERO_B.ST");
macrolist.push("AF_B.ST");
macrolist.push("AKSOO.ST");
macrolist.push("ALFA.ST");
macrolist.push("ALIV_SDB.ST");
macrolist.push("AOI.ST");
macrolist.push("AOIL_SDB.ST");
macrolist.push("ARCM.ST");
macrolist.push("ASSA_B.ST");
macrolist.push("ATCO_A.ST");
macrolist.push("ATCO_B.ST");
macrolist.push("AXFO.ST");
macrolist.push("AXIS.ST");
macrolist.push("AZN.ST");
macrolist.push("BETS_B.ST");
macrolist.push("BIGG_B.ST");
macrolist.push("BILI_A.ST");
macrolist.push("BILL.ST");
macrolist.push("BINV.ST");
macrolist.push("BOL.ST");
macrolist.push("CAS.ST");
macrolist.push("CAST.ST");
macrolist.push("CDON.ST");
macrolist.push("CLS_B.ST");
macrolist.push("CTEC.ST");
macrolist.push("DIAM_B.ST");
macrolist.push("DNBO.ST");
macrolist.push("EKTA_B.ST");
macrolist.push("ELUX_B.ST");
macrolist.push("ENQ.ST");
macrolist.push("ENRO.ST");
macrolist.push("EPCT.ST");
macrolist.push("ERIC_B.ST");
macrolist.push("FABG.ST");
macrolist.push("FING_B.ST");
macrolist.push("FOEO.ST");
macrolist.push("GETI_B.ST");
macrolist.push("GJFO.ST");
macrolist.push("GOLD.ST");
macrolist.push("HEXA_B.ST");
macrolist.push("HLDX.ST");
macrolist.push("HM_B.ST");
macrolist.push("HOGA_B.ST");
macrolist.push("HOLM_B.ST");
macrolist.push("HPOL_B.ST");
macrolist.push("HUFV_A.ST");
macrolist.push("HUSQ_B.ST");
macrolist.push("IJ.ST");
macrolist.push("INDU_A.ST");
macrolist.push("INDU_C.ST");
macrolist.push("INVE_A.ST");
macrolist.push("INVE_B.ST");
macrolist.push("JM.ST");
macrolist.push("KAHL.ST");
macrolist.push("KARO.ST");
macrolist.push("KDEV.ST");
macrolist.push("KINV_B.ST");
macrolist.push("KLED.ST");
macrolist.push("LIAB.ST");
macrolist.push("LOOM_B.ST");
macrolist.push("LUMI_SDB.ST");
macrolist.push("LUND_B.ST");
macrolist.push("LUPE.ST");
macrolist.push("MEDA_A.ST");
macrolist.push("MHGO.ST");
macrolist.push("MICR.ST");
macrolist.push("MIC_SDB.ST");
macrolist.push("MTG_B.ST");
macrolist.push("MVIR_B.ST");
macrolist.push("NCC_B.ST");
macrolist.push("NDA_SEK.ST");
macrolist.push("NEWA_B.ST");
macrolist.push("NHYO.ST");
macrolist.push("NIBE_B.ST");
macrolist.push("NOBI.ST");
macrolist.push("NOKI_SEK.ST");
macrolist.push("NOMI.ST");
macrolist.push("OASM.ST");
macrolist.push("OPCO.ST");
macrolist.push("ORI_SDB.ST");
macrolist.push("ORKO.ST");
macrolist.push("PAR.ST");
macrolist.push("PEAB_B.ST");
macrolist.push("PGSO.ST");
macrolist.push("PREC.ST");
macrolist.push("RATO_B.ST");
macrolist.push("RCLO.ST");
macrolist.push("RURI_B.ST");
macrolist.push("SAAB_B.ST");
macrolist.push("SAND.ST");
macrolist.push("SAS.ST");
macrolist.push("SCA_B.ST");
macrolist.push("SCH_O.ST");
macrolist.push("SCV_B.ST");
macrolist.push("SDRLO.ST");
macrolist.push("SEB_A.ST");
macrolist.push("SECU_B.ST");
macrolist.push("SEMC.ST");
macrolist.push("SENS.ST");
macrolist.push("SHB_A.ST");
macrolist.push("SKA_B.ST");
macrolist.push("SKF_B.ST");
macrolist.push("SMF.ST");
macrolist.push("SNM.ST");
macrolist.push("SOBI.ST");
macrolist.push("SSAB_A.ST");
macrolist.push("SSAB_B.ST");
macrolist.push("STBO.ST");
macrolist.push("STE_R.ST");
macrolist.push("STLO.ST");
macrolist.push("SUBCO.ST");
macrolist.push("SWED_A.ST");
macrolist.push("SWMA.ST");
macrolist.push("TAUR_B.ST");
macrolist.push("TE.ST");
macrolist.push("TELO.ST");
macrolist.push("TGSO.ST");
macrolist.push("TLSN.ST");
macrolist.push("TREL_B.ST");
macrolist.push("UNIB_SDB.ST");
macrolist.push("VOLV_A.ST");
macrolist.push("VOLV_B.ST");
macrolist.push("XACT_BEAR.ST");
macrolist.push("XACT_BULL.ST");
macrolist.push("YARO.ST");

*/

//alert("makrolist kész");
/*NAPUNK="31";
*/
}









}





//          *********************************************       
//         ***********************************************     
//        *************************************************    
//       ***************************************************       
//      **********                                    *******      
//     ***********    index_netfonds_NAGYOBBAK        ******** 
//    ************                                    *********    
//   ***********************************************************   
//  *************************************************************  
// *************************************************************** 
//*****************************************************************

function  esti_feldolgozas() {
/* VOLT: index_netfonds_NAGYOBBAK() {*/
	
	
Number.prototype.padLeft = function(base,chr){
    var  len = (String(base || 10).length - String(this).length)+1;
    return len > 0? new Array(len).join(chr || '0')+this : this;
}
var currentTime = new Date();
var month = (currentTime.getMonth()+1).padLeft() ;
var day = currentTime.getDate().padLeft();
var year = currentTime.getFullYear();
var EVHO=year+month;
var EVHONAP=EVHO+day;
var HO_NAP=month+day;
	
	//JavaScript:xmlhttpPost("http://127.0.0.1/cgi-bin/nagyobbak_ajax.sh"
function getXMLHttp() {
  var XMLHttp = null;
  if (window.XMLHttpRequest) {
    try {
      XMLHttp = new XMLHttpRequest();
    } catch (e) { }
  } else if (window.ActiveXObject) {
    try {
      XMLHttp = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
      try {
        XMLHttp = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (e) { }
    }
  }
  return XMLHttp;
}


function XMLHttpReq_ESTI_FELODOZAS(mit,date_, url_) {
	        var ret_=""
			function handlerFunctionESTI_FELODOZAS() {
			if ((XMLHttpESTI_FELODOZAS.readyState == 4) && (XMLHttpESTI_FELODOZAS.status == 200)) 
			{
			s=XMLHttpESTI_FELODOZAS.responseText;
			//window.alert("responsetext:"+s);
			ret_=s;
			//alert("ret_:"+ret_);	
			}
			}
		
var XMLHttpESTI_FELODOZAS = getXMLHttp();
			XMLHttpESTI_FELODOZAS.open("GET", url_);
			XMLHttpESTI_FELODOZAS.onreadystatechange = handlerFunctionESTI_FELODOZAS;
			XMLHttpESTI_FELODOZAS.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			XMLHttpESTI_FELODOZAS.send("");
return ret_
}


//netfonds_NAGYOBBAK
const urlNAGYOBBAK= "http://127.0.0.1:8008/cgi-bin/nagyobbak_ajax.sh";
XMLHttpReq_ESTI_FELODOZAS("", "",urlNAGYOBBAK);

/*  UTC_zes_netfondson.sh
 * nem innen kellene meghívni, hanem a   nagyobbak_ajax.sh  
 * ból, mert akkor már elkészül a amásolás a ./nagyobbak könyvtárba 
 * ugyanis
 * ennek a ascriptnk nem kel átadni PARAMETER, csalk saját maga fut*/
/*const urlUTCzes= "http://127.0.0.1:8008/cgi-bin/UTC_zes_netfondson.sh";
ret=XMLHttpReq_ESTI_FELODOZAS("", "",urlUTCzes);*/
//	alert("ret:"+ret)


const urlTOMMA= "http://127.0.0.1:8008/cgi-bin/";
cgi="tomma_ajax.sh";
KONYV_="/var/www/omx.utc/";
mit='_UTC';
KONYVT="/var/www/omx.utc.ark/";
strURL=urlTOMMA+cgi+'?namex='+KONYV_+'&namey=orvos&namez='+mit+'&KONYVT='+KONYVT; 
ret=XMLHttpReq_ESTI_FELODOZAS("", "",strURL);

const urlTOMMA2= "http://127.0.0.1:8008/cgi-bin/";
cgi="tomma_ajax.sh";
KONYV_="/var/www/realtimedax.utc/";
mit='';
KONYVT="/var/www/realtimedax.utc.ark/";
strURL=urlTOMMA2+cgi+'?namex='+KONYV_+'&namey=orvos&namez='+mit+'&KONYVT='+KONYVT; 
ret=XMLHttpReq_ESTI_FELODOZAS("", "",strURL);

	
}











function s_feldolgozas(s_){
	var s = s_;
	
		
/*		s = s.replace(/\"/g,'');
		s = s.replace(/\//g,'');
		s = s.replace(/</g,'');
		s = s.replace(/\/div>/g,';');
		
	*/	
/*		
		s = s.replace(/tr/g,'');
		s = s.replace(/th/g,'');
		s = s.replace(/td/g,'');
		s = s.replace(/=text/g,'');
		s = s.replace(/span/g,'');
		s = s.replace(/=kurs/g,'');
		s = s.replace(/src/g,'');
		s = s.replace(/img/g,'');
		s = s.replace(/now/g,'');
		s = s.replace(/images/g,'');
		s = s.replace(/ikon/g,'');
		s = s.replace(/style/g,'');
		s = s.replace(/Realtid/g,'');
		s = s.replace(/\.gif/g,'');
		s = s.replace(/alt/g,'');
		s = s.replace(/title=/g,'');
		s = s.replace(/skurs/g,'');
		s = s.replace(/=delayicon/g,'');
		s = s.replace(/=pixel/g,'');
		s = s.replace(/=spacer/g,'');
		s = s.replace(/=/g,'');
		s = s.replace(/15min/g,'');
		s = s.replace(/15 min/g,'');
		s = s.replace(/\. fördröjning/g,'');
		s = s.replace(/Värde/g,'');
		s = s.replace(/\%/g,'');



		//s = s.replace(/\s/g,'');
		s = s.replace(/OMX/g,';OMX');
		s = s.replace(/DJ/g,';DJX');
		s = s.replace(/DAX/g,';DAX');
		s = s.replace(/OSEB/g,';OSEB');
		s = s.replace(/FTSE/g,';FTSE');
		s = s.replace(/Nasd/g,';Nasd');





		s=s.replace(/table/g,'');s=s.replace(/tbody/g,'');
		s=s.replace(/caption/g,'');s=s.replace(/imgsrc/g,'');
		s=s.replace(/class/g,'');




		n=s.split(";"); 
		for (var i=0;i<n.length;i++)
		{

			n[i]=n[i].replace(/\s{2,}/g,";");

			n[i]=n[i].replace(/\s/g,"");
			n[i]=n[i].replace(/,/g,".");
			if ((n[i].length>2)&&((n[i].indexOf(';0.00;0.00'))==-1))
				{
				  str=str+n[i]+";"+ma+";"+ido+"\n";
				}
		};

*/
return s;
} 





