import { IntencaoPagamentoStatusType } from "../../entities/intencaoPagamentoStatus-type.enum";
import {
    Entity,
    Column,
    CreateDateColumn,
    PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class IntencaoPagamentoEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string | null;

    @CreateDateColumn()
    dataCriacao: Date;

    @CreateDateColumn({nullable: true})
    dataFinalizacao: Date | null;

    @Column({
        name: "status",
        nullable: false,
        type: "enum",
        enum: IntencaoPagamentoStatusType,
    })
    status: string;

}