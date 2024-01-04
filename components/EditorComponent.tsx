import React, { useEffect } from "react";

import EditorJS from "@editorjs/editorjs";

const EditorComponent = () => {
  const initEditor = () => {
    const editor = new EditorJS({
      holder: "editorjs",
    });
  };

  useEffect(() => {
    initEditor();
  }, []);

  return <div id="editorjs"></div>;
};

export default EditorComponent;
