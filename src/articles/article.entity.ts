import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Articles' })
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;
}
