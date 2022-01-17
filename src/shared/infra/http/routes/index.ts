import { Router } from "express";
import { SearchCNPJController } from "@modules/Estabelecimentos/UseCases/SearchSoaCNPJ/SearchCNPJController";
import { ListAllEstabelecimentosController } from "@modules/Estabelecimentos/UseCases/ListAllEstabelecimentos/ListAllEstabelecimentosController";
import { userRoutes } from "./user.routes";
import { authenticateRoutes } from "./authenticate.routes";
import { estabelecimentosRoutes } from "./estabelecimentos.routes";


const router = Router();

router.use('/estabelecimentos', estabelecimentosRoutes)
router.use('/users', userRoutes);
router.use('/authenticate', authenticateRoutes)


export { router }