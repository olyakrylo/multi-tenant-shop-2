(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{37:function(e){e.exports=JSON.parse('{"language":"\u0420\u0443\u0441\u0441\u043a\u0438\u0439","cart":"\u041a\u043e\u0440\u0437\u0438\u043d\u0430","sum":"\u0418\u0442\u043e\u0433\u043e","add_product":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c","add":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c","cancel":"\u041e\u0442\u043c\u0435\u043d\u0430","search":"\u041f\u043e\u0438\u0441\u043a","found":"\u041d\u0430\u0439\u0434\u0435\u043d\u043e","auth":{"log_in":"\u0412\u043e\u0439\u0442\u0438","login":"\u041b\u043e\u0433\u0438\u043d","password":"\u041f\u0430\u0440\u043e\u043b\u044c","admin":"\u0410\u0434\u043c\u0438\u043d","log_out":"\u0412\u044b\u0439\u0442\u0438"},"error":{"base":"\u041e\u0439, \u043e\u0448\u0438\u0431\u043a\u0430!","fields":"\u0412\u0441\u0435 \u043f\u043e\u043b\u044f \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u044b!","price":"\u0426\u0435\u043d\u0430 \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0447\u0438\u0441\u043b\u043e\u043c!","login":"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c"},"product":{"save":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c","name":"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435","price":"\u0426\u0435\u043d\u0430","available":"\u0412 \u043d\u0430\u043b\u0438\u0447\u0438\u0438","not_available":"\u041d\u0435\u0442 \u0432 \u043d\u0430\u043b\u0438\u0447\u0438\u0438"},"sort":{"by":"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u043e","recency":"\u043d\u043e\u0432\u0438\u0437\u043d\u0435","name":"\u0438\u043c\u0435\u043d\u0438","price":"\u0446\u0435\u043d\u0435"}}')},38:function(e){e.exports=JSON.parse('{"language":"English","cart":"Shopping cart","sum":"Summary","add_product":"Add product","add":"Add","cancel":"Cancel","search":"Search","found":"Found","auth":{"log_in":"Log in","login":"Login","password":"Password","admin":"Admin","log_out":"Log out"},"error":{"base":"Oops, an error was occurred!","fields":"All fields must be filled!","price":"Price should be numeric!","login":"Wrong login or password"},"product":{"save":"Save","name":"Name","price":"Price","available":"Available","not_available":"Not available"},"sort":{"by":"Sort by","recency":"recency","name":"name","price":"price"}}')},45:function(e,t,r){},46:function(e,t,r){},47:function(e,t,r){},48:function(e,t,r){},59:function(e,t,r){},60:function(e,t,r){},62:function(e,t,r){},63:function(e,t,r){},64:function(e,t,r){},65:function(e,t,r){},66:function(e,t,r){},67:function(e,t,r){},70:function(e,t,r){},71:function(e,t,r){},72:function(e,t,r){},73:function(e,t,r){},74:function(e,t,r){},75:function(e,t,r){"use strict";r.r(t);var a=r(0),c=r(1),n=r.n(c),s=r(31),i=r.n(s),u=(r(45),r(20)),o=r(25),l=r(4),d=(r(46),r(32)),j=r.n(d),b=r(76),p=(r(47),r(48),r(8)),m=r(13);function _(e){var t=e.inputEmitter,r=Object(b.a)().t;return Object(a.jsxs)("div",{className:"search",children:[Object(a.jsxs)("span",{className:"search__title",children:[Object(a.jsx)(p.a,{icon:m.b}),"\xa0\xa0",r("search")]}),Object(a.jsx)("input",{className:"search__field",onChange:function(e){return t(e.target.value)}})]})}r(59);function f(e){var t=e.item_name,r=e.price,c=e.id,n=e.picture,s=e.is_available,i=e.addToCart,u=Object(b.a)().t;return Object(a.jsxs)("div",{className:"card",children:[Object(a.jsxs)("div",{className:"card__content",children:[Object(a.jsx)("img",{src:n,className:"card__image",alt:""}),Object(a.jsx)("div",{className:"card__name",children:t}),Object(a.jsxs)("div",{className:"card__price",children:[r," \u20bd"]}),!s&&Object(a.jsx)("div",{className:"card__availability",children:u("product.not_available")})]}),s&&Object(a.jsx)("div",{className:"card__add",children:Object(a.jsx)(p.a,{onClick:function(){return i(c)},className:"card__cart",icon:m.a})})]})}function O(e){var t=e.cart,r=e.setCart,n=e.cartCount,s=e.setCartCount,i=e.products,u=Object(b.a)().t,o=Object(c.useState)(""),d=Object(l.a)(o,2),p=d[0],m=d[1],O=Object(c.useState)("price"),h=Object(l.a)(O,2),v=h[0],x=h[1];function N(e){var a=e.toString();t[a]=t[a]?t[a]+1:1,document.cookie="cart=".concat(JSON.stringify(t)),r(t),s(++n)}var g=i.filter((function(e){return e.item_name.toLowerCase().includes(p)})).sort({price:function(e,t){return e.price-t.price},recency:function(e,t){return t.id-e.id},name:function(e,t){return e.item_name>t.item_name?1:e.item_name<t.item_name?-1:0}}[v]).map((function(e,t){var r=e.item_name,c=e.price,n=e.picture,s=e.is_available,i=e.id;return Object(a.jsx)(f,{id:i,item_name:r,price:c,picture:n,is_available:s,addToCart:N},t)}));return Object(a.jsxs)("div",{className:"main",children:[Object(a.jsx)(_,{inputEmitter:function(e){var t=e.trim().toLowerCase();m(t)}}),Object(a.jsxs)("div",{className:"content__sort",children:[Object(a.jsxs)("span",{children:[u("sort.by")," \xa0"]}),Object(a.jsxs)("select",{onChange:function(e){var t=e.nativeEvent.target.value;x(t)},className:"content__sort-select",children:[Object(a.jsx)("option",{value:"price",children:u("sort.price")}),Object(a.jsx)("option",{value:"recency",children:u("sort.recency")}),Object(a.jsx)("option",{value:"name",children:u("sort.name")})]})]}),Object(a.jsx)(j.a,{columnClassName:"results__col",className:"results",breakpointCols:{default:4,1500:3,700:2,500:1},children:g})]})}r(60);var h=r(3),v=r.n(h),x=r(7),N=(r(62),r(63),r(15));r(64);function g(e){var t=e.available,r=e.setAvailable,c=Object(b.a)().t;return Object(a.jsxs)("div",{className:"status",children:[Object(a.jsx)("div",{className:"status__option ".concat(t&&"status__option_selected_green"),onClick:function(){return r(!0)},children:c("product.available")}),Object(a.jsx)("div",{className:"status__option ".concat(!t&&"status__option_selected_red"),onClick:function(){return r(!1)},children:c("product.not_available")})]})}r(65);function k(e){var t=e.initialSrc,r=e.setImage,n=Object(c.useRef)(null);return Object(a.jsxs)("div",{className:"image-input",children:[Object(a.jsx)("img",{ref:n,src:t,className:"image-input__image",alt:""}),Object(a.jsx)("input",{type:"file",className:"image-input__input",onInput:function(e){try{var t=new FileReader;t.readAsDataURL(e.nativeEvent.target.files[0]),t.onloadend=function(){var e=t.result;e.length>5e5?alert("too big image"):(r(e),n.current.src=e)}}catch(a){return}}})]})}var C="GP",y="0d7aa36bb0754d6871a209c75209f6475d3c6907",w="https://multitenant-backend.herokuapp.com/shop/",S=30,E=[{key:"en",name:"English"},{key:"ru",name:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439"}],T="Token ".concat(y);function P(){return(P=Object(x.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,V("GET","products",[]);case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",[]);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function L(e,t){return A.apply(this,arguments)}function A(){return(A=Object(x.a)(v.a.mark((function e(t,r){var a,c,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=JSON.stringify({username:t,password:r}),e.next=4,V("POST","login",{token:""},a);case 4:return c=e.sent,n=c.token,e.abrupt("return",n===y?n:"");case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return","");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function J(e){return R.apply(this,arguments)}function R(){return(R=Object(x.a)(v.a.mark((function e(t){var r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=JSON.stringify(t),e.next=4,V("POST","products/create",null,r);case 4:return e.abrupt("return",e.sent);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function I(e){return D.apply(this,arguments)}function D(){return(D=Object(x.a)(v.a.mark((function e(t){var r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=JSON.stringify(t),e.next=4,V("POST","products/update/".concat(t.id),null,r);case 4:return e.abrupt("return",e.sent);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function F(e){return B.apply(this,arguments)}function B(){return(B=Object(x.a)(v.a.mark((function e(t){var r,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,V("DELETE","products/delete/".concat(t),{result:!1});case 3:return r=e.sent,a=r.result,e.abrupt("return",a);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function V(e,t,r,a){return W.apply(this,arguments)}function W(){return(W=Object(x.a)(v.a.mark((function e(t,r,a,c){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(w).concat(r,"/"),{method:t,headers:{"Content-Type":"application/json",Authorization:T},body:c});case 2:if((n=e.sent).ok){e.next=5;break}return e.abrupt("return",Promise.resolve(a));case 5:return e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(e){var t=e.id,r=e.item_name,n=e.price,s=e.picture,i=e.is_available,u=e.products,o=e.setProducts,d=e.idx,j=e.setError,m=e.updateCart,_=Object(c.useState)(!1),f=Object(l.a)(_,2),O=f[0],h=f[1],C=Object(c.useState)(i),y=Object(l.a)(C,2),w=y[0],S=y[1],E=Object(c.useState)(s),T=Object(l.a)(E,2),P=T[0],L=T[1],A=Object(c.useState)(!1),J=Object(l.a)(A,2),R=J[0],D=J[1],B=Object(c.useRef)(null),V=Object(c.useRef)(null),W=Object(b.a)().t;function z(){return(z=Object(x.a)(v.a.mark((function e(){var r,a,c,n,s;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=B.current.value,a=parseInt(V.current.value),c=w,n=P,r&&n){e.next=7;break}return j(W("error.fields")),e.abrupt("return");case 7:if(a){e.next=10;break}return j(W("error.price")),e.abrupt("return");case 10:return D(!0),e.next=13,I({id:t,item_name:r,price:a,is_available:c,picture:n});case 13:if(s=e.sent,D(!1),s){e.next=18;break}return j(W("error.base")),e.abrupt("return");case 18:o(u.map((function(e,t){return t===d?s:e}))),m(),h(!1);case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function G(){return(G=Object(x.a)(v.a.mark((function e(){var r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return D(!0),e.next=3,F(t);case 3:r=e.sent,D(!1),r?(o(u.filter((function(e){return e.id!==t}))),m()):j(W("error.base"));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.jsxs)("div",{className:"product ".concat(O&&"product_edit"),children:[R&&Object(a.jsx)(X,{}),Object(a.jsx)("div",{className:"product__image ".concat(O&&"product__image_edit"),children:O?Object(a.jsx)(k,{initialSrc:s,setImage:L}):Object(a.jsx)("img",{className:"product__image-item",alt:"",src:s})}),Object(a.jsx)("div",{className:"product__id ".concat(O&&"product__id_edit"),children:t}),O?Object(a.jsx)("input",{className:"product__input product__name_edit",placeholder:W("product.name"),defaultValue:r,ref:B}):Object(a.jsx)("div",{className:"product__name",children:r}),O?Object(a.jsx)("input",{ref:V,className:"product__input product__price_edit",defaultValue:n,placeholder:W("product.price")}):Object(a.jsxs)("div",{className:"product__price",children:[n," \u20bd\xa0\xa0\xa0",i&&Object(a.jsx)("span",{className:"product__status_available",children:W("product.available")}),!i&&Object(a.jsx)("span",{className:"product__status_not-available",children:W("product.not_available")})]}),O&&Object(a.jsx)("div",{className:"product__av",children:Object(a.jsx)(g,{available:w,setAvailable:S})}),O&&Object(a.jsx)("button",{className:"product__save",onClick:function(){return z.apply(this,arguments)},children:W("product.save")}),Object(a.jsxs)("div",{className:"product__control",children:[Object(a.jsx)("button",{className:"product__control-btn",onClick:function(){return h(!O)},children:Object(a.jsx)(p.a,{icon:N.a})}),Object(a.jsx)("button",{className:"product__control-btn product__control-btn_red",onClick:function(){return G.apply(this,arguments)},children:Object(a.jsx)(p.a,{icon:N.d})})]})]})}var G=r(39);r(66);function K(e){var t=e.setAddOpened,r=e.products,n=e.setProducts,s=e.setError,i=e.updateCart,u=Object(c.useState)(!0),o=Object(l.a)(u,2),d=o[0],j=o[1],p=Object(c.useState)(""),m=Object(l.a)(p,2),_=m[0],f=m[1],O=Object(c.useState)(!1),h=Object(l.a)(O,2),N=h[0],C=h[1],y=Object(c.useRef)(null),w=Object(c.useRef)(null),S=Object(b.a)().t;function E(){return(E=Object(x.a)(v.a.mark((function e(){var a,c,u,o,l;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=y.current.value,c=parseInt(w.current.value),u=d,o=_,a&&o){e.next=7;break}return s(S("error.fields")),e.abrupt("return");case 7:if(c){e.next=10;break}return s(S("error.price")),e.abrupt("return");case 10:return C(!0),e.next=13,J({item_name:a,price:c,is_available:u,picture:o});case 13:if(l=e.sent,C(!1),l){e.next=18;break}return s(S("error.base")),e.abrupt("return");case 18:n([].concat(Object(G.a)(r),[l])),i(),t(!1);case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.jsxs)("div",{className:"add__form",children:[N&&Object(a.jsx)(X,{}),Object(a.jsxs)("div",{className:"form-field form__name",children:[Object(a.jsx)("span",{className:"form-field__title",children:S("product.name")}),Object(a.jsx)("input",{ref:y,className:"form-field__input"})]}),Object(a.jsxs)("div",{className:"form-field form__price",children:[Object(a.jsx)("span",{className:"form-field__title",children:S("product.price")}),Object(a.jsx)("input",{ref:w,className:"form-field__input"})]}),Object(a.jsx)(g,{available:d,setAvailable:j}),Object(a.jsxs)("div",{className:"form__buttons",children:[Object(a.jsx)("button",{className:"form__btn form__btn_solid",onClick:function(){return E.apply(this,arguments)},children:S("add")}),Object(a.jsx)("button",{className:"form__btn form__btn_transparent",onClick:function(){return t(!1)},children:S("cancel")})]}),Object(a.jsx)("div",{className:"form__image",children:Object(a.jsx)(k,{setImage:f})})]})}var M=r(5);r(67);function U(e){var t=e.setToken,r=e.setError,n=Object(c.useRef)(null),s=Object(c.useRef)(null),i=Object(c.useState)(!1),u=Object(l.a)(i,2),o=u[0],d=u[1],j=Object(M.f)(),p=Object(b.a)().t;function m(){return(m=Object(x.a)(v.a.mark((function e(){var a,c,i;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(d(!0),a=n.current.value,c=s.current.value,L){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,L(a,c);case 7:if(i=e.sent,d(!1),i){e.next=12;break}return r("Wrong login or password"),e.abrupt("return");case 12:document.cookie="token=".concat(i,"; max-age=").concat(60*S),t(i);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.jsxs)("div",{className:"auth",children:[o&&Object(a.jsx)(X,{}),Object(a.jsx)("input",{ref:n,id:"login",className:"auth__input",placeholder:p("auth.login"),autoFocus:!0}),Object(a.jsx)("input",{ref:s,id:"password",type:"password",className:"auth__input",placeholder:p("auth.password")}),Object(a.jsxs)("div",{className:"auth__buttons",children:[Object(a.jsx)("button",{className:"auth__button auth__button_solid",onClick:function(){return m.apply(this,arguments)},children:p("auth.log_in")}),Object(a.jsx)("button",{className:"auth__button auth__button_transparent",onClick:function(){return j.push("/")},children:p("cancel")})]})]})}function Z(e){var t=e.token,r=e.setToken,n=e.products,s=e.setProducts,i=e.setError,u=e.updateCart,o=Object(c.useState)(!1),d=Object(l.a)(o,2),j=d[0],p=d[1],m=Object(c.useState)(""),f=Object(l.a)(m,2),O=f[0],h=f[1],v=Object(b.a)().t;return t?Object(a.jsxs)("div",{className:"admin",children:[Object(a.jsxs)("div",{className:"admin__header ".concat(j?"admin__header_blocked":""),children:[Object(a.jsx)("button",{className:"admin__header-add",onClick:function(){return p(!0)},children:v("add_product")}),Object(a.jsx)(_,{inputEmitter:function(e){var t=e.trim().toLowerCase();h(t)}})]}),Object(a.jsx)("div",{className:"admin__add ".concat(j&&"admin__add_open"),children:Object(a.jsx)(K,{setAddOpened:p,products:n,setProducts:s,setError:i,updateCart:u})}),Object(a.jsx)("ul",{className:"admin__list ".concat(j?"admin__list_blocked":""),children:n.filter((function(e){return e.item_name.toLowerCase().includes(O)||e.id.toString().includes(O)})).map((function(e,t){return Object(a.jsx)("li",{className:"admin__product",children:Object(a.jsx)(z,{id:e.id,price:e.price,is_available:e.is_available,item_name:e.item_name,picture:e.picture,products:n,setProducts:s,idx:t,setError:i,updateCart:u})},t)}))})]}):Object(a.jsx)(U,{setToken:r,setError:i})}r(70),r(71);function q(e){var t=e.item_name,r=e.price,c=e.id,n=e.picture,s=e.amount,i=e.changeCart;return Object(a.jsxs)("div",{className:"cart-product",children:[Object(a.jsx)("img",{className:"cart-product__img",alt:"",src:n}),Object(a.jsx)("div",{className:"cart-product__name",children:t}),Object(a.jsxs)("div",{className:"cart-product__price",children:[r," \u20bd"]}),Object(a.jsxs)("div",{className:"cart-product__control",children:[Object(a.jsx)("button",{className:"cart-product__btn cart-product__btn_red",onClick:function(){return i(c,!1)},children:Object(a.jsx)(p.a,{icon:N.b})}),Object(a.jsx)("div",{className:"cart-product__amount",children:s}),Object(a.jsx)("button",{className:"cart-product__btn cart-product__btn_green",onClick:function(){return i(c,!0)},children:Object(a.jsx)(p.a,{icon:N.c})})]})]})}function H(e){var t=e.cartList,r=e.products,c=e.setCartList,n=e.cartCount,s=e.setCartCount;function i(e,r){r?t[e]+=1:1===t[e]?delete t[e]:t[e]-=1,document.cookie="cart=".concat(JSON.stringify(t),"; max-age=").concat(60*S*60),c(t),s(r?++n:--n)}var u=r.filter((function(e){return Object.keys(t).includes(e.id.toString())})),o=Object(b.a)().t;return Object(a.jsxs)("div",{className:"cart",children:[Object(a.jsxs)("p",{className:"cart__title",children:[Object(a.jsx)(p.a,{icon:m.c}),"\xa0\xa0",o("cart")]}),Object(a.jsx)("ul",{className:"cart__list",children:u.map((function(e,r){return Object(a.jsx)("li",{className:"cart__item",children:Object(a.jsx)(q,{id:e.id,item_name:e.item_name,picture:e.picture,amount:t[e.id],price:e.price,is_available:e.is_available,changeCart:i})},r)}))}),Object(a.jsxs)("p",{className:"cart__sum",children:[Object(a.jsxs)("span",{className:"cart__sum_light",children:[o("sum"),": "]}),u.reduce((function(e,a){var c=r.find((function(e){return e.id===a.id}));return c?e+c.price*t[a.id]:e}),0)," ","\u20bd"]})]})}r(72);function Q(e){var t=e.authToken,r=e.setToken,c=e.cartCount,n=Object(M.f)(),s=Object(b.a)(),i=s.i18n,u=s.t,o=E;function l(){return(l=Object(x.a)(v.a.mark((function e(t){var r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.nativeEvent.target.value,e.next=3,i.changeLanguage(r);case 3:document.cookie="i18n=".concat(r,";");case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.jsxs)("div",{className:"header",children:[Object(a.jsx)("button",{className:"header__name",onClick:function(){return n.push("/")},children:C}),Object(a.jsx)("button",{className:"header__btn ".concat(!t&&"header__btn_hidden"),onClick:function(){document.cookie="token=; max-age=-1",r("")},children:u("auth.log_out")}),Object(a.jsx)("button",{className:"header__btn",onClick:function(){return n.push("/admin")},children:u("auth.admin")}),Object(a.jsxs)("button",{className:"header__cart",onClick:function(){return n.push("/cart")},children:[c||"","\xa0\xa0",Object(a.jsx)(p.a,{icon:m.c})]}),Object(a.jsx)("select",{className:"header__lang",onChange:function(e){return l.apply(this,arguments)},defaultValue:i.language,children:o.map((function(e){return Object(a.jsx)("option",{value:e.key,children:e.name},e.key)}))})]})}r(73);function X(){return Object(a.jsx)("div",{className:"loader",children:Object(a.jsx)("div",{className:"loader__container",children:Object(a.jsx)("svg",{viewBox:"0 0 36 36",className:"loader__bar",children:Object(a.jsx)("circle",{className:"loader__segment",cx:"18",cy:"18",r:"15.91549430918954",strokeWidth:"4",fill:"transparent",strokeDasharray:"80 20"})})})})}r(74);function Y(e){var t=e.message,r=e.show,c=e.setError;return Object(a.jsx)("div",{className:"error ".concat(r&&"error_show"),children:Object(a.jsxs)("div",{className:"error__container",children:[Object(a.jsx)("div",{className:"error__message",children:t}),Object(a.jsx)("button",{className:"error__button",onClick:function(){return c("")},children:"OK"})]})})}var $=function(){var e=Object(c.useState)(function(){var e=document.cookie.match(/token=[a-zA-Z0-9]+;?/);return e?e[0].slice(6):""}()),t=Object(l.a)(e,2),r=t[0],n=t[1],s=Object(c.useState)([]),i=Object(l.a)(s,2),d=i[0],j=i[1],b=Object(c.useState)(!1),p=Object(l.a)(b,2),m=p[0],_=p[1],f=Object(c.useState)({}),h=Object(l.a)(f,2),v=h[0],x=h[1],N=Object(c.useState)(0),g=Object(l.a)(N,2),k=g[0],C=g[1],y=Object(c.useState)(""),w=Object(l.a)(y,2),S=w[0],E=w[1];function T(){var e=function(){var e=document.cookie.match(/cart=[{"0-9:, ]*}/);if(!e)return{count:0,cartData:{}};var t=JSON.parse(e[0].slice(5));return t=Object.entries(t).filter((function(e){var t=Object(l.a)(e,2),r=t[0],a=(t[1],null===d||void 0===d?void 0:d.find((function(e){return e.id.toString()===r})));return a&&a.is_available})).reduce((function(e,t){var r=Object(l.a)(t,2),a=r[0],c=r[1];return Object(o.a)(Object(o.a)({},e),{},Object(u.a)({},a,c))}),{}),{count:Object.values(t).reduce((function(e,t){return e+t}),0),cartData:t}}(),t=e.count,r=e.cartData;x(r),C(t)}return Object(c.useEffect)((function(){m||function(){return P.apply(this,arguments)}().then((function(e){j(e),T(),_(!0)}))})),Object(a.jsxs)("div",{className:"App",children:[!m&&Object(a.jsx)(X,{}),Object(a.jsx)(Q,{authToken:r,setToken:n,cartCount:k}),Object(a.jsx)(Y,{message:S,show:!!S,setError:E}),Object(a.jsx)("div",{className:"content",children:Object(a.jsxs)(M.c,{children:[Object(a.jsx)(M.a,{exact:!0,path:"/",render:function(){return Object(a.jsx)(O,{cart:v,setCart:x,cartCount:k,setCartCount:C,products:d,setProducts:j})}}),Object(a.jsx)(M.a,{exact:!0,path:"/admin",render:function(){return Object(a.jsx)(Z,{token:r,setToken:n,products:d,setProducts:j,setError:E,updateCart:T})}}),Object(a.jsx)(M.a,{exact:!0,path:"/cart",render:function(){return Object(a.jsx)(H,{cartList:v,products:d,setCartList:x,cartCount:k,setCartCount:C})}})]})})]})},ee=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,77)).then((function(t){var r=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,s=t.getTTFB;r(e),a(e),c(e),n(e),s(e)}))},te=r(16),re=r(29),ae=r(18),ce=r(37),ne={en:{translation:r(38)},ru:{translation:ce}};re.a.use(ae.e).init({resources:ne,lng:function(){var e=document.cookie.match(/i18n=(en|ru);?/);if(!e){var t=navigator.language.split(/[-_]/)[0];return"ru"===t||"en"===t?t:"en"}return e[1]}(),keySeparator:"."});re.a;i.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(te.a,{children:Object(a.jsx)($,{})})}),document.getElementById("root")),ee()}},[[75,1,2]]]);
//# sourceMappingURL=main.cfefbf35.chunk.js.map