# Eleanor Design System

Eleanor é o nome do design system da Webmotors. Os componentes escritos seguem o guia chamado Modern e não contem qualquer tipo de regra de negócio.

## Instalação

O pacote pode ser iniciado pelos seguintes comandos
```sh
$ cd eleanor
$ yarn
$ yarn start
```
É possível usar a pasta example para visualizar componentes durante o desenvolvimento
```sh
$ cd example
$ yarn
$ yarn start
```
O arquivo consumido como pacote no npm é resultado do comando

```sh
$ yarn build
```


## Modern

Um guia de arquitetura e boas práticas para lidar com problemas de consistência de dados, performance e legibilidade de código.


* Todos os arquivos devem passar no eslint e/ou tslint.
* Não deve ter classes, apenas funções.
* Lógica de funcionamento de um componente deve estar em funções no componente.
*  Nunca escrever lógica no XML, inclusive ternários.
*  Lógicas com regras de negócio ou funções compartilháveis em geral devem estar em Hooks
*  Usar o padrão de nomenclatura de Hooks. (Texto camelcase com o prefixo "use" - ex.: useNomeDoHook)
*  Não deve ter "utils" e/ou "helpers", ou qualquer tipo de função compartilhável que não seja componente ou Hook
*  Estilo de componente deve ser feito via styled-components. Nunca usar CSS, SCSS, SASS ou Less.
*  Componentes são responsivos.
*  Todo componente tem uma pasta com seu nome em maiúsculo. (ex.: Button)
*  Toda pasta de componente tem os seguinte arquivos:
    *  index.(js/ts) - Componente funcional escrito em React
    *  test.(js/ts)  - Teste escrito em Jest e/ou Enzyme
    *  style.(js/ts) - Estilo visual escrito em styled-components
*  O armazenamento de dados no navegador (cookies e/ou local/season storage), interações com API ou qualquer tipo de persistência de dados devem estar em actions dentro do fluxo do Redux.
*  Redux como fonte da verdade. Nunca deve ser verificado dados no navegador (cookies e/ou local/season storage), interações com API ou qualquer tipo de persistência de dados. Se alguma informação é necessária, a mesma deve estar no Redux.
*  Hooks de Redux, como useSelector e useDispatch, devem ser usados apenas em actions.
*  Action devem ser escritas como custom hooks.
*  Apenas o React deve interagir com a DOM. Exceções devem ser consideradas "side effects", então o uso da hook useEffect é obrigatória.

### Links relacionados:

* [React Hooks]
* [ESLint]
* [Styled Components]
* [Redux Hooks]
* [Typescript]

## Licensa
(The MIT License)

Copyright (c) 2012 Airbnb

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[React Hooks]: <https://pt-br.reactjs.org/docs/hooks-intro.html>
[ESLint]: <https://eslint.org/docs/rules/>
[Styled Components]: <https://styled-components.com/>
[Redux Hooks]: <https://react-redux.js.org/next/api/hooks>
[Typescript]: <https://typescriptlang.org/>
