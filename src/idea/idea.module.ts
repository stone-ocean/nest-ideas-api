import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { AppGateway } from '../app.gateway'
import { UserEntity } from '../user/user.entity'
import { CommentEntity } from '../comment/comment.entity'
import { CommentService } from '../comment/comment.service'
import { IdeaController } from './idea.controller'
import { IdeaEntity } from './idea.entity'
import { IdeaService } from './idea.service'
import { IdeaResolver } from './idea.resolver'

@Module({
  imports: [TypeOrmModule.forFeature([IdeaEntity, UserEntity, CommentEntity])],
  controllers: [IdeaController],
  providers: [IdeaService, IdeaResolver, CommentService, AppGateway],
})
export class IdeaModule {}
