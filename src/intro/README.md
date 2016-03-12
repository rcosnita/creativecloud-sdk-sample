<!-- MarkdownTOC -->

- Partea 1 - Introducere workshop
    - Activare snippets in Sublime
- Creare editorului de imagini
    - Customizarea editorului de imagini

<!-- /MarkdownTOC -->

# Partea 1 - Introducere workshop

In aceasta parte introductiva din workshop vom crea o aplicatie care permite editarea de poze (aplicare de efecte, imbunatatire lumini, etc ...).

Pentru a putea incepe aceasta parte se presupune ca au fost urmati pasii de configurare a solutiei [Cerinte workshop](../../README.md)

## Activare snippets in Sublime

Pe durata intregului workshop vom folosi snippets de cod pentru un development mai rapid. Pentru activarea acestor snippets in Sublime text urmati pasii de mai jos:

### Mac OS X

```bash
cd creativecloud-sdk-sample
cp -R `printf "%q\n" "$(pwd)"`/src/ccsdk_snippets ~/Library/Application\ Support/Sublime\ Text\ 3/Packages/User/
```

### Windows

```bash
cd creativecloud-sdk-sample
cp -R src/ccsdk_snippets ~/AppData/Roaming/Sublime\ Text\ 3/Packages/User/
```

# Creare editorului de imagini

Pornind de la codul existent in **src/intro/intro.html** vom adauga suport pentru editorul de imagini furnizat de **Creative Cloud SDK**.

1. Import CC SDK. (ccsdk-import)
1. Activarea editorului. (ccsdk-activate-editor)
1. Activarea uneltei de crop. (ccsdk-activate-crop)
1. Activarea uneltei de focus. (ccsdk-activate-focus)

In acest moment exista foarte multe unelte care pot fi activate si folosite pentru editarea imaginilor. Pentru mai multe informatii consultati documentatia oficiala (https://creativesdk.adobe.com/docs/web/#/articles/gettingstarted/index.html).

## Customizarea editorului de imagini

In acest moment, datorita faptului ca editorul de imagini este oferit ca si componenta parte din Creative Cloud SDK nivelul de customizare al aspectului se rezuma doar la clase css predefinite.

Pentru a vedea care sunt aceste clase, puteti consulta documentatia oficiala (https://creativesdk.adobe.com/docs/web/#/articles/gettingstarted/index.html).