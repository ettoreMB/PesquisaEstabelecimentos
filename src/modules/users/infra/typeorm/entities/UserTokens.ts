import { v4 as uuidV4 } from 'uuid';

import { User } from "./User";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

@Entity('users_tokens')
class UserTokens {

  @PrimaryColumn()
  id: string;

  @Column()
  refresh_token: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User;

  @Column()
  user_id: string;

  @Column()
  expires_in: Date;

  @CreateDateColumn()
  created_at: Date;


  constructor() {
    if (!this.id)
      this.id = uuidV4();
  }
}

export { UserTokens }