# Exercícios do Dia 1 Bloco 12
# Assunto : Componentes com estado e eventos

### Exercícios de Conteúdo
#### Para fixar
1. Crie uma aplicação React com npx create-react-app fancy-buttons . Altere o componente App.js para que seja um componente de classe e contenha um botão associado a um evento que imprime um texto qualquer via console.log() . Não precisa se preocupar com a sintaxe correta para funções de eventos por enquanto!
2. Faça com que sua aplicação exiba três botões lado a lado com textos diferentes. Cada botão clicado deve acionar um evento diferente, cada um escrevendo algo diferente no console do navegador via console.log() .
3. Declare dentro da classe do seu componente dos exercícios de fixação acima a função que lida com o evento que antes era lidado por uma função do lado de fora da classe!
4. Garanta acesso ao objeto this na função que você declarou.
5. Agora você vai converter sua aplicação para uma que conta o número de cliques dado em cada botão! Primeiramente, defina um estado inicial para a contagem de cada botão.
 - 🦜 Dica: Uma possibilidade é você definir três chaves, uma para cada botão!
6. Agora, quando um botão foi clicado, altere de forma assíncrona o estado deste botão de zero para um.
7. Por fim, baseie-se no estado anterior ao atual para incrementar a contagem de cliques cada vez que um botão for clicado!
8. Defina uma lógica que estabeleça que, quando o número de cliques no botão for par, ele deve ser verde.
9. A cor atual do botão deve ser impressa num console.log() de dentro da função do evento que lida com o clique. Faça isso acontecer!
 - 🦜 Dica: Lembre-se de substituir a referência à função, no evento, por uma callback que invoca!

### COMEÇANDO OS EXERCÍCIOS

Hoje você vai incrementar a sua Pokedex utilizando State. Caso você queira reutilizar a sua Pokedex de exercícios anteriores, basta substituir a pasta src desse repositório pela src da sua pokedex já pronta, após seguir os passos de `Antes de iniciar`.

Se você não tiver feito, sem problemas, aqui você ja vai encontrar o comportamento esperado da sua Pokedex após os últimos exercícios.

#### Exercício 1

- Altere a sua página para que, ao invés de exibir toda a lista de pokémons, ela exiba um pokémon por vez. Ao apertar um botão de Próximo pokémon, a página passa a exibir o próximo pokémon da lista, e depois o próximo, e assim sucessivamente. Ao se chegar ao último pokémon da lista, a pokedex deve voltar para o primeiro pokémon no apertar do botão. Dica: Lembre-se disso!

#### Exercício 2

- Sua pokedex deve ter dois botões contendo os tipos Fire e Psychic. A partir dessa seleção, a pokedex deve circular somente pelos pokémons daquele tipo. Quando a página carrega, um desses filtros deve estar selecionado.

#### Bônus

Agora que você pegou todos os pokémons, consegue pegar todos os bônus?! Não é fácil completar todos! Faça quantos conseguir.

- Separe os estilos de CSS por componente, fazendo um arquivo .css para cada.

- Sua pokedex deve ter um terceiro botão chamado All para resetar o filtro. Após clicá-lo, a pokedex deve voltar a circular por todos os pokémons. Quando a página carrega, o filtro selecionado deve ser o All.

- Crie um componente Button e use-o para fazer os botões reutilizáveis da sua Pokedex. Dica: pesquise sobre o this.props.children do React!

- Faça os botões de filtragem serem dinâmicos: sua pokedex deve gerar um botão de filtragem para cada tipo de pokémon disponível nos dados, independente de quais ou quantos sejam, sem repetição de tipos. Ou seja, se sua pokedex possui pokémons do tipo Fire, Psychic, Electric e Normal, deve aparecer como opção de filtro um botão para cada um desses tipos. Além disso, ela deve manter o botão All.

- Faça o botão de Próximo pokémon ser desabilitado se a lista filtrada de pokémons tiver um só pokémon.