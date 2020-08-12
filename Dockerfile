from ubuntu:20.04

ENV NODE_VERSION=12.18.3
ENV NVM_DIR=/root/.nvm
ENV PATH="/root/.nvm/versions/node/v${NODE_VERSION}/bin/:${PATH}"

RUN apt update
RUN apt install -y curl nginx
# RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.35.3/install.sh | bash


# RUN . "$NVM_DIR/nvm.sh" && nvm install ${NODE_VERSION}
# RUN . "$NVM_DIR/nvm.sh" && nvm use v${NODE_VERSION}
# RUN . "$NVM_DIR/nvm.sh" && nvm alias default v${NODE_VERSION}


RUN mkdir -p /var/www/arronmoore.com/
RUN mkdir -p /etc/nginx/sites-enabled/
RUN mkdir -p /etc/nginx/sites-available/

COPY ./arronmoore.com /var/www/arronmoore.com/
COPY ./nginx.conf /etc/nginx/
COPY ./arronmoore.conf /etc/nginx/sites-available

RUN ln -s /etc/nginx/sites-available/arronmoore.conf /etc/nginx/sites-enabled/arronmoore.conf

WORKDIR /var/www/arronmoore.com/

#  RUN npm install

# RUN npx gatsby build

CMD ["nginx", "-g", "daemon off;"]