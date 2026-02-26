import {FreezerItemService} from "../../../services/freezer-item.service";
import {FreezerItemController} from "../../../controllers/freezer-item.controller";
import {Result} from "../../../result";
import {NextFunction, Request} from "express";

describe("FreezerItemController", () => {

    describe("createFreezerItem", () => {
        let controller: FreezerItemController;
        let mockService: jest.Mocked<FreezerItemService>;
        const mockResponse: any = {
            json: jest.fn(),
            status: jest.fn().mockReturnThis(), // Important for chaining
        };
        const mockNext: NextFunction = jest.fn();

        beforeEach(() => {
            mockService = {
                createFreezerItem: jest.fn(),
            } as jest.Mocked<FreezerItemService>;
            controller = new FreezerItemController(mockService);
        });

        it("should create a freezer item", async () => {
            // Given
            mockService.createFreezerItem.mockResolvedValue(Result.success(null));

            const mockRequest = buildCreateFreezerItemRequest(
                "Peas",
                1,
                "Some peas"
            ) as Request;

            // When
            await controller.createFreezerItem(mockRequest, mockResponse, mockNext);

            // Then
            expect(mockService.createFreezerItem).toHaveBeenCalledWith({
                name: "Peas",
                quantity: 1,
                description: "Some peas",
            });

            expect(mockResponse.status).toHaveBeenCalledWith(201);
            expect(mockResponse.json).toHaveBeenCalledWith({message: "Created freezer item"});
        });
    })

    const buildCreateFreezerItemRequest = (
        name: string,
        quantity: number,
        description: string,
    ) => ({
        body: {
            name,
            quantity,
            description
        }
    })
})