FROM nginx

LABEL maintainer=kongchao

ARG PROJECT_DIR="vue3-lazyly-admin"

COPY --chown=nginx:nginx ${PROJECT_DIR} /usr/share/nginx/html
COPY /docker/default.conf /etc/nginx/conf.d/

WORKDIR /usr/share/nginx/html
