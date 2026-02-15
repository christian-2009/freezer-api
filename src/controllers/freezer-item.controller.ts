import {NextFunction} from "express";
import {Response, Request} from "express";

export const getBaseUrl = (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({name: "chicken breast"})
}