import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetProfileUseCase } from "./GetProfileUseCase";

class GetProfileController {
  async handle(req: Request, res: Response): Promise<Response> {
    const id = req.user;

    const getprofileUseCase = container.resolve(GetProfileUseCase);

    const user = await getprofileUseCase.execute(id);

    return res.json(user)
  }
}

export { GetProfileController }