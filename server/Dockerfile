FROM node:latest
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json yarn.lock /usr/src/app/
COPY yarn.lock /usr/src/app/
RUN yarn
COPY . /usr/src/app
EXPOSE 9001
CMD [ "yarn", "start" ]