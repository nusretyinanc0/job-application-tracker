import React from 'react';
import { Send, Users, Award, XCircle, Layers } from 'lucide-react';
import type { JobApplication } from '../Interfaces/JobApplication';

interface StatCardsProps {
  applications: JobApplication[];
}

export const StatCards: React.FC<StatCardsProps> = ({ applications }) => {
  const total = applications.length;
  const applied = applications.filter((app) => app.status === 'Başvuruldu').length;
  const interview = applications.filter((app) => app.status === 'Mülakat').length;
  const offer = applications.filter((app) => app.status === 'Teklif Alındı').length;
  const rejected = applications.filter((app) => app.status === 'Reddedildi').length;

  const stats = [
    {
      label: 'Toplam Başvuru',
      value: total,
      icon: Layers,
      bgColor: 'bg-slate-100',
      textColor: 'text-slate-700',
      borderColor: 'border-slate-200',
    },
    {
      label: 'Başvuruldu',
      value: applied,
      icon: Send,
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      borderColor: 'border-blue-100',
    },
    {
      label: 'Mülakat Sürecinde',
      value: interview,
      icon: Users,
      bgColor: 'bg-amber-50',
      textColor: 'text-amber-600',
      borderColor: 'border-amber-100',
    },
    {
      label: 'Teklif Alındı',
      value: offer,
      icon: Award,
      bgColor: 'bg-emerald-50',
      textColor: 'text-emerald-600',
      borderColor: 'border-emerald-100',
    },
    {
      label: 'Reddedildi',
      value: rejected,
      icon: XCircle,
      bgColor: 'bg-rose-50',
      textColor: 'text-rose-600',
      borderColor: 'border-rose-100',
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.label}
            className={`bg-white p-4 rounded-xl border ${stat.borderColor} shadow-2xs flex items-center justify-between transition-transform hover:-translate-y-0.5`}
          >
            <div>
              <p className="text-xs font-medium text-slate-500">{stat.label}</p>
              <p className="text-2xl font-bold text-slate-900 mt-1">{stat.value}</p>
            </div>
            <div className={`w-10 h-10 rounded-lg ${stat.bgColor} ${stat.textColor} flex items-center justify-center`}>
              <Icon className="w-5 h-5" />
            </div>
          </div>
        );
      })}
    </div>
  );
};
