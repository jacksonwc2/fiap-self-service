import { IntencaoPagamentoStatusType } from "../../entities/intencaoPagamentoStatus-type.enum";
import {
    Entity,
    Column,
    CreateDateColumn,
    ObjectId,
    ObjectIdColumn,
} from "typeorm";

@Entity('payments')
export class IntencaoPagamentoEntity {
    @ObjectIdColumn()
    id: ObjectId;

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

    @Column({
        nullable: true,
        type: 'longtext'
    })
    qrCode: string | null;

    @Column({
        nullable: true,
    })
    idExterno: string | null;

    @Column()
    data: object | null;

}
