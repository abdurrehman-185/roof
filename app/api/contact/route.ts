import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const formData = await request.formData();

  const name = `${formData.get("name") ?? ""}`.trim();
  const email = `${formData.get("email") ?? ""}`.trim();
  const phone = `${formData.get("phone") ?? ""}`.trim();
  const service = `${formData.get("service") ?? ""}`.trim();
  const website = `${formData.get("website") ?? ""}`.trim();

  if (website) {
    return NextResponse.redirect(new URL("/thank-you", request.url), 303);
  }

  if (!name || !email || !phone) {
    return NextResponse.redirect(new URL("/contact", request.url), 303);
  }

  const thankYouUrl = new URL("/thank-you", request.url);
  thankYouUrl.searchParams.set("name", name);

  if (service) {
    thankYouUrl.searchParams.set("service", service);
  }

  return NextResponse.redirect(thankYouUrl, 303);
}
