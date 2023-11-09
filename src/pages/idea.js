import HStack from "../Layout/HStack";
import VStack from "../Layout/VStack";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { IoBulbOutline } from "react-icons/io5";

const Idea = () => {
  const ideaText =
    "Da qui parte l'identità del nostro brand, dal forte romanticismo che ci porta a voler esaltare la quotidianità e le sue profonde emozioni attraverso i disegni unici delle nostre maglie, fatti in bianco e nero, per lasciare a colui che le indossa la possibilità di \"colorarle\" con le emozioni che questa può provocare. Ogni disegno ha una storia, vissuta da tutti ma per tutti in qualche modo diversa, scene già viste ma questa volta lette attraverso i sonetti da noi composti esclusivamente per i nostri prodotti, affinché possano essere una lente per la vostra personalissima interpretazione dell'opera.";
  return (
    <>
      <Navbar></Navbar>
      <VStack style='text-black  items-center  md:mt-20 mt-10 px-10 font-Cocon  mb-10 h-max md:h-screen'>
        <HStack style='items-center text-3xl font-bold '>
          <IoBulbOutline color='white' size={50}></IoBulbOutline>
          <h1>{"L'idea"}</h1>
        </HStack>

        <h2 className='font-bold   text-2xl   text-center  md:text-6xl italic mt-10'>
          {"\"Non vi è colore nell'occhio"} <br></br>
          {'se non vi è emozione nel cuore"'}
        </h2>
        <p className='leading-relaxed mt-10 text-xl md:text-3xl text-justify md:px-40'>
          {ideaText}
        </p>
      </VStack>
      <Footer></Footer>
    </>
  );
};
export default Idea;
