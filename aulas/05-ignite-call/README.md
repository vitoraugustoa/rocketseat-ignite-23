## Utilizando MySql no Docker
# Para instalar o mysql e configurar o comando

# Comando utilizado para rodar o Docker: 
docker run --name mysql -e MYSQL_ROOT_PASSWORD=docker -p 3306:3306 mysql:latest

# Comando utilizado para iniciar o container 
docker start mysql

# Comando utilizado para parar o container: 
docker stop mysql