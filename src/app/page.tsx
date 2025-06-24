import dynamic from "next/dynamic";

const Editor = dynamic(() => import("@/components/Editor"));

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Editor />
    </div>
  );
}
