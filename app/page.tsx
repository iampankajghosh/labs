import { Button } from "./button";

function HomePage() {
  return (
    <section className="min-h-svh w-full flex items-center justify-center bg-neutral-900">
      <Button as="a" href="https://x.com/im_pankajghosh" target="_blank">
        Chat with Pankaj
      </Button>

      <span className="border-t border-white/5 border-dashed w-full translate-y-[23px] absolute"></span>
      <span className="border-b border-white/5 border-dashed w-full -translate-y-[23px] absolute"></span>
      <span className="border-l border-white/5 border-dashed h-full -translate-x-[99px] absolute"></span>
      <span className="border-r border-white/5 border-dashed h-full translate-x-[99px] absolute"></span>
    </section>
  );
}

export default HomePage;
