function pesquisar() {
  let section = document.getElementById('resultados-pesquisa')

  let resultados = ''

  //esse modo nao é uma boa pratica

  //para cada dado dentro da lista de dados
  for (let dado of dados) {
    //mais igual vai somar +=
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

  section.innerHTML = resultados
}

//armazena essa estrutura da variavel, e vai executar somente uma vez, uma boa pratica.
