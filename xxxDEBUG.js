const stopORA = 18;
const stopPERC = 6;
const stopMASODPERC=6;

const indulORA = 8;
const indulPERC = 59;
const indulMASODPERC=0;

const frissitesPERCmulva = 10;



index_netfonds_NAGYOBBAK();





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

function  index_netfonds_NAGYOBBAK() {

var urlNAGYOBBAK= "http://127.0.0.1:8008/cgi-bin/nagyobbak_ajax.sh";
	
	
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
  var XMLHttpNAGYOBBAK = null;
  if (window.XMLHttpRequest) {
    try {
      XMLHttpNAGYOBBAK = new XMLHttpRequest();
    } catch (e) { }
  } else if (window.ActiveXObject) {
    try {
      XMLHttpNAGYOBBAK = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
      try {
        XMLHttpNAGYOBBAK = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (e) { }
    }
  }

  return XMLHttpNAGYOBBAK;
}


function XMLHttpReq_DEBUG(mit,date_, url_) {
			function handlerFunctionXMLHttpDEBUG() {
//alert("belement:"+XMLHttpNAGYOBBAK.status );	

			if ((XMLHttpDEBUG.readyState == 4) && (XMLHttpDEBUG.status == 200)) 
			{
				//
				//    window.alert("Returned data: " + XMLHttp.responseText);
				//alert(date_);
			s=XMLHttpDEBUG.responseText;
			alert("XMLHttpXMLHttpDEBUG.responseText"+s);
			//lem(mit,s, date_);
			}
			}
		
var XMLHttpDEBUG = getXMLHttp();
			XMLHttpDEBUG.open("GET", url_);
			XMLHttpDEBUG.onreadystatechange = handlerFunctionXMLHttpDEBUG;
			XMLHttpDEBUG.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			XMLHttpDEBUG.send(null);
			//alert("vege   belement   send: "+XMLHttpDEBUG.status	);	

}


const urlDEBUG= "http://127.0.0.1:8008/cgi-bin/DEBUG_ajax.sh";
XMLHttpReq_DEBUG("", "", urlDEBUG);
	
}


/*
 * 
 * 
 * 
 * [Exception... "Failure"  nsresult: "0x80004005 (NS_ERROR_FAILURE)"  
 * location: "JS frame :: chrome://imacros/content/iMacros.js :: 
 * XMLHttpReq_NAGYOBBAK :: line 92"  data: no] (Error code: 991)
 * 
 * 
 * 
 * */


