"use strict";(self.webpackChunktest_site=self.webpackChunktest_site||[]).push([[402],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(h,i(i({ref:t},l),{},{components:n})):r.createElement(h,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},606:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_label:"Simple Drops",sidebar_position:2},i="Simple Drops",s={unversionedId:"Github ReadMe/Types of Drops/simpledrops",id:"version-1.1/Github ReadMe/Types of Drops/simpledrops",isDocsHomePage:!1,title:"Simple Drops",description:"The most basic type of drop is the simple kind. Any keys that are part of a simple drop can",source:"@site/versioned_docs/version-1.1/Github ReadMe/Types of Drops/simpledrops.md",sourceDirName:"Github ReadMe/Types of Drops",slug:"/Github ReadMe/Types of Drops/simpledrops",permalink:"/Github ReadMe/Types of Drops/simpledrops",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/versioned_docs/version-1.1/Github ReadMe/Types of Drops/simpledrops.md",tags:[],version:"1.1",sidebarPosition:2,frontMatter:{sidebar_label:"Simple Drops",sidebar_position:2},sidebar:"version-1.1/tutorialSidebar",previous:{title:"General Drop Customization",permalink:"/Github ReadMe/Types of Drops/drop-customization"},next:{title:"Non Fungible Token Drops",permalink:"/Github ReadMe/Types of Drops/nftdrops"}},p=[{value:"Backend Servers",id:"backend-servers",children:[]},{value:"Recurring Payments",id:"recurring-payments",children:[]},{value:"Quick Onboarding",id:"quick-onboarding",children:[]}],c={toc:p};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"simple-drops"},"Simple Drops"),(0,o.kt)("p",null,"The most basic type of drop is the simple kind. Any keys that are part of a simple drop can\nonly be used for 1 thing: ",(0,o.kt)("strong",{parentName:"p"},"transferring $NEAR"),". Once the key is claimed, the claiming account\nwill receive the $NEAR specified in the ",(0,o.kt)("inlineCode",{parentName:"p"},"deposit_per_use"),". Simple drops are a great way to send $NEAR to claiming accounts while not storing a lot\nof information on the contract. Below are a couple use cases."),(0,o.kt)("h2",{id:"backend-servers"},"Backend Servers"),(0,o.kt)("p",null,"Let's say you have a backend server that should send 10 $NEAR to the first 3\npeople that redeem an NFT. Rather than exposing your full access key in the backend server,\nyou could create a simple drop that either has 3 keys or 1 key that is claimable 3 times.\nIn the drop, you'd specify that each time the key is claimed, the specified account would\nreceive 10 $NEAR."),(0,o.kt)("h2",{id:"recurring-payments"},"Recurring Payments"),(0,o.kt)("p",null,"Recurring payments are quite a common situation. If you need to send someone 10 $NEAR once a\nmonth for 6 months, you could create a simple drop that has a ",(0,o.kt)("inlineCode",{parentName:"p"},"claim_interval")," of 1 month with\na ",(0,o.kt)("inlineCode",{parentName:"p"},"start_timestamp")," of next week. Everytime the key is used, 10 $NEAR is sent to the account. If\nthe contractor missed a month's payment, they can claim the key late but can never use the key more\nthan what is intended."),(0,o.kt)("p",{align:"center"}," ",(0,o.kt)("img",{src:"/static/img/recurring_payments.png",alt:"reccuring payments",width:"60%"})," "),(0,o.kt)("h2",{id:"quick-onboarding"},"Quick Onboarding"),(0,o.kt)("p",null,"If you need to quickly onboard users onto NEAR, you could create a simple drop with a\nsmall amount of $NEAR (enough to create a wallet) and set the claim permission to be\n",(0,o.kt)("inlineCode",{parentName:"p"},"CreateAccountAndClaim"),". This means that the key can only be used to create accounts.\nYou can then add keys as you wish to the drop and give them out to users so they can create\naccounts and be onboarded onto NEAR."))}l.isMDXComponent=!0}}]);