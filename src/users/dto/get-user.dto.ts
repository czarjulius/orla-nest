export interface GetUsersInterface {
  limit: number;
  id: number;
  roleId: number;
  page: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  referralCode: string;
  isBlocked: boolean;
}
