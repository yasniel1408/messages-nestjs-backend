import { Controller, HttpCode, HttpStatus, Post, Request } from '@nestjs/common';
import { ISignOutController } from '@auth/domain/ports/primary/http/signout.controller.interface';

@Controller('auth')
export class SignOutController implements ISignOutController {
  @Post('/signout')
  @HttpCode(HttpStatus.OK)
  async whoami(@Request() request): Promise<any> {
    request.user = null; // TODO: Implementar lógica de signout, borrar el refresh token de la base de datos
    return { ok: true };
  }
}
