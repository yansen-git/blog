FROM nginx:1.15
COPY docs/.vuepress/dist /etc/nginx/html
COPY conf /etc/nginx/conf.d