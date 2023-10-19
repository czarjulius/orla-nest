import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
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
  firstName: string;

  @Column({
    type: DataType.STRING,
  })
  lastName: string;

  @Column({
    type: DataType.STRING,
    unique: true,
  })
  email: string;

  @Column({
    type: DataType.STRING,
  })
  address: string;

  @Column({
    type: DataType.STRING,
  })
  phoneNumber: string;

  @Column({
    type: DataType.STRING,
  })
  password: string;

  @Column({
    type: DataType.STRING,
  })
  roleId: string;

  @Column({
    type: 'jsonb',
  })
  meta: string;

  @Column({
    allowNull: false,
    type: DataType.DATE,
  })
  tokenIssueTime: Date;

  @Column({
    type: DataType.STRING,
  })
  isBlocked: string;

  @Column({ type: 'varchar' })
  referralCode: string;

  @Column({ allowNull: false, type: DataType.DATE })
  createdAt: Date;

  @Column({ allowNull: false, type: DataType.DATE })
  updatedAt: Date;
}
