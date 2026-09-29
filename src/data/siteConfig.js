export const SITE_CONFIG = {
  brandName: "Mehmet ÇELEBİ",
  subTitle: "Sivas Balı",
  fullName: "Mehmet ÇELEBİ Sivas Balı",
  phone: "0544 119 40 66",
  phoneRaw: "905441194066",
  email: "bilgi@mehmetcelebisivasbali.com",
  address: "Sivas Yaylaları & Merkez, Sivas / TÜRKİYE",
  productionLocation: "Zara ve İmranlı Yüksek Rakımlı Yaylaları (1800m - 2200m)",
  experienceYears: 35,
  createWhatsAppLink: (productName) => {
    const message = productName
      ? `Merhaba Mehmet Bey, web sitenizden "${productName}" hakkında güncel fiyat ve sipariş bilgisi almak istiyorum.`
      : "Merhaba Mehmet Bey, Sivas balınız hakkında fiyat, çeşitler ve sipariş bilgisi almak istiyorum.";
    return `https://wa.me/905441194066?text=${encodeURIComponent(message)}`;
  },
  socialMedia: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
  }
};
