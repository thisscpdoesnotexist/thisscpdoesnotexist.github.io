(this["webpackJsonpreact-front"]=this["webpackJsonpreact-front"]||[]).push([[0],{135:function(e,t,n){},136:function(e,t,n){},194:function(e,t,n){},215:function(e,t){},217:function(e,t){},227:function(e,t,n){},228:function(e,t,n){},230:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),i=n(14),c=n.n(i),r=(n(194),n(9)),o=(n(135),n(26)),l=n(276),d=(n(136),n(280)),h=n(281),u=n(283),j=n(282),b=n(45),p=n(114),x=n.n(p),O=n(1);var m=function(e){var t=Object(s.useState)(Date.now()+36e5),n=Object(o.a)(t,2),a=n[0],i=n[1],c=Object(s.useState)({n_votes:e.votes,hasClicked:null!==x.a.get(e.idx)}),r=Object(o.a)(c,2),p=r[0],m=r[1];return Object(s.useEffect)((function(){fetch("https://thisscpdoesnotexist.pythonanywhere.com/next_time/").then((function(e){return e.text()})).then((function(e){i(parseInt(e)-Date.now())}))}),[]),x.a.set("current_poll_votes"),Object(O.jsx)(l.a,{item:!0,xs:12,sm:6,md:3,children:Object(O.jsx)(d.a,{className:"pollitemparent",children:Object(O.jsxs)(h.a,{className:"pollitem",children:[Object(O.jsx)(b.a,{bg:"Keter"===e.scpClass?"danger":"Euclid"===e.scpClass?"warning":"Thaumiel"===e.scpClass?"primary":"success",children:e.scpClass}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),e.prompt,Object(O.jsxs)(j.a,{style:{display:"flex",justifyContent:"space-between"},children:[Object(O.jsxs)(u.a,{size:"small",onClick:function(){return t=e.idx,fetch("https://thisscpdoesnotexist.pythonanywhere.com/vote/?n="+t.toString()+"&ip="+Math.floor(1e4*Math.random()).toString()),m((function(e){return{n_votes:e.n_votes+1,hasClicked:!0}})),void x.a.set(t,!0,{ttl:a});var t},disabled:p.hasClicked,children:[Object(O.jsx)("strong",{children:"Vote \xa0"})," ",p.n_votes]}),Object(O.jsx)("div",{style:{color:"grey",fontStyle:"italic"},children:e.author})]})]})})})},f=n(292),g=n(297),v=n(287),y=n(285),C=n(286),S=n(284),w=n(298),_=n(294),P=n(300),k=n(299),E=n(73);function T(e){var t=Object(s.useState)(e.starting_value),n=Object(o.a)(t,2),a=n[0],i=n[1];return Object(O.jsx)("textarea",{type:"text",name:"user_prompt",value:a,fullWidth:!0,maxlength:300,onChange:function(t){t.target.value.startsWith(e.starting_value)&&(i(t.target.value),e.onValueChange(t))}})}function H(e){var t=a.a.useState(e.value),n=Object(o.a)(t,2),s=n[0],i=n[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)(P.a,{id:"scpClassLabel",children:"Class :"}),Object(O.jsxs)(_.a,{labelId:"SCP-Class",id:"scpClassSelect",value:s,onChange:function(t){i(t.target.value),e.onClassChange(t)},children:[Object(O.jsx)(w.a,{value:0,children:"Safe"}),Object(O.jsx)(w.a,{value:1,children:"Euclid"}),Object(O.jsx)(w.a,{value:2,children:"Keter"}),Object(O.jsx)(w.a,{value:3,children:"Thomiel"})]})]})}function A(e){var t=a.a.useState(!1),n=Object(o.a)(t,2),s=n[0],i=n[1],c=a.a.useState(""),r=Object(o.a)(c,2),l=r[0],d=r[1],h=a.a.useState(0),j=Object(o.a)(h,2),b=j[0],p=j[1],x=a.a.useState("Dr. [REDACTED]"),m=Object(o.a)(x,2),f=m[0],w=m[1],_=a.a.useState(!1),A=Object(o.a)(_,2),N=A[0],F=A[1],I=Object(E.d)(),D=function(){i(!1)};return Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"buttonsubmit",onClick:function(){i(!0)},children:Object(O.jsx)("h5",{children:"Submit a prompt"})}),Object(O.jsxs)(g.a,{fullWidth:!0,maxWidth:"sm",open:s,onClose:D,"aria-labelledby":"form-dialog-title",children:[Object(O.jsx)(S.a,{id:"form-dialog-title",children:"Submit your SCP idea !"}),Object(O.jsxs)(y.a,{children:[Object(O.jsx)(C.a,{children:"Describe your SCP :"}),Object(O.jsx)(T,{starting_value:"SCP-"+e.curscp+"-GPT is ",onValueChange:function(e){d(e.target.value)}}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(O.jsx)(H,{onClassChange:function(e){p(e.target.value)},value:b}),Object(O.jsxs)(P.a,{id:"scpNSFW",children:["NSFW:",Object(O.jsx)(k.a,{onChange:function(e){console.log(e.target.checked),F(e.target.checked)}})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)(P.a,{id:"scpClassLabel",children:"Author :"}),Object(O.jsx)("input",{name:"Author",placeholder:"Dr. [REDACTED]",onChange:function(e){w(e.target.value)}})]})]})]}),Object(O.jsxs)(v.a,{children:[Object(O.jsx)(u.a,{onClick:D,color:"primary",children:"Cancel"}),Object(O.jsx)(u.a,{onClick:function(){if(console.log(l.length),l.length<15)return D(),void I.show("Prompt length is too short !");var e="https://thisscpdoesnotexist.pythonanywhere.com/add_prompt/?prompt="+l.substring(11)+"&class="+b.toString()+"&ip="+Math.floor(100*Math.random()).toString()+"&author="+f+"&nswf="+N;fetch(e).then((function(e){return window.location.href="/"})),D()},color:"primary",children:"Submit"})]})]})]})}function N(e){var t=e.pollingItems.sort((function(e,t){return t.votes-e.votes})).map((function(e){return Object(O.jsx)(m,{prompt:e.prompt,scpClass:e.scpClass,votes:e.votes,idx:e.index,author:void 0!==e.author?e.author:"Dr. [REDACTED]"})}));return Object(O.jsx)("div",{className:"poll-list",children:Object(O.jsx)(l.a,{container:!0,spacing:3,children:t})})}function F(){var e=Object(s.useState)(""),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(s.useEffect)((function(){fetch("https://thisscpdoesnotexist.pythonanywhere.com/last_scp_desc/").then((function(e){return e.text()})).then((function(e){a(e)}))}),[]),Object(O.jsx)("div",{dangerouslySetInnerHTML:{__html:n}})}var I=function(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1],i=Object(s.useState)(""),c=Object(o.a)(i,2),r=c[0],l=c[1],d=Object(s.useState)(0),h=Object(o.a)(d,2),u=h[0],j=h[1];return Object(s.useEffect)((function(){fetch("https://thisscpdoesnotexist.pythonanywhere.com/get_poll/").then((function(e){return e.json()})).then((function(e){a(e.poll)})),fetch("https://thisscpdoesnotexist.pythonanywhere.com/current_scp_number/").then((function(e){return e.json()})).then((function(e){l(e)}))}),[u]),Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:"presentation",children:[Object(O.jsx)("h2",{children:" What is this website ? "}),Object(O.jsxs)("p",{children:["This website uses artifical intelligence to generate customs SCP from a simple prompt. Every hour the prompt with the most votes is chosen to create a new SCP. Previous SCPs can be found in the ",Object(O.jsx)("a",{href:"./list",children:" archives"}),". You can vote for your favorite SCP or submit your own description on the poll ",Object(O.jsx)("a",{href:"./poll",children:" here"}),".",Object(O.jsx)("br",{}),"If you're still  lost please check out our ",Object(O.jsx)("a",{href:"./about",children:"FAQ"}),"."]})]}),Object(O.jsx)("br",{}),Object(O.jsx)("h3",{children:Object(O.jsx)("b",{children:"Current Poll :"})}),Object(O.jsxs)("div",{className:"pollwrapper",children:[Object(O.jsx)("br",{}),Object(O.jsx)(N,{pollingItems:n}),Object(O.jsx)(A,{className:"openDialogBtn",curscp:r,needupdate:j})]}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("h3",{children:Object(O.jsx)("b",{children:"Last SCP :"})}),Object(O.jsx)(f.a.Item,{className:"scpcont",children:Object(O.jsx)(f.a.Body,{children:Object(O.jsx)(F,{})})})]})},D=n(123),L=n.n(D),R=n(152),G=n(64),M=n(65),B=n(70),W=n(69),V=n(23),U=n(178),q=n(12),K=n(179),Y=n(296),z=n(293),J=n(130),Q=["easeInOut","easeOut","easeIn"],X=function(e){Object(B.a)(n,e);var t=Object(W.a)(n);function n(e){var s;return Object(G.a)(this,n),(s=t.call(this,e)).contentHandle=null,s._handleRef=function(e){s.contentHandle=e},s._handleLayoutChange=function(e){var t=e.nativeEvent.layout.height;s.state.animating||s.props.collapsed||s.state.measuring||s.state.contentHeight===t||(s.state.height.setValue(t),s.setState({contentHeight:t}))},s.state={measuring:!1,measured:!1,height:new z.a.Value(e.collapsedHeight),contentHeight:0,animating:!1},s}return Object(M.a)(n,[{key:"componentDidUpdate",value:function(e){var t=this;e.collapsed!==this.props.collapsed?this.setState({measured:!1},(function(){return t._componentDidUpdate(e)})):this._componentDidUpdate(e)}},{key:"componentWillUnmount",value:function(){this.unmounted=!0}},{key:"_componentDidUpdate",value:function(e){e.collapsed!==this.props.collapsed?this._toggleCollapsed(this.props.collapsed):this.props.collapsed&&e.collapsedHeight!==this.props.collapsedHeight&&this.state.height.setValue(this.props.collapsedHeight)}},{key:"_measureContent",value:function(e){var t=this;this.setState({measuring:!0},(function(){requestAnimationFrame((function(){t.contentHandle?("function"===typeof t.contentHandle.measure?t.contentHandle:t.contentHandle.getNode()).measure((function(n,s,a,i){t.setState({measuring:!1,measured:!0,contentHeight:i},(function(){return e(i)}))})):t.setState({measuring:!1},(function(){return e(t.props.collapsedHeight)}))}))}))}},{key:"_toggleCollapsed",value:function(e){var t=this;if(e)this._transitionToHeight(this.props.collapsedHeight);else{if(!this.contentHandle)return void(this.state.measured&&this._transitionToHeight(this.state.contentHeight));this._measureContent((function(e){t._transitionToHeight(e)}))}}},{key:"_transitionToHeight",value:function(e){var t=this,n=this.props.duration,s=this.props.easing;if("string"===typeof s){for(var a,i=!1,c=0;c<Q.length;c++)if(a=Q[c],s.substr(0,a.length)===a){s=s.substr(a.length,1).toLowerCase()+s.substr(a.length+1),a=a.substr(4,1).toLowerCase()+a.substr(5),s=J.a[a](J.a[s||"ease"]),i=!0;break}if(i||(s=J.a[s]),!s)throw new Error('Invalid easing type "'+this.props.easing+'"')}this._animation&&this._animation.stop(),this.setState({animating:!0}),this._animation=z.a.timing(this.state.height,{useNativeDriver:!1,toValue:e||0,duration:n,easing:s}).start((function(){t.unmounted||t.setState({animating:!1},(function(){t.unmounted||t.props.onAnimationEnd()}))}))}},{key:"render",value:function(){var e=this.props,t=e.collapsed,n=e.enablePointerEvents,s=e.renderChildrenCollapsed,a=this.state,i=a.height,c=a.contentHeight,r=a.measuring,o=a.measured,l=a.animating,d=!r&&(o||t)&&{overflow:"hidden",height:i},h={};r?(h.position="absolute",h.opacity=0):"center"===this.props.align?h.transform=[{translateY:i.interpolate({inputRange:[0,c],outputRange:[c/-2,0]})}]:"bottom"===this.props.align&&(h.transform=[{translateY:i.interpolate({inputRange:[0,c],outputRange:[-c,0]})}]),l&&(h.height=c);var u=s||(!t||t&&l)&&(l||r||o);return Object(O.jsx)(z.a.View,{style:d,pointerEvents:!n&&t?"none":"auto",children:Object(O.jsx)(z.a.View,{ref:this._handleRef,style:[this.props.style,h],onLayout:this.state.animating?void 0:this._handleLayoutChange,children:u&&this.props.children})})}}]),n}(s.Component);X.defaultProps={align:"top",collapsed:!0,collapsedHeight:0,enablePointerEvents:!1,duration:300,easing:"easeOutCubic",onAnimationEnd:function(){return null},renderChildrenCollapsed:!0};var Z=["activeSections","expandMultiple","onChange","containerStyle","sectionContainerStyle","expandFromBottom","sections","underlayColor","touchableProps","touchableComponent","onAnimationEnd","renderContent","renderHeader","renderFooter","renderSectionTitle","disabled","renderAsFlatList","keyExtractor"],$=["align","collapsed","collapsedHeight","renderChildrenCollapsed","enablePointerEvents","duration","easing","style","onAnimationEnd"],ee=function(e){Object(B.a)(n,e);var t=Object(W.a)(n);function n(){var e;Object(G.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a)))._renderContainer=function(t,n,s){var a=e.props,i=a.activeSections,c=a.sectionContainerStyle,o=a.expandFromBottom,l=a.sections,d=a.underlayColor,h=a.touchableProps,u=a.touchableComponent,j=a.renderHeader,b=a.renderFooter,p=a.renderSectionTitle;return Object(O.jsxs)(q.a,{style:c,children:[p(t,n,i.includes(n)),o&&s(t,n),Object(O.jsx)(u,Object(r.a)(Object(r.a)({onPress:function(){return e._toggleSection(n)},underlayColor:d},h),{},{accessibilityState:{expanded:i.includes(n)},children:j(t,n,i.includes(n),l)})),!o&&s(t,n),b&&b(t,n,i.includes(n),l)]},n)},e}return Object(M.a)(n,[{key:"_toggleSection",value:function(e){if(!this.props.disabled){var t=this.props,n=t.activeSections,s=t.expandMultiple,a=t.onChange,i=[];i=n.includes(e)?n.filter((function(t){return t!==e})):s?[].concat(Object(U.a)(n),[e]):[e],a&&a(i)}}},{key:"render",value:function(){var e=this,t=this.props,n=t.activeSections,s=(t.expandMultiple,t.onChange,t.containerStyle),a=(t.sectionContainerStyle,t.expandFromBottom,t.sections),i=(t.underlayColor,t.touchableProps,t.touchableComponent,t.onAnimationEnd),c=t.renderContent,o=(t.renderHeader,t.renderFooter,t.renderSectionTitle,t.disabled,t.renderAsFlatList),l=t.keyExtractor,d=Object(V.a)(t,Z),h={},u={};Object.keys(d).forEach((function(e){$.includes(e)?u[e]=d[e]:h[e]=d[e]}));var j=function(e,t){return Object(O.jsx)(X,Object(r.a)(Object(r.a)({collapsed:!n.includes(t)},u),{},{onAnimationEnd:function(){return i(e,t)},children:c(e,t,n.includes(t),a)}))};return o?Object(O.jsx)(K.a,Object(r.a)({style:s,data:a,extraData:n,nestedScrollEnabled:!0,keyExtractor:l,renderItem:function(t){var n=t.item,s=t.index,a=n,i=l(n,s);return e._renderContainer(a,i,j)}},h)):Object(O.jsx)(q.a,Object(r.a)(Object(r.a)({style:s},h),{},{children:a.map((function(t,n){var s=l(t,n);return e._renderContainer(t,s,j)}))}))}}]),n}(s.Component);ee.defaultProps={underlayColor:"black",disabled:!1,expandFromBottom:!1,expandMultiple:!1,touchableComponent:Y.a,keyExtractor:function(e,t){return t},renderSectionTitle:function(){return null},onAnimationEnd:function(){return null},sectionContainerStyle:{},renderAsFlatList:!1};var te=n(173),ne=n(288);function se(e){return fetch("https://raw.githubusercontent.com/thisscpdoesnotexist/SCP-GPT_db/master/"+e).then((function(e){return e.text()})).then((function(e){return e}))}var ae=function(e){Object(B.a)(n,e);var t=Object(W.a)(n);function n(e){var s;return Object(G.a)(this,n),(s=t.call(this,e)).state={activeSections:[],collapsed:!0,multipleSelect:!1,content:[]},s.setSections=function(e){var t=s.state.content;s.loadContent(t,e),s.setState({activeSections:e.includes(void 0)?[]:e})},s.loadContent=function(e,t){for(var n=function(){var n=t[a];se(e[n].url).then((function(t){e[n].desc=t,s.setState({content:e})}))},a=0;a<t.length;a++)n()},s.renderHeader=function(e,t,n){return Object(O.jsx)("div",{className:"accordionheader",children:Object(O.jsx)("table",{style:{width:"100%"},children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{style:{width:70,textAlign:"center"},children:Object(O.jsx)(b.a,{bg:"Keter"===e.class?"danger":"Euclid"===e.class?"warning":"success",children:e.class})}),Object(O.jsxs)("td",{style:{paddingLeft:5,paddingRight:5},children:[Object(O.jsxs)("strong",{children:[" SCP-",e.id," is ",e.prompt]}),Object(O.jsx)("div",{style:{color:"red"},children:"true"===e.nsfw?Object(O.jsx)("span",{children:"NSFW"}):null})]}),Object(O.jsx)("td",{style:{textAlign:"right"},children:Object(O.jsxs)(u.a,{size:"small",style:{backgroundColor:"lightgrey"},disabled:!1,children:[e.n_upvotes," \xa0 ",Object(O.jsx)(ne.a,{})]})})]})})})},s.getAccodionHeader().then((function(e){s.setState({content:e})})),s}return Object(M.a)(n,[{key:"renderContent",value:function(e,t,n){return Object(O.jsx)(f.a.Item,{className:"scpcont",children:Object(O.jsx)("div",{style:{padding:"1.5em"},dangerouslySetInnerHTML:{__html:e.desc}})})}},{key:"getAccodionHeader",value:function(){var e=Object(R.a)(L.a.mark((function e(){var t,n,s,a,i;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,se("scp_list.csv");case 2:return t=e.sent,n=Object(te.a)(t),e.next=6,fetch("http://thisscpdoesnotexist.pythonanywhere.com/get_upvotes/").then((function(e){return e.json()}));case 6:for(s=e.sent,3!==n.data[n.data.length-1].length&&n.data.pop(),a=[],i=n.data.length-1;i>=0;i--)a.push({id:n.data[i][0],prompt:n.data[i][1],class:n.data[i][2],url:n.data[i][3],nsfw:n.data[i][4],n_upvotes:n.data[i][0]in s?s[n.data[i][0]].n_upvotes:0,desc:"Loading SCP..."});return e.abrupt("return",a);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(O.jsxs)("div",{className:"ListOfSCPs",children:[Object(O.jsx)("h2",{children:" List of Past SCPs"}),Object(O.jsx)("br",{}),Object(O.jsx)(ee,{activeSections:this.state.activeSections,sections:this.state.content,expandMultiple:this.multipleSelect,renderHeader:this.renderHeader,renderContent:this.renderContent,onChange:this.setSections.bind(this),renderAsFlatList:!1})]})}}]),n}(s.Component),ie=(n(226),n(227),n(76)),ce=n(21);var re=function(){return Object(O.jsxs)("div",{className:"presentation",children:[Object(O.jsx)("center",{children:Object(O.jsx)("h1",{children:"FAQ"})}),Object(O.jsx)("br",{}),Object(O.jsx)("h4",{children:" What is the SCP foundation ?"}),Object(O.jsxs)("p",{children:['The SCP Foundation is an international secret society responsible for capturing and containing various paranormal, supernatural, and other mysterious phenomena unexplained by mainstream science (known as "anomalies" or "SCPs"), while also keeping their existence hidden from the rest of global human society.',Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"They include living beings and creatures, artifacts and objects, locations and places, abstract concepts, and incomprehensible entities which display supernatural abilities or other extremely unusual properties. If left uncontained, many of the more dangerous anomalies will pose a serious threat to humans or even all life on Earth.",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"The SCP are divided in different classes depending on its containment difficulty. There are many classes but we're limiting them to:",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("table",{children:Object(O.jsxs)("tbody",{children:[Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{className:"right",children:Object(O.jsx)(b.a,{bg:"success",children:"Safe"})}),Object(O.jsx)("td",{className:"smallpadding",children:"Anomalies are easily contained."})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{className:"right",children:Object(O.jsx)(b.a,{bg:"warning",children:"Euclid"})}),Object(O.jsx)("td",{className:"smallpadding",children:"Anomalies require more resources to contain or containment isn't always reliable."})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{className:"right",children:Object(O.jsx)(b.a,{bg:"danger",children:"Keter"})}),Object(O.jsx)("td",{className:"smallpadding",children:"Anomalies are exceedingly difficult to contain."})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{className:"right",children:Object(O.jsx)(b.a,{bg:"primary",children:"Thaumiel"})}),Object(O.jsx)("td",{className:"smallpadding",children:"Anomalies that the Foundation specifically uses to contain other SCPs."})]})]})})]}),Object(O.jsx)("h4",{children:" How are the SCP generated ? "}),Object(O.jsxs)("p",{children:["The SCPs are generated using GPT-3 by ",Object(O.jsx)("a",{href:"https://openai.com",children:"OpenAI"})," to generate the SCP. The Generative Pre-trained Transformer 3 (GPT-3) is an autoregressive language model that uses deep learning to produce human-like text. GPT-3's full version has a capacity of 175 billion machine learning parameters. The quality of the text generated by GPT-3 is so high that it can be difficult to determine whether or not it was written by a human"]}),Object(O.jsx)("h4",{children:" Who are we ?"}),Object(O.jsxs)("p",{children:["We are Ruben and Philippe two young passionate data scientist. The SCP Foundation is a common interest and we figured it would be an interesting challenge for GPT-3. If you have any question or suggestion, feel free to send us an email at ",Object(O.jsx)("a",{href:"mailto:thisscpdoesnotexist@gmail.com",children:"thisscpdoesnotexist@gmail.com"}),".",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"You can also reach us on our social medias:"]}),Object(O.jsx)("table",{className:"socialstable",children:Object(O.jsx)("tbody",{children:Object(O.jsxs)("tr",{children:[Object(O.jsxs)("td",{children:[Object(O.jsx)("b",{children:"Ruben Gres"}),Object(O.jsx)("br",{}),Object(O.jsx)("a",{href:"https://www.linkedin.com/in/ruben-gres-484930158/",children:"LinkedIn"}),Object(O.jsx)("br",{}),Object(O.jsx)("a",{href:"https://github.com/RubenGres",children:"GitHub"}),Object(O.jsx)("br",{}),Object(O.jsx)("a",{href:"https://ohmlet.itch.io/",children:"Itch.io"})]}),Object(O.jsxs)("td",{children:[Object(O.jsx)("b",{children:"Philippe Saad\xe9"}),Object(O.jsx)("br",{}),Object(O.jsx)("a",{href:"https://www.linkedin.com/in/philippe-saad%C3%A9-26972b149/",children:"LinkedIn"}),Object(O.jsx)("br",{}),Object(O.jsx)("a",{href:"https://github.com/PhilSad",children:"GitHub"}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{})]})]})})})]})},oe=n(175),le=n(289),de=n(290),he=n(291),ue=n(182),je=n(176),be=n.p+"static/media/favicon.9f756375.ico",pe=(n(228),Object(le.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2),backgroundColor:"black"},title:{flexGrow:1,fontFamily:"BauhausDemi"}}})));function xe(e){return Object(O.jsx)("div",{children:Object(O.jsx)("h1",{children:Object(O.jsx)(je.a,{date:e.time,daysInHours:!0},"MyTimer")})})}function Oe(){var e=Object(s.useState)(Date.now()+36e5),t=Object(o.a)(e,2),n=t[0],a=t[1];Object(s.useEffect)((function(){fetch("https://thisscpdoesnotexist.pythonanywhere.com/next_time/").then((function(e){return e.text()})).then((function(e){a(parseInt(e))}))}),[]);var i=pe();return Object(O.jsx)("div",{className:i.root,children:Object(O.jsx)(de.a,{className:"appBar",position:"fixe",children:Object(O.jsx)(he.a,{children:Object(O.jsxs)(l.a,{container:!0,spacing:1,style:{display:"flex",alignItems:"center"},children:[Object(O.jsxs)(l.a,{item:!0,xs:12,sm:4,children:[Object(O.jsx)("img",{src:be}),Object(O.jsx)(u.a,{color:"inherit",children:Object(O.jsx)(ue.a,{variant:"h6",className:i.title,children:"This SCP Does Not Exist"})})]}),Object(O.jsx)(l.a,{item:!0,xs:12,sm:4,children:Object(O.jsx)(xe,{time:n})}),Object(O.jsx)(l.a,{item:!0,xs:0,sm:1,children:" "}),Object(O.jsx)(l.a,{item:!0,xs:12,sm:1,children:Object(O.jsx)(ie.b,{to:"/",children:Object(O.jsx)(u.a,{color:"inherit",children:Object(O.jsx)("strong",{children:"Poll"})})})}),Object(O.jsx)(l.a,{item:!0,xs:12,sm:1,children:Object(O.jsx)(ie.b,{to:"/list",children:Object(O.jsx)(u.a,{color:"inherit",children:Object(O.jsx)("strong",{children:"Archives"})})})}),Object(O.jsx)(l.a,{item:!0,xs:12,sm:1,children:Object(O.jsx)(ie.b,{to:"/about",children:Object(O.jsx)(u.a,{color:"inherit",children:Object(O.jsx)("strong",{children:"About"})})})})]})})})})}var me={position:E.b.BOTTOM_CENTER,timeout:5e3,offset:"30px",transition:E.c.SCALE};var fe=function(){return Object(O.jsx)(E.a,Object(r.a)(Object(r.a)({template:oe.a},me),{},{children:Object(O.jsx)("div",{className:"App",children:Object(O.jsxs)(ie.a,{children:[Object(O.jsx)(Oe,{}),Object(O.jsxs)("div",{className:"appbody",children:[Object(O.jsx)("br",{}),Object(O.jsxs)(ce.c,{children:[Object(O.jsx)(ce.a,{path:"/",exact:!0,component:I}),Object(O.jsx)(ce.a,{path:"/list",exact:!0,component:ae}),Object(O.jsx)(ce.a,{path:"/about",exact:!0,component:re}),Object(O.jsx)(ce.a,{path:"/*",exact:!0,component:I})]})]})]})})}))},ge=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,301)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),s(e),a(e),i(e),c(e)}))};c.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(fe,{})}),document.getElementById("root")),ge()}},[[230,1,2]]]);
//# sourceMappingURL=main.9d7ad141.chunk.js.map