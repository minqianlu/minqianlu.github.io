"use strict";(self.webpackChunktest_site=self.webpackChunktest_site||[]).push([[5867],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(r),h=n,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||a;return r?o.createElement(m,i(i({ref:t},d),{},{components:r})):o.createElement(m,i({ref:t},d))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3835:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=r(7462),n=(r(7294),r(3905));const a={sidebar_label:"Costs",sidebar_position:4},i="Costs",s={unversionedId:"Github ReadMe/costs",id:"Github ReadMe/costs",isDocsHomePage:!1,title:"Costs",description:"It is important to note that the Keypom contract is 100% FEE FREE and will remain that way for the forseeable future. This contract is a public good and is meant to inspire change in the NEAR ecosystem.",source:"@site/docs/Github ReadMe/costs.md",sourceDirName:"Github ReadMe",slug:"/Github ReadMe/costs",permalink:"/next/Github ReadMe/costs",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Github ReadMe/costs.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"Costs",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Password Protected Keys",permalink:"/next/Github ReadMe/passwordprotect"},next:{title:"Linkdrop Basics",permalink:"/next/Github ReadMe/LinkdropBasics"}},l=[{value:"Per Drop",id:"per-drop",children:[]},{value:"Per Key",id:"per-key",children:[{value:"Key Costs for Simple Drop",id:"key-costs-for-simple-drop",children:[]},{value:"Additional Costs for NFT Drops",id:"additional-costs-for-nft-drops",children:[]},{value:"Additional Costs for FT Drops",id:"additional-costs-for-ft-drops",children:[]},{value:"Additional Costs for FC Drops",id:"additional-costs-for-fc-drops",children:[]}]},{value:"Deleting Keys and Drops",id:"deleting-keys-and-drops",children:[]},{value:"Automatic Refunds When Keys are Used",id:"automatic-refunds-when-keys-are-used",children:[]},{value:"Account Balances for Smooth UX",id:"account-balances-for-smooth-ux",children:[]},{value:"Built With",id:"built-with",children:[]}],c={toc:l};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"costs"},"Costs"),(0,n.kt)("p",null,"It is important to note that the Keypom contract is 100% ",(0,n.kt)("strong",{parentName:"p"},"FEE FREE")," and will remain that way for the ",(0,n.kt)("em",{parentName:"p"},"forseeable future"),". This contract is a public good and is meant to inspire change in the NEAR ecosystem."),(0,n.kt)("p",null,"With that being said, there are several mandatory costs that must be taken into account when using Keypom. These costs are broken down into two categories: per key and per drop."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"NOTE:")," Creating an empty drop and then adding 100 keys in separate calls will incur the same cost as creating a drop with 100 keys in the same call.")),(0,n.kt)("h2",{id:"per-drop"},"Per Drop"),(0,n.kt)("p",null,"When creating an empty drop, there is only one cost to keep in mind regardless of the drop type:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Storage cost (",(0,n.kt)("strong",{parentName:"li"},"~0.006 $NEAR")," for simple drops)")),(0,n.kt)("h2",{id:"per-key"},"Per Key"),(0,n.kt)("p",null,"Whenever keys are added to a drop (either when the drop is first created or at a later date), the costs are outlined below."),(0,n.kt)("h3",{id:"key-costs-for-simple-drop"},"Key Costs for Simple Drop"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"$NEAR sent whenever the key is used (can be 0)."),(0,n.kt)("li",{parentName:"ul"},"Access key allowance (",(0,n.kt)("strong",{parentName:"li"},"~0.0187 $NEAR per use"),")."),(0,n.kt)("li",{parentName:"ul"},"Storage for creating access key (",(0,n.kt)("strong",{parentName:"li"},"0.001 $NEAR"),")."),(0,n.kt)("li",{parentName:"ul"},"Storage cost (",(0,n.kt)("strong",{parentName:"li"},"~0.006 $NEAR")," for simple drops)")),(0,n.kt)("h3",{id:"additional-costs-for-nft-drops"},"Additional Costs for NFT Drops"),(0,n.kt)("p",null,"Since keys aren't registered for use until ",(0,n.kt)("strong",{parentName:"p"},"after")," the contract has received the NFT, we don't know how much storage the token IDs will use on the contract. To combat this, the Keypom contract will automatically measure the storage used up for storing each token ID in the ",(0,n.kt)("inlineCode",{parentName:"p"},"nft_on_transfer")," function and that $NEAR will be taken from the funder's balance."),(0,n.kt)("h3",{id:"additional-costs-for-ft-drops"},"Additional Costs for FT Drops"),(0,n.kt)("p",null,"Since accounts claiming FTs may or may not be registered on the Fungible Token contract, Keypom will automatically try to register ",(0,n.kt)("strong",{parentName:"p"},"all")," accounts. This means that the drop creators must front the cost of registering users depending on the ",(0,n.kt)("inlineCode",{parentName:"p"},"storage_balance_bounds")," returned from the FT contract. This applies to every use for every key."),(0,n.kt)("p",null,"In addition, Keypom must be registered on the FT contract. If you create a FT drop and are the first person to ever do so for a specific FT contract on Keypom, Keypom will be automatically registered when the drop is created. This is a one time cost and once it is done, no other account will need to register Keypom for that specific FT contract."),(0,n.kt)("h3",{id:"additional-costs-for-fc-drops"},"Additional Costs for FC Drops"),(0,n.kt)("p",null,"Drop creators have a ton of customization available to them when creation Function Call drops. A cost that they might incur is the attached deposit being sent alongside the function call. Keypom will charge creators for all the attached deposits they specify."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"NOTE:")," The storage costs are dynamically calculated and will vary depending on the information you store on-chain.")),(0,n.kt)("h2",{id:"deleting-keys-and-drops"},"Deleting Keys and Drops"),(0,n.kt)("p",null,"Creators have the ability to delete drops and keys at any time. In this case, ",(0,n.kt)("strong",{parentName:"p"},"all")," the initial costs they incurred for the remaining keys will be refunded to them (minus Gas fees of course)."),(0,n.kt)("h2",{id:"automatic-refunds-when-keys-are-used"},"Automatic Refunds When Keys are Used"),(0,n.kt)("p",null,"One way that Keypom optimizes the fee structure is by performing automatic refunds for some of the initial costs that creators pay for when keys are used. All the storage that is freed along with any unused allowance is automatically sent back to the creator whenever a key is used. This model drastically reduces the overall costs of creating drops and creates incentives for the keys to be used. "),(0,n.kt)("h2",{id:"account-balances-for-smooth-ux"},"Account Balances for Smooth UX"),(0,n.kt)("p",null,"In order to make the UX of using Keypom seamless, the contract introduces a debiting account model. All costs and refunds go through your account's balance which is stored on the contract. This balance can be topped up or withdrawn at any moment using the ",(0,n.kt)("inlineCode",{parentName:"p"},"add_to_balance()"),"  and ",(0,n.kt)("inlineCode",{parentName:"p"},"withdraw_from_balance()")," functions."),(0,n.kt)("p",null,"This account balance is not ",(0,n.kt)("em",{parentName:"p"},"required"),", however. You can create a drop by attaching a deposit to the call. Keep in mind that this will create an account balance for you behind the scenes, however."),(0,n.kt)("h2",{id:"built-with"},"Built With"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/near/near-sdk-rs"},"near-sdk-rs")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/near/near-api-js"},"near-api-js"))))}d.isMDXComponent=!0}}]);