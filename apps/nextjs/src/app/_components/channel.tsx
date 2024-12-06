"use client";

import { useState } from "react";
import SettingModal from "./setting"; // setting.tsx をインポート

const channels = [
  { name: "TechChannel" },
  { name: "CookingMaster" },
  { name: "TravelVlogs" },
];

export default function ChannelPage() {
  const [selectedChannel, setSelectedChannel] = useState<string | null>(null);
  const [isSettingOpen, setIsSettingOpen] = useState<boolean>(false); // モーダルの開閉状態を管理
  const [activeChannel, setActiveChannel] = useState<string | null>(null); // 表示対象のチャンネル名を保存
  const [channelSettings, setChannelSettings] = useState({
    firstIntervalViews: 0,
    secondIntervalViews: 0,
    firstIntervalCtr: 0,
    secondIntervalCtr: 0,
    firstIntervalHours: 0,
    secondIntervalHours: 0,
  }); // 設定を保存

  return (
    <div className="p-4 bg-slate-100 rounded-lg">
      <h1 className="text-lg font-bold mb-4">監視中のチャンネル</h1>
      <div className="space-y-2">
        {/* チャンネルリスト */}
        {channels.map((channel) => (
          <ChannelButton
            key={channel.name}
            name={channel.name}
            isSelected={selectedChannel === channel.name}
            onClick={() => setSelectedChannel(channel.name)}
            onSettingClick={() => {
              setActiveChannel(channel.name); // チャンネル名を設定
              setIsSettingOpen(true); // モーダルを開く
            }}
          />
        ))}

        {/* 新規チャンネル追加 */}
        <button
          onClick={() => {
            setActiveChannel("新規チャンネル");
            setIsSettingOpen(true); // モーダルを開く
          }}
          className="flex items-center justify-center w-full px-4 py-2 bg-white text-gray-500 border rounded shadow-md cursor-pointer"
        >
          <span className="text-lg font-semibold">+ 新規チャンネル追加</span>
        </button>
      </div>

      {/* SettingModal を表示 */}
      {isSettingOpen && (
        <SettingModal
          channelName={activeChannel} // モーダルにチャンネル名を渡す
          onClose={() => setIsSettingOpen(false)} // モーダルを閉じる
          initialSettings={channelSettings} // 初期設定を渡す
          onSubmit={(updatedSettings) => {
            // 設定値を保存
            console.log("更新された設定:", updatedSettings);
            setChannelSettings(updatedSettings); // 新しい設定を保存
            setIsSettingOpen(false); // モーダルを閉じる
          }}
        />
      )}
    </div>
  );
}

function ChannelButton({
  name,
  isSelected,
  onClick,
  onSettingClick,
}: {
  name: string;
  isSelected: boolean;
  onClick: () => void;
  onSettingClick: () => void;
}) {
  return (
    <div
      className={`flex items-center justify-between w-full px-4 py-2 rounded shadow-md duration-300 ${
        isSelected ? "bg-black text-white" : "bg-white text-black border"
      }`}
    >
      <button onClick={onClick} className="flex-1 text-left focus:outline-none">
        {name}
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation(); // 親ボタンのクリックイベントを防止
          onSettingClick();
        }}
        className={`ml-2 p-1 rounded-full transition ${
          isSelected ? "text-white" : "text-gray-500"
        } hover:bg-gray-200`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>
    </div>
  );
}
