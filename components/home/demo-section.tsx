
import { File } from "lucide-react";
import { MotionDiv, MotionH3 } from "../common/motion-wrapper";
import { SummaryViewer } from "../summaries/summary-viewer";

const DEMO_SUMMARY = `
🏥 AI Just Diagnosed a Rare Disease in Seconds! 🤖🧬
Quick Overview
•🎯An AI-powered diagnostic system just identified a rare illness faster than any human doctor—welcome to the future of healthcare.
•📌This milestone is reshaping the medical industry and patient care standards.

# Document Details
•📄Type: Medical Breakthrough Brief
•👥For: Healthcare professionals, tech innovators, patients, and policy-makers

#Key Highlights
•🚀A deep learning model diagnosed a rare genetic disorder from a patient's scan in under 10 seconds
•⭐The system was trained on millions of real-world cases, enabling near-instant pattern recognition
•💫Hospitals across Europe and Asia are beginning pilot integrations of this technology

# Why It Matters
•💡This breakthrough could drastically reduce diagnostic errors, improve early detection, and cut costs. It opens the door to AI-augmented medicine where precision and speed are dramatically improved.

#Main Points
•🎯Main insight or finding: AI can now detect and diagnose complex conditions with superhuman accuracy and speed
•💪Key strength or advantage: Faster diagnoses, broader pattern recognition, and unbiased analysis
•🔥Important outcome or result: Medical institutions are rapidly adopting AI diagnostics into emergency and critical care units

# Pro Tips
•⭐First practical recommendation: Doctors should begin familiarizing themselves with AI diagnostic tools to enhance workflows
•💎Second valuable insight: Integrate AI into second-opinion processes to reduce misdiagnoses
•🌟Third actionable advice: Stay informed on AI compliance and ethical considerations in patient data usage

#Key Terms to Know
•📚AI Diagnostics: Using artificial intelligence to analyze patient data and identify health conditions
•🔍Deep Learning: A subset of machine learning involving neural networks trained on massive datasets for complex decision-making

#Bottom Line
•💫AI isn’t just changing medicine—it’s saving lives. Embrace the shift, empower your practice.
`;


export default function DemoSection() {
  return (
    <section className="relative">
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem]
        -translate-x-1/2 bg-linear-to-br from-emerald-500 via-teal-500 to-cyan-500 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%,74.1% 44.1%)",
            }}
          ></div>
        </div>

        <div className="flex flex-col items-center text-center space-y-4">
          <div className="inline-flex items-center justify-center p-2 rounded-2xl bg-gray-100/80 background-blur-xs border border-gray-500/20 mb-4">
            <File className="w-6 h-6 text-blue-500" />
          </div>
          <div className="text-center mb-16">
            <MotionH3
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-bold text-3xl max-w-2xl mx-auto px-4 sm:px-6"
            >
              Watch how Summarie transforms{" "}
              <span className="bg-linear-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent ">
                this Next.js course PDF
              </span>{" "}
              into an easy-to-read summary!
            </MotionH3>
          </div>
        </div>

          <div className="flex justify-center items-center px-2 sm:px-4 lg:px-6">
            {/* Summary Viewer */}
            <MotionDiv
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <SummaryViewer summary={DEMO_SUMMARY} />
            </MotionDiv>
          </div>
      </div>
    </section>
  );
}