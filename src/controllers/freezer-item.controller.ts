import {NextFunction, Request, Response} from "express";
import * as freezerItemService from '../services/freezer-item'
import {FreezerItemPost} from '../models/freezer-item.model'
import {FreezerItemFailureReasons} from "../models/freezer-item.failure-reason";

export const getBaseUrl = (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({name: "chicken breast"})
}

export const createFreezerItem = (req: Request, res: Response, next: NextFunction) => {
    const freezerItem: FreezerItemPost = req.body
    const result = freezerItemService.createFreezerItem(freezerItem)

    if (result.type === "FAILURE") {
        switch (result.failure) {
            case FreezerItemFailureReasons.FAILED_TO_SAVE:
                res.status(500).json({message: "Failed to create freezer item"})
                break
        }
    }

    return res.status(201).json({message: "Created freezer item"})
}