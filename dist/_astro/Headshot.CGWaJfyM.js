import{r as u}from"./index.DhYZZe0J.js";var f={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _=u,l=Symbol.for("react.element"),c=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,d=_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function i(t,e,a){var r,o={},s=null,p=null;a!==void 0&&(s=""+a),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(p=e.ref);for(r in e)m.call(e,r)&&!h.hasOwnProperty(r)&&(o[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)o[r]===void 0&&(o[r]=e[r]);return{$$typeof:l,type:t,key:s,ref:p,props:o,_owner:d.current}}n.Fragment=c;n.jsx=i;n.jsxs=i;f.exports=n;var x=f.exports;function v(){return x.jsx("img",{src:"/headshot.jpg",className:"block mx-auto",width:"150",height:"150",alt:"Trenton Kennedy at a coffee shop",onMouseEnter:t=>t.target.src="/giphy.gif",onMouseLeave:t=>t.target.src="/headshot.jpg"})}export{v as default};
