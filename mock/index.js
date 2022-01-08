image: node:alpine
stages:
    - install
    - build
    - deploy
cache:
    key: modules-cache
paths:
    - node_modules
    - dist
# 这里是我们的第一个任务，它的名字叫job_install，这个名字是可以随便写的，也可以用中文
before_script:
    #- docker version
job_install:
    stage: install # 这里代表我们当前的任务处于install阶段
tags:
    - vue3 # 这里是当前任务的标签，标签是我们后面在gitlab-runner中定义的
script: # 每个任务都必须有script，顾名思义就是执行的语句
#- cnpm install # 前面说的我们处于一个有node环境的虚拟机，那这句话就是在这个虚拟机的我们当前项目里执行npm install
- echo "install...."
# 这是我们的第二个任务，逻辑和上面的第一个任务都一样，就不做详细说明
job_build:
    stage: build
tags:
    - vue3
script:
    #- cnpm run build
- echo "build...."
# 这是我们的第三个任务，因为运行到这里项目的打包已经完成，我们即将用docker创建新的容器部署项目
job_deploy:
    stage: deploy
image: docker # 因为这里我们用到docker指令所以要把node环境切换到docker
tags:
    - vue3
script:
    - echo "deploy...."
- docker build -t myvue .
    #- if [ $(docker ps -aq --filter name=myvue-main) ];then docker rm -f myvue-main;fi
#- docker run -d -p 8080:8080 --name=myvue-main myvue
