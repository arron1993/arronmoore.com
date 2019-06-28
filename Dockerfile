from nginx:latest

RUN mkdir -p /var/www/

copy ./src/ /var/www/
copy ./nginx/ /etc/nginx/

RUN ln -s /etc/nginx/sites-available/arronmoore.conf /etc/nginx/sites-enabled/arronmoore.conf
