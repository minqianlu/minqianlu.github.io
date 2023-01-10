"use strict";(self.webpackChunktest_site=self.webpackChunktest_site||[]).push([[5322],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,f=c["".concat(l,".").concat(d)]||c[d]||u[d]||i;return n?a.createElement(f,s(s({ref:t},m),{},{components:n})):a.createElement(f,s({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3761:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_label:"Configs",sidebar_position:3},s="Configuration Tests",o={unversionedId:"Testing Learning/config-tests",id:"version-1.2/Testing Learning/config-tests",title:"Configuration Tests",description:"These features pretain to configuring the drops. Items such as start and end timestamps, throttle timestamps, custom drop roots etc.",source:"@site/versioned_docs/version-1.2/Testing Learning/config-tests.md",sourceDirName:"Testing Learning",slug:"/Testing Learning/config-tests",permalink:"/Testing Learning/config-tests",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/versioned_docs/version-1.2/Testing Learning/config-tests.md",tags:[],version:"1.2",sidebarPosition:3,frontMatter:{sidebar_label:"Configs",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Internals",permalink:"/Testing Learning/internals"},next:{title:"FT tests",permalink:"/Testing Learning/FT-tests"}},l={},p=[{value:"Tests contained in Config-Tests",id:"tests-contained-in-config-tests",level:2},{value:"Notes from Config Tests",id:"notes-from-config-tests",level:2}],m={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configuration-tests"},"Configuration Tests"),(0,r.kt)("p",null,"These features pretain to configuring the drops. Items such as start and end timestamps, throttle timestamps, custom drop roots etc.  "),(0,r.kt)("h2",{id:"tests-contained-in-config-tests"},"Tests contained in Config-Tests"),(0,r.kt)("p",null,"1) Testing Delete on Empty Config",(0,r.kt)("br",{parentName:"p"}),"\n","2) Testing Start Timestamp",(0,r.kt)("br",{parentName:"p"}),"\n","3) Testing Throttle Timestamp",(0,r.kt)("br",{parentName:"p"}),"\n","4) Testing On Claim Refund Deposit",(0,r.kt)("br",{parentName:"p"}),"\n","5) Testing Custom Drop Root",(0,r.kt)("br",{parentName:"p"}),"\n","6) Testing Auto Withdraw",(0,r.kt)("br",{parentName:"p"}),"\n","7) Testing Custom Drop ID",(0,r.kt)("br",{parentName:"p"}),"\n","8) Testing Valid Config",(0,r.kt)("br",{parentName:"p"}),"\n","9) Testing End Timestamp",(0,r.kt)("br",{parentName:"p"}),"\n","10) Testing End Timestamp Key Drainage",(0,r.kt)("br",{parentName:"p"}),"\n","11) Testing Claim Interval",(0,r.kt)("br",{parentName:"p"}),"\n","12) Testing All Time Based Configs   "),(0,r.kt)("h2",{id:"notes-from-config-tests"},"Notes from Config Tests"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Configs can be specified explicitely or not at all. By default, delete_on_empty is false and the drop will not be deleted if all the keys are used."),(0,r.kt)("li",{parentName:"ul"},"Claim does not receive an explicit access key. Rather, it claims ",(0,r.kt)("strong",{parentName:"li"},"using the PK that signed the ",(0,r.kt)("em",{parentName:"strong"},"claim")," transaction"),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This means that the key associated with the drop needs to be added to the ?owner or Keypom? account before you can call claim."),(0,r.kt)("li",{parentName:"ul"},"A target account for claim must be specified."))),(0,r.kt)("li",{parentName:"ul"},"In the Sandbox, you set the access key to be used to sign a transaction using the setKey function. You can update the key's perms using updateAccessKey (ONLY AVAILABLE IN SANDBOX, THIS IS A MASSIVE SECURITY BREACH OTHERWISE LOL)"),(0,r.kt)("li",{parentName:"ul"},"Full access keys do not have any allowance requirements to cover gas etc."),(0,r.kt)("li",{parentName:"ul"},"If the start timestamp is violated, claim will not work and the access key will not be deleted."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"CAAC")," failure still claims the key"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"CAAC")," and ",(0,r.kt)("em",{parentName:"li"},"claim")," will ",(0,r.kt)("strong",{parentName:"li"},"ALWAYS DELETE THE KEY BEFORE MAKING THE CROSS CONTRACT CALL")," to the linkdrop contract",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"this is to prevent someone from calling claim or CAAC numerous times while the XCC is being made but not finalized and the Keypom contract thinks the access key is still valid"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"CAAC")," and ",(0,r.kt)("em",{parentName:"li"},"Claim")," will ",(0,r.kt)("strong",{parentName:"li"},"NEVER")," panic. This panic can cause a discrepency between the keypom balance of each key (that is book-kept and not updated live) and the actual balance on chain. This is because a panic will roll-back a txn, meaning keypom will think the gas was not spent."),(0,r.kt)("li",{parentName:"ul"},"Custom DropId's must have a value of above a billion, this is to prevent custom IDs from interfering with the automatically increasing nonce drop IDs"),(0,r.kt)("li",{parentName:"ul"},'Start timestamps need to be defined using date.now as it uses an "absolute" time reference frame (since Jan 1 1970)'),(0,r.kt)("li",{parentName:"ul"},"all timestamps are expressed in nano seconds"),(0,r.kt)("li",{parentName:"ul"},"When keys fail due to internal reasons, such as timestamp violations, the key supply for that drop is not decremented",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"internal tests are validated first before making those XCC. If they fail, it can rollback"))),(0,r.kt)("li",{parentName:"ul"},"Once all key uses are used/claimed, the key is deleted"),(0,r.kt)("li",{parentName:"ul"},"when creating a drop, the owner must front all the costs necessary. This means ",(0,r.kt)("em",{parentName:"li"},"generally for simple drops")," ",(0,r.kt)("strong",{parentName:"li"},"number_of_keys X uses_per_key X deposit_per_use")),(0,r.kt)("li",{parentName:"ul"},"On Claim Refund Deposit config option is used to avoid people from rugging an onboarding drop. For example, if a drop owner wants onboard people using CAAC, the owner's deposit will only be transfered to those that use CAAC. If the user simply calls claim, the key is used but they are not transfered any of the NEAR as they are not using it for its intended purpose. Instead, the deposit gets refunded back to the owner."),(0,r.kt)("li",{parentName:"ul"},"All accounts created from X drop must use predefined Y drop root. This applies to both default and custom drop roots."),(0,r.kt)("li",{parentName:"ul"},"delete-on-empty deletes a drop once keys are all used"),(0,r.kt)("li",{parentName:"ul"},"start and end timestamps must be greater than the current block "),(0,r.kt)("li",{parentName:"ul"},'claim interval allows a controlled flow of key uses. For example, if i want the user to only be able to use the key every 10mins after the drop (NOT THROTTLE BUT JUST 10MINS AFTER START TIME) I can define it that way. From there, they can choose to use right away or wait for X amount to "pile up" before using them. '),(0,r.kt)("li",{parentName:"ul"},"Drop deposit arithemtic something to keep in mind, users calling claim do not sip from owner's debit account. The owner FRONTS the cost first and then the user claims from keypom's NEAR wallet balance.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For example, if owner has 10NEAR keypom wallet balance and creates a drop with 1 key, 1NEAR per key use and 1use per key, the owner fronts that cost and now has 9NEAR in their keypom wallet."))),(0,r.kt)("li",{parentName:"ul"},'Auto-withdraw allows owners to withdraw their Keypom balance to their NEAR wallets once all their drops have been deleted. This can be used in conjunction with delete-on-empty to clear up the funders\' "trail" on keypom.')))}c.isMDXComponent=!0}}]);