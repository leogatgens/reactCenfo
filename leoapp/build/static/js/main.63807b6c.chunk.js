(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{124:function(e,t,n){"use strict";n.r(t);var i=n(30),a=n.n(i);n(35),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(65);var o=n(1),s=n.n(o),r=n(129),c=n(128),l=n(13),u=n(14),h=n(18),d=n(17),g=n(19),m=n(127),p=n(130),k=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(u.a)(t,[{key:"goTo",value:function(e){this.props.history.replace("/".concat(e))}},{key:"login",value:function(){this.props.auth.login()}},{key:"logout",value:function(){this.props.auth.logout()}},{key:"componentDidMount",value:function(){var e=this.props.auth.renewSession;"true"===localStorage.getItem("isLoggedIn")&&e()}},{key:"render",value:function(){var e=this.props.auth.isAuthenticated;return s.a.createElement("div",null,s.a.createElement(m.a,{fluid:!0},s.a.createElement(m.a.Header,null,s.a.createElement(m.a.Brand,null,s.a.createElement("a",{href:"#"},"Auth0 - React")),s.a.createElement(p.a,{bsStyle:"primary",className:"btn-margin",onClick:this.goTo.bind(this,"home")},"Home"),!e()&&s.a.createElement(p.a,{id:"qsLoginBtn",bsStyle:"primary",className:"btn-margin",onClick:this.login.bind(this)},"Log In"),e()&&s.a.createElement(p.a,{id:"qsLogoutBtn",bsStyle:"primary",className:"btn-margin",onClick:this.logout.bind(this)},"Log Out"))))}}]),t}(o.Component),b=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(u.a)(t,[{key:"login",value:function(){this.props.auth.login()}},{key:"render",value:function(){var e=this.props.auth.isAuthenticated;return s.a.createElement("div",{className:"container"},e()&&s.a.createElement("h4",null,"You are logged in!"),!e()&&s.a.createElement("h4",null,"You are not logged in! Please"," ",s.a.createElement("a",{style:{cursor:"pointer"},onClick:this.login.bind(this)},"Log In")," ","to continue."))}}]),t}(o.Component),f=n(55),v=n.n(f),y=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{style:{position:"absolute",display:"flex",justifyContent:"center",height:"100vh",width:"100vw",top:0,bottom:0,left:0,right:0,backgroundColor:"white"}},s.a.createElement("img",{src:v.a,alt:"loading"}))}}]),t}(o.Component),w=n(56),E=n.n(w)()(),T=n(57),j={domain:"leogatgens.auth0.com",clientId:"3QMygDL8__3P7JaP5SkPYD8_RUSKwDU8",callbackUrl:"https://yourtrips.azurewebsites.net/callback"},O=new(function(){function e(){Object(l.a)(this,e),this.auth0=new T.a.WebAuth({domain:j.domain,clientID:j.clientId,redirectUri:j.callbackUrl,responseType:"token id_token",scope:"openid"}),this.login=this.login.bind(this),this.logout=this.logout.bind(this),this.handleAuthentication=this.handleAuthentication.bind(this),this.isAuthenticated=this.isAuthenticated.bind(this),this.getAccessToken=this.getAccessToken.bind(this),this.getIdToken=this.getIdToken.bind(this),this.renewSession=this.renewSession.bind(this)}return Object(u.a)(e,[{key:"login",value:function(){this.auth0.authorize()}},{key:"handleAuthentication",value:function(){var e=this;this.auth0.parseHash(function(t,n){n&&n.accessToken&&n.idToken?e.setSession(n):t&&(E.replace("/home"),console.log(t),alert("Error: ".concat(t.error,". Check the console for further details.")))})}},{key:"getAccessToken",value:function(){return this.accessToken}},{key:"getIdToken",value:function(){return this.idToken}},{key:"setSession",value:function(e){localStorage.setItem("isLoggedIn","true");var t=1e3*e.expiresIn+(new Date).getTime();this.accessToken=e.accessToken,this.idToken=e.idToken,this.expiresAt=t,E.replace("/home")}},{key:"renewSession",value:function(){var e=this;this.auth0.checkSession({},function(t,n){n&&n.accessToken&&n.idToken?e.setSession(n):t&&(e.logout(),console.log(t),alert("Could not get a new token (".concat(t.error,": ").concat(t.error_description,").")))})}},{key:"logout",value:function(){this.accessToken=null,this.idToken=null,this.expiresAt=0,localStorage.removeItem("isLoggedIn"),E.replace("/home")}},{key:"isAuthenticated",value:function(){var e=this.expiresAt;return(new Date).getTime()<e}}]),e}()),A=s.a.createElement(r.a,{history:E},s.a.createElement("div",null,s.a.createElement(c.a,{path:"/",render:function(e){return s.a.createElement(k,Object.assign({auth:O},e))}}),s.a.createElement(c.a,{path:"/home",render:function(e){return s.a.createElement(b,Object.assign({auth:O},e))}}),s.a.createElement(c.a,{path:"/callback",render:function(e){return function(e){var t=e.location;/access_token|id_token|error/.test(t.hash)&&O.handleAuthentication()}(e),s.a.createElement(y,e)}})));a.a.render(A,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},35:function(e,t,n){},55:function(e,t,n){e.exports=n.p+"static/media/loading.c5590569.svg"},59:function(e,t,n){e.exports=n(124)}},[[59,2,1]]]);
//# sourceMappingURL=main.63807b6c.chunk.js.map