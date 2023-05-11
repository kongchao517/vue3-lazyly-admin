FROM nginx

LABEL maintainer=kongchao

ARG PROJECT_DIR="vue3-lazyly-admin"

COPY --chown=nginx:nginx ${PROJECT_DIR} /usr/share/nginx/html/release
COPY default.conf /etc/nginx/conf.d/

WORKDIR /usr/share/nginx/html/release
