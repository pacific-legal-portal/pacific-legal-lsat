(this.webpackJsonppleo=this.webpackJsonppleo||[]).push([[0],{100:function(e,t,n){e.exports=n(190)},105:function(e,t,n){},110:function(e,t,n){},186:function(e,t,n){},187:function(e,t,n){},188:function(e,t,n){},190:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(24),o=n.n(s),i=(n(105),n(223)),c=n(88),l=n.n(c)()(),u=n(60),m=n.n(u),d=n(89),p=n(22),h=n(6),f=n(8),v=n(18),g=n(19),y=n(12),E=n(20),b=(n(110),n(43)),N=n(224),x=n(214),w=n(215),I=n(222),O=n(93),k=n.n(O);n(65),n(66);function j(e){var t=r.a.useState(!1),n=Object(b.a)(t,2),a=n[0],s=n[1],o=e.rightLinks,i=e.leftLinks,c=e.brand,l=e.toolTitle,u=e.brandName,m=r.a.createElement("div",null,r.a.createElement("img",{className:"navBrand",src:c,alt:"brand icon"}),r.a.createElement("span",{className:"brandTitle"},u),r.a.createElement("span",{className:"navTitle"},l));return r.a.createElement(N.a,{className:"appBar white"},r.a.createElement(x.a,{className:"navContainer"},void 0!==i?{brandComponent:m}:null,r.a.createElement("div",{className:"flex"},void 0!==i?r.a.createElement(I.a,{smDown:!0,implementation:"css"},i):m),r.a.createElement(I.a,{smDown:!0,implementation:"css"},o),r.a.createElement(I.a,{mdUp:!0},r.a.createElement(w.a,{color:"inherit","aria-label":"open drawer",onClick:function(){s(!a)}},r.a.createElement(k.a,null)))))}j.defaultProp={color:"white"};var M=n(216),R=n(225),L=n(217);function S(){return r.a.createElement(M.a,{className:"navList"},r.a.createElement(R.a,{className:"navListItem"},r.a.createElement(L.a,{className:"navLink"},"Contact")))}function _(){return r.a.createElement("div",{className:"progress-container"})}var T,C=n(29),D=n.n(C);function A(e){return r.a.createElement("div",{className:"chat-block bot"},r.a.createElement("div",{className:"chat-avatar"},r.a.createElement("img",{src:D.a,alt:"chatbot avator"})),r.a.createElement("div",{className:"bubble white round"},e.content))}function P(e){var t=e.message.message.options,n=e.message.message.id,a=e.message.message.extraInfo,s=t.map((function(t){return r.a.createElement(R.a,{className:"nav-list-item",id:t.id,key:t.id},r.a.createElement(L.a,{className:e.message.selectedOptionId===t.id?"nav-link selected":"nav-link",onClick:function(){return e.handleSelectOptions(n,t.id)}},t.label))})),o=a?r.a.createElement(R.a,{className:"nav-list-item"},r.a.createElement(L.a,{className:e.message.showExtraInfo?"nav-link selected":"nav-link",onClick:function(){return e.handleShowExtraInfo(n)}},a.title)):null;return r.a.createElement("div",{className:"chat-block user"},r.a.createElement("div",{className:"bubble round"},r.a.createElement(M.a,null,s,o)))}function Q(e){var t=e.messages.map((function(t,n){return t.message.content?r.a.createElement("div",{key:n},r.a.createElement(A,{content:t.message.content}),t.message.options&&t.message.options.length>0&&r.a.createElement(P,{message:t,handleShowExtraInfo:e.handleShowExtraInfo,handleSelectOptions:e.handleSelectOptions}),t.reply&&r.a.createElement(A,{content:t.reply}),t.showExtraInfo&&r.a.createElement(A,{content:t.extraInfo.content})):null}));return r.a.createElement("div",{className:"content-container"},r.a.createElement("div",{className:"chat-area",id:"chatbot-scroller"},t))}function F(e){var t=e.todoList,n=e.reminderList;return r.a.createElement("div",{className:"chat todo-container round grey"},r.a.createElement("div",{className:"chat donow-container round white"},r.a.createElement("div",{className:"donow-titile-box"},r.a.createElement("div",{className:"container"},r.a.createElement("span",null,"DO NOW"))),r.a.createElement("div",{className:"list-container "},r.a.createElement(M.a,null,t.map((function(e,t){return r.a.createElement(R.a,{key:t},r.a.createElement("div",{className:"todo-item-bullet"}),r.a.createElement("span",{className:"item-label"},e))}))))),r.a.createElement("div",{className:"chat dolater-container round white"},r.a.createElement("div",{className:"dolater-titile-box"},r.a.createElement("div",{className:"container"},r.a.createElement("span",null,"DO LATER"))),r.a.createElement("div",{className:"list-container "},r.a.createElement(M.a,null,n.map((function(e,t){return r.a.createElement(R.a,{key:t},r.a.createElement("div",{className:"reminder-item-bullet"}),r.a.createElement("span",{className:"item-label"},e))}))))))}!function(e){e[e.singleSelect=0]="singleSelect",e[e.multiSelect=1]="multiSelect",e[e.autoPlayMessage=2]="autoPlayMessage"}(T||(T={}));var B=function(){function e(t,n,a,r,s,o,i){Object(h.a)(this,e),this.responseMatcher=t,this._id=n,this._content=a,this._options=r,this._triggers=s,this._defaultTrigger=o,this._extraInfo=i}return Object(f.a)(e,[{key:"findTrigger",value:function(e){var t=!0,n=!1,a=void 0;try{for(var r,s=this.triggers[Symbol.iterator]();!(t=(r=s.next()).done);t=!0){var o=r.value,i=o.expectedResponses;if(this.responseMatcher.matchOptions(i,e))return o}}catch(c){n=!0,a=c}finally{try{t||null==s.return||s.return()}finally{if(n)throw a}}return this.defaultTrigger}},{key:"id",get:function(){return this._id}},{key:"content",get:function(){return this._content}},{key:"options",get:function(){return this._options}},{key:"extraInfo",get:function(){return this._extraInfo}},{key:"triggers",get:function(){return this._triggers}},{key:"defaultTrigger",get:function(){return this._defaultTrigger}}]),e}(),W=function(){function e(t,n){Object(h.a)(this,e),this._id=t,this._label=n}return Object(f.a)(e,[{key:"id",get:function(){return this._id}},{key:"label",get:function(){return this._label}}]),e}(),q=function(){function e(){Object(h.a)(this,e)}return Object(f.a)(e,null,[{key:"createOptionsFromData",value:function(e){var t=[];return e.forEach((function(e){var n=e.id,a=e.label;t.push(new W(n,a))})),t}}]),e}(),J=function(){function e(t,n){Object(h.a)(this,e),this._messageId=t,this._optionIds=n}return Object(f.a)(e,[{key:"findResponseOption",value:function(e){return this.optionIds.indexOf(e)>=0}},{key:"addResponseItem",value:function(e){}},{key:"messageId",get:function(){return this._messageId}},{key:"optionIds",get:function(){return this._optionIds}}]),e}(),U=function(){function e(){Object(h.a)(this,e)}return Object(f.a)(e,null,[{key:"createResponseItemFromData",value:function(e){var t=e.messageId,n=e.optionIds;return new J(t,n)}}]),e}(),Y=function(){function e(t,n,a,r,s,o){Object(h.a)(this,e),this._expectedResponses=t,this._action=n,this._resultReport=a,this._todos=r,this._reminders=s,this._reply=o}return Object(f.a)(e,[{key:"expectedResponses",get:function(){return this._expectedResponses}},{key:"reply",get:function(){return this._reply}},{key:"action",get:function(){return this._action}},{key:"resultReport",get:function(){return this._resultReport}},{key:"todos",get:function(){return this._todos}},{key:"reminders",get:function(){return this._reminders}}]),e}(),H=function(){function e(){Object(h.a)(this,e)}return Object(f.a)(e,null,[{key:"createTriggersFromData",value:function(e){var t=[];return e.forEach((function(e){var n=e.action,a=e.resultReport,r=e.todo,s=e.reminder,o=e.reply,i=U.createResponseItemFromData(e.expectedResponses);t.push(new Y(i,n,a,r,s,o))})),t}},{key:"createTriggerFromData",value:function(e){var t=e.action,n=e.resultReport,a=e.todo,r=e.reminder,s=e.reply,o=U.createResponseItemFromData(e.expectedResponses);return new Y(o,t,n,a,r,s)}}]),e}(),$=function(e){function t(e,n,a,r,s,o,i){return Object(h.a)(this,t),Object(v.a)(this,Object(g.a)(t).call(this,e,n,a,r,s,o,i))}return Object(E.a)(t,e),t}(B),z=function(e){function t(e,n,a,r,s,o,i){return Object(h.a)(this,t),Object(v.a)(this,Object(g.a)(t).call(this,e,n,a,r,s,o,i))}return Object(E.a)(t,e),t}(B),G=function(){function e(){Object(h.a)(this,e)}return Object(f.a)(e,[{key:"matchOptions",value:function(e,t){var n=e.messageId,a=!0,r=!1,s=void 0;try{for(var o,i=e.optionIds[Symbol.iterator]();!(a=(o=i.next()).done);a=!0){var c=o.value;if(!t.findMessageResponse(n,c))return!1}}catch(f){r=!0,s=f}finally{try{a||null==i.return||i.return()}finally{if(r)throw s}}var l=!0,u=!1,m=void 0;try{for(var d,p=t.getMessageOptions(n)[Symbol.iterator]();!(l=(d=p.next()).done);l=!0){var h=d.value;if(!e.findResponseOption(h))return!1}}catch(f){u=!0,m=f}finally{try{l||null==p.return||p.return()}finally{if(u)throw m}}return!0}}]),e}(),K=function(){function e(){Object(h.a)(this,e)}return Object(f.a)(e,[{key:"matchOptions",value:function(e,t){var n=e.messageId,a=!0,r=!1,s=void 0;try{for(var o,i=e.optionIds[Symbol.iterator]();!(a=(o=i.next()).done);a=!0){var c=o.value;if(t.findMessageResponse(n,c))return!0}}catch(l){r=!0,s=l}finally{try{a||null==i.return||i.return()}finally{if(r)throw s}}return!1}}]),e}(),V=function(e){function t(e,n,a,r,s,o,i){return Object(h.a)(this,t),Object(v.a)(this,Object(g.a)(t).call(this,e,n,a,r,s,o,i))}return Object(E.a)(t,e),t}(B),X=function(){function e(){Object(h.a)(this,e)}return Object(f.a)(e,null,[{key:"ok",value:function(){console.log("ok")}},{key:"createMessageFromData",value:function(e){var t=e.id,n=e.type,a=e.content,r=e.extraInfo,s=H.createTriggersFromData(e.triggers),o=H.createTriggerFromData(e.defaultTrigger),i=q.createOptionsFromData(e.options);if(n==T.singleSelect){var c=new K;return new $(c,t,a,i,s,o,r)}if(n==T.multiSelect){var l=new G;return new z(l,t,a,i,s,o,r)}if(n==T.autoPlayMessage){var u=new K;return new V(u,t,a,i,s,o,r)}throw new Error}}]),e}(),Z=function(){function e(){Object(h.a)(this,e),this._responseList=void 0,this._responseMap=void 0,this._responseList=[],this._responseMap={}}return Object(f.a)(e,[{key:"findMessageResponse",value:function(e,t){return!(!this.responseMap[e]||!this.responseMap[e].findResponseOption(t))}},{key:"addResponseItem",value:function(e){this.responseList.push(e),this.responseMap[e.messageId]=e}},{key:"getMessageOptions",value:function(e){if(this.responseMap[e])return this.responseMap[e].optionIds;throw new Error}},{key:"responseList",get:function(){return this._responseList}},{key:"responseMap",get:function(){return this._responseMap}}]),e}();function ee(){return[{name:"Privacy Policy",nodes:te()}]}function te(){return[X.createMessageFromData({id:0,type:T.singleSelect,content:"Does your org have a privacy policy?",options:[{id:101,label:"Yes"},{id:100,label:"No"}],triggers:[{expectedResponses:{messageId:0,optionIds:[100]},action:{type:"nextQuestion",nextQuestionId:1},resultReport:"some result report.",todo:"todo item 1",reminder:"reminder item 1"}],defaultTrigger:{expectedResponses:{messageId:0,optionIds:[101]},action:{type:"nextQuestion",nextQuestionId:1},resultReport:"some result report.",reply:"good job!"},extraInfo:{title:"What is a privacy policy?",content:"A privacy policy is a document which describes whose personal information we are collecting: why we are collecting it, what we use it for, how and when we have to disclose it, and how a person can review what we are doing."}}),X.createMessageFromData({id:1,type:T.singleSelect,content:"Does your org have a privacy policy?",options:[{id:101,label:"Yes"},{id:100,label:"No"}],triggers:[{expectedResponses:{messageId:1,optionIds:[100]},action:{type:"nextQuestion",nextQuestionId:1},resultReport:"some result report.",todo:"todo item 1",reminder:"reminder item 1"}],defaultTrigger:{expectedResponses:{messageId:1,optionIds:[101]},action:{type:"nextQuestion",nextQuestionId:1},resultReport:"some result report.",reply:"good job!"},extraInfo:{title:"What is a privacy policy?",content:"A privacy policy is a document which describes whose personal information we are collecting: why we are collecting it, what we use it for, how and when we have to disclose it, and how a person can review what we are doing."}})]}var ne={moduleResults:{},todos:[],reminders:[]},ae=r.a.createContext({context:ne,updateContext:function(e,t){}}),re=function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(v.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).updateContext=function(e,t){var a=n.state.context;a.moduleResults[e]?(a.moduleResults[e].todos=a.moduleResults[e].todos.concat(t.todos),a.moduleResults[e].reminders=a.moduleResults[e].reminders.concat(t.reminders),a.moduleResults[e].results.push(t.result),a.moduleResults[e].path.push(t.path)):a.moduleResults[e]={name:t.name,todos:t.todos,reminders:t.reminders,results:[t.result],path:[t.path]},a.todos=a.todos.concat(t.todos),a.reminders=a.reminders.concat(t.reminders),n.setState({context:a})},n.state={context:ne,updateContext:n.updateContext},n}return Object(E.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement(ae.Provider,{value:this.state},this.props.children)}}]),t}(r.a.Component),se=ae.Consumer,oe=n(94),ie=n.n(oe),ce=function(e){function t(e){var n;Object(h.a)(this,t),(n=Object(v.a)(this,Object(g.a)(t).call(this,e))).survey=void 0,n.modules=void 0,n.state=void 0,n.survey=te(),n.modules=ee();var a=new Z;return n.state={currentMessage:n.survey[0],currentModuleId:0,responsePath:a,displayedMessages:[],todoList:[],reminderList:[]},n.handleSelectOptions=n.handleSelectOptions.bind(Object(y.a)(n)),n.handleShowExtraInfo=n.handleShowExtraInfo.bind(Object(y.a)(n)),n.getNextAction=n.getNextAction.bind(Object(y.a)(n)),n}return Object(E.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.displayNextMessage({moduleId:0,messageId:0})}},{key:"displayNextMessage",value:function(e){var t=this,n=this.modules[e.moduleId].nodes[e.messageId],a={message:n,selectedOptionIds:[-1],showExtraInfo:!1};this.setState((function(t,r){return{currentModuleId:e.moduleId,currentMessage:n,displayedMessages:t.displayedMessages.concat(a)}}),(function(){t.scrollToBottom()}));var r=n.defaultTrigger;n instanceof V&&this.displayNextMessage(this.getNextAction(r))}},{key:"updateResponsePath",value:function(e){this.setState((function(e){return{responsePath:e.responsePath}}))}},{key:"updateState",value:function(e,t,n){this.setState((function(a,r){var s=a.displayedMessages.length-1;return s<0&&(s=0),a.displayedMessages[s].reply=e,{messageList:Object(p.a)(a.displayedMessages),todoList:a.todoList.concat(t),reminderList:a.reminderList.concat(n)}}))}},{key:"handleSelectOptions",value:function(){var e=Object(d.a)(m.a.mark((function e(t,n){var a,r,s,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.isInactiveQuestion(t)){e.next=2;break}return e.abrupt("return");case 2:return a={messageId:this.state.currentMessage.id,optionId:n},e.next=5,this.updateResponsePath(a);case 5:return r=this.state.currentMessage.findTrigger(this.state.responsePath),s={path:a,todos:r.todos?r.todos:[],reminders:r.reminders?r.reminders:[],resultReport:r.resultReport},this.context.updateContext(this.state.currentModuleId,s),e.next=10,this.updateState(r.reply,s.todos,s.reminders);case 10:o=this.getNextAction(r.action),this.displayNextMessage(o);case 12:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"handleShowExtraInfo",value:function(e){this.isInactiveQuestion(e)||this.setState((function(e,t){var n=ie()(e.currentMessage);return{currentMessage:n,messageList:[].concat(Object(p.a)(e.displayedMessages),[n])}}))}},{key:"getNextAction",value:function(e){if("exit"==e.type)l.push("/result");else{if("nextQuestion"==e.type)return{moduleId:this.state.currentModuleId,messageId:e.nextQuestionId};if("nextModule"==e.type)return{moduleId:e.nextModuleId,messageId:e.nextQuestionId}}}},{key:"scrollToBottom",value:function(){try{var e=document.getElementById("chatbot-scroller");e.scrollTop=e.scrollHeight}catch(t){console.log("scroll exception")}}},{key:"isCorrectTrigger",value:function(e,t,n){return e.optionId===n&&e.questionId===t}},{key:"isInactiveQuestion",value:function(e){return e!==this.state.currentMessage.id}},{key:"render",value:function(){return console.log("messagelist: "+JSON.stringify(this.state.displayedMessages)),r.a.createElement("div",{className:"full-screen-container grey chatbot-page"},r.a.createElement(j,{brand:D.a,brandName:"LSALT 2.0 |",toolTitle:"Non-Profit Self Assessment",fixed:!0,color:"white",rightLinks:r.a.createElement(S,null),absolute:!0}),r.a.createElement("div",{className:"main-container"},r.a.createElement(_,null),r.a.createElement(Q,{messages:this.state.displayedMessages,handleShowExtraInfo:this.handleShowExtraInfo,handleSelectOptions:this.handleSelectOptions}),r.a.createElement(F,{todoList:this.state.todoList,reminderList:this.state.reminderList})))}}]),t}(r.a.Component);ce.contextType=ae;var le=n(218),ue=n(221);n(186);function me(e){var t=e.tabList,n=r.a.useState(0),a=Object(b.a)(n,2),s=a[0],o=a[1];console.log(t);var i=t.map((function(e,t){return!e.title||r.a.createElement(le.a,{label:e.title,key:t,className:"tab"})}));return r.a.createElement("div",{className:"container"},r.a.createElement(ue.a,{value:s,onChange:function(e,t){o(t)},"aria-label":"simple tabs example",variant:"fullWidth",className:"tab-nav"},i),t.map((function(e,t){return t===s?r.a.createElement("div",{key:t,className:"container"},e.tabContent):null})))}var de=n(219),pe=n(191);function he(e){var t=e.todoList;return r.a.createElement("div",{className:"list-container round"},r.a.createElement(M.a,null,t.map((function(e,t){return r.a.createElement(R.a,{className:"list-item",key:t},r.a.createElement("div",{className:"todo-item-bullet"}),r.a.createElement("span",{className:"item-label"},e.title),r.a.createElement(de.a,null,r.a.createElement("div",{className:"btn-group"},r.a.createElement(L.a,{variant:"outlined"},"more info"))))}))))}function fe(e){var t=e.reminderList;return r.a.createElement("div",{className:"list-container "},r.a.createElement(M.a,null,t.map((function(e,t){return r.a.createElement(R.a,{key:t,className:"list-item"},r.a.createElement("div",{className:"reminder-item-bullet"}),r.a.createElement("span",{className:"item-label"},e.title),r.a.createElement(de.a,null,r.a.createElement("div",{className:"btn-group"},r.a.createElement(L.a,{variant:"outlined"},"more info"))))}))))}function ve(e){var t=e.context;return r.a.createElement("div",{className:"overview-container"},r.a.createElement("div",{className:"result todo-container"},r.a.createElement("div",{className:"title-container"},r.a.createElement(pe.a,{variant:"h4",component:"h4",className:"title bold"},r.a.createElement("span",{className:"title"},"DO NOW")),r.a.createElement(pe.a,{variant:"body2",component:"span"},"Take Care of the task on this list ASAP. This might put you in legal risk")),r.a.createElement(he,{todoList:t.todos})),r.a.createElement("div",{className:"result reminder-container"},r.a.createElement("div",{className:"title-container"},r.a.createElement(pe.a,{variant:"h4",component:"h4",className:"title bold"},r.a.createElement("span",{className:"title"},"Do Later"))),r.a.createElement(fe,{reminderList:t.reminders})))}var ge=n(220);function ye(e){var t=e.resultList,n=e.questionList;return console.log(n),r.a.createElement("div",{className:"repo-container"},t.map((function(e,t){var a;return r.a.createElement("div",{className:"repo-item",key:t},r.a.createElement("div",{className:"question-container"},r.a.createElement(pe.a,{variant:"body2",component:"p",className:"title",gutterBottom:!0},n[e.questionId].content),r.a.createElement(pe.a,{variant:"body2",component:"p"},"because you answered: ",null===(a=n[e.questionId].options.find((function(t){return t.id===e.optionId})))||void 0===a?void 0:a.label),r.a.createElement(pe.a,{variant:"body2",component:"p",className:"link"},r.a.createElement(ge.a,null,"Change my answer"))),r.a.createElement("div",{className:"info-container"},r.a.createElement(pe.a,{variant:"body2",component:"p",className:"title",gutterBottom:!0},e.repo),r.a.createElement(pe.a,{variant:"body2",component:"p",className:"link"},r.a.createElement(ge.a,null,"Learn more"))))})))}function Ee(e){console.log(e.context);var t=ee(),n=e.context;console.log(n.modules[1]);var a=function(){var e=[];return e.push({title:"OUTCOME",tabContent:r.a.createElement(ve,{context:n})}),n.modules&&Object.keys(n.modules).forEach((function(a){e.push({title:n.modules[a].name,tabContent:r.a.createElement(ye,{questionList:t[a],resultList:n.modules[a].results})})})),e}();return r.a.createElement("div",{className:"result-detail-container"},r.a.createElement(me,{tabList:a}))}n(187);function be(){return r.a.createElement("div",{className:"full-screen-container white result-page"},r.a.createElement(j,{brand:D.a,brandName:"LSALT 2.0 | ",toolTitle:"Non-profit Self Assessment",fixed:!0,color:"white",rightLinks:r.a.createElement(S,null),absolute:!0}),r.a.createElement("div",{className:"main-container"},r.a.createElement(se,null,(function(e){var t=e.context;return r.a.createElement(Ee,{context:t})}))))}n(188);var Ne=function(){return r.a.createElement(i.b,{history:l},r.a.createElement(re,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/assessment",component:ce}),r.a.createElement(i.a,{path:"/result",component:be}),r.a.createElement(i.a,{path:"/",component:ce}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},29:function(e,t,n){e.exports=n.p+"static/media/botavator.308830c4.svg"},65:function(e,t,n){},66:function(e,t,n){}},[[100,1,2]]]);
//# sourceMappingURL=main.8ab66bd3.chunk.js.map