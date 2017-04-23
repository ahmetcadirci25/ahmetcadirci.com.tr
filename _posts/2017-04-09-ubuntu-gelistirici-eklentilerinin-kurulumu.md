---
title: "Ubuntu Geliştirici Ekletilerinin Kurulumu"
description: "Ubuntu kullanan geliştirciler için Sublime Text, Git, Gitkraken, Node.js ve Gulp eklentilerinin kurulumunu anlatan rehber niteliğindedir."
date: 2017-04-09 15:40:00
categories: [genel]
tags: [ubuntu]
postimg: "ubuntu-gelistirici-eklentilerinin-kurulumu.png"
---

Ubuntu kullanan geliştirciler için Sublime Text, Git, Gitkraken, Node.js ve Gulp eklentilerinin kurulumunu anlatan rehber niteliğindedir.

![Ubuntu Geliştirici Ekletilerinin Kurulumu](https://ahmetcadirci.com.tr/images/ubuntu-gelistirici-eklentilerinin-kurulumu.png "Ubuntu Geliştirici Ekletilerinin Kurulumu")

## Sublime Text Kurulumu

**Sublime Text 3 için:**

```
sudo add-apt-repository ppa:webupd8team/sublime-text-3
sudo apt-get update
sudo apt-get install sublime-text-installer
```

**Sublime Text 2 için:**

```
sudo add-apt-repository ppa:webupd8team/sublime-text-2
sudo apt-get update
sudo apt-get install sublime-text
```


## Git Kurulumu

```
sudo apt-get update
sudo apt-get install git
```

## Gitkraken (GUI Clients) Kurulumu 

[gitkraken.com](https://www.gitkraken.com/){:target="_blank"}

Anasayfada bulunan Download butonuna tıklayarak programın kurulumunu yapabilirsiniz. 

En popüler Windows, Mac ve Linux işletim sistemleri için uygun programları aşağıdaki linkten ulaşabilirsiniz.

[git-scm.com](https://git-scm.com/downloads/guis/){:target="_blank"}


## Node.js Kurulumu

```
sudo apt-get update
sudo apt-get install nodejs
sudo apt-get install npm
```

## Gulp Kurulumu 

```
sudo npm install gulp-cli -g
sudo npm install gulp -D
```

Daha fazla bilgi için kaynaklar bölünde yer alan linklerden ulaşabilirsiniz. 

### Kaynakça
1. How do I install Sublime Text 2/3?. ‎9 ‎Nisan ‎2017. http://askubuntu.com/questions/172698/how-do-i-install-sublime-text-2-3
2. How To Install Git on Ubuntu 14.04. ‎9 ‎Nisan ‎2017. https://www.digitalocean.com/community/tutorials/how-to-install-git-on-ubuntu-14-04
3. Git GUI for Windows, Mac & Linux GitKraken. ‎9 ‎Nisan ‎2017. https://www.gitkraken.com/
4. Git - GUI Clients. ‎9 ‎Nisan ‎2017. https://git-scm.com/downloads/guis/
5. How To Install Node.js on an Ubuntu 14.04 server. ‎9 ‎Nisan ‎2017. https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-an-ubuntu-14-04-server
6. gulp.js. ‎9 ‎Nisan ‎2017. http://gulpjs.com/
