"use strict";
module.exports = (sequelize, DataTypes) => {
  const blogs = sequelize.define(
    "blogs",
    {
      title: DataTypes.STRING,
      authorID: DataTypes.INTEGER,
      categoryID: DataTypes.INTEGER,
      body: DataTypes.STRING
    },
    {}
  );
  blogs.associate = function(models) {
    // associations can be defined here
    blogs.belongsTo(models.authors);
    blogs.belongsTo(models.categories);
  };
  return blogs;
};
