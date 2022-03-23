FROM nginx:1.15
COPY src/.vuepress/dist /etc/nginx/html
COPY conf /etc/nginx/conf.d
COPY /root/www.yansen.website_bundle.crt /etc/nginx/conf.d
COPY /root/www.yansen.website.key /etc/nginx/conf.d