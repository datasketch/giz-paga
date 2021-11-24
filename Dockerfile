FROM golang:1.16-alpine AS setup

ARG HUGO_BUILD_TAGS=extended
ARG CGO=1
ENV CGO_ENABLED=${CGO}
ENV GOOS=linux
ENV GO111MODULE=on

# gcc/g++ are required to build SASS libraries for extended version
RUN apk update && \
    apk add --no-cache gcc g++ musl-dev git && \
    go get github.com/magefile/mage

WORKDIR /go/src/github.com/gohugoio/hugo

RUN git clone --depth=1 https://github.com/gohugoio/hugo.git .

RUN mage hugo && mage install

FROM node:12-alpine AS build

COPY --from=setup /go/bin/hugo /usr/bin/hugo

# libc6-compat & libstdc++ are required for extended SASS libraries
# ca-certificates are required to fetch outside resources (like Twitter oEmbeds)
RUN apk update && \
    apk add --no-cache ca-certificates libc6-compat libstdc++ git

WORKDIR /site

COPY package*.json ./*

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
