"use strict";(self["webpackChunkkbcx"]=self["webpackChunkkbcx"]||[]).push([[553],{2553:(e,t,o)=>{o.r(t),o.d(t,{default:()=>L});var n=o(9835);function a(e,t,o,a,l,s){const r=(0,n.up)("HeaderC"),i=(0,n.up)("router-view"),u=(0,n.up)("q-page-container"),c=(0,n.up)("FooterC"),d=(0,n.up)("q-layout");return(0,n.wg)(),(0,n.j4)(d,{view:"hhh lPr fff"},{default:(0,n.w5)((()=>[(0,n.Wm)(r),(0,n.Wm)(u,null,{default:(0,n.w5)((()=>[(0,n.Wm)(i)])),_:1}),(0,n.Wm)(c)])),_:1})}const l={class:"q-pt-md q-pb-md row justify-center"},s={class:"col-sm-12 col-md-8"},r=(0,n._)("img",{src:"logo.svg",height:"38",width:"38"},null,-1);function i(e,t,o,a,i,u){const c=(0,n.up)("q-avatar"),d=(0,n.up)("q-btn-toggle"),m=(0,n.up)("q-space"),p=(0,n.up)("q-btn"),h=(0,n.up)("q-toggle"),g=(0,n.up)("q-select"),b=(0,n.up)("q-toolbar"),f=(0,n.up)("q-header");return(0,n.wg)(),(0,n.j4)(f,{style:{background:"none"},"height-hint":"30.59"},{default:(0,n.w5)((()=>[(0,n._)("div",l,[(0,n._)("div",s,[(0,n.Wm)(b,{class:"text-primary"},{default:(0,n.w5)((()=>[(0,n.Wm)(c,null,{default:(0,n.w5)((()=>[r])),_:1}),(0,n.Wm)(d,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=t=>e.model=t),flat:"",stretch:"","no-caps":"","toggle-color":"primary",options:[{label:e.$t("search"),value:"search",attrs:{to:"/"}},{label:e.$t("mirrorStatus"),value:"mirrorsstatus",attrs:{to:"/status"}},{label:e.$t("aboutMe"),value:"aboutme",attrs:{href:"https://www.xiexianbin.cn/_/about/index.html",target:"_blank"}}]},null,8,["modelValue","options"]),(0,n.Wm)(m),(0,n.Wm)(p,{flat:"",round:"",dense:"","dark-percentage":"",target:"_blank",href:"https://github.com/x-mirrors/gcr.io",icon:e.mdiGithub},null,8,["icon"]),(0,n.Wm)(h,{modelValue:e.isActive,"onUpdate:modelValue":t[1]||(t[1]=t=>e.isActive=t),onClick:e.updateActive},null,8,["modelValue","onClick"]),(0,n.Wm)(g,{modelValue:e.locale,"onUpdate:modelValue":t[2]||(t[2]=t=>e.locale=t),options:e.localeOptions,label:e.$t("language"),dense:"",borderless:"","emit-value":"","map-options":"","options-dense":"",style:{"min-width":"80px"}},null,8,["modelValue","options","label"])])),_:1})])])])),_:1})}var u=o(499),c=o(3276),d=o(9481),m=function(e,t,o,n){function a(e){return e instanceof o?e:new o((function(t){t(e)}))}return new(o||(o=Promise))((function(o,l){function s(e){try{i(n.next(e))}catch(t){l(t)}}function r(e){try{i(n["throw"](e))}catch(t){l(t)}}function i(e){e.done?o(e.value):a(e.value).then(s,r)}i((n=n.apply(e,t||[])).next())}))};const p=(0,n.aZ)({name:"HeaderC",data(){return{}},methods:{updateActive(){return m(this,void 0,void 0,(function*(){this.$q.dark.mode=!this.$q.dark.mode,this.$q.dark.toggle()}))},init:function(){return m(this,void 0,void 0,(function*(){const e=(new Date).getHours();let t=!0;this.isActive=!0,(e<6||e>18)&&(this.isActive=!1,t=!1,this.$q.dark.toggle(),this.$q.dark.mode=!t,console.log(this.$q.dark.mode)),console.log(e,t)}))}},created:function(){this.init()},setup(){const{locale:e}=(0,c.QT)({useScope:"global"});return{mdiGithub:d.LcO,isActive:(0,u.iH)(!0),locale:e,localeOptions:[{value:"en-US",label:"English"},{value:"zh-CN",label:"简体中文"}]}}});var h=o(1639),g=o(6602),b=o(1663),f=o(1357),v=o(8983),q=o(136),w=o(9379),k=o(3175),_=o(666),Z=o(9984),x=o.n(Z);const y=(0,h.Z)(p,[["render",i]]),C=y;x()(p,"components",{QHeader:g.Z,QToolbar:b.Z,QAvatar:f.Z,QBtnToggle:v.Z,QSpace:q.Z,QBtn:w.Z,QToggle:k.Z,QSelect:_.Z});const Q={class:"q-pt-md q-pb-md row justify-center"},W={class:"col-11 col-md-8"},A=(0,n._)("section",{class:"q-mt-sm q-mb-sm"},[(0,n._)("p",{class:"q-mb-none"}," Copyright © 2022 xiexianbin.cn All rights reserved. "),(0,n._)("p",{class:"q-mb-none"},[(0,n.Uk)(" Auto Build and Public by "),(0,n._)("a",{href:"https://github.com/x-actions"},"x-actions")]),(0,n._)("p",null,"Email: me@xiexianbin.cn")],-1);function $(e,t,o,a,l,s){const r=(0,n.up)("q-separator"),i=(0,n.up)("q-footer");return(0,n.wg)(),(0,n.j4)(i,{class:"footer"},{default:(0,n.w5)((()=>[(0,n._)("div",Q,[(0,n._)("div",W,[(0,n.Wm)(r),A])])])),_:1})}const V=(0,n.aZ)({name:"FooterC",data(){return{}},setup(){return{}}});var H=o(1378),S=o(926);const j=(0,h.Z)(V,[["render",$]]),U=j;x()(V,"components",{QFooter:H.Z,QSeparator:S.Z});const F=(0,n.aZ)({name:"MainLayout",components:{HeaderC:C,FooterC:U}});var P=o(7605),T=o(2133);const B=(0,h.Z)(F,[["render",a]]),L=B;x()(F,"components",{QLayout:P.Z,QPageContainer:T.Z})}}]);