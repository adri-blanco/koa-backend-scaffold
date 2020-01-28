import Koa from 'koa';
import router from './router';

const app = new Koa();

function handleError(err, context) {
  context.status = err.status || 400;
  context.body = {
    message: err.message,
    extra: err.extra,
  };
}

app.use((context, next) => next().catch((err) => handleError(err, context)));
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3000);