import { TodosPage } from './app.po';

describe('todos App', () => {
  let page: TodosPage;

  beforeEach(() => {
    page = new TodosPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
