"use strict";(self.webpackChunktest_site=self.webpackChunktest_site||[]).push([[719],{6212:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(3117),s=(n(7294),n(3905));const i={sidebar_label:"NFT tests",sidebar_position:5},a="NFT Tests",o={unversionedId:"Testing Learning/NFT-tests",id:"Testing Learning/NFT-tests",title:"NFT Tests",description:"This suite of tests is meant to test all NFT functionality",source:"@site/docs/Testing Learning/NFT-tests.md",sourceDirName:"Testing Learning",slug:"/Testing Learning/NFT-tests",permalink:"/next/Testing Learning/NFT-tests",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Testing Learning/NFT-tests.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"NFT tests",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"FT tests",permalink:"/next/Testing Learning/FT-tests"},next:{title:"Password Protected Drops",permalink:"/next/Testing Learning/pw-drops-test"}},l={},p=[{value:"Tests Contained in NFT-Tests",id:"tests-contained-in-nft-tests",level:2},{value:"Notes from NFT-Tests",id:"notes-from-nft-tests",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"nft-tests"},"NFT Tests"),(0,s.kt)("p",null,"This suite of tests is meant to test all NFT functionality"),(0,s.kt)("h2",{id:"tests-contained-in-nft-tests"},"Tests Contained in NFT-Tests"),(0,s.kt)("p",null,"1) Claim Multi NFT Drop And Ensure Keypom Balance Increases",(0,s.kt)("br",{parentName:"p"}),"\n","2) OverRegister NFTs and add multi use key later",(0,s.kt)("br",{parentName:"p"}),"\n","3) Not enough funder balance stage 2",(0,s.kt)("br",{parentName:"p"}),"\n","4) Deleting Keys and Drop",(0,s.kt)("br",{parentName:"p"}),"\n","5) Refunding Assets and Deleting Multi Use Keys and Drops  "),(0,s.kt)("h2",{id:"notes-from-nft-tests"},"Notes from NFT-Tests"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"when creating an NFT drop, the NFTs data such as contract ID and sender ID are wrapped in a JSON wrapper and passed into the drop initialization"),(0,s.kt)("li",{parentName:"ul"},"Registered uses here are dependant on the number of NFTs minted and sent to Keypom"),(0,s.kt)("li",{parentName:"ul"},"SendNFTs requires a dropID to be specified, as well as token IDs to be transfered. It sends from minter (who owned the NFTs after they were minted) over to Keypom  "),(0,s.kt)("li",{parentName:"ul"},"In this test, the beforeEach setup mints 1 NFT. Therefore, all mints inside of tests increase the total supply by num_minted_during_test + 1"),(0,s.kt)("li",{parentName:"ul"},"process of minting NFTs to keypom goes from contract -> minter (intermediate acct.) using mintNFTs -> keypom using sendNFTs"),(0,s.kt)("li",{parentName:"ul"},"NFT owner is KEYPOM, not drop owner. This means all transfers come from Keypom"),(0,s.kt)("li",{parentName:"ul"},"From my understanding, sendNFTs has a cost that the owner of the drop needs to cover. This cost is the cost of storing the tokenIDs on chain.",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"this is considered STAGE 2 of the NFT drop creation. First is the actual drop and configs, second is registering the NFTs with Keypom by sending them to the contract.  "))),(0,s.kt)("li",{parentName:"ul"},"OverRegistering and NFT drop entails registered uses > keys * uses_per_key. In the case of this test, 10 NFTs were registered with Keypom while there were no keys added to the drop \u2757\ufe0fclarify use case for this\u2757\ufe0f"),(0,s.kt)("li",{parentName:"ul"},"When refunding unused assets, the NFTs are sent back to minter. This does not return any balance back to the drop owner though."),(0,s.kt)("li",{parentName:"ul"},"Deleting unused keys here works the same way as with simple drops. The cost of fronting them is returned to the drop owner.")))}d.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=s,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,a=new Array(i);a[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,a[1]=o;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);