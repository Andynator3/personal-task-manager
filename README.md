# Personal Task Manager 🚀
**Projet Master EISI - Méthodes Agiles & Management d'Équipe**

## 1. Vision du Produit
Une application de gestion de tâches personnelle simplifiée, permettant une synchronisation fluide entre une interface Web (Angular) et une API robuste (Spring Boot). L'objectif est d'offrir une expérience utilisateur intuitive pour organiser son quotidien professionnel et personnel.

---

## 2. Product Backlog (Méthode MoSCoW)

### 🔴 Must Have (Indispensable pour le MVP)
- [ ] **US01** : Créer une tâche avec un titre et une description (API + Web).
- [ ] **US02** : Lister les tâches en cours sur le tableau de bord Angular.
- [ ] **US03** : Marquer une tâche comme terminée ou la supprimer définitivement.

### 🟡 Should Have (Important)
- [ ] **US04** : Assigner une priorité (Basse, Moyenne, Haute) avec un code couleur visuel.
- [ ] **US05** : Ajouter une date d'échéance (Due Date) aux tâches.
- [ ] **US06** : Sécurisation des données via authentification (JWT).

### 🟢 Could Have (Bonus / Nice to have)
- [ ] **US07** : Filtrage dynamique des tâches par priorité ou par date sur le front.
- [ ] **US08** : Mode sombre (Dark Mode) pour le confort utilisateur.

### ⚪ Won't Have (Hors périmètre actuel)
- [ ] Notifications push en temps réel.

---

## 3. Architecture Technique & Choix SI
Le projet utilise une architecture découplée pour garantir une maintenance facilitée et une scalabilité future (version mobile prévue) :
- **Backend :** Java 21 / Spring Boot 3 (API REST)
- **Frontend Web :** Angular 17+ (Architecture par composants)
- **Base de données :** PostgreSQL (Persistence des données)
- **Gestionnaire de version :** Git avec stratégie **Gitflow**

---

## 4. Organisation du Dépôt & Workflow Git
Nous appliquons la méthodologie Gitflow pour assurer la stabilité du code :
- `main` : Version stable et livrable (Production).
- `develop` : Branche d'intégration des fonctionnalités.
- `feat/nom-us` : Branches éphémères pour chaque User Story.

### Structure du projet :
```text
/personal-task-manager
  ├── /backend-api   (Spring Boot + .gitignore spécifique)
  ├── /frontend-web  (Angular + .gitignore spécifique)
  └── README.md      (Documentation principale)

5. Guide d'installation rapide
   Backend (Spring Boot)
   Aller dans cd backend-api
   Lancer : ./mvnw spring-boot:run
   Frontend (Angular)
   Aller dans cd frontend-web
   Lancer : npm install puis ng serve
6. Rétrospective (Étape 5 du Mini-Projet)
   Cette section sera complétée à la fin du Sprint.
   Ce qui a bien marché : [À remplir]
   Ce qu'on améliorerait : [À remplir]
   Ce qu'on garderait : [À remplir]