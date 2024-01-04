"use client";

import EditorComponent from "@/components/EditorComponent";

export default function Home() {

  return (
    <div className="w-full h-screen bg-slate-300 flex justify-center items-center">
      <div className="w-3/4 h-3/4 bg-white">
        <EditorComponent />
      </div>
    </div>
  );
}
