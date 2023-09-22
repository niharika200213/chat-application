import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../../../user/model/dto/create-user.dto';
import { LoginUserDto } from '../../../user/model/dto/login-user.dto';
import { UserI } from '../../../user/model/user.interface';

@Injectable()
export class UserHelperService {

  createUserDtoToEntity(createUserDto: CreateUserDto): UserI {
    return {
      email: createUserDto.email,
      username: createUserDto.username,
      password: createUserDto.password
    };
  }

  loginUserDtoToEntity(loginUserDto: LoginUserDto): UserI {
    return {
      email: loginUserDto.email,
      password: loginUserDto.password
    };
  }

}
