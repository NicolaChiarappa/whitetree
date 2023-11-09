import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import Image from "next/image";
import VStack from "../Layout/VStack";
import HStack from "../Layout/HStack";
import MyImage from "./MyImage";
import {
  IoChevronBackOutline,
  IoChevronForwardCircleOutline,
  IoChevronForwardOutline,
} from "react-icons/io5";

const EmblaCarousel = ({ slides, size = "w-[80w]" }) => {
  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false }, [
    Autoplay({ delay: 3500 }),
  ]);

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

  const ScrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const ScrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);

  return (
    <>
      <VStack style='rounded-t-lg p-2 max-md:w-[80vw] w-[60vh]  h-fit'>
        <div className='embla '>
          <div className='embla__viewport ' ref={viewportRef}>
            <div className='embla__container  max-md:w-[80vw] w-[60vh] max-md:h-[80vw] h-[60vh] '>
              {slides.map((index) => (
                <div className='embla__slide   flex flex-row ' key={index}>
                  <HStack
                    style={
                      " relative embla__slide__inner  max-md:w-[75vw] w-[60vh] max-md:h-[75vw] h-[60vh] justify-center "
                    }
                  >
                    <MyImage src={index}></MyImage>
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
    </>
  );
};

const DotButton = ({ selected, onClick }) => (
  <button
    className={
      selected
        ? "embla_dot bg-black w-2 h-2 rounded-full"
        : "embla_dot bg-gray-400 w-2 h-2 rounded-full"
    }
    type='button'
    onClick={onClick}
  />
);

export default EmblaCarousel;
