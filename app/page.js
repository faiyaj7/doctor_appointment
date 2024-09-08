import Image from "next/image";
import HeroBanner from "./_components/HeroBanner";
import SearchDoctor from "./_components/SearchDoctor";
import DoctorList from "./_components/DoctorList";

export default function Home() {
  
  return (
    <>
      <HeroBanner />
      <SearchDoctor />
      <DoctorList />
    </>
  );
}
