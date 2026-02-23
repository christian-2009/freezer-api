export type FreezerItem = {
    id: string;
    name: string;
    quantity: number;
    description: string;
}

export type FreezerItemPost = Omit<FreezerItem, "id">