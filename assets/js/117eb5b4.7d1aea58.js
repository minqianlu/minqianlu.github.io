"use strict";(self.webpackChunktest_site=self.webpackChunktest_site||[]).push([[5323],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),h=a,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return n?r.createElement(m,c(c({ref:t},u),{},{components:n})):r.createElement(m,c({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},559:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={},c="Lunch and Learn 1",i={unversionedId:"lunch-learn-one",id:"lunch-learn-one",isDocsHomePage:!1,title:"Lunch and Learn 1",description:"Start of a series hosted by Ben and Keypom. Written notes jotted down throughout the session for quick reference. Full videos available on youtube as well.",source:"@site/docs/lunch-learn-one.md",sourceDirName:".",slug:"/lunch-learn-one",permalink:"/next/lunch-learn-one",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/lunch-learn-one.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"License and Acknowledgements",permalink:"/next/Github ReadMe/License-and-acknkowledgements"},next:{title:"testingpage",permalink:"/next/testingpage"}},s=[{value:"NEAR Access Key Model",id:"near-access-key-model",children:[]},{value:"Accounts on NEAR",id:"accounts-on-near",children:[]},{value:"Linkdrops",id:"linkdrops",children:[]}],l={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"lunch-and-learn-1"},"Lunch and Learn 1"),(0,a.kt)("p",null,"Start of a series hosted by Ben and Keypom. Written notes jotted down throughout the session for quick reference. Full videos available on youtube as well.  "),(0,a.kt)("h3",{id:"near-access-key-model"},"NEAR Access Key Model"),(0,a.kt)("p",null,"A Keypair is generated locally and the pubkey is add to your account. "),(0,a.kt)("p",null,"Access keys with numerous types are unique to NEAR. There are Full Access (similar to traditional keypairs) and Function Call Access Keys.  These Function Call Access Keys can only call specified accounts and methods. It cannot be used to send any NEAR, deploy a contract, create an account etc.  "),(0,a.kt)("p",null,"This means the Function Call Access key can be used as a throwaway key."),(0,a.kt)("p",null,"Your account can have any number of Access Keys, including ZERO. If there are zero, the account cannot deploy or withdraw funds (rugging). This is done as a form of trust for users.  "),(0,a.kt)("h3",{id:"accounts-on-near"},"Accounts on NEAR"),(0,a.kt)("p",null,"Implicit accounts are free to make and usually take on the form of a random generated name (h35b2f...etc). Named accounts are stored on the root/parent account. Ex. min.near is a subaccount of near. These named accounts require a payment to create as it is being stored on the parent account.  "),(0,a.kt)("p",null,"Root accounts do no have any control over their subaccounts. Creating account on NEAR requires account ID and a public key, from which the contract will create a full access key from.  "),(0,a.kt)("h3",{id:"linkdrops"},"Linkdrops"),(0,a.kt)("p",null,"Linkdrops work to send $NEAR to new or existing users through a link rather than a transfer command. On the NEAR linkdrop contract, you can call a function ",(0,a.kt)("em",{parentName:"p"},"send"),".",(0,a.kt)("br",{parentName:"p"}),"\n","1) You create a keypair locally.",(0,a.kt)("br",{parentName:"p"}),"\n","2) You load a Public Key and X $NEAR using the ",(0,a.kt)("em",{parentName:"p"},"send")," method.",(0,a.kt)("br",{parentName:"p"}),"\n","3) You give the corresponding Private Key to the desired recipient.",(0,a.kt)("br",{parentName:"p"}),"\n","4) Recipient gives Private Key to a Wallet such as MyNearWallet (MNW), which indicates the reciepient is the one intended.",(0,a.kt)("br",{parentName:"p"}),"\n","5) MNW will call create account and claim on the NEAR contract with a NEW public key and account id. The public key is added to the account id and the $NEAR is transfered to the new account.  "),(0,a.kt)("p",null,"Problem: 1 $NEAR is taken every time an account is created. This makes it expensive for scaling up."))}u.isMDXComponent=!0}}]);