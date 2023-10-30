'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstName: {
        type: Sequelize.STRING,
      },
      lastName: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      phoneNumber: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
      referralCode: {
        type: Sequelize.STRING,
      },
      roleId: {
        type: Sequelize.INTEGER,
        onDelete: 'SET NULL',
        references: {
          model: 'Roles',
          key: 'id',
        },
      },
      meta: {
        type: Sequelize.JSONB,
      },
      isBlocked: {
        type: Sequelize.BOOLEAN,
        default: false,
      },
      tokenIssueTime: {
        type: Sequelize.DATE,
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  },
};
