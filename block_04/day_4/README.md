# Exercícios do Dia 4 Bloco 4

### Parte I - Objetos e For/In

Usando o objeto abaixo, faça os exercícios a seguir:
<br>Exemplo

```
  let info = {
     personagem: "Margarida",
     origem: "Pato Donald",
     nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };
```

1. Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.

- Valor esperado no console: Bem-vinda, Margarida
  <br><span style="color:green" >**`Resposta:`**</span> [ex1.js](https://github.com/IvanildoCandido/trybe-exercises/blob/master/block_04/day_4/ex1.js 'ex1.js')

2. Insira no objeto uma nova propriedade com o nome de chave "recorrente" e o valor "Sim" e, em seguida, imprima o objeto no console.

- Valor esperado no console:
  <br>Exemplo

```
    {
      personagem: 'Margarida',
      origem: 'Pato Donald',
      nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
      recorrente: 'Sim'
    };
```

<br><span style="color:green" >**`Resposta:`**</span> [ex2.js](https://github.com/IvanildoCandido/trybe-exercises/blob/master/block_04/day_4/ex2.js 'ex2.js')

3. Faça um for/in que mostre todas as chaves do objeto.

- Valor esperado no console:
  <br>Exemplo

```
  personagem
  origem
  nota
  recorrent3
```

<br><span style="color:green" >**`Resposta:`**</span> [ex3.js](https://github.com/IvanildoCandido/trybe-exercises/blob/master/block_04/day_4/ex3.js 'ex3.js')

4. Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto.

- Valor esperado no console:
  <br>Exemplo

```
  Margarida
  Pato Donald
  Namorada do personagem principal nos quadrinhos do Pato Donald
  Sim
```

<br><span style="color:green" >**`Resposta:`**</span> [ex4.js](https://github.com/IvanildoCandido/trybe-exercises/blob/master/block_04/day_4/ex4.js 'ex4.js')

5. Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: "Tio Patinhas", "Christmas on Bear Mountain, Dell's Four Color Comics #178", "O último MacPatinhas", "Sim".

- Valor esperado no console:
  <br>Exemplo

```
  Margarida e Tio Patinhas
  Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
  Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
  Ambos recorrentes // Atenção para essa última linha!
```

<br><span style="color:green" >**`Resposta:`**</span> [ex5.js](https://github.com/IvanildoCandido/trybe-exercises/blob/master/block_04/day_4/ex5.js 'ex5.js')

### Parte II - Funções

Agora vamos fazer um exercício que vai deixar claro como funções com responsabilidades bem definidas deixam o código mais bem escrito.

1. Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

<br>Exemplo

```
  Exemplo de palíndromo: arara.
  verificaPalindrome("arara");
  Retorno esperado: true
  verificaPalindrome("desenvolvimento");
  Retorno esperado: false
```

<br><span style="color:green" >**`Resposta:`**</span> [ex2_1.js](https://github.com/IvanildoCandido/trybe-exercises/blob/master/block_04/day_4/ex2_1.js 'ex2_1.js')

2. Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
   <br>Exemplo

```
  Array de teste: [2, 3, 6, 7, 10, 1];.
  Valor esperado no retorno da função: 4.
```

<br><span style="color:green" >**`Resposta:`**</span> [ex2_2.js](https://github.com/IvanildoCandido/trybe-exercises/blob/master/block_04/day_4/ex2_2.js 'ex2_2.js')

3. Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
   <br>Exemplo

```
  Array de teste: [2, 4, 6, 7, 10, 0, -3];
  Valor esperado no retorno da função: 6.
```

<br><span style="color:green" >**`Resposta:`**</span> [ex2_3.js](https://github.com/IvanildoCandido/trybe-exercises/blob/master/block_04/day_4/ex2_3.js 'ex2_3.js')

4. Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
   <br>Exemplo

```
  Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
  Valor esperado no retorno da função: Fernanda.
```

<br><span style="color:green" >**`Resposta:`**</span> [ex2_4.js](https://github.com/IvanildoCandido/trybe-exercises/blob/master/block_04/day_4/ex2_4.js 'ex2_4.js')

5. Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
   <br>Exemplo

```
  Array de teste: [2, 3, 2, 5, 8, 2, 3];.
  Valor esperado no retorno da função: 2.
```

<br><span style="color:green" >**`Resposta:`**</span> [ex2_5.js](https://github.com/IvanildoCandido/trybe-exercises/blob/master/block_04/day_4/ex2_5.js 'ex2_5.js')

6. Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.
   <br>Exemplo

```
  Valor de teste: N = 5.
  Valor esperado no retorno da função: 1+2+3+4+5 = 15.

```

<br><span style="color:green" >**`Resposta:`**</span> [ex2_6.js](https://github.com/IvanildoCandido/trybe-exercises/blob/master/block_04/day_4/ex2_6.js 'ex2_6.js')

7. Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.
   <br>Exemplo

```
  Valor de teste: "trybe" e "be"
  Valor esperado no retorno da função: true
  verificaFimPalavra("trybe", "be");
  Retorno esperado: true
  verificaFimPalavra("joaofernando", "fernan");
  Retorno esperado: false

```

<br><span style="color:green" >**`Resposta:`**</span> [ex2_7.js](https://github.com/IvanildoCandido/trybe-exercises/blob/master/block_04/day_4/ex2_7.js 'ex2_7.js')

### Bônus

1. (Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.
   <br>Exemplo

```
 Atenção! Esse exercício já apareceu no processo seletivo de uma grande multinacional!
 Dicas:
  Uma string é um array de caracteres, então cada elemento do array é uma letra.
  O valor de cada numeral romano é:

     | I   | 1    |
     | --- | ---- |
     | IV  | 4    |
     | V   | 5    |
     | IX  | 9    |
     | X   | 10   |
     | XL  | 40   |
     | L   | 50   |
     | XC  | 90   |
     | C   | 100  |
     | CD  | 400  |
     | D   | 500  |
     | CM  | 900  |
     | M   | 1000 |

  Que tal criar um objeto que associe cada letra a um numeral para fácil consulta?

  Atenção! Quando você tem um número pequeno à direita de um número grande, eles devem ser somados. Exemplo: XI = 10 + 1 = 11. No entanto, se o número pequeno está à esquerda de um número maior que ele, ele deve ser subtraído. Exemplo: IX = 10 - 1 = 9.

```

<br><span style="color:green" >**`Resposta:`**</span> [convertRoman.js](https://github.com/IvanildoCandido/trybe-exercises/blob/master/block_04/day_4/convertRoman.js 'convertRoman.js')
