import React, { useState } from 'react';

const Section = ({ title, children }) => (
  <div className="mb-4 p-4 border rounded">
    <h2 className="text-xl font-bold mb-2">{title}</h2>
    {children}
  </div>
);

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mb-2 border rounded">
      <button
        className="w-full text-left p-2 font-semibold focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title} {isOpen ? '▼' : '▶'}
      </button>
      {isOpen && <div className="p-2 border-t">{children}</div>}
    </div>
  );
};

const OperationalManual = () => {
  const [showManual, setShowManual] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  const sections = [
    {
      id: 'overview',
      title: 'Overview',
      content: 'The DRM Technic Pet Crem Data Logger Panel Interface is an advanced data logger designed for precise monitoring of emissions in pet crematoriums, focusing on Carbon Monoxide (CO), Oxygen (O2), and Dust levels. It features a 7-inch capacitive touchscreen and integrates with tailored software for efficient data collection and reporting.',
    },
    {
      id: 'safety',
      title: 'Safety Instructions',
      content: [
        { title: 'General Warning', text: 'This logger system contains complex parts and electronic components specifically designed for this instrument. Service should only be carried out by factory-trained service personnel.' },
        { title: 'Electrical Safety', text: 'To avoid electrical shock, do not operate this equipment if it bears any sign of damage to any portion of its exterior surface. Do not expose this equipment to any source of excessive heat or moisture.' },
        { title: 'Power Connections', text: 'Use only a power cord with a protective earthing terminal. Never use an extension cord that is not equipped with this feature. Connect the power cord to a power outlet of the correct voltage and that has a protective earth contact.' },
      ],
    },
    {
      id: 'specs',
      title: 'Hardware Specifications',
      content: [
        { title: 'Display Technology', spec: 'Display', value: '7" TFT with 16.7M colours' },
        { title: 'User Interface', spec: 'Touchscreen', value: 'Capacitive touch screen' },
        { title: 'Screen Resolution', spec: 'Resolution', value: '1024 x 600 pixels' },
        { title: 'Central Processing Unit', spec: 'Processor', value: 'Freescale i.MX 6SoloX (ARM Cortex A9 & M4)' },
        { title: 'Input Capabilities', spec: 'Analog Inputs', value: 'Four 16-bit bipolar analog inputs (maximum ±40V d.c.)' },
        { title: 'Digital Connectivity', spec: 'Digital I/O Pins', value: 'Eight digital input/output pins' },
      ],
    },
    {
      id: 'installation',
      title: 'Installation',
      content: [
        { step: 1, text: 'Mounting the Display: Secure the PanelPilotACE SGD 70-A in the desired location ensuring it is accessible and visible for easy monitoring.' },
        { step: 2, text: 'Connecting Power: Use only the supplied power adapter. Connect the power cord to a suitable power outlet.' },
        { step: 3, text: 'Connecting Sensors: Connect the 4-20mA sensors to the appropriate input channels. Ensure correct polarity to avoid damage.' },
      ],
    },
    {
      id: 'operation',
      title: 'General Operation',
      content: 'The Pet Crem Data Logger features a 7-inch capacitive touchscreen that displays real-time data for up to three channels simultaneously. The interface provides both numerical and graphical representations of the data being logged.',
    },
    {
      id: 'export',
      title: 'Data Export',
      content: [
        { step: 1, text: 'Connect a laptop to the panel via USB.' },
        { step: 2, text: 'Use the DRM Technic utility tool on the laptop.' },
        { step: 3, text: 'Select "Retrieve Logged Files" in the utility tool.' },
        { step: 4, text: 'The data logs, recorded every 15 seconds, will be transferred as CSV formatted text files.' },
        { step: 5, text: 'After retrieving the files, the user can delete the logs on the system to maintain optimal performance.' },
      ],
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting',
      content: 'For any issues, please contact DRM Technic support:\nPhone: +44 (0) 1782 638 491\nEmail: sales@drmtechnic.com\n\nProvide:\n- Your company name and contact details\n- Description of the problem and any other useful information',
    },
  ];

  if (!showManual) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-8 text-center">
          DRM Technic Pet Crem Data Logger Panel Interface
        </h1>
        <h2 className="text-2xl mb-8 text-center">Operational Manual</h2>
        <button 
          className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          onClick={() => setShowManual(true)}
        >
          Click here to view
        </button>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">DRM Technic Pet Crem Data Logger Panel Interface</h1>
      
      <div className="mb-4 flex flex-wrap">
        {sections.map(section => (
          <button
            key={section.id}
            className={`mr-2 mb-2 px-3 py-1 rounded ${activeTab === section.id ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab(section.id)}
          >
            {section.title}
          </button>
        ))}
      </div>

      {sections.map(section => (
        activeTab === section.id && (
          <Section key={section.id} title={section.title}>
            {typeof section.content === 'string' ? (
              <p>{section.content}</p>
            ) : Array.isArray(section.content) ? (
              section.content.map((item, index) => (
                <AccordionItem key={index} title={item.title || `Step ${item.step}` || item.spec}>
                  {item.text || `${item.spec}: ${item.value}`}
                </AccordionItem>
              ))
            ) : null}
          </Section>
        )
      ))}

      <div className="mt-4 p-4 border rounded bg-yellow-100">
        <h2 className="text-xl font-bold mb-2">Important Note</h2>
        <div className="flex items-center space-x-2 text-yellow-600">
          <span>⚠️</span>
          <p>For any issues or concerns, please contact DRM Technic support immediately.</p>
        </div>
      </div>
    </div>
  );
};

export default OperationalManual;
