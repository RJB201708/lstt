cd ~/
cd projects/workspace/lstt/db
#Building Mongo image
sudo docker build -t mongo .
#Building container
sudo docker run -d -p 27017:27017 --name mongo -it mongo
