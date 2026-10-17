import React, { useState, useEffect, useMemo } from 'react';
import { FolderOpen, Plus } from 'lucide-react';
import type {
  ApplicationStatus,
  JobApplication,
  JobApplicationFormData,
  WorkMode,
} from '../Interfaces/JobApplication';
import { Header } from '../Components/Header';
import { StatCards } from '../Components/StatCards';
import { FilterBar } from '../Components/FilterBar';
import { ApplicationCard } from '../Components/ApplicationCard';
import { ApplicationModal } from '../Components/ApplicationModal';

const STORAGE_KEY = 'kariyer_takip_applications_v1';

const INITIAL_DEMO_DATA: JobApplication[] = [
  {
    id: 'demo-1',
    companyName: 'Trendyol Group',
    position: 'Frontend Developer (React)',
    location: 'İstanbul',
    workMode: 'Hibrit',
    status: 'Mülakat',
    appliedDate: '2026-10-10',
    salaryExpectation: '75.000 TL',
    jobUrl: 'https://linkedin.com',
    notes: 'İK mülakatı olumlu geçti. Haftaya Salı günü canlı kodlama (React + TypeScript) teknik mülakatı yapılacak.',
  },
  {
    id: 'demo-2',
    companyName: 'Hepsiburada',
    position: 'Junior Web Developer',
    location: 'İstanbul',
    workMode: 'Uzaktan (Remote)',
    status: 'Teklif Alındı',
    appliedDate: '2026-10-02',
    salaryExpectation: '65.000 TL',
    jobUrl: 'https://kariyer.net',
    notes: 'Teknik değerlendirme ve ekip görüşmesi tamamlandı. Yan haklar paketi ile birlikte resmi teklif iletildi.',
  },
  {
    id: 'demo-3',
    companyName: 'Aselsan',
    position: 'UI / Frontend Yazılım Mühendisi',
    location: 'Ankara',
    workMode: 'Ofis',
    status: 'Başvuruldu',
    appliedDate: '2026-10-15',
    salaryExpectation: '80.000 TL',
    jobUrl: 'https://aselsan.com.tr',
    notes: 'Kariyer portalı üzerinden özgeçmiş ve GitHub portfolyo projeleri ile başvuruldu.',
  },
  {
    id: 'demo-4',
    companyName: 'Getir',
    position: 'React Native / Web Developer',
    location: 'İstanbul',
    workMode: 'Uzaktan (Remote)',
    status: 'Reddedildi',
    appliedDate: '2026-09-25',
    salaryExpectation: '70.000 TL',
    notes: 'Pozisyon için daha kıdemli (Senior) bir aday ile ilerlemeye karar verdiklerini belirttiler.',
  },
];

export const Dashboard: React.FC = () => {
  // 1. LİSTELEME (READ) & LOCALSTORAGE BAĞLANTISI
  const [applications, setApplications] = useState<JobApplication[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (error) {
      console.error('LocalStorage okuma hatası:', error);
    }
    return INITIAL_DEMO_DATA;
  });

  // Filtreleme State'leri
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<ApplicationStatus | 'Tümü'>('Tümü');
  const [workModeFilter, setWorkModeFilter] = useState<WorkMode | 'Tümü'>('Tümü');

  // Modal State'leri
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingApplication, setEditingApplication] = useState<JobApplication | null>(null);

  // LocalStorage Senkronizasyonu
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(applications));
    } catch (error) {
      console.error('LocalStorage kaydetme hatası:', error);
    }
  }, [applications]);

  // 2. EKLEME (CREATE) VE GÜNCELLEME (UPDATE) İŞLEMİ
  const handleSaveApplication = (formData: JobApplicationFormData) => {
    if (editingApplication) {
      // Güncelleme İşlemi
      setApplications((prev) =>
        prev.map((app) =>
          app.id === editingApplication.id ? { ...formData, id: editingApplication.id } : app
        )
      );
      setEditingApplication(null);
    } else {
      // Yeni Ekleme İşlemi
      const newApp: JobApplication = {
        ...formData,
        id: crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(),
      };
      setApplications((prev) => [newApp, ...prev]);
    }
  };

  // Kart Üzerinden Hızlı Durum Güncelleme (UPDATE)
  const handleQuickStatusChange = (id: string, newStatus: ApplicationStatus) => {
    setApplications((prev) =>
      prev.map((app) => (app.id === id ? { ...app, status: newStatus } : app))
    );
  };

  // 3. SİLME (DELETE) İŞLEMİ
  const handleDeleteApplication = (id: string) => {
    setApplications((prev) => prev.filter((app) => app.id !== id));
  };

  // Düzenleme Modalını Açma
  const handleOpenEditModal = (application: JobApplication) => {
    setEditingApplication(application);
    setIsModalOpen(true);
  };

  // Yeni Ekleme Modalını Açma
  const handleOpenNewModal = () => {
    setEditingApplication(null);
    setIsModalOpen(true);
  };

  // Örnek Verileri Sıfırlama
  const handleResetDemoData = () => {
    setApplications(INITIAL_DEMO_DATA);
  };

  // Filtrelenmiş Liste
  const filteredApplications = useMemo(() => {
    return applications.filter((app) => {
      const matchesSearch =
        app.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.location.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesStatus = statusFilter === 'Tümü' || app.status === statusFilter;
      const matchesWorkMode = workModeFilter === 'Tümü' || app.workMode === workModeFilter;

      return matchesSearch && matchesStatus && matchesWorkMode;
    });
  }, [applications, searchQuery, statusFilter, workModeFilter]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header
        onOpenNewModal={handleOpenNewModal}
        onResetDemoData={handleResetDemoData}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* İstatistik Kartları */}
        <StatCards applications={applications} />

        {/* Arama ve Filtreleme Çubuğu */}
        <FilterBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          statusFilter={statusFilter}
          onStatusFilterChange={setStatusFilter}
          workModeFilter={workModeFilter}
          onWorkModeFilterChange={setWorkModeFilter}
        />

        {/* Başvuru Listesi (Read İşlemi) */}
        {filteredApplications.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredApplications.map((app) => (
              <ApplicationCard
                key={app.id}
                application={app}
                onEdit={handleOpenEditModal}
                onDelete={handleDeleteApplication}
                onQuickStatusChange={handleQuickStatusChange}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-dashed border-slate-300 p-12 text-center my-6">
            <div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto mb-3">
              <FolderOpen className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900">
              Başvuru Kaydı Bulunamadı
            </h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto mt-1 mb-4">
              Arama kriterlerinize uygun bir iş başvurusu yok veya henüz yeni bir başvuru eklemediniz.
            </p>
            <button
              onClick={handleOpenNewModal}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>İlk Başvurunu Ekle</span>
            </button>
          </div>
        )}
      </main>

      <footer className="bg-white border-t border-slate-200 py-4 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
          <span>KariyerTakip — Modern Javascript (React + TypeScript + Tailwind CSS) Projesi</span>
          <span>Veriler tarayıcınızda (LocalStorage) güvenle saklanır.</span>
        </div>
      </footer>

      {/* Ekleme / Güncelleme Modalı */}
      <ApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveApplication}
        editingApplication={editingApplication}
      />
    </div>
  );
};
