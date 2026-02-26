import { Router } from 'express';
import { FreezerItemController } from '../controllers/freezer-item.controller';
import { FreezerItemService } from '../services/freezer-item.service';

const router = Router();
const freezerItemService = new FreezerItemService();
const freezerItemController = new FreezerItemController(freezerItemService);

router.post('/', freezerItemController.createFreezerItem);

export { router as freezerItemRouter };
