import { Module } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { ReportsController } from './reports.controller';
import { ReportProviders } from './db/reports.providers';

@Module({
  controllers: [ReportsController],
  providers: [ReportsService, ...ReportProviders],
})
export class ReportsModule {}
