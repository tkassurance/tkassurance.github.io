export default function WhyChooseUs() {
  const features = [
    {
      icon: "⚡",
      title: "Fast Quotations",
      text: "Receive competitive insurance quotations quickly and efficiently.",
    },
    {
      icon: "🤝",
      title: "Trusted Service",
      text: "Professional guidance to help you choose the right insurance cover.",
    },
    {
      icon: "🛡️",
      title: "Complete Protection",
      text: "Motor, Marine, Fire, Travel, Business and Property insurance.",
    },
    {
      icon: "📞",
      title: "Customer Support",
      text: "We're here to assist you before, during and after your policy.",
    },
  ];

  return (
    <section className="why-section" id="about">
      <div className="container">

        <span className="section-tag">
          WHY CHOOSE US
        </span>

        <h2 className="section-heading">
          Trusted Insurance Solutions
        </h2>

        <p className="section-description">
          We help individuals and businesses protect what matters most with
          professional insurance advice, fast quotations and reliable service.
        </p>

        <div className="feature-grid">
          {features.map((item, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>
            </div>
          ))}
        </div>

        <div className="stats-grid">

          <div className="stat-box">
            <h3>6+</h3>
            <p>Insurance Categories</p>
          </div>

          <div className="stat-box">
            <h3>100%</h3>
            <p>Professional Service</p>
          </div>

          <div className="stat-box">
            <h3>24/7</h3>
            <p>Customer Support</p>
          </div>

          <div className="stat-box">
            <h3>Fast</h3>
            <p>Quotation Process</p>
          </div>

        </div>

      </div>
    </section>
  );
}