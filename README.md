# SSO_PROJECT
Le but de ce projet est de créer une première authentification via SSO sur google et facebook 
Authentification via Passport (Google, Facebook)

Pour réaliser ce projet, j'ai tout d'abord créer une application nodeJS, tout ce qu'il y a de plus classique à l'aide d'express.
Pour gérer la connection en SSO avec google et facebook, j'ai utiliser passport js qui permet de se connecter à service très simplement. 

Pour essayer le projet, il vous suffit de le télécharger, et d'ajouter à la racine de celui ci un fichier .env qui contient les variables suivantes : </br>
GOOGLECLIENTID=</br>
GOOGLECLIENTSECRET=</br>
GOOGLECALLBACKURL=http://localhost:3030/authentification/google/callback</br>
FACEBOOKCLIENTID=</br>
FACEBOOKCLIENTSECRET=</br>
FACEBOOKCALLBACKURL=http://localhost:3030/authentification/facebook/callback</br>

N'oubliez pas de faire un npm install , pour créer le fichier node_modules qui contient tout ce dont nous avons besoins pour notre projet.

Ajouter bien sur vos propres informations relatives à vos comptes google développeur et facebook developpeur dans celui-ci.
Pour créer votre projet google et facebook suivre ces liens : <a href = "https://console.developers.google.com/apis/credentials">google</a> <a href="https://developers.facebook.com/apps/">facebook</a>
