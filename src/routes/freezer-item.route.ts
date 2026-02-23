import {Router} from "express";
import {createFreezerItem} from "../controllers/freezer-item.controller";

const router = Router();

router.post('/', createFreezerItem)

export {router as freezerItemRouter};