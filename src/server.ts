import app from "./app";

async function bootstrap() {
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
}

bootstrap();
