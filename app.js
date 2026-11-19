const viewer=document.querySelector('#viewer');
const video=document.querySelector('#video');
document.querySelectorAll('[data-shot]').forEach(button=>button.addEventListener('click',()=>{
 const img=button.querySelector('img');
 document.querySelector('#full-shot').src=img.src;
 document.querySelector('#full-shot').alt=img.alt;
 document.querySelector('#shot-caption').textContent=img.alt;
 viewer.showModal();
}));
document.querySelector('#open-trailer').addEventListener('click',()=>{
 document.querySelector('#video-container').innerHTML='<iframe src="https://www.youtube-nocookie.com/embed/KcJM7cpWFyQ?autoplay=1" title="Tráiler oficial de Core Rush" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>';
 video.showModal();
});
document.querySelectorAll('dialog').forEach(dialog=>{
 dialog.querySelector('.close').addEventListener('click',()=>dialog.close());
 dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
});
video.addEventListener('close',()=>document.querySelector('#video-container').replaceChildren());
