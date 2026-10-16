# Villa Lavanda Website

This is a static website. Open `index.html` in a browser or upload the whole `VillaLavanda` folder to hosting.

## Edit the booking links

Open `script.js` and replace these values:

- `airbnbUrl`: paste the Airbnb listing URL.
- `bookingUrl`: paste the Booking.com listing URL.
- `mapsUrl`: paste the Google Maps share link.
- `mapEmbedQuery`: use the exact villa name, address, or coordinates.
- `hostEmail`, `phoneHref`, `phoneDisplay`, `whatsappHref`: replace with real contact details.

## Direct booking requests

The website does not take online payments or instantly confirm direct reservations. Guests can submit
their name, dates, and group size; the site opens WhatsApp with a prepared booking request for the host.
The guest must send that message, and the host must confirm availability and the final price before the
stay is confirmed. Payment is arranged at the villa. Keep the WhatsApp number in `script.js` current.

## Sync available and closed dates from Airbnb

The availability calendar can sync from the Airbnb calendar export link.

In Airbnb, copy the listing calendar export/iCal link. It usually ends in `.ics`. Then open `script.js` and paste it here:

```js
airbnbCalendarIcsUrl: "PASTE_AIRBNB_ICAL_LINK_HERE",
```

Use Airbnb's export link only. In Airbnb's calendar sync screen, the fields named "other website link" and "calendar name" are for importing another website calendar into Airbnb. They are not needed for this Villa Lavanda website to read Airbnb.

The site reads that feed and marks unavailable dates automatically:

- Airbnb reserved/booked events become `booked`.
- Airbnb blocked/unavailable events become `closed`.
- Future dates not blocked by Airbnb stay `available`.

The colors are:

- Available: green.
- Closed: red.
- Booked: soft lavender-plum.

Because Airbnb calendar feeds are often blocked by browser CORS rules, this project includes `api/airbnb-calendar.js`. If the site is deployed on Vercel or a compatible host, keep this setting:

```js
airbnbCalendarProxyUrl: "/api/airbnb-calendar?url=",
```

If your hosting is static-only and does not support `/api` functions, the calendar cannot live-sync directly from Airbnb without adding a small proxy on your hosting provider.

When live sync is unavailable, the site shows future dates as `Check` instead of pretending they are available.

## Manual calendar fallback

Manual dates are still available in `script.js` as a fallback:

- `minimumStay`: shown beside the calendar.
- `calendarUpdated`: shown beside the calendar so guests know how fresh the dates are.
- `availabilityStartMonth`: first month shown by the calendar, using `YYYY-MM`.
- `availabilityDates`: add dates using `YYYY-MM-DD`.

Use these manual fallback statuses:

- `booked`: already reserved.
- `closed`: unavailable because the host has blocked the date.

Any future date not listed in `availabilityDates` is shown as available. Past dates are automatically shown as closed.

## Gallery photos and videos

Real Villa Lavanda photos are stored in `assets/images`.

The categorized gallery is controlled from `script.js` in `galleryCategories`. Current categories include:

- Exterior & Views
- Pool
- Terrace & Outdoor Living
- Bedrooms
- Living Room
- Kitchen & Dining
- Bathrooms
- Videos

To add more images, copy the file into `assets/images`, then add an item:

```js
{
  type: "image",
  src: "assets/images/example-photo.jpeg",
  alt: "Short description of the photo"
}
```

To add videos, copy the video into `assets/videos`, then add it under the `Videos` category:

```js
{
  type: "video",
  src: "assets/videos/villa-tour.mp4",
  poster: "assets/images/villa-aerial-brand.jpeg",
  alt: "Video tour of Villa Lavanda"
}
```

## Booking platform consistency

Before launch, make these details match Airbnb and Booking.com exactly:

- Guest capacity.
- Bedroom and bathroom count.
- Check-in and check-out times.
- House rules.
- Cancellation policy.
- Amenities.
- Real guest reviews.
- Calendar dates and minimum stay.
- Cleaning fee, tourist tax, deposit, and seasonal charges.
