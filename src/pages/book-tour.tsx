// src/pages/book-tour.tsx

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
  const [errors, setErrors] = useState<
    Partial<Record<keyof Form, string>>
  >({});

  function updateField<K extends keyof Form>(k: K, v: string) {
    setForm((s) => ({ ...s, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
    setErrorMsg(null);
  }

  const validateEmail = (email: string) => {
    const regex =
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(email);
  };

  const validatePhone = (phone: string) => {
    const digits = phone.replace(/\D/g, "");
    return /^[6-9]\d{9}$/.test(digits);
  };

  const validateForm = () => {
    const newErrors: Partial<Record<keyof Form, string>> = {};

    if (!form.parentName.trim())
      newErrors.parentName = "Parent name is required.";

    if (!form.childName.trim())
      newErrors.childName = "Child name is required.";

    if (!form.phone.trim())
      newErrors.phone = "Phone is required.";
    else if (!validatePhone(form.phone))
      newErrors.phone = "Enter valid 10-digit Indian number.";

    if (form.email.trim() && !validateEmail(form.email))
      newErrors.email = "Invalid email.";

    if (form.childAge.trim()) {
      const age = parseFloat(form.childAge);
      if (isNaN(age) || age < 0) {
        newErrors.childAge = "Enter valid age.";
      } else if (age > 5.5) {
        newErrors.childAge = "Age must be 5.5 years or below.";
      }
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setErrorMsg(
        Object.values(newErrors).join(" • ")
      );
      return false;
    }

    return true;
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    try {
      const res = await fetch("/api/book-tour", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.message);
        setLoading(false);
        return;
      }

      router.push("/book-tour-success");
    } catch (err) {
      console.error(err);
      setErrorMsg("Something went wrong.");
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-white flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-2xl md:text-3xl font-extrabold mb-2 text-[#204d63]">
          Book a Tour
        </h1>

        <p className="text-gray-600 mb-6">
          Fill the form and our admissions team will contact you.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          {/* Parent + Child */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                value={form.parentName}
                onChange={(e) =>
                  updateField("parentName", e.target.value)
                }
                placeholder="Parent / Guardian Name *"
                className={`w-full rounded-lg border px-4 py-3 ${
                  errors.parentName ? "border-red-500" : ""
                }`}
              />
              {errors.parentName && (
                <p className="text-sm text-red-600">
                  {errors.parentName}
                </p>
              )}
            </div>

            <div>
              <input
                value={form.childName}
                onChange={(e) =>
                  updateField("childName", e.target.value)
                }
                placeholder="Child's Name *"
                className={`w-full rounded-lg border px-4 py-3 ${
                  errors.childName ? "border-red-500" : ""
                }`}
              />
              {errors.childName && (
                <p className="text-sm text-red-600">
                  {errors.childName}
                </p>
              )}
            </div>
          </div>

          {/* Age + Phone + Email */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <input
                value={form.childAge}
                onChange={(e) =>
                  updateField("childAge", e.target.value)
                }
                placeholder="Child Age (Max 5.5)"
                className={`w-full rounded-lg border px-4 py-3 ${
                  errors.childAge ? "border-red-500" : ""
                }`}
              />
              {errors.childAge && (
                <p className="text-sm text-red-600">
                  {errors.childAge}
                </p>
              )}
            </div>

            <div>
              <input
                value={form.phone}
                onChange={(e) =>
                  updateField("phone", e.target.value)
                }
                placeholder="Phone *"
                className={`w-full rounded-lg border px-4 py-3 ${
                  errors.phone ? "border-red-500" : ""
                }`}
              />
              {errors.phone && (
                <p className="text-sm text-red-600">
                  {errors.phone}
                </p>
              )}
            </div>

            <div>
              <input
                value={form.email}
                onChange={(e) =>
                  updateField("email", e.target.value)
                }
                placeholder="Email"
                className={`w-full rounded-lg border px-4 py-3 ${
                  errors.email ? "border-red-500" : ""
                }`}
              />
              {errors.email && (
                <p className="text-sm text-red-600">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          {/* Date + Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="date"
              value={form.preferredDate}
              onChange={(e) =>
                updateField("preferredDate", e.target.value)
              }
              className="w-full rounded-lg border px-4 py-3"
            />

            <select
              value={form.preferredTime}
              onChange={(e) =>
                updateField("preferredTime", e.target.value)
              }
              className="w-full rounded-lg border px-4 py-3"
            >
              <option value="">
                Preferred Time (optional)
              </option>
              <option value="morning">
                Morning
              </option>
              <option value="afternoon">
                Afternoon
              </option>
              <option value="evening">
                Evening
              </option>
            </select>
          </div>

          {/* Message */}
          <textarea
            value={form.message}
            onChange={(e) =>
              updateField("message", e.target.value)
            }
            placeholder="Any details (optional)"
            className="w-full rounded-lg border px-4 py-3 min-h-[100px]"
          />

          {errorMsg && (
            <p className="text-sm text-red-600">
              {errorMsg}
            </p>
          )}

          {/* Buttons */}
          <div className="flex items-center gap-4">
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 rounded-md text-white font-semibold shadow disabled:opacity-60"
              style={{ backgroundColor: "#60BFB2" }}
            >
              {loading
                ? "Submitting..."
                : "Submit & Request Tour"}
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
                setErrors({});
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
