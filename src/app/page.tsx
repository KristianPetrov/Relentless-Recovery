import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6">
      {/* Hero */}
      <section id="hero" className="pt-12 sm:pt-16 pb-10 text-center">
        <div className="flex justify-center">
          <Image
            src="/RelentlessRecoverylogo.png"
            alt="Relentless Recovery logo"
            width={520}
            height={520}
            priority
            className="h-auto w-[380px] sm:w-[440px] md:w-[520px] object-contain"
          />
        </div>
      </section>

      {/* Vision */}
      <section id="vision" className="py-12">
        <div className="rounded-2xl bg-blue-800 border-2 border-white shadow-xl p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Vision Statement</h2>
          <div className="mt-6 space-y-4 text-white/95 leading-relaxed">
            <p>
              Our vision is to create a world where every individual struggling with substance use has the opportunity to reclaim their life, reconnect with their loved ones, and rediscover a sense of purpose through faith, family, and community. We believe that no person is defined by their past choices, but rather by their willingness to seek help and embrace change. Every client deserves a pathway that recognizes their unique circumstances, challenges, and strengths. By providing careful assessments and ensuring placement with the appropriate level of care, we aim to remove the barriers-social, economic, or environmental-that too often stand in the way of recovery.
            </p>
            <p>
              We see recovery not just as the absence of addiction, but as the restoration of dignity, hope, and meaningful relationships. Our vision is to help clients rebuild bonds with family, reconnect with God or their higher power, and step into a renewed sense of possibility. We strive to be a guiding light in the journey of healing, offering compassion, integrity, and direction so that every individual we serve can experience the freedom and fulfillment of a second chance at life.
            </p>
          </div>
        </div>
      </section>

      {/* About / Mission */}
      <section id="about" className="py-12">
        <div className="rounded-2xl bg-blue-800 border-2 border-white shadow-xl p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">About</h2>
          <h3 className="mt-2 text-lg font-medium text-white">Mission Statement</h3>
          <div className="mt-4 space-y-4 text-white/95 leading-relaxed">
            <p>{`Our mission is to guide individuals seeking recovery by providing personalized assessments and connecting them with the right treatment programs for substance use and co-occurring mental health needs. We partner with trusted facilities in California and Nashville to ensure clients receive care from qualified clinical teams who understand the importance of addressing the whole person. By recognizing each client's unique path, we foster opportunities for healing, restoration, and spiritual growth. We are committed to helping clients reconnect with their families, rediscover their higher power, and embrace the second chance at life that recovery makes possible.`}</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-12">
        <div className="rounded-2xl bg-blue-800 border-2 border-white shadow-xl p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white text-center">Contact</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            <div className="space-y-2">
              <p className="text-white/95 text-lg font-medium">Christopher Weeden</p>
              <p className="text-white/90">Founder & CEO</p>
            </div>
            <div className="space-y-3 sm:text-right">
              <a href="tel:7147185477" className="inline-flex items-center gap-2 text-white hover:underline underline-offset-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M2 5.75C2 4.784 2.784 4 3.75 4h2.02c.84 0 1.56.586 1.72 1.41l.57 2.86c.13.67-.19 1.35-.79 1.68l-1.15.64c.86 1.89 2.37 3.4 4.26 4.26l.64-1.15c.33-.6 1.01-.92 1.68-.79l2.86.57c.83.16 1.41.88 1.41 1.72v2.02c0 .966-.784 1.75-1.75 1.75H16c-7.18 0-13-5.82-13-13V5.75z"/>
                </svg>
                (714) 718-5477
              </a>
              <a href="mailto:relentlessrecoveryofoklahoma@gmail.com" className="inline-flex items-center gap-2 text-white hover:underline underline-offset-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M2.25 6.75A2.25 2.25 0 0 1 4.5 4.5h15a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 19.5 19.5h-15a2.25 2.25 0 0 1-2.25-2.25V6.75zm2.4.75 7.35 4.41 7.35-4.41a.75.75 0 0 0-.6-1.35H5.25a.75.75 0 0 0-.6 1.35zm15.6 1.89-7.14 4.28a1.5 1.5 0 0 1-1.62 0L4.35 9.39v7.86c0 .414.336.75.75.75h13.8a.75.75 0 0 0 .75-.75V9.39z"/>
                </svg>
                relentlessrecoveryofoklahoma@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
