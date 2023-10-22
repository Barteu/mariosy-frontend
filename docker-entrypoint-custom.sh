#!/usr/bin/env sh
set -eu

if [ -z "$NG_BACKEND_API_URL" ]
then
    echo "NG_BACKEND_API_URL is not defined"
else 
    echo "NG_BACKEND_API_URL is defined"
    envsubst '${NG_BACKEND_API_URL}' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf
fi

exec "$@"