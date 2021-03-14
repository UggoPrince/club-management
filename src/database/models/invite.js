const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Invite extends Model {
    static associate(models) {
      Invite.belongsTo(models.User, {
        as: "invite",
        foreignKey: "inviteeId",
        foreignKeyConstraint: true
      });
      Invite.belongsTo(models.User, {
        as: "sent_invite",
        foreignKey: "adminId",
        foreignKeyConstraint: true
      });
      Invite.belongsTo(models.Club, {
        as: "club",
        foreignKey: "clubId",
        foreignKeyConstraint: true
      });
    }
  };
  Invite.init({
    adminId: DataTypes.INTEGER,
    inviteeId: DataTypes.INTEGER,
    clubId: DataTypes.INTEGER,
    accepted: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Invite',
    tableName: 'invites'
  });
  return Invite;
};