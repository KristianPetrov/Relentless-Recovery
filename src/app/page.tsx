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
    </main>
  );
}
