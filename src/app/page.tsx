import Image from "next/image";

export default function Home() {
  return (
    // คุมความกว้างรวมให้ดูโปร่ง สบายตา ไม่แผ่กว้างเกินไป
    <div className="max-w-4xl mx-auto px-6 mt-[100px] mb-16 !pt-[15px]">

      {/* Profile Header Block */}
      <div className="flex items-center gap-6 mb-10">
        
        {/* กล่องคลุมรูปภาพ */}
        <div className="w-24 h-24 sm:w-32 sm:h-32 relative flex-shrink-0 !pl-[15px] rounded-full">
          <img
            src="path"
            alt="me"
            /* 🌟 จุดสำคัญที่สั่งแก้ไข: 
               - rounded-full: สั่งทำขอบมนวงกลม
               - aspect-square: บังคับอัตราส่วนกล่องเป็น 1:1 (จัตุรัส) เพื่อให้ rounded-full กลายเป็นทรงกลมเป๊ะ ไม่เป็นรูปไข่
               - object-cover: สั่งให้เนื้อรูปขยายเต็มกล่อง โดยไม่บีบแบนหรือดึงยืดตัวคุณ
            */
            className="w-full h-full !rounded-full !aspect-square object-cover border-2 border-zinc-800 shadow-xl"
          />
        </div>

        <div>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-3xl text-gray-700" >
            Pattarapol Jamsai
          </h1>
          <p className="text-blue-400 font-medium text-sm sm:text-base mt-1">
            Computer Engineering Digital & Technology Student
          
          </p>
          <p className="text-pink-400 font-medium text-sm sm:text-base mt-1"> @ Chulalongkorn University</p>
          <p className="text-zinc-500 text-xs sm:text-sm mt-0.5">
            Web Developer | React | Next.js | Game Dev
          </p>
        </div>
      </div>

      {/* ================= CHAT BOX / README SECTION ================= */}
      <div className="flex flex-col gap-6 !pt-[15px] !pl-[15px]">
        
        {/* กล่องข้อความที่ 1: แนะนำตัวเอง (ฟีล Chat Box ทักทาย) */}
        <div className="relative p-6 rounded-2xl border border-zinc-800 bg-zinc-900/30 backdrop-blur-sm max-w-[90%] md:max-w-[80%] self-start shadow-md">
          {/* ตกแต่งปุ่มเล็กๆ มุมกล่องให้ฟีล Terminal / Window Mac */}
          <div className="flex gap-1.5 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-700"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-700"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-700"></span>
          </div>

          <div className="!pl-[5px] text-gray-700 space-y-3 leading-relaxed">
            <p className="font-semibold text-white text-medium"> ยินดีต้อนรับครับ! นี่คือเว็บไซต์ที่จะมารู้จักตัวผม</p>
            <p>
              ผมชื่อ <span className="text-blue-400 font-medium">เฟิร์ส (Pattarapol Jamsai)</span> ตอนนี้กำลังศึกษาภาควิชาวิศวกรรมคอมพิวเตอร์ดิจิตอลและเทคโนโลยี อยู่ที่จุฬาลงกรณ์มหาวิทยาลัยครับ
            </p>
            <p>
             พื้นที่ตรงนี้เป็นคลังเก็บผลงานที่ผมได้ลองทำในโปรเจควิชาของผม ไม่ว่าจะเป็นการออกแบบโครงสร้าง Frontend และ Backend (Full-Stack) ด้วย React และ Next.js, การวางระบบและจัดการ Database ด้วย mongoDB รวมไปถึงการพัฒนา Game Development 
            </p>
          </div>
        </div>

        {/* กล่องข้อความที่ 2: ฟีล README.md (บอกหัวข้อสิ่งที่กำลังโฟกัส) */}
        <div className="!pl-[5px] relative p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 max-w-[90%] md:max-w-[80%] self-start shadow-md">
          <div className="flex items-center gap-2 text-black text-xs font-mono mb-4 border-b border-zinc-800 pb-2">
            <span>🚀 README.md</span>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-black uppercase tracking-wider mb-2">📌 What I Am Doing</h3>
              <ul className="list-disc list-inside text-zinc-300 text-sm space-y-1.5 pl-1">
                <li>เว็บแอปพลิเคชันนี้ถูกออกแบบด้วย <span className="text-purple-400">Next.js & Tailwind CSS</span></li>
                <li>ศึกษาโครงสร้างสถาปัตยกรรมระบบ และ Clean Code Architecture</li>
                <li>เปิดรับโอกาสใหม่ๆ ในการฝึกงานและร่วมทำโปรเจกต์ (Collaborations)</li>
              </ul>
            </div>

            <div className="pt-2">
              <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-2"></h3>
              <p className="text-zinc-300 text-sm leading-relaxed">
                คุณสามารถเข้าไปดูผลงานโปรเจกต์ทั้งหมดของผมได้ที่หน้า  
                <a href="/portfolio" className="text-red-400 font-medium hover:underline mx-1"> Portfolio </a> 
                หรือหากมีโอกาสดีๆ สามารถติดต่อกันได้ที่หน้า 
                <a href="/contact" className="text-red-400 font-medium hover:underline ml-1"> Contact </a> เลยครับ!
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}