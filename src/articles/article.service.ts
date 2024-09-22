import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from './article.entity';
import { Repository } from 'typeorm';
import { CreateArticleDTO } from './dto/createArticle.dto';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article) private articleRepository: Repository<Article>,
  ) {}

  async getArticle(id: number): Promise<Article> {
    return this.articleRepository.findOneBy({ id });
  }

  async getAllArticles(): Promise<Article[]> {
    return this.articleRepository.find();
  }

  async createArticle(createArticleDto: CreateArticleDTO): Promise<void> {
    const article = new Article();
    article.title = createArticleDto.title;
    article.content = createArticleDto.content;
    await this.articleRepository.save(article);
  }

  async deleteArticle(id: number): Promise<void> {
    await this.articleRepository.delete({ id });
  }
}
