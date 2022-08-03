"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[306,379],{3321:function(a,b,c){c.d(b,{Z:function(){return E}});var d=c(3366),e=c(7462),f=c(7294),g=c(6010),h=c(7925),i=c(4780),j=c(1796),k=c(948),l=c(1657),m=c(7739),n=c(8216),o=c(4867),p=c(1588);function q(a){return(0,o.Z)("MuiButton",a)}let r=(0,p.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);var s=r;let t=f.createContext({});var u=t,v=c(5893);let w=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],x=["root"],y=a=>{let{color:b,disableElevation:c,fullWidth:d,size:f,variant:g,classes:h}=a,j={root:["root",g,`${g}${(0,n.Z)(b)}`,`size${(0,n.Z)(f)}`,`${g}Size${(0,n.Z)(f)}`,"inherit"===b&&"colorInherit",c&&"disableElevation",d&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,n.Z)(f)}`],endIcon:["endIcon",`iconSize${(0,n.Z)(f)}`]},k=(0,i.Z)(j,q,h);return(0,e.Z)({},h,k)},z=a=>(0,e.Z)({},"small"===a.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===a.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===a.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),A=(0,k.ZP)(m.Z,{shouldForwardProp:a=>(0,k.FO)(a)||"classes"===a,name:"MuiButton",slot:"Root",overridesResolver(a,b){let{ownerState:c}=a;return[b.root,b[c.variant],b[`${c.variant}${(0,n.Z)(c.color)}`],b[`size${(0,n.Z)(c.size)}`],b[`${c.variant}Size${(0,n.Z)(c.size)}`],"inherit"===c.color&&b.colorInherit,c.disableElevation&&b.disableElevation,c.fullWidth&&b.fullWidth]}})(({theme:a,ownerState:b})=>{var c,d;return(0,e.Z)({},a.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(a.vars||a).shape.borderRadius,transition:a.transitions.create(["background-color","box-shadow","border-color","color"],{duration:a.transitions.duration.short}),"&:hover":(0,e.Z)({textDecoration:"none",backgroundColor:a.vars?`rgba(${a.vars.palette.text.primaryChannel} / ${a.vars.palette.action.hoverOpacity})`:(0,j.Fq)(a.palette.text.primary,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===b.variant&&"inherit"!==b.color&&{backgroundColor:a.vars?`rgba(${a.vars.palette[b.color].mainChannel} / ${a.vars.palette.action.hoverOpacity})`:(0,j.Fq)(a.palette[b.color].main,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===b.variant&&"inherit"!==b.color&&{border:`1px solid ${(a.vars||a).palette[b.color].main}`,backgroundColor:a.vars?`rgba(${a.vars.palette[b.color].mainChannel} / ${a.vars.palette.action.hoverOpacity})`:(0,j.Fq)(a.palette[b.color].main,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===b.variant&&{backgroundColor:(a.vars||a).palette.grey.A100,boxShadow:(a.vars||a).shadows[4],"@media (hover: none)":{boxShadow:(a.vars||a).shadows[2],backgroundColor:(a.vars||a).palette.grey[300]}},"contained"===b.variant&&"inherit"!==b.color&&{backgroundColor:(a.vars||a).palette[b.color].dark,"@media (hover: none)":{backgroundColor:(a.vars||a).palette[b.color].main}}),"&:active":(0,e.Z)({},"contained"===b.variant&&{boxShadow:(a.vars||a).shadows[8]}),[`&.${s.focusVisible}`]:(0,e.Z)({},"contained"===b.variant&&{boxShadow:(a.vars||a).shadows[6]}),[`&.${s.disabled}`]:(0,e.Z)({color:(a.vars||a).palette.action.disabled},"outlined"===b.variant&&{border:`1px solid ${(a.vars||a).palette.action.disabledBackground}`},"outlined"===b.variant&&"secondary"===b.color&&{border:`1px solid ${(a.vars||a).palette.action.disabled}`},"contained"===b.variant&&{color:(a.vars||a).palette.action.disabled,boxShadow:(a.vars||a).shadows[0],backgroundColor:(a.vars||a).palette.action.disabledBackground})},"text"===b.variant&&{padding:"6px 8px"},"text"===b.variant&&"inherit"!==b.color&&{color:(a.vars||a).palette[b.color].main},"outlined"===b.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===b.variant&&"inherit"!==b.color&&{color:(a.vars||a).palette[b.color].main,border:a.vars?`1px solid rgba(${a.vars.palette[b.color].mainChannel} / 0.5)`:`1px solid ${(0,j.Fq)(a.palette[b.color].main,.5)}`},"contained"===b.variant&&{color:a.vars?a.vars.palette.text.primary:null==(c=(d=a.palette).getContrastText)?void 0:c.call(d,a.palette.grey[300]),backgroundColor:(a.vars||a).palette.grey[300],boxShadow:(a.vars||a).shadows[2]},"contained"===b.variant&&"inherit"!==b.color&&{color:(a.vars||a).palette[b.color].contrastText,backgroundColor:(a.vars||a).palette[b.color].main},"inherit"===b.color&&{color:"inherit",borderColor:"currentColor"},"small"===b.size&&"text"===b.variant&&{padding:"4px 5px",fontSize:a.typography.pxToRem(13)},"large"===b.size&&"text"===b.variant&&{padding:"8px 11px",fontSize:a.typography.pxToRem(15)},"small"===b.size&&"outlined"===b.variant&&{padding:"3px 9px",fontSize:a.typography.pxToRem(13)},"large"===b.size&&"outlined"===b.variant&&{padding:"7px 21px",fontSize:a.typography.pxToRem(15)},"small"===b.size&&"contained"===b.variant&&{padding:"4px 10px",fontSize:a.typography.pxToRem(13)},"large"===b.size&&"contained"===b.variant&&{padding:"8px 22px",fontSize:a.typography.pxToRem(15)},b.fullWidth&&{width:"100%"})},({ownerState:a})=>a.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${s.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${s.disabled}`]:{boxShadow:"none"}}),B=(0,k.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver(a,b){let{ownerState:c}=a;return[b.startIcon,b[`iconSize${(0,n.Z)(c.size)}`]]}})(({ownerState:a})=>(0,e.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===a.size&&{marginLeft:-2},z(a))),C=(0,k.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver(a,b){let{ownerState:c}=a;return[b.endIcon,b[`iconSize${(0,n.Z)(c.size)}`]]}})(({ownerState:a})=>(0,e.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===a.size&&{marginRight:-2},z(a))),D=f.forwardRef(function(a,b){let c=f.useContext(u),i=(0,h.Z)(c,a),j=(0,l.Z)({props:i,name:"MuiButton"}),{children:k,color:m="primary",component:n="button",className:o,disabled:p=!1,disableElevation:q=!1,disableFocusRipple:r=!1,endIcon:s,focusVisibleClassName:t,fullWidth:z=!1,size:D="medium",startIcon:E,type:F,variant:G="text"}=j,H=(0,d.Z)(j,w),I=(0,e.Z)({},j,{color:m,component:n,disabled:p,disableElevation:q,disableFocusRipple:r,fullWidth:z,size:D,type:F,variant:G}),J=y(I),{root:K}=J,L=(0,d.Z)(J,x),M=E&&(0,v.jsx)(B,{className:L.startIcon,ownerState:I,children:E}),N=s&&(0,v.jsx)(C,{className:L.endIcon,ownerState:I,children:s});return(0,v.jsxs)(A,(0,e.Z)({ownerState:I,className:(0,g.Z)(c.className,K,o),component:n,disabled:p,focusRipple:!r,focusVisibleClassName:(0,g.Z)(L.focusVisible,t),ref:b,type:F},H,{classes:L,children:[M,k,N]}))});var E=D},7167:function(a,b,c){var d=c(7294);let e=d.createContext();b.Z=e},5704:function(a,b,c){c.d(b,{Z:function(){return d}});function d({props:a,states:b,muiFormControl:c}){return b.reduce((b,d)=>(b[d]=a[d],c&& void 0===a[d]&&(b[d]=c[d]),b),{})}},4423:function(a,b,c){c.d(b,{Z:function(){return f}});var d=c(7294),e=c(7167);function f(){return d.useContext(e.Z)}},2050:function(a,b,c){c.d(b,{e:function(){return p}});var d=c(6042),e=c(9534),f=c(5893),g=c(6447),h=c(2280),i=c(8895),j=c(5861),k=c(2797),l=c(3508),m=c(1758),n=c(5675),o=c.n(n),p=function(a){var b=a.skill;return(0,f.jsx)(g.Z,{spacing:2,children:b.mentalRepresentations.map(function(a,b){return(0,f.jsxs)(h.Z,{children:[(0,f.jsx)(i.Z,{expandIcon:(0,f.jsx)(l.Z,{}),children:(0,f.jsx)(j.Z,{children:a.title})}),(0,f.jsx)(k.Z,{children:(0,f.jsx)(m.D,{components:{img:function(a){a.node;var b=(0,e.Z)(a,["node"]);return(0,f.jsx)(o(),(0,d.Z)({width:"100%",height:"100%",layout:"responsive",objectFit:"contain"},b))}},children:a.bodyMarkdown})})]},b)})})}},6089:function(a,b,c){c.r(b),c.d(b,{default:function(){return L},delimit:function(){return K}});var d=c(828),e=c(5893),f=c(6447),g=c(3917),h=c(4924),i=c(6042),j=c(9396),k=c(2494),l=c(4723),m=function(a){return a.question.acceptedAnswers.includes(a.playerAnswer)},n=(0,k.f0)({currentlyAttempting:function(a,b){var c;return{question:c=a.remainingQuestions[0],playerAnswer:""}},remainingQuestions:function(a,b){return a.remainingQuestions.slice(1)}}),o=(0,k.f0)({livesRemaining:function(a,b){return a.livesRemaining-1}}),p=(0,k.f0)({currentlyAttempting:function(a){return(0,j.Z)((0,i.Z)({},a.currentlyAttempting),{playerAnswer:""})}}),q=c(9815),r=(0,k.f0)({previouslyAttempted:function(a,b){return(0,q.Z)(a.previouslyAttempted).concat([a.currentlyAttempting,])}}),s=c(375),t=c(6242),u=c(4267),v=c(9953),w=c(109),x=function(a){var b=a.timeout,c=a.attempts,d=a.missed,g=c.filter(function(a){return m(a)}).length,h=c.length+d.length;return(0,e.jsxs)(f.Z,{spacing:2,children:[(0,e.jsxs)("p",{children:["You scored ",g," out of ",h," with ",b," ","seconds per question. That's ",(0,e.jsxs)("b",{children:[Math.round(g/h*100),"%"]}),". (You missed ",d.length," questions.)"]}),c.map(function(a,b){return(0,e.jsx)(t.Z,{variant:"outlined",children:(0,e.jsx)(u.Z,{children:(0,e.jsxs)(v.Z,{children:[(0,e.jsxs)(w.Z,{children:[b+1,". ",a.question.text]}),m(a)?(0,e.jsxs)("p",{children:["You said"," ",(0,e.jsx)(w.Z,{inline:!0,children:K(a.playerAnswer)}),".","  ","Correct! ✅"]}):(0,e.jsxs)("p",{children:["You said"," ",(0,e.jsx)(w.Z,{inline:!0,children:K(a.playerAnswer)}),"❌","  ",". The correct answer was"," ",(0,e.jsx)(w.Z,{inline:!0,children:a.question.acceptedAnswers.map(K).join(" or ")}),"."]})]},b)})},b)})]})},y=c(5584),z=c(6886),A=c(3321),B=c(5861),C=function(a){var b=a.children;return(0,e.jsx)(t.Z,{variant:"outlined",children:(0,e.jsx)(u.Z,{children:(0,e.jsx)(B.Z,{align:"center",children:(0,e.jsx)(w.Z,{dynamic:!0,children:b})})})})},D=function(a){var b=a.children;return(0,e.jsx)(t.Z,{children:(0,e.jsx)(u.Z,{children:(0,e.jsx)(B.Z,{align:"center",children:(0,e.jsx)(w.Z,{dynamic:!0,children:b})})})})},E=c(7294),F=function(a){var b=a.seconds,c=(0,E.useState)(b),d=c[0],f=c[1];return(0,E.useEffect)(function(){if(d){var a=setInterval(function(){f(d-1)},1e3);return function(){return clearInterval(a)}}},[d]),(0,e.jsxs)(B.Z,{align:"center",children:["\uD83D\uDD51 ",d]})},G=function(a){var b=a.children,c=a.timeoutSeconds,d=a.livesRemaining,g=a.onInput,h=a.onSubmit,i=a.onClear,j=(0,E.useRef)(null),k=(0,E.useState)(""),l=k[0],m=k[1];return(0,e.jsxs)(f.Z,{spacing:2,children:[(0,e.jsx)(C,{children:b}),(0,e.jsx)(D,{children:K(l)}),(0,e.jsx)("form",{onSubmit:function(a){a.preventDefault(),h()},children:(0,e.jsxs)(f.Z,{spacing:2,children:[(0,e.jsx)(y.Z,{id:"answer",inputRef:j,fullWidth:!0,value:l,onChange:function(a){g(a.target.value),m(a.target.value)},autoFocus:!0,autoComplete:"off",inputProps:{inputMode:"numeric"}}),(0,e.jsx)(w.Z,{children:(0,e.jsxs)(z.ZP,{container:!0,spacing:2,justifyContent:"center",children:[(0,e.jsx)(z.ZP,{item:!0,children:(0,e.jsx)(A.Z,{sx:{height:"100%"},variant:"outlined",onClick:function(){g(l+"pi"),m(l+"pi"),j.current.focus()},children:"`pi`"})}),(0,e.jsx)(z.ZP,{item:!0,children:(0,e.jsx)(A.Z,{sx:{height:"100%"},variant:"outlined",onClick:function(){g(l+"/"),m(l+"/"),j.current.focus()},children:"`□/□`"})}),(0,e.jsx)(z.ZP,{item:!0,children:(0,e.jsx)(A.Z,{sx:{height:"100%"},variant:"outlined",onClick:function(){g("sqrt"+l),m("sqrt"+l),j.current.focus()},children:"√"})})]})}),(0,e.jsx)(A.Z,{onClick:function(){m(""),i()},children:"Clear"}),(0,e.jsx)(F,{seconds:c}),(0,e.jsx)(A.Z,{type:"submit",variant:"contained",fullWidth:!0,children:"Submit"}),(0,e.jsxs)(B.Z,{align:"center",children:["Lives remaining: ",(0,e.jsx)("b",{children:d})]})]})})]})},H=c(1737),I=function(a){var b=a.children,c=a.attempt,d=a.livesRemaining,g=a.onContinue;return(0,e.jsxs)(f.Z,{spacing:2,alignContent:"center",children:[(0,e.jsx)(C,{children:c.question.text}),(0,e.jsx)(D,{children:K(c.playerAnswer)}),m(c)?(0,e.jsx)(H.Z,{severity:"success",children:"Woohoo good job!"}):(0,e.jsx)(H.Z,{severity:"error",children:(0,e.jsx)(w.Z,{children:"The correct answer was "+K(c.question.acceptedAnswers[0])})}),b,(0,e.jsx)(A.Z,{autoFocus:!0,variant:"contained",onClick:g,children:"Continue"}),(0,e.jsxs)(B.Z,{align:"center",children:["Lives remaining: ",(0,e.jsx)("b",{children:d})]})]})},J=c(2050),K=function(a){return"`"+a+"`"},L=function(a){var b,c,q,t,u,v,w=a.skills,y=a.totalQuestions,z=a.timeoutSeconds,A=a.startingLives,B=(b=w.map(function(a){return a.questions}).flat()).map(function(a){return{value:a,sort:Math.random()}}).sort(function(a,b){return a.sort-b.sort}).map(function(a){return a.value}),C=B.slice(0,y||B.length),D=(0,d.Z)((0,g.e)((c=C,q=z,t=A,(0,l.C)({id:"game",context:{currentlyAttempting:{question:c[0],playerAnswer:""},remainingQuestions:c.slice(1),livesRemaining:t,previouslyAttempted:[]},initial:"attempting",states:{intro:{on:{CONTINUE:[{target:"attempting"}]}},attempting:{after:(0,h.Z)({},1e3*q,{target:"feedback"}),on:{INPUT:{actions:(0,k.f0)({currentlyAttempting:function(a,b){return(0,j.Z)((0,i.Z)({},a.currentlyAttempting),{playerAnswer:b.text})}})},CONTINUE:{target:"feedback"}}},feedback:{entry:(0,s.RN)([{cond:function(a){return!m(a.currentlyAttempting)},actions:["decrementLives"]},]),on:{CONTINUE:[{cond:function(a){return 0===a.livesRemaining},target:"over",actions:["archiveCurrentQuestion"]},{cond:function(a){return 0===a.remainingQuestions.length},target:"over",actions:["archiveCurrentQuestion"]},{target:"attempting",actions:["archiveCurrentQuestion","loadNextQuestion"]},]}},over:{type:"final"}}},{actions:{loadNextQuestion:n,archiveCurrentQuestion:r,decrementLives:o,clearPlayerAnswer:p}}))),2),E=D[0],F=D[1],H=(u=w,v=E.context.currentlyAttempting.question,u.find(function(a){return a.questions.map(function(a){return a.text}).includes(v.text)}));switch(E.value){case"attempting":return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(G,{timeoutSeconds:z,livesRemaining:E.context.livesRemaining,onInput:function(a){return F({type:"INPUT",text:a})},onSubmit:function(){return F({type:"CONTINUE"})},onClear:function(){return F({type:"INPUT",text:""})},children:E.context.currentlyAttempting.question.text})});case"feedback":return(0,e.jsx)(I,{attempt:E.context.currentlyAttempting,livesRemaining:E.context.livesRemaining,onContinue:function(){return F({type:"CONTINUE"})},children:H&&(0,e.jsx)(J.e,{skill:H})});case"over":return(0,e.jsxs)(f.Z,{spacing:2,children:[(0,e.jsx)("h2",{children:"Game over"}),(0,e.jsx)(x,{timeout:z,attempts:E.context.previouslyAttempted,missed:E.context.remainingQuestions})]});default:return(0,e.jsx)("p",{children:"Uh oh"})}}},943:function(a,b,c){c.d(b,{Z:function(){return d}});function d(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}},3375:function(a,b,c){c.d(b,{Z:function(){return d}});function d(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)}},9815:function(a,b,c){c.d(b,{Z:function(){return g}});var d=c(943),e=c(3375),f=c(1566);function g(a){return function(a){if(Array.isArray(a))return(0,d.Z)(a)}(a)||(0,e.Z)(a)||(0,f.Z)(a)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},1566:function(a,b,c){c.d(b,{Z:function(){return e}});var d=c(943);function e(a,b){if(a){if("string"==typeof a)return(0,d.Z)(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);if("Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c)return Array.from(c);if("Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return(0,d.Z)(a,b)}}}}])