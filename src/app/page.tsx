'use client';

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Bone,
  CheckCircle2,
  ChevronRight,
  Clock,
  ExternalLink,
  Heart,
  MapPin,
  Menu,
  Phone,
  Scissors,
  ShoppingBag,
  Sparkles,
  Syringe,
  Stethoscope,
} from "lucide-react";
import { cn } from "@/lib/utils";

import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const businessName = "Ateliê Pet Blue";
const businessPhone = "(83) 98677-6200";
const businessPhoneHref = "tel:+5583986776200";
const whatsappLink =
  "https://wa.me/5583986776200?text=Olá!%20Gostaria%20de%20agendar%20um%20horário%20para%20meu%20pet.";
const mapsLink =
  "https://www.google.com/maps/place/Ateli%C3%AA+Pet+Blue/@-7.1376428,-34.9849551,19z/data=!3m1!4b1!4m6!3m5!1s0x7acef1d5a432953:0x4ea87ddbdedaf14e!8m2!3d-7.1376441!4d-34.9837374!16s%2Fg%2F11j4ndc8qk?entry=ttu&g_ep=EgoyMDI2MDMzMS4wIKXMDSoASAFQAw%3D%3D";
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
  openingHours: ["Mo-Fr 08:00-17:00", "Sa 08:00-15:00"],
  sameAs: ["https://instagram.com/ateliepetblue"],
};

const navItems = [
  { label: "Início", href: "#topo" },
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Contato", href: "#contato" },
];

const services = [
  {
    id: 1,
    name: "Estética",
    icon: Scissors,
    desc: "Banho e tosa com cuidado, técnica e acabamento impecável.",
    bgImage: "/assets/services/service-estetica.webp",
  },
  {
    id: 2,
    name: "Veterinário",
    icon: Stethoscope,
    desc: "Consultas especializadas para acompanhar a saúde do seu pet.",
    bgImage: "/assets/services/service-veterinario.webp",
  },
  {
    id: 3,
    name: "Acessórios",
    icon: ShoppingBag,
    desc: "Itens selecionados para conforto, estilo e praticidade.",
    bgImage: "/assets/services/service-acessorios.webp",
  },
  {
    id: 4,
    name: "Medicamentos",
    icon: Syringe,
    desc: "Farmácia veterinária com apoio para a rotina de cuidados.",
    bgImage: "/assets/services/service-medicamentos.webp",
  },
  {
    id: 5,
    name: "Rações",
    icon: Bone,
    desc: "Nutrição de qualidade para cães e gatos em todas as fases.",
    bgImage: "/assets/services/service-racoes.webp",
  },
];

const features = [
  {
    title: "Amor sem limites",
    desc: "Tratamos cada pet como se fosse nosso, com atenção real aos detalhes.",
    icon: Heart,
  },
  {
    title: "Equipe profissional",
    desc: "Um time preparado para cuidar com técnica, paciência e segurança.",
    icon: CheckCircle2,
  },
  {
    title: "Estrutura acolhedora",
    desc: "Ambiente limpo, climatizado e pensado para reduzir o estresse com carinho.",
    icon: Sparkles,
  },
];

const quickStats = [
  {
    title: "Cuidado\ncompleto",
    subtitle: "Banho, tosa, veterinário, acessórios e rações.",
  },
  {
    title: "Atendimento\nlocal",
    subtitle: "Em Santa Rita/PB, perto de você e do seu pet.",
  },
  {
    title: "Conforto\ne carinho",
    subtitle: "+10 anos cuidando com amor, técnica e carinho.",
  },
];

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("size-4 shrink-0 fill-current", className)}
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
    >
      <path fill="currentColor" d="M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("size-4 shrink-0 fill-current", className)}
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
    >
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5Z" />
      <path d="M12 6.25A5.75 5.75 0 1 1 6.25 12 5.76 5.76 0 0 1 12 6.25Zm0 1.5A4.25 4.25 0 1 0 16.25 12 4.25 4.25 0 0 0 12 7.75Z" />
      <circle cx="17.25" cy="6.75" r="1.1" />
    </svg>
  );
}

function LogoMark({
  className,
  imageClassName,
}: {
  className?: string;
  imageClassName?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden rounded-full bg-transparent", className)}>
      <Image
        src="/assets/logo.webp"
        alt=""
        fill
        sizes="64px"
        className={cn("rounded-full object-contain", imageClassName)}
      />
    </div>
  );
}

export default function Home() {
  const { scrollY } = useScroll();

  const headerBg = useTransform(
    scrollY,
    [0, 400],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.85)"]
  );

  const headerBlur = useTransform(
    scrollY,
    [0, 400],
    ["blur(0px)", "blur(20px)"]
  );

  const headerBorder = useTransform(
    scrollY,
    [0, 400],
    ["rgba(217, 230, 238, 0)", "rgba(217, 230, 238, 0.6)"]
  );

  const headerColor = useTransform(
    scrollY,
    [0, 400],
    ["rgba(255, 255, 255, 1)", "rgba(0, 30, 71, 1)"]
  );

  const headerMuted = useTransform(
    scrollY,
    [0, 400],
    ["rgba(255, 255, 255, 0.75)", "rgba(91, 100, 114, 1)"]
  );

  return (
    <main
      id="topo"
      className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_right,_rgba(15,147,168,0.15),_transparent_30%),radial-gradient(circle_at_top_left,_rgba(0,77,165,0.14),_transparent_28%),linear-gradient(to_bottom,_#fbfeff,_#f5fbff_45%,_#ffffff)]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-[linear-gradient(180deg,rgba(255,255,255,0.85),transparent)]" />

      <motion.header
        style={{
          backgroundColor: headerBg,
          backdropFilter: headerBlur,
          borderBottomColor: headerBorder,
          color: headerColor,
        }}
        className="fixed inset-x-0 top-0 z-50 border-b outline-none transition-none"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link href="#topo" className="flex items-center gap-3">
            <LogoMark className="size-11" />
            <div className="hidden sm:block">
              <motion.p
                style={{ color: headerColor }}
                className="text-sm font-semibold tracking-tight"
              >
                {businessName}
              </motion.p>
              <motion.p
                style={{ color: headerMuted }}
                className="text-xs"
              >
                Pet shop em Santa Rita/PB
              </motion.p>
            </div>
          </Link>

          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="gap-1">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink
                    href={item.href}
                    render={
                      <motion.a
                        style={{ color: headerColor }}
                        className={navigationMenuTriggerStyle()}
                      />
                    }
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden items-center gap-3 sm:flex">
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: headerColor, borderColor: headerColor }}
              className={cn(buttonVariants({ variant: "outline", size: "default" }), "h-8 bg-transparent border transition-none")}
            >
              Falar no WhatsApp
            </motion.a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "default", size: "default" }), "h-8 border border-primary")}
            >
              Agendar agora
            </a>
          </div>

          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger
                render={
                  <motion.button
                    style={{ color: headerColor, borderColor: headerBorder }}
                    className="flex size-10 items-center justify-center rounded-xl border transition-none"
                    aria-label="Abrir menu"
                  />
                }
              >
                <Menu className="size-5" />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>{businessName}</SheetTitle>
                  <SheetDescription>
                    Navegue pelas seções principais e chame direto no WhatsApp.
                  </SheetDescription>
                </SheetHeader>
                <div className="grid gap-2 px-4">
                  {navItems.map((item) => (
                    <SheetClose
                      key={item.href}
                      render={
                        <a
                          href={item.href}
                          className="rounded-xl border border-border bg-background px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                        />
                      }
                    >
                      {item.label}
                    </SheetClose>
                  ))}
                </div>
                <div className="mt-auto grid gap-3 p-4">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonVariants({ variant: "default", size: "default" })}
                  >
                    Agendar no WhatsApp
                  </a>
                  <a
                    href={businessPhoneHref}
                    className={buttonVariants({ variant: "outline", size: "default" })}
                  >
                    Ligar agora
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.header>

      <section className="relative isolate z-10 flex min-h-[100svh] items-center overflow-hidden px-4 pb-4 pt-20 sm:px-6 lg:h-screen lg:pb-32 lg:pt-36">
        <Image
          src="/assets/hero.webp"
          alt="Ateliê Pet Blue - Banner"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="pointer-events-none object-cover object-center"
        />
        <div className="absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(0,30,71,0.9)_0%,rgba(0,30,71,0.72)_45%,rgba(0,30,71,0.28)_100%)] lg:bg-[linear-gradient(90deg,rgba(0,30,71,0.82)_0%,rgba(0,30,71,0.62)_45%,rgba(0,30,71,0.18)_100%)]" />

        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mx-auto flex max-w-xl flex-col items-center space-y-4 text-center sm:space-y-0 lg:mx-0 lg:max-w-3xl lg:items-start lg:text-left"
          >
            <Badge
              variant="secondary"
              className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[10px] text-white backdrop-blur sm:mb-5 sm:px-3 sm:text-xs"
            >
              Há mais de 10 anos cuidando de pets
            </Badge>
            <h1 className="max-w-3xl text-[1.7rem] font-semibold leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-6xl">
              <span className="block">Seu pet merece um cuidado com amor, técnica e carinho.</span>
              <span className="mt-3 block text-cyan-100">
                Ateliê Pet Blue.
              </span>
            </h1>
            <p className="mx-auto mt-3 hidden max-w-sm text-[0.78rem] leading-5 text-white/82 sm:mt-6 sm:block sm:max-w-xl sm:text-lg sm:leading-7 lg:mx-0">
              Banho e tosa, atendimento veterinário, acessórios e rações com
              uma equipe especialista, que há mais de 10 anos cuida do seu pet
              com atenção, carinho e segurança.
            </p>

            <div className="mt-6 grid w-full grid-cols-2 gap-2 sm:mt-8 sm:flex sm:w-auto sm:flex-row lg:justify-start">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({
                    variant: "default",
                    size: "default",
                  }),
                  "w-full sm:w-auto"
                )}
              >
                <WhatsAppIcon />
                <span className="sm:hidden">WhatsApp</span>
                <span className="hidden sm:inline">Chamar no WhatsApp</span>
              </a>
              <a
                href="#servicos"
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    size: "default",
                  }),
                  "border-white/35 bg-white/10 text-white hover:bg-white/20 hover:text-white w-full sm:w-auto"
                )}
              >
                <span className="sm:hidden">Serviços</span>
                <span className="hidden sm:inline">Ver serviços</span>
                <ChevronRight className="size-4" />
              </a>
            </div>

            <div className="mt-6 grid w-full gap-2 sm:hidden">
              {quickStats.map((stat) => (
                <div
                  key={stat.title}
                  className="flex w-full min-h-[4.75rem] flex-col justify-center rounded-2xl border border-white/20 bg-white/12 px-3 py-2.5 text-center backdrop-blur-md"
                >
                  <p className="whitespace-nowrap text-[0.72rem] font-semibold uppercase leading-none tracking-[0.08em] text-white">
                    {stat.title.replace(/\n/g, " ")}
                  </p>
                  <p className="mt-1 text-[0.66rem] leading-4 text-white/72">
                    {stat.subtitle}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 hidden w-full gap-1.5 sm:mt-10 sm:grid sm:grid-cols-3 lg:max-w-3xl">
              {quickStats.map((stat) => (
                <Card
                  key={stat.title}
                  className="w-full justify-self-stretch border-white/20 bg-white/12 backdrop-blur-md"
                >
                  <CardContent className="p-2.5 text-center sm:p-4">
                    <p className="whitespace-pre-line text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-white sm:text-base sm:tracking-[0.14em]">
                      {stat.title}
                    </p>
                    <p className="mx-auto mt-1.5 max-w-[15ch] text-[0.68rem] leading-4 text-white/75 sm:mt-2 sm:max-w-[18ch] sm:text-sm sm:leading-6">
                      {stat.subtitle}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-20 overflow-hidden bg-[#4294bf] bg-gradient-to-br from-[#4294bf] via-[#3a82a8] to-[#2d6684] px-4 py-20 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            className="relative"
          >
            <div className="h-full overflow-hidden rounded-3xl shadow-xl shadow-black/20">
              <div className="relative h-full min-h-[400px]">
                <Image
                  src="/assets/about-uniform.png"
                  alt="Equipe do Ateliê Pet Blue"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col justify-center space-y-4 lg:space-y-5">
            <Badge
              variant="outline"
              className="rounded-full border-white/20 bg-white/10 px-3 py-1 text-white"
            >
              Sobre o espaço
            </Badge>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Um ambiente pensado para o bem-estar do seu pet, com experiência e dedicação de verdade.
            </h2>
            <p className="max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
              O Ateliê Pet Blue há mais de 10 anos transforma o cuidado em uma
              experiência agradável. Cada detalhe do ambiente e do atendimento
              é pensado para reduzir o estresse e aumentar a confiança, com
              amor, técnica e carinho.
            </p>

            <Card className="relative overflow-hidden border-white/20 bg-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.15)] backdrop-blur-xl">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-6 -right-6 h-32 w-32 sm:-bottom-10 sm:-right-10 sm:h-48 sm:w-48"
              >
                <Image
                  src="/assets/about-space-emblem.webp"
                  alt=""
                  fill
                  sizes="(max-width: 640px) 8rem, 12rem"
                  className="object-contain opacity-40 brightness-0 invert"
                />
              </div>
              <CardContent className="relative z-10 space-y-3.5 p-5 sm:p-6">
                {[
                  "Profissionais especialistas",
                  "Mais de 10 anos de atuação",
                  "Ambiente climatizado",
                ].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    whileHover={{ x: 6, color: "#ffffff" }}
                    className="flex items-center gap-3 text-sm font-medium text-white/90 transition-colors"
                  >
                    <div className="flex size-7 items-center justify-center rounded-full bg-white/15 shadow-inner">
                      <CheckCircle2 className="size-4 text-cyan-200" />
                    </div>
                    {item}
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="servicos" className="relative z-10 overflow-hidden bg-pet-base px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <Badge
              variant="secondary"
              className="rounded-full border border-primary/15 bg-primary/10 px-3 py-1 text-primary"
            >
              Serviços
            </Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Tudo que seu pet precisa em um só lugar.
            </h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              A estrutura foi organizada para cobrir o cuidado completo, do
              visual à saúde e à alimentação.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -6 }}
              >
                <Card className={cn(
                  "group relative h-full min-h-[12.5rem] overflow-hidden border-border/60 bg-white/95 transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 sm:min-h-[19rem]",
                  service.bgImage && "border-white/10 bg-[#062a30]"
                )}>
                  {service.bgImage && (
                    <>
                      <Image
                        src={service.bgImage}
                        alt={service.name}
                        fill
                        className="object-cover opacity-50 transition-transform duration-500 group-hover:scale-110 group-hover:opacity-60"
                      />
                      <div className="absolute inset-0 bg-[#062a30]/30 group-hover:bg-[#062a30]/40 transition-opacity" />
                    </>
                  )}
                  <CardContent className="relative z-10 flex h-full flex-col px-4 py-4 text-center sm:py-7">
                    <div className="flex flex-col items-center gap-2 sm:gap-3">
                      <div className={cn(
                        "flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground sm:size-14",
                        service.bgImage && "bg-white/20 text-white group-hover:bg-white group-hover:text-primary"
                      )}>
                        <service.icon className="size-5 sm:size-6" />
                      </div>
                      <CardTitle className={cn("text-base sm:text-lg", service.bgImage && "text-white")}>
                        {service.name}
                      </CardTitle>
                      <Badge
                        variant={service.bgImage ? "secondary" : "outline"}
                        className={cn("w-fit rounded-full text-[11px] sm:text-sm", service.bgImage && "border-white/20 bg-white/10 text-white")}
                      >
                        Cuidado premium
                      </Badge>
                    </div>
                    <CardDescription className={cn(
                      "mx-auto mt-2.5 max-w-[18ch] text-xs leading-5 text-muted-foreground sm:mt-3 sm:max-w-[20ch] sm:text-sm sm:leading-6",
                      service.bgImage && "text-white/80"
                    )}>
                      {service.desc}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="diferenciais"
        className="relative z-20 overflow-hidden bg-[#0f93a8] px-4 py-20 sm:px-6"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="space-y-4 text-white">
              <Badge className="rounded-full bg-white/15 text-white hover:bg-white/20">
                Diferenciais
              </Badge>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Um lugar bonito por fora e confiável por dentro, com uma equipe
                especialista.
              </h2>
              <p className="max-w-xl text-base leading-7 text-white/80">
                O objetivo não é só atender. É fazer o pet sair confortável, e o
                tutor sair seguro de que encontrou um lugar de confiança com
                mais de 10 anos de experiência.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <Card className="h-full border-white/15 bg-white/10 text-white backdrop-blur">
                    <CardHeader>
                      <div className="mb-3 flex size-12 items-center justify-center rounded-2xl bg-white/12 text-white">
                        <feature.icon className="size-5" />
                      </div>
                      <CardTitle className="text-xl text-white">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm leading-6 text-white/75">
                        {feature.desc}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 overflow-hidden bg-pet-soft px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <Card className="overflow-hidden border-border/60 bg-white shadow-2xl shadow-primary/20">
            <CardContent className="grid gap-8 p-6 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="space-y-4 text-center lg:text-left">
                <Badge
                  variant="outline"
                  className="rounded-full border-primary/20 bg-primary/5 text-primary"
                >
                  Agendamento
                </Badge>
                <h2 className="text-3xl font-semibold tracking-tight text-pet-midnight sm:text-4xl">
                  Pronto para dar o melhor para seu pet?
                </h2>
                <p className="max-w-2xl text-base leading-7 text-pet-midnight/70 sm:text-lg">
                  Agende um banho, tosa ou atendimento e sinta a diferença de
                  um espaço que trabalha com carinho e organização.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({
                    variant: "default",
                    size: "lg",
                  })}
                >
                  Falar pelo WhatsApp
                </a>
                <a
                  href={mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({
                    variant: "outline",
                    size: "lg",
                  })}
                >
                  Ver no Google Maps
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer id="contato" className="relative z-10 bg-pet-deep px-4 pb-6 pt-10 text-white sm:px-6 sm:pb-8 sm:pt-12">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center gap-8 text-center sm:grid sm:gap-6 sm:text-left lg:grid-cols-[1.2fr_0.9fr_0.9fr]">
            <div className="space-y-3 sm:flex sm:h-full sm:flex-col">
              <div className="flex items-center gap-3">
                <LogoMark className="size-11" />
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {businessName}
                  </h3>
                  <p className="text-sm text-pet-soft/80">
                    Pet shop em Santa Rita/PB
                  </p>
                </div>
              </div>
              <p className="hidden max-w-md text-sm leading-6 text-pet-soft/80 sm:block">
                Banho e tosa, atendimento veterinário, acessórios, medicamentos
                e rações com amor, técnica e carinho para o cuidado completo do
                seu pet.
              </p>
              <div className="mt-6 flex justify-center gap-3 sm:mt-12 sm:justify-start">
                <a
                  href="https://instagram.com/ateliepetblue"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Siga o Ateliê Pet Blue no Instagram"
                  className={`${buttonVariants({
                    variant: "outline",
                    size: "default",
                  })} mx-auto gap-2 border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white`}
                >
                  <span>Nos siga no Instagram</span>
                  <InstagramIcon className="size-4" />
                </a>
              </div>
            </div>

            <div className="hidden space-y-3 sm:block">
              <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/90">
                Serviços locais
              </h4>
              <Card className="border-white/15 bg-white/5 backdrop-blur shadow-none">
                <CardContent className="space-y-2.5 p-3.5 text-sm text-pet-soft/80 sm:p-4">
                  <div>Banho e tosa em Santa Rita</div>
                  <div>Atendimento veterinário</div>
                  <div>Acessórios e medicamentos</div>
                  <div>Rações para cães e gatos</div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/90">
                Contato e endereço
              </h4>
              <div className="grid grid-cols-1 gap-4 text-center text-sm text-pet-soft/80 sm:space-y-4 sm:rounded-xl sm:border sm:border-white/15 sm:bg-white/5 sm:p-5 sm:text-left sm:backdrop-blur">
                <a
                  href={businessPhoneHref}
                  className="flex items-center justify-center gap-2.5 font-semibold text-white transition-colors hover:text-pet-soft sm:justify-start"
                >
                  <Phone className="size-4 text-pet-sky" />
                  {businessPhone}
                </a>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 font-medium text-white transition-colors hover:text-pet-soft sm:justify-start"
                >
                  <WhatsAppIcon className="text-pet-sky" />
                  Abrir WhatsApp
                  <ExternalLink className="size-4" />
                </a>
                <address className="not-italic flex items-start justify-center gap-2.5 text-sm text-pet-soft/80 sm:justify-start">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-pet-sky" />
                  <span>{addressLabel}</span>
                </address>
              </div>
            </div>
          </div>

          <Separator className="my-5 bg-white/15 sm:my-6" />

          <div className="flex flex-col gap-3 text-center text-sm text-pet-soft/70 md:flex-row md:items-center md:justify-between md:text-left">
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1.5 md:justify-start">
              <div className="flex items-center gap-2">
                <Clock className="size-4 text-pet-sky" />
                <span>Segunda a sexta: 08h às 17h</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="size-4 text-pet-sky" />
                <span>Sábado: 08h às 15h</span>
              </div>
            </div>
            <p className="leading-5">
              © 2026 Ateliê Pet Blue. Há mais de 10 anos cuidando com amor,
              técnica e carinho em Santa Rita/PB.
            </p>
          </div>
        </div>
      </footer>

      {/* Color Palette Design System Overlay */}
      <div className="fixed bottom-6 right-6 z-[100] hidden lg:block">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="glass flex items-center gap-4 rounded-full p-2.5 shadow-2xl transition-all hover:scale-105"
        >
          <div className="flex -space-x-2 px-1">
            <div
              className="size-8 rounded-full border-2 border-white shadow-sm transition-transform hover:z-10 hover:scale-125"
              style={{ backgroundColor: "#001e47" }}
              title="Pet Midnight (#001e47)"
            />
            <div
              className="size-8 rounded-full border-2 border-white shadow-sm transition-transform hover:z-10 hover:scale-125"
              style={{ backgroundColor: "#004da5" }}
              title="Pet Deep (#004da5)"
            />
            <div
              className="size-8 rounded-full border-2 border-white shadow-sm transition-transform hover:z-10 hover:scale-125"
              style={{ backgroundColor: "#0f93a8" }}
              title="Pet Ocean (#0f93a8)"
            />
            <div
              className="size-8 rounded-full border-2 border-white shadow-sm transition-transform hover:z-10 hover:scale-125"
              style={{ backgroundColor: "#8cb9c8" }}
              title="Pet Sky (#8cb9c8)"
            />
            <div
              className="size-8 rounded-full border-2 border-white shadow-sm transition-transform hover:z-10 hover:scale-125"
              style={{ backgroundColor: "#dff1f5" }}
              title="Pet Soft (#dff1f5)"
            />
            <div
              className="size-8 rounded-full border-2 border-white shadow-sm transition-transform hover:z-10 hover:scale-125"
              style={{ backgroundColor: "#f8fbff" }}
              title="Pet Base (#f8fbff)"
            />
          </div>
          <div className="pr-4 border-l border-foreground/10 pl-4">
            <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/40">Design System</p>
            <p className="text-xs font-semibold text-foreground">Pet Blue Palette</p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

