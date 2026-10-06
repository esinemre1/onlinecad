/* OnlineCAD extension bootstrap — optional modules stay isolated from core. */
window.OnlineCADExtensions=window.OnlineCADExtensions||{};
window.OnlineCADLoadModule=function(src){return new Promise(resolve=>{const s=document.createElement("script");s.src=src;s.async=false;s.onload=()=>resolve({src,ok:true});s.onerror=()=>{console.warn("OnlineCAD module skipped:",src);resolve({src,ok:false})};document.head.appendChild(s)})};
(async()=>{
 await OnlineCADLoadModule("modules/drawing-tools.js?v=2");
 await OnlineCADLoadModule("modules/drawing-live.js?v=1");
 await OnlineCADLoadModule("modules/survey-drawing.js?v=2");
 await OnlineCADLoadModule("modules/survey-geometry.js?v=2");
 await OnlineCADLoadModule("modules/line-editing.js?v=2");
 await OnlineCADLoadModule("modules/point-manager.js?v=1");
 await OnlineCADLoadModule("modules/project-io.js?v=1");
 await OnlineCADLoadModule("modules/measurement-pro.js?v=1");
 await OnlineCADLoadModule("modules/snap-pro.js?v=1");
 await OnlineCADLoadModule("modules/vertex-tools.js?v=1");
 await OnlineCADLoadModule("modules/dxf-io.js?v=1");
})();
