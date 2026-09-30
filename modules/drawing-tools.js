(()=>{"use strict";const C=window.OnlineCADCore;if(!C)return;const drawPage=document.querySelector('.tabpage[data-page="draw"]');if(!drawPage)return;
const g=document.createElement("div");g.className="group advanced-draw";g.innerHTML='<div class="bigtools"><button data-xdraw="pline"><i>⌁</i><span>Sürekli Çizgi</span></button><button data-xdraw="rect"><i>▭</i><span>Dikdörtgen</span></button><button data-xdraw="circle"><i>○</i><span>Daire</span></button></div><em>Gelişmiş Çizim</em>';drawPage.insertAdjacentElement("afterend",g);g.dataset.page="draw";g.classList.add("tabpage");
let mode="",pts=[],mouse=null,active=false;const cv=C.canvas;
function reset(){mode="";pts=[];mouse=null;active=false;g.querySelectorAll("button").forEach(b=>b.classList.remove("active"));C.resumeCore()}
function start(m,b){reset();mode=m;active=true;C.stopCore();b.classList.add("active");C.showTip(m==="pline"?"Noktaları tıkla · Sağ tık bitir":m==="rect"?"İlk köşeyi tıkla":"Merkezi tıkla")}
function p(e){return C.snapPoint(C.fromPixel(e.offsetX,e.offsetY))}
function rect(a,b){return[{lat:a.lat,lng:a.lng},{lat:a.lat,lng:b.lng},{lat:b.lat,lng:b.lng},{lat:b.lat,lng:a.lng}]}
function circle(c,rp){const pc=C.toPixel(c),pr=C.toPixel(rp),r=Math.hypot(pr.x-pc.x,pr.y-pc.y),a=[];for(let i=0;i<64;i++){let q=C.fromPixel(pc.x+Math.cos(i*Math.PI/32)*r,pc.y+Math.sin(i*Math.PI/32)*r);a.push(q)}return a}
function click(e){if(!active)return;e.preventDefault();e.stopImmediatePropagation();let q=p(e);if(mode==="pline"){pts.push(q);C.showTip(pts.length+" nokta · Sağ tık bitir");return}if(!pts.length){pts=[q];C.showTip(mode==="rect"?"Karşı köşeyi tıkla":"Yarıçapı belirle");return}if(mode==="rect")C.addObject({type:"poly",pts:rect(pts[0],q)});else C.addObject({type:"poly",pts:circle(pts[0],q)});reset()}
function context(e){if(!active)return;e.preventDefault();e.stopImmediatePropagation();if(mode==="pline"&&pts.length>1)C.addObject({type:"line",pts:[...pts]});reset()}
function move(e){if(!active)return;mouse=p(e);if(!pts.length)return;let msg="";if(mode==="rect")msg="Karşı köşeyi tıkla";else if(mode==="circle"){let a=C.toPixel(pts[0]),b=C.toPixel(mouse);msg="Yarıçap: "+Math.hypot(b.x-a.x,b.y-a.y).toFixed(0)+" px";}else msg=pts.length+" nokta · Sağ tık bitir";C.showTip(msg)}
cv.addEventListener("click",click,true);cv.addEventListener("contextmenu",context,true);cv.addEventListener("mousemove",move,true);window.addEventListener("keydown",e=>{if(active&&e.key==="Escape"){e.stopImmediatePropagation();reset()}},true);
g.querySelectorAll("[data-xdraw]").forEach(b=>b.onclick=()=>start(b.dataset.xdraw,b));
window.OnlineCADExtensions.drawingTools={reset};
})();