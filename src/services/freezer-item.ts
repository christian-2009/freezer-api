import {randomUUID} from "crypto";
import fs from 'fs'
import {FreezerItemFailureReasons} from "../models/freezer-item.failure-reason";
import {Result} from "../result";
import {FreezerItem, FreezerItemPost} from "../models/freezer-item.model";

const freezerItemFilePath = '../local-store/FreezerItems.json'

export function createFreezerItem(freezerItem: FreezerItemPost): Result<null, FreezerItemFailureReasons> {
    const freezerItemId = randomUUID()
    const freezerItemToSave: FreezerItem = {
        ...freezerItem,
        id: freezerItemId
    }

    let freezerItemsJson: string = ""
    fs.readFile(freezerItemFilePath, 'utf8', (err, jsonString: string) => {
        if (err) {
            return Result.failure(FreezerItemFailureReasons.FAILED_TO_SAVE)
        }
        freezerItemsJson = jsonString;
    });

    console.log(freezerItemsJson);
    const freezerItems: FreezerItem[] = JSON.parse(freezerItemsJson);

    freezerItems.push(freezerItemToSave)

    fs.writeFile(freezerItemFilePath, JSON.stringify(freezerItems, null, 2), (err) => {
        if (err) {
            return Result.failure(FreezerItemFailureReasons.FAILED_TO_SAVE)
        }
    })

    return Result.success(null)
}