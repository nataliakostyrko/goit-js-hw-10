import"./assets/modulepreload-polyfill-3cfb730f.js";import{i as o}from"./assets/vendor-77e16229.js";const s=document.querySelector(".form");s.addEventListener("submit",m);function m(e){e.preventDefault();const t=parseInt(s.elements.delay.value),r=s.elements.state.value;n(t,r).then(i=>{o.success({title:"Success",message:`✅ Fulfilled promise in ${t}ms`})}).catch(i=>{o.error({title:"Error",message:`❌ Rejected promise in ${t}ms`})}).finally(()=>{s.reset()})}const n=(e,t)=>new Promise((r,i)=>{setTimeout(()=>{t==="fulfilled"?r(e):i(e)},e)});
//# sourceMappingURL=commonHelpers2.js.map
