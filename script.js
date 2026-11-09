const villaConfig = {
  guests: "6",
  bedrooms: "2",
  bathrooms: "2",
  hostEmail: "andiazizi0198@gmail.com",
  phoneDisplay: "+389 75 406 404",
  phoneHref: "tel:+38975406404",
  whatsappHref: "https://wa.me/38975406404",
  airbnbUrl: "https://www.airbnb.com/rooms/1714050000210595231?adults=1&check_in=2026-08-18&check_out=2026-08-19&guests=1&search_mode=regular_search&source_impression_id=p3_1783098629_P3_hT_sLBMpmMK_L&previous_page_section_name=1000&federated_search_id=d4e44d70-0428-4d5d-aa24-520af53ec1f9",
  mapsUrl: "https://maps.app.goo.gl/fDk6FayZh5pP7uRaA",
  mapLat: 42.046167,
  mapLng: 21.000776,
  mapZoom: 16,
  availabilityStartMonth: "2026-11",
  airbnbCalendarSync: true,
  airbnbCalendarIcsUrl: "https://www.airbnb.com/calendar/ical/1714050000210595231.ics?t=aae374db75f44c109b9c5461c1c00989",
  airbnbCalendarProxyUrl: "/api/airbnb-calendar?url=",
  availabilityDates: {},
  galleryCategories: [
    {
      id: "exterior",
      titleKey: "gallery.exterior",
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
          src: "assets/images/villa-aerial-evening.jpeg",
          alt: "Evening aerial view of Villa Lavanda, the pool, and gardens"
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
      titleKey: "gallery.pool",
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
        },
        {
          type: "image",
          src: "assets/images/hot-tub-day-valley.jpeg",
          alt: "Outdoor hot tub overlooking the valley in daylight"
        },
        {
          type: "image",
          src: "assets/images/hot-tub-exterior-day.jpeg",
          alt: "Hot tub beside the villa in daylight"
        },
        {
          type: "image",
          src: "assets/images/hot-tub-evening-purple.jpeg",
          alt: "Hot tub glowing purple at night with valley views"
        },
        {
          type: "image",
          src: "assets/images/hot-tub-evening-green.jpeg",
          alt: "Hot tub glowing green at night"
        }
      ]
    },
    {
      id: "terrace",
      titleKey: "gallery.terrace",
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
      titleKey: "gallery.bedrooms",
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
      titleKey: "gallery.living",
      items: [
        {
          type: "image",
          src: "assets/images/living-room.jpeg",
          alt: "Living room at Villa Lavanda"
        },
        {
          type: "image",
          src: "assets/images/fireplace-lounge.jpeg",
          alt: "Warm fireplace and lounge chair at Villa Lavanda"
        }
      ]
    },
    {
      id: "kitchen",
      titleKey: "gallery.kitchen",
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
      id: "bathrooms",
      titleKey: "gallery.bathrooms",
      items: [
        {
          type: "image",
          src: "assets/images/bathroom.jpeg",
          alt: "Bathroom at Villa Lavanda"
        },
        {
          type: "image",
          src: "assets/images/bathroom2.jpeg",
          alt: "Second bathroom at Villa Lavanda"
        }
      ]
    },
    {
      id: "videos",
      titleKey: "gallery.videos",
      emptyKey: "gallery.videos.empty",
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

const translations = {
  sq: {
    "skip": "Kalo te përmbajtja",
    "nav.stay": "Qëndrimi",
    "nav.availability": "Disponueshmëria",
    "nav.gallery": "Galeria",
    "nav.amenities": "Shërbimet",
    "nav.location": "Lokacioni",
    "nav.reviews": "Vlerësime",
    "nav.book": "Rezervo",
    "hero.eyebrow": "Vilë private për pushim",
    "hero.copy": "Një qëndrim elegant me mëngjese të qeta, ajër mali, hapësira komode dhe mbrëmje që ndihen të lehta sapo të arrini.",
    "hero.availability": "Kontrollo datat",
    "hero.gallery": "Shiko vilën",
    "label.guests": "Mysafirë",
    "label.bedrooms": "Dhoma gjumi",
    "label.bathrooms": "Banjo",
    "booking.kicker": "Rezervo qëndrimin",
    "booking.airbnb.label": "Airbnb",
    "booking.airbnb.title": "Rezervo në Airbnb",
    "booking.airbnb.copy": "Përdor këtë buton nëse preferon vlerësimet, mesazhet dhe pagesën e sigurt në Airbnb.",
    "booking.airbnb.button": "Hap Airbnb",
    "booking.direct.label": "Kërkesë direkte",
    "booking.direct.title": "Kërko qëndrim direkt",
    "booking.direct.copy": "Dërgo datat dhe detajet e mysafirëve. Qëndrimi konfirmohet vetëm pasi hosti të miratojë disponueshmërinë dhe çmimin.",
    "booking.direct.button": "Dërgo kërkesë",
    "availability.eyebrow": "Disponueshmëria",
    "availability.title": "Kontrollo datat dhe kërko qëndrimin.",
    "availability.copy": "Kalendari është udhëzues. Dërgo kërkesë për datat e tua dhe hosti do të konfirmojë disponueshmërinë dhe çmimin final para konfirmimit të qëndrimit.",
    "availability.minimum": "Qëndrimi minimal",
    "availability.minimum.value": "1 natë",
    "availability.updated": "Kalendari",
    "availability.verify": "Kërko këto data",
    "calendar.title": "Disponueshmëria",
    "calendar.syncing": "Duke kontrolluar kalendarin e Airbnb...",
    "calendar.synced": "Kalendari i Airbnb u sinkronizua.",
    "calendar.manual": "Kalendari po përdor data manuale.",
    "calendar.failed": "Sinkronizimi live nuk është i disponueshëm këtu. Pas publikimit me API proxy, kalendari do të përdorë datat e Airbnb.",
    "calendar.updated.airbnb": "Kalendari Airbnb",
    "calendar.updated.synced": "Sinkronizuar nga Airbnb",
    "calendar.updated.manual": "Data manuale",
    "status.available": "E lirë",
    "status.booked": "E rezervuar",
    "status.check": "Kontrollo",
    "stay.eyebrow": "Qëndrimi",
    "stay.title": "Një vilë e qetë për mikpritje komode.",
    "stay.copy1": "Villa Lavanda është vilë private malore për deri në 6 mysafirë, me 2 dhoma gjumi, 2 banjo, pishinë, interier druri, terrasë dhe pamje të hapura nga lugina.",
    "stay.copy2": "Villa Lavanda bashkon privatësinë, jetesën jashtë dhe detajet e ngrohta të brendshme. Shfleto galerinë sipas hapësirave para rezervimit.",
    "feature.arch.label": "Arkitektura",
    "feature.arch.title": "Vilë e ngrohtë prej druri, me xham, gur dhe ajër mali.",
    "feature.pool.label": "Pishina",
    "feature.pool.title": "Ujë i kaltër me pamje të hapur nga lugina.",
    "feature.rest.label": "Pushim",
    "feature.rest.title": "Dhoma gjumi të përgatitura me kujdes si në hotel.",
    "gallery.eyebrow": "Galeria",
    "gallery.title": "Çdo gjë që mysafirët duhet ta shohin para qëndrimit.",
    "gallery.exterior": "Pamje të jashtme",
    "gallery.pool": "Pishina dhe xhakuzi",
    "gallery.terrace": "Terrasa dhe qëndrimi jashtë",
    "gallery.bedrooms": "Dhomat e gjumit",
    "gallery.living": "Salloni",
    "gallery.kitchen": "Kuzhina dhe ngrënia",
    "gallery.bathrooms": "Banjot",
    "gallery.videos": "Video",
    "gallery.videos.empty": "Videoja e vilës do të shtohet së shpejti.",
    "amenities.eyebrow": "Shërbimet",
    "amenities.title": "Të gjitha detajet praktike që kërkohen së pari.",
    "amenity.pool.title": "Pishinë private",
    "amenity.pool.copy": "Hapësirë e qetë jashtë për ditë të plota në vilë.",
    "amenity.dining.title": "Ngrënie jashtë",
    "amenity.dining.copy": "Mbrëmje të rehatshme me hapësirë për të gjithë.",
    "amenity.wifi.title": "Wi-Fi i shpejtë",
    "amenity.wifi.copy": "Lidhje e qëndrueshme për planifikim, thirrje dhe punë në distancë.",
    "amenity.kitchen.title": "Kuzhinë e pajisur",
    "amenity.kitchen.copy": "Gatuaj në vilë me gjërat kryesore të përgatitura.",
    "amenity.parking.title": "Parking",
    "amenity.parking.copy": "Arritje e lehtë dhe lëvizje praktike me makinë.",
    "amenity.ac.title": "Klimë",
    "amenity.ac.copy": "Netë të rehatshme gjatë sezonit të ngrohtë.",
    "rooms.eyebrow": "Fjetja",
    "rooms.title": "Detaje të qarta për familje, çifte dhe grupe.",
    "room.one.label": "Dhoma 1",
    "room.one.title": "Dhomë me krevat dopio",
    "room.one.copy": "Krevat dopio nën çatinë prej druri, me çarçafë dhe peshqirë të freskët.",
    "room.two.label": "Dhoma 2",
    "room.two.title": "Dhomë me dy krevate",
    "room.two.copy": "Dy krevate tek për fëmijë, miq ose gjumë të ndarë.",
    "location.eyebrow": "Lokacioni",
    "location.title": "Harta, ardhja dhe vendet afër.",
    "location.copy": "Villa Lavanda ndodhet në mal, me pamje të qeta, ajër të pastër dhe qasje të lehtë me makinë. Harta hapet direkt në Google Maps.",
    "location.view.title": "Pamje malore",
    "location.view.copy": "Rrethinë e qetë kodrinore me pamje të hapur nga lugina.",
    "location.dining.title": "Ushqim lokal",
    "location.dining.copy": "Restorante, markete dhe shërbime të qytetit arrihen me makinë.",
    "location.nature.title": "Pushim në natyrë",
    "location.nature.copy": "Bazë e mirë për mëngjese të ngadalta, ditë në pishinë dhe ajër mali.",
    "location.maps": "Hap Google Maps",
    "reviews.eyebrow": "Besimi i mysafirëve",
    "reviews.title": "Çfarë thonë mysafirët për Villa Lavanda.",
    "reviews.airbnb.label": "Vlerësime Airbnb",
    "reviews.airbnb.copy": "Lexo qëndrimet e verifikuara direkt në Airbnb: data, foto dhe vlerësime reale nga mysafirët.",
    "reviews.airbnb.button": "Hap vlerësimet në Airbnb",
    "reviews.direct.label": "Vlerësim direkt",
    "reviews.direct.title": "Ke qëndruar te ne? Lër një vlerësim.",
    "reviews.name": "Emri",
    "reviews.name.placeholder": "Emri yt",
    "reviews.rating": "Nota",
    "reviews.review": "Vlerësimi",
    "reviews.review.placeholder": "Tregoju mysafirëve të ardhshëm si ishte qëndrimi.",
    "reviews.post": "Posto vlerësimin",
    "policies.eyebrow": "Mirë të dihet",
    "policies.title": "Rregulla të qarta para rezervimit.",
    "policy.checkin.title": "Check-in",
    "policy.checkin.copy": "Nga 12:00 deri në 1:00 AM. Ju lutemi konfirmoni kohën e ardhjes me hostin para arritjes.",
    "policy.checkout.title": "Check-out",
    "policy.checkout.copy": "Deri në 10:00 AM.",
    "policy.rules.title": "Rregullat e shtëpisë",
    "policy.rules.copy": "Festat lejohen, por muzika dhe zhurma duhet të përfundojnë në 12:00 të natës.",
    "policy.cancel.title": "Anulimi",
    "policy.cancel.copy": "Mysafirët mund të anulojnë deri në 14 ditë para ardhjes.",
    "policy.availability.title": "Disponueshmëria",
    "policy.availability.copy": "Datat në kalendar janë udhëzuese. Konfirmo disponueshmërinë dhe çmimin me hostin para konfirmimit.",
    "contact.eyebrow": "Kontakt",
    "contact.title": "Kërko të rezervosh Villa Lavanda.",
    "contact.copy": "Dërgo datat e dëshiruara dhe detajet e grupit në WhatsApp. Hosti do të kontrollojë disponueshmërinë dhe do të konfirmojë çmimin total. Pagesa online nuk pranohet; pagesa bëhet në vilë.",
    "contact.call": "Telefono hostin",
    "contact.whatsapp": "WhatsApp",
    "contact.email": "Email",
    "form.name": "Emri yt",
    "form.arrival": "Ardhja",
    "form.departure": "Largimi",
    "form.guests": "Mysafirë",
    "form.message": "Mesazhi",
    "form.message.placeholder": "Trego çfarë të duhet për qëndrimin.",
    "form.submit": "Dërgo kërkesën në WhatsApp",
    "form.note": "Kjo është kërkesë për rezervim, jo konfirmim. WhatsApp do të hapet me mesazhin gati për dërgim.",
    "form.date.order": "Data e largimit duhet të jetë pas datës së ardhjes.",
    "footer.copy": "Akomodim elegant në vilë private.",
    "lightbox.close": "Mbyll fotografinë"
  },
  mk: {
    "skip": "Прескокни до содржината",
    "nav.stay": "Престој",
    "nav.availability": "Достапност",
    "nav.gallery": "Галерија",
    "nav.amenities": "Услуги",
    "nav.location": "Локација",
    "nav.reviews": "Рецензии",
    "nav.book": "Резервирај",
    "hero.eyebrow": "Приватна вила за одмор",
    "hero.copy": "Елегантен престој со мирни утра, планински воздух, удобни простории и вечери што започнуваат лесно уште при пристигнување.",
    "hero.availability": "Провери датуми",
    "hero.gallery": "Погледни ја вилата",
    "label.guests": "Гости",
    "label.bedrooms": "Спални",
    "label.bathrooms": "Бањи",
    "booking.kicker": "Резервирај престој",
    "booking.airbnb.label": "Airbnb",
    "booking.airbnb.title": "Резервирај на Airbnb",
    "booking.airbnb.copy": "Користи го ова копче ако сакаш Airbnb рецензии, пораки и сигурна наплата.",
    "booking.airbnb.button": "Отвори Airbnb",
    "booking.direct.label": "Директно барање",
    "booking.direct.title": "Побарај директна резервација",
    "booking.direct.copy": "Испрати ги датумите и деталите за гостите. Престојот е потврден само откако домаќинот ќе ја одобри достапноста и цената.",
    "booking.direct.button": "Испрати барање",
    "availability.eyebrow": "Достапност",
    "availability.title": "Провери датуми и побарај престој.",
    "availability.copy": "Календарот е информативен. Испрати барање за твоите датуми, а домаќинот ќе ја потврди достапноста и конечната цена пред престојот да биде потврден.",
    "availability.minimum": "Минимален престој",
    "availability.minimum.value": "1 ноќ",
    "availability.updated": "Календар",
    "availability.verify": "Побарај ги овие датуми",
    "calendar.title": "Достапност",
    "calendar.syncing": "Се проверува Airbnb календарот...",
    "calendar.synced": "Airbnb календарот е синхронизиран.",
    "calendar.manual": "Календарот користи рачно внесени датуми.",
    "calendar.failed": "Синхронизацијата не е достапна тука. По објавување со API proxy, календарот ќе ги користи Airbnb датумите.",
    "calendar.updated.airbnb": "Airbnb календар",
    "calendar.updated.synced": "Синхронизирано од Airbnb",
    "calendar.updated.manual": "Рачни датуми",
    "status.available": "Слободно",
    "status.booked": "Резервирано",
    "status.check": "Провери",
    "stay.eyebrow": "Престој",
    "stay.title": "Мирна вила создадена за удобен прием.",
    "stay.copy1": "Villa Lavanda е приватна планинска вила за до 6 гости, со 2 спални, 2 бањи, базен, дрвен ентериер, тераса и широк поглед кон долината.",
    "stay.copy2": "Villa Lavanda спојува приватност, надворешен престој и топли внатрешни детали. Разгледај ја галеријата по простории пред резервација.",
    "feature.arch.label": "Архитектура",
    "feature.arch.title": "Топла дрвена вила со стакло, камен и планински воздух.",
    "feature.pool.label": "Базен",
    "feature.pool.title": "Чиста сина вода со отворен поглед кон долината.",
    "feature.rest.label": "Одмор",
    "feature.rest.title": "Спални подготвени со хотелска грижа.",
    "gallery.eyebrow": "Галерија",
    "gallery.title": "Сè што гостите треба да го видат пред престојот.",
    "gallery.exterior": "Надворешност и погледи",
    "gallery.pool": "Базен и џакузи",
    "gallery.terrace": "Тераса и надворешен престој",
    "gallery.bedrooms": "Спални",
    "gallery.living": "Дневна соба",
    "gallery.kitchen": "Кујна и трпезарија",
    "gallery.bathrooms": "Бањи",
    "gallery.videos": "Видео",
    "gallery.videos.empty": "Видео тура ќе биде додадена наскоро.",
    "amenities.eyebrow": "Услуги",
    "amenities.title": "Практичните детали што гостите најпрво ги бараат.",
    "amenity.pool.title": "Приватен базен",
    "amenity.pool.copy": "Мирен надворешен простор за цели денови во вилата.",
    "amenity.dining.title": "Надворешно јадење",
    "amenity.dining.copy": "Удобни вечери со место за сите.",
    "amenity.wifi.title": "Брз Wi-Fi",
    "amenity.wifi.copy": "Стабилна врска за планирање, повици и работа од далечина.",
    "amenity.kitchen.title": "Опремена кујна",
    "amenity.kitchen.copy": "Готви дома со основните работи веќе подготвени.",
    "amenity.parking.title": "Паркинг",
    "amenity.parking.copy": "Лесно пристигнување и практични патувања со автомобил.",
    "amenity.ac.title": "Клима",
    "amenity.ac.copy": "Удобни ноќи во топлата сезона.",
    "rooms.eyebrow": "Распоред за спиење",
    "rooms.title": "Јасни детали за семејства, парови и групи.",
    "room.one.label": "Спална 1",
    "room.one.title": "Спална со брачен кревет",
    "room.one.copy": "Удобен брачен кревет под дрвен покрив, со свежа постелнина и крпи.",
    "room.two.label": "Спална 2",
    "room.two.title": "Соба со два кревета",
    "room.two.copy": "Два единечни кревета за деца, пријатели или одделно спиење.",
    "location.eyebrow": "Локација",
    "location.title": "Мапа, пристигнување и блиски места.",
    "location.copy": "Villa Lavanda е сместена во планина, со мирни погледи, свеж воздух и лесен пристап со автомобил. Мапата се отвора директно во Google Maps.",
    "location.view.title": "Планински погледи",
    "location.view.copy": "Тивка ридска околина со отворен поглед кон долината.",
    "location.dining.title": "Локална храна",
    "location.dining.copy": "Ресторани, маркети и градски услуги се достапни со автомобил.",
    "location.nature.title": "Одмор во природа",
    "location.nature.copy": "Добра база за бавни утра, денови покрај базен и планински воздух.",
    "location.maps": "Отвори Google Maps",
    "reviews.eyebrow": "Доверба од гости",
    "reviews.title": "Што велат гостите за Villa Lavanda.",
    "reviews.airbnb.label": "Airbnb рецензии",
    "reviews.airbnb.copy": "Прочитај проверени престои директно на Airbnb: датуми, фотографии и вистински впечатоци од гости.",
    "reviews.airbnb.button": "Отвори Airbnb рецензии",
    "reviews.direct.label": "Директна рецензија",
    "reviews.direct.title": "Сте престојувале кај нас? Оставете рецензија.",
    "reviews.name": "Име",
    "reviews.name.placeholder": "Вашето име",
    "reviews.rating": "Оцена",
    "reviews.review": "Рецензија",
    "reviews.review.placeholder": "Кажете им на идните гости каков беше престојот.",
    "reviews.post": "Објави рецензија",
    "policies.eyebrow": "Добро е да се знае",
    "policies.title": "Јасни очекувања пред резервација.",
    "policy.checkin.title": "Check-in",
    "policy.checkin.copy": "Од 12:00 до 1:00 AM. Ве молиме потврдете го времето на пристигнување со домаќинот.",
    "policy.checkout.title": "Check-out",
    "policy.checkout.copy": "До 10:00 AM.",
    "policy.rules.title": "Куќни правила",
    "policy.rules.copy": "Забави се дозволени, но музиката и бучавата мора да завршат до 12:00 навечер.",
    "policy.cancel.title": "Откажување",
    "policy.cancel.copy": "Гостите можат да откажат до 14 дена пред пристигнување.",
    "policy.availability.title": "Достапност",
    "policy.availability.copy": "Датумите во календарот се информативни. Потврди ги достапноста и цената со домаќинот пред потврда.",
    "contact.eyebrow": "Контакт",
    "contact.title": "Побарај резервација во Villa Lavanda.",
    "contact.copy": "Испрати ги посакуваните датуми и деталите за групата преку WhatsApp. Домаќинот ќе ја провери достапноста и ќе ја потврди вкупната цена. Нема онлајн наплата; плаќањето се договара во вилата.",
    "contact.call": "Јави се на домаќинот",
    "contact.whatsapp": "WhatsApp",
    "contact.email": "Email",
    "form.name": "Твоето име",
    "form.arrival": "Пристигнување",
    "form.departure": "Заминување",
    "form.guests": "Гости",
    "form.message": "Порака",
    "form.message.placeholder": "Кажете што ви треба за престојот.",
    "form.submit": "Испрати барање на WhatsApp",
    "form.note": "Ова е барање за резервација, не потврда. WhatsApp ќе се отвори со подготвена порака.",
    "form.date.order": "Датумот на заминување мора да биде по датумот на пристигнување.",
    "footer.copy": "Елегантно сместување во приватна вила.",
    "lightbox.close": "Затвори фотографија"
  },
  en: {
    "skip": "Skip to content",
    "nav.stay": "Stay",
    "nav.availability": "Availability",
    "nav.gallery": "Gallery",
    "nav.amenities": "Amenities",
    "nav.location": "Location",
    "nav.reviews": "Reviews",
    "nav.book": "Book",
    "hero.eyebrow": "Private villa retreat",
    "hero.copy": "A refined villa stay shaped around quiet mornings, mountain air, generous rooms, and evenings that feel easy from the moment guests arrive.",
    "hero.availability": "Check availability",
    "hero.gallery": "View the villa",
    "label.guests": "Guests",
    "label.bedrooms": "Bedrooms",
    "label.bathrooms": "Bathrooms",
    "booking.kicker": "Reserve your stay",
    "booking.airbnb.label": "Airbnb",
    "booking.airbnb.title": "Book on Airbnb",
    "booking.airbnb.copy": "Use this button for guests who prefer Airbnb reviews, messaging, and secure checkout.",
    "booking.airbnb.button": "Open Airbnb",
    "booking.direct.label": "Direct inquiry",
    "booking.direct.title": "Request a stay directly",
    "booking.direct.copy": "Send your dates and guest details. Your stay is confirmed only after the host approves availability and price.",
    "booking.direct.button": "Send inquiry",
    "availability.eyebrow": "Availability",
    "availability.title": "Check dates, then request your stay.",
    "availability.copy": "The calendar is a guide. Send a booking request for your dates, and the host will confirm availability and the final price before your stay is confirmed.",
    "availability.minimum": "Minimum stay",
    "availability.minimum.value": "1 night",
    "availability.updated": "Calendar",
    "availability.verify": "Request these dates",
    "calendar.title": "Availability",
    "calendar.syncing": "Checking Airbnb calendar...",
    "calendar.synced": "Live Airbnb calendar synced.",
    "calendar.manual": "Calendar is using manual fallback dates.",
    "calendar.failed": "Live Airbnb sync is not available here. Publish with the API proxy, then this calendar will use Airbnb dates.",
    "calendar.updated.airbnb": "Airbnb calendar",
    "calendar.updated.synced": "Synced from Airbnb",
    "calendar.updated.manual": "Manual fallback dates",
    "status.available": "Available",
    "status.booked": "Booked",
    "status.check": "Check",
    "stay.eyebrow": "The stay",
    "stay.title": "A calm villa made for comfortable hosting.",
    "stay.copy1": "Villa Lavanda is a private mountain villa for up to 6 guests, with 2 bedrooms, 2 bathrooms, a pool, timber interiors, terrace living, and wide views across the valley.",
    "stay.copy2": "Villa Lavanda brings together privacy, outdoor living, and warm interior detail. Browse the gallery below by room and area to see the villa before you book.",
    "feature.arch.label": "Architecture",
    "feature.arch.title": "A warm timber villa framed by glass, stone, and mountain air.",
    "feature.pool.label": "Pool",
    "feature.pool.title": "Clear blue water with open views across the valley.",
    "feature.rest.label": "Rest",
    "feature.rest.title": "Bedrooms prepared with hotel-level care.",
    "gallery.eyebrow": "Gallery",
    "gallery.title": "Everything guests need to imagine the stay.",
    "gallery.exterior": "Exterior & Views",
    "gallery.pool": "Pool & Hot Tub",
    "gallery.terrace": "Terrace & Outdoor Living",
    "gallery.bedrooms": "Bedrooms",
    "gallery.living": "Living Room",
    "gallery.kitchen": "Kitchen & Dining",
    "gallery.bathrooms": "Bathrooms",
    "gallery.videos": "Videos",
    "gallery.videos.empty": "Video tour coming soon.",
    "amenities.eyebrow": "Amenities",
    "amenities.title": "Designed for the practical details guests look for first.",
    "amenity.pool.title": "Private pool",
    "amenity.pool.copy": "A calm outdoor area for full days at the villa.",
    "amenity.dining.title": "Outdoor dining",
    "amenity.dining.copy": "Comfortable evening meals with room for everyone.",
    "amenity.wifi.title": "Fast Wi-Fi",
    "amenity.wifi.copy": "Reliable connection for planning, calls, and remote work.",
    "amenity.kitchen.title": "Equipped kitchen",
    "amenity.kitchen.copy": "Cook at home with the essentials already prepared.",
    "amenity.parking.title": "Parking",
    "amenity.parking.copy": "Easy arrival and simple day trips by car.",
    "amenity.ac.title": "Air conditioning",
    "amenity.ac.copy": "Comfortable nights through the warm season.",
    "rooms.eyebrow": "Sleeping layout",
    "rooms.title": "Clear details for families, couples, and groups.",
    "room.one.label": "Bedroom 1",
    "room.one.title": "Double bedroom",
    "room.one.copy": "Comfortable double bed under the timber roof, prepared with fresh linens and towels.",
    "room.two.label": "Bedroom 2",
    "room.two.title": "Twin room",
    "room.two.copy": "Two single beds for children, friends, or separate sleepers.",
    "location.eyebrow": "Location",
    "location.title": "Map, arrival context, and nearby highlights.",
    "location.copy": "Villa Lavanda is set in the mountains, with peaceful views, fresh air, and easy access by car. The map opens directly in Google Maps for arrival planning.",
    "location.view.title": "Mountain views",
    "location.view.copy": "Quiet hillside surroundings with open views across the valley.",
    "location.dining.title": "Local dining",
    "location.dining.copy": "Restaurants, markets, and city services are reachable by car.",
    "location.nature.title": "Nature escapes",
    "location.nature.copy": "Good base for slow mornings, pool days, scenic drives, and mountain air.",
    "location.maps": "Open Google Maps",
    "reviews.eyebrow": "Guest confidence",
    "reviews.title": "What guests say about Villa Lavanda.",
    "reviews.airbnb.label": "Airbnb reviews",
    "reviews.airbnb.copy": "Read verified stays directly on the Airbnb listing: dates, photos, and real guest feedback from every booking.",
    "reviews.airbnb.button": "Open Airbnb reviews",
    "reviews.direct.label": "Direct guest review",
    "reviews.direct.title": "Stayed with us? Leave a review.",
    "reviews.name": "Name",
    "reviews.name.placeholder": "Your name",
    "reviews.rating": "Rating",
    "reviews.review": "Review",
    "reviews.review.placeholder": "Tell future guests what your stay was like.",
    "reviews.post": "Post review",
    "policies.eyebrow": "Good to know",
    "policies.title": "Clear expectations before guests book.",
    "policy.checkin.title": "Check-in",
    "policy.checkin.copy": "From 12:00 to 1:00 AM. Please confirm arrival time with the host before you arrive.",
    "policy.checkout.title": "Check-out",
    "policy.checkout.copy": "By 10:00 AM.",
    "policy.rules.title": "House rules",
    "policy.rules.copy": "Parties are allowed, but music and party noise must finish by 12:00 at night.",
    "policy.cancel.title": "Cancellation",
    "policy.cancel.copy": "Guests can cancel up to 14 days before arrival.",
    "policy.availability.title": "Availability",
    "policy.availability.copy": "Calendar dates are a guide. Confirm availability and price with the host before the stay is confirmed.",
    "contact.eyebrow": "Contact",
    "contact.title": "Request a stay at Villa Lavanda.",
    "contact.copy": "Send your preferred dates and group details on WhatsApp. The host will check availability and confirm the total price. No online payment is taken; payment is arranged at the villa.",
    "contact.call": "Call host",
    "contact.whatsapp": "WhatsApp",
    "contact.email": "Email",
    "form.name": "Your name",
    "form.arrival": "Arrival",
    "form.departure": "Departure",
    "form.guests": "Guests",
    "form.message": "Message",
    "form.message.placeholder": "Tell us what you need for your stay.",
    "form.submit": "Send booking request on WhatsApp",
    "form.note": "This is a booking request, not a confirmed reservation. WhatsApp will open with your message ready to send.",
    "form.date.order": "Departure must be after arrival.",
    "footer.copy": "Elegant private villa accommodation.",
    "lightbox.close": "Close image"
  }
};

const weekDayLabels = {
  sq: ["Hën", "Mar", "Mër", "Enj", "Pre", "Sht", "Die"],
  mk: ["Пон", "Вто", "Сре", "Чет", "Пет", "Саб", "Нед"],
  en: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
};

const monthNames = {
  sq: ["Janar", "Shkurt", "Mars", "Prill", "Maj", "Qershor", "Korrik", "Gusht", "Shtator", "Tetor", "Nëntor", "Dhjetor"],
  mk: ["Јануари", "Февруари", "Март", "Април", "Мај", "Јуни", "Јули", "Август", "Септември", "Октомври", "Ноември", "Декември"],
  en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
};

const storedLanguage = localStorage.getItem("villaLavandaLanguage");
let currentLanguage = ["sq", "mk", "en"].includes(storedLanguage) ? storedLanguage : "sq";
let calendarUpdatedKey = "calendar.updated.airbnb";
let calendarSyncMessageKey = "calendar.syncing";
let calendarSyncMessageState = "";

const t = (key) => translations[currentLanguage]?.[key] || translations.en[key] || key;

const setText = (selector, key, all = false) => {
  const elements = all ? document.querySelectorAll(selector) : [document.querySelector(selector)];
  elements.forEach((element) => {
    if (element) {
      element.textContent = t(key);
    }
  });
};

const setLabelText = (selector, key) => {
  const label = document.querySelector(selector);
  if (!label) {
    return;
  }

  const textNode = Array.from(label.childNodes).find(
    (node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim()
  );

  if (textNode) {
    textNode.textContent = `${t(key)} `;
    return;
  }

  label.prepend(document.createTextNode(`${t(key)} `));
};

const setPlaceholder = (selector, key) => {
  const element = document.querySelector(selector);
  if (element) {
    element.placeholder = t(key);
  }
};

const setAriaLabel = (selector, key) => {
  const element = document.querySelector(selector);
  if (element) {
    element.setAttribute("aria-label", t(key));
  }
};

const staticTextBindings = [
  [".skip-link", "skip"],
  [".site-nav a[href='#stay']", "nav.stay"],
  [".site-nav a[href='#availability']", "nav.availability"],
  [".site-nav a[href='#gallery']", "nav.gallery"],
  [".site-nav a[href='#amenities']", "nav.amenities"],
  [".site-nav a[href='#location']", "nav.location"],
  [".site-nav a[href='#reviews']", "nav.reviews"],
  [".site-nav .nav-cta", "nav.book"],
  [".hero .eyebrow", "hero.eyebrow"],
  [".hero-copy", "hero.copy"],
  [".hero-actions .button-primary", "hero.availability"],
  [".hero-actions .button-quiet", "hero.gallery"],
  [".hero-details div:nth-child(1) span", "label.guests"],
  [".hero-details div:nth-child(2) span", "label.bedrooms"],
  [".hero-details div:nth-child(3) span", "label.bathrooms"],
  [".booking-strip .section-kicker", "booking.kicker"],
  [".airbnb-card .booking-label", "booking.airbnb.label"],
  [".airbnb-card h2", "booking.airbnb.title"],
  [".airbnb-card p", "booking.airbnb.copy"],
  [".airbnb-card .button", "booking.airbnb.button"],
  [".direct-card .booking-label", "booking.direct.label"],
  [".direct-card h2", "booking.direct.title"],
  [".direct-card p", "booking.direct.copy"],
  [".direct-card .button", "booking.direct.button"],
  [".availability-copy .eyebrow", "availability.eyebrow"],
  ["#availability-title", "availability.title"],
  [".availability-copy > p:not(.eyebrow)", "availability.copy"],
  [".availability-meta div:nth-child(1) span", "availability.minimum"],
  ["[data-availability-min-stay]", "availability.minimum.value"],
  [".availability-meta div:nth-child(2) span", "availability.updated"],
  [".availability-actions .button", "availability.verify"],
  [".calendar-kicker", "booking.airbnb.label"],
  [".intro .eyebrow", "stay.eyebrow"],
  [".intro .section-heading h2", "stay.title"],
  [".intro-copy p:nth-child(1)", "stay.copy1"],
  [".intro-copy p:nth-child(2)", "stay.copy2"],
  [".feature-large span", "feature.arch.label"],
  [".feature-large h3", "feature.arch.title"],
  [".feature-small:nth-of-type(2) span", "feature.pool.label"],
  [".feature-small:nth-of-type(2) h3", "feature.pool.title"],
  [".feature-small:nth-of-type(3) span", "feature.rest.label"],
  [".feature-small:nth-of-type(3) h3", "feature.rest.title"],
  [".gallery-section .eyebrow", "gallery.eyebrow"],
  [".gallery-section .section-heading h2", "gallery.title"],
  [".amenities .eyebrow", "amenities.eyebrow"],
  [".amenities .section-heading h2", "amenities.title"],
  [".amenity-grid article:nth-child(1) h3", "amenity.pool.title"],
  [".amenity-grid article:nth-child(1) p", "amenity.pool.copy"],
  [".amenity-grid article:nth-child(2) h3", "amenity.dining.title"],
  [".amenity-grid article:nth-child(2) p", "amenity.dining.copy"],
  [".amenity-grid article:nth-child(3) h3", "amenity.wifi.title"],
  [".amenity-grid article:nth-child(3) p", "amenity.wifi.copy"],
  [".amenity-grid article:nth-child(4) h3", "amenity.kitchen.title"],
  [".amenity-grid article:nth-child(4) p", "amenity.kitchen.copy"],
  [".amenity-grid article:nth-child(5) h3", "amenity.parking.title"],
  [".amenity-grid article:nth-child(5) p", "amenity.parking.copy"],
  [".amenity-grid article:nth-child(6) h3", "amenity.ac.title"],
  [".amenity-grid article:nth-child(6) p", "amenity.ac.copy"],
  [".rooms .eyebrow", "rooms.eyebrow"],
  [".rooms .section-heading h2", "rooms.title"],
  [".room-grid article:nth-child(1) span", "room.one.label"],
  [".room-grid article:nth-child(1) h3", "room.one.title"],
  [".room-grid article:nth-child(1) p", "room.one.copy"],
  [".room-grid article:nth-child(2) span", "room.two.label"],
  [".room-grid article:nth-child(2) h3", "room.two.title"],
  [".room-grid article:nth-child(2) p", "room.two.copy"],
  [".location-copy .eyebrow", "location.eyebrow"],
  [".location-copy h2", "location.title"],
  [".location-copy > p:not(.eyebrow)", "location.copy"],
  [".nearby-list div:nth-child(1) strong", "location.view.title"],
  [".nearby-list div:nth-child(1) span", "location.view.copy"],
  [".nearby-list div:nth-child(2) strong", "location.dining.title"],
  [".nearby-list div:nth-child(2) span", "location.dining.copy"],
  [".nearby-list div:nth-child(3) strong", "location.nature.title"],
  [".nearby-list div:nth-child(3) span", "location.nature.copy"],
  [".map-button", "location.maps"],
  [".reviews .eyebrow", "reviews.eyebrow"],
  [".reviews .section-heading h2", "reviews.title"],
  [".review-airbnb-card .rating-label", "reviews.airbnb.label"],
  [".review-airbnb-card blockquote", "reviews.airbnb.copy"],
  [".review-airbnb-card a", "reviews.airbnb.button"],
  [".review-form-header p", "reviews.direct.label"],
  [".review-form-header h3", "reviews.direct.title"],
  [".review-form label:nth-child(1)", "reviews.name", "label"],
  [".review-form label:nth-child(2)", "reviews.rating", "label"],
  [".review-form label:nth-child(3)", "reviews.review", "label"],
  [".button-submit-review", "reviews.post"],
  [".policies .eyebrow", "policies.eyebrow"],
  [".policy-panel > div:first-child h2", "policies.title"],
  [".policy-list article:nth-child(1) h3", "policy.checkin.title"],
  [".policy-list article:nth-child(1) p", "policy.checkin.copy"],
  [".policy-list article:nth-child(2) h3", "policy.checkout.title"],
  [".policy-list article:nth-child(2) p", "policy.checkout.copy"],
  [".policy-list article:nth-child(3) h3", "policy.rules.title"],
  [".policy-list article:nth-child(3) p", "policy.rules.copy"],
  [".policy-list article:nth-child(4) h3", "policy.cancel.title"],
  [".policy-list article:nth-child(4) p", "policy.cancel.copy"],
  [".policy-list article:nth-child(5) h3", "policy.availability.title"],
  [".policy-list article:nth-child(5) p", "policy.availability.copy"],
  [".inquiry-copy .eyebrow", "contact.eyebrow"],
  [".inquiry-copy h2", "contact.title"],
  [".inquiry-copy > p:not(.eyebrow)", "contact.copy"],
  [".contact-lines a:nth-child(1)", "contact.call"],
  [".contact-lines a:nth-child(2)", "contact.whatsapp"],
  [".contact-lines a:nth-child(3)", "contact.email"],
  [".inquiry-form label:nth-child(1)", "form.name", "label"],
  [".inquiry-form label:nth-child(2)", "form.arrival", "label"],
  [".inquiry-form label:nth-child(3)", "form.departure", "label"],
  [".inquiry-form label:nth-child(4)", "form.guests", "label"],
  [".inquiry-form label:nth-child(5)", "form.message", "label"],
  [".inquiry-form button", "form.submit"],
  [".inquiry-form-note", "form.note"],
  [".site-footer p", "footer.copy"]
];

const applyStaticTranslations = () => {
  document.documentElement.lang = currentLanguage;
  staticTextBindings.forEach(([selector, key, mode]) => {
    if (mode === "label") {
      setLabelText(selector, key);
      return;
    }

    setText(selector, key);
  });
  setText("[data-calendar-legend-available]", "status.available");
  setText("[data-calendar-legend-booked]", "status.booked");
  setText("[data-calendar-title]", "calendar.title");
  setText("[data-availability-updated]", calendarUpdatedKey);
  setPlaceholder(".review-form input[name='name']", "reviews.name.placeholder");
  setPlaceholder(".review-form textarea[name='review']", "reviews.review.placeholder");
  setPlaceholder(".inquiry-form textarea[name='message']", "form.message.placeholder");
  setAriaLabel("[data-lightbox-close]", "lightbox.close");

  document.querySelectorAll(".calendar-weekdays span").forEach((element, index) => {
    element.textContent = weekDayLabels[currentLanguage][index];
  });

  document.querySelectorAll("[data-language]").forEach((button) => {
    const isActive = button.dataset.language === currentLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  const ratingOptions = document.querySelectorAll(".review-form select option");
  ratingOptions.forEach((option) => {
    const value = option.value;
    option.textContent = currentLanguage === "en" ? `${value} stars` : currentLanguage === "mk" ? `${value} ѕвезди` : `${value} yje`;
  });

  setCalendarSyncStatus(calendarSyncMessageKey, calendarSyncMessageState);
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
if (map && villaConfig.mapLat && villaConfig.mapLng) {
  map.src = `https://www.google.com/maps?q=${villaConfig.mapLat},${villaConfig.mapLng}&z=${villaConfig.mapZoom || 15}&output=embed`;
}

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

const getAirbnbStatus = () => {
  return "booked";
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
      const status = getAirbnbStatus();

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

const setCalendarUpdatedText = (key) => {
  calendarUpdatedKey = key;
  setText("[data-availability-updated]", calendarUpdatedKey);
};

function setCalendarSyncStatus(key, state = "") {
  calendarSyncMessageKey = key;
  calendarSyncMessageState = state;

  if (!calendarSyncStatus) {
    return;
  }

  calendarSyncStatus.textContent = t(key);
  calendarSyncStatus.classList.toggle("is-synced", state === "synced");
  calendarSyncStatus.classList.toggle("is-hidden", state === "hidden");
}

const syncAirbnbCalendar = async () => {
  if (!villaConfig.airbnbCalendarSync || !villaConfig.airbnbCalendarIcsUrl) {
    setCalendarSyncStatus("calendar.manual", "hidden");
    return;
  }

  const feedUrls = getCalendarFeedUrls();
  setCalendarSyncStatus("calendar.syncing");

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
      setCalendarUpdatedText("calendar.updated.synced");
      setCalendarSyncStatus("calendar.synced", "synced");
      renderCalendar();
      return;
    } catch (error) {
      console.warn("Airbnb calendar sync attempt failed.", error);
    }
  }

  console.warn("Airbnb calendar sync failed. Using manual fallback dates.");
  calendarSyncState = "failed";
  setCalendarUpdatedText("calendar.updated.manual");
  setCalendarSyncStatus("calendar.failed");
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

  calendarTitle.textContent = `${monthNames[currentLanguage][month]} ${year}`;

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
    const status = isPast ? "booked" : listedStatus || (needsLiveConfirmation ? "check" : "available");
    const dayCell = document.createElement("div");
    const time = document.createElement("time");
    const label = document.createElement("span");
    const statusLabel = status === "available" ? t("status.available") : status === "check" ? t("status.check") : t("status.booked");

    dayCell.className = `calendar-day is-${status}${isPast ? " is-past" : ""}${
      dateKey === todayValue ? " is-today" : ""
    }`;
    dayCell.setAttribute("role", "gridcell");
    dayCell.setAttribute("aria-label", `${monthNames[currentLanguage][month]} ${day}, ${year}: ${statusLabel}`);

    time.dateTime = dateKey;
    time.textContent = String(day);
    label.textContent = statusLabel;

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
    heading.textContent = t(category.titleKey);

    const grid = document.createElement("div");
    grid.className = "gallery-grid";

    if (!category.items?.length) {
      const empty = document.createElement("p");
      empty.className = "gallery-empty";
      empty.textContent = t(category.emptyKey) || "Photos will be added soon.";
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

document.querySelectorAll("[data-language]").forEach((button) => {
  button.addEventListener("click", () => {
    currentLanguage = button.dataset.language;
    localStorage.setItem("villaLavandaLanguage", currentLanguage);
    applyStaticTranslations();
    renderCalendar();
    renderGallery();
  });
});

const inquiryForm = document.querySelector("[data-inquiry-form]");
const arrivalInput = inquiryForm?.querySelector("[name='arrival']");
const departureInput = inquiryForm?.querySelector("[name='departure']");

if (arrivalInput && departureInput) {
  const updateDepartureConstraint = () => {
    departureInput.min = arrivalInput.value || todayValue;
    if (departureInput.value && departureInput.value < departureInput.min) {
      departureInput.value = "";
    }
    departureInput.setCustomValidity(
      departureInput.value && departureInput.value <= arrivalInput.value ? t("form.date.order") : ""
    );
  };

  arrivalInput.addEventListener("change", updateDepartureConstraint);
  departureInput.addEventListener("change", updateDepartureConstraint);
}

inquiryForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(inquiryForm);
  const name = String(formData.get("name") || "").trim();
  const arrival = formData.get("arrival");
  const departure = formData.get("departure");
  const guests = formData.get("guests");
  const message = formData.get("message") || "";

  if (arrivalInput && departureInput) {
    departureInput.setCustomValidity(
      departure && departure <= arrival ? t("form.date.order") : ""
    );
  }
  if (!inquiryForm.reportValidity()) {
    return;
  }

  const lines = [
    "Hello Villa Lavanda",
    "Booking request (not confirmed until approved)",
    "",
    `${t("form.name")}: ${name}`,
    `${t("form.arrival")}: ${arrival}`,
    `${t("form.departure")}: ${departure}`,
    `${t("form.guests")}: ${guests}`,
    "",
    "Please confirm availability and the final price."
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

const reviewForm = document.querySelector("[data-review-form]");
const submittedReviews = document.querySelector("[data-submitted-reviews]");
const savedReviewsKey = "villaLavandaDirectReviews";

const starsText = (count) => {
  const n = Math.max(1, Math.min(5, Number(count)));
  return "*".repeat(n);
};

const getSavedReviews = () => {
  try {
    return JSON.parse(localStorage.getItem(savedReviewsKey) || "[]");
  } catch {
    return [];
  }
};

const saveReviews = (reviews) => {
  localStorage.setItem(savedReviewsKey, JSON.stringify(reviews.slice(0, 12)));
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
  starsEl.setAttribute("aria-label", `${rating} / 5`);
  starsEl.textContent = starsText(rating);

  header.append(nameEl, starsEl);

  const text = document.createElement("p");
  text.className = "submitted-review-text";
  text.textContent = review;

  card.append(header, text);
  return card;
};

const renderSavedReviews = () => {
  if (!submittedReviews) {
    return;
  }

  submittedReviews.innerHTML = "";
  getSavedReviews().forEach((review) => {
    submittedReviews.append(createReviewCard(review));
  });
};

reviewForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(reviewForm);
  const name = String(formData.get("name") || "").trim();
  const rating = formData.get("rating");
  const review = String(formData.get("review") || "").trim();

  if (!name || !review) {
    return;
  }

  const reviews = [{ name, rating, review }, ...getSavedReviews()];
  saveReviews(reviews);
  renderSavedReviews();
  reviewForm.reset();
  submittedReviews?.firstElementChild?.scrollIntoView({ behavior: "smooth", block: "nearest" });
});

const lightbox = document.querySelector("[data-lightbox]");
const lightboxImage = document.querySelector("[data-lightbox-image]");
const lightboxClose = document.querySelector("[data-lightbox-close]");

const openLightbox = (image) => {
  if (!lightbox || !lightboxImage) {
    return;
  }

  lightboxImage.src = image.currentSrc || image.src;
  lightboxImage.alt = image.alt || "Villa Lavanda";
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
};

const closeLightbox = () => {
  if (!lightbox || !lightboxImage) {
    return;
  }

  lightbox.hidden = true;
  lightboxImage.src = "";
  document.body.style.overflow = "";
};

document.addEventListener("click", (event) => {
  const image = event.target.closest("img");
  if (!image || image.closest(".brand-mark") || image.closest("[data-lightbox]")) {
    return;
  }

  openLightbox(image);
});

lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

lightboxClose?.addEventListener("click", closeLightbox);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox && !lightbox.hidden) {
    closeLightbox();
  }
});

applyStaticTranslations();
renderCalendar();
renderGallery();
renderSavedReviews();
syncAirbnbCalendar();
