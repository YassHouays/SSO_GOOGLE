# SSO_PROJECT
Le but de ce projet est de créer une première authentification via SSO sur google et facebook 
Authentification via Passport (Google, Facebook)

Pour réaliser ce projet, j'ai tout d'abord créer une application nodeJS, tout ce qu'il y a de plus classique à l'aide d'express.
Pour gérer la connection en SSO avec google et facebook, j'ai utiliser passport js qui permet de se connecter à service très simplement. 

Pour essayer le projet, il vous suffit de le télécharger, et d'ajouter à la racine de celui ci un fichier .env qui contient les variables suivantes : 
GOOGLECLIENTID=</br>
GOOGLECLIENTSECRET=</br>
GOOGLECALLBACKURL=http://localhost:3030/authentification/google/callback</br>
FACEBOOKCLIENTID=</br>
FACEBOOKCLIENTSECRET=</br>
FACEBOOKCALLBACKURL=http://localhost:3030/authentification/facebook/callback</br>

Ajouter bien sur vos propres informations relatives à vos comptes google développeur et facebook developpeur dans celui-ci. 
