export type ApplicationStatus = 'Başvuruldu' | 'Mülakat' | 'Teklif Alındı' | 'Reddedildi';

export type WorkMode = 'Uzaktan (Remote)' | 'Hibrit' | 'Ofis';

export interface JobApplication {
  id: string;
  companyName: string;
  position: string;
  location: string;
  workMode: WorkMode;
  status: ApplicationStatus;
  appliedDate: string;
  salaryExpectation?: string;
  jobUrl?: string;
  notes?: string;
}

export type JobApplicationFormData = Omit<JobApplication, 'id'>;
