import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import PricingTable from './components/PricingTable';
import Footer from './components/Footer';
import { 
  ABOUT_US, 
  WHAT_WE_OFFER,
  WHY_247_ACCESS,
  LOCATION_INFO,
  AMENITIES,
  PRICING,
  TAILORED_SOLUTIONS,
  JOB_HIRING,
  MARKETING_SOLUTIONS,
  CONTACT_INFO
} from './constants';
import { CheckCircleIcon, MapPinIcon, BuildingOffice2Icon, UsersIcon, ChartBarIcon } from './components/Icons';

const App: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <Header />
      <main className="pt-20">
        <section id="about" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Welcome to Nestspace</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">{ABOUT_US.paragraph}</p>
          </div>
        </section>

        <Section id="services" title="What We Offer">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {WHAT_WE_OFFER.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col">
                <h3 className="font-bold text-xl mb-4 text-indigo-600">{item.title}</h3>
                {Array.isArray(item.description) ? (
                  <ul className="space-y-2 text-gray-600">
                    {item.description.map((subItem, subIndex) => (
                      <li key={subIndex} className="flex items-start">
                        <CheckCircleIcon className="w-5 h-5 text-indigo-500 mr-2 flex-shrink-0 mt-1" />
                        <span>{subItem}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-600">{item.description}</p>
                )}
              </div>
            ))}
          </div>
        </Section>

        <Section id="benefits" title="Why Choose 24/7 Access?" className="bg-white">
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_247_ACCESS.map((item, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-2 text-gray-800">{`${index + 1}. ${item.title}`}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </Section>
        
        <Section id="amenities" title="Included Amenities">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {AMENITIES.map((amenity, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center justify-center">
                <CheckCircleIcon className="w-8 h-8 text-indigo-500 mb-2" />
                <span className="font-semibold text-gray-700">{amenity}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section id="pricing" title="Our Pricing Plans" className="bg-white">
          <div className="space-y-12">
            <PricingTable title={PRICING.privateRoomPremium.title} headers={PRICING.privateRoomPremium.headers} data={PRICING.privateRoomPremium.rows} />
            <PricingTable title={PRICING.privateRoomBasic.title} headers={PRICING.privateRoomBasic.headers} data={PRICING.privateRoomBasic.rows} />
            <PricingTable title="Package Comparison" headers={["Feature", "Premium Package", "Basic Package"]} data={PRICING.comparison} />
            <PricingTable title={PRICING.hotDeskFacilities.title} headers={["Feature", "Details"]} data={PRICING.hotDeskFacilities.features} />
            <PricingTable title={PRICING.hotDeskDayPass.title} headers={["Type", "Validity", "Unit/Pass", "Normal Pricing"]} data={PRICING.hotDeskDayPass.passes} />
            <PricingTable title={PRICING.virtualOffice.title} headers={["Duration", "With Signage", "Without Signage"]} data={PRICING.virtualOffice.options} />
            <PricingTable title={PRICING.virtualOfficeFacilities.title} headers={PRICING.virtualOfficeFacilities.headers} data={PRICING.virtualOfficeFacilities.data} />
            <PricingTable title={PRICING.meetingRoom.title} headers={["Package", "Price"]} data={PRICING.meetingRoom.rates} note={PRICING.meetingRoom.note} />
            <PricingTable title={PRICING.eventSpace.title} headers={["Package", "Price"]} data={PRICING.eventSpace.rates} note={PRICING.eventSpace.note} facilities={PRICING.eventSpace.facilities} />
          </div>
        </Section>
        
        <Section id="more-services" title="Tailored Business Solutions">
            <div className="space-y-10">
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                        <BuildingOffice2Icon className="w-8 h-8 text-indigo-600 mr-4" />
                        <h3 className="text-2xl font-bold">Customised Workspaces</h3>
                    </div>
                    {TAILORED_SOLUTIONS.map((sol, i) => (
                        <div key={i} className="mt-6 border-l-4 border-indigo-200 pl-4">
                            <h4 className="font-semibold text-lg">{sol.title}</h4>
                            <p className="text-gray-600 mt-1">{sol.description}</p>
                            <p className="text-gray-500 mt-2 text-sm"><strong>Looking for:</strong> {sol.lookingFor}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-white p-8 rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                        <UsersIcon className="w-8 h-8 text-indigo-600 mr-4" />
                        <h3 className="text-2xl font-bold">Expert Talent Recruitment</h3>
                    </div>
                     {JOB_HIRING.solutions.map((sol, i) => (
                        <div key={i} className="mt-6 border-l-4 border-indigo-200 pl-4">
                            <h4 className="font-semibold text-lg">{sol.title}</h4>
                            <p className="text-gray-600 mt-1">{sol.description}</p>
                            <p className="text-gray-500 mt-2 text-sm"><strong>Looking for:</strong> {sol.lookingFor}</p>
                        </div>
                    ))}
                    <div className="mt-8 border-t border-gray-200 pt-6">
                        <h4 className="font-bold text-xl mb-4 text-gray-800">Why Us?</h4>
                        <ul className="space-y-3">
                            {JOB_HIRING.whyUs.map((point, i) => (
                                <li key={i} className="flex items-start">
                                    <CheckCircleIcon className="w-5 h-5 text-indigo-500 mr-3 flex-shrink-0 mt-1" />
                                    <span className="text-gray-600">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                        <ChartBarIcon className="w-8 h-8 text-indigo-600 mr-4" />
                        <h3 className="text-2xl font-bold">Marketing Solutions</h3>
                    </div>
                    {MARKETING_SOLUTIONS.solutions.map((sol, i) => (
                        <div key={i} className="mt-6 border-l-4 border-indigo-200 pl-4">
                            <h4 className="font-semibold text-lg">{sol.title}</h4>
                            <p className="text-gray-600 mt-1">{sol.description}</p>
                            <p className="text-gray-500 mt-2 text-sm"><strong>Looking for:</strong> {sol.lookingFor}</p>
                        </div>
                    ))}
                    <div className="mt-8 border-t border-gray-200 pt-6">
                        <h4 className="font-bold text-xl mb-4 text-gray-800">Why Us?</h4>
                        <ul className="space-y-3">
                            {MARKETING_SOLUTIONS.whyUs.map((point, i) => (
                                <li key={i} className="flex items-start">
                                    <CheckCircleIcon className="w-5 h-5 text-indigo-500 mr-3 flex-shrink-0 mt-1" />
                                    <span className="text-gray-600">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </Section>

        <Section id="location" title="Our Location" className="bg-white">
           <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center"><MapPinIcon className="w-6 h-6 mr-2 text-indigo-600"/>Getting Here By Car</h3>
              <div className="space-y-4">
                {LOCATION_INFO.byCar.map((loc, i) =>(
                  <div key={i}>
                    <h4 className="font-semibold text-lg">{loc.name}</h4>
                    <p className="text-gray-600">{loc.details}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Getting Here By Public Transport</h3>
                <div className="space-y-6">
                    <div>
                        <h4 className="font-semibold text-lg">LRT</h4>
                        <p className="text-gray-600">{LOCATION_INFO.byPublicTransport.lrt}</p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-lg">Bus</h4>
                        <div className="space-y-2 mt-2">
                            {LOCATION_INFO.byPublicTransport.bus.map((busInfo, i) => (
                                <div key={i}>
                                    <p className="text-gray-800 font-semibold">{busInfo.name}</p>
                                    <p className="text-gray-600">{busInfo.detail}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-gray-600 mt-4">
                            {LOCATION_INFO.byPublicTransport.busNote.text}{' '}
                            <a 
                                href={LOCATION_INFO.byPublicTransport.busNote.url}
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-indigo-600 hover:underline"
                            >
                                {new URL(LOCATION_INFO.byPublicTransport.busNote.url).hostname}
                            </a>
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-lg">MRT</h4>
                        <p className="text-gray-600">{LOCATION_INFO.byPublicTransport.mrt}</p>
                    </div>
                </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer contactInfo={CONTACT_INFO} />
    </div>
  );
};

export default App;
