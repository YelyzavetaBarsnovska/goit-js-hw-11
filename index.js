import{a as d,S as f,i as a}from"./assets/vendor-BNibzuFn.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const g="52575025-ab19d41e2843e5421c049623c",p="https://pixabay.com/api/";async function m(s){try{return(await d.get(p,{params:{key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}catch{throw new Error("Failed to fetch images")}}let y=new f(".gallery a");const c=document.querySelector(".gallery"),l=document.getElementById("loader");function h(s){const o=s.map(t=>`
      <li class="gallery-item">
        <a href="${t.largeImageURL}">
          <img src="${t.webformatURL}" alt="${t.tags}" loading="lazy" />
        </a>
        <div class="image-stats">
          <span>Likes <strong>${t.likes}</strong></span>
          <span>Views <strong>${t.views}</strong></span>
          <span>Comments <strong>${t.comments}</strong></span>
          <span>Downloads <strong>${t.downloads}</strong></span>
        </div>
      </li>
    `).join("");c.insertAdjacentHTML("beforeend",o),y.refresh()}function L(){c.innerHTML=""}function w(){l.classList.remove("is-hidden")}function b(){l.classList.add("is-hidden")}const u=document.querySelector(".form"),v=u.querySelector('input[name="search-text"]');u.addEventListener("submit",async s=>{s.preventDefault();const o=v.value.trim();if(o===""){a.warning({title:"Warning",message:"Please enter a search term.",position:"topRight"});return}L(),w();try{const t=await m(o);t.hits.length===0?a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight",timeout:4e3,close:!0,progressBar:!0,backgroundColor:"#e74c3c",messageColor:"#fff",titleColor:"#fff",icon:"❌"}):h(t.hits)}catch{a.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{b()}});
//# sourceMappingURL=index.js.map
