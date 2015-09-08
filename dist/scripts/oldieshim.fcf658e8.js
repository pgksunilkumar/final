!function(a,b){"use strict";"function"==typeof define&&define.amd?define(b):"object"==typeof exports?module.exports=b():a.returnExports=b()}(this,function(){var a,b=Array,c=b.prototype,d=Object,e=d.prototype,f=Function.prototype,g=String,h=g.prototype,i=Number,j=i.prototype,k=c.slice,l=c.splice,m=c.push,n=c.unshift,o=c.concat,p=f.call,q=Math.max,r=Math.min,s=e.toString,t="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,u=Function.prototype.toString,v=function(a){try{return u.call(a),!0}catch(b){return!1}},w="[object Function]",x="[object GeneratorFunction]";a=function(a){if("function"!=typeof a)return!1;if(t)return v(a);var b=s.call(a);return b===w||b===x};var y,z=RegExp.prototype.exec,A=function(a){try{return z.call(a),!0}catch(b){return!1}},B="[object RegExp]";y=function(a){return"object"!=typeof a?!1:t?A(a):s.call(a)===B};var C,D=String.prototype.valueOf,E=function(a){try{return D.call(a),!0}catch(b){return!1}},F="[object String]";C=function(a){return"string"==typeof a?!0:"object"!=typeof a?!1:t?E(a):s.call(a)===F};var G=function(a){var b,c=d.defineProperty&&function(){try{var a={};d.defineProperty(a,"x",{enumerable:!1,value:a});for(var b in a)return!1;return a.x===a}catch(c){return!1}}();return b=c?function(a,b,c,e){!e&&b in a||d.defineProperty(a,b,{configurable:!0,enumerable:!1,writable:!0,value:c})}:function(a,b,c,d){!d&&b in a||(a[b]=c)},function(c,d,e){for(var f in d)a.call(d,f)&&b(c,f,d[f],e)}}(e.hasOwnProperty),H=function(a){var b=typeof a;return null===a||"object"!==b&&"function"!==b},I={ToInteger:function(a){var b=+a;return b!==b?b=0:0!==b&&b!==1/0&&b!==-(1/0)&&(b=(b>0||-1)*Math.floor(Math.abs(b))),b},ToPrimitive:function(b){var c,d,e;if(H(b))return b;if(d=b.valueOf,a(d)&&(c=d.call(b),H(c)))return c;if(e=b.toString,a(e)&&(c=e.call(b),H(c)))return c;throw new TypeError},ToObject:function(a){if(null==a)throw new TypeError("can't convert "+a+" to object");return d(a)},ToUint32:function(a){return a>>>0}},J=function(){};G(f,{bind:function(b){var c=this;if(!a(c))throw new TypeError("Function.prototype.bind called on incompatible "+c);for(var e,f=k.call(arguments,1),g=function(){if(this instanceof e){var a=c.apply(this,o.call(f,k.call(arguments)));return d(a)===a?a:this}return c.apply(b,o.call(f,k.call(arguments)))},h=q(0,c.length-f.length),i=[],j=0;h>j;j++)m.call(i,"$"+j);return e=Function("binder","return function ("+i.join(",")+"){ return binder.apply(this, arguments); }")(g),c.prototype&&(J.prototype=c.prototype,e.prototype=new J,J.prototype=null),e}});var K=p.bind(e.hasOwnProperty),L=p.bind(e.toString),M=p.bind(h.slice),N=p.bind(h.split),O=b.isArray||function(a){return"[object Array]"===L(a)},P=1!==[].unshift(0);G(c,{unshift:function(){return n.apply(this,arguments),this.length}},P),G(b,{isArray:O});var Q=d("a"),R="a"!==Q[0]||!(0 in Q),S=function(a){var b=!0,c=!0;return a&&(a.call("foo",function(a,c,d){"object"!=typeof d&&(b=!1)}),a.call([1],function(){"use strict";c="string"==typeof this},"x")),!!a&&b&&c};G(c,{forEach:function(b){var c,d=I.ToObject(this),e=R&&C(this)?N(this,""):d,f=-1,g=e.length>>>0;if(arguments.length>1&&(c=arguments[1]),!a(b))throw new TypeError("Array.prototype.forEach callback must be a function");for(;++f<g;)f in e&&("undefined"!=typeof c?b.call(c,e[f],f,d):b(e[f],f,d))}},!S(c.forEach)),G(c,{map:function(c){var d,e=I.ToObject(this),f=R&&C(this)?N(this,""):e,g=f.length>>>0,h=b(g);if(arguments.length>1&&(d=arguments[1]),!a(c))throw new TypeError("Array.prototype.map callback must be a function");for(var i=0;g>i;i++)i in f&&("undefined"!=typeof d?h[i]=c.call(d,f[i],i,e):h[i]=c(f[i],i,e));return h}},!S(c.map)),G(c,{filter:function(b){var c,d,e=I.ToObject(this),f=R&&C(this)?N(this,""):e,g=f.length>>>0,h=[];if(arguments.length>1&&(d=arguments[1]),!a(b))throw new TypeError("Array.prototype.filter callback must be a function");for(var i=0;g>i;i++)i in f&&(c=f[i],("undefined"==typeof d?b(c,i,e):b.call(d,c,i,e))&&m.call(h,c));return h}},!S(c.filter)),G(c,{every:function(b){var c,d=I.ToObject(this),e=R&&C(this)?N(this,""):d,f=e.length>>>0;if(arguments.length>1&&(c=arguments[1]),!a(b))throw new TypeError("Array.prototype.every callback must be a function");for(var g=0;f>g;g++)if(g in e&&!("undefined"==typeof c?b(e[g],g,d):b.call(c,e[g],g,d)))return!1;return!0}},!S(c.every)),G(c,{some:function(b){var c,d=I.ToObject(this),e=R&&C(this)?N(this,""):d,f=e.length>>>0;if(arguments.length>1&&(c=arguments[1]),!a(b))throw new TypeError("Array.prototype.some callback must be a function");for(var g=0;f>g;g++)if(g in e&&("undefined"==typeof c?b(e[g],g,d):b.call(c,e[g],g,d)))return!0;return!1}},!S(c.some));var T=!1;c.reduce&&(T="object"==typeof c.reduce.call("es5",function(a,b,c,d){return d})),G(c,{reduce:function(b){var c=I.ToObject(this),d=R&&C(this)?N(this,""):c,e=d.length>>>0;if(!a(b))throw new TypeError("Array.prototype.reduce callback must be a function");if(0===e&&1===arguments.length)throw new TypeError("reduce of empty array with no initial value");var f,g=0;if(arguments.length>=2)f=arguments[1];else for(;;){if(g in d){f=d[g++];break}if(++g>=e)throw new TypeError("reduce of empty array with no initial value")}for(;e>g;g++)g in d&&(f=b(f,d[g],g,c));return f}},!T);var U=!1;c.reduceRight&&(U="object"==typeof c.reduceRight.call("es5",function(a,b,c,d){return d})),G(c,{reduceRight:function(b){var c=I.ToObject(this),d=R&&C(this)?N(this,""):c,e=d.length>>>0;if(!a(b))throw new TypeError("Array.prototype.reduceRight callback must be a function");if(0===e&&1===arguments.length)throw new TypeError("reduceRight of empty array with no initial value");var f,g=e-1;if(arguments.length>=2)f=arguments[1];else for(;;){if(g in d){f=d[g--];break}if(--g<0)throw new TypeError("reduceRight of empty array with no initial value")}if(0>g)return f;do g in d&&(f=b(f,d[g],g,c));while(g--);return f}},!U);var V=c.indexOf&&-1!==[0,1].indexOf(1,2);G(c,{indexOf:function(a){var b=R&&C(this)?N(this,""):I.ToObject(this),c=b.length>>>0;if(0===c)return-1;var d=0;for(arguments.length>1&&(d=I.ToInteger(arguments[1])),d=d>=0?d:q(0,c+d);c>d;d++)if(d in b&&b[d]===a)return d;return-1}},V);var W=c.lastIndexOf&&-1!==[0,1].lastIndexOf(0,-3);G(c,{lastIndexOf:function(a){var b=R&&C(this)?N(this,""):I.ToObject(this),c=b.length>>>0;if(0===c)return-1;var d=c-1;for(arguments.length>1&&(d=r(d,I.ToInteger(arguments[1]))),d=d>=0?d:c-Math.abs(d);d>=0;d--)if(d in b&&a===b[d])return d;return-1}},W);var X=function(){var a=[1,2],b=a.splice();return 2===a.length&&O(b)&&0===b.length}();G(c,{splice:function(a,b){return 0===arguments.length?[]:l.apply(this,arguments)}},!X);var Y=function(){var a={};return c.splice.call(a,0,0,1),1===a.length}();G(c,{splice:function(a,b){if(0===arguments.length)return[];var c=arguments;return this.length=q(I.ToInteger(this.length),0),arguments.length>0&&"number"!=typeof b&&(c=k.call(arguments),c.length<2?m.call(c,this.length-a):c[1]=I.ToInteger(b)),l.apply(this,c)}},!Y);var Z=function(){var a=new b(1e5);return a[8]="x",a.splice(1,1),7===a.indexOf("x")}(),$=function(){var a=256,b=[];return b[a]="a",b.splice(a+1,0,"b"),"a"===b[a]}();G(c,{splice:function(a,b){for(var c,d=I.ToObject(this),e=[],f=I.ToUint32(d.length),h=I.ToInteger(a),i=0>h?q(f+h,0):r(h,f),j=r(q(I.ToInteger(b),0),f-i),l=0;j>l;)c=g(i+l),K(d,c)&&(e[l]=d[c]),l+=1;var m,n=k.call(arguments,2),o=n.length;if(j>o){for(l=i;f-j>l;)c=g(l+j),m=g(l+o),K(d,c)?d[m]=d[c]:delete d[m],l+=1;for(l=f;l>f-j+o;)delete d[l-1],l-=1}else if(o>j)for(l=f-j;l>i;)c=g(l+j-1),m=g(l+o-1),K(d,c)?d[m]=d[c]:delete d[m],l-=1;l=i;for(var p=0;p<n.length;++p)d[l]=n[p],l+=1;return d.length=f-j+o,e}},!Z||!$);var _=!{toString:null}.propertyIsEnumerable("toString"),aa=function(){}.propertyIsEnumerable("prototype"),ba=!K("x","0"),ca=function(a){var b=a.constructor;return b&&b.prototype===a},da={$window:!0,$console:!0,$parent:!0,$self:!0,$frames:!0,$frameElement:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0},ea=function(){if("undefined"==typeof window)return!1;for(var a in window)if(!da["$"+a]&&K(window,a)&&null!==window[a]&&"object"==typeof window[a])try{ca(window[a])}catch(b){return!0}return!1}(),fa=function(a){if("undefined"==typeof window||!ea)return ca(a);try{return ca(a)}catch(b){return!1}},ga=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],ha=ga.length,ia=function(a){return"[object Arguments]"===L(a)},ja=function(b){return null!==b&&"object"==typeof b&&"number"==typeof b.length&&b.length>=0&&!O(b)&&a(b.callee)},ka=ia(arguments)?ia:ja;G(d,{keys:function(b){var c=a(b),d=ka(b),e=null!==b&&"object"==typeof b,f=e&&C(b);if(!e&&!c&&!d)throw new TypeError("Object.keys called on a non-object");var h=[],i=aa&&c;if(f&&ba||d)for(var j=0;j<b.length;++j)m.call(h,g(j));if(!d)for(var k in b)i&&"prototype"===k||!K(b,k)||m.call(h,g(k));if(_)for(var l=fa(b),n=0;ha>n;n++){var o=ga[n];l&&"constructor"===o||!K(b,o)||m.call(h,o)}return h}});var la=d.keys&&function(){return 2===d.keys(arguments).length}(1,2),ma=d.keys&&function(){var a=d.keys(arguments);return 1!==arguments.length||1!==a.length||1!==a[0]}(1),na=d.keys;G(d,{keys:function(a){return na(ka(a)?k.call(a):a)}},!la||ma);var oa=-621987552e5,pa="-000001",qa=Date.prototype.toISOString&&-1===new Date(oa).toISOString().indexOf(pa),ra=Date.prototype.toISOString&&"1969-12-31T23:59:59.999Z"!==new Date(-1).toISOString();G(Date.prototype,{toISOString:function(){var a,b,c,d,e;if(!isFinite(this))throw new RangeError("Date.prototype.toISOString called on non-finite value.");for(d=this.getUTCFullYear(),e=this.getUTCMonth(),d+=Math.floor(e/12),e=(e%12+12)%12,a=[e+1,this.getUTCDate(),this.getUTCHours(),this.getUTCMinutes(),this.getUTCSeconds()],d=(0>d?"-":d>9999?"+":"")+M("00000"+Math.abs(d),d>=0&&9999>=d?-4:-6),b=a.length;b--;)c=a[b],10>c&&(a[b]="0"+c);return d+"-"+k.call(a,0,2).join("-")+"T"+k.call(a,2).join(":")+"."+M("000"+this.getUTCMilliseconds(),-3)+"Z"}},qa||ra);var sa=function(){try{return Date.prototype.toJSON&&null===new Date(NaN).toJSON()&&-1!==new Date(oa).toJSON().indexOf(pa)&&Date.prototype.toJSON.call({toISOString:function(){return!0}})}catch(a){return!1}}();sa||(Date.prototype.toJSON=function(b){var c=d(this),e=I.ToPrimitive(c);if("number"==typeof e&&!isFinite(e))return null;var f=c.toISOString;if(!a(f))throw new TypeError("toISOString property is not callable");return f.call(c)});var ta=1e15===Date.parse("+033658-09-27T01:46:40.000Z"),ua=!isNaN(Date.parse("2012-04-04T24:00:00.500Z"))||!isNaN(Date.parse("2012-11-31T23:59:59.000Z"))||!isNaN(Date.parse("2012-12-31T23:59:60.000Z")),va=isNaN(Date.parse("2000-01-01T00:00:00.000Z"));(va||ua||!ta)&&(Date=function(a){var b=function(c,d,e,f,h,i,j){var k,l=arguments.length;return k=this instanceof a?1===l&&g(c)===c?new a(b.parse(c)):l>=7?new a(c,d,e,f,h,i,j):l>=6?new a(c,d,e,f,h,i):l>=5?new a(c,d,e,f,h):l>=4?new a(c,d,e,f):l>=3?new a(c,d,e):l>=2?new a(c,d):l>=1?new a(c):new a:a.apply(this,arguments),H(k)||G(k,{constructor:b},!0),k},c=new RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:(\\.\\d{1,}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$"),d=[0,31,59,90,120,151,181,212,243,273,304,334,365],e=function(a,b){var c=b>1?1:0;return d[b]+Math.floor((a-1969+c)/4)-Math.floor((a-1901+c)/100)+Math.floor((a-1601+c)/400)+365*(a-1970)},f=function(b){return i(new a(1970,0,1,0,0,0,b))};for(var h in a)K(a,h)&&(b[h]=a[h]);G(b,{now:a.now,UTC:a.UTC},!0),b.prototype=a.prototype,G(b.prototype,{constructor:b},!0);var j=function(b){var d=c.exec(b);if(d){var g,h=i(d[1]),j=i(d[2]||1)-1,k=i(d[3]||1)-1,l=i(d[4]||0),m=i(d[5]||0),n=i(d[6]||0),o=Math.floor(1e3*i(d[7]||0)),p=Boolean(d[4]&&!d[8]),q="-"===d[9]?1:-1,r=i(d[10]||0),s=i(d[11]||0);return(m>0||n>0||o>0?24:25)>l&&60>m&&60>n&&1e3>o&&j>-1&&12>j&&24>r&&60>s&&k>-1&&k<e(h,j+1)-e(h,j)&&(g=60*(24*(e(h,j)+k)+l+r*q),g=1e3*(60*(g+m+s*q)+n)+o,p&&(g=f(g)),g>=-864e13&&864e13>=g)?g:NaN}return a.parse.apply(this,arguments)};return G(b,{parse:j}),b}(Date)),Date.now||(Date.now=function(){return(new Date).getTime()});var wa=j.toFixed&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==0xde0b6b3a7640080.toFixed(0)),xa={base:1e7,size:6,data:[0,0,0,0,0,0],multiply:function(a,b){for(var c=-1,d=b;++c<xa.size;)d+=a*xa.data[c],xa.data[c]=d%xa.base,d=Math.floor(d/xa.base)},divide:function(a){for(var b=xa.size,c=0;--b>=0;)c+=xa.data[b],xa.data[b]=Math.floor(c/a),c=c%a*xa.base},numToString:function(){for(var a=xa.size,b="";--a>=0;)if(""!==b||0===a||0!==xa.data[a]){var c=g(xa.data[a]);""===b?b=c:b+=M("0000000",0,7-c.length)+c}return b},pow:function Ia(a,b,c){return 0===b?c:b%2===1?Ia(a,b-1,c*a):Ia(a*a,b/2,c)},log:function(a){for(var b=0,c=a;c>=4096;)b+=12,c/=4096;for(;c>=2;)b+=1,c/=2;return b}};G(j,{toFixed:function(a){var b,c,d,e,f,h,j,k;if(b=i(a),b=b!==b?0:Math.floor(b),0>b||b>20)throw new RangeError("Number.toFixed called with invalid number of decimals");if(c=i(this),c!==c)return"NaN";if(-1e21>=c||c>=1e21)return g(c);if(d="",0>c&&(d="-",c=-c),e="0",c>1e-21)if(f=xa.log(c*xa.pow(2,69,1))-69,h=0>f?c*xa.pow(2,-f,1):c/xa.pow(2,f,1),h*=4503599627370496,f=52-f,f>0){for(xa.multiply(0,h),j=b;j>=7;)xa.multiply(1e7,0),j-=7;for(xa.multiply(xa.pow(10,j,1),0),j=f-1;j>=23;)xa.divide(1<<23),j-=23;xa.divide(1<<j),xa.multiply(1,1),xa.divide(2),e=xa.numToString()}else xa.multiply(0,h),xa.multiply(1<<-f,0),e=xa.numToString()+M("0.00000000000000000000",2,2+b);return b>0?(k=e.length,e=b>=k?d+M("0.0000000000000000000",0,b-k+2)+e:d+M(e,0,k-b)+"."+M(e,k-b)):e=d+e,e}},wa),2!=="ab".split(/(?:ab)*/).length||4!==".".split(/(.?)(.?)/).length||"t"==="tesst".split(/(s)*/)[1]||4!=="test".split(/(?:)/,-1).length||"".split(/.?/).length||".".split(/()()/).length>1?!function(){var a="undefined"==typeof/()??/.exec("")[1];h.split=function(b,c){var d=this;if("undefined"==typeof b&&0===c)return[];if(!y(b))return N(this,b,c);var e,f,g,h,i=[],j=(b.ignoreCase?"i":"")+(b.multiline?"m":"")+(b.unicode?"u":"")+(b.sticky?"y":""),l=0,n=new RegExp(b.source,j+"g");d+="",a||(e=new RegExp("^"+n.source+"$(?!\\s)",j));var o="undefined"==typeof c?-1>>>0:I.ToUint32(c);for(f=n.exec(d);f&&(g=f.index+f[0].length,!(g>l&&(m.call(i,M(d,l,f.index)),!a&&f.length>1&&f[0].replace(e,function(){for(var a=1;a<arguments.length-2;a++)"undefined"==typeof arguments[a]&&(f[a]=void 0)}),f.length>1&&f.index<d.length&&m.apply(i,k.call(f,1)),h=f[0].length,l=g,i.length>=o)));)n.lastIndex===f.index&&n.lastIndex++,f=n.exec(d);return l===d.length?(h||!n.test(""))&&m.call(i,""):m.call(i,M(d,l)),i.length>o?M(i,0,o):i}}():"0".split(void 0,0).length&&(h.split=function(a,b){return"undefined"==typeof a&&0===b?[]:N(this,a,b)});var ya=h.replace,za=function(){var a=[];return"x".replace(/x(.)?/g,function(b,c){m.call(a,c)}),1===a.length&&"undefined"==typeof a[0]}();za||(h.replace=function(b,c){var d=a(c),e=y(b)&&/\)[*?]/.test(b.source);if(d&&e){var f=function(a){var d=arguments.length,e=b.lastIndex;b.lastIndex=0;var f=b.exec(a)||[];return b.lastIndex=e,m.call(f,arguments[d-2],arguments[d-1]),c.apply(this,f)};return ya.call(this,b,f)}return ya.call(this,b,c)});var Aa=h.substr,Ba="".substr&&"b"!=="0b".substr(-1);G(h,{substr:function(a,b){var c=a;return 0>a&&(c=q(this.length+a,0)),Aa.call(this,c,b)}},Ba);var Ca="	\n\f\r   ᠎             　\u2028\u2029\ufeff",Da="​",Ea="["+Ca+"]",Fa=new RegExp("^"+Ea+Ea+"*"),Ga=new RegExp(Ea+Ea+"*$"),Ha=h.trim&&(Ca.trim()||!Da.trim());G(h,{trim:function(){if("undefined"==typeof this||null===this)throw new TypeError("can't convert "+this+" to object");return g(this).replace(Fa,"").replace(Ga,"")}},Ha),(8!==parseInt(Ca+"08")||22!==parseInt(Ca+"0x16"))&&(parseInt=function(a){var b=/^0[xX]/;return function(c,d){var e=g(c).trim(),f=i(d)||(b.test(e)?16:10);return a(e,f)}}(parseInt))});