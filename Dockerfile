# 本镜像基于pm2镜像
FROM keymetrics/pm2:latest-alpine

# 指定工作目录
WORKDIR /app

# 将当前上下文中的文件添加到指定容器的/app/目录下
# 就类似于git add .
COPY . /app

RUN yarn config set registry https://registry.npm.taobao.org/ && \
    yarn install

EXPOSE 3000

CMD [ "pm2-runtime", "start", "process.yml" ]
