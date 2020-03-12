sequelize model:generate --name authors  --attributes name:string,biography:string,imageurl:string
sequelize model:generate --name categories --attributes name:string
sequelize model:generate --name blogs --attributes title:string,authorID:integer,categoryID:integer,body:string