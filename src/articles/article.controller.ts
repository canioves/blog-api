import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDTO } from './dto/createArticle.dto';
import { Article } from './article.entity';

@Controller('article')
export class ArticleController {
  constructor(private articleService: ArticleService) {}

  @Post()
  async createArticle(
    @Body() createArticleDto: CreateArticleDTO,
  ): Promise<string> {
    this.articleService.createArticle(createArticleDto);
    return 'Article created';
  }

  @Get()
  async getAllArticles(): Promise<Article[]> {
    return this.articleService.getAllArticles();
  }

  @Get(':id')
  async getArticle(@Param('id') id: number): Promise<Article> {
    return this.articleService.getArticle(id);
  }

  @Delete(':id')
  async deleteArticle(@Param('id') id: number): Promise<string> {
    this.articleService.deleteArticle(id);
    return `Article with id: ${id} deleted`;
  }
}
