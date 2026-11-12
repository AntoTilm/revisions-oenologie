/* ===== Démarrage : une fois l'accueil et les régions construits =====
   S'entraîner ouvre le QCM de la prochaine région à l'agenda (sinon celui d'app.js), puis on affiche la page demandée. */
(function(){
  const R=window.REGIONS||[],A=window.AGENDA||[];
  const t=new Date();const today=t.getFullYear()+"-"+String(t.getMonth()+1).padStart(2,"0")+"-"+String(t.getDate()).padStart(2,"0");
  const next=A.filter(a=>a.r&&a.d>=today).sort((a,b)=>a.d<b.d?-1:1)[0];
  const reg=next&&R.find(r=>r.id===next.r);
  if(reg&&reg.ex&&reg.ex.qcm&&typeof openEx==="function")openEx(reg.ex.qcm);
  route();
})();
