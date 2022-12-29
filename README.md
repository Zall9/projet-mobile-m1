# Ov3r-T4le
![image](https://user-images.githubusercontent.com/55153194/209970677-aafb0280-42ca-48ba-8b21-247af2ad5334.png)

[//]: # (TODO : rajouter des illustrations pour les différentes parties)

## But du jeu

Le but du jeu est de grimper dans le leaderboard

*- Mais comment on fait pour le gravir ?*

Et bien pour cela vous devez terminer des mini-jeux ! Ces mini-jeux vous donnerons des points qui correspond à votre
score dans le classement.

*- Je veux bien terminer des mini-jeux, mais comment on en fait ?*

Pour tomber sur des mini-jeux, vous devez vous déplacer entre les lieux mis à votre disposition (*ce sont les cartes
avec de jolis noms et de belles images*). Certains de ces déplacements seront interrompus par des mini-jeux.

## Installation
- Il suffit de clonner le dépot.
- Ensuite lancer la commande `npm i` puis `npm run dev`

## Fonctionnalités

- Leaderboard en temps réel !
- ![image](https://user-images.githubusercontent.com/55153194/209970957-b3644b1d-5f51-4d78-b1d1-4094a8e2e47b.png)
- <u>Déplacement entre lieux</u>*
- ![image](https://user-images.githubusercontent.com/55153194/209971065-2131551b-062a-4340-bf3e-c1bb55015613.png)

- <u>Mini-jeux en tout genre</u>*
![Sans](https://user-images.githubusercontent.com/55153194/209971646-4e954feb-9def-40d4-a756-fc010563de51.png)

*générique, donc possibilité d'en rajouter (voir en dessous comment faire)

### Rajouter des lieux

<ol>
<li> Dupliquer un lieu déjà existant (comme ForestTent) (dans <a href="https://github.com/Zall9/projet-mobile-m1/tree/main/model/Events/EventList/">./model/Events/EventList/</a>)</li>
<li> Le remplir avec ses propres infos</li>
<li> Rajouter <a href="https://github.com/Zall9/projet-mobile-m1/tree/main/public/static/images/events/">./public/static/images/events/</a> l'image que vous voulez utiliser</li>
<li> Rajouter dans <a href="https://github.com/Zall9/projet-mobile-m1/tree/main/model/Events/EventController.ts">EventController</a> dans eventIdList l'id que vous avez donné à votre lieu, si celui-ci est accessible de n'importe où</li>
<li> Si vous voulez que votre lieu soit accessible depuis un autre lieu spécifique, modifiez la destination d'un des outputs de cet autre lieu spécifique</li>
</ol>

### Rajouter des mini jeux

ATTENTION : il faut que le jeu se passe sous forme de grille (logique comme visuelle). Il est parfois nécessaire de
penser OTB. Si vous voulez un exemple d'utilisation classique, nous vous proposons
le <a href="https://github.com/Zall9/projet-mobile-m1/tree/main/model/Minigames/MinigameList/Panier.tsx">jeu du
panier</a> ou encore celui
du <a href="https://github.com/Zall9/projet-mobile-m1/tree/main/model/Minigames/MinigameList/Snek.tsx">Snek</a>. Pour
voir un exemple d'utilisation plus spécifique, allez voir
le <a href="https://github.com/Zall9/projet-mobile-m1/tree/main/model/Minigames/MinigameList/RPS.tsx">RPS (
rock-paper-scissors)</a>.

La CaseTemplate : permet de dire au jeu ce qu'il y a comme information à l'intérieur d'une case. Il faut l'implémenter
afin de rajouter des informations.

Les différentes parties d'un mini-jeu :

- Controls : si votre jeu demande des contrôles en dehors de la grille (comme une croix directionnelle), il faut les
  rajouter ici (
  e.g. <a href="https://github.com/Zall9/projet-mobile-m1/tree/main/model/Minigames/MinigameList/Snek.tsx">Snek</a>)
- refreshInterval : si votre jeu demande une actualisation et du mouvement hors des actions du joueur (comme des
  mouvements d'ennemis), cet attribut gère le nombre de ms qu'il y a entre chaque rafraichissement (
  e.g <a href="https://github.com/Zall9/projet-mobile-m1/tree/main/model/Minigames/MinigameList/Panier.tsx">jeu du
  panier</a>)
- nbRow / nbCol : nombre de lignes et colonnes de votre grille
- ViewGrid : gère l'affichage de la grille
- score : valeur du score au départ
- scoreTresh : valeur du score à atteindre
- player : si vous avez un joueur à poser sur la grille, il faut spécifier sa position de départ et sa direction.
- init : c'est ici qu'on initialise le début du jeu (par exemple pour
  le <a href="https://github.com/Zall9/projet-mobile-m1/tree/main/model/Minigames/MinigameList/Memory.tsx">Memory</a>,
  c'est tirer les positions des différentes paires), laissez bien les deux initialisations de setter, ils permettent au
  jeu de faire les actualisations nécessaires.
- caseTemplateCreate : permet de créer la case pour le composant (suffit de suivre les autres mini-jeux : juste
  réécrivez-la pour faire en sorte qu'elle appelle bien le contructeur de votre CaseTemplate)
- playerInput : c'est ici que vous gérez les actions du joueur : c'est à vous de définir les différentes actions que le
  joueur peut effectuer. Ça peut être des mouvements comme dans
  le <a href="https://github.com/Zall9/projet-mobile-m1/tree/main/model/Minigames/MinigameList/Panier.tsx">jeu du
  panier</a>, ou des coordonnées avec le jeu
  du <a href="https://github.com/Zall9/projet-mobile-m1/tree/main/model/Minigames/MinigameList/Memory.tsx">Memory</a>.
- evolve : si vous avez des actualisations à effectuer sans l'intervention du joueur (comme la chute des cerises dans
  le <a href="https://github.com/Zall9/projet-mobile-m1/tree/main/model/Minigames/MinigameList/Panier.tsx">jeu du
  panier</a>) mettez les ici. La fonction sera appelée toutes les *refreshInterval* ms.

Tous les attributs et fonctions dont nous n'avons pas parlé, n'y touchez pas.

## Architecture

### Technologies

Principale :
Le jeu tourne avec le framework javascript React, avec en supplément Next.js.

Secondaires :

- Midjourney : Génération des images détaillées du jeu (e.g. les lieux)
- Firebase : Stockage des scores des joueurs (Database)

### Patterns spécifiques

- Mini-jeux : Pattern Invoker : La page des mini-jeux gère un mini-jeu générique, mais ne connait rien du mini-jeu. De
  même, le mini-jeu ne connait pas ce qu'il y a autour, il exécute juste les commandes qu'on lui demande.
- Lieux / Classes : Pattern Factory : Les deux sont des objets génériques que l'on peut spécifier afin de créer de
  nouveaux pochoirs.

## Difficultés rencontrées

- Choix du langage (flutter non merci plus jamais)

## Améliorations possibles

- Implémentation de nouveaux Mini-jeux / Events avec des capacités plus techniques (lieu aléatoire, lieu dépendant de la
  zone précédente, etc.)
- Multijoueur !
- Implémenter un système de gratification (loot, badges, boutique pour dépenser des points)
- Ajout d’un système de combat pour augmenter l’importance des classes (+ vie joueur)
- Migration vers un environnement de développement adapté à la création d’un jeu ! (Flutter comme React en NestJS ne sont pas adaptés
  pour la création de jeux mobiles, ils sont fait pour des applications bureaucratiques)
