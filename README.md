<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# Asset Vision IT

## Introducción

Asset Vision IT es una solución integral desarrollada con el robusto framework [NestJS](https://nestjs.com/), diseñada para optimizar la gestión de activos de tecnologías de la información (IT) en organizaciones de todos los tamaños. Con una interfaz intuitiva y una arquitectura escalable, Asset Vision IT facilita la gestión eficiente de activos de IT, desde hardware y software hasta dispositivos periféricos y licencias, asegurando una visión clara y actualizada del inventario de IT en todo momento.

### Características Principales

- **Registro y Gestión de Activos**: Permite el registro detallado de todos los activos de IT, incluyendo especificaciones técnicas, ubicación, estado, y asignación a usuarios.


## Tecnologías Utilizadas

El backend de este proyecto está construido sobre NestJS, elegido por su arquitectura escalable y su compatibilidad con TypeScript, lo que mejora la calidad del código y la mantenibilidad. Utilizamos SQL Server como nuestra base de datos principal debido a su robustez, seguridad y capacidad para manejar transacciones complejas y grandes volúmenes de datos. Aunque el proyecto es agnóstico en cuanto al frontend, recomendamos Angular o React para una integración fluida.

## Cómo Iniciar

### Prerrequisitos

- Node.js (versión 12.x o superior)
- NPM (versión 6.x o superior)
- SQL Server (2017 o superior)

### Instalación

1. **Clonar el repositorio:**

```bash
git clone https://github.com/luisardon2411/asset-vision-it-backend.git
cd asset-vision-it
```
## Cómo Correr la Aplicación
1.  **Modo Desarrollo:**
```bash
npm run start:dev
```
2.  **Modo Producción:**
```bash
npm run build
npm run start:prod
```
3. **Pruebas:**
**para asegurar la calidad del software, ejecuta las pruebas disponibles:**

```bash
npm run test        # Pruebas unitarias
npm run test:e2e    # Pruebas end-to-end
```