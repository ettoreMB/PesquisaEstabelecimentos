import { UsersRepositoryInMemory } from "@modules/users/repositories/inMemory/UsersRepositoryInMemory";
import { CreateUserUseCase } from "./CreateUserUseCase";

let createUserUseCase: CreateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
beforeEach(() => {
  usersRepositoryInMemory = new UsersRepositoryInMemory();
  createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
})


describe('Search CNPJ Test', () => {
  it('Should Able to Create an User', async () => {
    const user = await createUserUseCase.execute({
      name: 'User',
      email: 'email@email',
      username: 'user_username',
      password: 'test@test',
      isAdmin: true
    })

    expect(user).toHaveProperty("id")
  })


})