"use client"

import Image from "next/image"
import { Countdown } from "./countdown"
import { RSVPForm } from "./rsvp-form"
import {
  HeartDecoration,
  LeafDecoration,
  BranchDecoration,
  MapPinIcon,
  BranchDivider,
  HeartLine,
  WaveDivider,
} from "./decorations"

import coupleJPG from '../public/images/couple.jpg'

import brideJPG from '../public/images/bride.jpg'
import groomJPG from '../public/images/groom.jpg'

function Section({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <section
      className={`screen-section px-5 max-w-[414px] mx-auto relative ${className}`}
    >
      {children}
    </section>
  )
}

// Section 1: Title screen
export function TitleSection() {
  return (
    <section className="snap-section flex flex-col items-center justify-center px-6 py-8 relative">
      {/* Names with heart decoration */}
      <div className="text-center mb-6">
        <h1 className="font-serif text-7xl md:text-8xl lg:text-9xl text-[#352b22] leading-tight">
          Арсений
        </h1>
        <div className="flex items-center justify-center my-3">
          <HeartDecoration className="w-8 h-8 text-[#d7c0b8] animate-float" />
        </div>
        <h1 className="font-serif text-7xl md:text-8xl lg:text-9xl text-[#352b22] leading-tight">
          Альбина
        </h1>
      </div>

      {/* Photos */}
      <div className="flex items-center justify-center gap-6 mb-8">
        <div className="w-[132px] h-[132px] md:w-[160px] md:h-[160px] rounded-full overflow-hidden border-2 border-[#d7c0b8] shadow-lg">
          <Image
            src={groomJPG}
            alt="Арсений"
            width={160}
            height={160}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-[132px] h-[132px] md:w-[160px] md:h-[160px] rounded-full overflow-hidden border-2 border-[#d7c0b8] shadow-lg">
          <Image
            src={brideJPG}
            alt="Альбина"
            width={160}
            height={160}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Countdown */}
      <div className="mb-8">
        <Countdown />
      </div>

      {/* Date */}
      <p className="text-xl md:text-2xl tracking-widest text-[#6b5c52] font-light">
        23.07.2026 / 18:00
      </p>
    </section>
  )
}

// Section 2: Greeting and couple photo
export function GreetingSection() {
  return (
    <section className="snap-section flex flex-col items-center justify-center px-6 py-8">
      <BranchDecoration className="w-32 h-6 text-[#b4b99a] mb-6 opacity-60" />
      
      <div className="text-center mb-6 max-w-lg">
      <h2 className="font-serif text-[52px] leading-tight text-[#3B2E24] text-center mb-4">
        Дорогие родные<br />и друзья!
      </h2>

      <p className="text-[#5C4A3A] text-base leading-relaxed text-center mb-5 max-w-[330px] mx-auto">
        Скоро в нашей жизни состоится важное и радостное для нас событие — наша свадьба. Мы будем счастливы, если вы разделите этот день вместе с нами!
      </p>
      </div>

      {/* Couple photo */}
      <div className="w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-2xl overflow-hidden shadow-lg border-2 border-[#d3c1ad] mb-5">
        <Image
          src={coupleJPG}
          alt="Арсений и Альбина"
          width={320}
          height={320}
          className="w-full h-full object-cover"
        />
      </div>

      <p className="font-serif text-2xl md:text-3xl text-[#7696a5] italic">
        С любовью, Арсений и Альбина
      </p>

      <BranchDecoration className="w-32 h-6 text-[#b4b99a] mt-6 opacity-60 rotate-180" />
    </section>
  )
}

// Section 3: Venue
export function VenueSection() {
  return (
    <section className="snap-section flex flex-col items-center justify-center px-6 ">
      
      <h2 className="font-serif text-5xl md:text-6xl text-[#352b22] mb-6 text-center">
        Место проведения
      </h2>

      <div className="flex items-start gap-4 mb-6 text-center">
        <MapPinIcon className="w-8 h-8 text-[#7696a5] flex-shrink-0 mt-1" />
        <div>
          <p className="text-2xl md:text-3xl font-medium text-[#352b22]">
            Есть Повод. Панорама
          </p>
          <p className="text-[#6b5c52] mt-1 text-lg md:text-xl">
            ул. Новгородская, 58/1, Уфа
          </p>
        </div>
      </div>

      {/* Yandex Map iframe */}
      <div className="w-full max-w-xl rounded-xl overflow-hidden border-2 border-[#d3c1ad] shadow-lg">
        <iframe
          src="https://yandex.ru/map-widget/v1/?ll=55.972844%2C54.735147&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NjI0MzM1NxJL0KDQvtGB0YHQuNGPLCDQo9GE0LAsINGD0LvQuNGG0LAg0J3QvtCy0LPQvtGA0L7QtNGB0LrQsNGPLCA1OC8xIgoN7F9gQhVKYVtC&z=16"
          width="100%"
          height="280"
          frameBorder="0"
          allowFullScreen={false}
          style={{ display: "block" }}
          title="Карта места проведения"
        />
      </div>

      <p className="text-base text-[#a78d76] mt-4 text-center">
        Нажмите на карту для открытия в Яндекс.Картах
      </p>
    </section>
  )
}

// Section 4: Schedule
export function ScheduleSection() {

  const SCHEDULE = [
  { time: "15:00", title: "Сбор гостей",        desc: "Встречаемся, обнимаемся и знакомимся" },
  { time: "18:00", title: "Церемония",           desc: "Тот самый момент заветных «да»" },
  { time: "17:00", title: "Банкет",              desc: "Танцы, веселье и праздничный ужин" },
  { time: "23:00", title: "Завершение праздника",desc: "Пьём на брудершафт и провожаем вечер с улыбками" },
]

  return (
    <section className="snap-section flex flex-col items-center justify-center px-6 py-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-px w-12 bg-[#b4b99a]" />
        <LeafDecoration className="w-6 h-6 text-[#585d46]" />
        <div className="h-px w-12 bg-[#b4b99a]" />
      </div>

      <h2 className="font-serif text-5xl md:text-6xl text-[#352b22] mb-8 text-center">
        Расписание дня
      </h2>

      <div className="w-full max-w-md space-y-4">
        {SCHEDULE.map((item, index) => (
          <div
            key={index}
            className="bg-white/60 backdrop-blur-sm rounded-xl p-5 border border-[#d3c1ad] shadow-sm flex items-center gap-5"
          >
            <div className="flex-1">
              <p className="text-base text-[#7696a5] font-medium">{item.time}</p>
              <p className="text-[#352b22] font-medium text-xl">{item.title}</p>
              {item.desc && (
                <p className="text-base text-[#a78d76]">{item.desc}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// Section 5: Dress code
export function DressCodeSection() {
  const PALETTE = [
  "#A6C3E3", "#A4BCC2", "#6B7F4F",
  "#9CAF88", "#D2C4B0", "#BEA996",
  "#8B735B", "#5C4A3A", "#3B2E24",
]


  return (
    <Section>
      <h2 className="font-serif text-[52px] leading-tight text-[#3B2E24] text-center mb-3">
        Дресс-код
      </h2>

      <p className="text-[#5C4A3A] text-base text-center leading-relaxed mb-6 max-w-[320px] mx-auto">
        Дорогие, мы очень старались сделать этот праздник особенным и красивым. Будем рады, если вы поддержите атмосферу, выбрав наряды в цветах нашей свадьбы: зелёный, голубой, коричневый.
      </p>

      {/* 3×3 palette grid */}
      <div className="grid grid-cols-3 gap-x-6 gap-y-4 mx-auto">
        {PALETTE.map((hex, i) => (
          <div key={i} className="flex flex-col items-center gap-1.5">
            <div
              className="w-14 h-14 rounded-full shadow-md border-[1.5px] border-white/60"
              style={{ backgroundColor: hex }}
            />
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-3 mt-6 text-[#A6C3E3]">
        <BranchDivider className="opacity-45 w-28 h-5" />
        <HeartLine className="w-5 h-5 opacity-55 flex-shrink-0" />
        <BranchDivider className="opacity-45 w-28 h-5 rotate-180" />
      </div> 
    </Section>
  )
}


const WISHES = [
  "Мы очень любим ваших деток, но из-за ограниченного пространства этот праздник мы устраиваем в формате +18. Надеемся, вы сможете как следует отдохнуть и повеселиться на нашем празднике \u{1F90D}",
  "Просим воздержаться от традиционного «Горько!». Нам хочется сохранить атмосферу лёгкости и уюта — обещаем целоваться и без подсказок :)",
  "Если вы планировали порадовать нас цветами, мы будем рады цветочной подписке — это когда букеты приходят постепенно и радуют нас ещё долго после свадьбы \u{1F90D}",
]

export function RequestsSection() {
  return (
    <Section>
      <div className="flex items-center gap-3 mb-5 w-full">
      </div>

      <h2 className="font-serif text-[52px] leading-tight text-[#3B2E24] text-center mb-6">
        Пожелания
      </h2>

      <div className="w-full space-y-0">
        {WISHES.map((text, i) => (
          <div key={i}>
            <p className="text-[#3B2E24] text-base leading-relaxed text-center max-w-[330px] mx-auto py-1">
              {text}
            </p>
            {i < WISHES.length - 1 && (
              <WaveDivider className="text-[#A6C3E3] opacity-50 my-3" />
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 mt-6">
        <HeartLine className="w-4 h-4 text-[#A6C3E3] opacity-50" />
        <HeartLine className="w-5 h-5 text-[#A6C3E3] animate-pulse-soft" />
        <HeartLine className="w-4 h-4 text-[#A6C3E3] opacity-50" />
      </div>
    </Section>
  )
}


export function RSVPSection() {
  return (
    <Section>

      <h2 style={{marginTop: "20px"}} className="font-serif text-[52px] leading-tight text-[#3B2E24] text-center mb-1">
        Анкета
      </h2>
      <p className="text-[#5C4A3A] text-sm text-center mb-5 max-w-[290px] mx-auto leading-relaxed">
        Будем очень признательны, если вы подтвердите своё присутствие до{" "}
        <strong className="text-[#3B2E24]">01.07</strong>
      </p>

      <div className="w-full rounded-2xl p-5">
        <RSVPForm />
      </div>
    </Section>
  )
}

// ─────────────────────────────────────────
// 8 — Контакты
// ─────────────────────────────────────────
export function ContactsSection() {
  return (
    <Section>
      <BranchDivider className="text-[#a6c3e3] opacity-50 mb-5 mx-auto" />

      <h2 className="font-serif text-[52px] leading-tight text-[#3B2E24] text-center mb-5">
        Контакты
      </h2>

      <div className="w-full rounded-2xl p-6 text-center space-y-4">
        <p className="text-[#5C4A3A] text-base leading-relaxed">
          По всем вопросам в день мероприятия и до него вы можете обратиться к нашему организатору.
        </p>

        <div className="inline-flex flex-col items-center gap-1">
          <p className="text-[#3B2E24] font-semibold text-lg">Дарья</p>
          <a
            href="tel:+79174034123"
            className="text-[#6B7F4F] font-medium text-xl tracking-wide hover:text-[#3B2E24] transition-colors"
          >
            +7 917 403 4123
          </a>
        </div>

        <WaveDivider className="text-[#A6C3E3] opacity-60" />

        <p className="font-serif text-[32px] leading-tight text-[#6B7F4F]">
          Очень вас ждём!
        </p>
        <p className="text-[#5C4A3A] text-base italic">
          С любовью, ваши Арсений и Альбина
        </p>
      </div>

      <div className="flex items-center justify-center gap-3 mt-6">
        <HeartLine className="w-5 h-5 text-[#A6C3E3] opacity-55" />
        <HeartLine className="w-7 h-7 text-[#A6C3E3] animate-pulse-soft" />
        <HeartLine className="w-5 h-5 text-[#A6C3E3] opacity-55" />
      </div>

      <BranchDivider className="text-[#9CAF88] opacity-50 mt-5 mx-auto rotate-180" />
    </Section>
  )
}
