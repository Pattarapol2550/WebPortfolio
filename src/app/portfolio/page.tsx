import Image from "next/image";

export default function Portfolio() {
  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">
        My Portfolio
      </h1>

      {/* การ์ดผลงาน */}
      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-zinc-800 rounded-lg overflow-hidden">

          {/* รูปจาก Canva */}
          <img
            src="/img/port.png"
            alt="Portfolio"
            width={600}
            height={350}
            className="w-full h-auto"
          />

          {/* ข้อมูล */}
          <div className="p-4">
            <h2 className="text-xl font-bold">
              Java Game Project
            </h2>
            <p className="text-sm text-zinc-400">
              Fishing system + tile-based map
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}