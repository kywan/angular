# Angular librairy

Site réalisé sous angulars devant respecter ces conditions :

  

      **** TP Angular ****
    
    *** FRONT ***
    
    Réaliser une micro-application angular « bookApp »
    
    L’application proposera deux routes: /books et /authors
    
    la route /books affichera un tableau de livres (titre, disponibilité).
    
    Proposer un filtre par disponiblité au dessus de la liste des livres.
    
    Ce filtre, s'il est activé, n'affichera que les livres disponibles.
    
    Le click sur le titre du livre, affichera dans la zone détail les informations suivantes:
    
    - auteur, nombre de pages, année de parution, nombre d’emprunts
    
    La zone de détail affichera un contrôle (bouton ou checkbox) permettant de modifier l’état de disponibilité du livre.
    
    La modification de la disponibilité du livre impactera la liste des livres.
    
    L’événement "emprunt d’un livre" devra incrémenter la propriété nbRent du livre.
    
    *** BACK ***
    
    Se baser sur le fichier server.js utilisé durant la formation.
    
    Le serveur disposera de:
    
    - la source de données: tableau de livres ayant les propriétés suivantes:
    
    id, author, title, publicationDate, available, nbPages, nbRent
    
    - les routes suivantes: GET /books et GET /authors
    
    ** Points attendus **
    
    3 composants au moins
    
    1 service permettant d’obtenir les données par requête ajax
    
    Communication entre composants
    
    Binding
    
    Routing
## Réalisé :

 - [x] 3 Composants
	 - [x] ListBook
	 - [x] book
	 - [x] Menu
	 - [ ] Auteur (non fait)
 - [ ] 1 services
 - [ ] communication entre composant
 - [x] Binding
 - [x] Routing
 - [x] Server.js
	 - [x] avec commande get ET put
	 - [x] avec systeme de log
 - [x] Systeme pour emprunter et rendre un livre
	 - [x] mise en forme dynamique
	 

![enter image description here](https://raw.githubusercontent.com/kywan/angular/master/img/books.PNG)
![enter image description here](https://raw.githubusercontent.com/kywan/angular/master/img/detail.PNG)
![](https://raw.githubusercontent.com/kywan/angular/master/img/full.PNG)
![enter image description here](https://raw.githubusercontent.com/kywan/angular/master/img/inussage.PNG)

