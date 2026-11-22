/**
 * Semua teks landing page, dua bahasa (SPEC §2.4). Nama diri fiktif (gedung, template)
 * tidak diterjemahkan kecuali punya nama resmi per bahasa di app (Balai Kota / City Hall).
 * Isi harus cocok dengan status fitur di SPEC §6: jangan menjanjikan yang belum ada.
 */
export type Lang = 'id' | 'en'

export type Floor = { code: string; name: string; desc: string }
export type Stop = { title: string; desc: string }
export type Building = { name: string; category: string; tagline: string }

const id = {
  meta: {
    title: 'Hubbit City · kota komunitas',
    description:
      'Kota 3D fiktif tempat tiap gedung adalah komunitas bertopik. Naik lift ke lantai komunitas, ikut acara live, dan sewa lantai untuk komunitasmu.',
  },
  nav: {
    label: 'Navigasi bagian',
    journey: 'Perjalanan',
    buildings: 'Gedung',
    roles: 'Warga & host',
    phases: 'Fase',
    openMap: 'Buka peta kota',
    switchLang: 'English',
    switchLangLabel: 'Baca dalam bahasa Inggris',
  },
  hero: {
    title: 'Kota kecil tempat tiap gedung adalah komunitas.',
    lead: 'Hubbit City adalah kota 3D fiktif. Pilih gedung bertopik, naik lift ke lantai komunitas, lalu ikut kelas, nobar, atau ngobrol dengan warga lain. Avatarmu ikut berjalan di dalamnya.',
    primary: 'Buka peta kota',
    guest: 'Tamu boleh melihat-lihat tanpa akun.',
  },
  lift: {
    title: 'Coba naik lift',
    hint: 'Pilih lantai untuk melihat isi template ruangannya.',
    floorsLabel: 'Tombol lantai',
    now: 'Sekarang di',
    floors: [
      { code: '5', name: 'Arena', desc: 'Layar besar dan meja gaming untuk nobar dan latihan tim.' },
      { code: '4', name: 'Studio', desc: 'Easel, meja kerja kreatif, galeri karya, dan loker.' },
      { code: '3', name: 'Lounge', desc: 'Banyak sofa untuk ngobrol santai, coffee bar, dan panggung kecil di sudut.' },
      { code: '2', name: 'Kantor', desc: 'Coworking: ruang rapat kaca, kubikel bersekat, pantry, dan loker.' },
      { code: '1', name: 'Kelas', desc: 'Ruang presentasi berdinding kaca, pantry, meja kerja, dan lounge.' },
      { code: 'LB', name: 'Lobby', desc: 'Resepsionis, papan informasi, dan pintu lift. Semua warga masuk lewat sini.' },
    ] satisfies Floor[],
    note: 'Lima template ini tersedia untuk tiap lantai yang disewa. Tata letaknya bisa diubah host.',
  },
  journey: {
    floor: 'LT 1',
    title: 'Dari peta kota sampai kursi di lantai komunitas',
    stops: [
      {
        title: 'Peta kota',
        desc: 'Kota fiktif 3D dengan siang dan malam. Pilih gedung untuk melihat komunitasnya, acara yang sedang live, dan lantai yang masih kosong.',
      },
      {
        title: 'Lobby',
        desc: 'Jalan dengan WASD atau ketuk tujuan di layar. Sapa resepsionis, baca papan, lalu panggil lift.',
      },
      {
        title: 'Lift',
        desc: 'Tiap tombol lantai menunjukkan komunitas penghuninya, dan tanda LIVE bila acaranya sedang berjalan.',
      },
      {
        title: 'Lantai komunitas',
        desc: 'Duduk di kursi, ikut presentasi di panggung, dan ngobrol lewat chat ruangan dengan warga yang ada di dekatmu.',
      },
    ] satisfies Stop[],
  },
  buildings: {
    floor: 'LT 2',
    title: 'Direktori gedung',
    lead: 'Delapan gedung komunitas berdiri di pusat kota. Lantai kosongnya bisa disewa komunitas baru, begitu juga ratusan gedung dan rumah di distrik lain.',
    boardLabel: 'Papan direktori gedung unggulan',
    list: [
      { name: 'Stock Tower', category: 'Finansial', tagline: 'Belajar saham dari nol sampai konsisten' },
      { name: 'Crypto Tower', category: 'Finansial', tagline: 'Obrolan aset digital yang sehat dan edukatif' },
      { name: 'Design Center', category: 'Kreatif', tagline: 'Rumah untuk desainer, ilustrator, dan pembuat UI' },
      { name: 'Creator Lodge', category: 'Kreatif', tagline: 'Konten, foto, video, dan cerita' },
      { name: 'Code Plaza', category: 'Teknologi', tagline: 'Ngoding bareng, dari web sampai AI' },
      { name: 'Data Tower', category: 'Teknologi', tagline: 'Statistik, dashboard, dan rasa penasaran' },
      { name: 'Game Arena', category: 'Game', tagline: 'Sesi main, turnamen, dan nobar' },
      { name: 'Language House', category: 'Bahasa', tagline: 'Latihan bahasa asing tanpa malu' },
    ] satisfies Building[],
    hall: {
      name: 'Balai Kota',
      desc: 'Bukan komunitas, tapi kantor layanan warga. Kirim aspirasi ke tim kota dan pantau tanggapannya di Papan Publik.',
    },
  },
  roles: {
    floor: 'LT 3',
    citizen: {
      title: 'Datang sebagai warga',
      items: [
        'Rancang karakter: 7 ras, 8 gaya rambut, pakaian, dan aksesori yang terbuka seiring naik level.',
        'Ikuti komunitas dan dapat notifikasi saat acaranya mulai live.',
        'Tulis di forum gedung dan feed kota, atau kirim aspirasi lewat Balai Kota.',
        'Kumpulkan XP, lencana, dan quest selama menjelajah.',
      ],
    },
    host: {
      title: 'Buka lantai sebagai host',
      items: [
        'Sewa lantai di bangunan mana pun, dari rumah satu lantai sampai gedung lima belas lantai.',
        'Pilih template Kelas, Lounge, Studio, Arena, atau Kantor, lalu atur tata letaknya di editor.',
        'Buat acara, termasuk acara bertiket. Jumlah acara aktif mengikuti jumlah ruangan di lantaimu.',
        'Setujui siapa yang boleh masuk dan atur jumlah kursi per ruangan dari Dashboard Host.',
      ],
      review: 'Setiap sewa lantai ditinjau dulu sebelum aktif.',
    },
  },
  phases: {
    floor: 'LT 4',
    title: 'Fase pembangunan',
    lead: 'Hubbit City dibangun bertahap, seperti gedung yang naik lantai demi lantai. Saat ini kota masih di fase pertama.',
    current: 'Fase saat ini',
    planned: 'Direncanakan',
    now: {
      label: 'Fase 1',
      name: 'Kenalan dulu, lewat teks',
      summary: 'Untuk kamu yang datang sendiri dan ingin bersosialisasi. Obrolan masih berupa teks dan berlangsung realtime dengan warga lain.',
      readyTitle: 'Sudah bisa',
      ready: [
        'Chat teks realtime di lingkar obrolan taman, ruangan gedung, dan lobby.',
        'Warga lain terlihat berjalan, duduk, dan memberi emote di ruang yang sama.',
        'Forum gedung, feed kota, acara, dan sewa lantai sudah bisa dipakai.',
        'Masuk dengan email atau akun Google. Tamu bisa melihat-lihat tanpa akun.',
        'Dua bahasa, Indonesia dan Inggris, dan nyaman dari layar HP.',
      ],
    },
    next: [
      {
        label: 'Fase 2',
        name: 'Ngobrol pakai suara',
        summary: 'Voice chat untuk lingkar obrolan dan ruangan.',
        items: [
          'Duduk di lingkar atau masuk ruangan, lalu pilih ikut obrolan suara.',
          'Kamu yang memilih kapan ikut bergabung ke obrolan suara.',
          'Chat teks tetap ada untuk yang tidak ingin bersuara.',
        ],
      },
      {
        label: 'Fase 3',
        name: 'Konferensi di gedung tinggi',
        summary: 'Video conference untuk perusahaan dan komunitas yang menyewa lantai gedung tinggi.',
        items: [
          'Pakai lantai sebagai ruang rapat, pusat koordinasi, atau basecamp komunitas.',
          'Penyewa bisa mengadakan conference gratis atau berbayar.',
        ],
      },
    ],
    note: 'Fase 2 dan 3 masih rencana. Belum ada tanggal rilis, dan rinciannya bisa berubah.',
  },
  roof: {
    floor: 'ATAP',
    title: 'Lampu kota sudah menyala.',
    lead: 'Masuk sebagai tamu untuk melihat-lihat. Saat mau menulis, ikut acara, atau menyewa lantai, masuk dengan email atau Google.',
    primary: 'Buka peta kota',
  },
  footer: {
    fiction: 'Hubbit City adalah kota fiktif. Semua nama gedung, komunitas, dan tokohnya rekaan.',
  },
}

export type Dict = typeof id

const en: Dict = {
  meta: {
    title: 'Hubbit City · a city of communities',
    description:
      'A fictional 3D city where every building is a themed community. Ride the lift to community floors, join live events, and rent a floor for your own community.',
  },
  nav: {
    label: 'Section navigation',
    journey: 'Journey',
    buildings: 'Buildings',
    roles: 'Citizens & hosts',
    phases: 'Phases',
    openMap: 'Open the city map',
    switchLang: 'Bahasa Indonesia',
    switchLangLabel: 'Read in Indonesian',
  },
  hero: {
    title: 'A small city where every building is a community.',
    lead: 'Hubbit City is a fictional 3D city. Pick a themed building, ride the lift to a community floor, then join a class, a watch party, or just chat with other citizens. Your avatar walks around inside.',
    primary: 'Open the city map',
    guest: 'Guests can look around without an account.',
  },
  lift: {
    title: 'Take the lift',
    hint: 'Pick a floor to see what its room template holds.',
    floorsLabel: 'Floor buttons',
    now: 'Now at',
    floors: [
      { code: '5', name: 'Arena', desc: 'A big screen plus gaming desks for watch parties and team practice.' },
      { code: '4', name: 'Studio', desc: 'Easels, creative work desks, a gallery of works, and lockers.' },
      { code: '3', name: 'Lounge', desc: 'Plenty of sofas for relaxed chats, a coffee bar, and a small corner stage.' },
      { code: '2', name: 'Office', desc: 'Coworking: glass meeting room, partitioned cubicles, pantry, and lockers.' },
      { code: '1', name: 'Classroom', desc: 'A glass-walled presentation room, pantry, work desks, and a lounge.' },
      { code: 'LB', name: 'Lobby', desc: 'Reception, an info board, and the lift doors. Every citizen comes in this way.' },
    ],
    note: 'Every rented floor can use one of these five templates. Hosts can rearrange the layout.',
  },
  journey: {
    floor: 'FL 1',
    title: 'From the city map to a seat on a community floor',
    stops: [
      {
        title: 'City map',
        desc: 'A fictional 3D city with day and night. Pick a building to see its communities, live events, and floors still up for rent.',
      },
      {
        title: 'Lobby',
        desc: 'Walk with WASD or tap where you want to go. Greet the receptionist, read the board, then call the lift.',
      },
      {
        title: 'Lift',
        desc: 'Each floor button shows the community living there, plus a LIVE mark when its event is running.',
      },
      {
        title: 'Community floor',
        desc: 'Sit on a chair, follow a presentation on stage, and talk in the room chat with citizens nearby.',
      },
    ],
  },
  buildings: {
    floor: 'FL 2',
    title: 'Building directory',
    lead: 'Eight community buildings stand downtown. Their empty floors are open to new communities, and so are hundreds of buildings and houses in other districts.',
    boardLabel: 'Featured building directory board',
    list: [
      { name: 'Stock Tower', category: 'Finance', tagline: 'Learn stocks from zero to consistent gains' },
      { name: 'Crypto Tower', category: 'Finance', tagline: 'Healthy, educational digital-asset talk' },
      { name: 'Design Center', category: 'Creative', tagline: 'Home for designers, illustrators, and UI makers' },
      { name: 'Creator Lodge', category: 'Creative', tagline: 'Content, photos, video, and stories' },
      { name: 'Code Plaza', category: 'Technology', tagline: 'Code together, from web to AI' },
      { name: 'Data Tower', category: 'Technology', tagline: 'Stats, dashboards, and curiosity' },
      { name: 'Game Arena', category: 'Games', tagline: 'Play sessions, tournaments, and watch parties' },
      { name: 'Language House', category: 'Language', tagline: 'Practice foreign languages without the shyness' },
    ],
    hall: {
      name: 'City Hall',
      desc: 'Not a community but the citizen service office. Send feedback to the city team and follow the replies on the Public Board.',
    },
  },
  roles: {
    floor: 'FL 3',
    citizen: {
      title: 'Come as a citizen',
      items: [
        'Design your character: 7 races, 8 hairstyles, outfits, and accessories that unlock as you level up.',
        'Follow communities and get notified when their events go live.',
        'Post in building forums and the city feed, or send feedback through City Hall.',
        'Collect XP, badges, and quests as you explore.',
      ],
    },
    host: {
      title: 'Open a floor as a host',
      items: [
        'Rent a floor in any building, from a one-storey house to a fifteen-storey tower.',
        'Pick the Classroom, Lounge, Studio, Arena, or Office template, then arrange it in the editor.',
        'Create events, ticketed ones included. Your active event limit matches the number of rooms on your floor.',
        'Approve who may enter and set the seats per room from the Host Dashboard.',
      ],
      review: 'Every floor rental is reviewed before it goes live.',
    },
  },
  phases: {
    floor: 'FL 4',
    title: 'Build phases',
    lead: 'Hubbit City is built in stages, like a tower going up floor by floor. The city is still in its first phase.',
    current: 'Current phase',
    planned: 'Planned',
    now: {
      label: 'Phase 1',
      name: 'Meet people, in text',
      summary: 'For people who come alone and want to socialise. Conversations are text only and happen in real time with other citizens.',
      readyTitle: 'Works today',
      ready: [
        'Real-time text chat in park conversation circles, building rooms, and lobbies.',
        'Other citizens can be seen walking, sitting, and sending emotes in the same space.',
        'Building forums, the city feed, events, and floor rentals are usable.',
        'Sign in with email or a Google account. Guests can look around without an account.',
        'Two languages, Indonesian and English, and comfortable on a phone screen.',
      ],
    },
    next: [
      {
        label: 'Phase 2',
        name: 'Talk out loud',
        summary: 'Voice chat for conversation circles and rooms.',
        items: [
          'Sit in a circle or enter a room, then choose to join the voice conversation.',
          'You decide when to join a voice conversation.',
          'Text chat stays for anyone who would rather not speak.',
        ],
      },
      {
        label: 'Phase 3',
        name: 'Conferences in the towers',
        summary: 'Video conferencing for companies and communities that rent floors in high-rise buildings.',
        items: [
          'Use a floor as a meeting room, a coordination hub, or a community basecamp.',
          'Tenants can run free or paid conferences.',
        ],
      },
    ],
    note: 'Phases 2 and 3 are still plans. There is no release date yet, and the details may change.',
  },
  roof: {
    floor: 'ROOF',
    title: 'The city lights are on.',
    lead: 'Come in as a guest to look around. When you want to post, join an event, or rent a floor, sign in with email or Google.',
    primary: 'Open the city map',
  },
  footer: {
    fiction: 'Hubbit City is a fictional city. Every building, community, and character name is made up.',
  },
}

export const dict: Record<Lang, Dict> = { id, en }
