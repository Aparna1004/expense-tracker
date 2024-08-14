import { Button } from "@/components/ui/button";

export function ButtonDemo() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 flex justify-center items-center">
      <Button className="text-base sm:text-lg md:text-xl lg:text-2xl py-2 px-4 sm:py-3 sm:px-6 lg:py-4 lg:px-8">
        Button
      </Button>
    </div>
  );
}
