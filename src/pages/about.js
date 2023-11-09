import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import VStack from "../Layout/VStack";

const About = () => {
  return (
    <>
      <Navbar></Navbar>
      <VStack style='w-full font-Cocon px-10 mb-10'>
        <h1 className='text-5xl font-bold mt-10'>Come Lavoriamo</h1>
        <h2 className='text-3xl mt-5 font-bold' id='madeinitaly'>
          100% made in italy
        </h2>
        <p className='text-xl mt-2'>
          WhiteTree è una esperienza tutta italiana. La totalità dei suoi
          prodotti sono interamente realizzati in italia, a partire dai
          materiali, fino alla stampa e al confezionamento.
        </p>
        <h2 className='text-3xl mt-5 font-bold' id='handmade'>
          Handmade
        </h2>
        <p className='text-xl mt-2'>
          WhiteTree è una esperienza di alta qualità e valore, tutte le sue
          grafiche sono interamente disegnate a mano, così come la stampa e le
          decorazioni apposite. Ogni passaggio non eseguito in prima persona
          dalla nostra azienda è comunque affidato a piccole imprese locali che
          lavorano nel rispetto della nostra politica di qualità
        </p>
        <h2 className='text-3xl mt-5 font-bold' id='pagamenti'>
          Pagamenti sicuri
        </h2>
        <p className='text-xl mt-2'>
          WhiteTree è una esperienza sicura. Tutti i paganti che avvengono sul
          nostro sito ed ogni reindirizzamento è completamente affidato ad
          intermediari finanziari sicuri e protetti,come stripe, apple pay e
          google pay nel completo rispetto delle politiche legislative a
          riguardo. Ogni commissione è completamente sostenuta da whitetree
        </p>
        <h2 className='text-3xl mt-5 font-bold' id='spedizione'>
          Spedizione gratuita e pagamento alla consegna
        </h2>
        <p className='text-xl mt-2'>
          WhiteTree è una esperienza accessibile. Ogni spedizione del prodotto è
          gratuita ed offerta dalla nostra azienda. Per questo motivo offriamo
          anche la possibilità di effettuare il pagamento in contanti alla
          consegna, così da offrire la massima scelta al cliente sul metodo di
          pagamento da usare.
        </p>
        <h2 className='text-3xl mt-5 font-bold' id='reso'>
          Reso facile e veloce
        </h2>
        <p className='text-xl mt-2'>
          WhiteTree è una esperienza completa. La nostra azienda offre la
          possibilità di reso sicuro, facile e veloce, secondo le normative
          europee vigenti in tema di resi per ecommerce. Per eseguire un reso
          contattaci tramite WhatsApp per avere indicazioni. pagamento da usare.
        </p>
        <h2 className='text-3xl mt-5 font-bold' id='sconto'>
          10% di sconto sul primo ordine
        </h2>
        <p className='text-xl mt-2'>
          WhiteTree è una esperienza per tutti. Registrati per avere il 10% di
          sconto sul primo ordine.
        </p>
      </VStack>

      <Footer></Footer>
    </>
  );
};

export default About;
