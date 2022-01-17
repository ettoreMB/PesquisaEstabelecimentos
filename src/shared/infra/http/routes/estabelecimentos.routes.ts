import { ListAllEstabelecimentosController } from '@modules/Estabelecimentos/UseCases/ListAllEstabelecimentos/ListAllEstabelecimentosController';
import { SearchCNPJController } from '@modules/Estabelecimentos/UseCases/SearchSoaCNPJ/SearchCNPJController';
import { Router } from 'express';
import { ensureAuthenticated } from 'middlewares/EnsureAuthenticated';

const estabelecimentosRoutes = Router();

const searchCNPJController = new SearchCNPJController();
const listAllEstabelecimentos = new ListAllEstabelecimentosController();

estabelecimentosRoutes.post("/search", searchCNPJController.handle)

estabelecimentosRoutes.use(ensureAuthenticated);
estabelecimentosRoutes.get("/", listAllEstabelecimentos.handle)

export { estabelecimentosRoutes }