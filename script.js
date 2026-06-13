(function(){
  const el = document.getElementById('stars');
  if(!el) return;
  for(let i=0;i<180;i++){
    const s = document.createElement('div');
    s.className='star';
    const sz = Math.random()*2.4+0.5;
    s.style.cssText=`width:${sz}px;height:${sz}px;left:${Math.random()*100}%;top:${Math.random()*100}%;--d:${(Math.random()*4+2).toFixed(1)}s;animation-delay:${(Math.random()*5).toFixed(1)}s;`;
    el.appendChild(s);
  }
})();

function toggleCat(header, id){
  const menu = document.getElementById(id);
  if(!menu) return;
  const isOpen = !menu.classList.contains('hidden');
  document.querySelectorAll('.cat-submenu').forEach(m=>m.classList.add('hidden'));
  document.querySelectorAll('.cat-header').forEach(h=>{h.classList.remove('open');h.setAttribute('aria-expanded','false');});
  if(!isOpen){
    menu.classList.remove('hidden');
    header.classList.add('open');
    header.setAttribute('aria-expanded','true');
  }
}

(function(){
  const obs = new IntersectionObserver(entries=>{
    entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('visible'); });
  },{threshold:0.12,rootMargin:'0px 0px -50px 0px'});
  document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
})();

window.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('.hero .reveal').forEach((el,i)=>{
    el.style.transitionDelay=i*110+100+'ms';
    el.classList.add('visible');
  });
});

(function(){
  const list = document.getElementById('skillList');
  if(!list) return;
  const obs = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.querySelectorAll('.skill-fill').forEach((bar,i)=>{
          setTimeout(()=>{ bar.style.width=bar.dataset.w+'%'; },i*110);
        });
        obs.unobserve(e.target);
      }
    });
  },{threshold:0.3});
  obs.observe(list);
})();

const ham = document.getElementById('ham');
const mob = document.getElementById('mobMenu');
if(ham&&mob){
  ham.addEventListener('click',()=>{
    const open=mob.classList.toggle('open');
    mob.setAttribute('aria-hidden',!open);
  });
  document.querySelectorAll('.mobile-link').forEach(l=>{
    l.addEventListener('click',()=>{mob.classList.remove('open');mob.setAttribute('aria-hidden','true');});
  });
}

window.addEventListener('scroll',()=>{
  document.querySelector('nav').style.boxShadow=window.scrollY>60?'0 4px 24px rgba(0,0,0,0.6)':'none';
},{passive:true});

const secs = document.querySelectorAll('section[id],footer[id]');
const navAs = document.querySelectorAll('.nav-links a');
const secObs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      const id=e.target.id;
      navAs.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+id));
    }
  });
},{rootMargin:'-35% 0px -55% 0px'});
secs.forEach(s=>secObs.observe(s));
function abrirModal(){
  const m = document.getElementById('modalLogistica');
  m.style.display='flex';
  document.body.style.overflow='hidden';
}
function fecharModal(){
  const m = document.getElementById('modalLogistica');
  m.style.display='none';
  document.body.style.overflow='auto';
}
document.getElementById('modalLogistica').addEventListener('click',function(e){
    if(e.target===this) fecharModal('modalLogistica');
});
document.getElementById('modalClinica').addEventListener('click',function(e){
    if(e.target===this) fecharModal('modalClinica');
});
document.getElementById('modalEcommerce').addEventListener('click',function(e){
    if(e.target===this) fecharModal('modalEcommerce');
});

function abrirModalClinica(){
  const m = document.getElementById('modalClinica');
  m.style.display='flex';
  document.body.style.overflow='hidden';
}
function fecharModalClinica(){
  const m = document.getElementById('modalClinica');
  m.style.display='none';
  document.body.style.overflow='auto';
}
document.getElementById('modalClinica').addEventListener('click',function(e){
  if(e.target===this) fecharModalClinica();
});
function abrirModalEcommerce(){
  const m = document.getElementById('modalEcommerce');
  m.style.display='flex';
  document.body.style.overflow='hidden';
}
function fecharModalEcommerce(){
  const m = document.getElementById('modalEcommerce');
  m.style.display='none';
  document.body.style.overflow='auto';
}
document.getElementById('modalEcommerce').addEventListener('click',function(e){
  if(e.target===this) fecharModalEcommerce();
});
function abrirModalNexus(){
  const m = document.getElementById('modalNexus');
  m.style.display='flex';
  document.body.style.overflow='hidden';
}
function fecharModalNexus(){
  const m = document.getElementById('modalNexus');
  m.style.display='none';
  document.body.style.overflow='auto';
}
document.getElementById('modalNexus').addEventListener('click',function(e){
  if(e.target===this) fecharModalNexus();
});
function createFallingStar() {

    const star = document.createElement("div");

    star.classList.add("star-fall");

    const symbols = ["✦","✧","⋆"];

    star.innerHTML =
        symbols[Math.floor(Math.random() * symbols.length)];

    star.style.left =
        Math.random() * window.innerWidth + "px";

    star.style.fontSize =
        (Math.random() * 12 + 8) + "px";

    star.style.animationDuration =
        (Math.random() * 5 + 3) + "s";

    document.body.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 8000);
}

setInterval(createFallingStar, 300);
function createFallingStar() {

    const star = document.createElement("div");

    star.classList.add("star-fall");

    const symbols = ["✦","✧","⋆"];

    star.innerHTML =
        symbols[Math.floor(Math.random() * symbols.length)];

    star.style.left =
        Math.random() * window.innerWidth + "px";

    star.style.fontSize =
        (Math.random() * 12 + 8) + "px";

    star.style.animationDuration =
        (Math.random() * 5 + 3) + "s";

    document.body.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 8000);
}

setInterval(createFallingStar, 300);
