export default function CaseStudies() {
    const caseStudies = [
      {
        client: "Client 1",
        summary: "Statement and the work.",
        image: "/images/case-aura.jpg", // Replace with your actual image paths
      },
      {
        client: "Client 2",
        summary: "Statement and the work.",
        image: "/images/case-boltwear.jpg", // Replace with your actual image paths
      },
      {
        client: "Client 3",
        summary: "Statement and the work.",
        image: "/images/case-pulse.jpg", // Replace with your actual image paths
      },
    ];
  
    return (
      <section id="case-studies" className="w-full py-24 px-6 md:px-12" style={{ backgroundColor: "#EAEAEA" }}> {/* Light Gray background for entire section */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#000000] mb-4">
              Case <span className="text-[#F4D03F]">Studies</span>
            </h2>
            <p className="text-[#1C1C1C] max-w-2xl mx-auto text-base md:text-lg">
              Real brands, real results. See how UvX Media drives impact.
            </p>
          </div>
  
          <div className="grid md:grid-cols-3 gap-10">
            {caseStudies.map((caseStudy, index) => (
              <div
                key={index}
                className="bg-[#1C1C1C] rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all transform hover:scale-105"
              >
                <img
                  src={caseStudy.image}
                  alt={caseStudy.client}
                  className="h-56 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-white mb-3">{caseStudy.client}</h3>
                  <p className="text-[#B3B3B3] text-sm">{caseStudy.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  