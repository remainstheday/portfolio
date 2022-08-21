import{r as u}from"./chunks/index.e14ada9b.js";var p={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _=u.exports,l=Symbol.for("react.element"),c=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,m=_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function i(e,r,f){var t,o={},s=null,a=null;f!==void 0&&(s=""+f),r.key!==void 0&&(s=""+r.key),r.ref!==void 0&&(a=r.ref);for(t in r)d.call(r,t)&&!h.hasOwnProperty(t)&&(o[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps,r)o[t]===void 0&&(o[t]=r[t]);return{$$typeof:l,type:e,key:s,ref:a,props:o,_owner:m.current}}n.Fragment=c;n.jsx=i;n.jsxs=i;(function(e){e.exports=n})(p);function x(){return p.exports.jsx("img",{src:"/headshot.jpg",className:"block mx-auto",width:"150",height:"150",alt:"Trenton Kennedy at a coffee shop",onMouseEnter:e=>e.target.src="/giphy.gif",onMouseLeave:e=>e.target.src="/headshot.jpg"})}export{x as default};
