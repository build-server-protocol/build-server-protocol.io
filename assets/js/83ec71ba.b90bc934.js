"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[966],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},250:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={id:"java",title:"Java Extension",sidebar_label:"Java"},l=void 0,c={unversionedId:"extensions/java",id:"extensions/java",title:"Java Extension",description:"The following section contains Java-specific extensions to the build server",source:"@site/target/docs/extensions/java.md",sourceDirName:"extensions",slug:"/extensions/java",permalink:"/docs/extensions/java",draft:!1,editUrl:"https://github.com/build-server-protocol/build-server-protocol/edit/master/docs/extensions/java.md",tags:[],version:"current",frontMatter:{id:"java",title:"Java Extension",sidebar_label:"Java"},sidebar:"docs",previous:{title:"cpp",permalink:"/docs/extensions/cpp"},next:{title:"JVM",permalink:"/docs/extensions/jvm"}},p={},u=[{value:"Javac Options Request",id:"javac-options-request",level:2}],d={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The following section contains Java-specific extensions to the build server\nprotocol."),(0,o.kt)("h2",{id:"javac-options-request"},"Javac Options Request"),(0,o.kt)("p",null,"The build target scalac options request is sent from the client to the server to\nquery for the list of compiler options necessary to compile in a given list of\ntargets."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"method: ",(0,o.kt)("inlineCode",{parentName:"li"},"buildTarget/javacOptions")),(0,o.kt)("li",{parentName:"ul"},"params: ",(0,o.kt)("inlineCode",{parentName:"li"},"JavacOptionsParams"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export interface JavacOptionsParams {\n  targets: BuildTargetIdentifier[];\n}\n")),(0,o.kt)("p",null,"Response:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"result: ",(0,o.kt)("inlineCode",{parentName:"li"},"JavacOptionsResult"),", defined as follows")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export interface JavacOptionsResult {\n  items: List[JavacOptionsItem];\n}\n\nexport interface JavacOptionsItem {\n  target: BuildTargetIdentifier;\n\n  /** Additional arguments to the compiler.\n   * For example, -deprecation. */\n  options: List[String];\n\n  /** The dependency classpath for this target, must be\n   * identical to what is passed as arguments to\n   * the -classpath flag in the command line interface\n   * of javac. */\n  classpath: List[Uri];\n\n  /** The output directory for classfiles produced by this target */\n  classDirectory: Uri;\n}\n")))}f.isMDXComponent=!0}}]);