import Policy from '@/components/Policy';
import Image from 'next/image';

export default function ManningPage() {
  return (
    <div>
    <div className="px-4 py-10 max-w-5xl mx-auto space-y-12">
      <section className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8">Manning Services</h1>
        <p className="text-lg max-w-3xl mx-auto font-semibold">
          POAC’s Hire
        </p>
        <div className="mt-6 flex flex-col md:flex-row gap-50 items-center justify-center">
          <Image
            src="/images/crew.jpg"
            alt="POAC's Hire"
            width={300}
            height={100}
            className="rounded-lg shadow-md"
          />
          <div className="text-left">
            <p className="">
              Our internationally certified POACs bring over a decade of mooring expertise across the Gulf of Guinea. Skilled in handling vessels ranging from Handymax to ULCC, our team has successfully executed over 3,000 STS operations with zero incidents, demonstrating unmatched reliability and professionalism.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-center mb-4 md:mb-0 md:mt-20">Crew Management</h2>
        <div className="flex flex-col md:flex-row gap-20 items-center">
          <Image
            src="/images/crew3.jpg"
            alt="Crew Management"
            width={400}
            height={300}
            className="rounded-lg shadow-md"
          />
          <div>
            <p className="mb-4 md:mt-22">
              At Atlantic Fenders & Support Services (AFSS), we offer reliable crew management solutions designed to meet the operational demands of the marine and offshore industry. We recruit, deploy, and manage qualified and certified seafarers who meet both international standards and client-specific requirements.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Selection and recruitment of skilled marine personnel</li>
              <li>Contract management and payroll services</li>
              <li>Compliance with STCW, MLC, and flag-state requirements</li>
              <li>Onboarding, briefing, and crew rotation planning</li>
              <li>Performance monitoring and training support</li>
            </ul>
            <p className="mt-4 text-gray-800">
              With a strong focus on safety, competence, and professionalism, AFSS ensures that every crew member onboard is prepared to deliver efficient and compliant operations—whether for vessel supply, offshore logistics, or ship-to-ship transfers.
            </p>
          </div>
        </div>
      </section>
    </div>
    <Policy />
    </div>
  );
}
