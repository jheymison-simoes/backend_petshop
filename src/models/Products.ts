import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
export default class Products {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    description: string;

    @Column()
    amount: number;

    @Column()
    value: number;

    @Column()
    image: string;
    
    @Column()
    group: string;

    @Column()
    category: string;
}