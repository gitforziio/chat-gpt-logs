(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6],{49529:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/chat/[[...chatId]]",function(){return n(71972)}])},71972:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return O},default:function(){return T}});var a=n(61706),r=n(45813),s=n(35250),i=n(91530),o=n.n(i),u=n(61432),c=n(70079),l=n(73925),d=n(62676),p="oai/apps/hasSeenReleaseAnnouncement",f="2023-01-09";function h(e){var t=e.hasSeenOnboardingDate,n=(0,c.useState)(function(){return!Boolean(d.m.getItem("".concat(p,"/").concat(f)))&&!!t&&t<new Date(f)}),a=n[0],r=n[1],i=(0,c.useState)(!1),o=i[0],u=i[1];(0,c.useEffect)(function(){u(!0)},[]);var h=(0,c.useCallback)(function(){d.m.setItem("".concat(p,"/").concat(f),!0),r(!1)},[]);return o?(0,s.jsx)(l.Z,{size:"xs",isOpen:a,onModalClose:h,type:"success",title:"",primaryButton:(0,s.jsx)(l.m,{title:"Sounds good!",color:"primary",onClick:h}),children:(0,s.jsxs)("div",{className:"mb-6 flex flex-col gap-6",children:[(0,s.jsx)("div",{className:"text-gray-800 dark:text-white",children:"Jan 9 version update"}),(0,s.jsx)("div",{className:"text-2xl",children:"Here's what's new"}),(0,s.jsx)("div",{className:"prose text-base dark:prose-invert",children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"We made more improvements to the ChatGPT model! It should be generally better across a wide range of topics and has improved factuality."}),(0,s.jsx)("li",{children:"Stop generating: Based on your feedback, we're rolling out the ability to stop generating ChatGPT's response."})]})})]})}):null}var v=n(25346),g=n(44513),m=n(49690),_=n(66285),x=n(27252),y=n(500),I=n(12762),P=n(98943),b=n(31501),w=n(61079),j=n(89874),S=n(60814),C=n(80836),k=n(36613);n(24638);var N=function(){return{thread:C.Cv.createTree(),currentLeafId:"root",threadId:null,title:"New chat"}};function Z(){return(Z=(0,a.Z)(function(e,t,n){var a,s,i;return(0,r.__generator)(this,function(r){switch(r.label){case 0:a=null,r.label=1;case 1:if(r.trys.push([1,4,,5]),!e)return[3,3];return[4,S.ZP.getConversation(e,n,t)];case 2:var o,u,c,l,d;return c=null===(u=Object.values((o=a=r.sent()).mapping).find(function(e){return null===e.parent}))||void 0===u?void 0:u.id,l=new Set,d=new Set,[2,{thread:((o.moderation_results||[]).forEach(function(e){e.blocked?d.add(e.message_id):e.flagged&&l.add(e.message_id)}),s={rootId:c,mapping:Object.keys(o.mapping).reduce(function(e,t){var n,a=o.mapping[t],r=a.parent,s=a.children,i=(0,j.Z)(a,["parent","children"]),u=o.mapping[t].message||C.Cv.createRootMessage();return d.has(u.id)?n=k.sK:l.has(u.id)&&(n=k.Mf),e[t]=(0,b.Z)((0,w.Z)((0,b.Z)({},i),{message:u,children:s||[],parentId:r||"",type:C.uV[u.role]}),n&&{metadata:n}),e},{}),currentLeafId:o.current_node}).mapping||C.Cv.createTree(),currentLeafId:s.currentLeafId||s.rootId||"root",threadId:e,title:a.title||null}];case 3:return[3,5];case 4:return i=r.sent(),console.error(i),[3,5];case 5:return[2,N()]}})})).apply(this,arguments)}function E(){return(E=(0,a.Z)(function(e){return(0,r.__generator)(this,function(t){switch(t.label){case 0:return[4,function(e,t,n){return Z.apply(this,arguments)}(e,!1)];case 1:return[2,t.sent()]}})})).apply(this,arguments)}var O=!0;function T(e){var t=e.user,n=e.accessToken,a=e.features,r=e.pages,i=e.initialData,d=e.accountStatusResponse,p=e.isUserInCanPayGroup,f=(0,c.useState)(!1),b=f[0],w=f[1],j=(0,c.useMemo)(function(){return y.TJ},[]),S=(0,u.useRouter)(),C=(0,c.useState)(i),k=C[0],Z=C[1],O=(0,g.PV)(j.id).getHasSeenOnboardingDate,T=(0,x.g)(function(e){return e.updateFlagValue});(0,c.useEffect)(function(){void 0!==p&&T("isUserInCanPayGroup",p)},[T,p]);var R=(0,c.useMemo)(function(){return{app:P.VY,origin:"chat"}},[]);(0,m.Z)("ChatGPT",t,n,R);var A=(0,_.mA)(function(e){return{accountPlan:e.accountPlan,updateAccountPlanWithResponse:e.updateAccountPlanWithResponse}}),D=A.accountPlan,M=A.updateAccountPlanWithResponse;return(0,c.useEffect)(function(){var e;D.hasPaidSubscription!==(null===(e=d.account_plan)||void 0===e?void 0:e.is_paid_subscription_active)&&d&&M(d)},[M,d,D]),(0,c.useEffect)(function(){w(!O())},[O]),(0,c.useEffect)(function(){var e,t=null===(e=S.query.chatId)||void 0===e?void 0:e[0];t!==k.threadId&&(t?(function(e){return E.apply(this,arguments)})(t).then(function(e){return e&&Z(e)}):Z(N()))},[n,i.threadId,S.query.chatId,null==k?void 0:k.threadId,]),(0,s.jsx)(y.yP.Provider,{value:j,children:(0,s.jsxs)(I.Af.Provider,{value:R,children:[(0,s.jsx)(l.Z,{isOpen:b,onModalClose:o(),type:"success",title:"",primaryButton:void 0,children:(0,s.jsx)(g.ZP,{onClose:function(){return w(!1)}})}),(0,s.jsx)(h,{hasSeenOnboardingDate:O()}),(0,s.jsx)(v.Z,{contextName:"proxy",initialData:k,features:new Set(a),pages:r},k.threadId)]})})}}},function(e){e.O(0,[960,741,798,979,424,762,620,686,814,777,818,774,888,179],function(){return e(e.s=49529)}),_N_E=e.O()}]);