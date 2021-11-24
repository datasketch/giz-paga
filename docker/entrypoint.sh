#!/bin/bash

set -e

if [ -z $AUTH_USERNAME ]; then
    echo >&2 "AUTH_USERNAME must be set"
    exit 1
fi

if [ -z $AUTH_PASSWORD ]; then
    echo >&2 "AUTH_PASSWORD must be set"
    exit 1
fi

htpasswd -bBc /etc/nginx/.htpasswd $AUTH_USERNAME $AUTH_PASSWORD

exec nginx -g "daemon off;"