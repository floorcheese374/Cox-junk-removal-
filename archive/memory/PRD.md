# Cox Junk Removal — PRD

## Original Problem Statement
Make a website for a new business in Springfield Ohio that focuses on junk removal and is owned by a 16 year old. Services: Yard waste, Cardboard removal, Scrap metal, Small furniture, Garage clutter, Basement cleanouts (small loads), Curbside pickup items, Appliance pickup (ONE at a time), Moving leftovers after someone moves out.

## User Choices
- Business name: **Cox Junk Removal**
- Phone: **937-270-8923**
- Style: Clean & professional (executed as Swiss/high-contrast neo-brutalist light theme — yellow accent #EAB308 on black/white, Outfit + DM Sans)
- Contact: Both quote request form AND phone/email
- About: Lean into 16-year-old young-hustler story

## Architecture
- Single-page React marketing site (CRA + Tailwind + Shadcn) with smooth-scroll sections
- FastAPI backend at `/api` with MongoDB (`quote_requests` collection)
- Submissions persisted via POST `/api/quotes`, retrievable via GET `/api/quotes`

## Personas
- **Primary**: Springfield-area homeowner needing junk hauled — wants fast price + reliable pickup
- **Secondary**: Renter / mover post-move-out needing leftover removal
- **Tertiary**: Local press / community supporting young entrepreneur

## Core Requirements (static)
1. 9 services with clear icons + descriptions
2. Visible phone CTA in every section
3. Online quote request form with validation
4. Young-entrepreneur story in About
5. Service area listing + business hours
6. Mobile-responsive sticky nav

## What's Been Implemented (2026-05-22)
- Backend: `/api/quotes` POST + GET endpoints (Pydantic, no _id leakage, ISO datetimes)
- Frontend sections: Header (sticky, scroll-spy nav, mobile menu), Hero (with stats + image card), TrustStrip (marquee), ServicesGrid (9 services, neo-brutalist cards), About (4 pillars + age-16 badge), QuoteForm (validation, sonner toasts, success state), ServiceArea (9 towns + hours), Footer
- All interactive elements have `data-testid`
- Tested end-to-end via testing_agent_v3 — 100% pass on backend (9/9) and frontend flows

## Prioritized Backlog
**P1**
- Admin dashboard to view/manage incoming quotes (currently view-only via GET /api/quotes)
- SMS/email notification to owner on new quote submission (Twilio or Resend)
- Photo upload field on quote form (attach pics of items for faster pricing)

**P2**
- Real customer testimonials section (once collected)
- Before/after gallery of completed hauls
- Google Maps embed for service area
- SEO meta tags + Open Graph card
- Booking calendar with date/time slot selection

**P3**
- Instant pricing estimator (size-of-load calculator)
- Online payment / deposit via Stripe
- Customer review request automation post-job
