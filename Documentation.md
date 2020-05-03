# Documentation

## Présentation

## Sommaire

- [Initialisation du projet](##-initialisation-du-projet)
    - [Pré-requis](##-pré-requis)
- [Installation du projet](##-installation-du-projet)
    - [Clonage du dépôt git](###-clonage-du-dépôt-git)
    - [Installation des dépendances](installation-des-dépendances)
    - [Lancement du projet et du serveur local](###-lancement-du-projet-et-du-serveur-local)
    - [Lien du serveur en local](###-lien-du-serveur-en-local)
- [Architecture du projet](##-architecture-du-projet)
    - [Le scrap](###-le-scrap)
    - [Le serveur](###-le-serveur)
    - [Les models](###-les-models)
    - [Les controllers](###-les-controllers)
    - [Les views](###-les-views)
- [Les fonctionnalités de notre projet](##-Les-fonctionnalités-de-notre-projet)
    - [Méthode Get](###-méthode-get)
    - [Méthode Create](###-méthode-create)
    - [Méthode Delete](###-méthode-delete)
    - [Méthode Update](###-méthode-update)
    - [Gestion Erreur 404 et 501](###-gestion-erreur-404-et-501)
- [Problèmes rencontrés](##-problèmes-rencontrés)
    - [Transition entre Sqlite3 et Sequlize](####-transition-entre-sqlite3-et-sequlize)
    - [Mise en place de la méthode de recherche par critère pour nos runs](####-mise-en-place-de-la-méthode-de-recherche-par-critère-pour-nos-runs)
    - [Compréhension de Pug](####-compréhension-de-Pug)
    - [Rendu visuelle de côté web](####-rendu-visuelle-de-côté-web)
- [Sites utiles](##-sites-utiles)
    - [Speed Runs](###-speed-runs)
    - [Documentations](###-documentations)
    
### Dépôt Git

[Lien de notre dépôt git](https://github.com/Saluc00/API)

### Diaporama

[Lien de la présentation](https://www.canva.com/design/DAD1GkHHv_Q/quOE6o_ii10qIKzrpJ7FTA/view?utm_content=DAD1GkHHv_Q&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton&fbclid=IwAR1G7Pt1T8zxhEBWF1_YGUfD1B7f0-tGOz6sgU-_uOqTxCaPXd-dLiSOtv8)

## Initialisation du projet

### Pré-requis

**Software**

- Node js
- NPM

## Installation du projet

### Clonage du dépôt git

```
git clone https://github.com/Saluc00/API
```

### Installation des dépendances

```
npm install
```

### Lancement du projet et du serveur local

```
node server.js
```

### Lien du serveur en local

```
http://localhost:3000
```

## Architecture du projet

### Le scrap

Le script python `scrap.py` permet de remplir la base de donnée avec les données du site speedrun.com

### Le serveur

Le serveur.js où toutes nos routes sonnt présente

### Les models

Nos API ont tout d abord été configurées dans le .env puis dans différent fichier en fonction de l API.

### Les controllers

Pour nos routes: /routes  
Pour nos controller: /App/Http/Controller

### Les views

Les Uploads effectués sur le site se trouve à deux endroits reliés par un lien symbolique:  
Dans notre dossier Koel: /public/file  
Sur notre Raspberry: /home/pi/Music

## Les fonctionnalités de notre projet

### Méthode Get 

Tout en gardant le format de koel, nous avons ajouté un bouton register au niveau du login qui ouvre un modal sous forme de pop up dans le même esprit que koel.

### Méthode Create

Toujours dans le même esthétique que koel, nous avons ajouté une nouvelle page /file pour permettre d uploader des musiques directement sur l application et notre dossier source, il faut tout de même qu un administrateur face la synchronisation pour que les musiques s'affichent pour garder un minimum de contrôle.

### Méthode Delete

Ajout de l API Last.fm pour avoir le cover, l album et l artiste  

### Méthode Update

Tout en gardant le format de koel, nous avons ajouté un bouton register au niveau du login qui ouvre un modal sous forme de pop up dans le même esprit que koel.

### Gestion Erreur 404 et 501

blablabalblabalbalbalblalblablbalbzlabzlablzbazlblabzlbealbealzbeaiufgzyufgzufgz

## Problèmes rencontrés

#### Transition entre Sqlite3 et Sequlize

jyfzgzezufgyufgsuegkugfeiuyfgbqkyufgfouegffouevfeouvfouezvfoueqvfouevfouevfouevfouevfouvfoq

### Mise en place de la méthode de recherche par critère pour nos runs

Après avoir ajouté le plugin pour l API de google, notre page de login chargeait à l infini...

### Compréhension de Pug

Après avoir mis en place l environnement et créer un compte sur mailgun et postman, il était impossible de voir si les mails étaient bien reçu car il fallait passer sur une version payante.

### Rendu visuelle de côté web

Ce qui nous a pris le plus de temps sur ce projet, comprendre et s approprier un code que nous n avons pas écrit était vraiment un défi car ce sont des techs que nous ne connaissions pas et nous avons du nous mettre à niveau sur beaucoup de points pour pouvoir développer sans avoir de conflit.

## Sites utiles

### Speed Run

[Site Officiel](www.speedrun.com)  

### Documentations

[Sequelize](https://sequelize.org/master/manual/getting-started.html)  
[Pug](https://pugjs.org/api/getting-started.html)  
[Express](http://expressjs.com/en/starter/installing.html)  
[Path](https://nodejs.org/api/path.html)  
[Body-Parser](https://www.npmjs.com/package/body-parser)  
[Bootstrap](https://getbootstrap.com/docs/4.4/getting-started/introduction/)
