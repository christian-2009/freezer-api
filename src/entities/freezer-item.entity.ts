import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity("freezer_items")
export class FreezerItem {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    quantity: number
}