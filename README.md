<h1 align="center"> :file_cabinet: Guilherme Vaz - Lista de usuários </h1>

## :memo: Descrição

Esse projeto foi criado para ser um exemplo de uma listagem de usuários com a possibilidade de buscar os seus detalhes. Para essa plataforma foi utilizado TypeScript com React.Js para o desenvolvimento, sendo utilizado axios para o consumo da API https://randomuser.me/ que busca os usuário em questão ( foi utilizados filtros para buscar apenas 50, serem todos brasileiros e se manterem os mesmo sempre ), o Material UI foi utilizado para alguns componentes utilizados na plataforma. Caso queira visualizar mais informações do usuário é necessário clicar nele para abrir um modal com essas informações.

## :books: Funcionalidades

- <b>Listagem</b>: Listagem de todos os usuário na página principal, utilizando um componente de card para cada pessoa.

- <b>Detalhamento</b>: Ao clicar no usuário desejado abre um modal para mostrar maiores informações do usuário escolhido

## :wrench: Tecnologias utilizadas

- React.JS
- Material UI (Componentes previamente criados)
- Axios (Consumo da API)
- React-Router-Dom (Navegação entre as páginas)

## :rocket: Rodando o projeto

Para rodar o repositório é necessário clonar o mesmo e ter um leitor de JavaScript instalado no computador.
 Crie na pasta 'guivaz' o arquivo '.env' fazendo uma copia do '.env.example' só retirando o .example do nome, após isso deve seguir os seguintes comandos:

```
<linha de comando>

// Abrir a pasta guivaz onde está desenvolvido o projeto
cd ./colab
cd ./guivaz

npm run dev
```

## :speaker: Considerações

Aproveitando esse espaço para deixar alguns pontos, foi um desafio algumas alterações que acontecem no projeto por utilizar o vite no lugar do Create-React-App que altera alguns pontos como a utilização de variaveis de ambiente no projeto, se acostumar com a tipagem no React foi outro ponto que gerou pesquisas durante a elaboração. 
No momento estou um pouco mais dedicado na parte dos estudos no backend por ser o setor que estou atuando no momento em projetos, então para facilitar um pouco a construção do projeto preferi utilizar uma biblioteca com componentes desenvolvidos previamente e altera-los para que ficassem mais próximo com o que imaginei.

Obrigado pela oportunidade e se for possível gostaria de um feedback sobre o projeto, dicas do que posso melhorar e caminhos para seguir.

## :handshake: Colaboradores

Guilherme Vaz

## :dart: Status do projeto

Finalizado
