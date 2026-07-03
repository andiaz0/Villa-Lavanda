const villaConfig = {
  guests: "8",
  bedrooms: "4",
  bathrooms: "3",
  hostEmail: "booking@villalavanda.casa",
  phoneDisplay: "+389 75 406 404",
  phoneHref: "tel:+38975406404",
  whatsappHref: "https://wa.me/38975406404",
  airbnbUrl: "https://www.airbnb.com/rooms/1714050000210595231?adults=1&check_in=2026-08-18&check_out=2026-08-19&guests=1&search_mode=regular_search&source_impression_id=p3_1783098629_P3_hT_sLBMpmMK_L&previous_page_section_name=1000&federated_search_id=d4e44d70-0428-4d5d-aa24-520af53ec1f9",
  bookingUrl: "https://www.booking.com/",
  mapsUrl: "https://www.google.com/maps/place/Villa+Lavanda/@42.056604,20.9739112,9577m/data=!3m1!1e3!4m6!3m5!1s0x1353f7a3c73d5a83:0x54c65ee071e6c4aa!8m2!3d42.0461725!4d21.0007744!16s%2Fg%2F11nqqr_2vh?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D",
  mapEmbedQuery: "Villa Lavanda",
  minimumStay: "3 nights",
  calendarUpdated: "Airbnb calendar sync",
  availabilityStartMonth: "2026-07",
  airbnbCalendarSync: true,
  airbnbCalendarIcsUrl: "https://www.airbnb.com/calendar/ical/1714050000210595231.ics?t=aae374db75f44c109b9c5461c1c00989",
  airbnbCalendarProxyUrl: "/api/airbnb-calendar?url=",
  availabilityDates: {
    "2026-07-04": "booked",
    "2026-07-05": "booked",
    "2026-07-06": "booked",
    "2026-07-20": "closed",
    "2026-07-21": "closed",
    "2026-07-22": "closed"
  }
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
let availabilityDates = { ...villaConfig.availabilityDates };

const statusLabels = {
  available: "Available",
  limited: "Limited",
  booked: "Booked",
  closed: "Closed"
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

const syncAirbnbCalendar = async () => {
  if (!villaConfig.airbnbCalendarSync || !villaConfig.airbnbCalendarIcsUrl) {
    return;
  }

  const feedUrls = getCalendarFeedUrls();

  for (const feedUrl of feedUrls) {
    try {
      const response = await fetch(feedUrl, { cache: "no-store" });

      if (!response.ok) {
        throw new Error(`Calendar request failed: ${response.status}`);
      }

      const icsText = await response.text();
      const syncedDates = parseAirbnbCalendar(icsText);

      availabilityDates = { ...villaConfig.availabilityDates, ...syncedDates };
      setCalendarUpdatedText("Synced from Airbnb");
      renderCalendar();
      return;
    } catch (error) {
      console.warn("Airbnb calendar sync attempt failed.", error);
    }
  }

  console.warn("Airbnb calendar sync failed. Using manual fallback dates.");
  setCalendarUpdatedText("Manual fallback dates");
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
    const status = isPast ? "closed" : listedStatus || "available";
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

const inquiryForm = document.querySelector("[data-inquiry-form]");

inquiryForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(inquiryForm);
  const arrival = formData.get("arrival");
  const departure = formData.get("departure");
  const guests = formData.get("guests");
  const message = formData.get("message") || "No extra message added.";

  const body = [
    "Hello Villa Lavanda,",
    "",
    "I would like to ask about availability.",
    "",
    `Arrival: ${arrival}`,
    `Departure: ${departure}`,
    `Guests: ${guests}`,
    "",
    "Message:",
    message,
    "",
    "Thank you."
  ].join("\n");

  window.location.href = `mailto:${villaConfig.hostEmail}?subject=${encodeURIComponent(
    "Villa Lavanda availability inquiry"
  )}&body=${encodeURIComponent(body)}`;
});
