function startUp(){
	alert("食用方法：将信息填到上方信息栏，按单元格中的“+”将信息填入单元格。填入后可按“-”删去重填。若更改周数没用请重新点一次。现在已经没有error了[撒花(只要你不把它玩坏)]。");
}
//Les=Lesson
function addLes(sBlockId,sDayNum){
	var oTestNode=document.getElementById("LesText"+sDayNum);
	if (oTestNode==null){
		var oLesInfo=document.createElement("p");
		oLesInfo.setAttribute("id","LesText"+sDayNum);
		oLesInfo.style.position="absolute";
		oLesInfo.style.left="46%";
		oLesInfo.style.top="43%";
		oLesInfo.style.margin="0";
		var sInfoNode=document.createTextNode(document.getElementById("lesson").value+","+document.getElementById("room").value+","+document.getElementById("teacher").value+","+document.getElementById("weekStart").value+"~"+document.getElementById("weekEnd").value);
		oLesInfo.appendChild(sInfoNode);
		document.getElementById(sBlockId).appendChild(oLesInfo);
	}
	else{
		document.getElementById("LesText"+sDayNum).firstChild.innerText=document.getElementById("lesson").value+","+document.getElementById("room").value+","+document.getElementById("teacher").value+","+document.getElementById("weekStart").value+"~"+document.getElementById("weekEnd").value;
	}
}
function removeLes(sDayNum){
	var sLesText=document.getElementById("LesText"+sDayNum);
	if (sLesText!=null) {
		sLesText.parentNode.removeChild(sLesText);
	}
}
//Wk=Week
function checkWk(){
	var iInWeek=parseInt(document.getElementById("WeekSelect").selectedIndex);
	for (var i=1;i<=25;i++){
		var sClassId=("LesText"+i);
		if (document.getElementById(sClassId)!==null){
			if(iInWeek!==0){
				var aClassWeek=document.getElementById(sClassId).innerHTML.split("~");
				var iEnding=parseInt(aClassWeek[1]);
				var iBeginningRev=parseInt(aClassWeek[0].split("").reverse().join(""));
				var sBeginningRev=iBeginningRev.toString();
				var iBeginning=parseInt(sBeginningRev.split("").reverse().join(""));
				if(iBeginning<=iInWeek && iInWeek<=iEnding){
					document.getElementById(sClassId).style.display="block";
				}
				else{
					document.getElementById(sClassId).style.display="none";
				}
			}
			else{
				document.getElementById(sClassId).style.display="block";
			}
		}
	}
}
function changeColor(iInColor){
	var sColorCode;
	switch(iInColor){
		case 0:
			document.getElementById("Sheet0").style.backgroundColor="#6CF";
			document.getElementById("Sheet0").style.borderColor="#39F";
			sColorCode="#0C9";
			break;
		case 1:
			document.getElementById("Sheet0").style.backgroundColor="pink";
			document.getElementById("Sheet0").style.borderColor="#F0F";
			sColorCode="#FF1493";
			break;
		case 2:
			document.getElementById("Sheet0").style.backgroundColor="#1E90FF";
			document.getElementById("Sheet0").style.borderColor="#000080";
			sColorCode="#00BFFF";
			break;
		case 3:
			document.getElementById("Sheet0").style.backgroundColor="red";
			document.getElementById("Sheet0").style.borderColor="#DC143C";
			sColorCode="#F33";
			break;
		case 4:
			document.getElementById("Sheet0").style.backgroundColor="#32CD32";
			document.getElementById("Sheet0").style.borderColor="#006400";
			sColorCode="#3FA";
			break;
		case 5:
			document.getElementById("Sheet0").style.backgroundColor="#A9A9A9";
			document.getElementById("Sheet0").style.borderColor="#000";
			sColorCode="#666";
			break;
		case 6:
			document.getElementById("Sheet0").style.backgroundColor="#FFF";
			document.getElementById("Sheet0").style.borderColor="#FFF";
			sColorCode="#FFF";
			break;
		default:
			break;
	}
	var sCj;
	for (var iCi=1;iCi<=36;iCi++){
		switch(iCi){
			case 36:
				sCj="FirstRow";
				break;
			default:
				sCj="coloring"+iCi;
				break;
		}
		document.getElementById(sCj).style.borderColor=sColorCode;
	}
}
function save(){
	var storage=window.localStorage;
	var aTempLes
	for (var iSi=1;iSi<=25;iSi++){
		var oTestingNode=document.getElementById("LesText"+iSi)
		if (oTestingNode!=null){
			aTempLes=document.getElementById("LesText"+iSi).innerText;
			storage.isi=sTempLes;
		}
	}
}
function load(){
	var storage=window.localStorage;
	for (var iSi=1;iSi<=25;iSi++){
		var oTestingNode=document.getElementById("LesText"+iSi)
		if (oTestingNode==null){
			var oLesInfo=document.createElement("p");
			oLesInfo.style.position="absolute";
			oLesInfo.style.left="46%";
			oLesInfo.style.top="43%";
			oLesInfo.style.margin="0";
			oLesInfo.setAttribute("id","LesText"+iSi);
			var sInfoString=storage.getItem("LesText"+iSi);
			document.write(sInfoString);
			oLesInfo.appendChild(sInfoString);
			document.getElementById("coloring"+iSi).appendChild(oLesInfo);
		}
	}
}