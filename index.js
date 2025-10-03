import{a as d,S as f,i}from"./assets/vendor-BNibzuFn.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const g="52575025-ab19d41e2843e5421c049623c",p="https://pixabay.com/api/";async function m(s){try{return(await d.get(p,{params:{key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}catch{throw new Error("Failed to fetch images")}}let y=new f(".gallery a");const l=document.querySelector(".gallery"),n=document.querySelector(".loader");function h(s){const o=s.map(t=>`
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
    `).join("");l.insertAdjacentHTML("beforeend",o),y.refresh()}function L(){l.innerHTML=""}function w(){n&&n.classList.remove("is-hidden")}function b(){n&&n.classList.add("is-hidden")}const u=document.querySelector(".form"),S=u.querySelector('input[name="search-text"]');u.addEventListener("submit",async s=>{s.preventDefault();const o=S.value.trim();if(o===""){i.warning({title:"Warning",message:"Please enter a search term.",position:"topRight"});return}L(),w();try{const t=await m(o);t.hits.length===0?i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight",timeout:4e3,close:!0,progressBar:!0,backgroundColor:"#e74c3c",messageColor:"#fff",titleColor:"#fff",icon:"❌"}):h(t.hits)}catch{i.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{b()}});
//# sourceMappingURL=index.js.map
