"use client"

import Image from "next/image"
import { Countdown } from "./countdown"
import { RSVPForm } from "./rsvp-form"
import {
  HeartDecoration,
  LeafDecoration,
  BranchDecoration,
  WineGlassIcon,
  FeatherIcon,
  MapPinIcon,
  FlowerEnvelopeIcon,
  NoShoutIcon,
  NoChildrenIcon,
} from "./decorations"

// Section 1: Title screen
export function TitleSection() {
  return (
    <section className="snap-section flex flex-col items-center justify-center px-6 py-8 relative">
      {/* Decorative elements */}
      {/* <LeafDecoration className="absolute top-12 left-12 w-12 h-12 text-[#b4b99a] animate-sway opacity-60" />
      <LeafDecoration className="absolute top-16 right-12 w-10 h-10 text-[#7696a5] animate-float opacity-50 rotate-45" />
      <LeafDecoration className="absolute bottom-20 left-20 w-8 h-8 text-[#585d46] animate-float opacity-40 -rotate-12" />
      <LeafDecoration className="absolute bottom-24 right-16 w-10 h-10 text-[#b4b99a] animate-sway opacity-50 rotate-90" />
       */}
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
            src="/images/groom.jpg"
            alt="Арсений"
            width={160}
            height={160}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-[132px] h-[132px] md:w-[160px] md:h-[160px] rounded-full overflow-hidden border-2 border-[#d7c0b8] shadow-lg">
          <Image
            src="/images/bride.jpg"
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
        <h2 className="font-serif text-5xl md:text-6xl text-[#352b22] mb-6">
          Дорогой гость!
        </h2>
        <p className="text-[#543e31] leading-relaxed text-xl md:text-2xl">
          Мы рады сообщить, что состоится самое главное торжество в нашей жизни — день нашей свадьбы.
        </p>
        <p className="text-[#543e31] leading-relaxed text-xl md:text-2xl mt-4">
          Приглашаем разделить с нами радость этого незабываемого дня.
        </p>
      </div>

      {/* Couple photo */}
      <div className="w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-2xl overflow-hidden shadow-lg border-2 border-[#d3c1ad] mb-5">
        <Image
          src="/images/couple.jpg"
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
    <section className="snap-section flex flex-col items-center justify-center px-6 py-8">
      <LeafDecoration className="w-10 h-10 text-[#585d46] mb-4 animate-sway" />
      
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
  const schedule = [
    { time: "15:00", event: "Welcome зона", subtitle: "сбор гостей", icon: HeartDecoration },
    { time: "18:00", event: "Роспись", subtitle: null, icon: FeatherIcon },
    { time: "17:00–22:00", event: "Банкет", subtitle: null, icon: WineGlassIcon },
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
        {schedule.map((item, index) => (
          <div
            key={index}
            className="bg-white/60 backdrop-blur-sm rounded-xl p-5 border border-[#d3c1ad] shadow-sm flex items-center gap-5"
          >
            <div className="w-14 h-14 rounded-full bg-[#f5ebe3] flex items-center justify-center flex-shrink-0">
              <item.icon className="w-6 h-6 text-[#7696a5]" />
            </div>
            <div className="flex-1">
              <p className="text-base text-[#7696a5] font-medium">{item.time}</p>
              <p className="text-[#352b22] font-medium text-xl">{item.event}</p>
              {item.subtitle && (
                <p className="text-base text-[#a78d76]">{item.subtitle}</p>
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
  const colors = [
    { name: "Пыльно-бирюзовый", hex: "#7696a5" },
    { name: "Небесно-лавандовый", hex: "#a6c3e3" },
    { name: "Оливково-коричневый", hex: "#585d46" },
    { name: "Шалфейный", hex: "#b4b99a" },
    { name: "Кремово-бежевый", hex: "#d3c1ad" },
    { name: "Пыльная роза", hex: "#d7c0b8" },
    { name: "Кофе с молоком", hex: "#a78d76" },
    { name: "Горький шоколад", hex: "#543e31" },
    { name: "Тёмный дуб", hex: "#352b22" },
  ]

  return (
    <section className="snap-section flex flex-col items-center justify-center px-6 py-8">
      <h2 className="font-serif text-5xl md:text-6xl text-[#352b22] mb-5 text-center">
        Дресс-код
      </h2>

      <p className="text-[#543e31] text-center mb-6 max-w-md leading-relaxed text-xl md:text-2xl">
        Мы будем рады, если в вашей одежде будут присутствовать эти цвета:
      </p>

      <div className="grid grid-cols-3 gap-5 max-w-md">
        {colors.map((color, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <div
              className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-white shadow-md"
              style={{ backgroundColor: color.hex }}
            />
            <p className="text-sm md:text-base text-[#6b5c52] text-center leading-tight">
              {color.name}
            </p>
          </div>
        ))}
      </div>

      {/* Decorative branches */}
      <div className="flex items-center gap-4 mt-8">
        <BranchDecoration className="w-20 h-5 text-[#b4b99a] opacity-50" />
        <LeafDecoration className="w-5 h-5 text-[#585d46]" />
        <BranchDecoration className="w-20 h-5 text-[#b4b99a] opacity-50 rotate-180" />
      </div>
    </section>
  )
}

// Section 6: Important requests
export function RequestsSection() {
  const requests = [
    {
      icon: FlowerEnvelopeIcon,
      text: "Если хотите подарить цветы, для нас лучшим подарком будет подписка на цветы.",
    },
    {
      icon: NoShoutIcon,
      text: "Пожалуйста, не кричите «Горько!»",
    },
    {
      icon: NoChildrenIcon,
      text: "Мы решили провести этот день без детей. Спасибо за понимание.",
    },
  ]

  return (
    <section className="snap-section flex flex-col items-center justify-center px-6 py-8">
      <h2 className="font-serif text-4xl md:text-5xl text-[#352b22] mb-8 text-center max-w-lg leading-relaxed">
        Дорогие гости, будем признательны…
      </h2>

      <div className="w-full max-w-lg space-y-5">
        {requests.map((request, index) => (
          <div
            key={index}
            className="bg-white/60 backdrop-blur-sm rounded-xl p-5 border border-[#d3c1ad] shadow-sm"
          >
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-full bg-[#f5ebe3] flex items-center justify-center flex-shrink-0">
                <request.icon className="w-7 h-7 text-[#7696a5]" />
              </div>
              <p className="text-[#543e31] text-lg md:text-xl leading-relaxed flex-1 pt-2">
                {request.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// Section 7: RSVP Form
export function RSVPSection() {
  return (
    <section className="snap-section flex flex-col items-center justify-center px-6 py-8">
      <LeafDecoration className="w-10 h-10 text-[#b4b99a] mb-4 animate-float" />
      
      <h2 className="font-serif text-5xl md:text-6xl text-[#352b22] mb-2 text-center">
        Помогите нам
      </h2>
      <p className="text-[#6b5c52] mb-6 text-center text-xl">
        стать немного лучше
      </p>

      <div className="w-full max-w-md bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-[#d3c1ad] shadow-lg">
        <RSVPForm />
      </div>

      <div className="mt-8 text-center">
        <p className="font-serif text-2xl md:text-3xl text-[#7696a5]">
          Ждём вас с нетерпением!
        </p>
        <div className="flex items-center justify-center gap-3 mt-4">
          <HeartDecoration className="w-5 h-5 text-[#d7c0b8]" />
          <HeartDecoration className="w-6 h-6 text-[#d7c0b8] animate-float" />
          <HeartDecoration className="w-5 h-5 text-[#d7c0b8]" />
        </div>
      </div>
    </section>
  )
}
