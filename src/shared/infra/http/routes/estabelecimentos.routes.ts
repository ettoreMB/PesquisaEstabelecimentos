import { ListAllEstabelecimentosController } from '@modules/Estabelecimentos/UseCases/ListAllEstabelecimentos/ListAllEstabelecimentosController';
import { SearchCNPJController } from '@modules/Estabelecimentos/UseCases/SearchSoaCNPJ/SearchCNPJController';
import { ViewEstabelecimentoController } from '@modules/Estabelecimentos/UseCases/ViewEstabelecimento/ViewEstabelecimentoController';
import { Router } from 'express';
import { ensureAuthenticated } from '../../../../middlewares/EnsureAuthenticated';

const estabelecimentosRoutes = Router();

const searchCNPJController = new SearchCNPJController();
const listAllEstabelecimentos = new ListAllEstabelecimentosController();
const viewEstabelecimento = new ViewEstabelecimentoController();

// estabelecimentosRoutes.use(ensureAuthenticated);
estabelecimentosRoutes.post("/search", searchCNPJController.handle)
estabelecimentosRoutes.get("/", listAllEstabelecimentos.handle)
estabelecimentosRoutes.get("/:cnpj", viewEstabelecimento.handle)

export { estabelecimentosRoutes }