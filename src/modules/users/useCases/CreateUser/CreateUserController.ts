import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, email, username, password, isAdmin } = req.body;
    const createUserUseCase = container.resolve(CreateUserUseCase)

    await createUserUseCase.execute({ name, email, password, username, isAdmin })
    return res.status(200).send('Usuário criado com Sucesso')
  }
}

export { CreateUserController }