import KoaRouter from 'koa-router';
import RoomController from './controller/RoomController';

const router = new KoaRouter();

async function controllerExecutor(ctx, fn) {
  const result = await fn();
  ctx.body = result;
  ctx.status = 200;
}

router.get('/rooms', async (ctx, next) => {
  await controllerExecutor(ctx, RoomController.get);
});

export default router;