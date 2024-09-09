import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model/user.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async addUser(name: string, email: string, phone: string): Promise<User> {
    return this.userModel.create({ name, email, phone });
  }

  async getUser(id: number): Promise<User> {
    return this.userModel.findByPk(id);
  }
}
