'use client';

import React from 'react';
import UserMenu from '@/app/components/navbar/UserMenu';
import PaymentModal from '@/app/components/modals/PaymentModal';
import usePaymentModal from '@/app/hooks/usePaymentModal';

const Page = () => {
  const paymentModal = usePaymentModal(); // Using the hook to control PaymentModal visibility

  return (
    <div>
      <UserMenu />
      <PaymentModal /> {/* Render PaymentModal */}
    </div>
  );
};

export default Page;
