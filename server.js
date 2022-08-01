const port = process.env.PORT || 5000;
server.use(middlewares);
server.use(jsonServer.rewriter({ "/api/*": "/$1" }));
server.use(router);
server.use(cors());
server.listen(port, () => {
  console.log(`Server is running on ${port}`);
});