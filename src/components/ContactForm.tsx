import { useState, useRef } from 'react';
import { Send, CheckCircle, AlertCircle, Upload, X, Mail, FileText, ExternalLink, Sparkles } from 'lucide-react';
import { SERVICES, BUSINESS_CONFIG } from '../data/config';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  projectName: string;
  description: string;
  deadline: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

const INITIAL_FORM: FormData = {
  name: '',
  email: '',
  phone: '',
  service: '',
  projectName: '',
  description: '',
  deadline: '',
  message: '',
};

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = 'Name is required.';
  if (!data.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!data.service) errors.service = 'Please select a service.';
  if (!data.description.trim()) errors.description = 'Please describe your project.';
  return errors;
}

export default function ContactForm() {
  useScrollReveal();
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formMode, setFormMode] = useState<'google' | 'custom'>('google');
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const fieldErrors = validate(form);
    if (fieldErrors[name]) {
      setErrors((prev) => ({ ...prev, [name]: fieldErrors[name] }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setUploadedFiles((prev) => [...prev, ...files].slice(0, 5));
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched = Object.fromEntries(Object.keys(form).map((k) => [k, true]));
    setTouched(allTouched);
    const fieldErrors = validate(form);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      // Scroll to first error
      const firstError = document.querySelector('[data-error="true"]');
      if (firstError) firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    setStatus('loading');

    try {
      const formData = new FormData();
      formData.append('Name', form.name);
      formData.append('Email', form.email);
      formData.append('Phone / WhatsApp', form.phone || 'Not provided');
      formData.append('Selected Service', form.service);
      formData.append('Project Name', form.projectName || 'Not provided');
      formData.append('Project Description', form.description);
      formData.append('Deadline', form.deadline || 'Flexible');
      formData.append('Additional Notes', form.message || 'None');
      formData.append('_subject', `New CodeCanvas Order: ${form.service} (${form.name})`);
      formData.append('_template', 'table');
      formData.append('_captcha', 'false');

      // Append any uploaded files
      uploadedFiles.forEach((file) => {
        formData.append('attachment', file);
      });

      const response = await fetch(`https://formsubmit.co/ajax/${BUSINESS_CONFIG.contact.email}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });

      const data = await response.json().catch(() => null);

      if (response.ok && (data?.success === 'true' || data?.success === true || response.status === 200)) {
        setStatus('success');
        setForm(INITIAL_FORM);
        setTouched({});
        setErrors({});
        setUploadedFiles([]);
      } else {
        throw new Error(data?.message || 'Submission error');
      }
    } catch (error) {
      console.warn('Form submission notice:', error);
      setStatus('error');
    }
  };

  const mailtoFallbackUrl = `mailto:${BUSINESS_CONFIG.contact.email}?subject=${encodeURIComponent(
    `CodeCanvas Order: ${form.service || 'Service Request'} - ${form.name || 'Customer'}`
  )}&body=${encodeURIComponent(
    `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || 'Not provided'}\nService: ${form.service}\nProject: ${form.projectName || 'Not provided'}\nDeadline: ${form.deadline || 'Flexible'}\n\nProject Description:\n${form.description}\n\nAdditional Notes:\n${form.message || 'None'}`
  )}`;

  const whatsappFallbackUrl = `https://wa.me/${BUSINESS_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
    `Hi CodeCanvas! I would like to place an order:\n\n*Name:* ${form.name}\n*Email:* ${form.email}\n*Phone:* ${form.phone || 'Not provided'}\n*Service:* ${form.service}\n*Project:* ${form.projectName || 'Not provided'}\n*Deadline:* ${form.deadline || 'Flexible'}\n\n*Project Details:*\n${form.description}\n\n*Notes:* ${form.message || 'None'}`
  )}`;

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-xl border text-sm text-gray-900 placeholder-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent bg-white ${
      errors[field] && touched[field]
        ? 'border-red-300 bg-red-50/30'
        : 'border-gray-200 hover:border-gray-300'
    }`;

  if (status === 'success') {
    return (
      <section id="contact" className="py-24 bg-gray-50" aria-label="Contact">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-8 sm:p-12">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={32} className="text-green-500" />
            </div>
            <h2 className="font-display font-bold text-2xl text-navy-900 mb-3">
              Request Sent Successfully!
            </h2>
            <p className="text-gray-600 text-base mb-2">
              Your order details have been directly sent to{' '}
              <span className="font-semibold text-navy-900">{BUSINESS_CONFIG.contact.email}</span>.
            </p>
            <p className="text-gray-500 text-sm mb-8">
              We typically review requirements and reply with a custom quote within a few hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => setStatus('idle')}
                className="btn-secondary"
              >
                Submit Another Request
              </button>
              <a
                href={`https://wa.me/${BUSINESS_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
                  "Hi CodeCanvas! I just submitted an order inquiry on your website and would like to confirm the details."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                <span>💬</span> Connect on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-gray-50" aria-label="Contact CodeCanvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — Copy */}
          <div>
            <p className="reveal text-accent-500 font-semibold text-sm uppercase tracking-widest mb-3">
              Get in Touch
            </p>
            <h2 className="reveal reveal-delay-1 section-heading mb-4">
              Have a Project in Mind?
            </h2>
            <p className="reveal reveal-delay-2 text-gray-500 text-base leading-relaxed mb-8">
              Tell us what you need and let's create something professional.
            </p>

            {/* Contact methods */}
            <div className="reveal reveal-delay-3 space-y-4 mb-8">
              {/* Google Order Form — Primary CTA Card */}
              <a
                href={BUSINESS_CONFIG.contact.googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-50 via-indigo-50 to-blue-50 rounded-2xl border-2 border-purple-200 hover:border-purple-400 hover:shadow-md transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-600 flex items-center justify-center flex-shrink-0 text-white shadow-sm group-hover:scale-105 transition-transform">
                  <FileText size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700 bg-purple-100 px-2 py-0.5 rounded-full">
                      Primary Order Method
                    </span>
                  </div>
                  <div className="text-navy-900 font-bold text-sm">Official Google Order Form</div>
                  <div className="text-xs text-purple-900/70 truncate">Fastest way to order & submit project files</div>
                </div>
                <ExternalLink size={16} className="text-purple-600 group-hover:translate-x-0.5 transition-transform flex-shrink-0" />
              </a>

              <a
                href={`mailto:${BUSINESS_CONFIG.contact.email}`}
                className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100 hover:border-accent-200 hover:shadow-sm transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-xl bg-accent-50 flex items-center justify-center flex-shrink-0 group-hover:bg-accent-400 transition-colors">
                  <span className="text-accent-500 group-hover:text-white text-lg transition-colors">✉</span>
                </div>
                <div>
                  <div className="text-xs text-gray-400 mb-0.5">Email Us</div>
                  <div className="text-navy-900 font-medium text-sm">{BUSINESS_CONFIG.contact.email}</div>
                </div>
              </a>

              <a
                href={`https://wa.me/${BUSINESS_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(BUSINESS_CONFIG.contact.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100 hover:border-green-300 hover:shadow-sm transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500 transition-colors">
                  <span className="text-green-500 group-hover:text-white text-lg transition-colors">💬</span>
                </div>
                <div>
                  <div className="text-xs text-gray-400 mb-0.5">WhatsApp</div>
                  <div className="text-navy-900 font-medium text-sm">{BUSINESS_CONFIG.contact.whatsappDisplay}</div>
                </div>
              </a>
            </div>

            <div className="reveal reveal-delay-4 bg-accent-50 border border-accent-100 rounded-2xl p-5">
              <h3 className="font-display font-bold text-navy-900 text-sm mb-2">Quick Turnaround</h3>
              <p className="text-gray-500 text-sm">
                We typically respond within a few hours. For urgent projects,
                reach out via WhatsApp or submit the Google Form for the fastest response.
              </p>
            </div>
          </div>

          {/* Right — Form & Embedded Google Form */}
          <div className="reveal reveal-delay-2">
            {/* Mode Switcher */}
            <div className="flex items-center p-1.5 bg-gray-200/80 rounded-2xl mb-5">
              <button
                type="button"
                onClick={() => setFormMode('google')}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  formMode === 'google'
                    ? 'bg-white text-navy-900 shadow-sm'
                    : 'text-gray-600 hover:text-navy-900'
                }`}
              >
                <FileText size={16} className="text-purple-600" />
                <span>Google Order Form</span>
                <span className="hidden sm:inline bg-purple-100 text-purple-700 text-[10px] px-2 py-0.5 rounded-full font-bold">
                  Recommended
                </span>
              </button>
              <button
                type="button"
                onClick={() => setFormMode('custom')}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  formMode === 'custom'
                    ? 'bg-white text-navy-900 shadow-sm'
                    : 'text-gray-600 hover:text-navy-900'
                }`}
              >
                <Send size={15} className="text-accent-500" />
                <span>Quick Web Form</span>
              </button>
            </div>

            {formMode === 'google' ? (
              <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="p-4 sm:p-5 bg-gradient-to-r from-purple-50 to-indigo-50 border-b border-purple-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <h3 className="font-display font-bold text-navy-900 text-base flex items-center gap-2">
                      <FileText size={18} className="text-purple-600" />
                      Official CodeCanvas Order Form
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Submit your project requirements & upload your reference files directly.
                    </p>
                  </div>
                  <a
                    href={BUSINESS_CONFIG.contact.googleFormUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-purple-600 text-white text-xs font-semibold hover:bg-purple-700 transition-colors shadow-sm flex-shrink-0"
                  >
                    Open in Full Screen
                    <ExternalLink size={13} />
                  </a>
                </div>
                <div className="relative w-full bg-white" style={{ minHeight: '680px', height: '800px' }}>
                  <iframe
                    src={BUSINESS_CONFIG.contact.googleFormEmbedUrl}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    title="CodeCanvas Google Order Form"
                    className="w-full h-full border-0"
                  >
                    Loading Google Form…
                  </iframe>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7 space-y-5"
                aria-label="Project inquiry form"
              >
              {/* Name + Email */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={inputClass('name')}
                    aria-required="true"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    data-error={!!errors.name && touched.name}
                  />
                  {errors.name && touched.name && (
                    <p id="name-error" role="alert" className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={inputClass('email')}
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && touched.email && (
                    <p id="email-error" role="alert" className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Phone + Service */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Phone / WhatsApp
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+91 99999 99999"
                    value={form.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={inputClass('phone')}
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Service <span className="text-red-400">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`${inputClass('service')} cursor-pointer`}
                    aria-required="true"
                    aria-invalid={!!errors.service}
                  >
                    <option value="">Select a service</option>
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.title}
                      </option>
                    ))}
                    <option value="other">Other / Not Sure</option>
                  </select>
                  {errors.service && touched.service && (
                    <p role="alert" className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.service}
                    </p>
                  )}
                </div>
              </div>

              {/* Project name + Deadline */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="projectName" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Project / Event Name
                  </label>
                  <input
                    id="projectName"
                    name="projectName"
                    type="text"
                    placeholder="e.g. Hackathon 2025"
                    value={form.projectName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={inputClass('projectName')}
                  />
                </div>

                <div>
                  <label htmlFor="deadline" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Deadline
                  </label>
                  <input
                    id="deadline"
                    name="deadline"
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={form.deadline}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`${inputClass('deadline')} cursor-pointer`}
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Description / Requirements <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  placeholder="Describe your project, topic, content requirements and any references..."
                  value={form.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`${inputClass('description')} resize-none`}
                  aria-required="true"
                  aria-invalid={!!errors.description}
                />
                {errors.description && touched.description && (
                  <p role="alert" className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle size={12} /> {errors.description}
                  </p>
                )}
              </div>

              {/* File Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Upload Files <span className="text-gray-400 font-normal">(optional, max 5)</span>
                </label>
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full border-2 border-dashed border-gray-200 rounded-xl py-5 px-4 text-center hover:border-accent-300 hover:bg-accent-50/30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-400"
                  aria-label="Upload reference files"
                >
                  <Upload size={20} className="text-gray-400 mx-auto mb-1.5" />
                  <p className="text-sm text-gray-500">
                    Click to upload reference files
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">PDF, DOC, PPT, PNG, JPG</p>
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept=".pdf,.doc,.docx,.ppt,.pptx,.png,.jpg,.jpeg"
                  onChange={handleFileChange}
                  className="sr-only"
                  aria-label="File upload"
                />
                {uploadedFiles.length > 0 && (
                  <ul className="mt-3 space-y-2" aria-label="Uploaded files">
                    {uploadedFiles.map((file, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-gray-600 bg-gray-50 rounded-lg px-3 py-2">
                        <span className="flex-1 truncate">{file.name}</span>
                        <span className="text-gray-400 text-xs flex-shrink-0">
                          {(file.size / 1024).toFixed(0)} KB
                        </span>
                        <button
                          type="button"
                          onClick={() => removeFile(i)}
                          className="text-gray-400 hover:text-red-500 transition-colors flex-shrink-0 focus:outline-none"
                          aria-label={`Remove ${file.name}`}
                        >
                          <X size={15} />
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Additional message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Additional Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={2}
                  placeholder="Any additional notes or special requests..."
                  value={form.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`${inputClass('message')} resize-none`}
                />
              </div>

              {/* Error fallback alert */}
              {status === 'error' && (
                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-sm">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm mb-1">
                        Notice: Unable to connect automatically
                      </p>
                      <p className="text-xs text-amber-700 leading-relaxed mb-3">
                        Don't worry — your project details are preserved! You can send your order directly with one click:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <a
                          href={mailtoFallbackUrl}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-amber-300 text-xs font-semibold text-amber-900 hover:bg-amber-100 transition-colors shadow-sm"
                        >
                          <Mail size={13} /> Send via Email App
                        </a>
                        <a
                          href={whatsappFallbackUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-green-600 text-white text-xs font-semibold hover:bg-green-700 transition-colors shadow-sm"
                        >
                          <span>💬</span> Send via WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full btn-primary py-3.5 text-base disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
                aria-busy={status === 'loading'}
              >
                {status === 'loading' ? (
                  <>
                    <span
                      className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"
                      aria-hidden="true"
                    ></span>
                    Sending Request...
                  </>
                ) : (
                  <>
                    Send Request
                    <Send size={16} />
                  </>
                )}
              </button>

              <p className="text-center text-xs text-gray-400">
                We'll respond within 24 hours. Your information is kept private.
              </p>
            </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
