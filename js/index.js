window.onload=function(){
	//头部
	let headleftBox=document.getElementsByClassName("headleftBox");
	let headrightBox=document.getElementsByClassName("headrightBox");
	let hlBox1=document.getElementsByClassName("hlBox1")[0];
	let hlBox2=document.getElementsByClassName("hlBox2")[0];
	let hlBox3=document.getElementsByClassName("hlBox3")[0];
	let hrBox1=document.getElementsByClassName("hrBox1")[0];
	let hrBox2=document.getElementsByClassName("hrBox2")[0];
	let hrBox3=document.getElementsByClassName("hrBox3")[0];
	let hrBox4=document.getElementsByClassName("hrBox4")[0];
	for(let i=0;i<headleftBox.length;i++){
		headleftBox[0].onmouseenter=function(){
			hlBox1.style.height="240px";
			hlBox1.style.border="1px solid #ddd";
		}
		headleftBox[0].onmouseleave=function(){
			hlBox1.style.height="0";
			hlBox1.style.border="none";
		}
		headleftBox[1].onmouseenter=function(){
			hlBox2.style.height="113px";
			hlBox2.style.padding="5px 0";
			hlBox2.style.border="1px solid #ddd";
		}
		headleftBox[1].onmouseleave=function(){
			hlBox2.style.height="0";
			hlBox2.style.padding="0";
			hlBox2.style.border="none";
		}
		headleftBox[2].onmouseenter=function(){
			hlBox3.style.height="113px";
			hlBox3.style.padding="5px 0";
			hlBox3.style.border="1px solid #ddd";
		}
		headleftBox[2].onmouseleave=function(){
			hlBox3.style.height="0";
			hlBox3.style.padding="0";
			hlBox3.style.border="none";
		}
	}
	for(let i=0;i<headrightBox.length;i++){
		headrightBox[0].onmouseenter=function(){
			hrBox1.style.height="120px";
			hrBox1.style.paddingBottom="5px";
			hrBox1.style.border="1px solid #ddd";
		}
		headrightBox[0].onmouseleave=function(){
			hrBox1.style.height="0";
			hrBox1.style.paddingBottom="0";
			hrBox1.style.border="none";
		}
		headrightBox[1].onmouseenter=function(){
			hrBox2.style.height="163px";
			hrBox2.style.paddingBottom="5px";
			hrBox2.style.border="1px solid #ddd";
		}
		headrightBox[1].onmouseleave=function(){
			hrBox2.style.height="0";
			hrBox2.style.paddingBottom="0";
			hrBox2.style.border="none";
		}
		headrightBox[2].onmouseenter=function(){
			hrBox3.style.height="400px";
			hrBox3.style.paddingBottom="5px";
			hrBox3.style.border="1px solid #ddd";
		}
		headrightBox[2].onmouseleave=function(){
			hrBox3.style.height="0";
			hrBox3.style.paddingBottom="0";
			hrBox3.style.border="none";
		}
		headrightBox[3].onmouseenter=function(){
			hrBox4.style.height="220px";
			hrBox4.style.paddingBottom="5px";
			hrBox4.style.border="1px solid #ddd";
		}
		headrightBox[3].onmouseleave=function(){
			hrBox4.style.height="0";
			hrBox4.style.paddingBottom="0";
			hrBox4.style.border="none";
		}
		//侧导航
		let tab=document.getElementsByClassName("tab")[0];
		let lis=tab.getElementsByTagName("li");
		let asideBox1=tab.getElementsByClassName("asideBox1");
		// console.log(lis,asideBox1);
		for(let i=0;i<lis.length;i++){
			lis[i].onmouseenter=function(){
				for(let j=0;j<lis.length;j++){
					asideBox1[j].style.display="none";
				}
				asideBox1[i].style.display="block";
				asideBox1[i].style.border="1px solid #000";
			}
			lis[i].onmouseleave=function(){
				asideBox1[i].style.display="none";
			}
		}
	}

	//banner
	let bannerimg=document.querySelector(".bannerimg");
	let lis1=bannerimg.querySelectorAll("li");
	let btn=document.querySelectorAll(".btn li");
	let bannerkeyl=document.querySelector(".bannerkeyl");
	let bannerkeyr=document.querySelector(".bannerkeyr");
	// console.log(bannerimg,lis1,btn,bannerkeyr,bannerkeyl)
	let current=0;
	let t=setInterval(move,3000);
	lis1[0].style.zIndex=10;
	btn[0].className="btn-hot";
	bannerimg.onmouseenter=function(){
		clearInterval(t);
	}
	bannerimg.onmouseleave=function(){
		t=setInterval(move,3000);
	}
	bannerkeyl.onclick=function(){
		lastMove();
	}
	bannerkeyr.onclick=function(){
		move();
	}
	for(let i=0;i<btn.length;i++){
		btn[i].onclick=function(){
			lis1.forEach(function(e){
				e.style.zIndex=5;
			})
			btn.forEach(function(e){
				e.className="";
			})
			lis1[i].style.zIndex=10;
			btn[i].className="btn-hot";
			current=i;
		}
	}
	function move(){
		current++;
		if(current==lis1.length){
			current=0;
		}
		lis1.forEach(function(e){
			e.style.zIndex=5;
		})
		btn.forEach(function(e){
			e.className="";
		})
		lis1[current].style.zIndex=10;
		btn[current].className="btn-hot";
	}
	function lastMove(){
		current--;
		if(current<0){
			current=lis1.length-1;
		}
		lis1.forEach(function(e){
			e.style.zIndex=5;
		})
		btn.forEach(function(e){
			e.className="";
		})
		lis1[current].style.zIndex=10;
		btn[current].className="btn-hot";
	}
}