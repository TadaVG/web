import { useState } from "react";
import { useUser, SignInButton } from "@clerk/clerk-react";

interface Plan {
  name: string;
  priceMonthly: string;
  priceYearly: string;
  yearlyTotal: string;
  features: string[];
  priceIdMonthly: string;
  priceIdYearly: string;
  bestValue?: boolean;
}

const plans: Plan[] = [
  { 
    name: "Basic", 
    priceMonthly: "$9", 
    priceYearly: "4.5", 
    yearlyTotal: "$54 billed yearly", 
    priceIdMonthly: "price_basic_monthly",
    priceIdYearly: "price_basic_yearly",
    features: [
      "200 minutes of AI generated videos",
      "No Watermark",
      "2 million royalty-free videos",
      "1 user limit",
      "1080p HD Video Quality"
    ]
  },
  { 
    name: "Plus", 
    priceMonthly: "$18", 
    priceYearly: "9", 
    yearlyTotal: "$108 billed yearly", 
    priceIdMonthly: "price_plus_monthly",
    priceIdYearly: "price_plus_yearly",
    features: [
      "600 minutes of AI generated videos",
      "No Watermark",
      "12 million royalty-free videos",
      "1 user limit",
      "1080p HD Video Quality"
    ]
  },
  { 
    name: "Max", 
    priceMonthly: "$36", 
    priceYearly: "18", 
    yearlyTotal: "$216 billed yearly", 
    priceIdMonthly: "price_max_monthly",
    priceIdYearly: "price_max_yearly",
    features: [
      "1800 minutes of AI generated videos",
      "No Watermark",
      "12 million royalty-free videos",
      "3 user limit",
      "4k Ultra HD Video Quality"
    ]
  },
  { 
    name: "Generative", 
    priceMonthly: "$72", 
    priceYearly: "36", 
    yearlyTotal: "$432 billed yearly", 
    priceIdMonthly: "price_generative_monthly",
    priceIdYearly: "price_generative_yearly",
    features: [
      "Unlimited AI generated videos",
      "No Watermark",
      "12 million royalty-free videos",
      "10+ user limit",
      "4k Ultra HD Video Quality"
    ],
    bestValue: true
  }
];

export default function Pricing() {
  const { user, isSignedIn } = useUser(); // Kullanıcı bilgisi
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  // Ödeme işlemi
  const handlePurchase = async (plan: Plan) => {
    if (!isSignedIn || !user?.id) return; // Kullanıcı giriş yapmamışsa işlem yapma

    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: user.id,
          plan: plan.name,
          priceId: billingCycle === "monthly" ? plan.priceIdMonthly : plan.priceIdYearly,
          billingCycle
        }),
      });

      const data = await response.json();

      if (data?.checkoutUrl) {
        window.location.href = data.checkoutUrl; // Paddle ödeme sayfasına yönlendir
      } else {
        alert("Something went wrong with the payment.");
      }
    } catch (error) {
      console.error("Payment error:", error);
      alert("Failed to process payment. Please try again.");
    }
  };

  return (
    <div className="bg-white text-black flex flex-col items-center justify-center px-8 py-24">
      {/* Başlık */}
      <h1 className="text-center text-5xl font-extrabold mb-16">
        Your <span className="text-purple-600">AI-powered</span> assistant for video creation.
      </h1>

      {/* Faturalandırma Seçenekleri */}
      <div className="filter-switch mb-16">
        <input 
          type="radio" 
          id="option1" 
          name="billing" 
          checked={billingCycle === 'monthly'} 
          onChange={() => setBillingCycle('monthly')} 
        />
        <label htmlFor="option1">Monthly</label>

        <input 
          type="radio" 
          id="option2" 
          name="billing" 
          checked={billingCycle === 'yearly'} 
          onChange={() => setBillingCycle('yearly')} 
        />
        <label htmlFor="option2">Yearly 50% off</label>

        <div className="background"></div>
      </div>

      {/* Plan Kartları */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 w-full max-w-[90%] mb-24">
        {plans.map((plan, index) => (
          <div key={index} className={`relative p-10 border rounded-2xl shadow-xl text-center ${plan.bestValue ? 'border-purple-600' : 'border-gray-300'}`}>
            
            {/* En İyi Değer Etiketi */}
            {plan.bestValue && (
              <div className="absolute top-0 right-0 bg-purple-600 text-white text-sm font-bold px-4 py-2 
                  rounded-bl-2xl rounded-tr-xl"> 
                Best Value
              </div>
            )}

            {/* Plan İsmi & Fiyatı */}
            <h3 className="text-2xl font-bold">{plan.name}</h3>
            <p className="text-4xl font-bold mt-4">
              {billingCycle === 'monthly' ? plan.priceMonthly : `$${plan.priceYearly}`} 
              <span className="text-lg text-gray-500"> /month</span>
            </p>

            {/* Yıllık Fiyat Bilgisi */}
            {billingCycle === 'yearly' && (
              <p className="text-sm text-gray-500 mt-1 opacity-75">{plan.yearlyTotal}</p>
            )}

            {/* Özellikler */}
            <ul className="mt-6 text-lg text-black text-left space-y-3">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center space-x-3">
                  <span className="text-black font-bold">✔</span> 
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Satın Alma Butonu */}
            <div className="flex justify-center mt-8">
              {!isSignedIn ? (
                // Kullanıcı giriş yapmamışsa Clerk modalı aç
                <SignInButton mode="modal">
                  <button className="button flex items-center px-6 py-3">
                    <span className="text">{`Get ${plan.name}`}</span>
                  </button>
                </SignInButton>
              ) : (
                // Kullanıcı giriş yapmışsa Paddle ödeme sistemine yönlendir
                <button 
                  className="button flex items-center px-6 py-3"
                  onClick={() => handlePurchase(plan)}
                >
                  <span className="text">{`Get ${plan.name}`}</span>
                </button>
              )}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
