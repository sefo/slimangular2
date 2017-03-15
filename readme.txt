lancer l'api sur le port 80
composer start

dans l'appli angular:

travailler en dev port 4200 avec watcher
npm run start

build prod
ng build --prod --aot
npm run dev (lance ng build --watch) pour développer sans lancer de server lite.
(angular-cli.json a été modifié pour compiler dans ../ au lieu de dist)

A faire:

Changer le .htaccess ou le document root pour le faire pointer vers /angular/dist => marche pas, trouve pas les resources