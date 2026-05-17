import {
  TitleSection,
  GreetingSection,
  VenueSection,
  ScheduleSection,
  DressCodeSection,
  RequestsSection,
  RSVPSection,
  ContactsSection,
} from "@/components/sections"
import { BackgroundPattern } from "@/components/decorations"

export default function WeddingInvitation() {
  return (
    <main className="relative w-full overflow-x-hidden hide-scrollbar">
      <BackgroundPattern />
      
      <TitleSection />
      <GreetingSection />
      <VenueSection />
      <ScheduleSection />
      <DressCodeSection />
      <RequestsSection />
      <RSVPSection />
      <ContactsSection />
    </main>
  )
}
