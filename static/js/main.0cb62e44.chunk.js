(this["webpackJsonpcolor-project"]=this["webpackJsonpcolor-project"]||[]).push([[0],{269:function(e,a,t){e.exports=t(509)},274:function(e,a,t){},337:function(e,a,t){},509:function(e,a,t){"use strict";t.r(a);var o,n=t(0),r=t.n(n),l=t(7),c=t.n(l),i=t(40),s=(t(274),t(110)),m=t(20),d=t(21),u=t(8),h=t(25),p=t(24),g=t(27),b=t(572),f=t(570),v=t(12),C=t(243),y=t(16),E=t.n(y),x=t(512),k=t(61),j=t.n(k),w=function(e){return"@media (max-width: ".concat({xs:"575.98px",sm:"767.98px",md:"991.98px",lg:"1199.98px",xl:"1600px"}[e],")")},O={ColorBox:(o={width:"20%",height:function(e){return e.showingFullPalette?"25%":"50%"},margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-3.5px","&:hover button":{opacity:1}},Object(v.a)(o,w("lg"),{width:"25%",height:function(e){return e.showingFullPalette?"20%":"33.3333%"}}),Object(v.a)(o,w("md"),{width:"50%",height:function(e){return e.showingFullPalette?"10%":"20%"}}),Object(v.a)(o,w("xs"),{width:"100%",height:function(e){return e.showingFullPalette?"5%":"10%"}}),o),copyText:{color:function(e){return j()(e.background).luminance()>=.7?"black":"white"}},colorName:{color:function(e){return j()(e.background).luminance()<=.08?"white":"black"}},seeMore:{color:function(e){return j()(e.background).luminance()>=.7?"rgba(0,0,0,0.6)":"white"},background:"rgba(255, 255, 255, 0.3)",position:"absolute",border:"none",right:"0px",bottom:"0px",width:"60px",height:"30px",textAlign:"center",lineHeight:"30px",textTransform:"uppercase"},copyButton:{color:function(e){return j()(e.background).luminance()>=.7?"rgba(0,0,0,0.6)":"white"},width:"100px",height:"30px",position:"absolute",display:"inline-block",top:"50%",left:"50%",marginLeft:"-50px",marginTop:"-15px",textAlign:"center",outline:"none",background:"rgba(255, 255, 255, 0.3)",fontSize:"1rem",lineHeight:"30px",textTransform:"uppercase",border:"none",textDecoration:"none",opacity:0},boxContent:{position:"absolute",width:"100%",left:"0px",bottom:"0px",padding:"10px",color:"black",letterSpacing:"1px",textTransform:"uppercase",fontSize:"12px"},copyOverlay:{opacity:"0",zIndex:"0",width:"100%",height:"100%",transition:"transform 0.6s ease-in-out",transform:"scale(0.1)"},showOverlay:{opacity:"1",transform:"scale(50)",zIndex:"10",position:"absolute"},copyMessage:{position:"fixed",left:"0",right:"0",top:"0",bottom:"0",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",fontSize:"4rem",transform:"scale(0.1)",opacity:"0",color:"white","& h1":Object(v.a)({fontWeight:"bold",background:"#05dfd7",width:"100%",textAlign:"center",marginBottom:"0",padding:"1rem",color:"#363636"},w("xs"),{fontSize:"6rem"}),"& p":{fontSize:"2rem",fontWeight:"100"}},showMessage:{opacity:"1",transform:"scale(1)",zIndex:"25",transition:"all 0.4s ease-in-out",transitionDelay:"0.3s"}},S=function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(e){var o;return Object(m.a)(this,t),(o=a.call(this,e)).state={copied:!1},o.changeCopyState=o.changeCopyState.bind(Object(u.a)(o)),o}return Object(d.a)(t,[{key:"changeCopyState",value:function(){var e=this;this.setState({copied:!0},(function(){setTimeout((function(){return e.setState({copied:!1})}),1500)}))}},{key:"render",value:function(){var e=this.props,a=e.name,t=e.background,o=e.moreUrl,n=e.showingFullPalette,l=e.classes,c=this.state.copied;return r.a.createElement(C.CopyToClipboard,{text:t,onCopy:this.changeCopyState},r.a.createElement("div",{style:{background:t},className:l.ColorBox},r.a.createElement("div",{style:{background:t},className:E()(l.copyOverlay,Object(v.a)({},l.showOverlay,c))}),r.a.createElement("div",{className:E()(l.copyMessage,Object(v.a)({},l.showMessage,c))},r.a.createElement("h1",null,"Copied!"),r.a.createElement("p",{className:l.copyText},t)),r.a.createElement("div",null,r.a.createElement("div",{className:l.boxContent},r.a.createElement("span",{className:l.colorName},a)),r.a.createElement("button",{className:l.copyButton},"Copy")),n&&r.a.createElement(i.b,{to:o,onClick:function(e){return e.stopPropagation()}},r.a.createElement("span",{className:l.seeMore},"MORE"))))}}]),t}(n.Component),N=Object(x.a)(O)(S),P=t(569),F=t(555),B=t(571),D=t(556),I=t(136),A=t.n(I),T=t(252),L=(t(336),{Navbar:{backgroundColor:"#363636",color:"#05dfd7",display:"flex",alignItems:"center",justifyContent:"flex-start",height:"6vh"},logo:Object(v.a)({marginRight:"15px",padding:"0 13px",fontSize:"22px",backgroundColor:"#1b262c",height:"100%",display:"flex",alignItems:"center","& a":{textDecoration:"none",color:"#05dfd7",fontWeight:"bold"}},w("xs"),{display:"none"}),slider:Object(v.a)({width:"340px",margin:"0 10px",display:"inline-block","& .rc-slider-track":{backgroundColor:"transparent"},"& .rc-slider-rail":{height:"8px",backgroundColor:"#1b262c"},"& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus,.rc-slider-handle:hover":{backgroundColor:"#05dfd7",outline:"none",boxShadow:"none",width:"24px",height:"24px",marginLeft:"-10px",marginTop:"-8px"}},w("sm"),{width:"150px"}),selectContainer:{backgroundColor:"white",padding:"0 5px",borderRadius:"5px",marginLeft:"auto",marginRight:"1rem"}}),R=function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(e){var o;return Object(m.a)(this,t),(o=a.call(this,e)).state={format:"hex",open:!1},o.handleFormatChange=o.handleFormatChange.bind(Object(u.a)(o)),o.closeSnackbar=o.closeSnackbar.bind(Object(u.a)(o)),o}return Object(d.a)(t,[{key:"handleFormatChange",value:function(e){this.setState({format:e.target.value,open:!0}),this.props.handleChange(e.target.value)}},{key:"closeSnackbar",value:function(){this.setState({open:!1})}},{key:"render",value:function(){var e=this.props,a=e.level,t=e.changeLevel,o=e.showingAllColors,n=e.classes,l=this.state.format;return r.a.createElement("header",{className:n.Navbar},r.a.createElement("div",{className:n.logo},r.a.createElement(i.b,{to:"/"},"ColorPicker")),o&&r.a.createElement("div",null,r.a.createElement("span",null,"Level: ",a),r.a.createElement("div",{className:n.slider},r.a.createElement(T.a,{defaultValue:a,min:100,max:900,step:100,onAfterChange:t}))),r.a.createElement("div",{className:n.selectContainer},r.a.createElement(P.a,{value:l,onChange:this.handleFormatChange},r.a.createElement(F.a,{value:"hex"},"HEX - #ffffff"),r.a.createElement(F.a,{value:"rgb"},"RGB - rgb(255,255,255)"),r.a.createElement(F.a,{value:"rgba"},"RGBA - rgba(255,255,255, 1.0)"))),r.a.createElement(B.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.state.open,autoHideDuration:3e3,message:r.a.createElement("span",{id:"message-id"},"Format Changed To ",l.toUpperCase()),ContentProps:{"aria-describedby":"message-id"},onClose:this.closeSnackbar,action:[r.a.createElement(D.a,{onClick:this.closeSnackbar,color:"inherit",key:"close","aria-label":"close"},r.a.createElement(A.a,null))]}))}}]),t}(n.Component),G=Object(x.a)(L)(R);var M,z,U,H=Object(x.a)({PaletteFooter:{backgroundColor:"#363636",color:"#05dfd7",height:"5vh",display:"flex",justifyContent:"flex-end",alignItems:"center",fontWeight:"bold"},emoji:{fontSize:"1.5rem",margin:"0 1rem"}})((function(e){var a=e.paletteName,t=e.emoji,o=e.classes;return r.a.createElement("footer",{className:o.PaletteFooter},a,r.a.createElement("span",{className:o.emoji},t))})),W={Palette:{height:"100vh",display:"flex",flexDirection:"column",backgroundColor:"#363636"},colors:{height:"90%"},goBack:(M={width:"20%",height:"50%",margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-3.5px",opacity:1,backgroundColor:"#363636","& a":{color:"white",width:"100px",height:"30px",position:"absolute",display:"inline-block",top:"50%",left:"50%",marginLeft:"-50px",marginTop:"-15px",textAlign:"center",outline:"none",background:"rgba(255, 255, 255, 0.3)",fontSize:"1rem",lineHeight:"30px",textTransform:"uppercase",border:"none",textDecoration:"none"}},Object(v.a)(M,w("lg"),{width:"25%",height:"33.3333%"}),Object(v.a)(M,w("md"),{width:"50%",height:"20%"}),Object(v.a)(M,w("xs"),{width:"100%",height:"10%"}),M)},V=function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(e){var o;return Object(m.a)(this,t),(o=a.call(this,e)).state={level:500,format:"hex"},o.changeLevel=o.changeLevel.bind(Object(u.a)(o)),o.changeFormat=o.changeFormat.bind(Object(u.a)(o)),o}return Object(d.a)(t,[{key:"changeLevel",value:function(e){this.setState({level:e})}},{key:"changeFormat",value:function(e){this.setState({format:e})}},{key:"render",value:function(){var e=this.props.palette,a=e.colors,t=e.paletteName,o=e.emoji,n=e.id,l=this.props.classes,c=this.state,i=c.level,s=c.format,m=a[i].map((function(e){return r.a.createElement(N,{background:e[s],name:e.name,key:e.id,moreUrl:"/palette/".concat(n,"/").concat(e.id),showingFullPalette:!0})}));return r.a.createElement("div",{className:l.Palette},r.a.createElement(G,{level:i,changeLevel:this.changeLevel,handleChange:this.changeFormat,showingAllColors:!0}),r.a.createElement("div",{className:l.colors},m),r.a.createElement(H,{paletteName:t,emoji:o}))}}]),t}(n.Component),q=Object(x.a)(W)(V),J=t(557),Y=t(554),K=t(510),_=t(559),Q=t(573),X=t(560),$=t(247),Z=t.n($),ee=t(558),ae=t(137),te=t.n(ae),oe=function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(e){var o;return Object(m.a)(this,t),(o=a.call(this,e)).deletePalette=o.deletePalette.bind(Object(u.a)(o)),o.handleClick=o.handleClick.bind(Object(u.a)(o)),o}return Object(d.a)(t,[{key:"deletePalette",value:function(e){e.stopPropagation(),this.props.openDialog(this.props.id)}},{key:"handleClick",value:function(){this.props.goToPalette(this.props.id)}},{key:"render",value:function(){var e=this.props,a=e.classes,t=e.paletteName,o=e.emoji,n=e.colors.map((function(e){return r.a.createElement("div",{className:a.miniColor,style:{backgroundColor:e.color},key:e.name})}));return r.a.createElement("div",{className:a.root,onClick:this.handleClick},r.a.createElement(te.a,{className:a.deleteIcon,style:{transition:"all 0.3s ease-in-out"},onClick:this.deletePalette}),r.a.createElement("div",{className:a.colors},n),r.a.createElement("h5",{className:a.title},t," ",r.a.createElement("span",{className:a.emoji},o)))}}]),t}(n.PureComponent),ne=Object(x.a)({root:{backgroundColor:"#1b262c",border:"none",borderRadius:"5px",padding:"0.5rem",position:"relative",overflow:"hidden",cursor:"pointer","&:hover svg":{opacity:1}},colors:{backgroundColor:"#dae1e4",height:"150px",width:"100%",borderRadius:"5px",overflow:"hidden"},title:{display:"flex",color:"#05dfd7",justifyContent:"space-between",alignItems:"center",margin:"0",paddingTop:"0.5rem",fontSize:"1rem",position:"relative"},emoji:{marginLeft:"0.5rem",fontSize:"1.5rem"},miniColor:{height:"25%",width:"20%",display:"inline-block",margin:"0 auto",position:"relative",marginBottom:"-3.5px"},delete:{},deleteIcon:{color:"white",backgroundColor:"#1b262c",width:"20px",height:"20px",position:"absolute",right:"0px",top:"0px",padding:"10px",zIndex:10,opacity:0}})(oe),re=t(179),le=t.n(re),ce=t(180),ie=t.n(ce),se={"@global":{".fade-exit":{opacity:1},".fade-exit-active":{opacity:0,transition:"opacity 500ms ease-out"}},root:{height:"100vh",display:"flex",alignItems:"flex-start",justifyContent:"center",backgroundColor:"#363636",overflow:"scroll"},heading:{fontSize:"2rem"},container:(z={width:"50%",display:"flex",alignItems:"flex-start",flexDirection:"column",flexWrap:"wrap"},Object(v.a)(z,w("xl"),{width:"80%"}),Object(v.a)(z,w("xs"),{width:"75%"}),z),nav:{display:"flex",width:"100%",justifyContent:"space-between",alignItems:"center",color:"#05dfd7","& a":{color:"#05dfd7",border:"1px solid #05dfd7",backgroundColor:"#1b262c",padding:"12px 17px",borderRadius:"30px",textDecoration:"none",fontWeight:"bold"}},palettes:(U={boxSizing:"border-box",width:"100%",display:"grid",gridTemplateColumns:"repeat(3, 30%)",gridGap:"2.5rem"},Object(v.a)(U,w("md"),{gridTemplateColumns:"repeat(2, 50%)"}),Object(v.a)(U,w("xs"),{gridTemplateColumns:"repeat(1, 100%)",gridGap:"1.4rem"}),U)},me=function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(e){var o;return Object(m.a)(this,t),(o=a.call(this,e)).state={openDeleteDialog:!1,deletingId:""},o.openDialog=o.openDialog.bind(Object(u.a)(o)),o.closeDialog=o.closeDialog.bind(Object(u.a)(o)),o.handleDelete=o.handleDelete.bind(Object(u.a)(o)),o.goToPalette=o.goToPalette.bind(Object(u.a)(o)),o}return Object(d.a)(t,[{key:"openDialog",value:function(e){this.setState({openDeleteDialog:!0,deletingId:e})}},{key:"closeDialog",value:function(){this.setState({openDeleteDialog:!1,deletingId:""})}},{key:"goToPalette",value:function(e){this.props.history.push("/palette/".concat(e))}},{key:"handleDelete",value:function(){this.props.deletePalette(this.state.deletingId),this.closeDialog()}},{key:"render",value:function(){var e=this,a=this.props,t=a.palettes,o=a.classes,n=this.state.openDeleteDialog;return r.a.createElement("div",{className:o.root},r.a.createElement("div",{className:o.container},r.a.createElement("nav",{className:o.nav},r.a.createElement("h1",{className:o.heading},"ColorPicker"),r.a.createElement(i.b,{to:"/palette/new"},"Create Palette")),r.a.createElement(b.a,{className:o.palettes},t.map((function(a){return r.a.createElement(f.a,{key:a.id,classNames:"fade",timeout:500},r.a.createElement(ne,Object.assign({},a,{goToPalette:e.goToPalette,openDialog:e.openDialog,key:a.id,id:a.id})))})))),r.a.createElement(J.a,{open:n,"aria-labelledby":"delete-dialog-title",onClose:this.closeDialog},r.a.createElement(ee.a,{id:"delete-dialog-title"},"Delete This Palette?"),r.a.createElement(Y.a,null,r.a.createElement(K.a,{button:!0,onClick:this.handleDelete},r.a.createElement(_.a,null,r.a.createElement(Q.a,{style:{backgroundColor:le.a[100],color:le.a[600]}},r.a.createElement(Z.a,null))),r.a.createElement(X.a,{primary:"Delete"})),r.a.createElement(K.a,{button:!0,onClick:this.closeDialog},r.a.createElement(_.a,null,r.a.createElement(Q.a,{style:{backgroundColor:ie.a[100],color:ie.a[600]}},r.a.createElement(A.a,null))),r.a.createElement(X.a,{primary:"Cancel"})))))}}]),t}(n.Component),de=Object(x.a)(se)(me),ue=function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(e){var o;return Object(m.a)(this,t),(o=a.call(this,e))._shades=o.gatherShades(o.props.palette,o.props.colorId),o.state={format:"hex"},o.changeFormat=o.changeFormat.bind(Object(u.a)(o)),o}return Object(d.a)(t,[{key:"gatherShades",value:function(e,a){var t=[],o=e.colors;for(var n in o)t=t.concat(o[n].filter((function(e){return e.id===a})));return t.slice(1)}},{key:"changeFormat",value:function(e){this.setState({format:e})}},{key:"render",value:function(){var e=this.state.format,a=this.props.palette,t=a.paletteName,o=a.emoji,n=a.id,l=this.props.classes,c=this._shades.map((function(a){return r.a.createElement(N,{key:a.name,name:a.name,background:a[e],showingFullPalette:!1})}));return r.a.createElement("div",{className:l.Palette},r.a.createElement(G,{handleChange:this.changeFormat,showingAllColors:!1}),r.a.createElement("div",{className:l.colors},c,r.a.createElement("div",{className:l.goBack},r.a.createElement(i.b,{to:"/palette/".concat(n)},"GO BACK"))),r.a.createElement(H,{paletteName:t,emoji:o}))}}]),t}(n.Component),he=Object(x.a)(W)(ue);t(337);var pe,ge=function(e){var a=e.children;return r.a.createElement("section",{className:"page"},a)},be=t(5),fe=t(564),ve=t(563),Ce=t(561),ye=t(562),Ee=t(64),xe=t(253),ke=(t(346),function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(e){var o;return Object(m.a)(this,t),(o=a.call(this,e)).handleClickOpen=function(){o.setState({open:!0})},o.handleClose=function(){o.setState({open:!1})},o.state={stage:"form",newPaletteName:""},o.handleChange=o.handleChange.bind(Object(u.a)(o)),o.showEmojiPicker=o.showEmojiPicker.bind(Object(u.a)(o)),o.savePalette=o.savePalette.bind(Object(u.a)(o)),o}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;Ee.ValidatorForm.addValidationRule("isPaletteNameUnique",(function(a){return e.props.palettes.every((function(e){return e.paletteName.toLowerCase()!==a.toLowerCase()}))}))}},{key:"handleChange",value:function(e){this.setState(Object(v.a)({},e.target.name,e.target.value))}},{key:"showEmojiPicker",value:function(){this.setState({stage:"emoji"})}},{key:"savePalette",value:function(e){var a={paletteName:this.state.newPaletteName,emoji:e.native};this.props.handleSubmit(a),this.setState({stage:""})}},{key:"render",value:function(){var e=this.state,a=e.newPaletteName,t=e.stage,o=this.props.hideForm;return r.a.createElement("div",null,r.a.createElement(J.a,{open:"emoji"===t,onClose:o},r.a.createElement(ee.a,{id:"form-dialog-title"},"Choose a Palette Emoji"),r.a.createElement(xe.a,{title:"Pick a Palette Emoji",onSelect:this.savePalette})),r.a.createElement(J.a,{open:"form"===t,"aria-labelledby":"form-dialog-title",onClose:o},r.a.createElement(ee.a,{id:"form-dialog-title"},"Choose a Palette Name"),r.a.createElement(Ee.ValidatorForm,{onSubmit:this.showEmojiPicker},r.a.createElement(Ce.a,null,r.a.createElement(ye.a,null,"Please enter a name for your new beautiful palette. Make sure it's unique!"),r.a.createElement(Ee.TextValidator,{label:"Palette Name",value:a,name:"newPaletteName",onChange:this.handleChange,fullWidth:!0,margin:"normal",validators:["required","isPaletteNameUnique"],errorMessages:["Enter Palette Name","Name already used"]})),r.a.createElement(ve.a,null,r.a.createElement(fe.a,{onClick:o,color:"primary"},"Cancel"),r.a.createElement(fe.a,{variant:"contained",color:"primary",type:"submit"},"Save Palette")))))}}]),t}(n.Component)),je=t(565),we=t(566),Oe=t(567),Se=t(97),Ne=t(249),Pe=t.n(Ne),Fe=function(e){return{root:{display:"flex"},hide:{display:"none"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),flexDirection:"row",backgroundColor:"#363636",color:"white",fontWeight:"bold",justifyContent:"space-between",alignItems:"center",height:"64px"},appBarShift:{width:"calc(100% - ".concat(400,"px)"),marginLeft:400,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginLeft:12,marginRight:20},navBtns:Object(v.a)({marginRight:"1rem","& a":{textDecoration:"none"}},w("xs"),{marginRight:"0.5rem"}),button:Object(v.a)({margin:"0 0.5rem"},w("xs"),{margin:"0 0.2rem",padding:"0.3rem"})}},Be=function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(e){var o;return Object(m.a)(this,t),(o=a.call(this,e)).state={newPaletteName:"",formShowing:!1},o.handleChange=o.handleChange.bind(Object(u.a)(o)),o.showForm=o.showForm.bind(Object(u.a)(o)),o.hideForm=o.hideForm.bind(Object(u.a)(o)),o}return Object(d.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(v.a)({},e.target.name,e.target.value))}},{key:"showForm",value:function(){this.setState({formShowing:!0})}},{key:"hideForm",value:function(){this.setState({formShowing:!1})}},{key:"render",value:function(){var e=this.props,a=e.classes,t=e.open,o=e.palettes,n=e.handleSubmit,l=e.handleDrawerOpen,c=this.state.formShowing;return r.a.createElement("div",{className:a.root},r.a.createElement(je.a,null),r.a.createElement(we.a,{position:"fixed",color:"default",className:E()(a.appBar,Object(v.a)({},a.appBarShift,t))},r.a.createElement(Oe.a,{disableGutters:!t},r.a.createElement(D.a,{color:"inherit","aria-label":"Open drawer",onClick:l,className:E()(a.menuButton,Object(v.a)({},a.hide,t))},r.a.createElement(Pe.a,null)),r.a.createElement(Se.a,{variant:"h6",color:"inherit",noWrap:!0,style:{color:"#05dfd7"}},"Create A Palette")),r.a.createElement("div",{className:a.navBtns},r.a.createElement(i.b,{to:"/"},r.a.createElement(fe.a,{variant:"contained",color:"secondary",className:a.button,style:{backgroundColor:"#1b262c",border:"1px solid #05dfd7",color:"#05dfd7"}},"Go Back")),r.a.createElement(fe.a,{variant:"contained",color:"primary",onClick:this.showForm,className:a.button,style:{backgroundColor:"#05dfd7",color:"#363636"}},"Save"))),c&&r.a.createElement(ke,{palettes:o,handleSubmit:n,hideForm:this.hideForm}))}}]),t}(n.Component),De=Object(be.a)(Fe,{withTheme:!0})(Be),Ie=t(250),Ae={picker:{width:"100% !important",marginTop:"2rem"},addColor:{width:"100%",padding:"1rem",backgroundColor:"#1b262c",border:"1px solid #05dfd7",color:"#05dfd7"},colorNameInput:{width:"100%",height:"70px"}},Te=function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(e){var o;return Object(m.a)(this,t),(o=a.call(this,e)).state={currentColor:"teal",newColorName:""},o.updateCurrentColor=o.updateCurrentColor.bind(Object(u.a)(o)),o.handleChange=o.handleChange.bind(Object(u.a)(o)),o.handleSubmit=o.handleSubmit.bind(Object(u.a)(o)),o}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;Ee.ValidatorForm.addValidationRule("isColorNameUnique",(function(a){return e.props.colors.every((function(e){return e.name.toLowerCase()!==a.toLowerCase()}))})),Ee.ValidatorForm.addValidationRule("isColorUnique",(function(a){return e.props.colors.every((function(a){return a.color!==e.state.currentColor}))}))}},{key:"updateCurrentColor",value:function(e){this.setState({currentColor:e.hex})}},{key:"handleChange",value:function(e){this.setState(Object(v.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(){var e={color:this.state.currentColor,name:this.state.newColorName};this.props.addNewColor(e),this.setState({newColorName:""})}},{key:"render",value:function(){var e=this.props,a=e.paletteIsFull,t=e.classes,o=this.state,n=o.currentColor,l=o.newColorName;return r.a.createElement("div",null,r.a.createElement(Ie.ChromePicker,{color:n,onChangeComplete:this.updateCurrentColor,className:t.picker}),r.a.createElement(Ee.ValidatorForm,{onSubmit:this.handleSubmit,ref:"form",instantValidate:!1},r.a.createElement(Ee.TextValidator,{value:l,className:t.colorNameInput,placeholder:"Color Name",name:"newColorName",variant:"filled",margin:"normal",onChange:this.handleChange,validators:["required","isColorNameUnique","isColorUnique"],errorMessages:["Enter a color name","Color name must be unique","Color already used!"]}),r.a.createElement(fe.a,{variant:"contained",type:"submit",color:"primary",disabled:a,className:t.addColor,style:{backgroundColor:a?"grey":n}},a?"Palette Full":"Add Color")))}}]),t}(n.Component),Le=Object(be.a)(Ae)(Te),Re=t(574),Ge=t(568),Me=t(251),ze=t.n(Me),Ue=t(92),He={root:(pe={width:"20%",height:"25%",margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-3.5px","&:hover svg":{color:"white",transform:"scale(1.5)"}},Object(v.a)(pe,w("lg"),{width:"25%",height:"20%"}),Object(v.a)(pe,w("md"),{width:"50%",height:"10%"}),Object(v.a)(pe,w("sm"),{width:"100%",height:"5%"}),pe),boxContent:{position:"absolute",width:"100%",left:"0px",bottom:"0px",padding:"10px",color:"rgba(0, 0, 0, 0.5)",letterSpacing:"1px",textTransform:"uppercase",fontSize:"12px",display:"flex",justifyContent:"space-between"},deleteIcon:{transition:"all 0.3s ease-in-out"}},We=Object(Ue.b)((function(e){var a=e.classes,t=e.handleClick,o=e.name,n=e.color;return r.a.createElement("div",{className:a.root,style:{backgroundColor:n}},r.a.createElement("div",{className:a.boxContent},r.a.createElement("span",null," ",o),r.a.createElement(te.a,{className:a.deleteIcon,onClick:t})))})),Ve=Object(x.a)(He)(We),qe=Object(Ue.a)((function(e){var a=e.colors,t=e.removeColor;return r.a.createElement("div",{style:{height:"100%",backgroundColor:"#363636"}},a.map((function(e,a){return r.a.createElement(Ve,{index:a,key:e.name,color:e.color,name:e.name,handleClick:function(){return t(e.name)}})})))})),Je=t(181),Ye=function(e){return{root:{display:"flex"},drawer:{width:400,flexShrink:0,height:"100vh"},drawerPaper:{width:400,display:"flex",alignItems:"center",backgroundColor:"#363636"},drawerHeader:Object(Je.a)(Object(Je.a)({display:"flex",alignItems:"center",width:"100%",padding:"0 8px"},e.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{flexGrow:1,height:"calc(100vh - 64px)",padding:0,transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-400},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},container:{color:"white",width:"90%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},buttons:{width:"100%"},button:{width:"100%"}}},Ke=[{paletteName:"Material UI Colors",id:"material-ui-colors",emoji:"\ud83c\udfa8",colors:[{name:"red",color:"#F44336"},{name:"pink",color:"#E91E63"},{name:"purple",color:"#9C27B0"},{name:"deeppurple",color:"#673AB7"},{name:"indigo",color:"#3F51B5"},{name:"blue",color:"#2196F3"},{name:"lightblue",color:"#03A9F4"},{name:"cyan",color:"#00BCD4"},{name:"teal",color:"#009688"},{name:"green",color:"#4CAF50"},{name:"lightgreen",color:"#8BC34A"},{name:"lime",color:"#CDDC39"},{name:"yellow",color:"#FFEB3B"},{name:"amber",color:"#FFC107"},{name:"orange",color:"#FF9800"},{name:"deeporange",color:"#FF5722"},{name:"brown",color:"#795548"},{name:"grey",color:"#9E9E9E"},{name:"bluegrey",color:"#607D8B"}]},{paletteName:"Flat UI Colors v1",id:"flat-ui-colors-v1",emoji:"\ud83e\udd19",colors:[{name:"Turquoise",color:"#1abc9c"},{name:"Emerald",color:"#2ecc71"},{name:"PeterRiver",color:"#3498db"},{name:"Amethyst",color:"#9b59b6"},{name:"WetAsphalt",color:"#34495e"},{name:"GreenSea",color:"#16a085"},{name:"Nephritis",color:"#27ae60"},{name:"BelizeHole",color:"#2980b9"},{name:"Wisteria",color:"#8e44ad"},{name:"MidnightBlue",color:"#2c3e50"},{name:"SunFlower",color:"#f1c40f"},{name:"Carrot",color:"#e67e22"},{name:"Alizarin",color:"#e74c3c"},{name:"Clouds",color:"#ecf0f1"},{name:"Concrete",color:"#95a5a6"},{name:"Orange",color:"#f39c12"},{name:"Pumpkin",color:"#d35400"},{name:"Pomegranate",color:"#c0392b"},{name:"Silver",color:"#bdc3c7"},{name:"Asbestos",color:"#7f8c8d"}]},{paletteName:"Flat UI Colors Dutch",id:"flat-ui-colors-dutch",emoji:"\ud83c\uddf3\ud83c\uddf1",colors:[{name:"Sunflower",color:"#FFC312"},{name:"Energos",color:"#C4E538"},{name:"BlueMartina",color:"#12CBC4"},{name:"LavenderRose",color:"#FDA7DF"},{name:"BaraRose",color:"#ED4C67"},{name:"RadiantYellow",color:"#F79F1F"},{name:"AndroidGreen",color:"#A3CB38"},{name:"MediterraneanSea",color:"#1289A7"},{name:"LavenderTea",color:"#D980FA"},{name:"VerryBerry",color:"#B53471"},{name:"PuffinsBill",color:"#EE5A24"},{name:"PixelatedGrass",color:"#009432"},{name:"MerchantMarineBlue",color:"#0652DD"},{name:"ForgottenPurple",color:"#9980FA"},{name:"HollyHock",color:"#833471"},{name:"RedPigment",color:"#EA2027"},{name:"TurkishAqua",color:"#006266"},{name:"20000LeaguesUnderTheSea",color:"#1B1464"},{name:"CircumorbitalRing",color:"#5758BB"},{name:"MagentaPurple",color:"#6F1E51"}]},{paletteName:"Flat UI Colors American",id:"flat-ui-colors-american",emoji:"\ud83c\uddfa\ud83c\uddf8",colors:[{name:"LightGreenishBlue",color:"#55efc4"},{name:"FadedPoster",color:"#81ecec"},{name:"GreenDarnerTail",color:"#74b9ff"},{name:"ShyMoment",color:"#a29bfe"},{name:"CityLights",color:"#dfe6e9"},{name:"MintLeaf",color:"#00b894"},{name:"RobinsEggBlue",color:"#00cec9"},{name:"ElectronBlue",color:"#0984e3"},{name:"ExodusFruit",color:"#6c5ce7"},{name:"SoothingBreeze",color:"#b2bec3"},{name:"SourLemon",color:"#ffeaa7"},{name:"FirstDate",color:"#fab1a0"},{name:"PinkGlamour",color:"#ff7675"},{name:"Pico8Pink",color:"#fd79a8"},{name:"AmericanRiver",color:"#636e72"},{name:"BrightYarrow",color:"#fdcb6e"},{name:"OrangeVille",color:"#e17055"},{name:"Chi-Gong",color:"#d63031"},{name:"PrunusAvium",color:"#e84393"},{name:"DraculaOrchid",color:"#2d3436"}]},{paletteName:"Flat UI Colors Aussie",id:"flat-ui-colors-aussie",emoji:"\ud83c\udde6\ud83c\uddfa",colors:[{name:"Beekeeper",color:"#f6e58d"},{name:"SpicedNectarine",color:"#ffbe76"},{name:"PinkGlamour",color:"#ff7979"},{name:"JuneBud",color:"#badc58"},{name:"CoastalBreeze",color:"#dff9fb"},{name:"Turbo",color:"#f9ca24"},{name:"QuinceJelly",color:"#f0932b"},{name:"CarminePink",color:"#eb4d4b"},{name:"PureApple",color:"#6ab04c"},{name:"HintOfIcePack",color:"#c7ecee"},{name:"MiddleBlue",color:"#7ed6df"},{name:"Heliotrope",color:"#e056fd"},{name:"ExodusFruit",color:"#686de0"},{name:"DeepKoamaru",color:"#30336b"},{name:"SoaringEagle",color:"#95afc0"},{name:"GreenlandGreen",color:"#22a6b3"},{name:"SteelPink",color:"#be2edd"},{name:"Blurple",color:"#4834d4"},{name:"DeepCove",color:"#130f40"},{name:"WizardGrey",color:"#535c68"}]},{paletteName:"Flat UI Colors British",id:"flat-ui-colors-british",emoji:"\ud83c\uddec\ud83c\udde7",colors:[{name:"ProtossPylon",color:"#00a8ff"},{name:"Periwinkle",color:"#9c88ff"},{name:"Rise-N-Shine",color:"#fbc531"},{name:"DownloadProgress",color:"#4cd137"},{name:"Seabrook",color:"#487eb0"},{name:"VanaDylBlue",color:"#0097e6"},{name:"MattPurple",color:"#8c7ae6"},{name:"NanohanachaGold",color:"#e1b12c"},{name:"SkirretGreen",color:"#44bd32"},{name:"Naval",color:"#40739e"},{name:"NasturcianFlower",color:"#e84118"},{name:"LynxWhite",color:"#f5f6fa"},{name:"BlueberrySoda",color:"#7f8fa6"},{name:"MazarineBlue",color:"#273c75"},{name:"BlueNights",color:"#353b48"},{name:"HarleyOrange",color:"#c23616"},{name:"HintOfPensive",color:"#dcdde1"},{name:"ChainGangGrey",color:"#718093"},{name:"PicoVoid",color:"#192a56"},{name:"ElectroMagnetic",color:"#2f3640"}]},{paletteName:"Flat UI Colors Spanish",id:"flat-ui-colors-spanish",emoji:"\ud83c\uddea\ud83c\uddf8",colors:[{name:"JacksonsPurple",color:"#40407a"},{name:"C64Purple",color:"#706fd3"},{name:"SwanWhite",color:"#f7f1e3"},{name:"SummerSky",color:"#34ace0"},{name:"CelestialGreen",color:"#33d9b2"},{name:"LuckyPoint",color:"#2c2c54"},{name:"Liberty",color:"#474787"},{name:"HotStone",color:"#aaa69d"},{name:"DevilBlue",color:"#227093"},{name:"PalmSpringsSplash",color:"#218c74"},{name:"FlourescentRed",color:"#ff5252"},{name:"SyntheticPumpkin",color:"#ff793f"},{name:"CrocodileTooth",color:"#d1ccc0"},{name:"MandarinSorbet",color:"#ffb142"},{name:"SpicedButterNut",color:"#ffda79"},{name:"EyeOfNewt",color:"#b33939"},{name:"ChileanFire",color:"#cd6133"},{name:"GreyPorcelain",color:"#84817a"},{name:"AlamedaOchre",color:"#cc8e35"},{name:"Desert",color:"#ccae62"}]},{paletteName:"Flat UI Colors Indian",id:"flat-ui-colors-indian",emoji:"\ud83c\uddee\ud83c\uddf3",colors:[{name:"OrchidOrange",color:"#FEA47F"},{name:"SpiroDiscoBall",color:"#25CCF7"},{name:"HoneyGlow",color:"#EAB543"},{name:"SweetGarden",color:"#55E6C1"},{name:"FallingStar",color:"#CAD3C8"},{name:"RichGardenia",color:"#F97F51"},{name:"ClearChill",color:"#1B9CFC"},{name:"WhitePepper",color:"#F8EFBA"},{name:"Keppel",color:"#58B19F"},{name:"ShipsOfficer",color:"#2C3A47"},{name:"FieryFuchsia",color:"#B33771"},{name:"BlueBell",color:"#3B3B98"},{name:"GeorgiaPeach",color:"#FD7272"},{name:"OasisStream",color:"#9AECDB"},{name:"BrightUbe",color:"#D6A2E8"},{name:"MagentaPurple",color:"#6D214F"},{name:"EndingNavyBlue",color:"#182C61"},{name:"SasquatchSocks",color:"#FC427B"},{name:"PineGlade",color:"#BDC581"},{name:"HighlighterLavender",color:"#82589F"}]},{paletteName:"Flat UI Colors French",id:"flat-ui-colors-french",emoji:"\ud83c\uddeb\ud83c\uddf7",colors:[{name:"FlatFlesh",color:"#fad390"},{name:"MelonMelody",color:"#f8c291"},{name:"Livid",color:"#6a89cc"},{name:"Spray",color:"#82ccdd"},{name:"ParadiseGreen",color:"#b8e994"},{name:"SquashBlossom",color:"#f6b93b"},{name:"MandarinRed",color:"#e55039"},{name:"AzraqBlue",color:"#4a69bd"},{name:"Dupain",color:"#60a3bc"},{name:"AuroraGreen",color:"#78e08f"},{name:"IcelandPoppy",color:"#fa983a"},{name:"TomatoRed",color:"#eb2f06"},{name:"YueGuangBlue",color:"#1e3799"},{name:"GoodSamaritan",color:"#3c6382"},{name:"Waterfall",color:"#38ada9"},{name:"CarrotOrange",color:"#e58e26"},{name:"JalapenoRed",color:"#b71540"},{name:"DarkSapphire",color:"#0c2461"},{name:"ForestBlues",color:"#0a3d62"},{name:"ReefEncounter",color:"#079992"}]}],_e=function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(e){var o;return Object(m.a)(this,t),(o=a.call(this,e)).handleDrawerOpen=function(){o.setState({open:!0})},o.handleDrawerClose=function(){o.setState({open:!1})},o.onSortEnd=function(e){var a=e.oldIndex,t=e.newIndex;o.setState((function(e){var o=e.colors;return{colors:Object(Ue.c)(o,a,t)}}))},o.state={open:!0,colors:Ke[0].colors},o.addNewColor=o.addNewColor.bind(Object(u.a)(o)),o.handleChange=o.handleChange.bind(Object(u.a)(o)),o.handleSubmit=o.handleSubmit.bind(Object(u.a)(o)),o.removeColor=o.removeColor.bind(Object(u.a)(o)),o.clearColors=o.clearColors.bind(Object(u.a)(o)),o.addRandomColor=o.addRandomColor.bind(Object(u.a)(o)),o}return Object(d.a)(t,[{key:"addNewColor",value:function(e){this.setState({colors:[].concat(Object(s.a)(this.state.colors),[e]),newColorName:""})}},{key:"handleChange",value:function(e){this.setState(Object(v.a)({},e.target.name,e.target.value))}},{key:"clearColors",value:function(){this.setState({colors:[]})}},{key:"addRandomColor",value:function(){for(var e,a,t=this.props.palettes.map((function(e){return e.colors})).flat(),o=!0;o;)e=Math.floor(Math.random()*t.length),a=t[e],o=this.state.colors.some((function(e){return e.name===a.name}));this.setState({colors:[].concat(Object(s.a)(this.state.colors),[a])})}},{key:"handleSubmit",value:function(e){e.id=e.paletteName.toLowerCase().replace(/ /g,"-"),e.colors=this.state.colors,this.props.savePalette(e),this.props.history.push("/")}},{key:"removeColor",value:function(e){this.setState({colors:this.state.colors.filter((function(a){return a.name!==e}))})}},{key:"render",value:function(){var e=this.props,a=e.classes,t=e.maxColors,o=e.palettes,n=this.state,l=n.open,c=n.colors,i=c.length>=t;return r.a.createElement("div",{className:a.root},r.a.createElement(De,{open:l,palettes:o,handleSubmit:this.handleSubmit,handleDrawerOpen:this.handleDrawerOpen}),r.a.createElement(Re.a,{className:a.drawer,variant:"persistent",anchor:"left",open:l,classes:{paper:a.drawerPaper}},r.a.createElement("div",{className:a.drawerHeader},r.a.createElement(D.a,{onClick:this.handleDrawerClose},r.a.createElement(ze.a,{style:{color:"#05dfd7"}}))),r.a.createElement(Ge.a,null),r.a.createElement("div",{className:a.container},r.a.createElement(Se.a,{variant:"h5",gutterBottom:!0,style:{textTransform:"uppercase",color:"#05dfd7"}},"Design Your Palette"),r.a.createElement(fe.a,{variant:"contained",color:"secondary",onClick:this.clearColors,className:a.button,style:{backgroundColor:"#1b262c",border:"1px solid #05dfd7",color:"#05dfd7",marginBottom:"10px"}},"Clear Palette"),r.a.createElement(fe.a,{variant:"contained",className:a.button,color:"primary",onClick:this.addRandomColor,disabled:i,style:{backgroundColor:"#1b262c",border:"1px solid #05dfd7",color:"#05dfd7"}},"Random Color"),r.a.createElement(Le,{paletteIsFull:i,addNewColor:this.addNewColor,colors:c}))),r.a.createElement("main",{className:E()(a.content,Object(v.a)({},a.contentShift,l))},r.a.createElement("div",{className:a.drawerHeader}),r.a.createElement(qe,{colors:c,removeColor:this.removeColor,axis:"xy",onSortEnd:this.onSortEnd,distance:20})))}}]),t}(n.Component);_e.defaultProps={maxColors:20};var Qe=Object(be.a)(Ye,{withTheme:!0})(_e),Xe=t(182),$e=[50,100,200,300,400,500,600,700,800,900];function Ze(e){var a,t={paletteName:e.paletteName,id:e.id,emoji:e.emoji,colors:{}},o=Object(Xe.a)($e);try{for(o.s();!(a=o.n()).done;){var n=a.value;t.colors[n]=[]}}catch(u){o.e(u)}finally{o.f()}var r,l,c,i=Object(Xe.a)(e.colors);try{for(i.s();!(r=i.n()).done;){var s=r.value,m=(l=s.color,c=10,j.a.scale(function(e){return[j()(e).darken(1.4).hex(),e,"#fff"]}(l)).mode("lab").colors(c)).reverse();for(var d in m)t.colors[$e[d]].push({name:"".concat(s.name," ").concat($e[d]),id:s.name.toLowerCase().replace(/ /g,"-"),hex:m[d],rgb:j()(m[d]).css(),rgba:j()(m[d]).css().replace("rgb","rgba").replace(")",",1.0)")})}}catch(u){i.e(u)}finally{i.f()}return t}var ea=function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(e){var o;Object(m.a)(this,t),o=a.call(this,e);var n=JSON.parse(window.localStorage.getItem("palettes"));return o.state={palettes:n||Ke},o.savePalette=o.savePalette.bind(Object(u.a)(o)),o.findPalette=o.findPalette.bind(Object(u.a)(o)),o.deletePalette=o.deletePalette.bind(Object(u.a)(o)),o}return Object(d.a)(t,[{key:"findPalette",value:function(e){return this.state.palettes.find((function(a){return a.id===e}))}},{key:"deletePalette",value:function(e){this.setState((function(a){return{palettes:a.palettes.filter((function(a){return a.id!==e}))}}),this.syncLocalStorage)}},{key:"savePalette",value:function(e){this.setState({palettes:[].concat(Object(s.a)(this.state.palettes),[e])},this.syncLocalStorage)}},{key:"syncLocalStorage",value:function(){window.localStorage.setItem("palettes",JSON.stringify(this.state.palettes))}},{key:"render",value:function(){var e=this;return r.a.createElement(g.a,{render:function(a){var t=a.location;return r.a.createElement(b.a,null,r.a.createElement(f.a,{key:t.key,classNames:"page",timeout:500},r.a.createElement(g.c,{location:t},r.a.createElement(g.a,{exact:!0,path:"/palette/new",render:function(a){return r.a.createElement(ge,null,r.a.createElement(Qe,Object.assign({savePalette:e.savePalette,palettes:e.state.palettes},a)))}}),r.a.createElement(g.a,{exact:!0,path:"/palette/:paletteId/:colorId",render:function(a){return r.a.createElement(ge,null,r.a.createElement(he,{colorId:a.match.params.colorId,palette:Ze(e.findPalette(a.match.params.paletteId))}))}}),r.a.createElement(g.a,{exact:!0,path:"/",render:function(a){return r.a.createElement(ge,null,r.a.createElement(de,Object.assign({palettes:e.state.palettes,deletePalette:e.deletePalette},a)))}}),r.a.createElement(g.a,{exact:!0,path:"/palette/:id",render:function(a){return r.a.createElement(ge,null,r.a.createElement(q,{palette:Ze(e.findPalette(a.match.params.id))}))}}),r.a.createElement(g.a,{render:function(a){return r.a.createElement(ge,null,r.a.createElement(de,Object.assign({palettes:e.state.palettes,deletePalette:e.deletePalette},a)))}}))))}})}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(i.a,null,r.a.createElement(ea,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[269,1,2]]]);
//# sourceMappingURL=main.0cb62e44.chunk.js.map