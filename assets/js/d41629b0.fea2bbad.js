"use strict";(self.webpackChunktest_site=self.webpackChunktest_site||[]).push([[2364],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(t),h=a,y=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return t?r.createElement(y,c(c({ref:n},u),{},{components:t})):r.createElement(y,c({ref:n},u))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=p;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3745:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const o={},c="Lunch and Learn 1",i={unversionedId:"lunch-learn-one",id:"version-1.1/lunch-learn-one",isDocsHomePage:!1,title:"Lunch and Learn 1",description:"Start of a series hosted by Ben and Keypom. Written notes jotted down throughout the session for quick reference. Full videos available on youtube as well.",source:"@site/versioned_docs/version-1.1/lunch-learn-one.md",sourceDirName:".",slug:"/lunch-learn-one",permalink:"/lunch-learn-one",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/versioned_docs/version-1.1/lunch-learn-one.md",tags:[],version:"1.1",frontMatter:{},sidebar:"version-1.1/tutorialSidebar",previous:{title:"License and Acknowledgements",permalink:"/Github ReadMe/License-and-acknkowledgements"}},s=[{value:"NEAR Access Key Model",id:"near-access-key-model",children:[]},{value:"Accounts on NEAR",id:"accounts-on-near",children:[]},{value:"Linkdrops",id:"linkdrops",children:[]}],l={toc:s};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"lunch-and-learn-1"},"Lunch and Learn 1"),(0,a.kt)("p",null,"Start of a series hosted by Ben and Keypom. Written notes jotted down throughout the session for quick reference. Full videos available on youtube as well.  "),(0,a.kt)("h3",{id:"near-access-key-model"},"NEAR Access Key Model"),(0,a.kt)("p",null,"A Keypair is generated locally and the pubkey is add to your account. "),(0,a.kt)("p",null,"Access keys with numerous types are unique to NEAR. There are Full Access (similar to traditional keypairs) and Function Call Access Keys.  These Function Call Access Keys can only call specified accounts and methods. It cannot be used to send any NEAR, deploy a contract, create an account etc.  "),(0,a.kt)("p",null,"This means the Function Call Access key can be used as a throwaway key."),(0,a.kt)("p",null,"Your account can have any number of Access Keys, including ZERO. If there are zero, the account cannot deploy or withdraw funds (rugging). This is done as a form of trust for users.  "),(0,a.kt)("h3",{id:"accounts-on-near"},"Accounts on NEAR"),(0,a.kt)("p",null,"Implicit accounts are free to make and usually take on the form of a random generated name (h35b2f...etc). Named accounts are stored on the root/parent account. Ex. min.near is a subaccount of near. These named accounts require a payment to create as it is being stored on the parent account.  "),(0,a.kt)("p",null,"Root accounts do no have any control over their subaccounts. Creating account on NEAR requires account ID and a public key, from which the contract will create a full access key from.  "),(0,a.kt)("h3",{id:"linkdrops"},"Linkdrops"),(0,a.kt)("p",null,"Linkdrops work to send $NEAR to new or existing users through a link rather than a transfer command. On the NEAR linkdrop contract, you can call a function ",(0,a.kt)("em",{parentName:"p"},"send"),".",(0,a.kt)("br",{parentName:"p"}),"\n","1) You create a keypair locally.",(0,a.kt)("br",{parentName:"p"}),"\n","2) You load a Public Key and X $NEAR using the ",(0,a.kt)("em",{parentName:"p"},"send")," method.",(0,a.kt)("br",{parentName:"p"}),"\n","3) You give the corresponding Private Key to the desired recipient.",(0,a.kt)("br",{parentName:"p"}),"\n","4) Recipient gives Private Key to a Wallet such as MyNearWallet (MNW), which indicates the reciepient is the one intended.",(0,a.kt)("br",{parentName:"p"}),"\n","5) MNW will call create account and claim on the NEAR contract with a NEW public key and account id. The public key is added to the account id and the $NEAR is transfered to the new account.  "),(0,a.kt)("p",null,"Problem: 1 $NEAR is taken every time an account is created. This makes it expensive for scaling up."))}u.isMDXComponent=!0}}]);