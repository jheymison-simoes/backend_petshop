import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export default class Products {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    users: string;

    @Column()
    key: string;

    @Column()
    token: string;
}