import React, { ReactNode } from 'react';

interface CardDataStatsProps {
  title: string;
  total: string;
  color: string;
  children: ReactNode;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
  title,
  total,
  color,
  children,
}) => {
  return (
    <div className={`rounded-2xl bg-${color} py-6 px-4 shadow-default`}>
      <div className="flex h-11.5 w-11.5 items-center rounded-full bg-meta-2 dark:bg-meta-4">
        {children}
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            {total}
          </h4>
          <span className="text-sm font-medium">{title}</span>
        </div>
      </div>
    </div>
  );
};

export default CardDataStats;
