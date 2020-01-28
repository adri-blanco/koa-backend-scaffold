import KoaRouter from 'koa-router';
import RoomController from './controller/RoomController';

const router = new KoaRouter();

async function controllerExecutor(ctx, fn) {
  const data = { ...ctx.request.body, ...ctx.params, ...ctx.query };
  const result = await fn(data);
  ctx.body = result;
  ctx.status = 200;
}

router.get('/rooms/:id', async (ctx) => {
  await controllerExecutor(ctx, RoomController.get);
});
router.post('/rooms', async (ctx) => {
  await controllerExecutor(ctx, RoomController.create);
})

export default router;