(window.webpackJsonp=window.webpackJsonp||[]).push([[2,6,9],{267:function(t,e,r){"use strict";r.r(e);var n=r(16),component=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex justify-between items-center"},[e("div",{staticClass:"h-[2px] w-[200px] md:w-[720px] bg-[#d6d6d6]"}),t._v(" "),e("h2",{staticClass:"text-[#d6d6d6] text-[22px] md:text-[32px]"},[t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports},269:function(t,e,r){"use strict";var n=r(9),l=r(5),o=r(3),c=r(104),f=r(18),d=r(12),m=r(189),x=r(34),h=r(78),v=r(188),_=r(4),w=r(79).f,N=r(27).f,I=r(17).f,C=r(270),O=r(271).trim,y="Number",E=l.Number,j=E.prototype,S=l.TypeError,A=o("".slice),T=o("".charCodeAt),L=function(t){var e=v(t,"number");return"bigint"==typeof e?e:F(e)},F=function(t){var e,r,n,l,o,c,f,code,d=v(t,"number");if(h(d))throw S("Cannot convert a Symbol value to a number");if("string"==typeof d&&d.length>2)if(d=O(d),43===(e=T(d,0))||45===e){if(88===(r=T(d,2))||120===r)return NaN}else if(48===e){switch(T(d,1)){case 66:case 98:n=2,l=49;break;case 79:case 111:n=8,l=55;break;default:return+d}for(c=(o=A(d,2)).length,f=0;f<c;f++)if((code=T(o,f))<48||code>l)return NaN;return parseInt(o,n)}return+d};if(c(y,!E(" 0o1")||!E("0b1")||E("+0x1"))){for(var M,k=function(t){var e=arguments.length<1?0:E(L(t)),r=this;return x(j,r)&&_((function(){C(r)}))?m(Object(e),r,k):e},D=n?w(E):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),Y=0;D.length>Y;Y++)d(E,M=D[Y])&&!d(k,M)&&I(k,M,N(E,M));k.prototype=j,j.constructor=k,f(l,y,k,{constructor:!0})}},270:function(t,e,r){var n=r(3);t.exports=n(1..valueOf)},271:function(t,e,r){var n=r(3),l=r(24),o=r(13),c=r(272),f=n("".replace),d="["+c+"]",m=RegExp("^"+d+d+"*"),x=RegExp(d+d+"*$"),h=function(t){return function(e){var r=o(l(e));return 1&t&&(r=f(r,m,"")),2&t&&(r=f(r,x,"")),r}};t.exports={start:h(1),end:h(2),trim:h(3)}},272:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},275:function(t,e,r){"use strict";r.r(e);r(269);var n=r(1),l=Object(n.b)({__name:"Map",props:{width:Number,height:Number},setup:function(t){return{__sfc:!0,props:t}}}),o=r(16),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"mx-auto w-max"},[e("iframe",{staticClass:"hidden md:block",staticStyle:{border:"0"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d204.24561325274658!2d135.7613919354226!3d35.00846207008786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6001088556159387%3A0x933c7a3bc25e554b!2z44CSNjA0LTgxMzEg5Lqs6YO95bqc5Lqs6YO95biC5Lit5Lqs5Yy66I-x5bGL55S677yT77yWIOODl-ODqeOCtuOCs-ODqeODoA!5e0!3m2!1sja!2sjp!4v1663513176413!5m2!1sja!2sjp",width:t.width,height:t.height,allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"}}),t._v(" "),t._m(0)])}),[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"mt-[20px] w-max mx-auto text-[#d6d6d6] text-[18px] md:text-[24px] pb-[100px]"},[e("p",{staticClass:"underline"},[e("a",{attrs:{href:"https://goo.gl/maps/9bcQ9jni6Dd6F3HF7",target:"blank"}},[t._v("京都市中京区三条通東洞院東入菱屋町36\n        "),e("br",{staticClass:"block md:hidden"}),t._v("プラザコラムビル501")])])])}],!1,null,null,null);e.default=component.exports},303:function(t,e,r){"use strict";r.r(e);var n=r(16),component=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-[#000] md:min-w-[1200px] w-full"},[e("div",{staticClass:"md:w-[1200px] py-[72px] mx-auto"},[e("SectionTitle",[t._v("アクセス")]),t._v(" "),e("Map",{staticClass:"mt-[50px]",attrs:{width:1047,height:834}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SectionTitle:r(267).default,Map:r(275).default})}}]);