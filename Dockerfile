FROM nginx:1.15
cd ..
COPY yui/docs/.vuepress/dist /etc/nginx/html/yui
cd blog
COPY src/.vuepress/dist /etc/nginx/html
COPY conf /etc/nginx/conf.d