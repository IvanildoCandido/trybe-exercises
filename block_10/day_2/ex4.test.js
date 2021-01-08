const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};
const url = 'https://api.github.com/orgs/tryber/repos';
const toDoProject = 'sd-01-week4-5-project-todo-list';
const memeProject = 'sd-01-week4-5-project-meme-generator';
it('Verifica se comtém o projeto toDoList', async () => {
  const response = await getRepos(url);
  expect(response).toContain(toDoProject);
  expect(response).toContain(memeProject);
});
it('Verifica se comtém o projeto memeGenerator', async () => {
  const response = await getRepos(url);
  expect(response).toContain(memeProject);
});
