import {
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';

interface IHandleExceptions {
  code: string;
  detail: string;
}

const BAD_REQUEST_CODE = '23505';

export class HandleExceptions {
  static check<T extends IHandleExceptions>(error: T) {
    if (error.code === BAD_REQUEST_CODE)
      throw new BadRequestException(error.detail);

    throw new InternalServerErrorException(
      'Unexpected errro, check server logs',
    );
  }
}
