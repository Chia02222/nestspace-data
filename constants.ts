
export const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#benefits', label: 'Benefits' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#more-services', label: 'Solutions' },
  { href: '#location', label: 'Location' },
  { href: '#contact', label: 'Contact' },
];

export const ABOUT_US = {
  paragraph: "Since 2018, Nestspace Malaysia has been helping SMEs and startups grow. We offer everything you need to start, run, and scale your business. We're here to support you at every stage of your business journey, from starting out to scaling up."
};

export const WHAT_WE_OFFER = [
  {
    title: 'Workspace',
    description: [
      'Private Room',
      'Hot Desk',
      'Virtual Office',
      'Meeting Room',
      'Coaching Room',
      'Event Space',
    ],
  },
  { title: 'Events', description: 'Engage with our vibrant community through curated events, workshops, and networking sessions.' },
  { title: 'Talent Solution', description: 'Accelerate your growth by connecting with top talent through our recruitment and staffing services.' },
  { title: 'Investor Matching', description: 'Gain access to our exclusive network of investors to secure funding and scale your venture.' },
];

export const WHY_247_ACCESS = [
    { title: 'No More Family Interruptions', description: 'Conduct calls withoutwaking the kids or disturbing your partner.' },
    { title: 'Work Freely After Midnight', description: 'Our space is accessible past 12AM — built for your global schedule.' },
    { title: 'Skip the Traffic', description: 'Avoid the rush hour, a 1-hour commute becomes just 15 minutes from home.' },
    { title: 'Not Centralize Air-Cond', description: 'Access the aircond anytime you need, just off it when you are not using it.' },
    { title: 'Food Still Available Nearby', description: 'Need supper? Plenty of late-night eateries in walking distance.' },
    { title: 'Free Parking After 6PM', description: 'No more parking stress. Arrive anytime after 6PM and park with ease.' },
];

export const LOCATION_INFO = {
    byCar: [
        { name: 'The Starling Car Park', details: '(More than 2,100 car park bays) Directly accessible from LDP via a tunnel between Maybank and Ambank. Also accessible from Jalan SS21/37.' },
        { name: 'Uptown 7 Car Park', details: '(More than 1,400 car park bays) Accessible from Jalan SS21/39.' },
        { name: 'MBPJ Car Park', details: 'Park Surround the Nestspace. Weekday: 2 Hour parking. Weekend & Public Holiday: Free parking.' }
    ],
    byPublicTransport: {
        lrt: '802 shuttle bus goes from Kelana Jaya LRT station to Damansara Uptown (Barat) (Pj134) and back to Kelana Jaya LRT Station.',
        bus: [
            { name: '802 Bus', detail: 'Stop at Damansara Uptown (Barat) (Pj134) (in front DAP office)'},
            { name: 'T813 Bus', detail: 'Stop at SS21/1A (PJ142) (in front DAP office)'},
        ],
        busNote: {
            text: 'For more info, please visit',
            url: 'https://moovitapp.com/kuala_lumpur-1082/poi/en'
        },
        mrt: 'T813 shuttle bus goes from Taman Tun Dr Ismail MRT station and back to TTDI MRT Station.'
    }
};

export const AMENITIES = [
    'High Speed Wifi', 'Business-class printers', 'Cleaning Service', 'Coffee & Tea',
    'On Site Staff', '24/7 Access', 'Mail & Package Handling', 'Office Supplies'
];

export const PRICING = {
    privateRoomPremium: {
        title: 'Private Room (Premium Package)',
        headers: ['Duration', 'Unit/Pax', '2 Pax', '3 Pax', '4 Pax', '5 Pax', '6 Pax'],
        rows: [
            ['1 Month', 'RM450/Pax', 'RM900/Mon', 'RM1350/Mon', 'RM1800/Mon', 'RM2250/Mon', 'RM2700/Mon'],
            ['3 Months', 'RM430/Pax', 'RM860/Mon', 'RM1290/Mon', 'RM1720/Mon', 'RM2150/Mon', 'RM2580/Mon'],
            ['6 Months', 'RM400/Pax', 'RM800/Mon', 'RM1200/Mon', 'RM1600/Mon', 'RM2000/Mon', 'RM2400/Mon'],
            ['12 Months', 'RM350/Pax', 'RM700/Mon', 'RM1050/Mon', 'RM1400/Mon', 'RM1750/Mon', 'RM2100/Mon'],
        ]
    },
    privateRoomBasic: {
        title: 'Private Room (Basic Package)',
        headers: ['Duration', 'Unit/Pax', '2 Pax', '3 Pax', '4 Pax', '5 Pax', '6 Pax'],
        rows: [
            ['1 Month', 'RM400/Pax', 'RM800/Mon', 'RM1200/Mon', 'RM1600/Mon', 'RM2000/Mon', 'RM2400/Mon'],
            ['3 Months', 'RM380/Pax', 'RM760/Mon', 'RM1140/Mon', 'RM1520/Mon', 'RM1900/Mon', 'RM2280/Mon'],
            ['6 Months', 'RM350/Pax', 'RM700/Mon', 'RM1050/Mon', 'RM1400/Mon', 'RM1750/Mon', 'RM2100/Mon'],
            ['12 Months', 'RM300/Pax', 'RM600/Mon', 'RM900/Mon', 'RM1200/Mon', 'RM1500/Mon', 'RM1800/Mon'],
        ]
    },
    comparison: [
        ['24/7 Access', 'Included (weekend & public holiday)', '24/7 Access'],
        ['High Speed Internet (Wifi)', 'Included', 'Included'],
        ['Electricity', 'Included', 'RM60 Credits'],
        ['Business Address & Mail Handling', 'Included', '30% Off'],
        ['Business Signboard', 'Included', '30% Off'],
        ['Meeting room', '12 hours/month', '30% Off'],
        ['Event Space', '30% Off', '15% Off'],
        ['Drinks Voucher at café', 'Up to RM150 worth voucher', '30% Off'],
    ],
    hotDeskFacilities: {
        title: 'Hot Desk Facilities',
        features: [
            ['Access', '9AM - 6PM (Monday to Friday)'],
            ['High Speed Internet (Wifi)', 'Included'],
            ['Electricity', 'Included'],
            ['Business & Mail Handling', '15% Off'],
            ['Signboard', '15% Off'],
            ['Meeting room', '15% Off'],
            ['Event Space', '15% Off'],
            ['Drinks Voucher at cafe', '30% Off / Buy 1 Free 1 (Depends on promotion)'],
        ]
    },
    hotDeskDayPass: {
        title: 'Hot Desks - Daypass',
        passes: [
            ['5 DayPass', '12 Months', 'RM25', 'RM125'],
            ['10 DayPass', '12 Months', 'RM22.50', 'RM225'],
            ['20 DayPass', '12 Months', 'RM20', 'RM400'],
            ['50 DayPass', '12 Months', 'RM18', 'RM900'],
        ]
    },
    virtualOffice: {
        title: 'Virtual Office',
        options: [
            ['6 Months', 'RM700', 'RM350'],
            ['12 Months', 'RM1000', 'RM550'],
        ]
    },
    virtualOfficeFacilities: {
        title: 'Virtual Office Facilities',
        headers: ['Feature', '6 Months', '12 Months'],
        data: [
            ['Business Address', 'Included', 'Included'],
            ['Mail Handling', 'Included', 'Included'],
            ['Day Pass', 'Not included', '12 Day Pass'],
            ['Meeting Room', 'Not Included', '5 Hours'],
            ['Event Space', 'Not Included', '15% Off'],
        ]
    },
    meetingRoom: {
        title: 'Meeting Room and Coaching Room',
        rates: [
            ['Hourly Rate', 'RM50/Hour'],
            ['1 Month', 'RM450/Month'],
            ['3 Months', 'RM400/Month'],
            ['6 Months', 'RM300/Month'],
            ['12 Months', 'RM200/Month'],
        ],
        note: '**Monthly package is for 10 hours/month'
    },
    eventSpace: {
        title: 'Event Space',
        rates: [
            ['Hourly', 'RM150'],
            ['1 Session (4 Hours)', 'RM400'],
            ['2 Sessions (8 Hours)', 'RM800'],
            ['4 Sessions (4 x 4 Hours)', 'RM1000'],
            ['1 Month', 'RM1000/month'],
            ['3 Months', 'RM900/month'],
            ['6 Months', 'RM700/month'],
            ['12 Months', 'RM500/month'],
        ],
        note: '**Monthly package for event space is for 10 hours/month',
        facilities: [
            'Tables & Chairs with Setup (Classroom & Theatre)',
            'High Speed Internet (Wifi)',
            'Electricity',
            'Water',
            'TV (x2)',
            'Whiteboard',
            'PA System with 2 wireless mic'
        ]
    }
};

export const TAILORED_SOLUTIONS = [
    { title: 'Solution 01: A Custom-Built Space Within Nestspace\'s Premises', description: 'Our team will work with you to find the perfect location within our space, based on your needs.', lookingFor: 'No hassle with sourcing for location and documentation on new leases. Immediate move-in solution. Flexibility to adapt and accommodate to growing team sizes. Shared facilities within Nestspace premise.'},
    { title: 'Solution 02: Custom-Built Space at a Location of Your Choice', description: 'Tell us your preferred location, and we will custom-build a space specifically for you. Our experienced team will manage the entire end-to-end solution for you (lease, design & build, and community management).', lookingFor: 'Single point of contact for end-to-end office move solution. Quick office move-in speed. Access to Nestspace\'s membership benefits.'},
    { title: 'Solution 03: Upgrade Your Company Workspace', description: 'We\'ll transform your current office or building into a space that perfectly meets your needs.', lookingFor: 'A change in your company\'s office culture. A fresh, modern look for your office. Retaining and attracting top talent.'}
];

export const JOB_HIRING = {
    solutions: [
        { title: 'Solution 01: Full-Service Recruitment', description: 'After understanding your requirements, we\'ll post the job, source and filter candidates, and provide you with the best options to interview.', lookingFor: 'End-to-end recruitment support. Time-saving and hassle-free hiring process. Candidate replacements with a 3-month warranty.' },
        { title: 'Solution 02: Job Posting & Candidate Sourcing', description: 'Let us handle your job postings and connect you with the right candidates. We\'ll post your job across relevant platforms, giving you access to a wider pool of talent.', lookingFor: 'Job postings on popular platforms and networks. Access to a wide pool of potential candidates. Flexible pricing based on the number of job postings.' },
        { title: 'Solution 03: Temporary & Contract Staffing', description: 'We provide skilled professionals for short-term or contract roles, allowing you to meet immediate staffing needs.', lookingFor: 'Quick access to temporary or contract staff. Flexibility for short-term hires or contract-to-permanent roles. Rapid turnaround for urgent staffing needs.' }
    ],
    whyUs: [
        'Access to a Growing Talent Pool - Tap into our expanding network of talent within the coworking and startup community.',
        'Fast, Reliable, and Industry-Specific Hiring – We provide quick and dependable recruitment tailored to your industry needs.',
        'We Understand Modern Business Needs – We know what today’s businesses require — because we are one.'
    ]
};

export const MARKETING_SOLUTIONS = {
    solutions: [
        { title: 'Solution 01: Our Marketing Services – Built for Impact', description: 'We\'ll help you grow your brand with Meta Ads, content creation, and email campaigns targeting Nestspace\'s relevant audience.', lookingFor: 'Meta Ads setup and management. Custom content production (graphics, videos, copywriting). Email campaigns. Tracking and optimizing campaigns for better results.' },
        { title: 'Solution 02: Event Marketing & Promotion', description: 'Maximize your event\'s success with our end-to-end event marketing solutions. From planning and promotion to on-site support, we ensure your event gets the attention it deserves.', lookingFor: 'Comprehensive event promotion strategy. Event marketing across multiple platforms. On-site support and audience engagement.' },
        { title: 'Solution 03: Social Media Growth & Engagement', description: 'Increase your brand\'s presence and engagement across all major social media platforms. We\'ll develop a strategy, create engaging content, and handle the management.', lookingFor: 'Social media content creation and management. Building audience engagement and loyalty. Measurable results to track social growth.' }
    ],
    whyUs: [
        'We combine creativity, execution, and community reach.',
        'In-House Team + Trusted Partners - From content creators to media connections, we bring together the right people for the right results.',
        'Community-Centered Strategy - Leveraging our coworking and networking communities, we amplify your message organically for greater impact.',
        'Results That Matter - We don’t just create content; we turn it into action. Our campaigns focus on reach, leads, and building brand loyalty.'
    ]
};

export const CONTACT_INFO = {
    name: 'Albert Chee',
    mobile: '+6012 515 6757',
    email: 'albert@nestspace.my',
    website: 'www.nestspace.my'
};
