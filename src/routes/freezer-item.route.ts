import {Router} from "express";
import {getBaseUrl} from "../controllers/freezer-item.controller";

const router = Router();

router.get('/', getBaseUrl)

export {router as freezerItemRouter};