import React from 'react'
import { FaCogs, FaUserAlt, FaCertificate, FaTools, FaRocket, FaHandshake, FaListAlt, FaBalanceScale } from "react-icons/fa"


export default function Services() {
    return (
        <div>
            <div className="bg-white pt-16 sm:pt-16 lg:pt-8">
                <div className="mx-auto max-w-7xl">
                    <div className="text-center">
                        <h2 className="text-lg font-semibold leading-8 text-xl text-red-600">Cedonia</h2>
                        <p className="mt-2 text-5xl font-bold tracking-tight text-zinc-900 sm:text-6xl">Our Services</p>
                    </div>

                    <div className="mt-12 px-6 max-w-full sm:mx-auto md:max-w-none">
                        <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 py-16 md:gap-x-12 md:gap-y-16">
                            <div className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-red-500 text-white sm:shrink-0">
                                    <FaCogs size={"2em"} />
                                </div>
                                <div className="sm:min-w-0 sm:flex-1">
                                    <p className="text-3xl font-semibold leading-8 text-zinc-900">Diverse Machining</p>
                                    <p className="mt-2 text-base leading-7 text-zinc-600 text-justify">Cedonia has been in the business of custom machining since 1996. We have the capabilities to design
                                        and manufacture complex, high precision parts, products and sub-assemblies to meet the diverse needs of our equally varied client base. We have fabricated
                                        components for businesses in:
                                    </p>
                                    <div className='grid grid-cols-2 text-zinc-900 font-bold'>
                                        <p className="mt-2 text-base leading-7">✓ Automotive</p>
                                        <p className="mt-2 text-base leading-7">✓ Aerospace</p>
                                        <p className="mt-2 text-base leading-7">✓ Nuclear</p>
                                        <p className="mt-2 text-base leading-7">✓ Military</p>
                                        <p className="mt-2 text-base leading-7">✓ Pharmaceutical</p>
                                        <p className="mt-2 text-base leading-7">✓ Mining</p>
                                        <p className="mt-2 text-base leading-7">✓ Pipe Evaluation / Inspection</p>
                                        <p className="mt-2 text-base leading-7">✓ Construction</p>
                                        <p className="mt-2 text-base leading-7">✓ Technical skills upgradation</p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-red-500 text-white sm:shrink-0">
                                    <FaUserAlt size={"2em"} />
                                </div>
                                <div className="sm:min-w-0 sm:flex-1">
                                    <p className="text-3xl font-semibold leading-8 text-zinc-900">Core Capabilities</p>
                                    <p className="mt-2 text-base leading-7 text-zinc-600 text-justify">With the latest, future-ready machines and over 240 years of collective experience and technical
                                        expertise, Cedonia is well-equipped to handle conventional machining, precision machining, as well as custom machining requests in Toronto and the Greater
                                        Toronto Area. These include:
                                    </p>
                                    <div className='grid grid-cols-2 text-zinc-900 font-bold'>
                                        <p className="mt-2 text-base leading-7">✓ Conventional Turning / Milling</p>
                                        <p className="mt-2 text-base leading-7">✓ MIG / TIG Welding</p>
                                        <p className="mt-2 text-base leading-7">✓ Grinding</p>
                                        <p className="mt-2 text-base leading-7">✓ Boring</p>
                                        <p className="mt-2 text-base leading-7">✓ Cutting</p>
                                        <p className="mt-2 text-base leading-7">✓ Drilling</p>
                                        <p className="mt-2 text-base leading-7">✓ CNC Turning 2 to 4 axis / CNC Milling 2 to 5 axis simultaneous</p>
                                        <p className="mt-2 text-base leading-7">✓ CNC Sink EDM 4 axis / CNC Wire EDM up to 16.5” high</p>
                                        <p className="mt-2 text-base leading-7">✓ CAD / CAM</p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-red-500 text-white sm:shrink-0">
                                    <FaTools size={"2em"} />
                                </div>
                                <div className="sm:min-w-0 sm:flex-1">
                                    <p className="text-3xl font-semibold leading-8 text-zinc-900">Materials</p>
                                    <p className="mt-2 text-base leading-7 text-zinc-600">We have successfully worked with a variety of materials, including:</p>
                                    <div className='grid grid-cols-2 text-zinc-900 font-bold'>
                                        <p className="mt-2 text-base leading-7">✓ Carbon Steel</p>
                                        <p className="mt-2 text-base leading-7">✓ Stainless Steel</p>
                                        <p className="mt-2 text-base leading-7">✓ Tool Steel</p>
                                        <p className="mt-2 text-base leading-7">✓ Plastics</p>
                                        <p className="mt-2 text-base leading-7">✓ Aluminum</p>
                                        <p className="mt-2 text-base leading-7">✓ Brass</p>
                                        <p className="mt-2 text-base leading-7">✓ Bronze</p>
                                        <p className="mt-2 text-base leading-7">✓ Other Hardened Alloys</p>
                                    </div>
                                    <p className="mt-2 text-base leading-7 text-zinc-600">
                                        If you have any other materials in mind, we can definitely customize the delivery based on your exact requirements.
                                    </p>
                                </div>
                            </div>

                            <div className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-red-500 text-white sm:shrink-0">
                                    <FaHandshake size={"2em"} />
                                </div>
                                <div className="sm:min-w-0 sm:flex-1">
                                    <p className="text-3xl font-semibold leading-8 text-zinc-900">Ancillary Services</p>
                                    <p className="mt-2 text-base leading-7 text-zinc-600 text-justify">
                                        Over the years, our clients have become a part of the extended family at Cedonia. Due to the long association with many of our loyal customers,
                                        we have gained a deep understanding of their businesses. This, in turn, led to the introduction of certain ancillary services that we could deliver
                                        through our existing capabilities. Today, we are happy to extend these services to all our clients, old and new:
                                    </p>
                                    <div className='grid grid-cols-2 text-zinc-900 font-bold'>
                                        <p className="mt-2 text-base leading-7">✓ Heat Treatment</p>
                                        <p className="mt-2 text-base leading-7">✓ Laser Engraving</p>
                                        <p className="mt-2 text-base leading-7">✓ Anodizing/Plating</p>
                                        <p className="mt-2 text-base leading-7">✓ Passivation & Sanitization</p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-red-500 text-white sm:shrink-0">
                                    <FaCertificate size={"2em"} />
                                </div>
                                <div className="sm:min-w-0 sm:flex-1">
                                    <p className="text-3xl font-semibold leading-8 text-zinc-900">Quality Control Measures</p>
                                    <p className="mt-2 text-base leading-7 text-zinc-600 text-justify">
                                        When it comes to machining and fabrication, both, quality and precision are paramount. At Cedonia, we have put in place stringent quality
                                        control measures, and are proud to meet world-class industry standards:
                                    </p>
                                    <div className='grid grid-cols-2 text-zinc-900 font-bold'>
                                        <p className="mt-2 text-base leading-7">✓ ISO 9001:2015 registered</p>
                                        <p className="mt-2 text-base leading-7">✓ CSA Z299.3 compliant</p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-red-500 text-white sm:shrink-0">
                                    <FaRocket size={"2em"} />
                                </div>
                                <div className="sm:min-w-0 sm:flex-1">
                                    <p className="text-3xl font-semibold leading-8 text-zinc-900">Lead Times</p>
                                    <p className="mt-2 text-base leading-7 text-zinc-600 text-justify">
                                        While we deliver standard requirements in 1 to 4 weeks based on the nature of the project, don’t
                                        hesitate to check with us about a rush delivery, as and when you need one.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='bg-zinc-100'>
                    <div className="mx-auto max-w-7xl">
                        <div className="grid grid-cols-1 px-6 gap-y-16 md:grid-cols-1 py-16 md:gap-x-12 md:gap-y-16">
                            <div className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                                <div className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-red-500 text-white sm:shrink-0">
                                        <FaBalanceScale size={"2em"} />
                                    </div>
                                    <div className="sm:min-w-0 sm:flex-1">
                                        <p className="text-3xl font-semibold leading-8 text-zinc-900">CNC Machining Versus Conventional Machining</p>
                                        <p className="mt-2 text-base leading-7 text-zinc-600 text-justify">
                                            At Cedonia, we can deliver precision prototypes, as well as high volume requirements. For better production efficiencies, reduced cycle times, and
                                            identical construction of simple, or complex components, consider our CNC machining services in Mississauga. Due to their automated, programmable,
                                            computer-controlled features, CNC machines deliver consistent results for all your prototypes and mass fabrication requirements.
                                        </p>
                                        <p className="mt-2 text-base leading-7 text-zinc-600 text-justify">
                                            However, if you require unique, custom pieces, reprogramming the CNC machines is time-consuming, tedious and costly. At such times, conventional machining
                                            is the way to go. Our highly-skilled technicians look forward to understanding your precision and quality requirements. Rest assured, we will deliver the
                                            products you need at unmatched speed and highly competitive prices.
                                        </p>
                                        <p className="mt-2 text-base leading-7 text-zinc-600 text-justify">
                                            To know more about our machining capabilities and how we can serve you better, give us a call today.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='bg-zinc-200'>
                    <div className="mx-auto max-w-7xl">
                        <div className="grid grid-cols-1 px-6 gap-y-16 md:grid-cols-1 py-16 md:gap-x-12 md:gap-y-16">
                            <div className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                                <div className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-red-500 text-white sm:shrink-0">
                                        <FaListAlt size={"2em"} />
                                    </div>
                                    <div className="sm:min-w-0 sm:flex-1">
                                        <p className="text-3xl font-semibold leading-8 text-zinc-900">Equipment List for Machining Capabilities: Here is an indicative list of the equipment at our 28,000 square foot facility in Mississauga, Ontario:</p>
                                        <p className="mt-2 text-base leading-7 text-zinc-900">✓ (2x) DECKEL MAHO DMU 100T CNC CONTINUOUS 5 AXIS MILLING CENTRE (Travels: X = 40″ Y = 28″, Z = 28″, C and B Axis)</p>
                                        <p className="mt-2 text-base leading-7 text-zinc-900">✓ (1x) DECKEL MAHO DMU 85 MONOBLOCK, CNC CONTINUOUS 5 AXIS MILLING CENTRE (Travels: X = 37″ Y = 33.5″, Z = 26″, C and A Axis)</p>
                                        <p className="mt-2 text-base leading-7 text-zinc-900">✓ (1x) DECKEL MAHO DMU 65 MONOBLOCK, CNC CONTINUOUS 5 AXIS MILLING CENTRE (Travels: X = 29″ Y = 25.5″, Z = 22″, C and A Axis)</p>
                                        <p className="mt-2 text-base leading-7 text-zinc-900">✓ (1x) DECKEL MAHO DMU60 CNC CONTINUOUS 5 AXIS MILLING CENTRE (Travels: X = 29″ Y = 22″, Z = 22″, C and B Axis)</p>
                                        <p className="mt-2 text-base leading-7 text-zinc-900">✓ (1x) HAAS VF6 CNC VERTICAL MACHINING CENTRE (Travels: X = 64″ Y = 32″, Z = 38″, +C Axis)</p>
                                        <p className="mt-2 text-base leading-7 text-zinc-900">✓ (1x) HAAS VF5 CNC VERTICAL MACHINING CENTRE (Travels: X = 50″ Y = 26″, Z = 28″, +C Axis)</p>
                                        <p className="mt-2 text-base leading-7 text-zinc-900">✓ (1x) (HAAS VF4 CNC VERTICAL MACHINING CENTRE (Travels: X = 50″ Y = 20″, Z = 28″, +C Axis)</p>
                                        <p className="mt-2 text-base leading-7 text-zinc-900">✓ (1x) FORTUNE CNC LATHE (Turning Dia = 20″x 50″, Bar Capacity: 3.5”)</p>
                                        <p className="mt-2 text-base leading-7 text-zinc-900">✓ (1x) MAZAK 450M, 2+1 AXIS CNC TURNING/ MILLING CENTER (Dia = 25 x 40″, 4.5” Bore)</p>
                                        <p className="mt-2 text-base leading-7 text-zinc-900">✓ (1x) MAZAK Quick Turn 250, CNC LATHE (Dia = 12” x 25″)</p>
                                        <p className="mt-2 text-base leading-7 text-zinc-900">✓ (1x) MAZAK 200 MSY,4 AXIS CNC TURNING/ MILLING CENTER, Y Axis and Sub Spindle (Dia = 12″)</p>
                                        <p className="mt-2 text-base leading-7 text-zinc-900">✓ (1x) CHARMILLE CNC SINK EDM (Travels: X = 24″ Y = 16″, Z = 18″)</p>
                                        <p className="mt-2 text-base leading-7 text-zinc-900">✓ (1x) AGIE CHARMILLE CNC DRILL 20 (Travels: X = 16″ Y = 10″, Z = 14″)</p>
                                        <p className="mt-2 text-base leading-7 text-zinc-900">✓ (1x) SODICK WIRE EDM (Travels: X = 20″ Y = 14″, Z = 13″)</p>
                                        <p className="mt-2 text-base leading-7 text-zinc-900">✓ (1x) AGIE CLASSIC 3 CNC WIRE EDM (Travels: X = 20″ Y = 14″, Z = 16.8″)</p>
                                        <p className="mt-2 text-base leading-7 text-zinc-900">✓ CMM- CNC-ZEISS CONTURA (28” X 40” X 23”)</p>
                                        <p className="mt-2 text-base leading-7 text-zinc-900">✓ CMM- CNC-ZEISS DURAMAX (20” X 20” X 20”)</p>
                                        <p className="mt-2 text-base leading-7 text-zinc-900">✓ POLI-MANUAL CMM (28” X 30” X 18”)</p>
                                        <p className="mt-2 text-base leading-7 text-zinc-900">✓ (2x) CONVENTIONAL LATHES</p>
                                        <p className="mt-2 text-base leading-7 text-zinc-900">✓ 24″ Swing X 160″</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
