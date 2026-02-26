import { FreezerItemFailureReasons } from '../models/freezer-item.failure-reason';
import { Result } from '../result';
import { FreezerItem } from '../entities/freezer-item.entity';
import { AppDataSource } from '../data-source';

type CreateFreezerItem = {
  name: string;
  quantity: number;
  description: string;
};

export class FreezerItemService {
  constructor() {}

  async createFreezerItem({
    name,
    quantity,
    description,
  }: CreateFreezerItem): Promise<Result<null, FreezerItemFailureReasons>> {
    const freezerItem = new FreezerItem();
    freezerItem.name = name;
    freezerItem.quantity = quantity;
    freezerItem.description = description;

    try {
      await AppDataSource.manager.save(freezerItem);
    } catch (e) {
      console.log('Exception thrown', e);
      return Result.failure(FreezerItemFailureReasons.FAILED_TO_SAVE);
    }

    return Result.success(null);
  }
}
