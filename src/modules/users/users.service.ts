import { Injectable, Inject } from '@nestjs/common';
import { User } from './user.entity';
import { UserDto } from './dto/user.dto';
import { USER_REPOSITORY } from '../../core/constants';
import { getPaginatedRecords } from '../../core/helpers/paginate.helper';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof User, // private readonly paginateRecordsHelper: PaginateRecords,
  ) {}

  async create(user: UserDto): Promise<User> {
    return await this.userRepository.create<User>(user);
  }
  async findAll(): Promise<any> {
    const result = await getPaginatedRecords(
      User,
      {
        page: 1,
        limit: 10,
        order: 'ASC',
      },
      {
        where: {
          isBlocked: false,
        },
        ignoreCount: true,
      },
    );
    return result;
    // return await this.userRepository.findAll<User>({
    //   attributes: { exclude: ['password', 'meta'] },
    // });
    // return await this.userRepository.findAll<User>({
    //   attributes: { exclude: ['password', 'meta'] },
    // });
  }

  async findOneByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne<User>({ where: { email } });
  }

  async findOneById(id: number): Promise<User> {
    return await this.userRepository.findOne<User>({ where: { id } });
  }
}
