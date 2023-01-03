"use strict";(self.webpackChunktest_site=self.webpackChunktest_site||[]).push([[7797],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>u});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=c(n),u=o,m=p["".concat(l,".").concat(u)]||p[u]||d[u]||i;return n?a.createElement(m,r(r({ref:t},h),{},{components:n})):a.createElement(m,r({ref:t},h))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9713:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(7462),o=(n(7294),n(3905));const i={sidebar_label:"Function Call Drops",sidebar_position:5},r="Function Call Drops",s={unversionedId:"Github ReadMe/Types of Drops/fcdrops",id:"Github ReadMe/Types of Drops/fcdrops",isDocsHomePage:!1,title:"Function Call Drops",description:"Function call drops are by far the most powerful feature that Keypom provides. FC drops allow any method on any",source:"@site/docs/Github ReadMe/Types of Drops/fcdrops.md",sourceDirName:"Github ReadMe/Types of Drops",slug:"/Github ReadMe/Types of Drops/fcdrops",permalink:"/next/Github ReadMe/Types of Drops/fcdrops",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Github ReadMe/Types of Drops/fcdrops.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"Function Call Drops",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Fungible Token Drops",permalink:"/next/Github ReadMe/Types of Drops/ftdrops"},next:{title:"Password Protected Keys",permalink:"/next/Github ReadMe/passwordprotect"}},l=[{value:"How does it work?",id:"how-does-it-work",children:[{value:"Function Call Config",id:"function-call-config",children:[]},{value:"Method Data",id:"method-data",children:[]},{value:"Key Uses",id:"key-uses",children:[]}]},{value:"Security",id:"security",children:[{value:"Keypom Arguments",id:"keypom-arguments",children:[]}]},{value:"Use Cases",id:"use-cases",children:[{value:"Proof of Attendance Protocols",id:"proof-of-attendance-protocols",children:[]},{value:"Auto Registration into DAOs",id:"auto-registration-into-daos",children:[]},{value:"Multisig Contracts",id:"multisig-contracts",children:[]},{value:"NFT Ticketing",id:"nft-ticketing",children:[]}]}],c={toc:l};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"function-call-drops"},"Function Call Drops"),(0,o.kt)("p",null,"Function call drops are by far the most powerful feature that Keypom provides. FC drops allow ",(0,o.kt)("strong",{parentName:"p"},"any")," method on ",(0,o.kt)("strong",{parentName:"p"},"any"),"\ncontract to be executed (with some exceptions). In addition, there are a huge variety of customizations and features you can choose from when\ndefining the drop that come on top of the global options. The possibilities are almost endless. State of the art NFT ticketing,\nlazy minting NFTs, auto registration into DAOs, analytics for marketing at events and much more."),(0,o.kt)("h2",{id:"how-does-it-work"},"How does it work?"),(0,o.kt)("p",null,"Unlike NFT and FT drops, the function calls must have everything paid for ",(0,o.kt)("strong",{parentName:"p"},"upfront"),". There is no two step process\nso the creation is similar to Simple drops. Once the drop is created and keys are added, you can immediately start using it."),(0,o.kt)("h3",{id:"function-call-config"},"Function Call Config"),(0,o.kt)("p",null,"When creating the drop, you have quite a lot of customization available. At the top level, there is a FC drop global\nconfig similar to how the ",(0,o.kt)("em",{parentName:"p"},"general")," config works."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct FCConfig {\n    /// How much GAS should be attached to the function call if it's a regular claim.\n    /// If this is used, you *cannot* go through conventional linkdrop apps such as mynearwallet\n    /// since those *always* attach 100 TGas no matter what. In addition, you will only be able to\n    /// call `claim` if this is specified. You cannot have an `attached_gas` parameter and also\n    /// call `create_account_and_claim.\n    pub attached_gas: Option<Gas>,\n}\n")),(0,o.kt)("h3",{id:"method-data"},"Method Data"),(0,o.kt)("p",null,"In addition to the global config, the user can specify a set of what's known as ",(0,o.kt)("inlineCode",{parentName:"p"},"MethodData"),". This represents the\ninformation for the function being called. Within this data, there are also a few optional configurations you can use\nto extend your use cases. You'll see how powerful these can be in the use cases ",(0,o.kt)("a",{parentName:"p",href:"#use-cases"},"section"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct MethodData {\n    /// Contract that will be called\n    pub receiver_id: AccountId,\n    /// Method to call on receiver_id contract\n    pub method_name: String,\n    /// Arguments to pass in (stringified JSON)\n    pub args: String,\n    /// Amount of yoctoNEAR to attach along with the call\n    pub attached_deposit: U128,\n    /// Specifies what field the claiming account should go in when calling the function\n    /// If None, this isn't attached to the args\n    pub account_id_field: Option<String>,\n    /// Specifies what field the drop ID should go in when calling the function.\n    /// If Some(String), attach drop ID to args. Else, don't attach.\n    pub drop_id_field: Option<String>,\n    /// Specifies what field the key ID should go in when calling the function.\n    /// If Some(String), attach key ID to args. Else, don't attach.\n    pub key_id_field: Option<String>,\n}\n")),(0,o.kt)("p",null,"The MethodData keeps track of the method being called, receiver, arguments, and attached deposit. In addition, there are\nsome optional fields that can be used to extend the use cases. If you have a contract that requires some more context from\nKeypom such as the drop ID, key ID, or account ID that used the key, these can all be specified."),(0,o.kt)("p",null,"We've kept it generic such that you can specify the actual argument name that these will be passed in as. For example, if you\nhad a contract that would lazy mint an NFT and it required the account to be passed in as ",(0,o.kt)("inlineCode",{parentName:"p"},"receiver_id"),", you could specify\nan ",(0,o.kt)("inlineCode",{parentName:"p"},"account_id_field")," set to ",(0,o.kt)("inlineCode",{parentName:"p"},"receiver_id")," such that Keypom will automatically pass in the account ID that used the key under the\nfield ",(0,o.kt)("inlineCode",{parentName:"p"},"receiver_id"),"."),(0,o.kt)("p",null,"This logic extends to the drop ID, and key Id as well."),(0,o.kt)("h3",{id:"key-uses"},"Key Uses"),(0,o.kt)("p",null,"For ",(0,o.kt)("strong",{parentName:"p"},"every key use"),", you can specify a ",(0,o.kt)("em",{parentName:"p"},"vector")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"MethodData")," which allows you to execute multiple function calls each\ntime a key is used. These calls are scheduled 1 by 1 using a simple for loop. This means that most of the time, the function\ncalls will be executed in the order specified in the vector but it is not ",(0,o.kt)("em",{parentName:"p"},"guaranteed"),"."),(0,o.kt)("p",null,"It's important to note that the Gas available is split evenly between ",(0,o.kt)("em",{parentName:"p"},"all")," the function calls and if there are too many,\nyou might run into issues with not having enough Gas. You're responsible for ensuring that this doesn't happen."),(0,o.kt)("p",null,"The vector of ",(0,o.kt)("inlineCode",{parentName:"p"},"MethodData")," is ",(0,o.kt)("em",{parentName:"p"},"optional")," for each key use. If a key use has ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," rather than ",(0,o.kt)("inlineCode",{parentName:"p"},"Some(Vector<MethodData>)"),",\nit will decrement the uses and work as normal such that the ",(0,o.kt)("inlineCode",{parentName:"p"},"throttle_timestamp, "),"start_timestamp` etc. are enforced. The only\ndifference is that after the key uses are decremented and these checks are performed, the execution ",(0,o.kt)("strong",{parentName:"p"},"finishes early"),". The null\ncase does ",(0,o.kt)("strong",{parentName:"p"},"not")," create an account or send ",(0,o.kt)("em",{parentName:"p"},"any")," funds. It doesn't invoke any function calls and simply ",(0,o.kt)("em",{parentName:"p"},"returns once the\nchecks are done"),'. This makes the null case act as a "burner" where you disregard any logic. This has many uses which will\nbe explored in the use cases ',(0,o.kt)("a",{parentName:"p",href:"#use-cases"},"section"),"."),(0,o.kt)("p",null,"If a key has more than 1 use, you can specify a ",(0,o.kt)("em",{parentName:"p"},"different vector")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"MethodData")," for ",(0,o.kt)("strong",{parentName:"p"},"each use"),". As an example, you could\nspecify that the first use will result in a null case and the second use will result in a lazy minting function being called.\nIf you have multiple uses but want them all to do the same thing, you don't have to repeat the same data. Passing in only 1\nvector of ",(0,o.kt)("inlineCode",{parentName:"p"},"MethodData")," will result in  ",(0,o.kt)("strong",{parentName:"p"},"all the uses")," inheriting that data."),(0,o.kt)("h2",{id:"security"},"Security"),(0,o.kt)("p",null,"Since all FC drops will be signed by the Keypom contract, there are a few restrictions in place to avoid malicious behaviors.\nTo avoid users from stealing registered assets from other drops, the following methods cannot be called via FC Drops:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'/// Which methods are prohibited from being called by an FC drop\nconst DEFAULT_PROHIBITED_FC_METHODS: [&str; 6] = [\n    "nft_transfer",\n    "nft_transfer_call",\n    "nft_approve",\n    "nft_transfer_payout",\n    "ft_transfer",\n    "ft_transfer_call",\n];\n')),(0,o.kt)("p",null,"In addition, the Keypom contract cannot be the receiver of any function call. This is to avoid people\nfrom calling private methods through FC Drops."),(0,o.kt)("h3",{id:"keypom-arguments"},"Keypom Arguments"),(0,o.kt)("p",null,"When a key is used and a function is called, there is a data structure that is ",(0,o.kt)("strong",{parentName:"p"},"automatically")," attached to the arguments.\nThis is known as the ",(0,o.kt)("inlineCode",{parentName:"p"},"keypom_args"),". It contains the information that the drop creator specified in the ",(0,o.kt)("inlineCode",{parentName:"p"},"MethodData"),". "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct KeypomArgs {\n    pub account_id_field: Option<String>,\n    pub drop_id_field: Option<String>,\n    pub key_id_field: Option<String>,\n}\n")),(0,o.kt)("h4",{id:"motivation"},"Motivation"),(0,o.kt)("p",null,"Let's say there was an exclusive NFT contract that allowed the Keypom contract to mint NFTs as part of an FC drop. Only Keypom\nwas given access to mint the NFTs so they could be given out as linkdrops. The organizer only wanted links that were part of their\ndrop to be valid. For this reason, the NFT contract would only mint if Keypom called the ",(0,o.kt)("inlineCode",{parentName:"p"},"nft_mint")," function and there was a field\n",(0,o.kt)("inlineCode",{parentName:"p"},"series")," passed in and it was equal to the drop ID created by the organizer."),(0,o.kt)("p",null,"Let's say the owner created an exclusive drop that happened to have a drop ID of 5. They could then go to the NFT contract\nand restrict NFTs to only be minted if:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"series")," had a value of 5."),(0,o.kt)("li",{parentName:"ul"},"The Keypom contract was the one calling the function.")),(0,o.kt)("p",null,"In order for this to work, when creating the drop, the owner would need to specify that the",(0,o.kt)("inlineCode",{parentName:"p"},"drop_id_field")," was set to a value of ",(0,o.kt)("inlineCode",{parentName:"p"},"series"),"\nsuch that the drop ID is correctly passed into the function."),(0,o.kt)("p",null,"The problem with this approach is that the NFT contract has no way of knowing which arguments were sent by the ",(0,o.kt)("strong",{parentName:"p"},"user")," when the drop\nwas created ",(0,o.kt)("inlineCode",{parentName:"p"},"as part of the MethodData "),"args",(0,o.kt)("inlineCode",{parentName:"p"},"and which arguments are automatically populated by the Keypom contract. There is nothing \nstopping a malicious user from creating a new drop that has an ID of 6 but hardcoding in the actual arguments that"),"series",(0,o.kt)("inlineCode",{parentName:"p"},"should have \na value of 5. In this case, the malicious drop would have *no*"),"drop_id_field",(0,o.kt)("inlineCode",{parentName:"p"},"and the NFT contract would have no way of knowing that the "),"series` value is malicious."),(0,o.kt)("p",null,"This can be prevented if a new field is introduced representing what was automatically injected by the Keypom contract itself. At the\nend of the day, Keypom will ",(0,o.kt)("strong",{parentName:"p"},"always")," send correct information to the receiving contracts. If those contracts have a way to know what has\nbeen sent by Keypom and what has been manually set by users, the problem is solved. In the above scenario, the NFT contract would simply add\nan assertion that the ",(0,o.kt)("inlineCode",{parentName:"p"},"keypom_args")," had the ",(0,o.kt)("inlineCode",{parentName:"p"},"account_id_field")," set to ",(0,o.kt)("inlineCode",{parentName:"p"},"Some(series)")," meaning that the incoming ",(0,o.kt)("inlineCode",{parentName:"p"},"series")," field was set by Keypom\nand not by a malicious user."),(0,o.kt)("h2",{id:"use-cases"},"Use Cases"),(0,o.kt)("p",null,"Function call drops are the bread and butter of the Keypom contract. They are the most powerful and complex drops that can currently be created.\nWith this complexity, there are an almost infinite number of use-cases that arise."),(0,o.kt)("h3",{id:"proof-of-attendance-protocols"},"Proof of Attendance Protocols"),(0,o.kt)("p",null,"A very common use case in the space is what's known as Proof of Attendance. Often times when people go to events, they want a way to prove\nthat they were there. Some traditional approaches would be to submit your wallet address and you would be sent an NFT or some other form of\nproof at a later date. The problem with this is that it has a very high barrier to entry. Not everyone has a wallet."),(0,o.kt)("p",null,"With Keypom, you can create a function call drop that allows people to onboard onto NEAR if they don't have a wallet or if they do, they can\nsimply use that. As part of the onboarding / claiming process, they would receive some sort of proof of attendance such as an NFT. This can\nbe lazy minted on-demand such that storage isn't paid up-front for all the tokens."),(0,o.kt)("p",null,"At this point, the event organizers or the funder can distribute links to people that attend the event in-person. These links would then be\nclaimed by users and they would receive the proof of attendance."),(0,o.kt)("h3",{id:"auto-registration-into-daos"},"Auto Registration into DAOs"),(0,o.kt)("p",null,"DAOs are a raging topic in crypto. The problem with DAOs, however, is there is a barrier to entry for users that aren't familiar with the\nspecific chain they're built on top of. Users might not have wallets or understand how to interact with contracts. On the contrary, they\nmight be very well versed or immersed in the DAO's topics. They shouldn't be required to create a wallet and learn the onboarding process."),(0,o.kt)("p",null,"With Keypom, you can create a function call drop with the main purpose of registering users into a DAO. For people that have a wallet,\nthis will act as an easy way of registering them with the click of a link. For users that don't have a wallet and are unfamiliar with\nNEAR, they can be onboarded and registered into the DAO with the same click of a link."),(0,o.kt)("h3",{id:"multisig-contracts"},"Multisig Contracts"),(0,o.kt)("p",null,"Another amazing use-case for Keypom is allowing multisig contracts to have ZERO barrier to entry. Often times when using a multisig contract,\nyou will entrust a key to a trusted party. This party might have no idea what NEAR is or how to interact with your contract. With Keypom,\nyou can create a drop that will allow them to sign their transaction with a click of a link. No NEAR wallet is needed and no knowledge of the\nchain is required."),(0,o.kt)("p",null,"At the end of the day, from the users perspective, they are given a link and when they click it, their portion of the multisig transaction is\nsigned. The action is only performed on the multisig contract once all links have been clicked. This is an extremely powerful way of doing\naccomplishing multisig transactions with zero barrier to entry."),(0,o.kt)("p",null,"The users don't even need to create a new account. They can simply call ",(0,o.kt)("inlineCode",{parentName:"p"},"claim")," when the link is clicked which will fire the cross-contract call\nto the multisig contract and pass in the keypom arguments that will be cross-checked by that contract."),(0,o.kt)("h3",{id:"nft-ticketing"},"NFT Ticketing"),(0,o.kt)("p",null,"The problem with current NFT ticketing systems is that they require users to have a wallet. This is a huge barrier to entry for people that\nare attending events but don't have wallets. In addition, there is often no proof of attendance for the event as the NFT is burned in order\nto get into the event which requires an internet connection."),(0,o.kt)("p",null,"Keypom aims to solve these problems by having a ticketing system that has the following features."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"No wallet is needed to enter the event or receive a POAP."),(0,o.kt)("li",{parentName:"ul"},"No wifi is needed at the door."),(0,o.kt)("li",{parentName:"ul"},"An NFT is minted on-demand for each user that attends the event."),(0,o.kt)("li",{parentName:"ul"},"Users can optionally onboard onto NEAR if they don't have a wallet.")),(0,o.kt)("p",null,"In addition, some way to provide analytics to event organizers that contains information such as links that were:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Given out but not clicked at all."),(0,o.kt)("li",{parentName:"ul"},"Clicked but not attended."),(0,o.kt)("li",{parentName:"ul"},"Partially claimed indicating the number of people that attended but did not onboard or receive a POAP."),(0,o.kt)("li",{parentName:"ul"},"Fully claimed indicating the number of people that attended and received a POAP.")),(0,o.kt)("p",null,"In order to accomplish this, you can create a drop that has 3 uses per key. These uses would be:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Array(",(0,o.kt)("inlineCode",{parentName:"li"},"null"),")"),(0,o.kt)("li",{parentName:"ol"},"Array(",(0,o.kt)("inlineCode",{parentName:"li"},"null"),")"),(0,o.kt)("li",{parentName:"ol"},"Array(function call to POAP contract to lazy mint an NFT)")),(0,o.kt)("p",null,"The event organizer would create the links and distribute them to people however they see fit. When a user receives the link, the first\nclaim is automatically fired. This is a ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," case so nothing happens except for the fact that the key uses are decremented. At this point,\nthe organizer knows that the user has clicked the link since the uses have been decremented."),(0,o.kt)("p",null,"The next claim happens ",(0,o.kt)("strong",{parentName:"p"},"only")," when the user is at the door. Keypom would expose a QR code that can only be scanned by the bouncer's phone.\nThis QR code would appear once the first link is clicked and contains the private key for the link. At the event, they wouldn't need any wifi\nto get in as they only need to show the bouncer the QR code. Once the bouncer scans it, the site would ensure that they have exactly 2 out of\nthe 3 uses left. If they don't, they're not let in. At that point, a use is decremented from the key and the next time they visit the\nticket page (when they have internet), they would be able to claim the final use and be onboarded / receive a POAP."),(0,o.kt)("p",{align:"center"}," ",(0,o.kt)("img",{src:"/static/img/ticketing.png",alt:"ticketing",width:"65%",height:"65%"})," "))}h.isMDXComponent=!0}}]);