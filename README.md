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
    - [Transition entre Sqlite3 et Sequelize](###-transition-entre-sqlite3-et-sequelize)
    - [Mise en place de la méthode de recherche par critère pour nos runs](####-mise-en-place-de-la-méthode-de-recherche-par-critère-pour-nos-runs)
    - [Compréhension de Pug](####-compréhension-de-Pug)
    - [Rendu visuel de côté web](####-rendu-visuel-de-côté-web)
- [Sites utiles](##-sites-utiles)
    - [Speed Run](###-speed-run)
    - [Documentations](###-documentations)
    
### Dépôt Git

[Lien de notre dépôt git](https://github.com/Saluc00/API)

### Diaporama

[Lien de la présentation](https://www.canva.com/design/DAD7OUIQjrY/eH2-wRAmUWHzArVFK8PGOg/edit)

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

Le script python `scrap.py` permet de remplir la base de données avec les données du site **speedrun**.

### Le serveur

Le fichier comprenant toutes les routes de notre projet.

### Les models

Les models constituent l'initialisation du squelette d'une table que **Sequelize** utilise pour y faire ses traitements dessus. 

### Les controllers

Les controllers permettent de réunir toutes les méthodes utilisées pour chacune des **tables**.

### Les views

Les views sont des fichiers en `.pug` qui nous permettent de faire des *templates* en y insérant des variables.

## Les fonctionnalités de notre projet

### Méthode Get 

Cette méthode permet de faire une demande au serveur pour récuperer les données générales de chaque table avec les onglets sur *la navbar* ou de récupérer seulement une partie à l'aide de notre barre de recherche.

### Méthode Create

Méthode permettant de créer un nouveau *Joueur*, *Jeu* ou *Runs* à l'aide d'un bouton ouvrant un formulaire.

### Méthode Delete

La méthode delete est utilisée pour supprimer une donnée que l'on filtre par *ID* ou par *Nom*.

### Méthode Update

Le rôle de la methode update a pour fonctionnalité de mettre à jour une donnée dans la base de données.

### Gestion Erreur 404 et 501

Pour l'erreur **404**, cela permet en cas d'Url erronée de nous afficher une nouvelle vue nous précisant que la *page n'a pas été trouvée*.

Pour l'erreur **501**, même principe que le 404 mais pour une méthode *non implémentée*.

## Problèmes rencontrés

### Transition entre Sqlite3 et Sequelize

Au début du projet, nous avons commencé avec le module node `sqlite3`.
Par la suite, nous avions dû faire une migration vers `Sequelize`, il a fallu alors aménager les fonctions des *controllers* et créer des *models*.

### Mise en place de la méthode de recherche par critère pour nos runs

Etant donné que nous stockons beaucoup de valeurs dans la table **runs**, nous avons dû traiter tous les cas possibles pour notre barre de recherche avec un *switch* dans notre méthode et un multiple choix de boutons sur l'affichage.

### Compréhension de Pug

Nous avons dû nous former sur la façon de créer des *vues* à l'aide de **pug** afin d'avoir les boutons et l'affichage souhaités.

### Rendu visuel de côté web

Pour pouvoir fournir un site ayant un minimum de visuel, nous avons dû faire de nombreuses recherches et de nombreux tests avant le rendu final.

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