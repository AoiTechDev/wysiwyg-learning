"use client";

import EditorComponent from "@/components/EditorComponent";
import { useEffect, useState } from "react";
import EditorJS from "@editorjs/editorjs";

export default function Home() {
  const initEditor = () => {
    const editor = new EditorJS({
      holder: "editorjs",
    });
  };

  useEffect(() => {
    initEditor();
  }, []);

  return (
    <div className="w-full h-screen bg-slate-300 flex justify-center items-center">
      <div className="w-3/4 h-3/4 bg-white">
        <div id="editorjs"></div>
      </div>
    </div>
  );
}
