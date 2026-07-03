module.exports = async function handler(request, response) {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");

  if (request.method === "OPTIONS") {
    response.status(204).end();
    return;
  }

  const feedUrl = request.query?.url;

  if (!feedUrl || typeof feedUrl !== "string") {
    response.status(400).json({ error: "Missing Airbnb calendar URL." });
    return;
  }

  let parsedUrl;

  try {
    parsedUrl = new URL(feedUrl);
  } catch {
    response.status(400).json({ error: "Invalid Airbnb calendar URL." });
    return;
  }

  if (parsedUrl.protocol !== "https:") {
    response.status(400).json({ error: "Calendar URL must use HTTPS." });
    return;
  }

  try {
    const calendarResponse = await fetch(parsedUrl.href, {
      headers: {
        "User-Agent": "VillaLavandaCalendar/1.0"
      }
    });

    if (!calendarResponse.ok) {
      response.status(calendarResponse.status).json({ error: "Airbnb calendar request failed." });
      return;
    }

    const calendarText = await calendarResponse.text();

    response.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate=600");
    response.setHeader("Content-Type", "text/calendar; charset=utf-8");
    response.status(200).send(calendarText);
  } catch {
    response.status(502).json({ error: "Unable to fetch Airbnb calendar." });
  }
};
