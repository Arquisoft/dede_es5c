#DeDe_es5c

[![pages-build-deployment](https://github.com/Arquisoft/dede_es5c/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/Arquisoft/dede_es5c/actions/workflows/pages/pages-build-deployment)
[![CI for ASW2122](https://github.com/Arquisoft/dede_es5c/actions/workflows/asw2122.yml/badge.svg)](https://github.com/Arquisoft/dede_es5c/actions/workflows/asw2122.yml)
[![Quality gate](https://sonarcloud.io/api/project_badges/quality_gate?project=Arquisoft_dede_es5c)](https://sonarcloud.io/summary/new_code?id=Arquisoft_dede_es5c)
[![codecov](https://codecov.io/gh/Arquisoft/dede_es5c/branch/master/graph/badge.svg?token=m6xoLkXarQ)](https://codecov.io/gh/Arquisoft/dede_es5c)

<p float="left">
<img src="https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg" height="100">
<img src="https://miro.medium.com/max/1200/0*RbmfNyhuBb8G3LWh.png" height="100">
<img src="https://miro.medium.com/max/365/1*Jr3NFSKTfQWRUyjblBSKeg.png" height="100">
</p>

Este proyecto es un ejemplo básico de un sitio web utilizando **React** con **Typescript** y un endpoint usando **NodeJS** con **express**

## Guia de inicio rápido

<mark>Si tienes instalados node.js y npm, asegurate de actualizarlos antes de intentar construir las imagenes</mark>

Si quieres ejecutar el proyecto necesitarás [git](https://git-scm.com/downloads), [Node.js and npm](https://www.npmjs.com/get-npm) y [Docker](https://docs.docker.com/get-docker/). Asegurate de tenerlos instalados en tu equipo. Descarga el proyecto con `git clone https://github.com/arquisoft/dede_es5c`. La manera más rápìda de ejecutar todo es con Docker.

```bash
docker-compose up --build
```
Este comando creará dos imagenes de docker si no existen en tu equipo (la webapp y la restapi) y lanzará un contenedor de mongoDB. Además lanzará contenedores de Prometheus y Grafana para monitorizar el servicio web. Deberias ser capaz de acceder a todo desde aqui:

 - [Webapp - http://localhost:3000](http://localhost:3000)
 - [Ejemplo llamada a RestApi - http://localhost:5000/api/users/list](http://localhost:5000/api/users/list)
 - [Metricas RestApi - http://localhost:5000/metrics](http://localhost:5000/metrics)
 - [Servidor Prometheus - http://localhost:9090](http://localhost:9090)
 - [Servidor Grafana http://localhost:9091](http://localhost:9091)
 - [Despliegue Heroku - https://dede5cwebapp.herokuapp.com/](https://dede5cwebapp.herokuapp.com/)

 
Si quieres ejecutar el proyecto sin Docker primero complila y ejecuta la restapi:

```shell
cd restapi
npm install
npm start
```
a continuación la webapp:
```shell
cd webapp
npm install
npm start
```

Deberias ser capaz de acceder a la aplicación en [http://localhost:3000](http://localhost:3000).

## Mas información
Encontrarás más información sobre el repositorio en los otros archivos README:
- Documentación: https://github.com/arquisoft/dede_es5c/tree/master/docs
- Webapp: https://github.com/arquisoft/dede_es5c/tree/master/webapp
- Restapi: https://github.com/github.com/arquisoft/dede_es5c/tree/master/restapi


## DEVELOPMENT TEAM
- Natalia Fernández Riego, UO277516
- Lucas Martinez Rego, UO277440
- Xurde Garcia Fernández, UO271033
- Paula Puerta González, UO243554
- Enol-Xesús González García, UO263611
