export default function PortfolioPreview() {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 dark:from-blue-400/10 dark:to-purple-400/10" />

      <div className="relative h-full flex items-center justify-center">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex items-center justify-center w-8 h-8 bg-slate-900 dark:bg-white rounded-lg">
              <span className="text-white dark:text-slate-900 text-sm font-bold">
                &lt;/&gt;
              </span>
            </div>
            <span className="text-slate-900 dark:text-white font-semibold text-lg">
              Murilo Moraes
            </span>
          </div>

          <div className="text-xs text-slate-500 dark:text-slate-400 mb-4">
            Desenvolvedor Full Stack
          </div>

          <div className="flex gap-2 justify-center mb-4">
            <div className="w-16 h-2 bg-slate-200 dark:bg-slate-700 rounded" />
            <div className="w-20 h-2 bg-slate-200 dark:bg-slate-700 rounded" />
            <div className="w-12 h-2 bg-slate-200 dark:bg-slate-700 rounded" />
          </div>

          <div className="flex gap-1 justify-center">
            <div className="w-2 h-2 bg-blue-500 rounded-full" />
            <div className="w-2 h-2 bg-purple-500 rounded-full" />
            <div className="w-2 h-2 bg-green-500 rounded-full" />
          </div>
        </div>
      </div>

      <div className="absolute top-3 right-3">
        <div className="flex gap-1">
          <div className="w-2 h-2 bg-red-500 rounded-full" />
          <div className="w-2 h-2 bg-yellow-500 rounded-full" />
          <div className="w-2 h-2 bg-green-500 rounded-full" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500" />
    </div>
  );
}
