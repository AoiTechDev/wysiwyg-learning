"use client";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import EditorJS from "@editorjs/editorjs";
import { EDITOR_JS_TOOLS } from "@/tools/tools";

const EditorComponent = () => {
  const ejInstance = useRef<EditorJS | null>();

  const handleSave = () => {
    ejInstance?.current?.save().then((outputData) => {
      console.log("Article data: ", outputData);
    });
  };

  const [saveButtonPortalElement, setSaveButtonPortalElement] =
    useState<Element | null>(null);

  useEffect(() => {
    setSaveButtonPortalElement(document.getElementById("save-btn-portal"));
  }, []);
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
      {saveButtonPortalElement &&
        createPortal(
          <button
            className="px-4 py-2 text-white rounded-lg bg-blue-600"
            onClick={handleSave}
          >
            Save Data
          </button>,
          saveButtonPortalElement
        )}
    </>
  );
};

export default EditorComponent;
