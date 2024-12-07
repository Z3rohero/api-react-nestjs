# Guía para Desplegar un Proyecto con NestJS y React

Este documento detalla los pasos necesarios para desplegar un proyecto que utiliza **NestJS** como backend y **React** como frontend.

## Requisitos previos

Asegúrate de tener instaladas las siguientes herramientas en tu sistema:

- [Node.js](https://nodejs.org/) (versión LTS recomendada)
- [NPM](https://www.npmjs.com/) o [Yarn](https://yarnpkg.com/) (según tu preferencia)
- Un editor de código como [Visual Studio Code](https://code.visualstudio.com/)
- Git para clonar repositorios
---

## Estructura del Proyecto

```plaintext
project-root/
├── api-backend/ (NestJS)
│   ├── src/
│   ├── package.json
│   ├── tsconfig.json
│   └── ...
├── api-react-cliente/ (React)
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
└── README.md
```
## Variable de entorno
En la caperta de api-backend se encontra un archivo ".env.example"
crear el archivo  ".env" segun ".env.example"

## Comando para iniciar el proyecto

Ambiente de pruebas

Backend
```bash
cd api-backend
npm install         
npm run start:dev  
```
Cliente
```bash
cd api-react-cliente
npm install         
npm run dev  
```

## Captura de pantalla
![Descripción de la imagen](/public/images/image.png)