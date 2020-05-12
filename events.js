const HUNDRED = 100;
const THOUSAND = 1000;
const MILLION = THOUSAND * THOUSAND;
const BILLION = THOUSAND * MILLION;

let timeline_events = [
  { age: 0, title: "Now" },
  { age: 50 * THOUSAND, title: "Behaviorally Modern Humans", img: "oase.jpg" },
  { age: 75 * THOUSAND, title: "Toba Catastrophe" },
  { age: 150 * THOUSAND, title: "Mitochondrial Eve" },
  { age: 400 * THOUSAND, title: "Anatomically Modern Humans" },
  { age: 2.5 * MILLION, title: "Humans", img: "homo-habilis.jpg" },
  { age: 3 * MILLION, title: "Bipeds" },
  { age: 28 * MILLION, title: "Apes", img: "proconsul.jpg" },
  { age: 66 * MILLION, title: "Cretaceous – Paleogene Extinction Event" },
  { age: 75 * MILLION, title: "Primates", img: "carpolestes.png" },
  { age: 125 * MILLION, title: "Eutheria", img: "juramaia.jpg" },
  { age: 150 * MILLION, title: "Flowers" },
  { age: 160 * MILLION, title: "Theria" },
  { age: 175 * MILLION, title: "Rifting of Pangaea" },
  { age: 200 * MILLION, title: "Triassic - Jurassic Extinction Event" },
  { age: 220 * MILLION, title: "Mammals", img: "repenomamus.jpg" },
  { age: 240 * MILLION, title: "Dinosaurs" },
  { age: 300 * MILLION, title: "Reptiles", img: "hylonomus.jpg" },
  { age: 335 * MILLION, title: "Pangaea Forms" },
  { age: 395 * MILLION, title: "Tetrapodia", img: "panderichthys.jpg" },
  { age: 400 * MILLION, title: "Trees" },
  { age: 420 * MILLION, title: "Sharks" },
  { age: 505 * MILLION, title: "Vertebrates", img: "agnata.png" },
  { age: 540 * MILLION, title: "Cambrian Explosion" },
  { age: 590 * MILLION, title: "Animals" },
  { age: 850 * MILLION, title: "Land Plants" },
  { age: 1.2 * BILLION, title: "Sexual Reproduction" },
  { age: 2.1 * BILLION, title: "Eukaryotes and Endosymbiosis" },
  { age: 2.5 * BILLION, title: "Great Oxidation Event" },
  { age: 3.5 * BILLION, title: "Photosynthesis & Early Oxygen" },
  { age: 3.9 * BILLION, title: "Prokaryotes" },
  { age: 4.1 * BILLION, title: "Life" },
];
