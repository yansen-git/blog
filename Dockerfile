FROM nginx:1.15
# 设置环境变量 url
ENV yui /var/lib/jenkins/workspace/blog/default/yui
ENV blog /var/lib/jenkins/workspace/blog/default/blog
# 读取 url 中的目录，并切换工作空间到对应目录
WORKDIR ${yui}
RUN pwd
COPY docs/.vuepress/dist /etc/nginx/html/yui
# 读取 url 中的目录，并切换工作空间到对应目录
WORKDIR ${blog}
RUN pwd
COPY src/.vuepress/dist /etc/nginx/html
COPY conf /etc/nginx/conf.d