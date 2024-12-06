"use client";

import { useState } from "react";

export interface SettingModalProps {
  channelName: string | null;
  initialSettings: {
    firstIntervalViews: number;
    secondIntervalViews: number;
    firstIntervalCtr: number;
    secondIntervalCtr: number;
    firstIntervalHours: number;
    secondIntervalHours: number;
  };
  onClose: () => void;
  onSubmit: (updatedSettings: SettingModalProps["initialSettings"]) => void;
}

function SettingModal({
  channelName,
  initialSettings,
  onClose,
  onSubmit,
}: SettingModalProps) {
  const [firstIntervalViews, setFirstIntervalViews] = useState(
    initialSettings.firstIntervalViews
  );
  const [secondIntervalViews, setSecondIntervalViews] = useState(
    initialSettings.secondIntervalViews
  );
  const [firstIntervalCtr, setFirstIntervalCtr] = useState(
    initialSettings.firstIntervalCtr
  );
  const [secondIntervalCtr, setSecondIntervalCtr] = useState(
    initialSettings.secondIntervalCtr
  );
  const [firstIntervalHours, setFirstIntervalHours] = useState(
    initialSettings.firstIntervalHours
  );
  const [secondIntervalHours, setSecondIntervalHours] = useState(
    initialSettings.secondIntervalHours
  );

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // 新しい設定値を親コンポーネントに渡す
    onSubmit({
      firstIntervalViews,
      secondIntervalViews,
      firstIntervalCtr,
      secondIntervalCtr,
      firstIntervalHours,
      secondIntervalHours,
    });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">{channelName}の基準値設定</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            &times;
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* フォームの各入力項目 */}
          <div>
            <label className="block text-sm font-medium">第1間隔基準再生回数:</label>
            <input
              type="number"
              value={firstIntervalViews}
              onChange={(e) => setFirstIntervalViews(Number(e.target.value))}
              className="block w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">第2間隔基準再生回数:</label>
            <input
              type="number"
              value={secondIntervalViews}
              onChange={(e) => setSecondIntervalViews(Number(e.target.value))}
              className="block w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">第1間隔基準CTR:</label>
            <input
              type="number"
              value={firstIntervalCtr}
              onChange={(e) => setFirstIntervalCtr(Number(e.target.value))}
              className="block w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">第2間隔基準CTR:</label>
            <input
              type="number"
              value={secondIntervalCtr}
              onChange={(e) => setSecondIntervalCtr(Number(e.target.value))}
              className="block w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">第1間隔時間:</label>
            <input
              type="number"
              value={firstIntervalHours}
              onChange={(e) => setFirstIntervalHours(Number(e.target.value))}
              className="block w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">第2間隔時間:</label>
            <input
              type="number"
              value={secondIntervalHours}
              onChange={(e) => setSecondIntervalHours(Number(e.target.value))}
              className="block w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="text-right">
            <button
              type="submit"
              className="px-4 py-2 bg-black text-white rounded-md"
            >
              更新
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SettingModal;
