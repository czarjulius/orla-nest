import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Role extends Model<Role> {
  @Column({
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataType.INTEGER,
  })
  id: number;

  @Column({
    type: DataType.STRING,
  })
  name: string;

  @Column({
    type: DataType.STRING,
  })
  description: string;

  @Column({ allowNull: false, type: DataType.DATE })
  createdAt: Date;

  @Column({ allowNull: false, type: DataType.DATE })
  updatedAt: Date;
}
