(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{139:function(e,a,t){},194:function(e,a,t){e.exports=t(420)},367:function(e,a,t){},420:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),i=t(9),o=t.n(i);t(139),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=t(430),c=t(433),s=t(423),u=t(26),m=t(27);function p(){var e=Object(u.a)(["\n  width: 50%;\n  margin: 10px;\n  padding: 5px;\n  line-height: 75px;\n  font-size: 30px;\n  background :#FFFF;\n"]);return p=function(){return e},e}function d(){var e=Object(u.a)([" \n  display: flex; \n  background : #F0F0DF;\n"]);return d=function(){return e},e}function g(){var e=Object(u.a)(["\n  padding: 0.5em;\n  margin: 0.5em;\n  color: ",";\n  background: white;\n  border: none;\n  border-radius: 3px;\n  width : 250px;\n"]);return g=function(){return e},e}function h(){var e=Object(u.a)(["\n  /* Adapt the colors based on primary prop */\n  background: ",";\n  color: ",";\n\n  font-size: 1em;\n  margin: 1em;\n  padding: 0.25em 1em;\n  border: 2px solid palevioletred;\n  border-radius: 3px;\n"]);return h=function(){return e},e}function f(){var e=Object(u.a)(["\n  font-size: 1.5rem;\n  text-align: left;\n  color: #FF8F00;\n  padding: 0.5px;\n  margin: 2px 2px 25px 2px;\n"]);return f=function(){return e},e}var v=m.a.h1(f()),b=(m.a.button(h(),function(e){return e.primary?"palevioletred":"white"},function(e){return e.primary?"white":"palevioletred"}),m.a.input(g(),function(e){return e.inputColor||"palevioletred"}),m.a.div(d()),m.a.div(p()),function(){return r.a.createElement("h1",null,"Not found")}),E=t(429),y=function(){return r.a.createElement(E.a,{title:"Crea un diario de tus viajes"},r.a.createElement(E.a,{type:"inner",style:{width:300},title:"Registra tus viajes",cover:r.a.createElement("img",{alt:"example",src:"https://yourtrips.azurewebsites.net/img/travel1.jpg"}),extra:r.a.createElement("a",{href:"https://ant.design/components/list/"},"More")},"Registra tus viajes, las fechas y los lugares que visitados."),r.a.createElement(E.a,{style:{marginTop:16,width:300},type:"inner",cover:r.a.createElement("img",{alt:"example",src:"https://yourtrips.azurewebsites.net/img/traveltime.jpg"}),title:"Enumera tus proximos viajes",extra:r.a.createElement("a",{href:"https://ant.design/components/list/"},"More")},"Has una lista de tus viajes en el futuro, sin orden ni fecha solo posibles lugares."))},j=t(242),w=t(252),k=t(14),O=t(424),S=E.a.Meta,x=function(){return r.a.createElement("div",{style:{background:"#F0F0DF",padding:"30px"}},r.a.createElement(j.a,{gutter:16},r.a.createElement(w.a,{span:8},r.a.createElement(E.a,{title:"Registra tus viajes",cover:r.a.createElement("img",{alt:"example",src:"https://yourtrips.azurewebsites.net/img/travel1.jpg"}),extra:r.a.createElement("a",{href:"https://ant.design/components/list/"},"More")},"Registra tus viajes, las fechas y los lugares que visitados.")),r.a.createElement(w.a,{span:8},r.a.createElement(E.a,{cover:r.a.createElement("img",{alt:"example",src:"https://yourtrips.azurewebsites.net/img/traveltime.jpg"}),title:"Enumera tus proximos viajes",extra:r.a.createElement("a",{href:"https://ant.design/components/list/"},"More")},"Has una lista de tus viajes en el futuro, sin orden ni fecha solo posibles lugares.")),r.a.createElement(w.a,{span:8},r.a.createElement(E.a,{cover:r.a.createElement("img",{alt:"example",src:"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"}),actions:[r.a.createElement(k.a,{type:"setting"}),r.a.createElement(k.a,{type:"edit"}),r.a.createElement(k.a,{type:"ellipsis"})]},r.a.createElement(S,{avatar:r.a.createElement(O.a,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}),title:"Card title",description:"This is the description"})))))},C=t(255),F=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.BrowserView,null,r.a.createElement(x,null)),r.a.createElement(C.MobileView,null,r.a.createElement(y,null)))},L=t(21),I=t(22),M=t(24),N=t(23),P=t(25),z=(t(154),t(421)),B=t(426),T=t(180),A=t(98),D=t.n(A);var G=Object(T.withStyles)(function(e){return{button:{margin:e.spacing.unit},input:{display:"none"}}})(function(e){var a=e.classes;return r.a.createElement("div",null,r.a.createElement(D.a,{className:a.button},"TIMELINE"),r.a.createElement(D.a,{color:"primary",className:a.button},"Ordernar"),r.a.createElement("input",{accept:"image/*",className:a.input,id:"flat-button-file",multiple:!0,type:"file"}),r.a.createElement("label",{htmlFor:"flat-button-file"},r.a.createElement(D.a,{component:"span",className:a.button},"Upload")))}),R=t(431),U=function(e){function a(){return Object(L.a)(this,a),Object(M.a)(this,Object(N.a)(a).apply(this,arguments))}return Object(P.a)(a,e),Object(I.a)(a,[{key:"convertirFecha",value:function(e){if("string"==typeof e){var a=new Date(e),t=a.getFullYear();return a.toLocaleString("en-us",{month:"long"}).toString().concat(" ").concat(t.toString())}return e}},{key:"render",value:function(){var e=this,a=this.props.data.length-1;return r.a.createElement("div",{style:{marginLeft:10}},r.a.createElement(R.a,null,this.props.data.map(function(t,n){return e.PintarSegunIndice(n,t,a)})))}},{key:"PintarSegunIndice",value:function(e,a,t){return 0===e?r.a.createElement(R.a.Item,{key:e+"."+a.idPais,dot:r.a.createElement(k.a,{type:"trophy",style:{fontSize:"26px"}}),color:"red"},"Tu ultimo viaje a ",a.pais," en  ",this.convertirFecha(a.annoDeLaVisita)):e===t?r.a.createElement(R.a.Item,{key:e+"."+a.idPais,dot:r.a.createElement(k.a,{type:"compass",style:{fontSize:"26px"}}),color:"red"},"Tu primer viaje a ",a.pais," en  ",this.convertirFecha(a.annoDeLaVisita)):r.a.createElement(R.a.Item,{key:e+"."+a.idPais,color:"green"},a.pais," en  ",this.convertirFecha(a.annoDeLaVisita))}}]),a}(r.a.Component),V=z.a.TabPane,q=function(e){function a(e){var t;return Object(L.a)(this,a),(t=Object(M.a)(this,Object(N.a)(a).call(this,e))).state={initLoading:!0,data:[],error:""},t}return Object(P.a)(a,e),Object(I.a)(a,[{key:"eliminarPaisesDuplicados",value:function(e){var a=new Set,t=[];return e.forEach(function(e){!1===a.has(e.idPais)&&t.push(e),a.add(e.idPais)}),t}},{key:"componentDidCatch",value:function(e,a){console.log("componentDidCatch"),console.log(a.componentStack),console.log(e)}},{key:"componentWillUnmount",value:function(){}},{key:"componentWillUpdate",value:function(){}},{key:"componentDidUpdate",value:function(){}},{key:"componentDidMount",value:function(){var e=this;fetch("https://tripsapi20181211043716.azurewebsites.net/api/travelers/1/trips").then(function(e){return e.json()}).then(function(a){e.setState({initLoading:!1,data:a})}).catch(function(a){return e.setState({error:a.message})})}},{key:"render",value:function(){var e=this.state,a=e.initLoading,t=e.error,n=e.data,i=this.eliminarPaisesDuplicados(n);return t?r.a.createElement("div",null,"Lo sentimos algo salio mal:  ",t.message,"  "):r.a.createElement(z.a,{defaultActiveKey:"1",onChange:this.callback},r.a.createElement(V,{tab:"Historia de tus viajes",key:"1"},r.a.createElement(v,null,"El cronograma de tus viajes."),r.a.createElement(U,{data:n})),r.a.createElement(V,{tab:"Lista pa\xedses visitados",key:"2"},r.a.createElement(G,null),r.a.createElement(v,null,"Has visitado ",i.length," pa\xedses"),r.a.createElement(B.a,{style:{marginLeft:10},itemLayout:"horizontal",loading:a,dataSource:i,renderItem:function(e){return r.a.createElement(B.a.Item,null,r.a.createElement(B.a.Item.Meta,{avatar:r.a.createElement(O.a,{src:e.urlFlag}),title:r.a.createElement("a",{href:"https://www.google.com/search?q="+e.pais,target:"_blank",rel:"noopener noreferrer"},e.pais)}))}})))}}]),a}(r.a.Component),H=t(73),K=t(432),W=(t(364),t(29)),J=function(e){function a(e){var t;return Object(L.a)(this,a),(t=Object(M.a)(this,Object(N.a)(a).call(this,e))).toggle=t.toggle.bind(Object(H.a)(Object(H.a)(t))),t.state={isOpen:!1,logged:!1},t}return Object(P.a)(a,e),Object(I.a)(a,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){var e;return e=this.state.logged?null:r.a.createElement(W.c,null," ",r.a.createElement(W.d,{actvieclassname:"active",to:"/login",tag:K.a}," Login")),r.a.createElement("div",null,r.a.createElement(W.e,{color:"light",light:!0,expand:"md"},r.a.createElement(W.f,{href:"/"},"Mis pa\xedses por el mundo"),r.a.createElement(W.g,{onClick:this.toggle}),r.a.createElement(W.a,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(W.b,{className:"ml-auto",navbar:!0},r.a.createElement(W.c,null,r.a.createElement(W.d,{exact:!0,to:"/",className:"nav-link",activeclassname:"active",tag:K.a},"Home")),r.a.createElement(W.c,null,r.a.createElement(W.d,{actvieclassname:"active",to:"/marcas",tag:K.a},"Por visitar ")),r.a.createElement(W.c,null,r.a.createElement(W.d,{actvieclassname:"active",to:"/misviajes",tag:K.a}," Mis viajes")),e))))}}]),a}(r.a.Component);function Y(){var e=Object(u.a)(["\n  color: blue;\n\n  ::before {\n    content: '\ud83d\ude80';\n  }\n\n  :hover {\n    color: red;\n  }\n"]);return Y=function(){return e},e}function _(){var e=Object(u.a)(["\n    color: palevioletred;\n    font-weight: bold;\n  "]);return _=function(){return e},e}function Z(){var e=Object(u.a)(["\n  color: tomato;\n  border-color: tomato;\n"]);return Z=function(){return e},e}function X(){var e=Object(u.a)(["\n  /* Adapt the colors based on primary prop */\n  background: ",";\n  color: ",";\n\n  font-size: 1em;\n  margin: 1em;\n  padding: 0.25em 1em;\n  border: 2px solid palevioletred;\n  border-radius: 3px;\n"]);return X=function(){return e},e}function Q(){var e=Object(u.a)(["\n  padding: 4em;\n  background: #F0F0DF;\n"]);return Q=function(){return e},e}function $(){var e=Object(u.a)(["\n  font-size: 1.5em;\n  text-align: center;\n  color: palevioletred;\n"]);return $=function(){return e},e}function ee(){var e=Object(u.a)(["\n  width: 100px;\n  height: 100px;\n  border: 10px solid chocolate;\n  border-radius: 10px;\n"]);return ee=function(){return e},e}var ae=m.a.div(ee()),te=m.a.h1($()),ne=m.a.section(Q()),re=m.a.button(X(),function(e){return e.primary?"palevioletred":"white"},function(e){return e.primary?"white":"palevioletred"}),ie=Object(m.a)(re)(Z()),oe=function(e){var a=e.className,t=e.children;return r.a.createElement("a",{className:a},t)},le=Object(m.a)(oe)(_()),ce=m.a.button(Y()),se=(n.Component,t(28)),ue=t(422),me=function(e){return r.a.createElement("div",null,r.a.createElement(E.a,{title:e.data,bordered:!1,style:{width:"100%",marginTop:10}},r.a.createElement("p",null,"Continente: NOMBRE CONTINENTE  "),r.a.createElement("p",null,"Capital: NOMBRE CAPITAL "),r.a.createElement("p",null,"Click here for information about   ",r.a.createElement("a",{href:"https://www.google.com/search?q="+e.data,target:"_blank",rel:"noopener noreferrer"},e.data)),r.a.createElement(ue.a,{icon:"plus",size:"large"},"Add to list")))},pe=se.a.Option,de=[];["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"].forEach(function(e){de.push(r.a.createElement(pe,{key:e},e))});var ge=function(e){function a(e){var t;return Object(L.a)(this,a),(t=Object(M.a)(this,Object(N.a)(a).call(this,e))).handleChange=function(e){console.log("selected ".concat(e)),t.setState({value:e})},t.state={value:"",error:""},t}return Object(P.a)(a,e),Object(I.a)(a,[{key:"handleBlur",value:function(){console.log("blur")}},{key:"handleFocus",value:function(){console.log("focus")}},{key:"render",value:function(){var e=this.state.value;return r.a.createElement("div",null,r.a.createElement(se.a,{showSearch:!0,style:{width:"100%"},placeholder:"Select a country",optionFilterProp:"children",onChange:this.handleChange,onFocus:this.handleFocus,onBlur:this.handleBlur,filterOption:function(e,a){return a.props.children.toLowerCase().indexOf(e.toLowerCase())>=0}},de),""!==e?r.a.createElement(me,{data:e}):null)}}]),a}(r.a.Component),he=function(e){function a(e){var t;return Object(L.a)(this,a),(t=Object(M.a)(this,Object(N.a)(a).call(this,e))).state={initLoading:!0,data:[],error:""},t}return Object(P.a)(a,e),Object(I.a)(a,[{key:"convertirFecha",value:function(e){if("string"==typeof e){var a=new Date(e),t=a.getFullYear();return a.toLocaleString("en-us",{month:"long"}).toString().concat(" ").concat(t.toString())}return e}},{key:"componentDidCatch",value:function(e,a){console.log("componentDidCatch"),console.log(a.componentStack),console.log(e)}},{key:"componentWillUnmount",value:function(){}},{key:"componentWillUpdate",value:function(){}},{key:"componentDidUpdate",value:function(){}},{key:"componentDidMount",value:function(){var e=this;fetch("https://tripsapi20181211043716.azurewebsites.net/api/travelers/1/trips/wishlists").then(function(e){return e.json()}).then(function(a){e.setState({initLoading:!1,data:a})}).catch(function(a){return e.setState({error:a.message})})}},{key:"render",value:function(){var e=this,a=this.state,t=a.initLoading,n=a.error,i=a.data;return n?r.a.createElement("div",null,"Lo sentimos algo salio mal:  ",n.message,"  "):r.a.createElement("div",null,r.a.createElement(v,null,"Tus futuros viajes "),r.a.createElement(B.a,{itemLayout:"horizontal",style:{marginLeft:10},loading:t,dataSource:i,renderItem:function(a){return r.a.createElement(B.a.Item,null,r.a.createElement(B.a.Item.Meta,{avatar:r.a.createElement(O.a,{src:a.urlFlag}),title:r.a.createElement("a",{href:"https://www.google.com/search?q="+a.pais,target:"_blank",rel:"noopener noreferrer"},a.pais),description:"Viaje planeado para "+e.convertirFecha(a.annoDeLaVisita)}))}}))}}]),a}(r.a.Component),fe=z.a.TabPane;function ve(e){console.log(e)}var be=function(e){return r.a.createElement(z.a,{defaultActiveKey:"1",onChange:ve},r.a.createElement(fe,{tab:"Wish list",key:"1"},r.a.createElement(he,null)),r.a.createElement(fe,{tab:"Add to Wish List",key:"2"},r.a.createElement(ne,null,r.a.createElement(v,null,"Escoga pa\xedses por visitar"),r.a.createElement(ge,null))))},Ee=t(425),ye=t(427),je=t(428),we=(t(367),function(e){function a(){var e,t;Object(L.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(M.a)(this,(e=Object(N.a)(a)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){e.preventDefault(),t.props.form.validateFields(function(e,a){if(!e){console.log("Received values of form: ",a);var n=new FormData(t.event);fetch("/api/form-submit-url",{method:"POST",body:n})}})},t}return Object(P.a)(a,e),Object(I.a)(a,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return r.a.createElement("div",{style:{padding:"24px"}},r.a.createElement(Ee.a,{onSubmit:this.handleSubmit,className:"login-form"},r.a.createElement(Ee.a.Item,null,e("userName",{rules:[{required:!0,message:"Please input your username!"}]})(r.a.createElement(ye.a,{prefix:r.a.createElement(k.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Username"}))),r.a.createElement(Ee.a.Item,null,e("password",{rules:[{required:!0,message:"Please input your Password!"}]})(r.a.createElement(ye.a,{prefix:r.a.createElement(k.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password"}))),r.a.createElement(Ee.a.Item,null,e("remember",{valuePropName:"checked",initialValue:!0})(r.a.createElement(je.a,null,"Remember me")),r.a.createElement("a",{className:"login-form-forgot",href:""},"Forgot password"),r.a.createElement(ue.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"Log in"),"Or ",r.a.createElement("a",{href:""},"register now!"))))}}]),a}(r.a.Component)),ke=Ee.a.create({name:"normal_login"})(we),Oe=function(e){return r.a.createElement(l.a,null,r.a.createElement("div",null,r.a.createElement(J,null),r.a.createElement(c.a,null,r.a.createElement(s.a,{exact:!0,path:"/",component:F}),r.a.createElement(s.a,{exact:!0,path:"/marcas",component:be}),r.a.createElement(s.a,{exact:!0,path:"/misviajes",component:q}),r.a.createElement(s.a,{exact:!0,path:"/login",component:ke}),r.a.createElement(s.a,{component:b}))))};o.a.render(r.a.createElement(Oe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[194,2,1]]]);
//# sourceMappingURL=main.b724a87d.chunk.js.map