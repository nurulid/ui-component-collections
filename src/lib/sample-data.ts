// 1. Define the shape of your data (Typescript Interfaces)
export interface GenerationInput {
  productName: string;
  category: string;
  features: string;
  tone: string;
}

export interface GenerationResult {
  seoTitle: string;
  description: string;
  tags: string[];
}

export interface HistoryItem {
  id: string;
  timestamp: number;
  input: GenerationInput;
  result: GenerationResult;
}

// 2. The Data Structure Type
export interface AppData {
  'descript-ai': HistoryItem[];
}

// 3. Export the data constant
export const SAMPLE_DATA: AppData = {
  'descript-ai': [
    {
      id: '1766285338193',
      timestamp: 1766285338193,
      input: {
        productName: 'kacang goreng pedas',
        category: 'Food & Beverage',
        features: 'enak, pedas, terjangkau',
        tone: 'Professional & Authoritative',
      },
      result: {
        seoTitle: 'Kacang Goreng Pedas - Camilan Lezat dan Terjangkau',
        description:
          'Nikmati sensasi pedas dan kelezatan kacang goreng pedas yang siap memanjakan lidah Anda. Terbuat dari kacang pilihan berkualitas tinggi, camilan ini menawarkan rasa yang menggugah selera dan sempurna untuk menemani waktu santai Anda. Dengan harga yang terjangkau, Anda bisa mendapatkan cemilan yang tidak hanya enak, tetapi juga memuaskan. Cocok untuk dinikmati sendiri atau dibagikan kepada teman dan keluarga. Segera dapatkan kacang goreng pedas ini dan rasakan kenikmatannya!',
        tags: [
          'kacang goreng',
          'camilan pedas',
          'snack',
          'makanan enak',
          'terjangkau',
        ],
      },
    },
    {
      id: '1766455762994',
      timestamp: 1766455762994,
      input: {
        productName: 'jam tangan sekecil jari',
        category: 'Technology & Gadgets',
        features: 'lucu, bagus',
        tone: 'Casual & Friendly',
      },
      result: {
        seoTitle: 'Jam Tangan Sekecil Jari - Lucu dan Bagus',
        description:
          'Temukan jam tangan sekecil jari yang lucu dan menarik ini! Didesain khusus untuk Anda yang menyukai teknologi dan gadget yang unik. Dengan ukuran yang mini, jam tangan ini tidak hanya membuat Anda tampil stylish, tetapi juga sangat nyaman dipakai. Cocok untuk semua kesempatan, baik untuk santai maupun acara formal. Dengan berbagai pilihan warna ceria, jam tangan ini akan menjadi aksesori favorit Anda! Jangan lewatkan kesempatan untuk memiliki gadget yang tidak hanya fungsional tetapi juga penuh gaya. Segera dapatkan sebelum kehabisan!',
        tags: ['jam tangan', 'gadget', 'teknologi', 'aksesori', 'unik'],
      },
    },
  ],
};
