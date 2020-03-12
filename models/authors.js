'use strict';
module.exports = (sequelize, DataTypes) => {
  const authors = sequelize.define('authors', {
    name: DataTypes.STRING,
    biography: DataTypes.STRING,
    imageurl: DataTypes.STRING
  }, {});
  authors.associate = function(models) {
    // associations can be defined here
  };
  return authors;
};