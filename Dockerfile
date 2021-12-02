FROM ubuntu:20.04 AS build

RUN apt-get update && \
    apt-get install -y wget curl && \
    rm -rf /var/lib/apt/lists/*

# Install Node
RUN curl -fsSL https://deb.nodesource.com/setup_14.x | bash - && \
    apt-get install -y nodejs

# Install Hugo
RUN wget https://github.com/gohugoio/hugo/releases/download/v0.89.4/hugo_extended_0.89.4_Linux-64bit.tar.gz && \
    tar -xvzf hugo_extended_0.89.4_Linux-64bit.tar.gz -C /usr/local/bin/ hugo

WORKDIR /site

COPY package*.json ./

RUN npm install

COPY . .

RUN hugo

FROM nginx:1.21

RUN apt-get update && \
    apt-get install -y apache2-utils

COPY docker/nginx.conf /etc/nginx/nginx.conf

COPY --from=build /site/public/ /usr/share/nginx/html/

COPY --from=build /site/docker/entrypoint.sh/ /

RUN chmod +x /entrypoint.sh

ENTRYPOINT [ "/entrypoint.sh" ]
