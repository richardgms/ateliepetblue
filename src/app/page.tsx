'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Heart, 
  Scissors, 
  Stethoscope, 
  ShoppingBag, 
  MapPin, 
  Clock, 
  Phone, 
  ExternalLink,
  CheckCircle,
  ChevronRight,
  Sparkles,
  Bone,
  Syringe
} from "lucide-react";

const businessName = "Ateliê Pet Blue";
const businessPhone = "(83) 98677-6200";
const businessPhoneHref = "tel:+5583986776200";
const whatsappLink = "https://wa.me/5583986776200?text=Olá!%20Gostaria%20de%20agendar%20um%20horário%20para%20meu%20pet.";
const mapsLink = "https://www.google.com/maps/search/?api=1&query=Rua+Venâncio+Correia,+117,+Santa+Rita,+PB";
const addressLabel = "Rua Venâncio Correia, 117, Santa Rita, Paraíba";
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "PetStore",
  name: businessName,
  description:
    "Banho e tosa, veterinário, acessórios, medicamentos e rações em Santa Rita, PB.",
  telephone: businessPhone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Venâncio Correia, 117",
    addressLocality: "Santa Rita",
    addressRegion: "PB",
    addressCountry: "BR",
  },
  areaServed: "Santa Rita, PB",
  openingHours: [
    "Mo-Fr 08:00-17:00",
    "Sa 08:00-15:00",
  ],
  sameAs: [
    "https://instagram.com/ateliepetblue",
  ],
};

const services = [
  { id: 1, name: "ESTÉTICA", icon: Scissors, desc: "Banho e tosa com amor e cuidado." },
  { id: 2, name: "VETERINÁRIO", icon: Stethoscope, desc: "Consultas especializadas para seu pet." },
  { id: 3, name: "ACESSÓRIOS", icon: ShoppingBag, desc: "O melhor estilo para seu melhor amigo." },
  { id: 4, name: "MEDICAMENTOS", icon: Syringe, desc: "Farmácia veterinária completa." },
  { id: 5, name: "RAÇÕES", icon: Bone, desc: "Nutrição de alta qualidade." },
];

const features = [
  { title: "Amor sem Limites", desc: "Tratamos cada pet como se fosse nosso.", icon: Heart },
  { title: "Profissionais", desc: "Equipe especializada e apaixonada.", icon: CheckCircle },
  { title: "Estrutura", desc: "Ambiente seguro, limpo e divertido.", icon: Sparkles },
];

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Floating Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-pet-ocean rounded-full flex items-center justify-center text-white font-bold text-xl">
              B
            </div>
            <span className="font-bold text-pet-deep hidden sm:inline">Ateliê Pet Blue</span>
          </div>
          <div className="flex gap-4">
            <a href="#servicos" className="text-sm font-medium text-pet-deep/80 hover:text-pet-ocean transition-colors focus-visible:outline-2 focus-visible:outline-pet-ocean focus-visible:outline-offset-4 rounded-md">Serviços</a>
            <a href="#contato" className="text-sm font-medium text-pet-deep/80 hover:text-pet-ocean transition-colors focus-visible:outline-2 focus-visible:outline-pet-ocean focus-visible:outline-offset-4 rounded-md">Contato</a>
          </div>
          <a 
            href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Agendar horário pelo WhatsApp"
            className="bg-pet-ocean text-white px-4 py-2 rounded-lg text-sm font-bold shadow-md hover:bg-pet-deep active:scale-95 transition-all focus-visible:ring-2 focus-visible:ring-pet-ocean focus-visible:ring-offset-2"
          >
            Agendar
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-20 right-[-100px] w-[300px] h-[300px] bg-pet-ocean/10 rounded-full blur-3xl -z-10" />
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <span className="inline-block px-4 py-1.5 bg-pet-ocean/10 text-pet-ocean text-sm font-bold rounded-full mb-6">
              O melhor Pet Shop de Santa Rita
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold text-pet-deep leading-tight mb-6">
              Seu pet merece o melhor <br />
              <span className="text-pet-ocean uppercase italic tracking-tighter">Cuidado com Amor!</span>
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-lg mx-auto lg:mx-0">
              No Ateliê Pet Blue, seu amigo recebe tratamento VIP com uma equipe que entende que pets são membros da família.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href={whatsappLink}
                aria-label="Chamar Ateliê Pet Blue no WhatsApp"
                className="bg-pet-ocean text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl hover:bg-pet-deep transition-colors flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-pet-ocean focus-visible:ring-offset-2"
              >
                <Phone className="w-5 h-5" />
                Chamar no WhatsApp
              </a>
              <a 
                href="#servicos"
                className="bg-white text-pet-deep border-2 border-slate-100 px-8 py-4 rounded-full text-lg font-bold hover:border-pet-ocean transition-all flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-pet-ocean focus-visible:ring-offset-2"
              >
                Nossos Serviços
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className="relative h-[400px] sm:h-[550px] w-full"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-pet-ocean/20 to-transparent rounded-full -rotate-6 scale-95" />
            <Image 
              src="/assets/hero-pets.png" 
              alt="Ateliê Pet Blue Hero" 
              fill
              className="object-contain drop-shadow-2xl animate-float"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row gap-16 items-center">
          <motion.div 
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            className="lg:w-1/2 relative h-[450px] w-full rounded-[3rem] overflow-hidden pixar-shadow shadow-pet-deep/5 border-8 border-slate-50"
          >
            <Image 
              src="/assets/about-uniform.png" 
              alt="Sobre o Ateliê" 
              fill
              className="object-cover"
            />
          </motion.div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl sm:text-5xl font-bold text-pet-deep mb-8">
              Um ambiente pensado no <br />
              <span className="text-pet-ocean">Bem-Estar do seu Pet</span>
            </h2>
            <p className="text-lg text-slate-600 mb-6 font-medium leading-relaxed">
              O Ateliê Pet Blue nasceu do desejo de transformar o momento do cuidado em uma experiência prazerosa. Aqui, cada detalhe — do ambiente às técnicas — é planejado para reduzir o estresse e aumentar a felicidade do seu bichinho.
            </p>
            <div className="space-y-4">
              {['Profissionais Treinados', 'Equipamentos Modernos', 'Ambiente Climatizado'].map((item) => (
                <div key={item} className="flex items-center gap-3 text-slate-700 font-bold">
                  <CheckCircle className="text-pet-ocean w-6 h-6" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="servicos" className="py-24 bg-slate-50 px-6">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-pet-deep mb-4">Serviços Completos</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Tudo que seu pet precisa em um só lugar, com a qualidade que ele merece.</p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {services.map((s) => (
            <motion.div 
              key={s.id}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-[2rem] text-center pixar-shadow hover:bg-pet-ocean group transition-all duration-300"
            >
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-colors">
                <s.icon className="w-8 h-8 text-pet-deep group-hover:text-white" />
              </div>
              <h3 className="font-bold text-pet-deep mb-2 group-hover:text-white">{s.name}</h3>
              <p className="text-xs text-slate-600 group-hover:text-white/80 leading-snug">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24 bg-pet-deep text-white overflow-hidden relative">
        <div className="absolute bottom-[-100px] left-[-100px] w-64 h-64 bg-pet-ocean/30 rounded-full blur-3xl opacity-50" />
        
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          {features.map((f) => (
            <div key={f.title} className="text-center md:text-left">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                <f.icon className="w-7 h-7 text-pet-ocean" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
              <p className="text-slate-300 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto bg-pet-deep rounded-[3rem] p-12 text-center text-white relative overflow-hidden shadow-2xl">
          <h2 className="text-3xl sm:text-5xl font-bold mb-8">Pronto para dar o melhor <br /> para seu pet?</h2>
          <p className="text-xl text-white/80 mb-12">Agende agora um banho ou tosa e sinta a diferença no sorriso do seu melhor amigo.</p>
          <a 
            href={whatsappLink}
            aria-label="Agendar via WhatsApp agora"
            className="bg-white text-pet-deep px-10 py-5 rounded-full text-xl font-bold shadow-lg hover:scale-110 active:scale-95 transition-transform inline-flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-pet-deep"
          >
            Falar pelo WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-slate-900 pt-20 pb-10 text-slate-400 px-6">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <div className="max-w-6xl mx-auto grid gap-12 pb-16 border-b border-slate-800 md:grid-cols-[1.2fr_0.9fr_0.9fr]">
          <div>
            <div className="flex items-center gap-2 mb-6 text-white text-2xl font-bold">
              <div className="w-10 h-10 bg-pet-ocean rounded-full flex items-center justify-center">B</div>
              {businessName}
            </div>
            <p className="mb-6 max-w-md">
              Pet shop em Santa Rita, PB com banho e tosa, atendimento veterinário, acessórios, medicamentos e rações para o cuidado completo do seu pet.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/ateliepetblue"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Siga o Ateliê Pet Blue no Instagram"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-pet-ocean transition-colors text-white focus-visible:ring-2 focus-visible:ring-pet-ocean focus-visible:ring-offset-2"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Serviços locais</h4>
            <ul className="space-y-3">
              <li>Banho e tosa em Santa Rita</li>
              <li>Atendimento veterinário</li>
              <li>Acessórios e medicamentos</li>
              <li>Rações para cães e gatos</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contato e endereço</h4>
            <div className="space-y-4">
              <a href={businessPhoneHref} className="flex items-center gap-3 text-white font-bold text-xl hover:text-pet-ocean transition-colors">
                <Phone className="w-6 h-6 text-pet-ocean" />
                {businessPhone}
              </a>
              <a href={whatsappLink} className="inline-flex items-center gap-2 text-white font-medium hover:text-pet-ocean transition-colors">
                Abrir WhatsApp
                <ExternalLink className="w-4 h-4" />
              </a>
              <address className="not-italic flex items-start gap-3">
                <MapPin className="w-5 h-5 text-pet-ocean mt-0.5 shrink-0" />
                <span>{addressLabel}</span>
              </address>
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white font-medium hover:text-pet-ocean transition-colors"
              >
                Ver no Google Maps
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto pt-10 flex flex-col gap-4 text-center text-sm md:flex-row md:items-center md:justify-between md:text-left">
          <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-pet-ocean" />
              <span>Segunda a Sexta: 08h às 17h</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-pet-ocean" />
              <span>Sábado: 08h às 15h</span>
            </div>
          </div>
          <p>© 2026 Ateliê Pet Blue. Pet shop em Santa Rita/PB com cuidado, confiança e proximidade.</p>
        </div>
      </footer>
    </main>
  );
}
