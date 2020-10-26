// [{time, pontos, vitorias, empates, derrotas, golsFeitos, golsSofridos, saldoDeGols }]

const obterTabela = async (total, times) => {
    const classificacao = {};
    classificacao.time = await times;
    for(i=0; i<times.length; i++) {
        classificacao.time[i].golsFeitos = 0;
        classificacao.time[i].golsSofridos = 0;
        classificacao.time[i].vitorias = 0;
        classificacao.time[i].derrotas = 0;
        classificacao.time[i].empates = 0;
        classificacao.time[i].saldoDeGols = 0;
        classificacao.time[i].pontos = 0
        classificacao.time[i].brasao = '';
    }
    total.forEach((element) => {
        for(i=0; i<times.length; i++) {
            if (element.time_casa == classificacao.time[i].nome) {
                classificacao.time[i].golsFeitos += element.gols_casa;
                classificacao.time[i].golsSofridos += element.gols_visitante;
                classificacao.time[i].brasao = element.brasaoCasa
                element.gols_casa > element.gols_visitante ? 
                    classificacao.time[i].vitorias = classificacao.time[i].vitorias +1 : 
                    element.gols_casa < element.gols_visitante ? 
                    classificacao.time[i].derrotas = classificacao.time[i].derrotas +1 : 
                    classificacao.time[i].empates = classificacao.time[i].empates + 1;
                classificacao.time[i].saldoDeGols = classificacao.time[i].golsFeitos - classificacao.time[i].golsSofridos;
                classificacao.time[i].pontos = classificacao.time[i].vitorias * 3 + classificacao.time[i].empates;
            } 
        }   
        for(i=0; i<times.length; i++) {
            if (element.time_visitante == classificacao.time[i].nome) {
                classificacao.time[i].golsFeitos += element.gols_visitante;
                classificacao.time[i].golsSofridos += element.gols_casa;
                classificacao.time[i].brasao = element.brasaoVisitante
                element.gols_casa < element.gols_visitante ? 
                    classificacao.time[i].vitorias = classificacao.time[i].vitorias +1 : 
                    element.gols_casa > element.gols_visitante ? 
                    classificacao.time[i].derrotas = classificacao.time[i].derrotas +1 : 
                    classificacao.time[i].empates = classificacao.time[i].empates + 1;
                classificacao.time[i].saldoDeGols = classificacao.time[i].golsFeitos - classificacao.time[i].golsSofridos;
                classificacao.time[i].pontos = classificacao.time[i].vitorias * 3 + classificacao.time[i].empates;
            } 
        } 
    })

    // organizar tabela
    const porPontos = (a, b) =>  
        a.pontos > b.pontos ? -1 :
        a.pontos < b.pontos? 1 :
        a.vitorias > b.vitorias? -1 :
        a.vitorias < b.vitorias ? 1 : 
        a.saldoDeGols > b.saldoDeGols ? -1 :
        a.saldoDeGols < b.saldoDeGols ? 1 :
        a.localeCompare(b);
    classificacao.time.sort(porPontos);
    
    return classificacao.time;
}

const adicionarBrasao = async (times, total) => {
    const jogosComBrasao = {};
    jogosComBrasao.times = await total;
    for(let i=0; i<total.length; i++) {
        jogosComBrasao.times[i].brasaoCasa = '';
        jogosComBrasao.times[i].brasaoVisitante = '';
    }
    jogosComBrasao.times.forEach((element) => {
        for(let i=0; i<times.length; i++) {
            if (element.time_casa == times[i].time) {
                element.brasaoCasa = `${times[i].url}`;
            };
        };
        for(let j=0; j<times.length; j++) {
            if (element.time_visitante == times[j].time) {
                element.brasaoVisitante = `${times[j].url}`;
            };
        };
    });
    return jogosComBrasao.times;
}

module.exports = { obterTabela, adicionarBrasao }