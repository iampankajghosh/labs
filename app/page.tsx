import { ButtonContainer, OrbitButton } from "@/components";
import { twMerge } from "tailwind-merge";

interface TitleProps extends React.ComponentProps<"h1"> {
  children: React.ReactNode;
  className?: string;
}

function Title({ children, className, ...props }: Readonly<TitleProps>) {
  return (
    <h1
      className={twMerge(
        "absolute -top-12 left-4 text-4xl tracking-tighter font-semibold",
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  );
}

function HomePage() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center">
      <ButtonContainer>
        <Title>Orbit Button</Title>

        <OrbitButton>Generate Magic</OrbitButton>
      </ButtonContainer>
    </section>
  );
}

export default HomePage;
