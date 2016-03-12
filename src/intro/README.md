# Partea 1 - Introducere workshop

In aceasta parte introductiva din workshop vom crea o aplicatie care permite editarea de poze (aplicare de efecte, imbunatatire lumini, etc ...).

Pentru a putea incepe aceasta parte se presupune ca au fost urmati pasii de configurare a solutiei [Cerinte workshop](../../README.md)

## Activare snippets in Sublime

Pe durata intregului workshop vom folosi snippets de cod pentru un development mai rapid. Pentru activarea acestor snippets in Sublime text urmati pasii de mai jos:

### Mac OS X

```bash
cd creativecloud-sdk-sample
ln -s src/sublime_snippets ~/Library/Application\ Support/Sublime\ Text\ 3/Packages/User/creativecloud-snippets
```

### Windows

```bash
cd creativecloud-sdk-sample
cp -R src/sublime_snippets ~/AppData/Roaming/Sublime\ Text\ 3/Packages/User 
```

# Creare editor imagini

Pornind de la codul existent in **src/intro/intro.html** vom adauga suport pentru editorul de imagini furnizat de **Creative Cloud SDK**.