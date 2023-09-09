import React from "react";
import Link from "next/link";

const Newpage = () => {
  return (
    <div className='h-screen'>
      <Link className='h-52 bg-red-500 w-36 mb-96' href='#coll'>
        Ciaoooo
      </Link>
      ;<div id='coll' className='bg-green-600 h-screen w-full'></div>
    </div>
  );
};

export default Newpage;
