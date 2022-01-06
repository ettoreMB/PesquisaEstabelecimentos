import { Router } from "express";
import { SearchCNPJController } from "modules/Estabelecimentos/UseCases/SearchSoaCNPJ/SearchCNPJController";
import { soaApi } from "shared/container/providers/SOAWebServices/soaApi";

const router = Router();

const searchCNPJController = new SearchCNPJController();

router.post("/search", searchCNPJController.handle)


export { router }