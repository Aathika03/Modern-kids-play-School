import React, { useState } from "react";
import { useRouter } from "next/router";

type Form = {
  parentName: string;
  childName: string;
  childAge: string;
  phone: string;
  email: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
};

export default function BookTour(): React.JSX.Element {
  const router = useRouter();

  const [form, setForm] = useState<Form>({
    parentName: "",
    childName: "",
    childAge: "",
    phone: "",
    email: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Per-field errors (so we can show invalid email/phone under inputs)
  const [errors, setErrors] = useState<Partial<Record<keyof Form, string>>>({});

  function updateField<K extends keyof Form>(k: K, v: string) {
    setForm((s) => ({ ...s, [k]: v }));
    // clear that field's error while typing
    setErrors((e) => ({ ...e, [k]: undefined }));
    setErrorMsg(null);
  }

  const validateEmail = (email: string) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(email);
  };

  const validatePhone = (phone: string) => {
    const digitsOnly = phone.replace(/\D/g, "");
    const regex = /^[6-9]\d{9}$/; // Indian 10-digit starting with 6-9
    return regex.test(digitsOnly);
  };

  const validateForm = () => {
    const newErrors: Partial<Record<keyof Form, string>> = {};

    if (!form.parentName.trim()) newErrors.parentName = "Parent/guardian name is required.";
    if (!form.childName.trim()) newErrors.childName = "Child's name is required.";
    if (!form.phone.trim()) newErrors.phone = "Phone is required.";
    else if (!validatePhone(form.phone)) newErrors.phone = "Enter a valid 10-digit Indian phone number.";

    if (form.email.trim() && !validateEmail(form.email)) newErrors.email = "Enter a valid email address.";
    // Validate child age (optional but must be <= 5.5)
if (form.childAge.trim()) {
  const age = parseFloat(form.childAge);
  if (isNaN(age) || age < 0) {
    newErrors.childAge = "Enter a valid age.";
  } else if (age > 5.5) {
    newErrors.childAge = "Age must be 5.5 years or below.";
  }
}


    setErrors(newErrors);
    // collect a combined message for display near the submit button
    if (Object.keys(newErrors).length > 0) {
      const messages = Object.values(newErrors).filter(Boolean) as string[];
      setErrorMsg(messages.join(" • "));
      return false;
    }
    setErrorMsg(null);
    return true;
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg(null);

    if (!validateForm()) return;

    setLoading(true);
    try {
      const res = await fetch("/api/book-tour", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const json = await res.json().catch(() => null);

      if (!res.ok) {
        setErrorMsg((json && json.message) || `Failed to submit (status ${res.status}).`);
        setLoading(false);
        return;
      }

      // success — navigate to success page
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
        <h1 className="text-2xl md:text-3xl font-extrabold mb-2 text-[#204d63]">Book a Tour</h1>

        <p className="text-gray-600 mb-6">
          Fill the form and our admissions team will contact you to schedule a visit.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                value={form.parentName}
                onChange={(e) => updateField("parentName", e.target.value)}
                placeholder="Parent / Guardian Name *"
                className={`w-full rounded-lg border px-4 py-3 ${errors.parentName ? "border-red-500" : ""}`}
                required
              />
              {errors.parentName && <p className="text-sm text-red-600 mt-1">{errors.parentName}</p>}
            </div>

            <div>
              <input
                value={form.childName}
                onChange={(e) => updateField("childName", e.target.value)}
                placeholder="Child's Name *"
                className={`w-full rounded-lg border px-4 py-3 ${errors.childName ? "border-red-500" : ""}`}
                required
              />
              {errors.childName && <p className="text-sm text-red-600 mt-1">{errors.childName}</p>}
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
  <input
    value={form.childAge}
    onChange={(e) => updateField("childAge", e.target.value)}
    placeholder="Child's Age (Max 5.5)"
    className={`w-full rounded-lg border px-4 py-3 ${
      errors.childAge ? "border-red-500" : ""
    }`}
  />
  {errors.childAge && (
    <p className="text-sm text-red-600 mt-1">{errors.childAge}</p>
  )}
</div>

            <div>
              <input
                value={form.phone}
                onChange={(e) => updateField("phone", e.target.value)}
                placeholder="Phone *"
                className={`w-full rounded-lg border px-4 py-3 ${errors.phone ? "border-red-500" : ""}`}
                required
              />
              {errors.phone && <p className="text-sm text-red-600 mt-1">{errors.phone}</p>}
            </div>

            <div>
              <input
                value={form.email}
                onChange={(e) => updateField("email", e.target.value)}
                placeholder="Email"
                type="email"
                className={`w-full rounded-lg border px-4 py-3 ${errors.email ? "border-red-500" : ""}`}
              />
              {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              value={form.preferredDate}
              onChange={(e) => updateField("preferredDate", e.target.value)}
              placeholder="Preferred date (optional)"
              type="date"
              className="w-full rounded-lg border px-4 py-3"
            />

            <select
              className="w-full rounded-lg border px-4 py-3"
              value={form.preferredTime}
              onChange={(e) => updateField("preferredTime", e.target.value)}
            >
              <option value="">Preferred time (optional)</option>
              <option value="morning">Morning</option>
              <option value="afternoon">Afternoon</option>
              <option value="evening">Evening</option>
            </select>
          </div>

          {/* Message Box */}
          <textarea
            value={form.message}
            onChange={(e) => updateField("message", e.target.value)}
            placeholder="Any message or details (optional)"
            className="w-full rounded-lg border px-4 py-3 min-h-[100px]"
          />

          {/* Combined Error (near the button) */}
          {errorMsg && <div className="text-sm text-red-600">{errorMsg}</div>}

          {/* Buttons */}
          <div className="flex items-center gap-4">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center px-6 py-3 rounded-md text-white font-semibold shadow disabled:opacity-60"
              style={{ backgroundColor: "#60BFB2" }}
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
                  preferredTime: "",
                  message: "",
                });
                setErrorMsg(null);
                setErrors({});
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
