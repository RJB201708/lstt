FROM node
MAINTAINER Jayant
CMD .exit
#CMD bash
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
#COPY package.json /usr/src/app
#RUN npm cache clean
RUN npm install
#RUN cd ../
#COPY . /usr/src
EXPOSE 4200
CMD ["npm", "start"]
#CMD bash
