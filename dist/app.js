!function(l){function e(e){for(var t,n,a=e[0],r=e[1],u=e[2],o=0,i=[];o<a.length;o++)n=a[o],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&i.push(s[n][0]),s[n]=0;for(t in r)Object.prototype.hasOwnProperty.call(r,t)&&(l[t]=r[t]);for(d&&d(e);i.length;)i.shift()();return p.push.apply(p,u||[]),c()}function c(){for(var e,t=0;t<p.length;t++){for(var n=p[t],a=!0,r=1;r<n.length;r++){var u=n[r];0!==s[u]&&(a=!1)}a&&(p.splice(t--,1),e=o(o.s=n[0]))}return e}var n={},s={0:0},p=[];function o(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return l[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=l,o.c=n,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var t=window.webpackJsonp=window.webpackJsonp||[],a=t.push.bind(t);t.push=e,t=t.slice();for(var r=0;r<t.length;r++)e(t[r]);var d=a;p.push([196,1]),c()}({196:function(e,t,n){e.exports=n(356)},206:function(e,t,n){},207:function(e,t,n){},208:function(e,t,n){},324:function(e,t,n){},325:function(e,t,n){},326:function(e,t,n){},356:function(e,t,n){"use strict";n.r(t);var a=n(0),u=n.n(a),r=n(33),o=n(46),i=n(20),l=(n(205),n(206),n(207),n(4)),c=n.n(l),s=n(39);function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,a)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach(function(e){m(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){var n=0<arguments.length&&void 0!==e?e:b,a=1<arguments.length&&void 0!==t?t:{};switch(a.type){case v:return d({},n,{input:a.inputValue});case E:return d({},n,{username:a.username,avatar:a.avatar,logged:!0});case y:return d({},n,{logged:!1,displayResults:!1});case O:return d({},n,{searchInput:a.inputSearch});case q:return d({},n,{repoResults:a.repoResults,loading:!0});case j:return d({},n,{loading:!1,displayResults:!0});default:return n}}function g(e){var t=e.inputValue,n=e.changeInput,a=e.sendToken;return u.a.createElement(S.a,{onSubmit:function(e){e.preventDefault(),0<t.length&&a(t)}},u.a.createElement(S.a.Field,null,u.a.createElement("label",{htmlFor:"inputToken"},"Formulaire de connexion"),u.a.createElement("input",{type:"password",id:"inputToken",value:t,onChange:function(e){var t=e.target.value;n(t)}})))}var b={input:"",token:"",logged:!1,searchInput:"",loading:!1,repoResults:null,displayResults:!1},v="CHANGE_INPUT",h="ACTUAL_TOKEN",E="LOG_USER",y="USER_LOGOUT",O="CHANGE_INPUT_SEARCH",R="SEARCH_RESULTS",q="HANDLE_RESULTS",j="STOP_LOADING",S=n(366);n(208);g.propTypes={inputValue:c.a.string.isRequired,changeInput:c.a.func.isRequired,sendToken:c.a.func.isRequired};function I(e){var t=e.username,n=e.avatar,a=e.handleLogout;return u.a.createElement("div",{id:"welcome"},u.a.createElement(_.a,null,u.a.createElement(P.a,{src:n,wrapped:!0,ui:!1}),u.a.createElement(_.a.Content,null,u.a.createElement(_.a.Header,null,t)),u.a.createElement(x.a,{onClick:a},"Se déconnecter")))}var w=g,T=Object(i.b)(function(e){return{inputValue:e.input}},function(t){return{changeInput:function(e){t({type:v,inputValue:e})},sendToken:function(e){t({type:h,actualToken:e})}}})(w),_=n(368),P=n(184),x=n(357);n(324);I.propTypes={username:c.a.string.isRequired,avatar:c.a.string.isRequired,handleLogout:c.a.func.isRequired};function k(e){var t=e.searchInput,n=e.loading,a=e.onInputChange,r=e.handleInputSubmit;return u.a.createElement("form",{onSubmit:function(e){e.preventDefault(),r()}},u.a.createElement(A.a,{onChange:function(e){a(e.target.value)},value:t,loading:n,placeholder:"Search..."}))}var C=I,D=Object(i.b)(function(e){return{username:e.username,avatar:e.avatar}},function(e){return{handleLogout:function(){e({type:y})}}})(C),A=n(365);k.propTypes={loading:c.a.bool.isRequired,searchInput:c.a.string.isRequired,onInputChange:c.a.func.isRequired,handleInputSubmit:c.a.func.isRequired};function L(e){var t=e.repoResults;return u.a.createElement(_.a.Group,null,t.map(function(e){return u.a.createElement(_.a,{key:e.id},u.a.createElement(P.a,{src:e.owner.avatar_url,wrapped:!0,ui:!1}),u.a.createElement(_.a.Content,null,u.a.createElement(_.a.Header,null,e.name),u.a.createElement(_.a.Meta,null,e.owner.login),u.a.createElement(_.a.Description,null,e.description)))}))}var N=k,M=Object(i.b)(function(e){return{loading:e.loading,searchInput:e.searchInput}},function(t){return{onInputChange:function(e){t({type:O,inputSearch:e})},handleInputSubmit:function(){console.log("coucou je suis le submit"),t({type:R})}}})(N);L.propTypes={repoResults:c.a.array.isRequired};function U(e){var t=e.displayResults;return u.a.createElement(u.a.Fragment,null,u.a.createElement(M,null),t&&u.a.createElement(G,null))}var H=L,G=Object(i.b)(function(e){return{repoResults:e.repoResults}},{})(H);U.propTypes={displayResults:c.a.bool.isRequired};function V(){return u.a.createElement("div",{id:"presentation"},u.a.createElement("img",{src:"#",alt:"presentationImage"}),u.a.createElement("p",null,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae numquam odio fugiat modi, ipsam aperiam quasi rerum! Iste, nulla? Deleniti sed optio id, praesentium placeat porro! Quo quidem cumque repudiandae fuga ea ratione tenetur consequatur velit! Nobis, ducimus odit repellendus earum neque cum beatae. Autem explicabo eligendi voluptate iusto praesentium tenetur laborum tempora earum deserunt est blanditiis, corporis distinctio inventore saepe veniam, quas repudiandae neque, eaque adipisci! Doloribus laborum earum voluptatem, deserunt voluptates mollitia sapiente ex illo, nulla quia odio reprehenderit tempore eveniet, nostrum velit fugiat dolores ad. Necessitatibus ex quidem illo magnam omnis ducimus eligendi a voluptate magni nulla explicabo culpa impedit voluptatibus molestiae harum accusantium, voluptas, hic iure in ullam! Minus, asperiores atque eveniet dolore consequuntur explicabo ipsum laudantium velit non distinctio repudiandae architecto, voluptates veniam officia omnis libero? Esse doloremque, praesentium laudantium eius corporis dolore totam at enim ratione incidunt id corrupti, et rerum laboriosam tempore. Mollitia, perferendis sequi dolorem laboriosam in voluptate ipsa atque, iste molestiae quod temporibus quos, non placeat adipisci delectus. Illo velit architecto cumque expedita sed natus harum asperiores ab provident assumenda officia animi, et minus nisi distinctio, laborum aspernatur ex fuga. Ipsa esse officia, at saepe sequi voluptas possimus ullam consectetur! Odio?"))}function F(e){var t=e.logged;return u.a.createElement("div",{id:"pages"},u.a.createElement(s.b,{exact:!0,path:"/"},!t&&u.a.createElement(T,null)),u.a.createElement(s.b,{exact:!0,path:"/"},t&&u.a.createElement(D,null)),!t&&u.a.createElement(s.a,{to:"/"}),u.a.createElement(s.b,{path:"/presentation"},u.a.createElement(V,null)),u.a.createElement(s.b,{path:"/search"},u.a.createElement(X,null)))}var J=U,X=Object(i.b)(function(e){return{displayResults:e.displayResults}},{})(J);n(325),n(326);F.propTypes={logged:c.a.bool.isRequired};function z(e){var t=e.logged;return u.a.createElement(Q.a,{color:"blue",inverted:!0},u.a.createElement(Q.a.Item,{as:o.b,to:"/",exact:!0},"Accueil"),t&&u.a.createElement(u.a.Fragment,null,u.a.createElement(Q.a.Item,{as:o.b,to:"/search"},"Recherche"),u.a.createElement(Q.a.Item,{as:o.b,to:"/presentation"},"A propos")))}var B=F,K=Object(i.b)(function(e){return{logged:e.logged}},{})(B),Q=n(369);z.propTypes={logged:c.a.bool.isRequired};function W(){return u.a.createElement("div",{id:"app"},u.a.createElement(ee,null),u.a.createElement(K,null))}function Y(a){return function(t){return function(e){switch(console.log("midd"),e.type){case h:ae.a.get("https://api.github.com/user",{headers:{Authorization:"token ".concat(a.getState().input)}}).then(function(e){var t,n;console.log(e),a.dispatch((t=e.data.name,n=e.data.avatar_url,{type:E,username:t,avatar:n}))}).catch(function(e){console.log(e)});break;default:t(e)}}}}function Z(n){return function(t){return function(e){switch(console.log("midd2"),e.type){case R:ae.a.get("https://api.github.com/search/repositories?q=".concat(n.getState().searchInput)).then(function(e){var t;console.log(e),n.dispatch((t=e.data.items,{type:q,repoResults:t}))}).catch(function(e){console.log(e)}).finally(function(){n.dispatch({type:j})});break;default:t(e)}}}}var $=z,ee=Object(i.b)(function(e){return{logged:e.logged}},{})($),te=n(57),ne=n(86),ae=n.n(ne),re=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||te.c)(Object(te.a)(Y,Z)),ue=Object(te.d)(f,re),oe=u.a.createElement(i.a,{store:ue},u.a.createElement(o.a,null,u.a.createElement(W,null))),ie=document.getElementById("root");Object(r.render)(oe,ie)}});