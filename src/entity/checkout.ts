import {
  Entity,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";

import { Person } from "./person";
import { Item } from "./item";

@Entity("Checkout")
export class Checkout extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @OneToOne(() => Item)
  @JoinColumn()
  item: Item;

  @ManyToOne(() => Person, (university_id) => university_id.checkout)
  university_id: Person;

  @Column({ type: "timestamp", nullable: true })
  return_date: Date;

  @Column({ type: "timestamp", nullable: true })
  checkout_date: Date;

  @CreateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
  })
  public created_at: Date;

  @UpdateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
    onUpdate: "CURRENT_TIMESTAMP(6)",
  })
  public last_updated: Date;
}
