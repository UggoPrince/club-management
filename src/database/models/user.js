/* eslint-disable no-param-reassign */
import bcrypt from 'bcryptjs';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Club, {
        as: "club",
        foreignKey: "adminId",
        foreignKeyConstraint: true
      });
      User.hasMany(models.Invite, {
        as: "invites",
        foreignKey: "inviteeId",
        foreignKeyConstraint: true
      });
      User.hasMany(models.Invite, {
        as: "sent_invites",
        foreignKey: "adminId",
        foreignKeyConstraint: true
      });
    }
  };
  User.init({
    name: DataTypes.STRING,
    userName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
  });

  User.beforeCreate(async (user) => {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;
    user.email = user.email.toLowerCase();
  });

  User.prototype.comparePassword = (password, dbPassword) => {
    return bcrypt.compareSync(password, dbPassword);
  };

  return User;
};