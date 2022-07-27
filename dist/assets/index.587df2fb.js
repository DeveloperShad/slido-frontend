var B=Object.defineProperty,H=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var $=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var T=(e,t,n)=>t in e?B(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))j.call(t,n)&&T(e,n,t[n]);if($)for(var n of $(t))G.call(t,n)&&T(e,n,t[n]);return e},v=(e,t)=>H(e,M(t));import{a as J,r as g,u as S,b as R,j as c,c as s,F as K,d as N,e as L,h as z,f as U,o as Q,L as E,R as V,g as A,i as W,k as X,l as Z,m as I,n as ee,p as te,B as ne,P as se,t as ae}from"./vendor.d842de85.js";const oe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};oe();const ie="_signin_1h9ad_3",re="_signin__title_1h9ad_27",ce="_signin__credential_cont_1h9ad_57",le="_signin__submit_1h9ad_81",_e="_signin__google_login_btn_1h9ad_101",ue="_signin__switch_btn_1h9ad_129";var w={signin:ie,signin__title:re,signin__credential_cont:ce,signin__submit:le,signin__google_login_btn:_e,signin__switch_btn:ue};const b=J.create({baseURL:"https://slido-backend.herokuapp.com"});b.interceptors.request.use(e=>{const t=JSON.parse(localStorage.getItem("profile"));return t&&(e.headers.authorization=`Bearer ${t.token}`),e});const pe=()=>b.get("/posts"),de=e=>b.post("/posts",e),me=(e,t)=>b.patch(`/posts/${e}`,t),he=e=>b.delete(`/posts/${e}`),ge=e=>b.patch(`/posts/${e}/likePost`),fe=e=>b.post("/users/signin",e),ve=e=>b.post("/users/signup",e),F="CREATE",C="UPDATE",Y="FETCH_ALL",q="DELETE",P="AUTH",ye="LOGOUT",be=(e,t)=>async n=>{try{const{data:a}=await fe(e);n({type:P,data:a}),t("/")}catch(a){console.log(a)}},Se=(e,t)=>async n=>{try{const{data:a}=await ve(e);n({type:P,data:a}),t("/")}catch(a){console.log(a)}},we=({googleSuccess:e,googleFailure:t,setIsSignIn:n,isSignIn:a})=>{const i={email:"",password:""},[o,l]=g.exports.useState(i),d=S(),u=R(),p=r=>{r.preventDefault(),d(be(o,u))},_=r=>{const{name:m,value:h}=r.target;l(v(f({},o),{[m]:h}))};return c("div",{className:w.signin,children:[s("div",{className:w.signin__title,children:s("h2",{children:"Sign In"})}),c("form",{onSubmit:p,children:[c("div",{className:w.signin__credential_cont,children:[s("input",{type:"email",name:"email",onChange:_,value:o.email,placeholder:"Enter Your Email"}),s("input",{type:"password",name:"password",onChange:_,value:o.password,placeholder:"Enter Your Password"})]}),s("div",{className:w.signin__submit,children:s("input",{type:"submit",value:"Sign In"})})]}),s("div",{className:w.signin__switch_btn,children:s("button",{onClick:()=>n(!a),children:a?"You don't have an account? Signup":"Already have an account? Login"})})]})},Ne="_signup_128sx_3",ke="_signup__title_128sx_29",Ee="_signup__name_128sx_63",xe="_signup__email_128sx_83",Le="_signup__password_128sx_99",Ce="_signup__image_file_128sx_117",Pe="_signup__submit_128sx_131",$e="_signup__google_login_btn_128sx_147",Te="_signup__switch_btn_128sx_177";var y={signup:Ne,signup__title:ke,signup__name:Ee,signup__email:xe,signup__password:Le,signup__image_file:Ce,signup__submit:Pe,signup__google_login_btn:$e,signup__switch_btn:Te};const Ae=({googleSuccess:e,googleFailure:t,setIsSignIn:n,isSignIn:a})=>{const i={first_name:"",last_name:"",email:"",password:"",confirm_password:"",selectedFile:""},[o,l]=g.exports.useState(i),d=S(),u=R(),p=r=>{r.preventDefault(),d(Se(o,u))},_=r=>{const{name:m,value:h}=r.target;l(v(f({},o),{[m]:h}))};return c("div",{className:y.signup,children:[s("div",{className:y.signup__title,children:s("h2",{children:"Sign Up"})}),c("form",{onSubmit:p,children:[c("div",{className:y.signup__name,children:[s("input",{type:"text",name:"first_name",onChange:_,value:o.first_name,placeholder:"Enter Your First Name"}),s("input",{type:"text",name:"last_name",onChange:_,value:o.last_name,placeholder:"Enter Your Last Name"})]}),s("div",{className:y.signup__email,children:s("input",{type:"email",name:"email",onChange:_,value:o.email,placeholder:"Enter Your Email"})}),c("div",{className:y.signup__password,children:[s("input",{type:"password",name:"password",onChange:_,value:o.password,placeholder:"Enter Your Password"}),s("input",{type:"password",name:"confirm_password",onChange:_,value:o.confirm_password,placeholder:"Confirm Password"})]}),s("div",{className:y.signup__image_file,children:s(K,{type:"file",multiple:!1,onDone:({base64:r})=>l(v(f({},o),{selectedFile:r}))})}),s("div",{className:y.signup__submit,children:s("input",{type:"submit",value:"Sign Up"})})]}),s("div",{className:y.signup__switch_btn,children:s("button",{onClick:()=>n(!a),children:a?"You don't have an account? Signup":"Already have an account? Login"})})]})},De="_auth_10s31_3";var Oe={auth:De};const Re=()=>{const[e,t]=g.exports.useState(!0);return s("div",{className:Oe.auth,children:e?s(we,{setIsSignIn:t,isSignIn:e}):s(Ae,{setIsSignIn:t,isSignIn:e})})},Fe="_form_1cpfm_3",Ye="_form__info_1cpfm_79";var D={form:Fe,form__info:Ye};const qe=()=>async e=>{try{const{data:t}=await pe();e({type:Y,payload:t})}catch(t){console.log(t)}},Be=e=>async t=>{try{const{data:n}=await de(e);t({type:F,payload:n})}catch(n){console.log(n)}},He=(e,t)=>async n=>{try{const{data:a}=await me(e,t);n({type:C,payload:a})}catch(a){console.log(a)}},Me=e=>async t=>{try{await he(e),t({type:q,payload:e})}catch(n){console.log(n)}},O=e=>async t=>{try{const{data:n}=await ge(e);t({type:C,payload:n})}catch(n){console.log(n)}},je=({currentId:e,setCurrentId:t})=>{var _;const n=N(r=>r.auth),a={message:"",tags:""},[i,o]=g.exports.useState(a),l=S(),d=N(r=>e?r.posts.find(m=>m._id===e):null);g.exports.useEffect(()=>{d&&o(d)},[d]);const u=r=>{let{name:m,value:h}=r.target;m=="tags"&&(h=h.split(",")),o(v(f({},i),{[m]:h}))},p=r=>{var m,h;r.preventDefault(),l(e?He(e,v(f({},i),{name:(m=n==null?void 0:n.user)==null?void 0:m.name})):Be(v(f({},i),{name:(h=n==null?void 0:n.user)==null?void 0:h.name}))),o(a),t(null)};return s(L,{children:(_=n==null?void 0:n.user)!=null&&_.name?c("div",{className:D.form,children:[c("h2",{children:[" ",e?"Updating":"Creating"," a post"]}),c("form",{onSubmit:p,children:[s("input",{type:"text",name:"tags",placeholder:"Tags put , for multiple tags",value:i.tags,onChange:u}),s("textarea",{name:"message",placeholder:"Type your question here",cols:"10",rows:"5",value:i.message,onChange:u}),s("input",{type:"submit",value:"Submit"})]})]}):s("div",{className:D.form__info,children:s("p",{children:"Please Sign In to post your question and like others questions"})})})},Ge="_container_2k103_3";var Je={container:Ge};const Ke="_post_1f02b_3",ze="_post__more_1f02b_27";var k={post:Ke,post__more:ze};const Ue=({el:e,handleUpdate:t})=>{var o,l,d,u;const n=N(p=>p.auth),a=S(),i=()=>(e.likes.find(p=>{var _,r;return p!==((_=n==null?void 0:n.user)==null?void 0:_._id)||((r=n==null?void 0:n.user)==null?void 0:r.googleId)}),s(L,{children:e.likes.find(p=>{var _,r;return p===(((_=n==null?void 0:n.user)==null?void 0:_.googleId)||((r=n==null?void 0:n.user)==null?void 0:r._id))})?c("span",{onClick:()=>a(O(e._id)),children:[s("i",{className:"fas fa-thumbs-up"})," LIKE ",e.likes.length]}):c("span",{onClick:()=>a(O(e._id)),children:[s("i",{className:"far fa-thumbs-up"})," LIKE ",e.likes.length||""]})}));return c("div",{className:k.post,children:[c("div",{className:k.post__more,children:[s("p",{children:e.name}),s("p",{children:e.tags.map(p=>`#${p} `)}),s("p",{children:z(e.createdAt).fromNow()})]}),s("p",{children:e.message}),c("div",{className:k.post__more,children:[(n==null?void 0:n.token)&&s(i,{}),(((o=n==null?void 0:n.user)==null?void 0:o.googleId)===(e==null?void 0:e.creator)||((l=n==null?void 0:n.user)==null?void 0:l._id)===(e==null?void 0:e.creator))&&c("span",{onClick:()=>a(Me(e._id)),children:[s("i",{className:"fas fa-trash"})," DELETE"]}),(((d=n==null?void 0:n.user)==null?void 0:d.googleId)===(e==null?void 0:e.creator)||((u=n==null?void 0:n.user)==null?void 0:u._id)===(e==null?void 0:e.creator))&&s("span",{className:k.post__image_right,children:s("i",{className:"fas fa-edit",onClick:()=>t(e._id)})})]})]})},Qe=({handleUpdate:e})=>{const t=N(a=>a.posts),n=S();return g.exports.useEffect(()=>{n(qe())},[]),t!=null&&t.length?s("div",{className:Je.container,children:t.map(a=>s(Ue,{el:a,handleUpdate:e},a._id))}):s("i",{className:"fas fa-spinner"})},Ve="_container_1ykqp_5";var We={container:Ve};const Xe=()=>{const[e,t]=g.exports.useState(null);function n(a){t(a)}return g.exports.useEffect(()=>{},[]),c("div",{className:We.container,children:[s(je,{currentId:e,setCurrentId:t}),s(Qe,{handleUpdate:n})]})},Ze="_navbar_1onhy_3",Ie="_navbar__login_1onhy_37",et="_navbar__logout_1onhy_91";var x={navbar:Ze,navbar__login:Ie,navbar__logout:et};const tt=()=>{var l,d;const e=N(u=>u.auth),[t,n]=g.exports.useState(e),a=S(),i=U();g.exports.useEffect(()=>{const u=t==null?void 0:t.token;u&&Q(u).exp*1e3<new Date().getTime()&&o(),n(e)},[i]);const o=()=>{a({type:"LOGOUT"})};return c("div",{className:x.navbar,children:[s(E,{to:"/",children:s("h1",{children:"Slido"})}),t!=null&&t.token?c("div",{className:x.navbar__login,children:[s("img",{src:(l=t==null?void 0:t.user)==null?void 0:l.imageUrl,alt:t.user.name[0]}),s("p",{children:(d=t==null?void 0:t.user)==null?void 0:d.name.split(" ")[0]}),s(E,{to:"/",onClick:o,children:"Logout"})]}):s("div",{className:x.navbar__logout,children:s(E,{to:"/auth",children:"Login"})})]})},nt=()=>c(L,{children:[s(tt,{}),c(V,{children:[s(A,{path:"/",element:s(Xe,{})}),s(A,{path:"/auth",element:s(Re,{})})]})]});function st(){return s("div",{className:"App",children:s(nt,{})})}const at=(e=[],t)=>{switch(t.type){case Y:return t.payload;case q:return e.filter(n=>n._id!==t.payload);case C:return e.map(n=>n._id===t.payload._id?t.payload:n);case F:return[...e,t.payload];default:return e}},ot=JSON.parse(localStorage.getItem("profile")),it=(e=ot,t)=>{switch(t.type){case P:return localStorage.setItem("profile",JSON.stringify(t==null?void 0:t.data)),v(f({},e),{token:t.data.token,user:t.data.user});case ye:return console.log("hello from logout"),localStorage.removeItem("profile"),v(f({},e),{token:null,user:null});default:return e}};var rt=W({posts:at,auth:it});const ct=X(rt,Z(I(ae)));ee.render(s(te.StrictMode,{children:s(ne,{children:s(se,{store:ct,children:s(st,{})})})}),document.getElementById("root"));
