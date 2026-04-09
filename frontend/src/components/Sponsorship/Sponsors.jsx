import React, { useCallback } from 'react';
import { useQuery, gql } from '@apollo/client';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const Sponsors = () => {
  const { loading, error, data } = useQuery(gql`
    query Query {
      sponsors {
        name
        logoUrl
        website
      }
    }
  `);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center', slidesToScroll: 1 },
    [Autoplay({ delay: 2500, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  if (loading) return <div className="text-center py-10">Loading sponsors...</div>;
  if (error) return null;
  if (!data?.sponsors?.length) return null;

  return (
    <section className="py-10 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8 text-green-700">Our Sponsors</h2>

      <div className="relative max-w-4xl mx-auto px-10">
        {/* Prev button */}
        <button
          onClick={scrollPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 shadow rounded-full w-9 h-9 flex items-center justify-center hover:bg-green-50 transition"
          aria-label="Previous"
        >
          &#8249;
        </button>

        {/* Carousel viewport */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {data.sponsors.map((sponsor, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 px-4 flex flex-col items-center"
              >
                <a
                  href={sponsor.website || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center"
                >
                  <img
                    src={sponsor.logoUrl}
                    alt={sponsor.name + ' logo'}
                    className="h-24 object-contain mb-2 shadow rounded bg-white p-2"
                    style={{ maxWidth: 180 }}
                  />
                  <span className="font-semibold text-sm text-gray-700 text-center mt-1">
                    {sponsor.name}
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Next button */}
        <button
          onClick={scrollNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 shadow rounded-full w-9 h-9 flex items-center justify-center hover:bg-green-50 transition"
          aria-label="Next"
        >
          &#8250;
        </button>
      </div>
    </section>
  );
};

export default Sponsors;
