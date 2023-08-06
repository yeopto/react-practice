import { rest } from 'msw';

const name = 'yeopto';

const todos = [
  {
    id: 1,
    todo: '먹고',
  },
  {
    id: 2,
    todo: '자고',
  },
  {
    id: 3,
    todo: '놀기',
  },
];

export const handlers = [
  // 할일 목록
  rest.get('/todos', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(todos), ctx.delay(900));
  }),

  rest.get('/name', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(name), ctx.delay(200));
  }),

  // 할일 추가
  rest.post('/todos', async (req, res, ctx) => {
    todos.push(await req.json());
    return res(ctx.status(201));
  }),
];
