import Footer from "@/components/base/footer/footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Image from "next/image";

export default async function HomeLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;

  params: Promise<{
    locale: string;
  }>;
}>) {
  const { locale } = await params;

  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div className="flex flex-col flex-1 items-center justify-center bg-background font-philosopher dark:bg-background relative ">
        <div className="fixed -bottom-20 right-0 z-10">
          <Image
            src="/assets/background/bg-main-light.png"
            alt="background"
            width={1080}
            height={1080}
            className="opacity-40 w-3xl xl:w-5xl object-cover block dark:hidden"
            priority
          />

          <Image
            src="/assets/background/bg-main-dark.png"
            alt="background"
            width={1080}
            height={1080}
            className="opacity-40 w-3xl xl:w-5xl object-cover hidden dark:block"
            priority
          />
        </div>
        <main className="flex flex-1 w-full max-w-7xl flex-col items-start justify-between z-20">
          {children}
        </main>

        <div className="pt-16 w-full">
          <Footer />
        </div>
      </div>
    </NextIntlClientProvider>
  );
}
