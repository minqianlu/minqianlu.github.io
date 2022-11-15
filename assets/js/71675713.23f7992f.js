"use strict";(self.webpackChunktest_site=self.webpackChunktest_site||[]).push([[1259],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),g=a,m=u["".concat(l,".").concat(g)]||u[g]||d[g]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6250:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_label:"Internals",sidebar_position:2},o="Internals",s={unversionedId:"Testing Learning/internals",id:"Testing Learning/internals",isDocsHomePage:!1,title:"Internals",description:"Contains tests regarding internal features. Primarily dealing with Keypom's internal settings such as changing the linkdrop contract, setting contract-wide gas prices and depositing/withdrawing user balances.",source:"@site/docs/Testing Learning/internals.md",sourceDirName:"Testing Learning",slug:"/Testing Learning/internals",permalink:"/next/Testing Learning/internals",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Testing Learning/internals.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Internals",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Intro to Testing",permalink:"/next/Testing Learning/intro-to-testing"},next:{title:"Configs",permalink:"/next/Testing Learning/config-tests"}},l=[{value:"Tests Contained in Internals",id:"tests-contained-in-internals",children:[]},{value:"Notes from Internal Tests",id:"notes-from-internal-tests",children:[]}],c={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"internals"},"Internals"),(0,a.kt)("p",null,"Contains tests regarding internal features. Primarily dealing with Keypom's internal settings such as changing the linkdrop contract, setting contract-wide gas prices and depositing/withdrawing user balances.  "),(0,a.kt)("h2",{id:"tests-contained-in-internals"},"Tests Contained in Internals"),(0,a.kt)("p",null,"1) Initial nonce (drop id) is 0\n2) Changing linkdrop contract (root account)\n3) Setting contract metadata\n4) Setting gas prices\n5) Deposit and Withdraw to Keypom user balance\n6) Withdrawing fees earned\n7) Setting custom fees per user"),(0,a.kt)("h2",{id:"notes-from-internal-tests"},"Notes from Internal Tests"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"When testing, ensure every step is carried out properly unless previously tested."),(0,a.kt)("li",{parentName:"ul"},"First drop ID is zero, and is then incremented for each drop created on the Keypom contract.  "),(0,a.kt)("li",{parentName:"ul"},"The default root, based on our config setup for NEAR-Workspaces is testnet.  "),(0,a.kt)("li",{parentName:"ul"},"Contract metadata is seperate from drop metadata and others, it specifies properties of the ",(0,a.kt)("em",{parentName:"li"},"actual Keypom contract"),".  "),(0,a.kt)("li",{parentName:"ul"},"Default gas price on Keypom contract (seen through get_gas_price) is 100,000,000 yocto. This can be changed using set_gas_price.  "),(0,a.kt)("li",{parentName:"ul"},"Accounts are initialized with 0 NEAR. This can be changed with add_to_balance and other functions.  "),(0,a.kt)("li",{parentName:"ul"},"Balance changes can be found using BalanceChage and inserting starting and ending balance. This should be equal to your expected value within 1% precision.  "),(0,a.kt)("li",{parentName:"ul"},"Fees collected by the contracted can be set using ",(0,a.kt)("em",{parentName:"li"},"set_fees")," and be monitored with ",(0,a.kt)("em",{parentName:"li"},"get_fees_collected")," BY KEYPOM CONTRACT OWNER. \u2757\ufe0f",(0,a.kt)("em",{parentName:"li"},"FIND OUT DEFAULT FEES"),"\u2757\ufe0f  "),(0,a.kt)("li",{parentName:"ul"},"Fees can be incurred by adding keys to the drop or by creating new drops. This cost is paid for by the drop owner. These fees are both controled by the Keypom contract owner.  "),(0,a.kt)("li",{parentName:"ul"},"Fees can be withdrawn but must be called by the Keypom contract and withdrawn to the drop owner. It automatically withdraws all of it but does nothing if the owner account ID provided does not exist.  \u2757\ufe0f",(0,a.kt)("em",{parentName:"li"},"CLARIFY WHY YOU WOULD NEED TO WITHDRAW TO A DIFFERENT ACCOUNT"),"\u2757\ufe0f  "),(0,a.kt)("li",{parentName:"ul"},"You can set fees per user as well."),(0,a.kt)("li",{parentName:"ul"},"accountID.availableBalance() returns NEAR wallet balance. add_to_balance adds from NEAR wallet to keypom debit balance.")))}p.isMDXComponent=!0}}]);