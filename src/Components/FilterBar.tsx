import React from 'react';
import { Search, Filter } from 'lucide-react';
import type { ApplicationStatus, WorkMode } from '../Interfaces/JobApplication';

interface FilterBarProps {
  searchQuery: string;
  onSearchChange: (val: string) => void;
  statusFilter: ApplicationStatus | 'Tümü';
  onStatusFilterChange: (val: ApplicationStatus | 'Tümü') => void;
  workModeFilter: WorkMode | 'Tümü';
  onWorkModeFilterChange: (val: WorkMode | 'Tümü') => void;
}

const STATUS_OPTIONS: (ApplicationStatus | 'Tümü')[] = [
  'Tümü',
  'Başvuruldu',
  'Mülakat',
  'Teklif Alındı',
  'Reddedildi',
];

const WORK_MODE_OPTIONS: (WorkMode | 'Tümü')[] = [
  'Tümü',
  'Uzaktan (Remote)',
  'Hibrit',
  'Ofis',
];

export const FilterBar: React.FC<FilterBarProps> = ({
  searchQuery,
  onSearchChange,
  statusFilter,
  onStatusFilterChange,
  workModeFilter,
  onWorkModeFilterChange,
}) => {
  return (
    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
      {/* Arama Kutusu */}
      <div className="relative w-full md:w-80">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Şirket, pozisyon veya şehir ara..."
          className="w-full pl-10 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
        />
      </div>

      {/* Durum ve Çalışma Modeli Filtreleri */}
      <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-between md:justify-end">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          {STATUS_OPTIONS.map((status) => (
            <button
              key={status}
              onClick={() => onStatusFilterChange(status)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                statusFilter === status
                  ? 'bg-indigo-600 text-white shadow-2xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {status}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-slate-400 hidden sm:inline" />
          <select
            value={workModeFilter}
            onChange={(e) => onWorkModeFilterChange(e.target.value as WorkMode | 'Tümü')}
            className="text-xs font-medium bg-slate-50 border border-slate-200 text-slate-700 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
          >
            {WORK_MODE_OPTIONS.map((mode) => (
              <option key={mode} value={mode}>
                {mode === 'Tümü' ? 'Tüm Çalışma Modelleri' : mode}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
