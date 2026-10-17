import React, { useState, useEffect } from 'react';
import { X, Save, PlusCircle } from 'lucide-react';
import type {
  ApplicationStatus,
  JobApplication,
  JobApplicationFormData,
  WorkMode,
} from '../Interfaces/JobApplication';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: JobApplicationFormData) => void;
  editingApplication: JobApplication | null;
}

const DEFAULT_FORM_STATE: JobApplicationFormData = {
  companyName: '',
  position: '',
  location: '',
  workMode: 'Uzaktan (Remote)',
  status: 'Başvuruldu',
  appliedDate: new Date().toISOString().split('T')[0],
  salaryExpectation: '',
  jobUrl: '',
  notes: '',
};

export const ApplicationModal: React.FC<ApplicationModalProps> = ({
  isOpen,
  onClose,
  onSave,
  editingApplication,
}) => {
  const [formData, setFormData] = useState<JobApplicationFormData>(DEFAULT_FORM_STATE);

  useEffect(() => {
    if (editingApplication) {
      const { id, ...rest } = editingApplication;
      setFormData(rest);
    } else {
      setFormData(DEFAULT_FORM_STATE);
    }
  }, [editingApplication, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.companyName.trim() || !formData.position.trim()) return;
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xl max-w-lg w-full overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Modal Başlığı */}
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <h2 className="text-base font-bold text-slate-900">
            {editingApplication ? 'Başvuruyu Güncelle' : 'Yeni İş Başvurusu Ekle'}
          </h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 p-1 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Şirket Adı *
              </label>
              <input
                type="text"
                required
                placeholder="Örn: Trendyol, Getir, Aselsan"
                value={formData.companyName}
                onChange={(e) =>
                  setFormData({ ...formData, companyName: e.target.value })
                }
                className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Pozisyon *
              </label>
              <input
                type="text"
                required
                placeholder="Örn: Frontend Developer"
                value={formData.position}
                onChange={(e) =>
                  setFormData({ ...formData, position: e.target.value })
                }
                className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Konum / Şehir *
              </label>
              <input
                type="text"
                required
                placeholder="Örn: İstanbul, Ankara"
                value={formData.location}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
                className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Çalışma Modeli
              </label>
              <select
                value={formData.workMode}
                onChange={(e) =>
                  setFormData({ ...formData, workMode: e.target.value as WorkMode })
                }
                className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
              >
                <option value="Uzaktan (Remote)">Uzaktan (Remote)</option>
                <option value="Hibrit">Hibrit</option>
                <option value="Ofis">Ofis</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Başvuru Durumu
              </label>
              <select
                value={formData.status}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    status: e.target.value as ApplicationStatus,
                  })
                }
                className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
              >
                <option value="Başvuruldu">Başvuruldu</option>
                <option value="Mülakat">Mülakat</option>
                <option value="Teklif Alındı">Teklif Alındı</option>
                <option value="Reddedildi">Reddedildi</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Başvuru Tarihi
              </label>
              <input
                type="date"
                required
                value={formData.appliedDate}
                onChange={(e) =>
                  setFormData({ ...formData, appliedDate: e.target.value })
                }
                className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Maaş Beklentisi (Opsiyonel)
              </label>
              <input
                type="text"
                placeholder="Örn: 65.000 TL"
                value={formData.salaryExpectation || ''}
                onChange={(e) =>
                  setFormData({ ...formData, salaryExpectation: e.target.value })
                }
                className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                İlan Linki (Opsiyonel)
              </label>
              <input
                type="url"
                placeholder="https://linkedin.com/jobs/..."
                value={formData.jobUrl || ''}
                onChange={(e) =>
                  setFormData({ ...formData, jobUrl: e.target.value })
                }
                className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Mülakat ve Süreç Notları (Opsiyonel)
            </label>
            <textarea
              rows={3}
              placeholder="İK görüşmesi notları, teknik mülakat tarihi veya kullanılan teknolojiler..."
              value={formData.notes || ''}
              onChange={(e) =>
                setFormData({ ...formData, notes: e.target.value })
              }
              className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
            />
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
            >
              İptal
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-xs transition-colors cursor-pointer"
            >
              {editingApplication ? (
                <>
                  <Save className="w-4 h-4" />
                  <span>Değişiklikleri Kaydet</span>
                </>
              ) : (
                <>
                  <PlusCircle className="w-4 h-4" />
                  <span>Başvuruyu Ekle</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
