webpackJsonp([2],{"/TYz":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("Uw9W"),a=s("rGQh"),n=!1;var l=function(t){n||s("4r9K")},r=s("VU/8")(i.a,a.a,!1,l,"data-v-2a183b29",null);r.options.__file="pages/index.vue",e.default=r.exports},"4r9K":function(t,e,s){var i=s("avh5");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);s("rjj0")("2bfa1941",i,!1,{sourceMap:!1})},"7Wdg":function(t,e,s){"use strict";var i=s("wIqx");e.a={props:["sdgs"],data:function(){return{sdgsCopy:this.sdgs}},methods:{toggle:function(t){t.isActive=!t.isActive,this.sdgsCopy.splice(0,0)},addActivityStatus:function(){this.sdgsCopy.forEach(function(t){t.isActive=!1})}},components:{VisProgress:i.a},beforeMount:function(){this.addActivityStatus()},mounted:function(){},watch:{}}},"9jVi":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",t._l(t.sdgsCopy,function(e,i){return s("li",{key:e.number,staticClass:"sdg-item"},[s("div",{staticClass:"sdg-link"},[s("div",{staticClass:"sdg-label"},[s("nuxt-link",{style:{color:"#"+e.color},attrs:{to:"sdg/"+e.slug}},[s("div",{staticClass:"sdg-number"},[t._v("\n            "+t._s(e.number)+"\n          ")]),s("div",{staticClass:"sdg-text",attrs:{title:e.labelLong}},[t._v("\n            "+t._s(e.labelShort)+"\n          ")])]),s("a",{staticClass:"toggle-button",style:{color:"#"+e.color},attrs:{tabindex:"0"},on:{click:function(s){t.toggle(e)},keypress:function(s){t.toggle(e)}}},[s("i",{directives:[{name:"show",rawName:"v-show",value:e.isActive,expression:"sdg.isActive"}],staticClass:"icon-angle-up"}),s("i",{directives:[{name:"show",rawName:"v-show",value:!e.isActive,expression:"!sdg.isActive"}],staticClass:"icon-angle-down"})])],1),s("div",{staticClass:"sdg-vis"},[s("VisProgress",{attrs:{sdg:e,vTickLabels:0===i,vTicks:!1}})],1)]),s("transition",{attrs:{name:"fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.isActive,expression:"sdg.isActive"}],staticClass:"card"},[s("div",{staticClass:"card-content"},[s("h6",{staticClass:"dns"},[t._v("Offizielle Indikatoren:")]),t._l(e.ind.dns,function(e){return s("div",{staticClass:"indicator-link"},[s("nuxt-link",{staticClass:"gray-indicators",attrs:{to:"indicator/"+e.slug}},[t._v("\n              "+t._s(e.label)+"\n            ")])],1)})],2),s("div",{staticClass:"card-content"},[s("h6",{staticClass:"okf"},[t._v("2030Watch Indikatoren:")]),t._l(e.ind.okf,function(e){return s("div",{staticClass:"indicator-link"},[s("nuxt-link",{staticClass:"gray-indicators",attrs:{to:"indicator/"+e.slug}},[t._v("\n              "+t._s(e.label)+"\n            ")])],1)})],2)])])],1)}))};i._withStripped=!0;var a={render:i,staticRenderFns:[]};e.a=a},AKmP:function(t,e,s){"use strict";var i=s("Dd8w"),a=s.n(i),n=s("NYxO"),l=s("sM3b"),r=s("M4fF"),d=s.n(r);e.a={data:function(){return{sorting:"number"}},computed:a()({},Object(n.mapState)(["sdgs"]),{sdgListe:function(){return d.a.sortBy(this.sdgs,this.sorting)}}),components:{ToggleElements:l.a},methods:{}}},Cv67:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("svg",{ref:"vis",class:{"sdg-vis":!0,visible:t.iVisible}},[s("line",{staticClass:"range",attrs:{x1:t.scaleX.map(0)+"px",y1:t.height/2+"px",x2:t.scaleX.map(100)+"px",y2:t.height/2+"px"}}),s("g",{staticClass:"ticks"},[t.vTickLabels?s("g",{staticClass:"tickLabels"},[s("text",{staticClass:"sdg-label sdg-label-tick",attrs:{"alignment-baseline":"hanging","dominant-baseline":"hanging","text-anchor":"start",x:t.scaleX.map(0)+"px",y:"0"},domProps:{innerHTML:t._s(t.format(0))}}),s("text",{staticClass:"sdg-label sdg-label-tick",attrs:{"alignment-baseline":"hanging","dominant-baseline":"hanging","text-anchor":"end",x:t.scaleX.map(100)+"px",y:"0"},domProps:{innerHTML:t._s(t.format(100))}})]):t._e(),t.vTicks?s("g",{staticClass:"tickLines"},t._l([0,20,40,60,80,100],function(e){return s("line",{staticClass:"tick",attrs:{"stroke-linecap":"round",x1:t.scaleX.map(e)+"px",y1:t.height/2-5+"px",x2:t.scaleX.map(e)+"px",y2:t.height/2+5+"px"}})})):t._e(),t.vSimpleTicks?s("g",{staticClass:"tickLines"},[t._l([0,100],function(e){return s("line",{staticClass:"tick",attrs:{"stroke-linecap":"round",x1:t.scaleX.map(e)+"px",y1:t.height/2-5+"px",x2:t.scaleX.map(e)+"px",y2:t.height/2+5+"px"}})}),s("text",{attrs:{"font-size":"12px",fill:"#aaa",x:"1.4%",y:"74%"}},[t._v("0%")]),s("text",{attrs:{"font-size":"12px",fill:"#aaa",x:"91%",y:"74%"}},[t._v("100%")])],2):t._e()]),s("line",{staticClass:"diff",attrs:{stroke:"#aaa",x1:t.xOKF,y1:t.height/2+"px",x2:t.xDNS,y2:t.height/2+"px"}}),s("circle",{class:{"sdg-marker":!0,"sdg-marker-total":!0,disabled:t.disabled},style:{stroke:t.cBackground},attrs:{cx:t.xOKF,cy:t.height/2+"px",r:t.markerR}}),s("circle",{class:{"sdg-marker":!0,"sdg-marker-dns":!0,disabled:t.disabled},style:{stroke:t.cBackground},attrs:{cx:t.xDNS,cy:t.height/2+"px",r:t.markerR}}),s("g",{class:{markerLabels:!0,invisible:t.vMarkerLabels}},[s("text",{ref:"okf",class:{"sdg-label":!0,"sdg-label-total":!0,invert:t.invert},style:{"font-size":t.compact?"0.9rem":"1.1rem"},attrs:{"alignment-baseline":"hanging","dominant-baseline":"hanging","text-anchor":t.labels[0].l,x:t.labels[0].x,y:"0%"},domProps:{innerHTML:t._s((t.vMarkerLabelsNames?"2030Watch: ":"")+t.format(t.okf))}}),s("text",{ref:"dns",class:{"sdg-label":!0,"sdg-label-dns":!0,invert:t.invert},style:{"font-size":t.compact?"0.8rem":"1.1rem"},attrs:{"text-anchor":t.labels[1].l,x:t.labels[1].x,y:"100%"},domProps:{innerHTML:t._s((t.vMarkerLabelsNames?"Offiziell: ":"")+t.format(t.dns))}})]),t.vLegend?s("g",[s("polyline",{staticClass:"legendLine",attrs:{points:t.xOKF+","+(t.height-t.legendLabeldnsHeight)+" "+t.xOKF+","+(t.height-t.legendLabeldnsHeight-2*t.legendLabelSteps)}}),s("polyline",{staticClass:"legendLine",attrs:{points:t.xDNS+","+(t.height-t.legendLabeldnsHeight)+" "+t.xDNS+","+(t.height-t.legendLabeldnsHeight-2*t.legendLabelSteps)}}),s("text",{ref:"okfLabelLegend",staticClass:"legendLabel okf",attrs:{"text-anchor":"middle",x:t.xOKF,y:t.height}},[t._v("2030Watch")]),s("text",{ref:"dnsLabelLegend",staticClass:"legendLabel dns",attrs:{"text-anchor":"middle",x:t.xDNS,y:t.height}},[t._v("Daten DNS")])]):t._e()])};i._withStripped=!0;var a={render:i,staticRenderFns:[]};e.a=a},MCJW:function(t,e,s){(t.exports=s("FZ+f")(!1)).push([t.i,".card[data-v-50a0c906]{padding:20.8px;padding:1.3rem;-webkit-box-flex:1;-ms-flex:1;flex:1;margin-top:16px;margin-top:1rem;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.card-content[data-v-50a0c906]{-webkit-box-flex:1;-ms-flex:1;flex:1}.indicator-link[data-v-50a0c906] :hover{color:#595959}.fade-enter-active[data-v-50a0c906]{-webkit-transition:opacity .7s;transition:opacity .7s}.fade-enter[data-v-50a0c906],.fade-leave-to[data-v-50a0c906]{opacity:0}.toggle-button[data-v-50a0c906]{font-size:22.4px;font-size:1.4rem;margin-left:12.8px;margin-left:.8rem}.sdg-item[data-v-50a0c906]{-ms-flex-wrap:wrap;flex-wrap:wrap}.sdg-vis[data-v-50a0c906]{cursor:default}.gray-indicators[data-v-50a0c906]{color:#757575}",""])},MlJ7:function(t,e,s){var i=s("MCJW");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);s("rjj0")("31f1d486",i,!1,{sourceMap:!1})},NXFs:function(t,e,s){"use strict";var i=s("fBph"),a=s("vF5G"),n=!1;var l=function(t){n||s("vXv/")},r=s("VU/8")(i.a,a.a,!1,l,"data-v-841e6cee",null);r.options.__file="components/VisLeiste.vue",e.a=r.exports},SPMN:function(t,e,s){"use strict";var i=s("AKmP"),a=s("riv5"),n=!1;var l=function(t){n||s("eDWw")},r=s("VU/8")(i.a,a.a,!1,l,null,null);r.options.__file="components/VisListe.vue",e.a=r.exports},Uw9W:function(t,e,s){"use strict";var i=s("SPMN"),a=s("NXFs");e.a={data:function(){return{sampleSDG:{values:{okf:25,dns:75}}}},components:{VisListe:i.a,VisLeiste:a.a}}},Ypf7:function(t,e,s){(t.exports=s("FZ+f")(!1)).push([t.i,".vis-liste{margin:48px 0;margin:3rem 0}.vis-liste:hover .sdg-item:not(:hover) .sdg-marker{fill:#a5a49f}.sdg-item{display:-webkit-box;display:-ms-flexbox;display:flex;margin-bottom:20.8px;margin-bottom:1.3rem}.sdg-item .sdg-header{margin-bottom:16px;margin-bottom:1rem;font-size:19.2px;font-size:1.2rem}.sdg-item .sdg-header-label,.sdg-item .sdg-header-vis{-webkit-box-flex:1;-ms-flex:1;flex:1}.sdg-item .sdg-header-label .active,.sdg-item .sdg-header-vis .active{font-weight:700;color:#023753}.sdg-item .sdg-link{color:var(--color);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;margin:0}.sdg-item .sdg-link .sdg-vis{margin:5.333px 0 32px;margin:.33333rem 0 2rem;height:50px}.sdg-item .sdg-link.disabled{cursor:default;color:#a5a49f}@media screen and (min-width:1200px){.sdg-item .sdg-link{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;height:3.52941vh;max-height:2.5rem;min-height:2.4rem}.sdg-item .sdg-link .sdg-vis{margin:0;height:100%}}.sdg-item .sdg-link .sdg-label{-webkit-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transition-duration:.1s;transition-duration:.1s}.sdg-item .sdg-link .sdg-label .sdg-number{width:16px;width:1rem;margin-right:16px;margin-right:1rem;text-align:right;color:var(--color)}.sdg-item .sdg-link .sdg-label .sdg-number,.sdg-item .sdg-link .sdg-label .sdg-text{line-height:21.6px;line-height:1.35rem;display:inline-block;font-size:19.2px;font-size:1.2rem}.sdg-item .sdg-link .sdg-label .sdg-text{font-weight:700}.sdg-item .sdg-link .sdg-direction{margin-right:16px}.sdg-item .sdg-link .sdg-vis{-webkit-box-flex:1;-ms-flex:1;flex:1}.sdg-item .sdg-link:hover:not(.disabled) .sdg-label{opacity:1!important;color:var(--color)}.sdg-item .sdg-link:hover:not(.disabled) .sdg-label-tick{opacity:0!important}@media (max-width:960px){.dns-lang{display:none}.dns-kurz{color:#f1b31c}}@media (min-width:961px){.dns-lang{color:#f1b31c}.dns-kurz{display:none}}.sdg-legend{text-align:right}.sdg-legend span{margin-left:10px}.sdg-header-sdgs{font-weight:700;color:#023753}",""])},Zrlr:function(t,e,s){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},avh5:function(t,e,s){(t.exports=s("FZ+f")(!1)).push([t.i,'.inpage-header[data-v-2a183b29]{padding:7vh 0}.padding-visleiste[data-v-2a183b29]{padding-top:0;margin-bottom:32px;margin-bottom:2rem}blockquote[data-v-2a183b29]{quotes:"\\201D" "\\201C";position:relative}blockquote p[data-v-2a183b29]{font-weight:700}blockquote[data-v-2a183b29]:before{font-size:180px;line-height:.9;left:0;content:open-quote;font-family:serif;position:absolute;font-weight:700;color:#bbdefb}.large-quote[data-v-2a183b29]{padding-left:110px}cite[data-v-2a183b29]:before{content:no-close-quote}.blockquote-wrapper[data-v-2a183b29]{max-width:50vw;margin:0 auto;position:relative}.inline-h2[data-v-2a183b29]{display:inline}.inline-h3[data-v-2a183b29]{display:inline;font-size:25.6px;font-size:1.6rem;font-weight:400}h1[data-v-2a183b29]{color:#fff}.dns[data-v-2a183b29],.okf[data-v-2a183b29]{font-weight:700}',""])},eDWw:function(t,e,s){var i=s("Ypf7");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);s("rjj0")("a22af5ac",i,!1,{sourceMap:!1})},fBph:function(t,e,s){"use strict";var i=s("Dd8w"),a=s.n(i),n=s("NYxO");e.a={props:["current"],computed:a()({},Object(n.mapState)(["sdgs"]))}},i3la:function(t,e,s){"use strict";t.exports=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"%",i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return null===t||void 0===t?"&mdash;":(0===e?parseInt(t):t.toFixed(e)).toString().replace("-","–").replace(".",",")+(i?"":"&#8239;")+s}},iAFo:function(t,e,s){"use strict";var i=s("Dd8w"),a=s.n(i),n=s("NYxO"),l=s("i3la"),r=s.n(l),d=s("kcmq");e.a={props:{sdg:{type:Object,required:!0},vLegend:{type:Boolean,required:!1},vTickLabels:{type:Boolean,default:!1},cBackground:{type:String,default:"#f9f9f9"},vMarkerLabels:{type:Boolean,default:!0},vMarkerLabelsNames:{type:Boolean,default:!1},compact:{type:Boolean,default:!0},invert:{type:Boolean,default:!1},vTicks:{type:Boolean,default:!1},vSimpleTicks:{type:Boolean,default:!1},disabled:{type:Boolean,required:!1}},data:function(){return{iVisible:!1,width:0,height:0,okfLabel:0,dnsLabel:0,markerR:8,legendLabelokfWidth:0,legendLabelokfHeight:20,legendLabeldnsWidth:0,legendLabeldnsHeight:20,legendLabelSteps:0,legendLabelDistance:3,scaleX:(new d.a).domain([0,100]).range([0,0])}},mounted:function(){this.calcSizes(),window.addEventListener("resize",this.calcSizes,!1)},methods:{format:r.a,valueInRange:function(t){return Math.max(0,Math.min(100,t))},calcSizes:function(){this.width=(this.$refs.vis.clientWidth||this.$refs.vis.parentNode.clientWidth)-this.markerR,this.scaleX.range([this.markerR,this.width]),this.height=this.$refs.vis.getBoundingClientRect().height||this.$refs.vis.parentNode.getBoundingClientRect().height,void 0!==this.$refs.okfLabelLegend&&(this.legendLabelokfWidth=this.$refs.okfLabelLegend.clientWidth,this.legendLabeldnsWidth=this.$refs.dnsLabelLegend.clientWidth,this.legendLabelSteps=(this.height/2-this.markerR/2-this.legendLabelokfHeight-2*this.legendLabelDistance)/2),this.okfWidth=this.$refs.okf.clientWidth,this.dnsWidth=this.$refs.dns.clientWidth,this.iVisible=!0}},computed:a()({},Object(n.mapState)(["steps"]),Object(n.mapGetters)(["stepsColors"]),{dns:function(){return this.sdg.values.dns},okf:function(){return this.sdg.values.okf},xDNS:function(){return this.scaleX.map(this.valueInRange(this.dns))},xOKF:function(){return this.scaleX.map(this.valueInRange(this.okf))},labels:function(){if(!this.width)return[{x:"0px",l:"start"},{x:"0px",l:"start"}];var t=this.markerR/2,e=this.xDNS,s=this.xOKF,i="start",a="end";return this.okfWidth&&this.dnsWidth?e<s?(e-=t,i="end",a="start",(s+=t)+this.okfWidth>this.width&&(s-=t,a="end"),e-this.dnsWidth<0&&(e+=t,i="start")):(s-=t,(e+=t)+this.dnsWidth>this.width&&(e-=t,i="end"),s-this.okfWidth<0&&(s+=t,a="start")):(e>this.width/2?(e-=t,i="end"):(e+=t,i="start"),s>this.width/2?(s-=t,a="end"):(s+=t,a="start")),[{x:s+"px",l:a},{x:e+"px",l:i}]}})}},kcmq:function(t,e,s){"use strict";var i=s("Zrlr"),a=s.n(i),n=s("wxAW"),l=s.n(n),r=function(){function t(){return a()(this,t),this}return l()(t,[{key:"domain",value:function(t){return this.minD=t[0],this.maxD=t[1],this}},{key:"range",value:function(t){return this.minR=t[0],this.maxR=t[1],this}},{key:"map",value:function(t){var e=this.minD,s=this.maxD,i=this.minR,a=this.maxR;if(e<=s){if(t<=e)return i;if(t>=s)return a}else{if(t>=e)return i;if(t<=s)return a}return(t-e)/(s-e)*(a-i)+i}}]),t}();e.a=r},rGQh:function(t,e,s){"use strict";var i=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-container"},[this._m(0),e("VisLeiste",{staticClass:"padding-visleiste",attrs:{current:!1}}),e("section",[e("div",{staticClass:"wrapper",attrs:{id:"keyfindings"}},[this._m(1),e("VisListe")],1)])],1)};i._withStripped=!0;var a={render:i,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"inpage-header"},[e("div",{staticClass:"wrapper"},[e("div",{staticClass:"message"},[e("h1",[this._v("Wie nachhaltig ist Deutschland?")]),e("p",{staticStyle:{"margin-bottom":"1.5rem"}},[this._v('\n          Mit der Agenda 2030 haben sich alle UN-Staaten verpflichtet, 17 Nachhaltigkeitsziele – die sogenannten "Sustainable Development Goals (SDGs)"\n          – bis zum Jahr 2030 umzusetzen. 2030Watch diskutiert anhand von Indikatoren wie ambitioniert Deutschland die SDGs umsetzt.\n        ')]),e("p"),e("div",{staticClass:"blockquote-wrapper"},[e("blockquote",{staticClass:"large-quote",attrs:{cite:"https://www.2030agenda.de/de/article/peer-review-2018"}},[e("p",{staticStyle:{"font-size":"1.3rem","margin-bottom":"1rem"}},[this._v("\n                Allerdings ist noch viel zu tun, um einen erfolgreichen deutschen Weg hin zur Nachhaltigkeit zu gestalten.\n              ")]),e("cite",[this._v("– Peer Review zur Deutschen Nachhaltigkeitsstrategie 2018")])])]),e("p")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h2",{staticClass:"inline-h2"},[this._v("\n          Ein nachhaltigeres Deutschland in 2030 - Wie nah sind wir dem Ziel?\n        ")]),e("h3",{staticClass:"inline-h3"},[e("span",{staticClass:"dns"},[this._v("Offizielle")]),this._v(" Indikatoren der Deutschen Nachhaltigkeitsstrategie\n          und "),e("span",{staticClass:"okf"},[this._v("2030Watch")]),this._v(" Indikatoren zum Handlungsbedarf für deutsche\n          Nachhaltigkeit. "),e("em",[this._v("Go Explore!")])])])}]};e.a=a},riv5:function(t,e,s){"use strict";var i=function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"vis-liste"},[this._m(0),this._m(1),e("ToggleElements",{attrs:{sdgs:this.sdgListe}})],1)};i._withStripped=!0;var a={render:i,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"sdg-item",staticStyle:{margin:"0"}},[e("div",{staticClass:"sdg-header sdg-header-label"},[e("span",{staticClass:"sdg-header-sdgs"},[this._v("Sustainable Development Goals")])]),e("div",{staticClass:"sdg-header sdg-header-vis columns"},[e("section",{staticClass:"sdg-header-sdgs"},[this._v("\n        SDG-Ziel für 2030 erreicht zu:\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"sdg-item",staticStyle:{margin:"0"}},[e("div",{staticClass:"sdg-header sdg-header-label"}),e("div",{staticClass:"sdg-header sdg-header-vis columns",staticStyle:{"font-size":"1rem"}},[e("section",{staticClass:"sdg-legend"},[e("span",{staticClass:"okf"},[this._v("2030Watch")]),e("span",{staticClass:"dns-lang"},[this._v("Offizielle Nachhaltigkeitsstrategie")]),e("span",{staticClass:"dns-kurz"},[this._v("Offiziell")])])])])}]};e.a=a},sM3b:function(t,e,s){"use strict";var i=s("7Wdg"),a=s("9jVi"),n=!1;var l=function(t){n||s("MlJ7")},r=s("VU/8")(i.a,a.a,!1,l,"data-v-50a0c906",null);r.options.__file="components/ToggleElements.vue",e.a=r.exports},uTL5:function(t,e,s){(t.exports=s("FZ+f")(!1)).push([t.i,".sdg-leiste[data-v-841e6cee]{display:-webkit-box;display:-ms-flexbox;display:flex;height:25px;list-style:none;-webkit-transition-duration:2s;transition-duration:2s}.sdg-band-item[data-v-841e6cee]{-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-transition-duration:1s;transition-duration:1s;overflow:hidden;text-align:center;height:25px;line-height:25px;font-size:12.8px;font-size:.8rem}.sdg-band-item .sdg-link[data-v-841e6cee]{color:#fff;height:25px;line-height:25px;opacity:0;-webkit-transition-duration:1.5s;transition-duration:1.5s;white-space:nowrap;display:block}.sdg-band-item .coming-soon[data-v-841e6cee]{cursor:default}.sdg-band-item .sdg-number[data-v-841e6cee]{padding-left:8px;padding-left:.5rem}.sdg-band-item.enabled[data-v-841e6cee]{color:#fff}.sdg-band-item.enabled:hover .sdg-number[data-v-841e6cee]{display:none;-webkit-transition-duration:1.5s;transition-duration:1.5s}.sdg-band-item.current[data-v-841e6cee]{-webkit-box-flex:4;-ms-flex:4;flex:4}.sdg-band-item.current .sdg-number[data-v-841e6cee]{display:none}.sdg-band-item[data-v-841e6cee]:hover{-webkit-box-flex:8;-ms-flex:8;flex:8}.sdg-band-item:hover .sdg-link[data-v-841e6cee]{opacity:1;-webkit-transition-duration:1.5s;transition-duration:1.5s}",""])},vF5G:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"sdg-leiste"},t._l(t.sdgs,function(e,i){return"coming soon"===e.textIntro?s("li",{key:i,class:{"sdg-band-item":!0,enabled:!0,current:t.current===i},style:{"background-color":"#"+e.color}},[s("span",{staticClass:"sdg-number"},[t._v(t._s(e.number))]),s("a",{staticClass:"sdg-link coming-soon"},[t._v("\n      "+t._s(e.number)+" coming soon\n    ")])]):s("li",{key:i,class:{"sdg-band-item":!0,enabled:!0,current:t.current===i},style:{"background-color":"#"+e.color}},[s("span",{staticClass:"sdg-number"},[t._v(t._s(e.number))]),s("nuxt-link",{staticClass:"sdg-link",attrs:{to:"/sdg/"+i}},[t._v("\n      SDG "+t._s(e.number)+" — "+t._s(e.labelShort)+"\n    ")])],1)}))};i._withStripped=!0;var a={render:i,staticRenderFns:[]};e.a=a},vQBO:function(t,e,s){(t.exports=s("FZ+f")(!1)).push([t.i,".sdg-vis[data-v-1f7d71e2]{width:100%;height:100%;opacity:0;-webkit-transition:opacity .2s;transition:opacity .2s}.sdg-vis.visible[data-v-1f7d71e2]{opacity:1}.sdg-vis .legendLine[data-v-1f7d71e2]{stroke:rgba(0,0,0,.2);fill:none}.sdg-vis .range[data-v-1f7d71e2]{stroke:#ebecf1;stroke-width:3px}.sdg-vis .tick[data-v-1f7d71e2]{stroke:#d3d4d9;stroke-width:1px}.sdg-vis .ticksLegendLabels[data-v-1f7d71e2]{font-size:14.4px;font-size:.9rem}.sdg-vis .legendLabel[data-v-1f7d71e2]{font-weight:700;font-size:12.8px;font-size:.8rem}.sdg-vis .legendLabel.okf[data-v-1f7d71e2]{fill:#6599ff}.sdg-vis .legendLabel.dns[data-v-1f7d71e2]{fill:#f1b31c}.sdg-vis .tickLegend[data-v-1f7d71e2]{stroke:#aaa;stroke-width:3px}.sdg-vis .diff[data-v-1f7d71e2]{stroke-width:1px}.sdg-vis .sdg-marker[data-v-1f7d71e2]{stroke-width:2px}.sdg-vis .sdg-marker.sdg-marker-total[data-v-1f7d71e2]{fill:#6599ff}.sdg-vis .sdg-marker.sdg-marker-dns[data-v-1f7d71e2]{fill:#f1b31c}.sdg-vis .sdg-marker.disabled[data-v-1f7d71e2]{fill:#a5a49f}.sdg-vis .markerLabels.invisible .sdg-label[data-v-1f7d71e2]{opacity:0}.sdg-vis .sdg-label[data-v-1f7d71e2]{-webkit-transition-duration:.2s;transition-duration:.2s}.sdg-vis .sdg-label.sdg-label-tick[data-v-1f7d71e2]{fill:#aaa;opacity:1;font-size:12.8px;font-size:.8rem}.sdg-vis .sdg-label.sdg-label-total[data-v-1f7d71e2]{fill:#6599ff}.sdg-vis .sdg-label.sdg-label-total.invert[data-v-1f7d71e2]{fill:#fff}.sdg-vis .sdg-label.sdg-label-dns[data-v-1f7d71e2]{fill:#f1b31c}.sdg-vis .sdg-label.sdg-label-dns.invert[data-v-1f7d71e2]{fill:#fff}",""])},"vXv/":function(t,e,s){var i=s("uTL5");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);s("rjj0")("1b78db40",i,!1,{sourceMap:!1})},wIqx:function(t,e,s){"use strict";var i=s("iAFo"),a=s("Cv67"),n=!1;var l=function(t){n||s("xsbC")},r=s("VU/8")(i.a,a.a,!1,l,"data-v-1f7d71e2",null);r.options.__file="components/VisProgress.vue",e.a=r.exports},wxAW:function(t,e,s){"use strict";e.__esModule=!0;var i=function(t){return t&&t.__esModule?t:{default:t}}(s("C4MV"));e.default=function(){function t(t,e){for(var s=0;s<e.length;s++){var a=e[s];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,i.default)(t,a.key,a)}}return function(e,s,i){return s&&t(e.prototype,s),i&&t(e,i),e}}()},xsbC:function(t,e,s){var i=s("vQBO");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);s("rjj0")("3be6a3ec",i,!1,{sourceMap:!1})}});