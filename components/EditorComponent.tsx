import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
} from "react";

import { createReactEditorJS } from "react-editor-js";
import { EDITOR_JS_TOOLS } from "@/tools/tools";


type Props = {
  data: any;
  setData: Dispatch<SetStateAction<any>>;
};


const EditorComponent = () => {
    const editorCore = useRef(null);
  const ReactEditorJS = createReactEditorJS();
 
  const handleInitialize = useCallback((instance: any) => {
    editorCore.current = instance
  }, [])



  return (
    <div className="editor-container">
      <ReactEditorJS
        onInitialize={handleInitialize}
        tools={EDITOR_JS_TOOLS}
        // onChange={handleSave}
        // defaultValue={data}
      />
    </div>
  );
};

export default EditorComponent;
