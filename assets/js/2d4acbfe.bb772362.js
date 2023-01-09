"use strict";(self.webpackChunktest_site=self.webpackChunktest_site||[]).push([[2455],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5082:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const s={sidebar_label:"FT tests",sidebar_position:4},i="FT Tests",o={unversionedId:"Testing Learning/FT-tests",id:"Testing Learning/FT-tests",isDocsHomePage:!1,title:"FT Tests",description:"This suite of tests is meant to test all FT functionality",source:"@site/docs/Testing Learning/FT-tests.md",sourceDirName:"Testing Learning",slug:"/Testing Learning/FT-tests",permalink:"/next/Testing Learning/FT-tests",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Testing Learning/FT-tests.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"FT tests",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Configs",permalink:"/next/Testing Learning/config-tests"},next:{title:"NFT tests",permalink:"/next/Testing Learning/NFT-tests"}},l=[{value:"Tests Contained in FT-Tests",id:"tests-contained-in-ft-tests",children:[]},{value:"Notes from FT-Tests",id:"notes-from-ft-tests",children:[]}],c={toc:l};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ft-tests"},"FT Tests"),(0,r.kt)("p",null,"This suite of tests is meant to test all FT functionality"),(0,r.kt)("h2",{id:"tests-contained-in-ft-tests"},"Tests Contained in FT-Tests"),(0,r.kt)("p",null,"1) Claim Multi FT Drop And Ensure Keypom Balance Increases",(0,r.kt)("br",{parentName:"p"}),"\n","2) OverRegister FTs and add multi use key later",(0,r.kt)("br",{parentName:"p"}),"\n","3) Deleting Keys and Drops\n4) Refunding Assets and Deleting Multi Use Keys and Drops\n5) Paying with Attached Deposit. FT Contract DOes Not Exist\n6) Paying with Attached Deposit. Not Enough Deposit to Cover Callback Registration Fee",(0,r.kt)("br",{parentName:"p"}),"\n","7) Paying with User Balance. FT Contract Does Not Exist",(0,r.kt)("br",{parentName:"p"}),"\n","8) Automatically Register Keypom Contract"),(0,r.kt)("h2",{id:"notes-from-ft-tests"},"Notes from FT-Tests"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Minter is the user that is sending the FT"),(0,r.kt)("li",{parentName:"ul"},"When a drop is created and keys are added, registered uses is technically still 0. It is only when FTs are added does ",(0,r.kt)("em",{parentName:"li"},"registered_uses")," increment automatically. ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"registered uses = amount / FTData.balance_per_use"),(0,r.kt)("li",{parentName:"ul"},"As FTs are claimed or CAAC, ",(0,r.kt)("em",{parentName:"li"},"registered uses")," decrements"))),(0,r.kt)("li",{parentName:"ul"},"At the end of each test, keypom's balance should NOT decrease relative to the beginning. This is usually checked using the following code block:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"//make sure that keypom contract did not lose $NEAR during this process\n    await owner.call(keypom, 'delete_keys', {drop_id: \"0\"})\n    let ownerBal = await keypom.view('get_user_balance', {account_id: owner});\n    t.assert(ownerBal !== \"0\");\n    await owner.call(keypom, 'withdraw_from_balance', {});\n    ownerBal = await keypom.view('get_user_balance', {account_id: owner});\n    t.assert(ownerBal === \"0\");\n\n    let keypomBalance = await keypom.balance();\n    console.log('keypom available FINAL: ', keypomBalance.available.toString())\n    t.assert(keypomBalance.available > keypomInitialBalance);\n}); \n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When creating a drop, you can attach a deposit from the drop owner's NEAR wallet OR Keypom balance (implcit, withdraws from Keypom unless deposit attached)."),(0,r.kt)("li",{parentName:"ul"},"FT drops work in two stages.\n1) Keypom internal drop creation\n2) XCC to FT contract to get storage costs and everything"),(0,r.kt)("li",{parentName:"ul"},"If the drop creation fails in the latter stage,the $NEAR attached to the ",(0,r.kt)("em",{parentName:"li"},"create_drop")," call is refunded and the drop owner only has to cover the cost of Gas.")))}p.isMDXComponent=!0}}]);