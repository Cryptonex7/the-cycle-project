(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{2:function(e,t,n){"use strict";n.d(t,"c",function(){return c}),n.d(t,"d",function(){return l}),n.d(t,"b",function(){return s}),n.d(t,"a",function(){return i});var a=n(6),o=n(41),r=n.n(o),c=function(e){return{type:a.e,payload:e}},l=function(e){return{type:a.f,payload:e}},s=function(e){return{type:a.d,payload:e}},i=function(){return function(e){console.log("fetchin"),e({type:a.b}),r.a.get("/api/current_user").then(function(t){return e({type:a.c,payload:t.data})}).catch(function(t){return e({type:a.a,payload:t})})}}},21:function(e,t,n){e.exports=n.p+"static/media/AC-Logo.a7cd08f0.svg"},22:function(e,t,n){e.exports=n.p+"static/media/facebook.6b19c336.svg"},23:function(e,t,n){e.exports=n.p+"static/media/googleplus.2f1bca5f.svg"},37:function(e,t,n){},43:function(e,t,n){e.exports=n(88)},52:function(e,t,n){},54:function(e,t,n){},56:function(e,t,n){},6:function(e,t,n){"use strict";n.d(t,"e",function(){return a}),n.d(t,"f",function(){return o}),n.d(t,"d",function(){return r}),n.d(t,"b",function(){return c}),n.d(t,"c",function(){return l}),n.d(t,"a",function(){return s});var a="SET_PAGE_VALUE",o="TOGGLE_MODAL",r="LOAD_USER",c="FETCH_USER_PENDING",l="FETCH_USER_SUCCESS",s="FETCH_USER_FAILED"},78:function(e,t,n){},83:function(e,t,n){},86:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(18),c=n.n(r),l=n(11),s=n(39),i=n(15),u=n(40),m=(n(52),n(8)),g=n(9),d=n(12),p=n(10),h=n(13),b=(n(54),function(e){var t=e.visibilityFunction;return o.a.createElement("div",{className:"SideButton"},o.a.createElement("div",{onClick:t,className:"toggle-btn side-toggle"},o.a.createElement("svg",{className:"nav-btn",height:"40px",id:"Layer_1",version:"1.1",viewBox:"0 0 512 512",width:"512px",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("g",{className:"white"},o.a.createElement("g",{className:"bar-1  trans",id:"baricon-1"},o.a.createElement("rect",{height:"32",width:"320",y:"335",x:"105"})),o.a.createElement("g",{className:"bar-2 trans",id:"baricon-2"},o.a.createElement("rect",{height:"32",width:"320",y:"235",x:"105"})),o.a.createElement("g",{className:"bar-3 trans",id:"baricon-3"},o.a.createElement("rect",{height:"32",width:"320",y:"135",x:"105"}))))))}),f=(n(56),n(2)),E=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).classToggle=function(){document.getElementById("flex-container").classList.toggle("ToggleShow")},n.rotations=function(){var e=document.getElementById("baricon-1");e.classList.toggle("rotate-1"),e.classList.toggle("bar-1");var t=document.getElementById("baricon-2");t.classList.toggle("rotate-2"),t.classList.toggle("bar-2");var a=document.getElementById("baricon-3");a.classList.toggle("rotate-3"),a.classList.toggle("bar-3"),n.classToggle()},n}return Object(h.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"Navbar"},o.a.createElement("div",{className:"Navbar__Link Navbar__Link-brand"},o.a.createElement("div",{className:"page-title"},"#",o.a.createElement("span",{className:"gray-text"},"the"),"Smart",o.a.createElement("span",{className:"red-text"},"Cycling"),o.a.createElement("span",{className:"accent-text"},"Experience"))),o.a.createElement("div",{className:"page-title"},this.props.user.name),o.a.createElement("div",{className:"Navbar__Link Navbar__Link-toggle"},o.a.createElement(b,{visibilityFunction:this.rotations})),o.a.createElement("nav",{className:"Navbar__Items Navbar__Items--right",id:"flex-container"},o.a.createElement("div",{className:"Navbar__Link"},o.a.createElement("button",{className:"linkStyles button",activeClassName:"nav-active",onClick:function(){return e.props.toggleModal("login")}},"Login")),o.a.createElement("div",{className:"Navbar__Link"},o.a.createElement("button",{className:"linkStyles button",activeClassName:"nav-active",onClick:function(){return e.props.toggleModal("signup")}},"SignUp"))))}}]),t}(a.Component),v=Object(l.b)(function(e){return{page:e.changePage.page,isModalOpen:e.toggleModal.isModalOpen,user:e.fetchAndSetUser.user}},function(e){return{onPageChange:function(t){return e(Object(f.c)(t))},toggleModal:function(t){return e(Object(f.d)(t))},setUserState:function(t){return e(Object(f.b)(t))},fetchAndSetUser:function(){return e(Object(f.a)())}}})(E),w=n(99),N=n(100),O=Object(a.lazy)(function(){return n.e(1).then(n.bind(null,96))}),j=Object(a.lazy)(function(){return n.e(2).then(n.bind(null,97))}),y=Object(a.lazy)(function(){return n.e(3).then(n.bind(null,101))}),C=function(){return o.a.createElement(a.Suspense,{fallback:o.a.createElement("div",null," Loading... ")},o.a.createElement(w.a,null,o.a.createElement(N.a,{exact:!0,path:"/",component:y}),o.a.createElement(N.a,{exact:!0,path:"/dashboard",component:O}),o.a.createElement(N.a,{path:"/auth/google/callback",component:j})))},k=n(98),S=(n(78),document.getElementById("modal-root")),L=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(d.a)(this,Object(p.a)(t).call(this,e))).el=document.createElement("div"),n}return Object(h.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){S.appendChild(this.el)}},{key:"componentWillUnmount",value:function(){S.removeChild(this.el)}},{key:"render",value:function(){return c.a.createPortal(this.props.children,this.el)}}]),t}(o.a.Component),x=n(16),M=n.n(x),U=n(20),P=n(25),_=(n(37),n(21)),A=n.n(_),G=n(22),I=n.n(G),T=n(23),W=n.n(T),B=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(d.a)(this,Object(p.a)(t).call(this,e))).onNameChange=function(e){n.setState(function(t){return{user:Object(P.a)({},t.user,{name:e.target.value})}})},n.onEmailChange=function(e){n.setState(function(t){return{user:Object(P.a)({},t.user,{email:e.target.value})}})},n.onPasswordChange=function(e){n.setState(function(t){return{user:Object(P.a)({},t.user,{password:e.target.value})}})},n.onLogin=function(){console.log(n.state.user),n.props.toggleModal("none"),n.props.setUserState(n.state.user)},n.onGoogleLogin=Object(U.a)(M.a.mark(function e(){return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log("google Login init"),n.props.toggleModal("none");case 2:case"end":return e.stop()}},e,this)})),n.state={user:{name:"",email:"",password:""}},n}return Object(h.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"login-container"},o.a.createElement("div",{className:"Login"},o.a.createElement("img",{src:A.a,className:"login-logo",alt:"",width:"26%"}),o.a.createElement("div",{className:"welcome text-primary"},"Welcome!"),o.a.createElement("div",{className:"card-bkg form-container"},o.a.createElement("form",{action:"/login",method:"post",className:"form"},"Email: ",o.a.createElement("br",null),o.a.createElement("input",{type:"text",placeholder:"Enter Email",name:"username",className:"inputs",id:"email-box"}),o.a.createElement("br",null),"Password: ",o.a.createElement("br",null),o.a.createElement("input",{type:"password",placeholder:"Enter Password",name:"password",className:"inputs",id:"password-box"}),o.a.createElement("br",null),o.a.createElement("div",{className:"btn-group-local"},o.a.createElement("input",{type:"submit",value:"Log In",onClick:this.onLogin,className:"btn-signup-form button"}),o.a.createElement("input",{type:"button",onClick:function(){return e.props.toggleModal("none")},className:"btn-cancel-form button",value:"Cancel"}))," ",o.a.createElement("hr",null),o.a.createElement("span",{className:"or-login-with"},"Or login with"),o.a.createElement("div",{className:"btn-group-oauth"},o.a.createElement("a",{href:"auth/google",onClick:this.onGoogleLogin,className:"btn-group btn-google-form button"},o.a.createElement("img",{src:W.a,alt:"",width:"30%",className:"icon"}),o.a.createElement("span",{className:"btn-text "},"Google")),o.a.createElement("span",{className:"or"},"or"),o.a.createElement("a",{href:"auth/google",onClick:this.onGoogleLogin,className:"btn-group btn-facebook-form button"},o.a.createElement("img",{src:I.a,alt:"",width:"28%",className:"icon"}),o.a.createElement("span",{className:"btn-text "},"Facebook")))))))}}]),t}(o.a.Component),D=Object(l.b)(function(e){return{page:e.changePage.page,isModalOpen:e.toggleModal.isModalOpen,user:e.fetchAndSetUser.user}},function(e){return{onPageChange:function(t){return e(Object(f.c)(t))},toggleModal:function(t){return e(Object(f.d)(t))},setUserState:function(t){return e(Object(f.b)(t))},fetchAndSetUser:function(){return e(Object(f.a)())}}})(B),F=(n(83),n(86),n(14)),R=n(95),J=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(d.a)(this,Object(p.a)(t).call(this,e))).onLogin=function(){console.log("set auth",n.state),n.props.setUserState(n.state),console.log(" USER: ",n.state),n.props.toggleModal("none"),fetch("/local/signup",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n.state.name,email:n.state.email,password:n.state.password})}).then(function(e){return e.json()}).then(function(e){return console.log("sign in resp",e)})},n.onGoogleLogin=Object(U.a)(M.a.mark(function e(){return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log("google Login init"),n.props.user.auth="google",n.props.toggleModal("none");case 3:case"end":return e.stop()}},e,this)})),n.state={name:"",email:"",password:"",auth:"local"},n.onNameChange=n.onNameChange.bind(Object(F.a)(Object(F.a)(n))),n.onEmailChange=n.onEmailChange.bind(Object(F.a)(Object(F.a)(n))),n.onPasswordChange=n.onPasswordChange.bind(Object(F.a)(Object(F.a)(n))),n}return Object(h.a)(t,e),Object(g.a)(t,[{key:"onNameChange",value:function(e){this.setState({name:e.target.value})}},{key:"onEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"onPasswordChange",value:function(e){this.setState({password:e.target.value})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"login-container"},o.a.createElement("div",{className:"SignUp"},o.a.createElement("div",{className:"welcome text-primary"},"Welcome!"),o.a.createElement("div",{className:"card-bkg form-container"},o.a.createElement("form",{action:"/login",method:"post",className:"form form-flex"},o.a.createElement("div",{className:"left-col"},"Name: ",o.a.createElement("br",null),o.a.createElement("input",{type:"text",onChange:this.onNameChange,placeholder:"Enter Name",name:"username",className:"inputs",id:"name-box"}),o.a.createElement("br",null),"Email: ",o.a.createElement("br",null),o.a.createElement("input",{type:"email",onChange:this.onEmailChange,placeholder:"Enter Email",name:"email",className:"inputs",id:"email-box"}),o.a.createElement("br",null),"Password: ",o.a.createElement("br",null),o.a.createElement("input",{type:"password",onChange:this.onPasswordChange,placeholder:"Enter Password",name:"password",className:"inputs",id:"password-box"}),o.a.createElement("br",null),"Confirm Password: ",o.a.createElement("br",null),o.a.createElement("input",{type:"password",placeholder:"Confirm Password",name:"re-password",className:"inputs",id:"re-password-box"}),o.a.createElement("br",null),o.a.createElement("div",{className:"btn-group-local"},o.a.createElement(R.a,{exact:!0,to:"/dashboard",onClick:this.onLogin,type:"button",className:"btn-signup-form button"},"Sign Up"),o.a.createElement("input",{type:"button",onClick:function(){return e.props.toggleModal("none")},className:"btn-cancel-form button",value:"Cancel"}))),o.a.createElement("div",{className:"right-col"},o.a.createElement("img",{src:A.a,className:"login-logo",alt:"",width:"40%"}),o.a.createElement("span",{className:"or-login-with"},"Or login with")," ",o.a.createElement("br",null),o.a.createElement("a",{href:"auth/google",onClick:this.onGoogleLogin,className:"btn-group btn-group-oauth btn-google-form button"},o.a.createElement("img",{src:W.a,alt:"",width:"30%",className:"icon"}),o.a.createElement("span",{className:"btn-text "},"Google")),o.a.createElement("span",{className:"or btn-group-oauth"},"or"),o.a.createElement("a",{href:"auth/google",onClick:this.onGoogleLogin,className:"btn-group btn-group-oauth btn-facebook-form button"},o.a.createElement("img",{src:I.a,alt:"",width:"28%",className:"icon"}),o.a.createElement("span",{className:"btn-text "},"Facebook")))))))}}]),t}(o.a.Component),z=Object(l.b)(function(e){return{page:e.changePage.page,isModalOpen:e.toggleModal.isModalOpen,user:e.fetchAndSetUser.user}},function(e){return{onPageChange:function(t){return e(Object(f.c)(t))},toggleModal:function(t){return e(Object(f.d)(t))},setUserState:function(t){return e(Object(f.b)(t))},fetchAndSetUser:function(){return e(Object(f.a)())}}})(J),H=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).modalSwitch=function(e){switch(e){case"login":return o.a.createElement(L,null,o.a.createElement(D,{setUserState:n.props.setUserState,toggleModal:n.props.toggleModal}));case"signup":return o.a.createElement(L,null,o.a.createElement(z,{setUserState:n.props.setUserState,toggleModal:n.props.toggleModal}));default:return}},n}return Object(h.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){console.log("mount"),"local"!==this.props.user.auth&&this.props.fetchAndSetUser()}},{key:"render",value:function(){return o.a.createElement(k.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(v,null),"none"!==this.props.isModalOpen&&this.modalSwitch(this.props.isModalOpen),o.a.createElement(C,null)))}}]),t}(a.Component),V=Object(l.b)(function(e){return{page:e.changePage.page,isModalOpen:e.toggleModal.isModalOpen,user:e.fetchAndSetUser.user,isPending:e.fetchAndSetUser.isPending}},function(e){return{onPageChange:function(t){return e(Object(f.c)(t))},toggleModal:function(t){return e(Object(f.d)(t))},setUserState:function(t){return e(Object(f.b)(t))},fetchAndSetUser:function(){return e(Object(f.a)())}}})(H),$=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function q(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var K=n(6),Q={page:window.location.pathname},X={isModalOpen:"none"},Y={user:{googleID:0,name:"John Doe",email:"john@email.com",password:"",auth:"no user"},isPending:!1},Z=Object(s.createLogger)(),ee=Object(i.c)({changePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case K.e:return Object.assign({},e,{page:t.payload});default:return e}},toggleModal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case K.f:return Object.assign({},e,{isModalOpen:t.payload});default:return e}},fetchAndSetUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(console.log("reducing",t),t.type){case K.b:return Object.assign({},e,{isPending:!0});case K.c:case K.d:return Object.assign({},e,{user:t.payload,isPending:!1});default:return e}}}),te=Object(i.d)(ee,Object(i.a)(u.a,Z));c.a.render(o.a.createElement(l.a,{store:te},o.a.createElement(V,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/the-cycle-project/client",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/the-cycle-project/client","/service-worker.js");$?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):q(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):q(t,e)})}}()}},[[43,5,4]]]);
//# sourceMappingURL=main.7e85354b.chunk.js.map