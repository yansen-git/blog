FROM nginx:1.15
COPY blog/src/.vuepress/dist /etc/nginx/html
COPY yui/docs/.vuepress/dist /etc/nginx/html/yui
COPY conf /etc/nginx/conf.d