import Search from "@/_components/search/Search";
import { Suspense } from "react";

export default async function Home() {
    // const response = await fetch(`${process.env.BASE_URL}/api/flight-segments`);

    // const searchDetails = await response.json();
    // console.log('searchDetails', searchDetails)

  return (
    <section className="bg-[#F6F3E9] h-screen max-h-screen relative grid place-items-center bg-[url('/hero-bg.jpg')] bg-cover bg-no-repeat bg-center">
    <div className="container items-center pb-12 ">
        <div className="col-span-7">
            <h1 className="font-bold text-3xl lg:text-5xl my-4 text-center lg:w-8/12 mx-auto">
                Book Your Flight with Ease
            </h1>
            <p className="my-2 text-[#5f5e5e] text-center">
                We will provide you the best rate around the world!
            </p>
            {/* <Suspense>
              <Search getSearchDetails={searchDetails} />
            </Suspense> */}
        </div>
    </div>
</section>
  );
}
