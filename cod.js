var calc = window.document.getElementById('calcular')
calc.addEventListener('click', ok)

function ok() {
    const nome = window.document.getElementById('reu')
    const idadeFatos = window.document.getElementById('idadeF')
    const idadeSentenca = document.querySelector('input#idadeS')
    const penaMaxima = window.document.getElementById('pena')
    let prescricao = 0
    let resp = window.document.getElementById('resp')   
    
    
    resp.innerHTML = ''
    
    if (idadeFatos.value.length == 0 || penaMaxima.value.length == 0 || idadeSentenca.value < idadeFatos.value) {
        window.alert('[ERRO] Dados inválidos!')
    } else {
        const reu = String(nome.value)
        const idadeF = Number(idadeFatos.value)
        const idadeS = Number(idadeSentenca.value)
        const pena = Number(penaMaxima.value)
        
        if (pena < 1) {
            prescricao = 3
        }else if (pena <= 2) {
            prescricao = 4
        }else if (pena <= 4) {
            prescricao = 8
        }else if (pena <= 8) {
            prescricao = 12
        }else if (pena <= 12) {
            prescricao = 16
        }else {
            prescricao = 20
        }
        
        if (idadeF < 21) {
            prescricao = prescricao / 2
            resp.innerHTML = `Como a idade do autor na data dos fatos era de ${idadeF} anos, os prazos de prescrição são reduzidos pela metade.<br>`
        } else if (idadeS > 70) {
            prescricao = prescricao / 2
            resp.innerHTML = `Como a idade do autor na data da sentença era de ${idadeS}, os prazos de prescrição são reduzidos pela metade.<br>`
        }
        
        resp.style.textAlign = 'justify'
        resp.innerHTML += `<p>Como a pena para o delito cometido por ${reu} é de ${pena} ano(s), o crime prescreverá caso haja o decurso de ${prescricao} ano(s) entre: </p><p>I - A data dos fatos e o recebimento da denúncia;</p><p>II - Entre o recebimento da denúncia e a publicação da sentença ou pronúncia;</p><p>III - Entre a pronúncia e a sentença;</p><p>IV - Entre a sentença e a publicação do acordão recorrível;</p><p>V - Entre o acordão e o transito em julgado.</p><p>Também será interrompida a contagem da prescrição caso haja inicio ou continuação do cumprimento da pena ou caso haja reicidência.</p>`
    }
    
}  