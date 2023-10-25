'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.changeColumn(
        'Users',
        'isBlocked',
        {
          type: Sequelize.BOOLEAN,
        },
        {
          transaction,
        },
      );

      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },

  async down(queryInterface, Sequelize) {
    await Promise.all([
      queryInterface.changeColumn('Users', 'isBlocked', {
        type: Sequelize.STRING,
      }),
    ]);
  },
};
