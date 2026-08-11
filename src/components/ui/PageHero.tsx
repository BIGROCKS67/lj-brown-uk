import Image from "next/image";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  image: string;
};

export function PageHero({ title, subtitle, image }: PageHeroProps) {
  return (
    <section className="relative flex h-[38vh] min-h-[260px] items-end bg-ink pt-16 sm:h-[45vh] sm:min-h-[320px] lg:h-[50vh] lg:min-h-[400px] lg:pt-20">
      <Image
        src={image}
        alt=""
        fill
        className="object-cover object-center opacity-50"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/40" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-8 sm:px-6 sm:pb-12 lg:px-8">
        <h1 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-2 max-w-2xl text-base normal-case tracking-normal text-steel-light sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
