FROM postgres:12

COPY ./db/setup.sql /docker-entrypoint-initdb.d/