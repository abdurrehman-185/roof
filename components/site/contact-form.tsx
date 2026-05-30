import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/content/site";

type ContactFormProps = {
  selectedService?: string;
};

export function ContactForm({ selectedService = "" }: ContactFormProps) {
  return (
    <form
      action="/api/contact"
      method="post"
      className="roof-surface rounded-[32px] border border-white/60 p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Name
          </label>
          <Input id="name" name="name" required placeholder="Your name" />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="name@example.com"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-foreground">
            Phone
          </label>
          <Input id="phone" name="phone" required placeholder={siteConfig.phone} />
        </div>
        <div className="space-y-2">
          <label htmlFor="postcode" className="text-sm font-medium text-foreground">
            Postcode / ZIP
          </label>
          <Input id="postcode" name="postcode" required placeholder="Your area code" />
        </div>
      </div>

      <div className="mt-5 space-y-2">
        <label htmlFor="service" className="text-sm font-medium text-foreground">
          Service needed
        </label>
        <select
          id="service"
          name="service"
          defaultValue={selectedService}
          className="flex h-11 w-full rounded-2xl border border-input bg-white px-4 text-sm text-foreground outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring"
        >
          <option value="">Select a service</option>
          {siteConfig.services.map((service) => (
            <option key={service.slug} value={service.name}>
              {service.name}
            </option>
          ))}
          {siteConfig.additionalServices.map((service) => (
            <option key={service.name} value={service.name}>
              {service.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5 space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="Tell us a little about the roof, the issue, and the property."
          className="min-h-36"
        />
      </div>

      <input type="hidden" name="website" value="" />

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xl text-sm leading-7 text-muted-foreground">
          Short, mobile-friendly, and ready for future CRM or email integration. For urgent
          issues, calling is still the fastest option.
        </p>
        <Button
          type="submit"
          size="lg"
          className="h-12 rounded-full bg-primary px-6 text-primary-foreground hover:bg-primary/90"
        >
          Send Quote Request
        </Button>
      </div>
    </form>
  );
}
