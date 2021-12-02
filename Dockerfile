FROM postgres:12

COPY ./db/init.sql /docker-entrypoint-initdb.d/