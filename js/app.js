!function(){"use strict";var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=(function(){function u(e){this.value=e}function e(i){var r,a;function s(e,t){try{var n=i[e](t),o=n.value;o instanceof u?Promise.resolve(o.value).then(function(e){s("next",e)},function(e){s("throw",e)}):l(n.done?"return":"normal",n.value)}catch(e){l("throw",e)}}function l(e,t){switch(e){case"return":r.resolve({value:t,done:!0});break;case"throw":r.reject(t);break;default:r.resolve({value:t,done:!1})}(r=r.next)?s(r.key,r.arg):a=null}this._invoke=function(o,i){return new Promise(function(e,t){var n={key:o,arg:i,resolve:e,reject:t,next:null};a?a=a.next=n:(r=a=n,s(o,i))})},"function"!=typeof i.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(e.prototype[Symbol.asyncIterator]=function(){return this}),e.prototype.next=function(e){return this._invoke("next",e)},e.prototype.throw=function(e){return this._invoke("throw",e)},e.prototype.return=function(e){return this._invoke("return",e)}}(),function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}),i=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),N=0,k=3,l="http://www.w3.org/1999/xlink",u="http://www.w3.org/2000/svg",r={},a=[];function w(e,t){var n={};for(var o in e)n[o]=e[o];for(var i in t)n[i]=t[i];return n}function s(e){return!Array.isArray(e)&&"object"===(void 0===e?"undefined":c(e))}var f=function e(){o(this,e),this.message="Cannot insert Fragment tag directly into DOM.",this.toString=function(){return this.message}};function d(e,t,n,o,i,r){return{type:e,props:t,children:n,element:o,key:i,flag:r}}function h(e,t){return d(e,r,a,t,null,k)}function p(e){return d(e.nodeName.toLowerCase(),r,a.map.call(e.childNodes,t),e,null,N)}function t(e){return 3===e.nodeType?h(e.nodeValue,e):p(e)}function m(e,t){for(var n=void 0,o=[],i=[],r=arguments.length,a=Array(2<r?r-2:0),s=2;s<r;s++)a[s-2]=arguments[s];for(var l=a.length,u=(t=t||{}).key;0<l--;)o.push(a[l]);for(null!=t.children&&(o.length<=0&&o.push(t.children),delete t.children);0<o.length;)if(Array.isArray(n=o.pop()))for(l=n.length;0<l--;)o.push(n[l]);else!1===n||!0===n||null==n||i.push("object"===(void 0===n?"undefined":c(n))?n:h(n));return delete t.key,"function"==typeof e?e(t,t.children=i):d(e,t,i,null,u,1)}function y(e){return e.currentTarget.events[e.type](e)}function S(e){return null==e?null:e.key}function _(e,t,n,o,i){if("style"!==t||"object"!==(void 0===o?"undefined":c(o))||Array.isArray(o)){if("key"!==t)if("className"===t&&(t="class"),"o"===t[0]&&"n"===t[1])e.events||(e.events={}),null==(e.events[t=t.slice(2).toLowerCase()]=o)?e.removeEventListener(t,y):null==n&&e.addEventListener(t,y);else{var r=null==o||!1===o||"no"===o||"off"===o;t in e&&"list"!==t&&"type"!==t&&"draggable"!==t&&"spellcheck"!==t&&"translate"!==t&&!i?(e[t]=null==o?"":o,r&&e.removeAttribute(t)):"xlink-href"===t||"xlinkHref"===t?(e.setAttributeNS(l,"href",o),e.setAttribute("href",o)):r?e.removeAttribute(t):e.setAttribute(t,o)}}else for(var a in w(n,o)){var s=null==o||null==o[a]?"":o[a];"-"===a[0]?e[t].setProperty(a,s):e[t][a]=s}}function M(e,t,n){var o=void 0;o=e.flag===k?document.createTextNode(e.type):(n=n||"svg"===e.type)?document.createElementNS(u,e.type):document.createElement(e.type);var i=e.props;i.onmount&&t.push(function(){i.onmount(o)});for(var r=0,a=e.children.length;r<a;r++)o.appendChild(M(e.children[r],t,n));for(var s in i)_(o,s,null,i[s],n);return e.element=o}function x(e,t){function n(){e&&e.nodeType&&e.removeChild(function e(t){for(var n=0,o=t.children.length;n<o;n++)e(t.children[n]);return t.element}(t))}var o=t.props&&t.props.onunmount;null!=o?o(n,t.element):n()}function A(e,t,n,o,i,r){if(o===n);else if(null!=n&&n.flag===k&&o.flag===k)n.type!==o.type&&(t.nodeValue=o.type);else if(null==n||n.type!==o.type){var a=e.insertBefore(M(o,i,r),t);null!=n&&x(e,n),t=a}else{!function(e,t,n,o,i,r){for(var a in w(t,n))("value"===a||"checked"===a?e[a]:t[a])!==n[a]&&_(e,a,t[a],n[a],i);var s=r?n.onmount:n.onupdate;null!=s&&o.push(function(){s(e,t,n)})}(t,n.props,o.props,i,r=r||"svg"===o.type,n.flag===N);for(var s=void 0,l=void 0,u=void 0,c=n.children,f=0,d=c.length-1,h=void 0,p=o.children,m=0,y=p.length-1;m<=y&&f<=d&&(u=S(c[f]),h=S(p[m]),null!=u&&u===h);)A(t,c[f].element,c[f],p[m],i,r),f++,m++;for(;m<=y&&f<=d&&(u=S(c[d]),h=S(p[y]),null!=u&&u===h);)A(t,c[d].element,c[d],p[y],i,r),d--,y--;if(d<f)for(;m<=y;)t.insertBefore(M(p[m++],i,r),(l=c[f])&&l.element);else if(y<m)for(;f<=d;)x(t,c[f++]);else{for(var v=function(e,t,n){for(var o={},i=void 0,r=void 0;t<=n;t++)null!=(i=(r=e[t]).key)&&(o[i]=r);return o}(c,f,d),g={};m<=y;)u=S(l=c[f]),h=S(p[m]),g[u]||null!=h&&h===S(c[f+1])?(null==u&&x(t,l),f++):null==h||n.flag===N?(null==u&&(A(t,l&&l.element,l,p[m],i,r),m++),f++):(u===h?(A(t,l.element,l,p[m],i,r),g[h]=!0,f++):null!=(s=v[h])?(A(t,t.insertBefore(s.element,l&&l.element),s,p[m],i,r),g[h]=!0):A(t,l&&l.element,null,p[m],i,r),m++);for(;f<=d;)null==S(l=c[f++])&&x(t,l);for(var b in v)null==g[b]&&x(t,v[b])}}return o.element=t,o}function v(e,t,n){"string"==typeof n&&(n=document.querySelector(n));var o=[];if(A(n,n.children[0],t,e,o),e!==t)for(;0<o.length;)o.pop()();return e}var n=(new Date).getTime().toString(16),g=function(){function t(e){o(this,t),e||(e={}),this.props=e,this.selector=e.container||"body",e.render&&(this.render=e.render),e.state&&(this.state=e.state),this.selector&&(this.container=document.querySelector(this.selector)),this.currentVNode=null,this.componentShouldUpdate=!0,this.isMounted=!1,this.element=null,this.hydrate=e.hydrate||null,e.componentWillMount&&(this.componentWillMount=e.componentWillMount),e.componentDidMount&&(this.componentDidMount=e.componentDidMount),e.componentWillUpdate&&(this.componentWillUpdate=e.componentWillUpdate),e.componentDidUpdate&&(this.componentDidUpdate=e.componentDidUpdate),e.componentWillUnmount&&(this.componentWillUnmount=e.componentWillUnmount)}return i(t,[{key:"noop",value:function(){}},{key:"componentWillMount",value:function(e){e&&"function"==typeof e&&e.call(e,this)}},{key:"componentDidMount",value:function(){this.noop()}},{key:"componentWillUpdate",value:function(e){e&&"function"==typeof e&&e.call(e,this)}},{key:"componentDidUpdate",value:function(){this.noop()}},{key:"componentWillUnmount",value:function(e){e&&"function"==typeof e&&e.call(e,this)}},{key:"render",value:function(e){return e}},{key:"setState",value:function(e){if("function"==typeof e){var t=void 0;t=s(this.state)?w(r,this.state):Array.isArray(this.state)?a.concat(a,this.state):this.state;var n=e.call(this,t);n&&(this.state=n)}else if(s(this.state)&&s(e)){var o=w(this.state,e);this.state=o}else this.state=e}},{key:"update",value:function(e){if(this.render&&(this.componentShouldUpdate||!this.isMounted)){var t=this.state;!0!==e&&e&&(t=e),this.container&&"string"==typeof this.container&&(this.selector=this.container,this.container=document.querySelector(this.container)),this.hydrate&&!this.isMounted&&("string"==typeof this.hydrate&&(this.hydrate=document.querySelector(this.hydrate)),this.currentVNode=p(this.hydrate));var n,o,i=this.render(t),r=this;if(!this.isMounted)return this.currentVNode?(this.oldVNode=i,this.currentVNode=v(i,this.currentVNode,this.container),this.element=this.currentVNode.element,this.isMounted=!0,this.componentDidMount()):this.componentWillMount(function(){r.oldVNode=i,r.currentVNode=function(e,t,n){"string"==typeof t&&(t=document.querySelector(t)),t||(t=document.body);var o=[];if(Array.isArray(e))throw new f;for(n?("string"==typeof n&&(n=document.querySelector(n)),v(e,p(n),t)):e=v(e,null,t),e.element.isMounted=!0;0<o.length;)o.pop()();return e}(i,r.container),r.element=r.currentVNode.element,r.isMounted=!0,r.componentDidMount()}),void(this.container&&1===this.container.nodeType||console.error("The container for this class component is not a valid DOM node. Check the selector provided for the class to make sure it is a valid CSS selector and that the container exists in the DOM. You might be targeting a nonexistent node."));if(n=i,o=this.oldVNode,JSON.stringify(n)!==JSON.stringify(o))this.componentWillUpdate(function(){r.oldVNode=r.render(t),r.currentVNode=v(i,r.currentVNode,r.container),r.element=r.currentVNode.element,r.isMounted=!0,r.componentDidUpdate()})}}},{key:"unmount",value:function(){if(this.element){var t=this;this.componentWillUnmount(function(){for(var e in t.container.removeChild(t.element),t)delete t[e];t.__proto__=null})}}},{key:"state",get:function(){return this[n]},set:function(e){var t=this;this[n]=e,setTimeout(function(){return t.update()},1e3/60)}}]),t}(),e=new g({container:"header",render:function(e){return m("nav",null,m("i",{className:"fa fa-film fa-2x text-white my-auto"}),m("h1",null,"Composi ",e))}}),b={starsInner:{width:"110px"},starsEmptyInner:{position:"absolute",width:"110px"},starsOuter:{overflow:"hidden"},star:{padding:"1px"}},U=function(e){var t,n={width:(t=e.rating,Math.floor(110*t/5)+"px")};return m("div",null,m("div",{style:b.starsOuter},m("div",{style:n},m("div",{style:b.starsEmptyInner},m("i",{className:"fa fa-star-o fa-lg",style:b.star}),m("i",{className:"fa fa-star-o fa-lg",style:b.star}),m("i",{className:"fa fa-star-o fa-lg",style:b.star}),m("i",{className:"fa fa-star-o fa-lg",style:b.star}),m("i",{className:"fa fa-star-o fa-lg",style:b.star})),m("div",{style:b.starsInner},m("i",{className:"fa fa-star fa-lg",style:b.star}),m("i",{className:"fa fa-star fa-lg",style:b.star}),m("i",{className:"fa fa-star fa-lg",style:b.star}),m("i",{className:"fa fa-star fa-lg",style:b.star}),m("i",{className:"fa fa-star fa-lg",style:b.star})))))},V=function(e){return m("div",{className:"movie-card"},m("div",{className:"movie-card card"},m("img",{className:"card-img-top",src:e.movie.imageUrl,alt:""}),m("div",{className:"card-body"},m("h4",{className:"card-title"},e.movie.title),m("h6",{className:"card-subtitle mb-2 text-muted"},e.movie.subtitle),m("p",{className:"text-justify",style:{fontSize:"14px"}},e.movie.description)),m("div",{className:"card-footer"},m("div",{className:"clearfix"},m("div",{className:"float-left mt-1"},m(U,{rating:e.movie.rating})),m("div",{className:"card-footer-badge float-right badge badge-primary badge-pill"},e.movie.rating)))))},W=function(e){return m("div",null,m("div",{className:"card-deck"},e.movies.map(function(e){return m(V,{key:e.id,movie:e})})))},j=[{id:100,title:"Kingsglaive",subtitle:"Final Fantasy XV",description:"King Regis, who oversees the land of Lucis, commands his army of soldiers to protect the kingdom from the Niflheim empire's plans to steal the sacred crystal.",year:2016,imageUrl:"../images/Kingsglaive_Final_Fantasy_XV.jpg",rating:4.5},{id:200,title:"Final Fantasy",subtitle:"Spirits Within",description:"A scientist makes a last stand on Earth with the help of a ragtag team of soldiers against an invasion of alien phantoms.",year:2001,imageUrl:"../images/Final_Fantasy_Spirits_Within.jpg",rating:4.5},{id:300,title:"Ghost In The Shell",subtitle:"Ghost In The Shell",description:"A hacker known as the Puppet Master is hunted by a female cyborg cop and her partner. This film is a revised version of Ghost in the Shell (1995).",year:2008,imageUrl:"../images/Ghost_In_The_Shell_2_0.jpg",rating:5},{id:400,title:"Appleseed Alpha",subtitle:"Appleseed Alpha",description:"A young female soldier Deunan and her cyborg partner Briareos survive through the post World War 3 apocalyptic New York in search of human's future hope, the legendary city of Olympus.",year:2014,imageUrl:"../images/Appleseed_Alpha.jpg",rating:3.8},{id:500,title:"Resident Evil",subtitle:"Vendetta",description:"Chris Redfield enlists the help of Leon S. Kennedy and Rebecca Chambers to stop a death merchant, with a vengeance, from spreading a deadly virus in New York.",year:2014,imageUrl:"../images/Resident_Evil_Vendetta.jpg",rating:4.2}],D=function(){function e(){o(this,e)}return i(e,null,[{key:"getMovies",value:function(){return j}}]),e}(),O=function(e){function n(e){o(this,n);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.container="section",t.state={movies:[]},t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,g),i(n,[{key:"componentDidMount",value:function(){this.setState(function(){return{movies:D.getMovies()}})}},{key:"render",value:function(){return m("div",{className:"container-fluid",style:{marginLeft:"-15px"}},m("div",{className:"d-flex flex-row"},m("div",{className:"col-sm-12"},m(W,{movies:this.state.movies}))))}}]),n}();e.setState("Movie Cards"),new O}();
//# sourceMappingURL=app.js.map
