import shield from "../assets/shield.gif";

export default function Hero() {

    return (

        <section className="hero" id="home">

            <div className="container hero-grid">

                <div className="hero-left">

                    <span className="hero-tag">

                        GENERAL INSURANCE SOLUTIONS

                    </span>

                    <h2>

                        Protect

                        <span> What Matters Most</span>

                    </h2>

                    <p>

                        Professional insurance solutions for Motor,
                        Marine, Fire, Travel, Property and Business Insurance
                        throughout Sri Lanka.

                    </p>

                    <div className="hero-buttons">

                        <button className="btn-primary">

                            Get Free Quote

                        </button>

                        <button className="btn-secondary">

                            Contact Us

                        </button>

                    </div>

                </div>

                <div className="hero-right">

                    <div className="glass-card">

                        <img src={shield} alt="Insurance"/>

                    </div>

                </div>

            </div>

        </section>

    );

}