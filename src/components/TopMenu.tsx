import Link from "next/link";

export default function TopMenu() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-800 bg-gradient-to-r from-black to-gray-500 text-white shadow-md">
      <div className="absolute left-0 flex items-center">
          <Link href="/">
            <img 
              src=" img/lg.png"          // 👈 ใส่ Path รูปภาพโลโก้ของคุณตรงนี้ (เช่น /logo.png หรือ /images/logo.svg)
              alt="Logo" 
              className="w-full flex h-16 items-center justify-end pr-[25%] relative"
              // 💡 ทริค: ปรับขนาดความสูงของรูปภาพที่ h-8 (32px) หรือเปลี่ยนเป็น h-10 (40px) ตามความเหมาะสมของไฟล์ภาพคุณได้เลย
            />
          </Link>
        </div>
      <div className="w-full flex h-16 items-center justify-end pr-[25%]">
        
        <nav className="flex items-center gap-8 text-sm -translate-x-[10px]">
          <Link href="/" className="hover:text-blue-400 transition">Home</Link>
          <Link href="/portfolio" className="hover:text-blue-400 transition">Portfolio</Link>
          <Link href="/contact" className="hover:text-blue-400 transition">Contact</Link>
        </nav>

      </div>

    </header>
  );
}