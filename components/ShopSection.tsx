import React from 'react';

const ShopSection: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-black bg-center bg-no-repeat h-screen flex items-center justify-end"
      style={{ backgroundImage: "url('/assets/')" }} 
    >
      <div className=" p-8 md:p-16 max-w-lg mr-4 md:mr-16">
        <h2 className="text-4xl font-bold text-white mb-4">Trusted By 200,000+
Businesses</h2>
        <p className="text-white mb-20">
        Thousands of startups trust PaymentShop to power payments ​for them. Here's what some of them have to say.
        </p>
      
        <img src="/assets/1xbet.svg" alt="" className='float-end mb-10 mt-10' />
        <p className='text-white float-right'>PaymentShop’s solution is so seamless that we don't ​think about the process anymore. Customers can ​reliably process payment at any time they want!</p>
        <div>
            <p className='text-white'></p>
         <img src="" alt="" /></div>
      </div>
    </section>
  );
};

export default ShopSection;
