import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";

import useEmblaCarousel from "embla-carousel-react";

import Image from "next/image";
import VStack from "../Layout/VStack";
import HStack from "../Layout/HStack";

const EmblaCarousel = ({ slides, size = "w-[80w]" }) => {
  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <VStack style='   rounded-t-lg p-2 max-md:w-[80vw] w-[60vh]  h-fit'>
      <div className='embla'>
        <div className='embla__viewport ' ref={viewportRef}>
          <div className='embla__container  max-md:w-[80vw] w-[60vh] max-md:h-[80vw] h-[60vh] '>
            {slides.map((index) => (
              <div className='embla__slide    ' key={index}>
                <HStack style=' relative embla__slide__inner  max-md:w-[75vw] w-[60vh] max-md:h-[75vw] h-[60vh] justify-center '>
                  <Image
                    className='  relative object-cover'
                    fill
                    src={index}
                    alt=''
                    priority
                    quality={75}
                  />
                </HStack>
              </div>
            ))}
          </div>
        </div>
      </div>
      <HStack style='embla__dots  space-x-6 h-10 justify-center items-center'>
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </HStack>
    </VStack>
  );
};

const DotButton = ({ selected, onClick }) => (
  <button
    className={
      selected
        ? "embla_dot bg-white w-2 h-2 rounded-full"
        : "embla_dot bg-gray-400 w-2 h-2 rounded-full"
    }
    type='button'
    onClick={onClick}
  />
);

export default EmblaCarousel;
