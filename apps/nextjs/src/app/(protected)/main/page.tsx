"use client";

import { useState } from "react";

import { Header } from "../../_components/header";
import VideoCard from "../../_components/thumbnailcheck";
import SettingModal from "../../_components/setting"; // モーダルをインポート
import ChannelPage from "~/app/_components/channel";

export default function ProtectedPage() {
  const [isSettingOpen, setIsSettingOpen] = useState<boolean>(false); // モーダルの開閉状態
  const [settings, setSettings] = useState({
    firstIntervalViews: 2000,
    secondIntervalViews: 4000,
    firstIntervalCtr: 5.2,
    secondIntervalCtr: 5.5,
    firstIntervalHours: 3,
    secondIntervalHours: 9,
  });

  const handleUpdateSettings = (updatedSettings: typeof settings) => {
    setSettings(updatedSettings); // 設定を更新
    setIsSettingOpen(false); // モーダルを閉じる
  };

  return (

      <main className="container h-screen pt-16">
        <Header />
        <div className="flex flex-row gap-4 p-4">
          {/* 左側: ChannelPage */}
          <div className="w-1/4">
            <ChannelPage />
          </div>

          {/* 右側: VideoCards */}
          <div className="w-3/4 bg-white p-4 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4">TechChannelの動画</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <VideoCard
                title="最新技術レビュー"
                lastUpdate={`${settings.firstIntervalHours}時間前`}
                views={{
                  hours3: settings.firstIntervalViews,
                  hours9: settings.secondIntervalViews,
                  growth3: settings.firstIntervalCtr,
                  growth9: settings.secondIntervalCtr,
                }}
                ctr={{
                  hours3: settings.firstIntervalCtr,
                  hours9: settings.secondIntervalCtr,
                  growth3: settings.firstIntervalCtr,
                  growth9: settings.secondIntervalCtr,
                }}
              />
              <VideoCard
                title="プログラミング入門"
                lastUpdate={`${settings.secondIntervalHours}時間前`}
                views={{
                  hours3: settings.firstIntervalViews / 2,
                  hours9: settings.secondIntervalViews / 2,
                  growth3: settings.firstIntervalCtr / 2,
                  growth9: settings.secondIntervalCtr / 2,
                }}
                ctr={{
                  hours3: settings.firstIntervalCtr / 2,
                  hours9: settings.secondIntervalCtr / 2,
                  growth3: settings.firstIntervalCtr / 2,
                  growth9: settings.secondIntervalCtr / 2,
                }}
              />
            </div>
          </div>
        </div>

        {/* SettingModal を表示 */}
        {isSettingOpen && (
          <SettingModal
          channelName="TechChannel"
          onClose={() => setIsSettingOpen(false)}
          onSubmit={handleUpdateSettings} // 更新処理
          initialSettings={{
            firstIntervalViews: 0,
            secondIntervalViews: 0,
            firstIntervalCtr: 0,
            secondIntervalCtr: 0,
            firstIntervalHours: 0,
            secondIntervalHours: 0
          }}          />
        )}
      </main>

  );
}
