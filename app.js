function pesquisar() {
  let section = document.getElementById('resultados-pesquisa')

  let campoPesquisa = document.getElementById('campo-pesquisa').value

  if (!campoPesquisa) {
    section.innerHTML = `
    <div class="item-resultado">
    <h1>NENHUM ATLETA FOI ENCONTRADO</h1>
    </div>
`
    return
  }

  campoPesquisa = campoPesquisa.toLowerCase()

  let resultados = ''
  let marca = ''
  let descricao = ''
  let tags = ''
  //esse modo nao é uma boa pratica

  //para cada dado dentro da lista de dados
  for (let dado of dados) {
    marca = dado.marca.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()
    //se titulo includes campoPesquisa
    //entao, faça....
    if (
      marca.includes(campoPesquisa) ||
      descricao.includes(campoPesquisa) ||
      tags.includes(campoPesquisa)
    ) {
      resultados += `
    <div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${dado.marca}</a>
            </h2>
            <p class="descricao-meta">
               ${dado.descricao}
            </p>
            <a href="${dado.link}" target="_blank"
                >Mais informações</a
            >
            </div>
            `
    }

    //mais igual vai somar +=
  }
  if (!resultados) {
    resultados = `
    <div class="item-resultado">
    <h1>NADA FOI ENCONTRADO</h1>
    </div>
`
  }
  //atribui os resultados gerados à seção HTML
  section.innerHTML = resultados
}

//armazena essa estrutura da variavel, e vai executar somente uma vez, uma boa pratica.
