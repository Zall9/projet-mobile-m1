# Ov3r-T4le

## But du jeu

grimper dans le ldb

déplacement entre cartes, qui correspondent à des lieux ou parties de lieux

parfois au passage d'une carte, un minijeu se déclenche.

quand le minijeu se termine on gagne des points

## Installation

## Fonctionnalités

ldb

déplacement entre cartes (zones) (générique, donc possibilité d'en rajouter (voir en dessous comment faire))

mini jeux en tout genre (générique, donc possibilité d'en rajouter (voir en dessous comment faire))

### Rajouter des lieux

<ol>
<li> Dupliquer un lieu déjà existant (comme ForestTent) (dans <a href="https://github.com/Zall9/projet-mobile-m1/tree/main/model/Events/EventList/">./model/Events/EventList/</a>)</li>
<li> Le remplir avec ses propres infos</li>
<li> Rajouter <a href="https://github.com/Zall9/projet-mobile-m1/tree/main/public/static/images/events/">./public/static/images/events/</a> l'image que vous voulez utiliser</li>
<li> Rajouter dans <a href="https://github.com/Zall9/projet-mobile-m1/tree/main/model/Events/EventController.ts">EventController</a> dans eventIdList l'id que vous avez donné à votre lieu, si celui-ci est accessible de n'importe où</li>
<li> Si vous voulez que votre lieu soit accessible depuis un autre lieu spécifique, modifiez la destination d'un des output de cet autre lieu spécifique</li>
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
  mouvements d'ennemis), cette attribut gère le nombre de ms qu'il y a entre chaque rafraichissement (
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
  réécrivez la pour faire en sorte qu'elle appelle bien le contructeur de votre CaseTemplate)
- playerInput : c'est ici que vous gérez les actions du joueur : c'est à vous de définir les différentes actions que le
  joueur peut effectuer. Ca peut être des mouvements comme dans
  le <a href="https://github.com/Zall9/projet-mobile-m1/tree/main/model/Minigames/MinigameList/Panier.tsx">jeu du
  panier</a>, ou des coordonnées avec le jeu
  du <a href="https://github.com/Zall9/projet-mobile-m1/tree/main/model/Minigames/MinigameList/Memory.tsx">Memory</a>.
- evolve : si vous avez des actualisations à effectuer sans l'intervention du joueur (comme la chute des cerises dans
  le <a href="https://github.com/Zall9/projet-mobile-m1/tree/main/model/Minigames/MinigameList/Panier.tsx">jeu du
  panier</a>) mettez les ici. La fonction sera appelée toutes les *refreshInterval* ms.

Tous les attributs et fonctions dont nous n'avons pas parlé, n'y touchez pas.

## Architecture

### Technologies

Principale : React X Next.js

Secondaires :

- Midjourney : Génération des images détaillées du jeu (e.g. les lieux)
- Firebase : Stockage des scores des joueurs (Database)

### Patterns spécifiques

- Mini-jeux : Pattern Invoker : La page des mini-jeux gère un mini-jeu générique, mais ne connait rien du mini-jeu. De
  même, le mini-jeu ne connait pas ce qu'il y a autour, il exécute juste les commandes qu'on lui demande
- Lieux / Classes : Pattern Factory : Les deux sont des objets génériques que l'on peut spécifier afin de créer de
  nouveaux pochoirs.

## Difficultés rencontrées

## Améliorations possibles

