import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';

import { Role } from '../roles/role.entity';

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

  @ForeignKey(() => Role)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  roleId: string;

  @BelongsTo(() => Role)
  role: Role;

  @Column({
    type: DataType.JSONB,
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

  @Column({ type: DataType.STRING })
  referralCode: string;

  @Column({ allowNull: false, type: DataType.DATE })
  createdAt: Date;

  @Column({ allowNull: false, type: DataType.DATE })
  updatedAt: Date;
}
