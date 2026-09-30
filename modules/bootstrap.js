/* OnlineCAD extension bootstrap
   Stable core: index.html + style.css + app.js
   New features should be isolated under /modules and loaded here.
   A module failure must not stop the core application. */
window.OnlineCADExtensions=window.OnlineCADExtensions||{};
window.OnlineCADLoadModule=function(src){
  return new Promise(resolve=>{
    const s=document.createElement("script");
    s.src=src;
    s.async=false;
    s.onload=()=>resolve({src,ok:true});
    s.onerror=()=>{console.warn("OnlineCAD module skipped:",src);resolve({src,ok:false})};
    document.head.appendChild(s);
  });
};
OnlineCADLoadModule("modules/drawing-tools.js?v=1");
OnlineCADLoadModule("modules/survey-drawing.js?v=1");
OnlineCADLoadModule("modules/survey-geometry.js?v=1");
