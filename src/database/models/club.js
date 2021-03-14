const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Club extends Model {
    static associate(models) {
      Club.belongsTo(models.User, {
        as: "owner",
        foreignKey: "adminId",
        foreignKeyConstraint: true
      });
      Club.hasOne(models.Invite, {
        as: "invite",
        foreignKey: "clubId",
        foreignKeyConstraint: true
      });
    }
  };
  Club.init({
    adminId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Club',
    tableName: 'clubs',
  });
  return Club;
};