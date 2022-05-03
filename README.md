<h1 align="center">
   <a href="#"> voxus-invest </a>
</h1>

<h3 align="center">
    This is a repo about invest to the company voxus, that will lead with several clientes and generate PDF bills
</h3>

<p align="center">
  
  <a href="https://www.python.org/downloads/release/python-390/">
    <img alt="Python version" src="https://img.shields.io/badge/python-_>=_3.9-blue.svg">
  </a> 
  
  <a href="https://github.com/psf/black">
    <img alt="Code Style" src="https://img.shields.io/badge/code%20style-black-000000.svg">
  </a>
  
  <a href="https://github.com/linikerunk/voxus-invest/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/linikerunk/voxus-invest">
  </a>
    
  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>


<h4 align="center"> 
	 Status: Progress
</h4>

<p align="center">
 <a href="#-about">About</a> •
 <a href="#%EF%B8%8F-features">Features</a> •
 <a href="#-demo">Demo</a> • 
 <a href="#-running-the-project">Running the project</a> • 
 <a href="#-tech-stack">Tech Stack</a> •
 <a href="#-how-to-contribute">How to contribute</a> •
 <a href="#%EF%B8%8F-autor">Author</a> • 
 <a href="#-license">License</a>

</p>


## 💻 About

**Voxus Investiment** - is an API project that aims to provide a backend for a web system where can register their purchases investment and generate the bills. 

---

## ⚙️ Features

### API Routes:  
✔️ Route to register a new client. (It's called user within API and database)  
✔️ Route to validate a reseller login and obtain a JWT token.  
✔️ Route to register a new investment.  
✔️ Route to filter the datetime of investment was bought.  
✔️ Route to list the investments.


### Technical resources:  
✔️ Interactive documentation with OpenAPI (swagger)  
✔️ Documentation with Redoc  
✔️ JWT authentication  
✔️ Asynchronous database layer (both Postgres and SqLite)  
✔️ Database Migrations  
✔️ Dockerized application  
✔️ Micro-services with front-end with React to consume back-end

---

## 👀 UML and Deploys

The application is available on heroku and vercel:

UML about system:
![voxus_uml](https://user-images.githubusercontent.com/27506588/166464895-faf6d4bd-a50e-4ec1-8340-9baa540c6666.png)


## 🎃 Figma and Design the application

example register:
![image](https://user-images.githubusercontent.com/27506588/166465576-ebc8218e-eeb4-4b8c-941e-4d867ec6886e.png)

link to figma:
https://www.figma.com/file/av9EHg4FEGPyt7PXO33uCE/Voxus?node-id=3%3A3


---
## 🚀 Running the project

### Pre-requisites

Before you begin, you will need to have the following tools installed on your machine:  
* [Git](https://git-scm.com)  
* [Python](https://www.python.org).  
* In addition, it is good to have an editor to work with the code like [VSCode](https://code.visualstudio.com/)    


> <details open>
>	 <summary>
> 		<b> Running locally </b>
>	 </summary>
> 
>	 1. Clone this repository:  
>	 	`$ git clone https://github.com/linikerunk/voxus-invest.git`  
	2. Create a virtualenv:
	 	`$ python3 -m venv name_venv`  
> 	3. Activate your env:  
>	 	`$ source /home/brago/workspace/projects/voxus/voxus-invest-env/bin/activate`  
> 	4. Install the dependencies (step for Linux users only):  
> 		`$ pip install -r requirements.txt`  

> 	5. Run the application in development mode:  
> 		`$ uvicorn app.main:app `  
>	6. The server will start at port: 8000 - [see the docs](http://localhost:8000/docs)
	7. The server will start at port: 8000 - [see the docs](http://localhost:8000/redoc)
> </details>


> <details>
> 	<summary>
> 		<b> Running app React</b>
> 	</summary>

> 	1. Access the project folder cmd/terminal:  
> 		`$ cd frontend `  
> 	2. Install the node_modules of package.json:  
>		`$ yarn `
>	3. Run the front-end project:  
>		`$ yarn start`  
> 	5. The server will start at port: 8000 - [see the docs](http://localhost:8000/docs)
> </details>

---

## 🛠 Tech Stack

The following tools were used in the construction of the project:

  [Python](https://www.python.org) + [FastAPI](https://fastapi.tiangolo.com)


> <details open>
>	<summary>
>		<b> Dependences </b>
>	</summary>
>
> -   [sqlalchemy](https://github.com/sqlalchemy/sqlalchemy)  
> -   [psycopg2](https://github.com/psycopg/psycopg2)  
> -   [asyncpg](https://github.com/MagicStack/asyncpg)  
> -   [aiosqlite](https://github.com/omnilib/aiosqlite)  
> -   [alembic](https://github.com/sqlalchemy/alembic)  
> -   [passlib](https://github.com/glic3rinu/passlib)  
> -   [pyjwt](https://github.com/jpadilla/pyjwt)  
> -   [httpx](https://github.com/encode/httpx)  
> -   [mangum](https://github.com/jordaneremieff/mangum)  
> </details>

> <details>
>	<summary>
>		<b> Development Dependences </b>
>	</summary>
>
> -   [black](https://github.com/psf/black)  
> -   [flake8](https://github.com/PyCQA/flake8)  
> -   [isort](https://github.com/PyCQA/isort)  
> -   [faker](https://github.com/joke2k/faker)  
> -   [pytest](https://github.com/pytest-dev/pytest)  
> -   [pytest-asyncio](https://github.com/pytest-dev/pytest-asyncio)  
> -   [pytest-cov](https://github.com/pytest-dev/pytest-cov)  
> -   [pygount](https://github.com/roskakori/pygount)  
> </details>
---

## 💪 How to contribute

1. Fork the project.
2. Create a new branch with your changes: `git checkout -b my-feature`
3. Save your changes and create a commit message telling you what you did: `git commit -m" feature: My new feature "`
4. Submit your changes: `git push origin my-feature`

---

## 🦸‍♂️ Autor

<a href="https://github.com/wlsouza">
 <img style="border-radius: 50%;" src="https://github.com/linikerunk.png" width="100px;" alt=""/>
 <br />
 <sub><b>Liniker Oliveira</b></sub></a> <a href="https://github.com/linikerunk" title="Github Liniker">🚀</a>
 <br />

[![Linkedin Badge](https://img.shields.io/badge/-Liniker-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://in.linkedin.com/in/liniker-oliveira-363486149)]
[![Gmail Badge](https://img.shields.io/badge/-linikerenem@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:linikerenem@gmail.com)](mailto:linikerenem@gmail.com)

---

## 📝 License

This project is under the license [MIT](./LICENSE).
