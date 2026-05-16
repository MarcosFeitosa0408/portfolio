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
function abrirModal(id){
    const m = document.getElementById(id);
    m.style.display='flex';
    document.body.style.overflow='hidden';
}

function fecharModal(id){
    const m = document.getElementById(id);
  m.style.display='none';
    document.body.style.overflow='auto';
}

document.getElementById('modalLogistica').addEventListener('click',function(e){
   if(e.target===this) fecharModal('modalLogistica');
});
document.getElementById('modalLogistica').addEventListener('click',function(e){
  if(e.target===this) fecharModal();
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
<button class="sub-btn" onclick="window.open('https://marcosfeitosa0408.github.io/ecommerce-analytics-page/','_blank')"><i class="fa-brands fa-python"></i>Projeto 1 — E-commerce Analytics 🛒</button>
  <div class="modal-box">
  <button class="modal-close" onclick="document.getElementById('modalEcommerce').classList.remove('ativo');document.body.style.overflow='auto';">✕</button>
    <p class="modal-tag">// Projeto Python · Analista de Dados</p>
    <h2>🛒 Análise de E-commerce Brasileiro</h2>
    <p>Projeto completo de análise de dados com mais de <strong>100.000 pedidos reais</strong> do e-commerce brasileiro — do dado bruto ao insight estratégico, usando Python profissional.</p>
    <h4>🎯 Problema de Negócio</h4>
    <p>Como identificar quais clientes estão sumindo antes de perdê-los? Como o atraso na entrega impacta a satisfação? Quais estados e categorias geram mais receita? Essas são as perguntas que este projeto responde.</p>
    <h4>📊 O que você vai encontrar no GitHub</h4>
    <p>✅ Segmentação RFM completa com 6 segmentos de negócio (Campeões, Em Risco, Hibernando...)<br>
    ✅ KPIs automatizados: receita total, ticket médio, taxa de atraso<br>
    ✅ Análise de impacto do atraso na satisfação do cliente<br>
    ✅ Mapa de receita por estado brasileiro<br>
    ✅ Testes automatizados com Pytest<br>
    ✅ Código documentado em português — qualquer pessoa entende</p>
    <h4>💡 Principais Resultados</h4>
    <p>🏆 Clientes "Campeões" = 18% da base, mas 42% da receita<br>
    📦 Atraso acima de 7 dias derruba nota de 4.3 para 1.9 estrelas<br>
    🗺️ SP, RJ e MG concentram mais de 60% da receita total</p>
    <h4>🛠️ Stack Utilizada</h4>
    <p>Python · Pandas · NumPy · Matplotlib · Seaborn · Pytest · Jupyter</p>
    <a href="https://github.com/MarcosFeitosa0408/ecommerce-analytics" target="_blank" class="modal-btn">🔗 Ver Projeto no GitHub</a>
  </div>
</div>
