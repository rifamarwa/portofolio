import Footer from "@/components/base/footer/footer";
import BaseNavbar from "@/components/base/navbar/navbar";
import BackgroundDecoration from "@/components/base/background/background";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export default async function HomeLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div className="relative isolate min-h-dvh overflow-hidden bg-background font-philosopher">
        <BackgroundDecoration />
        <BaseNavbar />
        <main className="relative z-10 w-full">{children}</main>
        <div className="relative z-10 w-full pt-16">
          <Footer />
        </div>
      </div>
    </NextIntlClientProvider>
  );
}
