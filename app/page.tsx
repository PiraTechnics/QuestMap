import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("@/app/ui/Map"), {
  loading: () => <p>A map is loading</p>, //will replace with proper skeleton
  ssr: false,
});

export default function Home() {
  return (
    <main className="min-h-screen">
      <div id="map-wrapper" className="h-dvh p-12">
        <DynamicMap />
      </div>
    </main>
  );
}
