(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{148:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(56),i=n.n(o),l=(n(87),n(8)),c=n(9),u=n(16),s=n(15),d=n(17),m=n(29),p=n.n(m),f=n(38),g=(n(89),n(90),n(36)),v=n(31),h=n(63),y=n(19),b=n(6),E=(n(41),n(42),n(48));function k(){var e=Object(y.a)(["\n      flex-direction:column;\n    "]);return k=function(){return e},e}function j(){var e=Object(y.a)(["\n      flex-direction:row;\n    "]);return j=function(){return e},e}function O(){var e=Object(y.a)(["\n  display:flex;\n  ","\n"]);return O=function(){return e},e}var w=E.b.div(O(),function(e){return"Horizontal"===e.orentation?Object(E.a)(j()):"Vertical"===e.orentation?Object(E.a)(k()):void 0}),C=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).renderWallpapers=function(e){return e.map(function(e){return r.a.createElement(w,{orentation:"Horizontal",key:e._id,style:{margin:10}},r.a.createElement("img",{src:e.url,style:{width:100,borderRadius:5}}))})},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(w,{orentation:"Vertical",style:{padding:"0px 10px",marginBottom:20,marginTop:10}},r.a.createElement(w,{orentation:"Vertical"},r.a.createElement("div",null,this.props.title),r.a.createElement("div",{style:{fontSize:12,fontStyle:"italic"}},this.props.subTitle)),r.a.createElement(w,{orentation:"Horizontal"},this.renderWallpapers(this.props.wallpapers)))}}]),t}(a.Component);C.defaultProps={orentation:"Horizontal",title:"Unamed",subTitle:"Uname Subtitle",wallpapers:[]};var S=C,x=n(27),A=n(26),I=n.n(A);function L(){var e=Object(y.a)(["\nquery{\n  categories{\n    _id,\n    title,\n    subTitle,\n    wallpaper{\n      title,\n      url,\n      _id,\n      download,\n      premium\n    }\n  }\n}\n"]);return L=function(){return e},e}var B=I()(L()),T=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={fabList:!1},n.renderSections=function(e){return e.map(function(e){return r.a.createElement(S,{key:e._id,title:e.title,subTitle:e.subTitle,wallpapers:e.wallpaper})})},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(x.c,{query:B},function(t){var n=t.loading,a=t.data,o=t.error;return console.log(a),n?r.a.createElement("div",null,"Loading"):o?r.a.createElement("div",null,o.message):r.a.createElement(b.Page,{renderToolbar:function(){return r.a.createElement(b.Toolbar,null,r.a.createElement("div",{className:"left"},r.a.createElement(b.ToolbarButton,null,r.a.createElement(b.Icon,{icon:"md-menu"}))),r.a.createElement("div",{className:"center"},"Home"),r.a.createElement("div",{className:"right"},r.a.createElement(b.ToolbarButton,{onClick:function(){localStorage.removeItem("token"),e.props.history.push("/login")}},r.a.createElement(b.Icon,{icon:"sign-out"}))))}},r.a.createElement(b.Modal,{onClick:function(){e.setState({fabList:!1})},animation:"fade",isOpen:e.state.fabList},r.a.createElement("div",null,r.a.createElement(b.Button,{style:{color:"#fff"},onClick:function(){},modifier:"large--quiet"},"Add Category"),r.a.createElement(b.Button,{style:{color:"#fff"},onClick:function(){e.props.history.push("/create")},modifier:"large--quiet"},"Add Wallpaper"))),r.a.createElement(b.Fab,{style:{position:"fixed",bottom:20,right:20},onClick:function(){e.setState({fabList:!0})}},r.a.createElement(b.Icon,{icon:"fa-plus",size:26,fixedWidth:!1,style:{verticalAlign:"middle"}})),r.a.createElement("div",null,e.renderSections(a.categories)))})}}]),t}(a.Component),W=n(47),q=n(77),N=n(78),$=n.n(N),_=n(50),H={bucketName:"backtickapp",dirName:"pixelperfect",region:"ap-south-1",accessKeyId:"AKIAIISG4BYPSE3Z2GSQ",secretAccessKey:"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"};function P(){var e=Object(y.a)(["\nmutation($title:String!,$url:String!,$category:[ID!],$premium:Boolean){\n  addWallpaper(title:$title,url:$url,category:$category,premium:$premium){\n    title\n  }\n}\n"]);return P=function(){return e},e}function z(){var e=Object(y.a)(["\nquery{\n  categories{\n    _id,\n    title\n  }\n}\n"]);return z=function(){return e},e}var M=I()(z()),R=I()(P()),U=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={title:"",premium:!1,category:{},categoryListModal:!1,url:null,file:null},n.uploadImage=function(e){$.a.uploadFile(n.state.file,H).then(function(t){console.log(t);var a=[];Object(_.map)(n.state.category,function(e){a.push(e._id)});var r={url:t.location,title:n.state.title,premium:n.state.premium,category:a};e({variables:r})}).catch(function(e){return console.log(e)})},n.onClickAddCategory=function(e){n.setState({category:Object(q.a)({},n.state.category,Object(W.a)({},e._id,e))})},n.removeCategory=function(e){var t=n.state.category;delete t[e],n.setState({category:t})},n.renderCategory=function(e){return r.a.createElement(b.List,{dataSource:e,renderHeader:n.renderHeader,renderRow:function(e,t){return r.a.createElement(b.ListItem,{key:e._id,style:{height:40},onClick:function(){n.onClickAddCategory(e)},modifier:t===n.state.category.length-1?"longdivider":null},e.title)}})},n.onClickAddWallpaper=function(e){null!==n.state.file?""!==n.state.title?Object(_.isEmpty)(n.state.category)?alert("Please select at least one category"):n.uploadImage(e):alert("Title can't be empty"):alert("Please select the image")},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var e=this;return r.a.createElement(b.Page,{renderToolbar:function(){return r.a.createElement(b.Toolbar,null,r.a.createElement("div",{className:"left"},r.a.createElement(b.BackButton,{onClick:function(){e.props.history.goBack()}},"Back")),r.a.createElement("div",{className:"center"},"Create"))}},r.a.createElement(b.Modal,{onClick:function(){e.setState({categoryListModal:!1})},animation:"lift",isOpen:this.state.categoryListModal},r.a.createElement(x.c,{query:M},function(t){var n=t.loading,a=t.data;t.error;if(n)return r.a.createElement("div",null,"Loading ...");if(a){var o=a.categories.filter(function(t){return!e.state.category[t._id]});return r.a.createElement("div",null,e.renderCategory(o))}})),r.a.createElement("div",{style:{padding:10}},r.a.createElement("div",null,r.a.createElement("input",{type:"file",id:"multi",onChange:function(t){if(console.log(t.target.value),t.target.files[0]){var n=t.target.files[0].name.split(".");"jpg"===(n=n[n.length-1])||"jpeg"===n||"png"===n?e.setState({file:t.target.files[0]}):(t.preventDefault(),alert("Only jpg, jpeg, png is allowed"))}},multiple:!0})),r.a.createElement("div",null,r.a.createElement("div",{style:{padding:"10px 0px",marginTop:20}},r.a.createElement(b.Input,{style:{width:"100%"},value:this.state.text,float:!0,onChange:function(t){e.setState({title:t.target.value})},modifier:"material",placeholder:"Wallpaper Title"})),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(b.List,{style:{display:"flex",flexWrap:"wrap"},dataSource:Object(_.values)(this.state.category),renderHeader:this.renderHeader,renderRow:function(t,n){return r.a.createElement("div",{key:t._id,style:{borderRadius:5,padding:5,fontSize:12,margin:5,border:"1px solid rgb(55, 146, 189)",backgroundColor:"#dae7ff"}},t.title,r.a.createElement(b.Button,{onClick:function(){e.removeCategory(t._id)},style:{backgroundColor:"transparent",padding:"0px 10px",color:"#000"}},r.a.createElement(b.Icon,{icon:{default:"times-circle",material:"times-circle"}})))}})),r.a.createElement("div",{style:{padding:"10px 0px"}},r.a.createElement(b.Button,{onClick:function(){e.setState({categoryListModal:!0})},modifier:"large--quiet"},"Add Category")))),r.a.createElement("div",null,r.a.createElement(b.Checkbox,{onChange:function(t){e.setState({premium:t.target.checked})},modifier:"material"}),r.a.createElement("span",null," Premium ")),r.a.createElement("div",{style:{padding:"10px 0px"}},r.a.createElement(x.b,{mutation:R,onCompleted:function(t){console.log("Done",t),e.props.history.goBack()},refetchQueries:[{query:B}]},function(t,n){var a=n.loading;n.data,n.error;return a?r.a.createElement("div",null,"loading ..."):r.a.createElement(b.Button,{onClick:function(){e.onClickAddWallpaper(t)},modifier:"material"},"Add")})))))}}]),t}(a.Component);function D(){var e=Object(y.a)(["\nmutation($token:String!){\n  login(token:$token)\n}"]);return D=function(){return e},e}var G=I()(D()),K=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={token:""},n.onClickLogin=function(e){""!==n.state.token?e({variables:{token:n.state.token}}):alert("Token cannot be empty")},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(x.b,{mutation:G,onCompleted:function(t){t.login&&(localStorage.setItem("token",e.state.token),e.props.history.push("/home"))},onError:function(e){alert(e.message)}},function(t,n){n.loading,n.data,n.error;return r.a.createElement(b.Page,null,r.a.createElement("div",{style:{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement("div",{style:{}},r.a.createElement("div",{style:{marginBottom:20}},r.a.createElement(b.Input,{value:e.state.token,float:!0,onChange:function(t){e.setState({token:t.target.value})},modifier:"material",placeholder:"Token"})),r.a.createElement("div",null,r.a.createElement(b.Button,{onClick:function(){e.onClickLogin(t)},modifier:"large--cta"},"LOGIN")))))})}}]),t}(a.Component),V=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){localStorage.getItem("token",null)||this.props.history.push("/login")}},{key:"render",value:function(){return r.a.createElement(v.c,null,r.a.createElement(v.a,{path:"/home",component:T}),r.a.createElement(v.a,{path:"/login",component:K}),r.a.createElement(v.a,{path:"/create",component:U}))}}]),t}(a.Component);function F(e){return Object(h.b)(e,{stiffness:330,damping:22})}var J=new(n(79).a)({uri:"https://pixelperfect.backtick.in:4000/graph/",request:function(){var e=Object(f.a)(p.a.mark(function e(t){var n;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=localStorage.getItem("token",null),t.setContext({headers:{authorization:n?"Bearer ".concat(n):null}});case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}),Q={atEnter:{opacity:0,scale:1.2},atLeave:{opacity:F(0),scale:F(.8)},atActive:{opacity:F(1),scale:F(1)}},Y=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(x.a,{client:J},r.a.createElement(g.a,null,r.a.createElement(h.a,{atEnter:Q.atEnter,atLeave:Q.atLeave,atActive:Q.atActive,className:"switch-wrapper"},r.a.createElement(v.a,{path:"/",component:V}))))}}]),t}(r.a.Component),Z=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function X(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(r.a.createElement(Y,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");console.log(t),Z?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):X(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):X(t,e)})}}()},82:function(e,t,n){e.exports=n(148)},87:function(e,t,n){},89:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},90:function(e,t,n){}},[[82,1,2]]]);
//# sourceMappingURL=main.849ad374.chunk.js.map