

import EditorComponent from "@/components/EditorComponent";

export default function Home() {
  console.log('home')
  return (
    <>
      <h2 className="mb-20 text-4xl">Case Creator</h2>
      <div className="w-3/4 h-3/4 bg-white pt-4">
        <EditorComponent />
      </div>
    </>
  );
}
