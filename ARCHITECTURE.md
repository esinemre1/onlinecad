# OnlineCAD Architecture

## Stable core
Do not modify these files for ordinary feature additions unless the feature truly requires a core API change:
- index.html — application shell
- style.css — stable visual design
- app.js — map, canvas, selection, drawing and persistence core

## Feature modules
Put new independent features in `modules/`.
Use one JavaScript file per feature, for example:
- modules/offset.js
- modules/dxf.js
- modules/point-list.js
- modules/layers.js
- modules/subdivision.js

`modules/bootstrap.js` is the extension loader. A failed optional module is skipped so the core can continue loading.

## Release/cache rule
Every changed CSS/JS reference must receive a new query version in index.html, e.g.:
`app.js?v=stable-2` or `modules/dxf.js?v=3`.

## Change rule
Prefer adding a module over editing app.js. Keep each feature self-contained and avoid broad search/replace changes in core files.
