import { getCart } from "@/app/firebase/database";
import { currentUser } from "@/app/firebase/auth";
import axios from "axios";
import { useRouter } from "next/router";

const Success = () => {
  const router = useRouter();
  router.push("https://nice-pear-dalmatian-garb.cyclic.app/success");
  return <></>;
};

export default Success;
