import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost', // Update to match your MySQL settings
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'test_db',
      autoLoadModels: true,
      synchronize: true, // Auto-create tables
    }),
    UsersModule,
    AuthModule,
  ],
})
export class AppModule {}
