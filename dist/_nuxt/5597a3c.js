(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{264:function(t,e,r){"use strict";var n=r(9),o=r(5),c=r(3),l=r(104),f=r(18),d=r(12),m=r(189),v=r(34),x=r(78),_=r(188),h=r(4),w=r(79).f,N=r(27).f,I=r(17).f,E=r(265),j=r(266).trim,y="Number",O=o.Number,A=O.prototype,C=o.TypeError,F=c("".slice),S=c("".charCodeAt),T=function(t){var e=_(t,"number");return"bigint"==typeof e?e:k(e)},k=function(t){var e,r,n,o,c,l,f,code,d=_(t,"number");if(x(d))throw C("Cannot convert a Symbol value to a number");if("string"==typeof d&&d.length>2)if(d=j(d),43===(e=S(d,0))||45===e){if(88===(r=S(d,2))||120===r)return NaN}else if(48===e){switch(S(d,1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+d}for(l=(c=F(d,2)).length,f=0;f<l;f++)if((code=S(c,f))<48||code>o)return NaN;return parseInt(c,n)}return+d};if(l(y,!O(" 0o1")||!O("0b1")||O("+0x1"))){for(var M,P=function(t){var e=arguments.length<1?0:O(T(t)),r=this;return v(A,r)&&h((function(){E(r)}))?m(Object(e),r,P):e},R=n?w(O):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),V=0;R.length>V;V++)d(O,M=R[V])&&!d(P,M)&&I(P,M,N(O,M));P.prototype=A,A.constructor=P,f(o,y,P,{constructor:!0})}},265:function(t,e,r){var n=r(3);t.exports=n(1..valueOf)},266:function(t,e,r){var n=r(3),o=r(24),c=r(13),l=r(267),f=n("".replace),d="["+l+"]",m=RegExp("^"+d+d+"*"),v=RegExp(d+d+"*$"),x=function(t){return function(e){var r=c(o(e));return 1&t&&(r=f(r,m,"")),2&t&&(r=f(r,v,"")),r}};t.exports={start:x(1),end:x(2),trim:x(3)}},267:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},268:function(t,e,r){"use strict";r.r(e);var n=r(29),o=(r(264),r(1)),c=Object(o.b)({__name:"Map",props:{width:Number,height:Number},setup:function(t){var e=t,r=Object(o.d)(),c=Object(o.d)();return Object(o.c)((function(){var t=window.innerWidth;console.log(t),console.log("typeof is "+Object(n.a)(r.value)),null==r.value&&(t<1200?(r.value=320,c.value=320):(r.value=700,c.value=700))})),{__sfc:!0,props:e,width:r,height:c}}}),l=r(16),component=Object(l.a)(c,(function(){var t=this,e=t._self._c,r=t._self._setupProxy;return e("div",{staticClass:"mx-auto w-max"},[e("iframe",{staticStyle:{border:"0"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1147.3965652109323!2d135.76107671523786!3d35.00919028949807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60010926e5b97bcb%3A0x69c80ccadc4482ab!2z6Iie!5e0!3m2!1sja!2sjp!4v1666046754614!5m2!1sja!2sjp",width:r.width,height:r.height,allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"}}),t._v(" "),t._m(0)])}),[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"mt-[20px] w-[220px] md:w-max mx-auto text-[#d6d6d6] text-[16px] md:text-[24px] pb-[100px]"},[e("p",{staticClass:"underline"},[e("a",{attrs:{href:"https://goo.gl/maps/9bcQ9jni6Dd6F3HF7",target:"blank"}},[t._v("\n        京都市中京区三条通東洞院東入菱屋町36 プラザコラムビル501\n      ")])]),t._v(" "),e("p",{staticClass:"mt-4 md:mt-6 leading-[20px] md:leading-[50px]"},[t._v("\n      烏丸線「烏丸御池」出口５番　徒歩３分\n    ")]),t._v(" "),e("p",{staticClass:"leading-[30px] md:leading-[50px]"},[t._v("\n      京都東西線「烏丸御池」出口５番　徒歩３分\n    ")]),t._v(" "),e("p",{staticClass:"leading-[30px] md:leading-[50px]"},[t._v("阪急京都線「烏丸」徒歩５分")])])}],!1,null,null,null);e.default=component.exports}}]);