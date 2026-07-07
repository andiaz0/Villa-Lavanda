const villaConfig = {
  guests: "6",
  bedrooms: "2",
  bathrooms: "2",
  hostEmail: "booking@villalavanda.casa",
  phoneDisplay: "+389 75 406 404",
  phoneHref: "tel:+38975406404",
  whatsappHref: "https://wa.me/38975406404",
  airbnbUrl: "https://www.airbnb.com/rooms/1714050000210595231?adults=1&check_in=2026-08-18&check_out=2026-08-19&guests=1&search_mode=regular_search&source_impression_id=p3_1783098629_P3_hT_sLBMpmMK_L&previous_page_section_name=1000&federated_search_id=d4e44d70-0428-4d5d-aa24-520af53ec1f9",
  bookingUrl: "https://www.booking.com/",
  mapsUrl: "https://maps.app.goo.gl/fDk6FayZh5pP7uRaA",
  // Paste the exact coordinates from your Google Maps pin here
  mapLat: 42.046167,
  mapLng: 21.000776,
  mapZoom: 16,
  minimumStay: "1 nights",
  calendarUpdated: "Airbnb calendar",
  availabilityStartMonth: "2026-07",
  airbnbCalendarSync: true,
  airbnbCalendarIcsUrl: "https://www.airbnb.com/calendar/ical/1714050000210595231.ics?t=aae374db75f44c109b9c5461c1c00989",
  airbnbCalendarProxyUrl: "/api/airbnb-calendar?url=",
  availabilityDates: {},
  galleryCategories: [
    {
      id: "exterior",
      title: "Exterior & Views",
      items: [
        {
          type: "image",
          src: "assets/images/villa-aerial-brand.jpeg",
          alt: "Aerial view of Villa Lavanda with pool and garden"
        },
        {
          type: "image",
          src: "assets/images/villa-exterior-day.jpeg",
          alt: "Villa Lavanda exterior in daylight"
        },
        {
          type: "image",
          src: "assets/images/villa-pool-day.jpeg",
          alt: "Villa Lavanda beside the pool during the day"
        },
        {
          type: "image",
          src: "assets/images/villa-pool-night.jpeg",
          alt: "Villa Lavanda lit up beside the pool at night"
        }
      ]
    },
    {
      id: "pool",
      title: "Pool",
      items: [
        {
          type: "image",
          src: "assets/images/pool-view-day.jpeg",
          alt: "Pool with mountain and city views at Villa Lavanda"
        },
        {
          type: "image",
          src: "assets/images/pool-mountain-view.jpeg",
          alt: "Pool overlooking the valley and mountains"
        },
        {
          type: "image",
          src: "assets/images/pool-night-detail.jpeg",
          alt: "Pool detail at night with warm lighting"
        }
      ]
    },
    {
      id: "terrace",
      title: "Terrace & Outdoor Living",
      items: [
        {
          type: "image",
          src: "assets/images/villa-terrace-day.jpeg",
          alt: "Terrace seating area at Villa Lavanda"
        },
        {
          type: "image",
          src: "assets/images/terrace-day-lounge.jpeg",
          alt: "Outdoor lounge on the terrace"
        },
        {
          type: "image",
          src: "assets/images/terrace-hammock-night.jpeg",
          alt: "Hammock on the terrace at night"
        },
        {
          type: "image",
          src: "assets/images/terrace-night-view.jpeg",
          alt: "Terrace view over the valley at night"
        }
      ]
    },
    {
      id: "bedrooms",
      title: "Bedrooms",
      items: [
        {
          type: "image",
          src: "assets/images/bedroom-double.jpeg",
          alt: "Double bedroom with timber ceiling at Villa Lavanda"
        },
        {
          type: "image",
          src: "assets/images/bedroom-twin.jpeg",
          alt: "Twin bedroom at Villa Lavanda"
        }
      ]
    },
    {
      id: "living",
      title: "Living Room",
      items: [
        {
          type: "image",
          src: "assets/images/living-room.jpeg",
          alt: "Living room at Villa Lavanda"
        }
      ]
    },
    {
      id: "kitchen",
      title: "Kitchen & Dining",
      items: [
        {
          type: "image",
          src: "assets/images/kitchen.jpeg",
          
          alt: "Kitchen at Villa Lavanda"
        },
          {
          type: "image",
          src: "assets/images/dinning.jpeg",
          
          alt: "Dining area at Villa Lavanda"
        }
      ]
    },
 
    {
      id: "videos",
      title: "Videos",
      emptyText: "Video tour coming soon.",
      items: [
        
        {
          type: "video",
          src: "assets/videos/video1.mp4",
          poster: "assets/images/villa-aerial-brand.jpeg",
          alt: "Video tour of Villa Lavanda"
        },
        {
          type: "video",
          src: "assets/videos/video2.mp4",
          poster: "assets/images/villa-exterior-day.jpeg",
          alt: "Video tour of Villa Lavanda"
        },
        {
          type: "video",
          src: "assets/videos/video3.mp4",
          
          poster: "assets/images/pool-view-day.jpeg",
          alt: "Video tour of Villa Lavanda"
        }
        
      ]
    }
  ]
};

const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");

const updateHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

navToggle.addEventListener("click", () => {
  const isOpen = header.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

nav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    header.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open menu");
  }
});

document.querySelectorAll("[data-config]").forEach((element) => {
  const key = element.dataset.config;
  if (villaConfig[key]) {
    element.textContent = villaConfig[key];
  }
});

const linkMap = {
  airbnb: villaConfig.airbnbUrl,
  booking: villaConfig.bookingUrl,
  maps: villaConfig.mapsUrl,
  phone: villaConfig.phoneHref,
  whatsapp: villaConfig.whatsappHref,
  email: `mailto:${villaConfig.hostEmail}?subject=${encodeURIComponent("Villa Lavanda inquiry")}`
};

document.querySelectorAll("[data-link]").forEach((link) => {
  const url = linkMap[link.dataset.link];
  if (url) {
    link.href = url;
  }
});

document.querySelectorAll("[data-phone-display]").forEach((link) => {
  link.textContent = villaConfig.phoneDisplay;
});

const map = document.querySelector("[data-map]");
if (map && villaConfig.mapEmbedQuery) {
  map.src = `https://www.google.com/maps?q=${encodeURIComponent(villaConfig.mapEmbedQuery)}&output=embed`;
}

document.querySelectorAll("[data-availability-min-stay]").forEach((element) => {
  element.textContent = villaConfig.minimumStay;
});

document.querySelectorAll("[data-availability-updated]").forEach((element) => {
  element.textContent = villaConfig.calendarUpdated;
});

const today = new Date();
const yyyy = today.getFullYear();
const mm = String(today.getMonth() + 1).padStart(2, "0");
const dd = String(today.getDate()).padStart(2, "0");
const todayValue = `${yyyy}-${mm}-${dd}`;

document.querySelectorAll('input[type="date"]').forEach((input) => {
  input.min = todayValue;
});

const calendarGrid = document.querySelector("[data-calendar-grid]");
const calendarTitle = document.querySelector("[data-calendar-title]");
const calendarPrev = document.querySelector("[data-calendar-prev]");
const calendarNext = document.querySelector("[data-calendar-next]");
const calendarSyncStatus = document.querySelector("[data-calendar-sync-status]");
let availabilityDates = { ...villaConfig.availabilityDates };
let calendarSyncState = villaConfig.airbnbCalendarSync && villaConfig.airbnbCalendarIcsUrl ? "syncing" : "manual";

const statusLabels = {
  available: "",
  limited: "",
  booked: "Booked",
  closed: "",
  check: ""
};

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const formatDateKey = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const getInitialCalendarMonth = () => {
  const [year, month] = villaConfig.availabilityStartMonth.split("-").map(Number);
  return new Date(year, month - 1, 1);
};

let activeCalendarMonth = getInitialCalendarMonth();

const getCalendarFeedUrls = () => {
  if (!villaConfig.airbnbCalendarIcsUrl) {
    return [];
  }

  if (villaConfig.airbnbCalendarProxyUrl) {
    return [
      `${villaConfig.airbnbCalendarProxyUrl}${encodeURIComponent(villaConfig.airbnbCalendarIcsUrl)}`,
      villaConfig.airbnbCalendarIcsUrl
    ];
  }

  return [villaConfig.airbnbCalendarIcsUrl];
};

const unfoldIcsLines = (icsText) => {
  return icsText.replace(/\r?\n[ \t]/g, "").split(/\r?\n/);
};

const getIcsValue = (eventLines, propertyName) => {
  const line = eventLines.find((item) => item.startsWith(`${propertyName};`) || item.startsWith(`${propertyName}:`));
  if (!line) {
    return "";
  }

  return line.slice(line.indexOf(":") + 1).trim();
};

const parseIcsDate = (value) => {
  if (!value) {
    return null;
  }

  const datePart = value.slice(0, 8);
  const year = Number(datePart.slice(0, 4));
  const month = Number(datePart.slice(4, 6));
  const day = Number(datePart.slice(6, 8));

  if (!year || !month || !day) {
    return null;
  }

  return new Date(year, month - 1, day);
};

const addDays = (date, days) => {
  const nextDate = new Date(date);
  nextDate.setDate(nextDate.getDate() + days);
  return nextDate;
};

const getAirbnbStatus = (summary, description) => {
  const text = `${summary} ${description}`.toLowerCase();

  if (text.includes("reserved") || text.includes("reservation") || text.includes("booked")) {
    return "booked";
  }

  return "closed";
};

const parseAirbnbCalendar = (icsText) => {
  const lines = unfoldIcsLines(icsText);
  const dates = {};
  let eventLines = [];
  let isReadingEvent = false;

  lines.forEach((line) => {
    if (line === "BEGIN:VEVENT") {
      isReadingEvent = true;
      eventLines = [];
      return;
    }

    if (line === "END:VEVENT") {
      const start = parseIcsDate(getIcsValue(eventLines, "DTSTART"));
      const end = parseIcsDate(getIcsValue(eventLines, "DTEND"));
      const summary = getIcsValue(eventLines, "SUMMARY");
      const description = getIcsValue(eventLines, "DESCRIPTION");
      const status = getAirbnbStatus(summary, description);

      if (start && end) {
        for (let date = start; date < end; date = addDays(date, 1)) {
          dates[formatDateKey(date)] = status;
        }
      }

      isReadingEvent = false;
      eventLines = [];
      return;
    }

    if (isReadingEvent) {
      eventLines.push(line);
    }
  });

  return dates;
};

const setCalendarUpdatedText = (text) => {
  document.querySelectorAll("[data-availability-updated]").forEach((element) => {
    element.textContent = text;
  });
};

const setCalendarSyncStatus = (message, state = "") => {
  if (!calendarSyncStatus) {
    return;
  }

  calendarSyncStatus.textContent = message;
  calendarSyncStatus.classList.toggle("is-synced", state === "synced");
  calendarSyncStatus.classList.toggle("is-hidden", state === "hidden");
};

const syncAirbnbCalendar = async () => {
  if (!villaConfig.airbnbCalendarSync || !villaConfig.airbnbCalendarIcsUrl) {
    setCalendarSyncStatus("Calendar is using manual fallback dates.", "hidden");
    return;
  }

  const feedUrls = getCalendarFeedUrls();
  setCalendarSyncStatus("Checking Airbnb calendar...");

  for (const feedUrl of feedUrls) {
    try {
      const response = await fetch(feedUrl, { cache: "no-store" });

      if (!response.ok) {
        throw new Error(`Calendar request failed: ${response.status}`);
      }

      const icsText = await response.text();
      const syncedDates = parseAirbnbCalendar(icsText);

      availabilityDates = { ...villaConfig.availabilityDates, ...syncedDates };
      calendarSyncState = "synced";
      setCalendarUpdatedText("Synced from Airbnb");
      setCalendarSyncStatus("Live Airbnb calendar synced.", "synced");
      renderCalendar();
      return;
    } catch (error) {
      console.warn("Airbnb calendar sync attempt failed.", error);
    }
  }

  console.warn("Airbnb calendar sync failed. Using manual fallback dates.");
  calendarSyncState = "failed";
  setCalendarUpdatedText("Manual fallback dates");
  setCalendarSyncStatus("Live Airbnb sync is not available here. Publish with the API proxy, then this calendar will use Airbnb dates.");
  renderCalendar();
};

const renderCalendar = () => {
  if (!calendarGrid || !calendarTitle) {
    return;
  }

  calendarGrid.innerHTML = "";

  const year = activeCalendarMonth.getFullYear();
  const month = activeCalendarMonth.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const leadingEmptyDays = (firstDay.getDay() + 6) % 7;

  calendarTitle.textContent = `${monthNames[month]} ${year}`;

  for (let index = 0; index < leadingEmptyDays; index += 1) {
    const emptyCell = document.createElement("div");
    emptyCell.className = "calendar-day is-empty";
    calendarGrid.append(emptyCell);
  }

  for (let day = 1; day <= lastDay.getDate(); day += 1) {
    const date = new Date(year, month, day);
    const dateKey = formatDateKey(date);
    const listedStatus = availabilityDates[dateKey];
    const isPast = dateKey < todayValue;
    const needsLiveConfirmation =
      villaConfig.airbnbCalendarSync && villaConfig.airbnbCalendarIcsUrl && calendarSyncState !== "synced";
    const status = isPast ? "closed" : listedStatus || (needsLiveConfirmation ? "check" : "available");
    const dayCell = document.createElement("div");
    const time = document.createElement("time");
    const label = document.createElement("span");

    dayCell.className = `calendar-day is-${status}${isPast ? " is-past" : ""}${
      dateKey === todayValue ? " is-today" : ""
    }`;
    dayCell.setAttribute("role", "gridcell");
    dayCell.setAttribute("aria-label", `${monthNames[month]} ${day}, ${year}: ${statusLabels[status]}`);

    time.dateTime = dateKey;
    time.textContent = String(day);
    label.textContent = statusLabels[status];

    dayCell.append(time, label);
    calendarGrid.append(dayCell);
  }
};

calendarPrev?.addEventListener("click", () => {
  activeCalendarMonth = new Date(activeCalendarMonth.getFullYear(), activeCalendarMonth.getMonth() - 1, 1);
  renderCalendar();
});

calendarNext?.addEventListener("click", () => {
  activeCalendarMonth = new Date(activeCalendarMonth.getFullYear(), activeCalendarMonth.getMonth() + 1, 1);
  renderCalendar();
});

renderCalendar();
syncAirbnbCalendar();

const createGalleryMedia = (item) => {
  if (item.type === "video") {
    const video = document.createElement("video");
    video.src = item.src;
    video.controls = true;
    video.playsInline = true;
    video.preload = "metadata";
    video.setAttribute("aria-label", item.alt || "Villa Lavanda video");

    if (item.poster) {
      video.poster = item.poster;
    }

    return video;
  }

  const image = document.createElement("img");
  image.src = item.src;
  image.alt = item.alt || "";
  image.loading = "lazy";
  return image;
};

const renderGallery = () => {
  const galleryRoot = document.querySelector("[data-gallery]");
  if (!galleryRoot || !Array.isArray(villaConfig.galleryCategories)) {
    return;
  }

  galleryRoot.innerHTML = "";

  villaConfig.galleryCategories.forEach((category) => {
    const section = document.createElement("section");
    section.className = "gallery-category";
    section.id = `gallery-${category.id}`;
    section.setAttribute("aria-labelledby", `gallery-${category.id}-title`);

    const heading = document.createElement("h3");
    heading.id = `gallery-${category.id}-title`;
    heading.className = "gallery-category-title";
    heading.textContent = category.title;

    const grid = document.createElement("div");
    grid.className = "gallery-grid";

    if (!category.items?.length) {
      const empty = document.createElement("p");
      empty.className = "gallery-empty";
      empty.textContent = category.emptyText || "Photos will be added soon.";
      section.append(heading, empty);
      galleryRoot.append(section);
      return;
    }

    category.items.forEach((item) => {
      const media = createGalleryMedia(item);
      const figure = document.createElement("figure");
      figure.className = `gallery-item gallery-item-${item.type || "image"}`;
      figure.append(media);
      grid.append(figure);
    });

    section.append(heading, grid);
    galleryRoot.append(section);
  });
};

renderGallery();

const inquiryForm = document.querySelector("[data-inquiry-form]");

inquiryForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(inquiryForm);
  const arrival = formData.get("arrival");
  const departure = formData.get("departure");
  const guests = formData.get("guests");
  const message = formData.get("message") || "";

  const lines = [
    "Hello Villa Lavanda 👋",
    "",
    `Arrival: ${arrival}`,
    `Departure: ${departure}`,
    `Guests: ${guests}`,
  ];

  if (message) {
    lines.push("", message);
  }

  const whatsappNumber = villaConfig.whatsappHref.replace("https://wa.me/", "");
  window.open(
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`,
    "_blank",
    "noopener"
  );
});

// ── Live review display ──────────────────────────────────────────────────────

const reviewForm = document.querySelector("[data-review-form]");
const submittedReviews = document.querySelector("[data-submitted-reviews]");

const starsHtml = (count) => {
  const n = Math.max(1, Math.min(5, Number(count)));
  return "★".repeat(n) + "☆".repeat(5 - n);
};

const createReviewCard = ({ name, rating, review }) => {
  const card = document.createElement("article");
  card.className = "submitted-review-card";

  const header = document.createElement("div");
  header.className = "submitted-review-header";

  const nameEl = document.createElement("span");
  nameEl.className = "submitted-review-name";
  nameEl.textContent = name;

  const starsEl = document.createElement("span");
  starsEl.className = "submitted-review-stars";
  starsEl.setAttribute("aria-label", `${rating} out of 5 stars`);
  starsEl.textContent = starsHtml(rating);

  header.append(nameEl, starsEl);

  const text = document.createElement("p");
  text.className = "submitted-review-text";
  text.textContent = review;

  card.append(header, text);
  return card;
};

if (reviewForm && submittedReviews) {
  reviewForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(reviewForm);
    const name = String(formData.get("name") || "").trim();
    const rating = formData.get("rating");
    const review = String(formData.get("review") || "").trim();

    if (!name || !review) {
      return;
    }

    const card = createReviewCard({ name, rating, review });
    submittedReviews.prepend(card);

    reviewForm.reset();

    // Scroll card into view smoothly
    card.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
}