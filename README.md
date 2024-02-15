# L4D4 Motd

## Features of this project

- Retrieving the description of each server by ID

- Expanding the MOTD window based on screen size

- Dynamically changing the background image depending on the season

- The background features 21 random images for each season

- To modify server descriptions, use the `ServersInfo.json` file

- Docker file for deployment as a microservice behind a reverse proxy
```js
http://youdomain.com/motd/:id
```
I recommend using subdomains motd.youdomain.com

#
<img src='./public/files/preview.gif' width='100%' >


# L4D4 Motd

## Возможности данного проекта

- Получение описание каждого сервера по ID

- Растягивание motd окна в зависимости от размера экрана

- Динамически изменяет изображение фона в зависимости от времени года

- Задний фон имеет 21 рандомную картинку на каждый сезон

- Для изменения описание серверов используйте файл `ServersInfo.json`

- Файл Docker для поднятия как микросервис за обратным прокси
```js
http://твойдомен.com/motd/:id
```
Рекомендую использовать поддомен motd.твойдомен.com
