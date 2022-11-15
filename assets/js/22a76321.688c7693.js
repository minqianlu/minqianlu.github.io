"use strict";(self.webpackChunktest_site=self.webpackChunktest_site||[]).push([[9079],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9731:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_label:"Testing Notes",sidebar_position:2},i="Testing/Contract Notes",s={unversionedId:"testing-learning",id:"testing-learning",isDocsHomePage:!1,title:"Testing/Contract Notes",description:"Notes that I jot down for my own reference to understand the contract and test-case writing better.",source:"@site/docs/testing-learning.md",sourceDirName:".",slug:"/testing-learning",permalink:"/next/testing-learning",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/testing-learning.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Testing Notes",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"License and Acknowledgements",permalink:"/next/Github ReadMe/License-and-acknkowledgements"},next:{title:"Lunch and Learn 1",permalink:"/next/lunch-learn-one"}},c=[{value:"Basics of Ava and Near Workspaces",id:"basics-of-ava-and-near-workspaces",children:[]},{value:"Notes from Internal Tests",id:"notes-from-internal-tests",children:[]}],l={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"testingcontract-notes"},"Testing/Contract Notes"),(0,a.kt)("p",null,"Notes that I jot down for my own reference to understand the contract and test-case writing better.  "),(0,a.kt)("h2",{id:"basics-of-ava-and-near-workspaces"},"Basics of Ava and Near Workspaces"),(0,a.kt)("p",null,"All testing is built using ","[Near Workspaces]"," (",(0,a.kt)("a",{parentName:"p",href:"https://github.com/near/workspaces-js"},"https://github.com/near/workspaces-js"),") and leverages Ava to run tests concurrently. The general gist is that a worker is initialized in order to spin up a NEAR sandbox which essentially provides a mini-NEAR blockchain.  "),(0,a.kt)("p",null,"The worker has a root account and can be used to create subaccounts of root to interact with the chain and deploy contracts to it etc. Typically a subacount is deployed on root, and the contract is deployed on root.  "),(0,a.kt)("p",null,'This setup process can be specified to occur for each defined test, in order to "wipe the slate clean" by using ',(0,a.kt)("em",{parentName:"p"},"test.beforeEach")," and ",(0,a.kt)("em",{parentName:"p"},"test.afterEach"),".  "),(0,a.kt)("h2",{id:"notes-from-internal-tests"},"Notes from Internal Tests"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"First drop ID is zero, and is then incremented for each drop created on the Keypom contract.  "),(0,a.kt)("li",{parentName:"ul"},"The default root, based on our config setup for NEAR-Workspaces is testnet.  "),(0,a.kt)("li",{parentName:"ul"},"Contract metadata is seperate from drop metadata and others, it specifies properties of the ",(0,a.kt)("em",{parentName:"li"},"actual Keypom contract"),".  "),(0,a.kt)("li",{parentName:"ul"},"Default gas price on Keypom contract (seen through get_gas_price) is 100,000,000 yocto. This can be changed using set_gas_price.  "),(0,a.kt)("li",{parentName:"ul"},"Accounts are initialized with 0 NEAR. This can be changed with add_to_balance and other functions.  "),(0,a.kt)("li",{parentName:"ul"},"Balance changes can be found using BalanceChage and inserting starting and ending balance. This should be equal to your expected value within 1% precision.  "),(0,a.kt)("li",{parentName:"ul"},"Fees collected by the contracted can be set using ",(0,a.kt)("em",{parentName:"li"},"set_fees")," and be monitored with ",(0,a.kt)("em",{parentName:"li"},"get_fees_collected")," BY KEYPOM CONTRACT OWNER. \u2757\ufe0f",(0,a.kt)("em",{parentName:"li"},"FIND OUT DEFAULT FEES"),"\u2757\ufe0f  "),(0,a.kt)("li",{parentName:"ul"},"Fees can be incurred by adding keys to the drop or by creating new drops. This cost is paid for by the drop owner. These fees are both controled by the Keypom contract owner.  "),(0,a.kt)("li",{parentName:"ul"},"Fees can be withdrawn but must be called by the Keypom contract and withdrawn to the drop owner. It automatically withdraws all of it but does nothing if the owner account ID provided does not exist.  \u2757\ufe0f",(0,a.kt)("em",{parentName:"li"},"CLARIFY WHY YOU WOULD NEED TO WITHDRAW TO A DIFF ACCOUNT"),"\u2757\ufe0f  "),(0,a.kt)("li",{parentName:"ul"},"You can set fees per user as well.")))}p.isMDXComponent=!0}}]);