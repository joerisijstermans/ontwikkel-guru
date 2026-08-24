import"./modulepreload-polyfill-B5Qt9EMX.js";import{i as d,a as s,b as r,o as c}from"./shared-2gF1pzVn.js";const o=[{title:"Brand Story GreenBite",brand:"GreenBite",url:"https://video.wixstatic.com/video/6c17f4_ce7d9d81dc674bf384f5258ae87f3c58/720p/mp4/file.mp4",poster:"https://static.wixstatic.com/media/6c17f4_ce7d9d81dc674bf384f5258ae87f3c58f001.jpg",demo:!0,aspect:"16:9"},{title:"Sales pitch — Joeri",brand:"Ontwikkel Guru",url:"https://video.wixstatic.com/video/6c17f4_e01c602b707f4e869686a30305f6cd4e/1080p/mp4/file.mp4",poster:"https://static.wixstatic.com/media/6c17f4_e01c602b707f4e869686a30305f6cd4ef001.jpg",demo:!1,aspect:"16:9"},{title:"AI-workshop — Verdant Group",brand:"Verdant Group",url:"https://video.wixstatic.com/video/6c17f4_478de56aa9954d85a7210814a3b4e759/1080p/mp4/file.mp4",poster:"https://static.wixstatic.com/media/6c17f4_478de56aa9954d85a7210814a3b4e759f001.jpg",demo:!0,aspect:"16:9"}];function p(){const t=document.getElementById("preview-grid");t&&(t.innerHTML=o.map(e=>`
    <div class="preview-card" role="button" tabindex="0" aria-label="${e.title} afspelen"
         data-url="${e.url}" data-title="${e.title}" data-aspect="${e.aspect}">
      <img src="${e.poster}" alt="${e.title}" class="preview-card-thumb" loading="lazy" />
      <div class="preview-card-play"><div class="play-btn">&#9654;</div></div>
      <div class="preview-card-footer">
        <span class="preview-card-title">${e.title}</span>
        ${e.demo?'<span class="badge badge-demo">Demo</span>':'<span class="badge badge-brand">'+e.brand+"</span>"}
      </div>
    </div>
  `).join(""),t.querySelectorAll(".preview-card").forEach(e=>{const i=()=>c(e.dataset.url,e.dataset.title,e.dataset.aspect);e.addEventListener("click",i),e.addEventListener("keydown",a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),i())})}))}document.addEventListener("DOMContentLoaded",()=>{d(),s(),r(),p()});
