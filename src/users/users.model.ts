import { Column, Table, Model, PrimaryKey} from "sequelize-typescript";

@Table
export class User extends Model {
    @Column
    username: string;

    @Column
    last_name: string;
    
    @Column
    first_name: string;

    @Column
    middle_name: string;

    @Column
    date_of_birth: string;

    @Column
    email: string;

    @Column
    phone_number: string;

    @Column
    password: string;
}