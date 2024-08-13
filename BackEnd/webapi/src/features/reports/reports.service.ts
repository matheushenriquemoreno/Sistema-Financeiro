import { Inject, Injectable } from '@nestjs/common';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { TenantService } from 'src/tenant/tenant/tenant.service';
import {  Report } from './entities/report.entity'


@Injectable()
export class ReportsService {
  constructor(
   @Inject('Report_REPOSITORY')
    private reportModel: typeof Report,
    private tenantService: TenantService
  ){}

  create(createReportDto: CreateReportDto) {
    return this.reportModel.create({
      ...createReportDto,
      account_id: this.tenantService.tenant.id,
    });
  }

  async update(id: string, updateReportDto: UpdateReportDto) {
    const report = await this.reportModel.findByPk(id, { rejectOnEmpty: true });
    return report.update(updateReportDto);
  }

  findAll() {
    return this.reportModel.findAll({
      where: {
        account_id: this.tenantService.tenant.id,
      },
    });
  }
}
