export const SEQUELIZE = 'SEQUELIZE';
export const DEVELOPMENT = 'development';
export const TEST = 'test';
export const PRODUCTION = 'production';
export const USER_REPOSITORY = 'USER_REPOSITORY';

export enum HTTP {
  OK = 200,
  FORBIDDEN = 403,
  BAD_REQUEST = 400,
  UNPROCESSABLE_ENTITY = 422,
  SERVER_ERROR = 500,
  UNAUTHORIZED = 401,
}

export enum RESPONSE {
  SUCCESS = 'success',
  ERROR = 'error',
}
