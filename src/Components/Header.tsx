import React from 'react';
import { Briefcase, Plus, RotateCcw } from 'lucide-react';

interface HeaderProps {
  onOpenNewModal: () => void;
  onResetDemoData: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenNewModal, onResetDemoData }) => {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-20 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-sm shadow-indigo-200">
            <Briefcase className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-slate-900 leading-tight">
              KariyerTakip
            </h1>
            <p className="text-xs text-slate-500">
              İş Başvurusu ve Süreç Yönetim Sistemi
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onResetDemoData}
            title="Örnek Verileri Yükle"
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Örnek Veriler</span>
          </button>

          <button
            onClick={onOpenNewModal}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-xs hover:shadow-indigo-200 transition-all cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Yeni Başvuru Ekle</span>
          </button>
        </div>
      </div>
    </header>
  );
};
