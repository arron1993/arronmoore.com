FROM node:12.18.3


RUN apt update
RUN apt install -y nginx

RUN mkdir -p /var/www/arronmoore.com/
RUN mkdir -p /etc/nginx/sites-enabled/
RUN mkdir -p /etc/nginx/sites-available/

COPY ./arronmoore.com /var/www/arronmoore.com/
COPY ./nginx.conf /etc/nginx/
COPY ./arronmoore.conf /etc/nginx/sites-available

RUN ln -s /etc/nginx/sites-available/arronmoore.conf /etc/nginx/sites-enabled/arronmoore.conf

WORKDIR /var/www/arronmoore.com/

RUN npm install

RUN npx gatsby build

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]