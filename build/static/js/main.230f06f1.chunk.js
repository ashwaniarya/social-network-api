(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{148:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(56),o=n.n(i),l=(n(87),n(8)),c=n(9),s=n(17),u=n(16),d=n(18),p=n(29),m=n.n(p),f=n(40),y=(n(89),n(90),n(37)),h=n(31),g=n(63),v=n(10),b=n(3),E=(n(33),n(34),n(12)),k=n(11),w=n.n(k),C=n(49);function S(){var e=Object(v.a)(["\n      flex-direction:column;\n    "]);return S=function(){return e},e}function x(){var e=Object(v.a)(["\n      flex-direction:row;\n    "]);return x=function(){return e},e}function j(){var e=Object(v.a)(["\n  display:flex;\n  ","\n"]);return j=function(){return e},e}function O(){var e=Object(v.a)(["\n  mutation($_id:ID!,$download:Int,$premium:Boolean,$priority:Int){\n    modifyWallpaper(_id:$_id,download:$download,premium:$premium,priority:$priority){\n      title\n    }\n  }\n"]);return O=function(){return e},e}function T(){var e=Object(v.a)(["\n  mutation($_id:String!){\n    removeWallpaper(_id:$_id){\n      title\n    }\n  }\n"]);return T=function(){return e},e}function I(){var e=Object(v.a)(["\n  mutation($id:String!){\n    removeCategory(id:$id){\n      title\n    }\n  }\n"]);return I=function(){return e},e}function $(){var e=Object(v.a)(["\n  mutation($_id:ID!,$title:String,$subTitle:String,$parent:ID,$priority:Int){\n    modifyCategory(_id:$_id,title:$title,subTitle:$subTitle,parent:$parent,priority:$priority){\n      title\n    }\n  }\n"]);return $=function(){return e},e}var P=w()($()),_=w()(I()),B=w()(T()),L=w()(O()),A=C.b.div(j(),function(e){return"Horizontal"===e.orentation?Object(C.a)(x()):"Vertical"===e.orentation?Object(C.a)(S()):void 0}),W=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).onClickUp=function(){},n.onClickDown=function(){},n.renderWallpapers=function(e){return e.map(function(e){return r.a.createElement(A,{orentation:"Vertical",key:e._id,style:{margin:10,position:"relative",borderRadius:5,boxShadow:"0px 2px 5px #0000007d"}},r.a.createElement(E.b,{mutation:B,onCompleted:function(){console.log("Done")},refetchQueries:[{query:M}]},function(t,n){n.loading,n.data,n.error;return r.a.createElement("div",{style:{position:"absolute"},onClick:function(){t({variables:{_id:e._id}})}},r.a.createElement(b.Button,{modifier:"quiet",onClick:function(){}},r.a.createElement(b.Icon,{icon:"trash"})))}),r.a.createElement("img",{src:e.url,style:{height:200,width:"auto",borderRadius:5}}),r.a.createElement(E.b,{mutation:L,onCompleted:function(){console.log("Done")},refetchQueries:[{query:M}]},function(t,n){n.loading,n.data,n.error;return r.a.createElement("div",{style:{display:"flex",justifyContent:"center",position:"absolute",bottom:0,width:"100%",borderRadius:"0px 0px 5px 5px",backgroundColor:"#ffffffd1"}},r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(b.Button,{modifier:"quiet",onClick:function(){t({variables:{_id:e._id,priority:e.priority+1}})}},r.a.createElement(b.Icon,{icon:"angle-left"})),r.a.createElement("span",{style:{padding:"10px 4px"}},e.priority),e.priority>0?r.a.createElement(b.Button,{modifier:"quiet",onClick:function(){t({variables:{_id:e._id,priority:e.priority-1}})}},r.a.createElement(b.Icon,{icon:"angle-right"})):null),r.a.createElement("div",null,r.a.createElement(b.Button,{modifier:"quiet",onClick:function(){t({variables:{_id:e._id,premium:!e.premium}})}},e.premium?r.a.createElement(b.Icon,{icon:"star",style:{color:"gold"}}):r.a.createElement(b.Icon,{icon:"star-outline",style:{color:"gold"}}))))}))})},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(A,{orentation:"Vertical",style:{padding:"0px 10px",marginBottom:20,marginTop:10}},r.a.createElement(E.b,{mutation:P,refetchQueries:[{query:M}]},function(t,n){n.loading,n.data,n.error;return r.a.createElement(A,{orentation:"Horizontal",style:{justifyContent:"space-between"}},r.a.createElement(A,{orentation:"Vertical"},r.a.createElement("div",null,e.props.title),r.a.createElement("div",{style:{fontSize:12,fontStyle:"italic"}},e.props.subTitle)),r.a.createElement(A,{orentation:"Horizontal"},r.a.createElement(b.Button,{modifier:"quiet",onClick:function(){t({variables:{_id:e.props._id,priority:e.props.priority+1}})}},r.a.createElement(b.Icon,{icon:"angle-up"})),r.a.createElement("span",{style:{padding:"10px 4px"}},e.props.priority),r.a.createElement(b.Button,{modifier:"quiet",onClick:function(){t({variables:{_id:e.props._id,priority:e.props.priority-1}})}},r.a.createElement(b.Icon,{icon:"angle-down"})),r.a.createElement(b.Button,{modifier:"quiet",onClick:function(){e.props.history.push("/createCategory",{_id:e.props._id,title:e.props.title,subTitle:e.props.subTitle,priority:e.props.priority,context:"edit"})}},r.a.createElement(b.Icon,{icon:"edit"})),r.a.createElement(E.b,{mutation:_,refetchQueries:[{query:M}]},function(t,n){n.loading,n.data,n.error;return r.a.createElement(b.Button,{modifier:"quiet",onClick:function(){t({variables:{id:e.props._id}})}},r.a.createElement(b.Icon,{icon:"trash"}))})))}),r.a.createElement(A,{orentation:"Horizontal",style:{overflowX:"scroll"}},this.renderWallpapers(this.props.wallpapers)))}}]),t}(a.Component);W.defaultProps={orentation:"Horizontal",title:"Unamed",subTitle:"Uname Subtitle",priority:1,_id:"",wallpapers:[]};var q=Object(h.f)(W);function D(){var e=Object(v.a)(["\nquery{\n  categories{\n    _id,\n    title,\n    subTitle,\n    priority,\n    allWallpaper{\n      title,\n      url,\n      _id,\n      priority,\n      download,\n      premium\n    }\n  }\n}\n"]);return D=function(){return e},e}var M=w()(D()),H=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={fabList:!1},n.renderSections=function(e){return e.map(function(e){return r.a.createElement(q,{key:e._id,title:e.title,subTitle:e.subTitle,_id:e._id,priority:e.priority,wallpapers:e.allWallpaper})})},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(E.c,{query:M},function(t){var n=t.loading,a=t.data,i=t.error;return n?r.a.createElement("div",null,"Loading"):i?r.a.createElement("div",null,i.message):r.a.createElement(b.Page,{renderToolbar:function(){return r.a.createElement(b.Toolbar,null,r.a.createElement("div",{className:"left"},r.a.createElement(b.ToolbarButton,null,r.a.createElement(b.Icon,{icon:"md-menu"}))),r.a.createElement("div",{className:"center"},"Home"),r.a.createElement("div",{className:"right"},r.a.createElement(b.ToolbarButton,{onClick:function(){localStorage.removeItem("token"),e.props.history.push("/login")}},r.a.createElement(b.Icon,{icon:"sign-out"}))))}},r.a.createElement(b.Modal,{onClick:function(){e.setState({fabList:!1})},animation:"fade",isOpen:e.state.fabList},r.a.createElement("div",null,r.a.createElement(b.Button,{style:{color:"#fff"},onClick:function(){e.props.history.push("/createCategory",{context:"create"})},modifier:"large--quiet"},"Add Category"),r.a.createElement(b.Button,{style:{color:"#fff"},onClick:function(){e.props.history.push("/create")},modifier:"large--quiet"},"Add Wallpaper"))),r.a.createElement(b.Fab,{style:{position:"fixed",bottom:20,right:20},onClick:function(){e.setState({fabList:!0})}},r.a.createElement(b.Icon,{icon:"fa-plus",size:26,fixedWidth:!1,style:{verticalAlign:"middle"}})),r.a.createElement("div",null,e.renderSections(a.categories)))})}}]),t}(a.Component),N=n(48),z=n(77),R=n(78),U=n.n(R),Q=n(42),G={bucketName:"backtickapp",dirName:"pixelperfect",region:"ap-south-1",accessKeyId:"AKIAIISG4BYPSE3Z2GSQ",secretAccessKey:"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"};function V(){var e=Object(v.a)(["\nmutation($title:String!,$url:String!,$category:[ID!],$premium:Boolean,$priority:Int){\n  addWallpaper(title:$title,url:$url,category:$category,premium:$premium,priority:$priority){\n    title\n  }\n}\n"]);return V=function(){return e},e}function F(){var e=Object(v.a)(["\nquery{\n  categories{\n    _id,\n    title\n  }\n}\n"]);return F=function(){return e},e}var K=w()(F()),Y=w()(V()),J=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={title:"",premium:!1,priority:0,category:{},categoryListModal:!1,url:null,file:null},n.uploadImage=function(e){if(console.log(n.state.file),n.state.file)U.a.uploadFile(n.state.file,G).then(function(t){console.log(t);var a=[];Object(Q.map)(n.state.category,function(e){a.push(e._id)});var r={url:t.location,title:n.state.title,premium:n.state.premium,priority:n.state.priority,category:a};console.log(r),e({variables:r})}).catch(function(e){return console.log(e)});else{var t=[];Object(Q.map)(n.state.category,function(e){t.push(e._id)});var a={url:n.state.url,title:n.state.title,premium:n.state.premium,priority:n.state.priority,category:t};e({variables:a})}},n.onClickAddCategory=function(e){n.setState({category:Object(z.a)({},n.state.category,Object(N.a)({},e._id,e))})},n.removeCategory=function(e){var t=n.state.category;delete t[e],n.setState({category:t})},n.renderCategory=function(e){return r.a.createElement(b.List,{dataSource:e,renderHeader:n.renderHeader,renderRow:function(e,t){return r.a.createElement(b.ListItem,{key:e._id,style:{height:40},onClick:function(){n.onClickAddCategory(e)},modifier:t===n.state.category.length-1?"longdivider":null},e.title)}})},n.onClickAddWallpaper=function(e){null!==n.state.file||null!==n.state.url&&""!==n.state.url?""!==n.state.title?Object(Q.isEmpty)(n.state.category)?alert("Please select at least one category"):n.uploadImage(e):alert("Title can't be empty"):alert("Please select the image or enter an url")},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var e=this;return r.a.createElement(b.Page,{renderToolbar:function(){return r.a.createElement(b.Toolbar,null,r.a.createElement("div",{className:"left"},r.a.createElement(b.BackButton,{onClick:function(){e.props.history.goBack()}},"Back")),r.a.createElement("div",{className:"center"},"Create"))}},r.a.createElement(b.Modal,{onClick:function(){e.setState({categoryListModal:!1})},animation:"lift",isOpen:this.state.categoryListModal},r.a.createElement(E.c,{query:K},function(t){var n=t.loading,a=t.data;t.error;if(n)return r.a.createElement("div",null,"Loading ...");if(a){var i=a.categories.filter(function(t){return!e.state.category[t._id]});return r.a.createElement("div",null,e.renderCategory(i))}})),r.a.createElement("div",{style:{padding:10}},r.a.createElement("div",null,r.a.createElement("input",{type:"file",id:"multi",onChange:function(t){if(console.log(t.target.value),t.target.files[0]){var n=t.target.files[0].name.split(".");"jpg"===(n=n[n.length-1])||"jpeg"===n||"png"===n?e.setState({file:t.target.files[0]}):(t.preventDefault(),alert("Only jpg, jpeg, png is allowed"))}},multiple:!0})),r.a.createElement("div",null,r.a.createElement("h4",{style:{textAlign:"center"}},"OR")),r.a.createElement("div",{style:{padding:"10px 0px",marginTop:20}},r.a.createElement(b.Input,{style:{width:"100%"},value:this.state.url,float:!0,onChange:function(t){e.setState({url:t.target.value})},modifier:"material",placeholder:"Wallpaper url"})),r.a.createElement("div",null,r.a.createElement("div",{style:{padding:"10px 0px",marginTop:20}},r.a.createElement(b.Input,{style:{width:"100%"},value:this.state.title,float:!0,onChange:function(t){e.setState({title:t.target.value})},modifier:"material",placeholder:"Wallpaper Title"})),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(b.List,{style:{display:"flex",flexWrap:"wrap"},dataSource:Object(Q.values)(this.state.category),renderHeader:this.renderHeader,renderRow:function(t,n){return r.a.createElement("div",{key:t._id,style:{borderRadius:5,padding:5,fontSize:12,margin:5,border:"1px solid rgb(55, 146, 189)",backgroundColor:"#dae7ff"}},t.title,r.a.createElement(b.Button,{onClick:function(){e.removeCategory(t._id)},style:{backgroundColor:"transparent",padding:"0px 10px",color:"#000"}},r.a.createElement(b.Icon,{icon:{default:"times-circle",material:"times-circle"}})))}})),r.a.createElement("div",{style:{padding:"10px 0px"}},r.a.createElement(b.Button,{onClick:function(){e.setState({categoryListModal:!0})},modifier:"large--quiet"},"Add Category")))),r.a.createElement("div",null,r.a.createElement(b.Checkbox,{onChange:function(t){e.setState({premium:t.target.checked})},modifier:"material"}),r.a.createElement("span",null," Premium ")),r.a.createElement("div",{style:{padding:"10px 0px",marginTop:20}},r.a.createElement(b.Input,{style:{width:"100%"},value:this.state.priority,float:!0,onChange:function(t){t.target.value?e.setState({priority:parseInt(t.target.value)}):e.setState({priority:""})},modifier:"material",placeholder:"Wallpaper Title"})),r.a.createElement("div",{style:{padding:"10px 0px"}},r.a.createElement(E.b,{mutation:Y,onCompleted:function(t){console.log("Done",t),e.props.history.goBack()},refetchQueries:[{query:M}]},function(t,n){var a=n.loading;n.data,n.error;return a?r.a.createElement("div",null,"loading ..."):r.a.createElement(b.Button,{onClick:function(){e.onClickAddWallpaper(t)},modifier:"material"},"Add")})))))}}]),t}(a.Component);function Z(){var e=Object(v.a)(["\nmutation($token:String!){\n  login(token:$token)\n}"]);return Z=function(){return e},e}var X=w()(Z()),ee=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={token:""},n.onClickLogin=function(e){""!==n.state.token?e({variables:{token:n.state.token}}):alert("Token cannot be empty")},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(E.b,{mutation:X,onCompleted:function(t){t.login&&(localStorage.setItem("token",e.state.token),e.props.history.push("/home"))},onError:function(e){alert(e.message)}},function(t,n){n.loading,n.data,n.error;return r.a.createElement(b.Page,null,r.a.createElement("div",{style:{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement("div",{style:{}},r.a.createElement("div",{style:{marginBottom:20}},r.a.createElement(b.Input,{value:e.state.token,float:!0,onChange:function(t){e.setState({token:t.target.value})},modifier:"material",placeholder:"Token"})),r.a.createElement("div",null,r.a.createElement(b.Button,{onClick:function(){e.onClickLogin(t)},modifier:"large--cta"},"LOGIN")))))})}}]),t}(a.Component);function te(){var e=Object(v.a)(["\n  mutation($_id:ID!,$title:String,$subTitle:String,$parent:ID,$priority:Int){\n    modifyCategory(_id:$_id,title:$title,subTitle:$subTitle,parent:$parent,priority:$priority){\n      title\n    }\n  }\n"]);return te=function(){return e},e}function ne(){var e=Object(v.a)(["\n  mutation($title:String!,$subTitle:String!,$parent:ID,$priority:Int){\n    addCategory(title:$title,subTitle:$subTitle,parent:$parent,priority:$priority){\n      title\n    }\n  }\n"]);return ne=function(){return e},e}function ae(){var e=Object(v.a)(["\nquery{\n  categories{\n    _id,\n    title\n  }\n}\n"]);return ae=function(){return e},e}var re=w()(ae()),ie=w()(ne()),oe=w()(te()),le=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={title:"",subTitle:"",parent:null,priority:1,categoryListModal:!1},n.renderCategory=function(e){return r.a.createElement(b.List,{dataSource:e,renderHeader:n.renderHeader,renderRow:function(e,t){return r.a.createElement(b.ListItem,{key:e._id,style:{height:40},onClick:function(){n.onClickAddCategory(e)}},e.title)}})},n.onClickAddCategory=function(e){n.setState({parent:e})},n.onClickAdd=function(e){if(""!==n.state.title)if(""!==n.state.subTitle)if(""!==n.state.priority){var t={title:n.state.title,subTitle:n.state.subTitle,priority:n.state.priority,parent:n.state.parent?n.state.parent._id:null};"edit"===n.props.location.state.context&&(t._id=n.props.location.state._id),e({variables:t})}else alert("Priority can't be empty");else alert("SubTitle can't be empty");else alert("Title can't be empty")},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){"edit"===this.props.location.state.context&&this.setState({title:this.props.location.state.title,subTitle:this.props.location.state.subTitle,priority:this.props.location.state.priority})}},{key:"render",value:function(){var e=this;return r.a.createElement(b.Page,{renderToolbar:function(){return r.a.createElement(b.Toolbar,null,r.a.createElement("div",{className:"left"},r.a.createElement(b.BackButton,{onClick:function(){e.props.history.goBack()}},"Back")),r.a.createElement("div",{className:"center"},"create"===e.props.location.state.context?"Create Category":"Edit Category"))}},r.a.createElement(b.Modal,{onClick:function(){e.setState({categoryListModal:!1})},animation:"lift",isOpen:this.state.categoryListModal},r.a.createElement(E.c,{query:re},function(t){var n=t.loading,a=t.data;t.error;if(n)return r.a.createElement("div",null,"Loading ...");if(a){var i=a.categories.filter(function(t){return!e.state.parent||(!e.state.parent||e.state.parent._id!==t._id)});return r.a.createElement("div",null,e.renderCategory(i))}})),r.a.createElement("div",{style:{padding:20}},r.a.createElement("div",{style:{padding:"10px 0px"}},r.a.createElement(b.Input,{style:{width:"100%"},value:this.state.title,float:!0,onChange:function(t){e.setState({title:t.target.value})},modifier:"material",placeholder:"Category title"})),r.a.createElement("div",{style:{padding:"10px 0px"}},r.a.createElement(b.Input,{style:{width:"100%"},value:this.state.subTitle,float:!0,onChange:function(t){e.setState({subTitle:t.target.value})},modifier:"material",placeholder:"Category Sub title"})),r.a.createElement("div",{style:{padding:"10px 0px"}},r.a.createElement(b.Input,{style:{width:"100%"},type:"tel",value:this.state.priority,float:!0,onChange:function(t){t.target.value?e.setState({priority:parseInt(t.target.value)}):e.setState({priority:""})},modifier:"material",placeholder:"Priority"})),"create"===this.props.location.state.context?r.a.createElement(a.Fragment,null,r.a.createElement("div",{style:{padding:"10px 0px"}},r.a.createElement("span",null,"Parent Category: "),r.a.createElement("span",null,this.state.parent?this.state.parent.title:"null"),this.state.parent&&r.a.createElement("span",null,r.a.createElement(b.Button,{onClick:function(){e.setState({parent:null})},style:{backgroundColor:"transparent",padding:"0px 10px",color:"#000"}},r.a.createElement(b.Icon,{icon:{default:"times-circle",material:"times-circle"}})))),r.a.createElement("div",{style:{padding:"10px 0px"}},r.a.createElement(b.Button,{onClick:function(){e.setState({categoryListModal:!0})},modifier:"large--quiet"},"Add Parent Category"))):null,r.a.createElement("div",{style:{padding:"10px 0px"}},"create"===this.props.location.state.context?r.a.createElement(E.b,{mutation:ie,onCompleted:function(t){console.log("Done",t),e.props.history.goBack()},refetchQueries:[{query:M}]},function(t,n){var a=n.loading;n.data,n.error;return a?r.a.createElement("div",null,"loading ..."):r.a.createElement(b.Button,{onClick:function(){e.onClickAdd(t)},modifier:"material"},"Add")}):r.a.createElement(E.b,{mutation:oe,onCompleted:function(t){console.log("Done"),e.props.history.goBack()},refetchQueries:[{query:M}]},function(t,n){var a=n.loading;n.data,n.error;return a?r.a.createElement("div",null,"loading ..."):r.a.createElement(b.Button,{onClick:function(){e.onClickAdd(t)},modifier:"material"},"Update")}))))}}]),t}(a.Component);le.defaultProps={context:"create"};var ce=le,se=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){localStorage.getItem("token",null)?this.props.history.push("./home"):this.props.history.push("/login")}},{key:"render",value:function(){return r.a.createElement(h.c,null,r.a.createElement(h.a,{path:"/home",component:H}),r.a.createElement(h.a,{path:"/login",component:ee}),r.a.createElement(h.a,{path:"/create",component:J}),r.a.createElement(h.a,{path:"/createCategory",component:ce}))}}]),t}(a.Component),ue=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=r.a.createElement("div",{style:{padding:20,backgroundColor:"#fff"}},r.a.createElement("p",null,"BackTick Infotech LLP built the PixelPerfect app as an Ad Supported app. This SERVICE is provided by BackTick Infotech LLP at no cost and is intended for use as is. This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service. If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy. The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at PixelPerfect unless otherwise defined in this Privacy Policy."),r.a.createElement("h3",null,"Information Collection and Use"),r.a.createElement("p",null,"For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information. The information that we request will be retained by us and used as described in this privacy policy."),r.a.createElement("p",null,"The app does use third party services that may collect information used to identify you."),r.a.createElement("h5",null,"Link to privacy policy of third party service providers used by the app"),r.a.createElement("ul",null,r.a.createElement("li",null," Google Play Services ",r.a.createElement("a",{href:"https://www.google.com/policies/privacy/"},"(https://www.google.com/policies/privacy/)")),r.a.createElement("li",null," AdMob ",r.a.createElement("a",{href:"https://support.google.com/admob/answer/6128543?hl=en"},"(https://support.google.com/admob/answer/6128543?hl=en)"))),r.a.createElement("h3",null,"Log Data"),r.a.createElement("p",null,"We want to inform you that whenever you use our Service, in a case of an error in the app we collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (\u201cIP\u201d) address, device name, operating system version, the configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics."),r.a.createElement("h3",null,"Cookies"),r.a.createElement("p",null,"Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory."),r.a.createElement("p",null,"This Service does not use these \u201ccookies\u201d explicitly. However, the app may use third party code and libraries that use \u201ccookies\u201d to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service."),r.a.createElement("h3",null,"Service Providers"),r.a.createElement("h5",null,"We may employ third-party companies and individuals due to the following reasons:"),r.a.createElement("ul",null,r.a.createElement("li",null,"To facilitate our Service"),r.a.createElement("li",null,"To provide the Service on our behalf"),r.a.createElement("li",null,"To perform Service-related services"),r.a.createElement("li",null,"To assist us in analyzing how our Service is used.")),r.a.createElement("p",null,"We want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose."),r.a.createElement("h3",null,"Security"),r.a.createElement("p",null,"We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security."),r.a.createElement("h3",null,"Links to Other Sites"),r.a.createElement("p",null,"This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services."),r.a.createElement("h3",null,"Children\u2019s Privacy"),r.a.createElement("p",null,"These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13\\. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions."),r.a.createElement("h3",null,"Changes to This Privacy Policy"),r.a.createElement("p",null,"We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted on this page."),r.a.createElement("h3",null,"Contact Us"),r.a.createElement("p",null,"If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at backtickinfotech@gmail.com "));return r.a.createElement(b.Page,{renderToolbar:function(){return r.a.createElement(b.Toolbar,null,r.a.createElement("div",{className:"center"},"Privacy Policy"))}},e)}}]),t}(a.Component);function de(e){return Object(g.b)(e,{stiffness:330,damping:22})}var pe=new(n(79).a)({uri:"https://pixelperfect.backtick.in/graph/",request:function(){var e=Object(f.a)(m.a.mark(function e(t){var n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=localStorage.getItem("token",null),t.setContext({headers:{authorization:n?"Bearer ".concat(n):null}});case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}),me={atEnter:{opacity:0,scale:1.2},atLeave:{opacity:de(0),scale:de(.8)},atActive:{opacity:de(1),scale:de(1)}},fe=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(E.a,{client:pe},r.a.createElement(y.a,null,r.a.createElement(g.a,{atEnter:me.atEnter,atLeave:me.atLeave,atActive:me.atActive,className:"switch-wrapper"},r.a.createElement(h.a,{path:"/privacy",component:ue}),r.a.createElement(h.a,{path:"/",component:se}))))}}]),t}(r.a.Component),ye=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function he(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(r.a.createElement(fe,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");console.log(t),ye?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):he(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):he(t,e)})}}()},82:function(e,t,n){e.exports=n(148)},87:function(e,t,n){},89:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},90:function(e,t,n){}},[[82,1,2]]]);
//# sourceMappingURL=main.230f06f1.chunk.js.map