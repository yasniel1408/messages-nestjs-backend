import { Test } from '@nestjs/testing';
import { ApprovedReportService } from './approved-report.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ReportDao } from '@reports/infrastructure/adapters/secondary/db/dao/report.dao';
import { ReportRepository } from '@reports/infrastructure/adapters/secondary/db/report.repository';

describe('ApprovedReportService', () => {
  let service: ApprovedReportService;
  const mockRepository = {
    findOneBy: jest.fn().mockImplementation((dao: ReportDao) => {
      return Promise.resolve({
        id: Math.ceil(Math.random() * 10),
        ...dao,
      });
    }),
  };

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [], // Add
      controllers: [], // Add
      providers: [
        ApprovedReportService,
        ReportRepository,
        {
          provide: getRepositoryToken(ReportDao),
          useValue: mockRepository,
        },
      ], // Add
    }).compile();

    service = moduleRef.get<ApprovedReportService>(ApprovedReportService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
