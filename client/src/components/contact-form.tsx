import { useState, ChangeEvent, FormEvent } from "react";

interface ContactFormState {
  name: string;
  email: string;
  phone: string;
  company: string;
  role: string;
  projectType: string[];
  budget: string;
  timeline: string;
  details: string;
  techStack: string;
  teamSize: string;
  referral: string[];
  optIns: string[];
}

export default function ContactForm() {
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState<ContactFormState>({
    name: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    projectType: [],
    budget: "",
    timeline: "",
    details: "",
    techStack: "",
    teamSize: "",
    referral: [],
    optIns: [],
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setForm((prev) => ({
        ...prev,
        [name]: checked
          ? [...(prev[name as keyof ContactFormState] as string[]), value]
          : (prev[name as keyof ContactFormState] as string[]).filter((v) => v !== value),
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({
          name: "",
          email: "",
          phone: "",
          company: "",
          role: "",
          projectType: [],
          budget: "",
          timeline: "",
          details: "",
          techStack: "",
          teamSize: "",
          referral: [],
          optIns: [],
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
    setLoading(false);
  };

  return (
    <>
      <button
        className="tech-gradient px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity w-full mb-4"
        onClick={() => setShowModal(true)}
        type="button"
      >
        Schedule Free Consultation
      </button>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="glassmorphism p-8 rounded-2xl max-w-lg w-full relative">
            <button
              className="absolute top-4 right-4 text-xl text-muted-foreground hover:text-electric-blue"
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-4">Consultation Request</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input className="w-full p-3 rounded bg-muted text-foreground" name="name" placeholder="Name *" value={form.name} onChange={handleChange} required />
              <input className="w-full p-3 rounded bg-muted text-foreground" name="email" placeholder="Email *" value={form.email} onChange={handleChange} required type="email" />
              <input className="w-full p-3 rounded bg-muted text-foreground" name="phone" placeholder="Phone (optional)" value={form.phone} onChange={handleChange} />
              <input className="w-full p-3 rounded bg-muted text-foreground" name="company" placeholder="Company" value={form.company} onChange={handleChange} />
              <input className="w-full p-3 rounded bg-muted text-foreground" name="role" placeholder="Role (CEO/CTO/Product Manager/Other)" value={form.role} onChange={handleChange} />
              <div>
                <div className="mb-1 font-semibold">Project Type *</div>
                <div className="flex flex-wrap gap-2">
                  {["Custom Web Application","AI Integration & Automation","ERP System Development","API Development & Integration","Team Augmentation","Technical Consulting","Other"].map(opt => (
                    <label key={opt} className="flex items-center gap-1">
                      <input type="checkbox" name="projectType" value={opt} checked={form.projectType.includes(opt)} onChange={handleChange} /> {opt}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <div className="mb-1 font-semibold">Budget Range *</div>
                <div className="flex flex-wrap gap-2">
                  {["$5K - $15K (MVP/Small project)","$15K - $50K (Medium complexity)","$50K+ (Enterprise solution)","Let's discuss (Complex/ongoing)"].map(opt => (
                    <label key={opt} className="flex items-center gap-1">
                      <input type="radio" name="budget" value={opt} checked={form.budget === opt} onChange={handleChange} required /> {opt}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <div className="mb-1 font-semibold">Timeline *</div>
                <div className="flex flex-wrap gap-2">
                  {["ASAP (Rush project - 25% premium)","2-4 weeks","1-3 months","3-6 months","Flexible/Ongoing"].map(opt => (
                    <label key={opt} className="flex items-center gap-1">
                      <input type="radio" name="timeline" value={opt} checked={form.timeline === opt} onChange={handleChange} required /> {opt}
                    </label>
                  ))}
                </div>
              </div>
              <textarea className="w-full p-3 rounded bg-muted text-foreground" name="details" placeholder="Describe your project goals and requirements *" value={form.details} onChange={handleChange} required rows={3} />
              <textarea className="w-full p-3 rounded bg-muted text-foreground" name="techStack" placeholder="Current tech stack (if any)" value={form.techStack} onChange={handleChange} rows={2} />
              <div>
                <div className="mb-1 font-semibold">Team size and technical expertise</div>
                <div className="flex flex-wrap gap-2">
                  {["No technical team","Small team (1-3 developers)","Established team (4+ developers)","Need to hire developers"].map(opt => (
                    <label key={opt} className="flex items-center gap-1">
                      <input type="radio" name="teamSize" value={opt} checked={form.teamSize === opt} onChange={handleChange} /> {opt}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <div className="mb-1 font-semibold">How did you hear about me?</div>
                <div className="flex flex-wrap gap-2">
                  {["Google Search","LinkedIn","GitHub/Portfolio","Blog/Article","Other"].map(opt => (
                    <label key={opt} className="flex items-center gap-1">
                      <input type="checkbox" name="referral" value={opt} checked={form.referral.includes(opt)} onChange={handleChange} /> {opt}
                    </label>
                  ))}
                  <input className="w-full p-2 rounded bg-muted text-foreground mt-2" name="referral" placeholder="Referral from (name) or other..." value={form.referral.join(", ")} onChange={handleChange} />
                </div>
              </div>
              <div>
                <label className="flex items-center gap-2">
                  <input type="checkbox" name="optIns" value="updates" checked={form.optIns.includes("updates")}
                    onChange={handleChange} /> Send me updates about new articles and insights
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" name="optIns" value="consultation" checked={form.optIns.includes("consultation")}
                    onChange={handleChange} /> I'm interested in ongoing technical consultation
                </label>
              </div>
              <button type="submit" className="tech-gradient px-8 py-4 rounded-lg font-semibold w-full" disabled={loading}>
                {loading ? "Sending..." : "Submit Consultation Request"}
              </button>
              {status === "success" && <div className="text-green-400 mt-2">Your request was sent! I'll be in touch soon.</div>}
              {status === "error" && <div className="text-red-400 mt-2">There was an error sending your request. Please try again later.</div>}
            </form>
          </div>
        </div>
      )}
    </>
  );
}
