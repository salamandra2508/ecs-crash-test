FROM public.ecr.aws/lts/ubuntu:20.04

WORKDIR /usr/src/app

COPY  . .
RUN apt update -y && apt -y install curl && curl -sL https://deb.nodesource.com/setup_14.x | bash - && apt -y install nodejs && node -v
RUN npm cache clean --force && npm install --only=prod


EXPOSE 80
EXPOSE 3000

CMD  ["npm", "run", "start_container"]
