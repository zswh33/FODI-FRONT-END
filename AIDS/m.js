var page=1,allpage=9;
var sy=0,yc=0;
function load(){
	touch=document.getElementById("touch");//取监听对象
	touch.addEventListener("touchend", te,false);//触摸结束监听
	touch.addEventListener("touchstart", ts,false);//触摸开始监听
	touch.addEventListener("touchmove", tm,false);//
	touch.addEventListener("mousewheel", mw,false);
	document.getElementById("touch").onmousedown=function (e){
		var e=e||event;
		sy=e.clientY;
	}
	document.getElementById("touch").onmouseup=function (e){
		var e=e||event;
		yc=e.clientY-sy;
		console.log(yc);
		pc();
	}
//	setTimeout(function (){
		document.getElementById("loading").style.display="none";//加载界面隐
//	},700);
	window.onresize=function(){
		ui_load();
	}
	ui_load();
	psu();
	setTimeout(
		function(){
			pagein_load(page,1);
		},500);
	console.log("制作：网工19-1 YP");
	console.log("图片：网络");
	console.log("感谢观看");
	console.log("-----------------");
	console.log("-----------------");
	console.log("----(°v 。)------");
	console.log("-----------------");
	console.log("-----wg19133-----");
	
}
function ui_load(){
	var bili=screen.width/screen.height;
	var gfp=1080/1920;dfp=768/1024;
	console.log(bili+"  "+gfp+"  "+dfp);
	if(bili>=dfp){
		document.getElementById("mf").style.width=(768/1024*document.getElementById("mf").offsetHeight)+"px";
		document.getElementById("mf").style.marginLeft=(document.getElementById("bo").offsetWidth-document.getElementById("mf").offsetWidth)/2+"px";
		//ui_dfp();
	}else if(Math.abs(bili-gfp)>Math.abs(bili-dfp)){
		ui_gfp();
		document.getElementById("mf").style.width="100%";
	}else{
		ui_gfp();
		document.getElementById("mf").style.width="100%";
	}
}
function ui_gfp(){
	ui_cn_c("text_p","text_p2");
	ui_cn_c("text_t","text_t2");
	ui_cn_c("text_ps","text_ps2");
}

function ui_cn_c(wc,tc){
	var q=document.getElementsByClassName(wc);
	for(var i=0;i<q.length;i++){
		var t;
		t=q[i].className;
		q[i].className=t+" "+tc;
	}
}
function te(e){
	var q=getxy(e);
	yc=q[0]-sy;
	pc();
}
function ts(e){
	console.log(e);
	var q=getxy(e);
	sy=q[0];
}
function tm(e){

}
function mw(e){
	if(e.wheelDelta>0){
		yc=1;
	}else{
		yc=-1;
	}
	pc();
}

function pc(){
	if(yc>0){
		//上一页
		if(page-1>0 && page<=allpage){
			document.getElementById("page"+(page-1)).style.opacity=1;
			page--;
			pagein_load(page+1,0);
		}
	}else{
		//下一页
		if(page!=allpage){
			document.getElementById("page"+page).style.opacity=0;
			page++;
			pagein_load(page-1,0);
		}
	}
	setTimeout(
		function(){
			pagein_load(page,1);
		},500);
		
	psu();
}

function psu(){//页数更新
	document.getElementById("page_show").innerHTML=page+"/"+allpage;
	document.getElementById("ttt").innerHTML=page+"/"+allpage+" 知艾防艾，青春无艾";
}
function getxy(e){
	var q=new Array();
	//q[0]=e.touches[0].pageX;
	q[0]=e.changedTouches[0].pageY;
	return q;
}

function dh2(dxn,zt){
	var dx;
	var to="1em",op="0";
	dx=document.getElementById(dxn);
	if(zt==1){
		to="0px";
		op="1";
	}
	dx.style.paddingTop=to;
	dx.style.opacity=op;
}

function pagein_load(page,zt){
	switch (page){
		case 0:
			break;
		case allpage+1:
			break;
		case 1:
			p1a=document.getElementById("p1author");
			p1zs=document.getElementById("p1zs");//指示
			if(zt==1){
				p1a.style.opacity="1";
				p1zs.style.opacity="1";
			}else{
				p1zs.style.opacity="0";
				p1a.style.opacity="0";
			}
			dh2("p1title",zt);
			dh2("p1img",zt);
			break;
		//第二页--------------------------------
		case 2:
			if(zt==1){
				
			}else{
				
			}
			dh2("p2title",zt);
			dh2("p2text",zt);
			break;
		//第二页--------------------------------
		case 3:
			if(zt==1){
				document.getElementById("page_show").style.color="white";
			}else{
				
			}
			dh2("p3title",zt);
			dh2("p3c1",zt);
			dh2("p3c2",zt);
			dh2("p3c3",zt);
			break;
		//第三页--------------------------------
		case 4:
			if(zt==1){
				
			}else{
				document.getElementById("page_show").style.color="black";
			}
			dh2("p4title",zt);
			dh2("p4text",zt);
			break;
		case 5:
			if(zt==1){
				
			}else{
				
			}
			dh2("p5title",zt);
			dh2("p5text",zt);
			break;
		case 6:
			if(zt==1){
				
			}else{
				
			}
			dh2("p6title",zt);
			dh2("p6text",zt);
			dh2("p6img1",zt);
			dh2("p6img2",zt);
			break;
		case 7:
			if(zt==1){
				document.getElementById("page_show").style.color="white";
			}else{
				document.getElementById("page_show").style.color="black";
			}
			dh2("p7title",zt);
			dh2("p7text",zt);
			break;
		case 8:
			if(zt==1){
				
			}else{
				
			}
			dh2("p8title",zt);
			dh2("p8text",zt);
			break;
		case 9:
			p9a=document.getElementById("p9author");
			if(zt==1){
				p9a.style.opacity="1";
			}else{
				p1a.style.opacity="0";
			}
			dh2("p9title",zt);
			dh2("p9text",zt);
			dh2("p9text2",zt);
			dh2("p9img",zt);
			break;
		default:
	}
	
}
