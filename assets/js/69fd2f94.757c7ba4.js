"use strict";(self.webpackChunktest_site=self.webpackChunktest_site||[]).push([[8896],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=o.createContext({}),p=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return o.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(u,".").concat(m)]||d[m]||c[m]||r;return n?o.createElement(h,s(s({ref:t},l),{},{components:n})):o.createElement(h,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<r;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2421:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>s,default:()=>l,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var o=n(7462),a=(n(7294),n(3905));const r={sidebar_label:"General Drop Customization",sidebar_position:2},s="Shared Drop Customization",i={unversionedId:"Github ReadMe/Types of Drops/drop-customization",id:"version-1.1/Github ReadMe/Types of Drops/drop-customization",isDocsHomePage:!1,title:"Shared Drop Customization",description:"While each type of drop has its own set of customizable features, there are some that are shared by all drops",source:"@site/versioned_docs/version-1.1/Github ReadMe/Types of Drops/drop-customization.md",sourceDirName:"Github ReadMe/Types of Drops",slug:"/Github ReadMe/Types of Drops/drop-customization",permalink:"/Github ReadMe/Types of Drops/drop-customization",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/versioned_docs/version-1.1/Github ReadMe/Types of Drops/drop-customization.md",tags:[],version:"1.1",sidebarPosition:2,frontMatter:{sidebar_label:"General Drop Customization",sidebar_position:2},sidebar:"version-1.1/tutorialSidebar",previous:{title:"Keypom Solution",permalink:"/Github ReadMe/Introduction/our-solution"},next:{title:"Simple Drops",permalink:"/Github ReadMe/Types of Drops/simpledrops"}},u=[],p={toc:u};function l(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"shared-drop-customization"},"Shared Drop Customization"),(0,a.kt)("p",null,"While each ",(0,a.kt)("em",{parentName:"p"},"type")," of drop has its own set of customizable features, there are some that are shared by ",(0,a.kt)("strong",{parentName:"p"},"all drops"),"\nThese are outlined below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"/// Each time a key is used, how much $NEAR should be sent to the claiming account (can be 0).\npub deposit_per_use: u128,\n\n/// How much Gas should be attached when the key is used. The default is 100 TGas as this is\n/// what's used by the NEAR wallet.\npub required_gas: Gas,\n\n/// The drop as a whole can have a config as well\npub config: Option<DropConfig>,\n\n/// Metadata for the drop in the form of stringified JSON. The format is completely up to the\n/// user and there are no standards for format.\npub metadata: LazyOption<DropMetadata>,\n")),(0,a.kt)("p",null,"Within the config, there are a suite of features that can be customized as well:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"/// How many uses can each key have before it's deleted. If None, default to 1.\npub uses_per_key: Option<u64>,\n\n/// Minimum block timestamp before keys can be used. If None, keys can be used immediately\n/// Measured in number of non-leap-nanoseconds since January 1, 1970 0:00:00 UTC.\npub start_timestamp: Option<u64>,\n\n/// Block timestamp that keys must be before. If None, keys can be used indefinitely\n/// Measured in number of non-leap-nanoseconds since January 1, 1970 0:00:00 UTC.\npub end_timestamp: Option<u64>,\n\n/// How often can a key be used. This specifies the time between each use.\n/// Measured in number of non-leap-nanoseconds since January 1, 1970 0:00:00 UTC.\npub throttle_timestamp: Option<u64>,\n\n/// Interval of time after the `start_timestamp` that must pass before a key can be used.\n/// If multiple intervals pass, the key can be used multiple times. This has nothing to do\n/// With the throttle timestamp. It only pertains to the start timestamp and the current \n/// timestamp. The last_used timestamp is not taken into account.\n/// Measured in number of non-leap-nanoseconds since January 1, 1970 0:00:00 UTC.\npub claim_interval: Option<u64>,\n\n/// If claim is called, refund the `deposit_per_use` to the owner's account directly. If None,\n/// default to false.\npub on_claim_refund_deposit: Option<bool>,\n\n/// What permissions does the key have? Can it call both `claim` and `create_account_and_claim`\n/// or just one of the two?\n/// This defaults to the key being able to call both methods.\npub claim_permission: Option<ClaimPermissions>,\n\n/// Override the global root account that sub-accounts will have (near or testnet). This allows\n/// users to create specific drops that can create sub-accounts of a predefined root.\n/// For example, Fayyr could specify a root of `fayyr.near` By which all sub-accounts will then\n/// be `ACCOUNT.fayyr.near`\npub drop_root: Option<AccountId>,\n\n/// Should the drop be automatically deleted when all the keys are used? This is defaulted to false and\n/// Must be overwritten\npub delete_on_empty: Option<bool>,\n\n/// When this drop is deleted and it is the owner's *last* drop, automatically withdraw their balance.\npub auto_withdraw: Option<bool>,\n")))}l.isMDXComponent=!0}}]);