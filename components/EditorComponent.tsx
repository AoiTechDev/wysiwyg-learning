'use client'
import React, { useEffect, useRef } from "react";

import EditorJS from "@editorjs/editorjs";
import { EDITOR_JS_TOOLS } from "@/tools/tools";

const EditorComponent = () => {
    console.log('editor')
    const ejInstance = useRef<EditorJS | null>();
  const initEditor = () => {
    const editor = new EditorJS({
      holder: "editorjs",
      onReady: () => {
        ejInstance.current = editor;
      },
      tools: EDITOR_JS_TOOLS,
     
    });
  };

  useEffect(() => {
    if (ejInstance.current === null) {
      initEditor();
    }
    
    return () => {
      ejInstance?.current?.destroy();
      ejInstance.current = null;
    };
  }, []);

  return (
    <>
      <div id="editorjs"></div>
    </>
  );
};

export default EditorComponent;
