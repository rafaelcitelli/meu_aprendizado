const valores = [
  { id: 1, nome: 'Integridade em cada escolha', figurinha: 'Guardião da Integridade', icon: '🛡️', tarefas: ['Relatar uma decisão difícil tomada com transparência.', 'Compartilhar um exemplo de atitude ética no trabalho.', 'Concluir um quiz sobre compliance, segurança da informação ou LGPD.', 'Reconhecer publicamente alguém que agiu com responsabilidade.'] },
  { id: 2, nome: 'Pessoas são a nossa força', figurinha: 'Craque do Time', icon: '🤝', tarefas: ['Reconhecer um colega por uma atitude colaborativa.', 'Participar de uma ação de integração.', 'Ajudar alguém de outra área em uma demanda.', 'Enviar uma mensagem de agradecimento para um colega.'] },
  { id: 3, nome: 'Não nos acomodamos', figurinha: 'Artilheiro da Inovação', icon: '🚀', tarefas: ['Sugerir uma melhoria em um processo.', 'Testar uma nova ferramenta ou prática.', 'Compartilhar um aprendizado novo.', 'Propor uma ideia de inovação para a área.'] },
  { id: 4, nome: 'Excelência nos direciona', figurinha: 'Capitão da Excelência', icon: '⭐', tarefas: ['Melhorar uma entrega existente.', 'Revisar um processo com foco em qualidade.', 'Compartilhar uma boa prática com o time.', 'Apresentar uma ação que reduziu retrabalho.'] },
  { id: 5, nome: 'Agimos pelo melhor dos alunos', figurinha: 'Camisa 10 do Propósito', icon: '🎓', tarefas: ['Mostrar como uma entrega impacta positivamente alunos, famílias ou escolas.', 'Compartilhar uma história de impacto educacional.', 'Sugerir melhoria na experiência do aluno.', 'Participar de uma ação conectada ao propósito educacional.'] }
];

const mockUsers = [
  { nome: 'Ana Souza', area: 'Pedagógico', unidade: 'SP', pontos: 85, desbloqueadas: [1, 2, 5] },
  { nome: 'Rafael Lima', area: 'TI', unidade: 'Campinas', pontos: 70, desbloqueadas: [1, 3] },
  { nome: 'Bianca Costa', area: 'RH', unidade: 'SP', pontos: 55, desbloqueadas: [2, 4] }
];

const state = { user: null, submissions: [], pending: [], approved: [] };

function render() {
  const app = document.querySelector('#app');
  app.innerHTML = `
  <header><div class="container"><h1>Álbum da Cultura Poliedro — Rumo ao Hexa dos Valores</h1><p>Uma jornada colaborativa em clima de Copa do Mundo.</p></div></header>
  <main class="container grid">
    <section class="card hero"><h2>⚽ Missões semanais + figurinhas + reconhecimento</h2><p>Cumpra missões, envie evidências, conquiste figurinhas e complete o álbum dos 5 valores Poliedro.</p></section>
    <section class="card">${state.user ? dashboardHTML() : cadastroHTML()}</section>
    ${state.user ? `<section class="card">${missoesHTML()}</section><section class="card">${albumHTML()}</section><section class="card">${rankingHTML()}</section><section class="card">${adminHTML()}</section>` : ''}
    <div class="footer">Demo com dados simulados • Pronto para integração com backend e autenticação corporativa.</div>
  </main>`;
  bindEvents();
}

function cadastroHTML(){return `<h3>Cadastro de participante</h3><div class="cols">
<div class="col-6"><label>Nome completo<input id="nome" required></label></div>
<div class="col-6"><label>E-mail institucional<input id="email" type="email" placeholder="nome@poliedro.com.br"></label></div>
<div class="col-4"><label>Setor/área<input id="area"></label></div>
<div class="col-4"><label>Unidade<input id="unidade"></label></div>
<div class="col-4" style="display:flex;align-items:end"><button id="btnCadastro">Entrar no Álbum</button></div></div>`}

function dashboardHTML(){
  const total = valores.length;
  const done = state.approved.map(a=>a.valorId).filter((v,i,arr)=>arr.indexOf(v)===i).length;
  const pontos = state.approved.length * 20;
  const cert = done===5 ? '<div class="notice">🏆 Parabéns! Você completou o álbum e pode emitir seu certificado final.</div><button id="certBtn">Emitir certificado</button>' : '';
  return `<h3>Olá, ${state.user.nome.split(' ')[0]}!</h3><div class="stats"><div class="stat"><strong>${pontos}</strong><br>Pontos</div><div class="stat"><strong>${done}/${total}</strong><br>Figurinhas</div><div class="stat"><strong>${state.pending.length}</strong><br>Em validação</div></div>${cert}<div id="certArea"></div>`;
}

function missoesHTML(){
  return `<h3>Missões por valor</h3>${valores.map(v=>`<div class="missao"><span class="badge">${v.icon} Valor ${v.id}</span><h4>${v.nome}</h4><ul>${v.tarefas.map(t=>`<li>${t}</li>`).join('')}</ul><label>Evidência (texto, link, print, foto):<textarea id="ev_${v.id}" rows="2"></textarea></label><button data-enviar="${v.id}">Enviar missão</button></div>`).join('')}`;
}

function albumHTML(){
  const unlocked = state.approved.map(a=>a.valorId);
  return `<h3>Álbum virtual</h3><div class="album">${valores.map(v=>`<div class="sticker ${unlocked.includes(v.id)?'unlocked':''}">${unlocked.includes(v.id)?'📸':''}<h4>${v.figurinha}</h4><p>${v.icon} ${v.nome}</p><small>${unlocked.includes(v.id)?'Desbloqueada':'Bloqueada'}</small></div>`).join('')}</div>`;
}

function rankingHTML(){
  const eu = state.user ? {nome:state.user.nome, area:state.user.area, unidade:state.user.unidade, pontos:state.approved.length*20} : null;
  const base = [...mockUsers, ...(eu?[eu]:[])].sort((a,b)=>b.pontos-a.pontos);
  const area = [...base].sort((a,b)=>b.pontos-a.pontos);
  const unidade = [...base].sort((a,b)=>b.pontos-a.pontos);
  const table = (arr, title)=>`<h4>${title}</h4><table class="table"><tr><th>#</th><th>Colaborador</th><th>Área</th><th>Unidade</th><th>Pontos</th></tr>${arr.map((p,i)=>`<tr><td>${i+1}</td><td>${p.nome}</td><td>${p.area}</td><td>${p.unidade}</td><td>${p.pontos}</td></tr>`).join('')}</table>`;
  return `<h3>Ranking</h3>${table(base,'Geral por colaborador')}${table(area,'Por área')} ${table(unidade,'Por unidade')}`;
}

function adminHTML(){
  return `<h3>Painel administrativo (simulado)</h3><p>Aprove ou rejeite evidências enviadas.</p><div>${state.pending.length===0?'Nenhuma missão pendente.':state.pending.map((p,i)=>`<div class="missao"><strong>${p.nome}</strong> • Valor ${p.valorId}<br><small>${p.evidencia}</small><div style="margin-top:8px"><button data-aprovar="${i}">Aprovar</button> <button class="secondary" data-reprovar="${i}">Reprovar</button></div></div>`).join('')}</div>`;
}

function bindEvents(){
  document.querySelector('#btnCadastro')?.addEventListener('click', ()=>{
    const nome = document.querySelector('#nome').value.trim(); const email = document.querySelector('#email').value.trim(); const area = document.querySelector('#area').value.trim(); const unidade = document.querySelector('#unidade').value.trim();
    if(!nome || !email || !area) return alert('Preencha os campos obrigatórios.');
    state.user = {nome,email,area,unidade}; render();
  });
  document.querySelectorAll('[data-enviar]').forEach(btn=>btn.addEventListener('click', ()=>{
    const valorId = Number(btn.dataset.enviar); const evidencia = document.querySelector(`#ev_${valorId}`).value.trim();
    if(!evidencia) return alert('Adicione uma evidência.');
    state.pending.push({nome: state.user.nome, valorId, evidencia});
    alert('Missão enviada para validação!'); render();
  }));
  document.querySelectorAll('[data-aprovar]').forEach(btn=>btn.addEventListener('click', ()=>{
    const idx = Number(btn.dataset.aprovar); const item = state.pending.splice(idx,1)[0];
    state.approved.push(item); alert(`🎉 Figurinha conquistada: ${valores.find(v=>v.id===item.valorId).figurinha}`); render();
  }));
  document.querySelectorAll('[data-reprovar]').forEach(btn=>btn.addEventListener('click', ()=>{ state.pending.splice(Number(btn.dataset.reprovar),1); render(); }));
  document.querySelector('#certBtn')?.addEventListener('click', ()=>{
    document.querySelector('#certArea').innerHTML = `<div class="notice"><strong>Certificado de Conclusão</strong><br>${state.user.nome} concluiu o Álbum da Cultura Poliedro — Rumo ao Hexa dos Valores.</div>`;
  });
}

render();
