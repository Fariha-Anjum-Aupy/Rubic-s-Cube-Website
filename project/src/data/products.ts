import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: 'speedcube-pro',
    title: "SpeedCube Pro X1",
    price: 29.99,
    imageUrl: "https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?auto=format&fit=crop&w=600",
    shortDescription: "Competition-grade speed cube with magnetic positioning",
    description: "Experience lightning-fast solving with the SpeedCube Pro X1, featuring our innovative magnetic positioning system and ultra-smooth corner cutting. This competition-legal speed cube is perfectly tensioned out of the box and requires no breaking in. The dual adjustment system allows you to fine-tune both tensions and magnets to match your solving style. With 45-degree corner cutting and anti-pop technology, this cube is ready for your next world record.",
    specs: {
      size: "56mm",
      weight: "75g",
      mechanism: "GES-Pro Dual Adjustment",
      difficulty: "Advanced",
      cornerCutting: "45 degrees",
      magnetized: true,
      wcaApproved: true
    },
    features: [
      "Magnetic positioning system",
      "Dual adjustment system",
      "Anti-pop structure",
      "Premium frosted surface",
      "Competition-legal design"
    ],
    recommendedFor: [
      "Competition speedcubers",
      "Advanced solvers",
      "Sub-20 second solvers"
    ]
  },
  {
    id: 'beginner-cube',
    title: "CubeMaster Starter",
    price: 14.99,
    imageUrl: "https://images.unsplash.com/photo-1577401239170-897942555fb3?auto=format&fit=crop&w=600",
    shortDescription: "Perfect first cube for beginners",
    description: "Start your cubing journey with the CubeMaster Starter, designed specifically for newcomers to the wonderful world of puzzle solving. This cube features a smooth, stable turning experience that's forgiving enough for beginners while maintaining enough speed for intermediate solving. The stickerless design ensures durability, while the lightweight construction reduces solving fatigue. An excellent choice for mastering the basics and developing proper solving techniques.",
    specs: {
      size: "56mm",
      weight: "82g",
      mechanism: "Standard",
      difficulty: "Beginner",
      cornerCutting: "30 degrees",
      magnetized: false
    },
    features: [
      "Smooth turning mechanism",
      "Durable stickerless design",
      "Tension adjustable",
      "Anti-stick surface coating",
      "Beginner-friendly stability"
    ],
    recommendedFor: [
      "First-time cubers",
      "Casual solvers",
      "Puzzle enthusiasts"
    ]
  },
  {
    id: 'master-cube',
    title: "MasterCube 4x4 Pro",
    price: 34.99,
    imageUrl: "https://images.unsplash.com/photo-1585155967849-91c736589c84?auto=format&fit=crop&w=600",
    shortDescription: "Professional 4x4 cube with enhanced stability",
    description: "Take your cubing skills to the next level with the MasterCube 4x4 Pro. This premium puzzle features our advanced core mechanism for exceptional stability and smooth turning, even during intense speed solving sessions. The enhanced inner track design prevents lockups, while the magnetic positioning system provides consistent, satisfying feedback. Whether you're practicing for competition or pushing your personal limits, this cube delivers competition-grade performance.",
    specs: {
      size: "62mm",
      weight: "122g",
      mechanism: "Advanced Core",
      difficulty: "Expert",
      cornerCutting: "40 degrees",
      magnetized: true,
      wcaApproved: true
    },
    features: [
      "Advanced core mechanism",
      "Enhanced inner tracks",
      "Magnetic positioning",
      "Anti-lockup design",
      "Competition-grade performance"
    ],
    recommendedFor: [
      "4x4 specialists",
      "Competition solvers",
      "Speed solving enthusiasts"
    ]
  }
];