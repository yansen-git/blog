FROM nginx:1.15
COPY src/.vuepress/dist /etc/nginx/html
COPY conf /etc/nginx/conf.d
COPY /root/certificate /etc/nginx/conf.d