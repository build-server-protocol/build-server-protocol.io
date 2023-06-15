"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[632],{3905:(e,n,t)=>{t.d(n,{Zo:()=>v,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),m=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},v=function(e){var n=m(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,v=s(e,["components","mdxType","originalType","parentName"]),u=m(t),c=a,d=u["".concat(l,".").concat(c)]||u[c]||p[c]||i;return t?r.createElement(d,o(o({ref:n},v),{},{components:t})):r.createElement(d,o({ref:n},v))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=c;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var m=2;m<i;m++)o[m]=t[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3391:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>v,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>m,toc:()=>u});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],s={id:"jvm",title:"JVM Extension",sidebar_label:"JVM"},l=void 0,m={unversionedId:"extensions/jvm",id:"extensions/jvm",title:"JVM Extension",description:"The following section contains JVM-specific extensions to the build server",source:"@site/target/docs/extensions/jvm.md",sourceDirName:"extensions",slug:"/extensions/jvm",permalink:"/docs/extensions/jvm",draft:!1,editUrl:"https://github.com/build-server-protocol/build-server-protocol/edit/master/docs/extensions/jvm.md",tags:[],version:"current",frontMatter:{id:"jvm",title:"JVM Extension",sidebar_label:"JVM"},sidebar:"docs",previous:{title:"Java",permalink:"/docs/extensions/java"},next:{title:"Maven",permalink:"/docs/extensions/maven"}},v={},u=[{value:"Common shapes",id:"common-shapes",level:2},{value:"JvmBuildTarget",id:"jvmbuildtarget",level:4},{value:"BSP Server remote interface",id:"bsp-server-remote-interface",level:2},{value:"JvmTestEnvironment: request",id:"jvmtestenvironment-request",level:3},{value:"JvmTestEnvironmentParams",id:"jvmtestenvironmentparams",level:4},{value:"JvmTestEnvironmentResult",id:"jvmtestenvironmentresult",level:4},{value:"JvmEnvironmentItem",id:"jvmenvironmentitem",level:4},{value:"JvmMainClass",id:"jvmmainclass",level:4},{value:"JvmRunEnvironment: request",id:"jvmrunenvironment-request",level:3},{value:"JvmRunEnvironmentParams",id:"jvmrunenvironmentparams",level:4},{value:"JvmRunEnvironmentResult",id:"jvmrunenvironmentresult",level:4}],p={toc:u};function c(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The following section contains JVM-specific extensions to the build server\nprotocol."),(0,i.kt)("h2",{id:"common-shapes"},"Common shapes"),(0,i.kt)("h4",{id:"jvmbuildtarget"},"JvmBuildTarget"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"JvmBuildTarget")," is a basic data structure that contains jvm-specific\nmetadata, specifically JDK reference. This metadata is embedded in\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"data: Option[Json]")," field of the ",(0,i.kt)("inlineCode",{parentName:"p"},"BuildTarget")," definition, when\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"dataKind"),' field contains "jvm".'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export interface JvmBuildTarget {\n  /** Uri representing absolute path to jdk\n   * For example: file:///usr/lib/jvm/java-8-openjdk-amd64 */\n  javaHome?: URI;\n\n  /** The java version this target is supposed to use.\n   * For example: 1.8 */\n  javaVersion?: string;\n}\n")),(0,i.kt)("h2",{id:"bsp-server-remote-interface"},"BSP Server remote interface"),(0,i.kt)("h3",{id:"jvmtestenvironment-request"},"JvmTestEnvironment: request"),(0,i.kt)("p",null,"The JVM test environment request is sent from the client to the server in order to\ngather information required to launch a Java process. This is useful when the\nclient wants to control the Java process execution, for example to enable custom\nJava agents or launch a custom main class during unit testing or debugging"),(0,i.kt)("p",null,"The data provided by this endpoint may change between compilations, so it should\nnot be cached in any form. The client should ask for it right before test execution,\nafter all the targets are compiled."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"method: ",(0,i.kt)("inlineCode",{parentName:"li"},"buildTarget/jvmTestEnvironment")),(0,i.kt)("li",{parentName:"ul"},"params: ",(0,i.kt)("inlineCode",{parentName:"li"},"JvmTestEnvironmentParams")),(0,i.kt)("li",{parentName:"ul"},"result: ",(0,i.kt)("inlineCode",{parentName:"li"},"JvmTestEnvironmentResult"))),(0,i.kt)("h4",{id:"jvmtestenvironmentparams"},"JvmTestEnvironmentParams"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export interface JvmTestEnvironmentParams {\n  targets: BuildTargetIdentifier[];\n\n  originId?: Identifier;\n}\n")),(0,i.kt)("h4",{id:"jvmtestenvironmentresult"},"JvmTestEnvironmentResult"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export interface JvmTestEnvironmentResult {\n  items: JvmEnvironmentItem[];\n}\n")),(0,i.kt)("h4",{id:"jvmenvironmentitem"},"JvmEnvironmentItem"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export interface JvmEnvironmentItem {\n  target: BuildTargetIdentifier;\n\n  classpath: string[];\n\n  jvmOptions: string[];\n\n  workingDirectory: string;\n\n  environmentVariables: Map<string, string>;\n\n  mainClasses?: JvmMainClass[];\n}\n")),(0,i.kt)("h4",{id:"jvmmainclass"},"JvmMainClass"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export interface JvmMainClass {\n  className: string;\n\n  arguments: string[];\n}\n")),(0,i.kt)("h3",{id:"jvmrunenvironment-request"},"JvmRunEnvironment: request"),(0,i.kt)("p",null,"Similar to ",(0,i.kt)("inlineCode",{parentName:"p"},"buildTarget/jvmTestEnvironment"),", but returns environment\nthat should be used for regular exection of main classes, not for testing"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"method: ",(0,i.kt)("inlineCode",{parentName:"li"},"buildTarget/jvmRunEnvironment")),(0,i.kt)("li",{parentName:"ul"},"params: ",(0,i.kt)("inlineCode",{parentName:"li"},"JvmRunEnvironmentParams")),(0,i.kt)("li",{parentName:"ul"},"result: ",(0,i.kt)("inlineCode",{parentName:"li"},"JvmRunEnvironmentResult"))),(0,i.kt)("h4",{id:"jvmrunenvironmentparams"},"JvmRunEnvironmentParams"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export interface JvmRunEnvironmentParams {\n  targets: BuildTargetIdentifier[];\n\n  originId?: Identifier;\n}\n")),(0,i.kt)("h4",{id:"jvmrunenvironmentresult"},"JvmRunEnvironmentResult"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export interface JvmRunEnvironmentResult {\n  items: JvmEnvironmentItem[];\n}\n")))}c.isMDXComponent=!0}}]);