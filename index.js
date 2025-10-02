import{a as d,S as f,i as a}from"./assets/vendor-BNibzuFn.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const p="52575025-ab19d41e2843e5421c049623c",m="https://pixabay.com/api/";async function y(s){try{return(await d.get(m,{params:{key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}catch{throw new Error("Failed to fetch images")}}let g=new f(".gallery a");const c=document.querySelector(".gallery"),l=document.getElementById("loader");function h(s){const o=s.map(t=>`
      <li class="gallery-item">
        <a href="${t.largeImageURL}">
          <img src="${t.webformatURL}" alt="${t.tags}" loading="lazy" />
        </a>
        <div class="image-stats">
          <span>👍 ${t.likes}</span>
          <span>👁️ ${t.views}</span>
          <span>💬 ${t.comments}</span>
          <span>⬇️ ${t.downloads}</span>
        </div>
      </li>
    `).join("");c.insertAdjacentHTML("beforeend",o),g.refresh()}function L(){c.innerHTML=""}function w(){l.classList.remove("is-hidden")}function b(){l.classList.add("is-hidden")}const u=document.querySelector(".form"),v=u.querySelector('input[name="search-text"]');u.addEventListener("submit",async s=>{s.preventDefault();const o=v.value.trim();if(o===""){a.warning({title:"Warning",message:"Please enter a search term.",position:"topRight"});return}L(),w();try{const t=await y(o);t.hits.length===0?a.info({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):h(t.hits)}catch{a.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{b()}});
//# sourceMappingURL=index.js.map
