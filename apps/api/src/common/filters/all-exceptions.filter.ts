import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const status =
      exception.getStatus?.() ??
      exception.status ??
      HttpStatus.INTERNAL_SERVER_ERROR;

    const message =
      exception.getResponse?.() ??
      exception.message ??
      'Internal server error';

    const errorResponse =
      typeof message === 'string'
        ? { message, statusCode: status }
        : message;

    response.status(status).json({
      success: false,
      statusCode: status,
      error: errorResponse,
      timestamp: new Date().toISOString(),
    });
  }
}
