import { Router } from "express";
import { SearchCNPJController } from "@modules/Estabelecimentos/UseCases/SearchSoaCNPJ/SearchCNPJController";


const router = Router();

const searchCNPJController = new SearchCNPJController();

router.post("/search", searchCNPJController.handle)


export { router }