import {Response} from "express";

type Success<S> = {
    type: "SUCCESS",
    value: S
}

type Failure<F> = {
    type: "FAILURE",
    failure: F
}

type SuccessMethod<S> = (s: S) => Response
type FailureMethod<F> = (s: F) => Response

export type Result<S, F> = Success<S> | Failure<F>

export const Result = {
    success<S, F = never>(value: S): Result<S, F> {
        return {type: "SUCCESS", value: value}
    },

    failure<F, S = never>(failure: F): Result<S, F> {
        return {type: "FAILURE", failure: failure}
    },
}