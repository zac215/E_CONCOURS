# E_CONCOURS

Ce projet comporte l'API du module de correction automatique de e_concours et d'obtention des résultats. 

## Pré-requis

Avoir MongoDB fonctionnant sur le port 27017.
Créer une base de données nommée e_concours avec une collection nommée concours.
Importer dans la collection concours les données exemples contenues dans le fichier model/concours.json. Ce fichier comporte des données exemples notamment deux concours.

## Fonctionnement

La liste des concours est obtenu par une requête GET sur http://localhost:3000/concours

Les informations sur un concours sont obtenus par une requête GET sur http://localhost:3000/concours/id , le paramètre id étant l'id du concours concerné.

La correction d'un concours s'effectue à travers une requête PUT sur http://localhost:3000/concours/id , le paramètre id étant l'id du concours concerné. La réponse est la liste des copies dess candidats ayant une note supérieure ou égale à la moyenne.


