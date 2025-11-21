// src/pages/book-tour.tsx
import React, { useState } from "react";
import { useRouter } from "next/router";

export default function BookTour(): React.JSX.Element {
  const router = useRouter();
  const [form, setForm] = useState({
    parentName: "",
    childName: "",
    childAge: "",
    phone: "",
    email: "",
    preferredDate: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  function updateField<K extends keyof typeof form>(k: K, v: string) {
    setForm((s) => ({ ...s, [k]: v }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg(null);

    // basic client validation
    if (!form.parentName.trim() || !form.phone.trim() || !form.childName.trim()) {
      setErrorMsg("Please provide parent name, child name and phone number.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/book-tour", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const json = await res.json().catch(() => null);

      if (!res.ok) {
        // show server-side message if present, otherwise generic
        setErrorMsg((json && json.message) || `Failed to submit (status ${res.status}).`);
        setLoading(false);
        return;
      }

      // success -> redirect to success page
      router.push("/book-tour-success");
    } catch (err) {
      console.error("Submit error", err);
      setErrorMsg("Failed to submit. Please try again.");
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-white flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-2xl md:text-3xl font-extrabold mb-2" style={{ color: "#204d63" }}>
          Book a Tour
        </h1>
        <p className="text-gray-600 mb-6">
          Fill the form and our admissions team will contact you to schedule a visit.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              value={form.parentName}
              onChange={(e) => updateField("parentName", e.target.value)}
              placeholder="Parent / Guardian Name *"
              className="w-full rounded-lg border px-4 py-3"
              required
            />
            <input
              value={form.childName}
              onChange={(e) => updateField("childName", e.target.value)}
              placeholder="Child's Name *"
              className="w-full rounded-lg border px-4 py-3"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              value={form.childAge}
              onChange={(e) => updateField("childAge", e.target.value)}
              placeholder="Child's Age"
              className="w-full rounded-lg border px-4 py-3"
            />
            <input
              value={form.phone}
              onChange={(e) => updateField("phone", e.target.value)}
              placeholder="Phone *"
              className="w-full rounded-lg border px-4 py-3"
              required
            />
            <input
              value={form.email}
              onChange={(e) => updateField("email", e.target.value)}
              placeholder="Email"
              type="email"
              className="w-full rounded-lg border px-4 py-3"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              value={form.preferredDate}
              onChange={(e) => updateField("preferredDate", e.target.value)}
              placeholder="Preferred date (optional)"
              className="w-full rounded-lg border px-4 py-3"
              type="date"
            />
            <select
              className="w-full rounded-lg border px-4 py-3"
              value={form.message}
              onChange={(e) => updateField("message", e.target.value)}
            >
              <option value="">Prefered time or notes (optional)</option>
              <option value="morning">Morning</option>
              <option value="afternoon">Afternoon</option>
              <option value="evening">Evening</option>
            </select>
          </div>

          <textarea
            value={form.message}
            onChange={(e) => updateField("message", e.target.value)}
            placeholder="Any message or details (optional)"
            className="w-full rounded-lg border px-4 py-3 min-h-[100px]"
          />

          {errorMsg && <div className="text-sm text-red-600">{errorMsg}</div>}

          <div className="flex items-center gap-4">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-white font-semibold shadow transform transition-transform hover:-translate-y-0.5"
              style={{
                backgroundColor: "#60BFB2",
              }}
            >
              {loading ? "Submitting..." : "Submit & Request Tour"}
            </button>

            <button
              type="button"
              onClick={() => {
                setForm({
                  parentName: "",
                  childName: "",
                  childAge: "",
                  phone: "",
                  email: "",
                  preferredDate: "",
                  message: "",
                });
                setErrorMsg(null);
              }}
              className="px-4 py-3 rounded-md border"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
