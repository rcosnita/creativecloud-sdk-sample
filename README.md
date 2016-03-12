<!-- MarkdownTOC -->

- Unleash your creativity with Adobe Creative SDK
    - Introducere
    - Configurare

<!-- /MarkdownTOC -->


# Unleash your creativity with Adobe Creative SDK

![Creative Cloud logo - picture taken from http://www.premiumbeat.com](https://raw.githubusercontent.com/rcosnita/creativecloud-sdk-sample/master/doc/images/AdobeCC.jpg)

## Introducere

Creative Cloud reprezinta solutia Adobe de trecere catre un model subscription based prin intermediul caruia clientii pot beneficia mult mai rapid de feature-uri noi (e.g functionalitati noi de Photoshop sau Premiere).

Pe langa modelul de pricing, Adobe ofera in acest moment si un API care permite dezvoltatorilor sa creeze aplicatii noi care pot folosi programatic functionalitati din Photoshop, Illustrator, Premiere sau orice alt produs din suita Creative Cloud.

Pe durata acestui workshop, vom crea o aplicatie care utilizeaza Adobe Creative SDK.

![Creative Cloud SDK - picture taken from https://creativesdk.adobe.com](https://raw.githubusercontent.com/rcosnita/creativecloud-sdk-sample/master/doc/images/AdobeCreativeSdk.png)

## Configurare

### Configurare OS

Inainte de a putea incepe acest workshop fiecare participant trebuie sa urmeze urmatorii pasi pentru a putea avea toate dependintele instalate:

1. Instalati [nodejs](https://nodejs.org/en/download/stable/)
    1. In functie de platforma folosita veti alege binarul compatibil (e.g Pentru Mac OS X veti alege https://nodejs.org/dist/v5.8.0/node-v5.8.0.pkg)
    1. Dupa ce ati instalat node, incercati din linie de comanda (Windows -> cmd, sau Mac OS X -> Terminal):
        
        ```bash
        node -v # va afisa v5.x.x in functie de versiunea instalata.
        ```

1. Instalati [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
1. Pentru usurinta de dezvoltare, este de asemenea nevoie sa instalati [Sublime Text 3](https://www.sublimetext.com/3).
    1. In functie de platforma folosita veti alege binarul corespunzator (e.g Pentru Mac OS X veti alege https://download.sublimetext.com/Sublime%20Text%20Build%203103.dmg).

### Configurare solutie

In continuare, trebuie urmati pasii de mai jos pentru a avea solutia de la care vom porni configurare pe sistemul vostru:

1. Deschideti un terminal specific sistemului de operare (!!!! Pentru windows folositi git bash).
1. Executati comenzile de mai jos:
    
    ```bash
    cd ~
    git clone https://github.com/rcosnita/creativecloud-sdk-sample.git
    cd creativecloud-sdk-sample
    npm install -d
    node node_modules/.bin/http-server .
    open http://localhost:8080/intro/intro.html (pentru Windows sau Linux deschideti URL-ul din Chrome)
    ```