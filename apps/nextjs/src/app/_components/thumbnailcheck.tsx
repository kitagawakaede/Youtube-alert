"use client";

interface VideoCardProps {
  title: string;
  lastUpdate: string;
  views: {
    hours3: number;
    hours9: number;
    growth3: number;
    growth9: number;
  };
  ctr: {
    hours3: number;
    hours9: number;
    growth3: number;
    growth9: number;
  };
}

export default function VideoCard({
  title,
  lastUpdate,
  views,
  ctr,
}: VideoCardProps) {
  return (
    <div className="w-full rounded-lg bg-white p-4 shadow-md">
      {/* 画像の枠 */}
      <div className="flex h-48 items-center justify-center rounded-md bg-gray-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-gray-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3m0 0h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>

      {/* タイトル */}
      <h2 className="mt-4 text-lg font-bold">{title}</h2>
      <p className="text-sm text-gray-500">最終更新: {lastUpdate}</p>

      {/* 再生回数とCTR */}
      <div className="mt-4 space-y-1">
        <p>
          3時間再生回数:{" "}
          <span className="font-bold">{views.hours3.toLocaleString()}</span>{" "}
          <span
            className={`text-sm font-bold ${
              views.growth3 >= 0 ? "text-green-500" : "text-red-500"
            }`}
          >
            {views.growth3 >= 0
              ? `↑ ${views.growth3}%`
              : `↓ ${Math.abs(views.growth3)}%`}
          </span>
        </p>
        <p>
          9時間再生回数:{" "}
          <span className="font-bold">{views.hours9.toLocaleString()}</span>{" "}
          <span
            className={`text-sm font-bold ${
              views.growth9 >= 0 ? "text-green-500" : "text-red-500"
            }`}
          >
            {views.growth9 >= 0
              ? `↑ ${views.growth9}%`
              : `↓ ${Math.abs(views.growth9)}%`}
          </span>
        </p>
        <p>
          3時間CTR: <span className="font-bold">{ctr.hours3}%</span>{" "}
          <span
            className={`text-sm font-bold ${
              ctr.growth3 >= 0 ? "text-green-500" : "text-red-500"
            }`}
          >
            {ctr.growth3 >= 0
              ? `↑ ${ctr.growth3}%`
              : `↓ ${Math.abs(ctr.growth3)}%`}
          </span>
        </p>
        <p>
          9時間CTR: <span className="font-bold">{ctr.hours9}%</span>{" "}
          <span
            className={`text-sm font-bold ${
              ctr.growth9 >= 0 ? "text-green-500" : "text-red-500"
            }`}
          >
            {ctr.growth9 >= 0
              ? `↑ ${ctr.growth9}%`
              : `↓ ${Math.abs(ctr.growth9)}%`}
          </span>
        </p>
      </div>
    </div>
  );
}
