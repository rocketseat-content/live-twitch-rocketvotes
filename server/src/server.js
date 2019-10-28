import app from './app';

app.listen({ port: 4000 }).then(({ url }) => {
  console.log(`🚀 Server is running at ${url}`);
});
