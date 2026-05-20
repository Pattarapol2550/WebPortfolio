import { Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    // กำหนดความกว้างสูงสุดให้พอดีแนวเดียวกับโครงสร้างเมนูด้านบน
    <div className="max-w-5xl mx-auto px-6 py-24 mb-24">
      
      {/* 🌟 จุดเปลี่ยนสำคัญ: ใช้ flex และ justify-between 
          เพื่อบังคับให้แผงซ้ายอยู่ซ้ายสุด และแผงขวาอยู่ขวาสุด แยกออกจากกันไปเลย ไม่มากองตรงกลาง */}
      <div className="w-full flex flex-col md:flex-row justify-between items-start gap-12">
        
        {/* ================= ฝั่งซ้าย: ข้อมูลติดต่อเดิมของคุณ (ล็อกชิดซ้าย) ================= */}
        <div className="w-full md:w-[55%]">
          
          {/* Header Section ของเดิมของคุณ */}
          <div className="relative mb-16">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl bg-gradient-to-b from-zinc-400 via-zinc-600 to-black bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <div className="h-1.5 w-20 bg-zinc-700 mt-4 rounded-full shadow-[0_0_15px_rgba(63,63,70,0.5)]"></div>
            <p className="mt-6 text-lg text-zinc-400 leading-relaxed">
              Take a look at my portfolio and get in touch. I'd love to connect and chat about future opportunities!
            </p>
          </div>

          {/* การ์ดข้อมูลติดต่อ (สไตล์เดิมของคุณ 100%) */}
          <div className="flex flex-col gap-6">
            
            {/* Email Card */}
            <a 
              href="mailto:firstjamsai2550@gmail.com"
              className="group relative p-6 transition-all duration-300 flex items-start gap-5 hover:translate-x-2 bg-gray-700 border-2 border-blue-500 rounded-xl"
            >
              <div className="p-4 rounded-2xl bg-zinc-900 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <Mail className="w-7 h-7" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white mb-1">Email</h2>
                <p className="text-zinc-500 text-sm mb-2">ส่งอีเมลหาผมได้โดยตรง</p>
                <span className="text-blue-400 font-medium group-hover:text-blue-300 transition-colors break-all">
                  firstjamsai2550@gmail.com
                </span>
              </div>
            </a>

            {/* Phone Card */}
            <a 
              href="tel:0660389955"
              className="group relative p-6 transition-all duration-300 flex items-start gap-5 hover:translate-x-2 bg-gray-700 border-2 border-green-500 rounded-xl"
            >
              <div className="p-4 rounded-2xl bg-zinc-900 text-green-400 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                <Phone className="w-7 h-7" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white mb-1">Phone</h2>
                <p className="text-zinc-500 text-sm mb-2">โทรติดต่อเพื่อความรวดเร็ว</p>
                <span className="text-green-400 font-medium group-hover:text-green-300 transition-colors">
                  +66 66-038-9955
                </span>
              </div>
            </a>

            {/* GitHub Card */}
            <a 
              href="https://github.com/Pattarapol2550" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative p-6 transition-all duration-300 flex items-start gap-5 hover:translate-x-2 bg-gray-700 border-2 border-purple-500 rounded-xl"
            >
              <div className="p-4 rounded-2xl bg-zinc-900 text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold text-white mb-1">GitHub</h2>
                <p className="text-zinc-500 text-sm mb-2">ดูโปรเจกต์และโค้ดของผม</p>
                <span className="text-purple-400 font-medium group-hover:text-purple-300 transition-colors">
                  github.com/Pattarapol2550
                </span>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a 
              href="https://linkedin.com/in/pattarapol-jamsai-58a085380" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative p-6 transition-all duration-300 flex items-start gap-5 hover:translate-x-2 bg-gray-700 border-2 border-blue-500 rounded-xl"
            >
              <div className="p-4 rounded-2xl bg-zinc-900 text-sky-400 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold text-white mb-1">LinkedIn</h2>
                <p className="text-zinc-500 text-sm mb-2">เชื่อมต่อผ่านโปรไฟล์การทำงาน</p>
                <span className="text-sky-400 font-medium group-hover:text-sky-300 transition-colors break-all">
                  pattarapol-jamsai-58a085380
                </span>
              </div>
            </a>

          </div>
        </div>

        {/* ================= ฝั่งขวา: รูปภาพและชื่อ (ล็อกชิดขวาสุดพิกัดเป๊ะ + ขยับลงมา) ================= */}
        {/* ใช้ pt-16 ดันลงมาหลบจากขอบล่างของ TopMenu ให้ดูโปร่งตา */}
        <div className="w-full md:w-[35%] flex flex-col items-end !pt-1 ">
          
          {/* ล็อกขนาดความกว้างรูปภาพแนวตั้งให้ได้มิติตามรูป me.jpg จริง */}
          <div className="w-full aspect-[3/4] relative rounded-2xl overflow-hidden mb-6 border-2 border-zinc-800 bg-zinc-950">
            <img 
              src="img/profile.png" 
              alt="Pattarapol Jamsai" 
              className="w-full h-full object-cover shadow-2xl"
            />
          </div>
          
          {/* ข้อมูลโปรไฟล์ส่วนตัว: ใช้ text-right ตั้งแถวชิดระนาบขวาเสมอกับขอบรูปภาพ */}
          <div className="w-full text-center pr-2">
            <h2 className="text-2xl font-bold text-white tracking-wide">
              Pattarapol Jamsai
            </h2>
            <p className="text-zinc-400 font-medium text-sm mt-1">
              Computer Engineering Student
            </p>
            <p className="text-zinc-500 text-xs mt-0.5">
              Chulalongkorn University
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}