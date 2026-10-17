import React from 'react';
import {
  Building2,
  MapPin,
  Calendar,
  Banknote,
  ExternalLink,
  Edit3,
  Trash2,
  Briefcase,
  FileText,
} from 'lucide-react';
import type { ApplicationStatus, JobApplication } from '../Interfaces/JobApplication';

interface ApplicationCardProps {
  application: JobApplication;
  onEdit: (application: JobApplication) => void;
  onDelete: (id: string) => void;
  onQuickStatusChange: (id: string, newStatus: ApplicationStatus) => void;
}

const STATUS_BADGE_STYLES: Record<ApplicationStatus, string> = {
  'Başvuruldu': 'bg-blue-50 text-blue-700 border-blue-200',
  'Mülakat': 'bg-amber-50 text-amber-700 border-amber-200',
  'Teklif Alındı': 'bg-emerald-50 text-emerald-700 border-emerald-200',
  'Reddedildi': 'bg-rose-50 text-rose-700 border-rose-200',
};

export const ApplicationCard: React.FC<ApplicationCardProps> = ({
  application,
  onEdit,
  onDelete,
  onQuickStatusChange,
}) => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group">
      <div>
        {/* Üst Kısım: Şirket Bilgisi ve Durum Seçici */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 font-bold text-lg flex items-center justify-center shrink-0">
              {application.companyName.charAt(0).toUpperCase()}
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base leading-snug group-hover:text-indigo-600 transition-colors">
                {application.position}
              </h3>
              <div className="flex items-center gap-1.5 text-sm text-slate-600 mt-0.5">
                <Building2 className="w-3.5 h-3.5 text-slate-400" />
                <span className="font-medium">{application.companyName}</span>
              </div>
            </div>
          </div>

          {/* Hızlı Durum Güncelleme (Update İşlemi) */}
          <select
            value={application.status}
            onChange={(e) =>
              onQuickStatusChange(application.id, e.target.value as ApplicationStatus)
            }
            aria-label="Başvuru Durumu"
            className={`text-xs font-semibold px-2.5 py-1 rounded-full border cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
              STATUS_BADGE_STYLES[application.status]
            }`}
          >
            <option value="Başvuruldu">Başvuruldu</option>
            <option value="Mülakat">Mülakat</option>
            <option value="Teklif Alındı">Teklif Alındı</option>
            <option value="Reddedildi">Reddedildi</option>
          </select>
        </div>

        {/* Detay Etiketleri */}
        <div className="grid grid-cols-2 gap-2 my-4 text-xs text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="truncate">{application.location}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Briefcase className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="truncate">{application.workMode}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span>{application.appliedDate}</span>
          </div>
          {application.salaryExpectation && (
            <div className="flex items-center gap-1.5">
              <Banknote className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="truncate">{application.salaryExpectation}</span>
            </div>
          )}
        </div>

        {/* Not Alanı */}
        {application.notes && (
          <div className="mb-4 text-xs text-slate-600 bg-amber-50/60 border border-amber-100 rounded-lg p-2.5 flex items-start gap-2">
            <FileText className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
            <p className="line-clamp-2">{application.notes}</p>
          </div>
        )}
      </div>

      {/* Alt Aksiyon Butonları (Güncelle ve Sil) */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
        <div>
          {application.jobUrl ? (
            <a
              href={application.jobUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
            >
              <span>İlan Linki</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          ) : (
            <span className="text-xs text-slate-400">İlan linki yok</span>
          )}
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => onEdit(application)}
            className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors cursor-pointer"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>Düzenle</span>
          </button>
          <button
            onClick={() => onDelete(application.id)}
            className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-rose-600 bg-rose-50 hover:bg-rose-100 rounded-lg transition-colors cursor-pointer"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Sil</span>
          </button>
        </div>
      </div>
    </div>
  );
};
