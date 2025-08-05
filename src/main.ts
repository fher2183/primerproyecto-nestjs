import { NestFactory } from '@nestjs/core'; //NestFactory: Para crear la instancia de la aplicación
import { AppModule } from './app.module'; // AppModule: Módulo principal de la aplicación
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'; //DocumentBuilder y SwaggerModule: Para la documentación de la API

/**
 * Función principal que inicia la aplicación NestJS
 * Esta función es asíncrona para manejar operaciones que requieren espera
 */
async function bootstrap() {
  // Crear una nueva instancia de la aplicación NestJS
  const app = await NestFactory.create(AppModule);

  // Configuración de Swagger para la documentación de la API
  const config = new DocumentBuilder()
    .setTitle('API Server E2025')        // Título de la documentación
    .setDescription('Documentation  API')  // Descripción de la API
    .setVersion('1.0')                    // Versión de la API
    .build();
    
  // Crear el documento Swagger con la configuración
  const document = SwaggerModule.createDocument(app, config);
  // Configurar la ruta donde estará disponible la documentación Swagger
  SwaggerModule.setup('documentacion', app, document);

  // Iniciar el servidor en el puerto especificado en las variables de entorno
  // o en el puerto 3000 si no se especifica
  await app.listen(process.env.PORT ?? 3000);
}

// Ejecutar la función bootstrap para iniciar la aplicación
bootstrap();
