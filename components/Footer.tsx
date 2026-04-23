export default function Footer() {
  return (
    <footer className="w-full border-t bg-white">
      <div className="max-w-4xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-500">
        <span className="font-semibold text-gray-700 text-center sm:text-left">
          © {new Date().getFullYear()} ConstruCAP — Alexander
        </span>
        <span className="font-semibold text-gray-700">construcap.net</span>
      </div>
    </footer>
  );
}
