# L4D4 Motd

## Features of this project

- Server data (name, ip, port) is passed directly in the URL, no database or config file

- Two modes: `versus` and `coop`, two languages: `ru` and `en`

- Expanding the MOTD window based on screen size

- Dynamically changing the background image depending on the season

- The background features 21 random images for each season

- Docker file for deployment as a microservice behind a reverse proxy

```
http://youdomain.com/motd/:mode/:lang?name=...&ip=...&port=...
```

Example:

```
http://youdomain.com/motd/versus/ru?name=Vortex%201%20%7C%20Versus&ip=178.22.49.218&port=38001
```

I recommend using subdomains motd.youdomain.com

#
<img src='./public/files/preview.gif' width='100%' >


# L4D4 Motd

## Возможности данного проекта

- Данные сервера (название, ip, порт) передаются прямо в URL, без базы и файлов конфигурации

- Два режима: `versus` и `coop`, два языка: `ru` и `en`

- Растягивание motd окна в зависимости от размера экрана

- Динамически изменяет изображение фона в зависимости от времени года

- Задний фон имеет 21 рандомную картинку на каждый сезон

- Файл Docker для поднятия как микросервис за обратным прокси

```
http://твойдомен.com/motd/:mode/:lang?name=...&ip=...&port=...
```

Пример:

```
http://твойдомен.com/motd/versus/ru?name=Vortex%201%20%7C%20Versus&ip=178.22.49.218&port=38001
```

Рекомендую использовать поддомен motd.твойдомен.com
