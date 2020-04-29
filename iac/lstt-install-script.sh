cd ~/
cd projects/workspace/lstt
#Building Image
sudo docker build -t lstt-node-image .
#Running Container
sudo docker run --name lstt-node-container -it lstt-node-image

#sudo docker run -d -p 4200:4200 --name rtls-node-container rtls-node-image
#sudo docker run -d -p 4200:4200 --name rtls-node-container -it rtls-node-image

