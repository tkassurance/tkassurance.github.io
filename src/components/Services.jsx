export default function Services() {
  const services = [
    {
      icon: "🚗",
      title: "Motor Insurance",
      desc: "Comprehensive and Third Party insurance for cars, vans, buses, lorries and motorcycles."
    },
    {
      icon: "🛡️",
      title: "Third Party Insurance",
      desc: "Affordable legal liability protection that meets Sri Lankan road requirements."
    },
    {
      icon: "🚢",
      title: "Marine Insurance",
      desc: "Protect your cargo and goods during local and international transportation."
    },
    {
      icon: "🔥",
      title: "Fire Insurance",
      desc: "Comprehensive protection for buildings, factories and valuable assets."
    },
    {
      icon: "🏠",
      title: "Home Insurance",
      desc: "Protect your home against fire, theft, natural disasters and accidental damage."
    },
    {
      icon: "✈️",
      title: "Travel Insurance",
      desc: "Worldwide travel protection with emergency medical and trip coverage."
    },
    {
      icon: "🏢",
      title: "Business Insurance",
      desc: "Tailored insurance solutions for SMEs, offices and commercial establishments."
    },
    {
      icon: "⚙️",
      title: "Engineering Insurance",
      desc: "Coverage for machinery, contractors, equipment and engineering projects."
    }
  ];

  return (
    <section className="services-section" id="services">

      <div className="container">

        <span className="section-tag">
          OUR SERVICES
        </span>

        <h2 className="section-heading">
          General Insurance Solutions
        </h2>

        <p className="section-description">
          We provide comprehensive insurance solutions for individuals,
          families and businesses across Sri Lanka.
        </p>

        <div className="services-grid">

          {services.map((service, index) => (

            <div className="service-card" key={index}>

              <div className="service-icon">

                {service.icon}

              </div>

              <h3>

                {service.title}

              </h3>

              <p>

                {service.desc}

              </p>

              <button>

                Learn More →

              </button>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}