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
cp -R src/ccsdk_snippets ~/AppData/Roaming/Sublime\ Text\ 3/Packages/User 
```

# Creare editor imagini

Pornind de la codul existent in **src/intro/intro.html** vom adauga suport pentru editorul de imagini furnizat de **Creative Cloud SDK**.

1. Import aviary sdk. (ccsdk-import)
1. Enable image editor. (ccsdk-feather)