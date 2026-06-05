import Footer from "@/components/base/footer/footer";
import BaseNavbar from "@/components/base/navbar/navbar";
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
      <div className="relative min-h-dvh overflow-hidden bg-background font-philosopher dark:bg-background">
        {/* Background Decoration */}
        <div className="pointer-events-none fixed -bottom-24 right-0 z-0">
          <Image
            src="/assets/background/bg-main-light.png"
            alt=""
            width={1080}
            height={1080}
            className="block w-130 object-cover opacity-30 dark:hidden sm:w-170 lg:w-215 3xl:w-260"
            priority
          />

          <Image
            src="/assets/background/bg-main-dark.png"
            alt=""
            width={1080}
            height={1080}
            className="hidden w-130 object-cover opacity-30 dark:block sm:w-170 lg:w-215 3xl:w-260"
            priority
          />
        </div>

        <BaseNavbar />

        <main className="relative z-10 w-full">{children}</main>

        <div className="relative z-10 w-full pt-16">
          <Footer />
        </div>
      </div>
    </NextIntlClientProvider>
  );
}
