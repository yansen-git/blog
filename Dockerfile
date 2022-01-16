FROM nginx:1.15
COPY src/.vuepress/dist /etc/nginx/html
COPY docs/.vuepress/dist /etc/nginx/html/yui
COPY conf /etc/nginx/conf.d