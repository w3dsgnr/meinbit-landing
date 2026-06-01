import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Background from "@/components/Background/Background";
import CookieBanner from "@/components/CookieBanner/CookieBanner";
import HomePage from "@/pages/HomePage";
import PrivacyPolicyPage from "@/pages/policies/PrivacyPolicyPage";
import CookiePolicyPage from "@/pages/policies/CookiePolicyPage";
import AmlKycPage from "@/pages/policies/AmlKycPage";
import TermsOfServicePage from "@/pages/policies/TermsOfServicePage";
import ImprintPage from "@/pages/policies/ImprintPage";
import { useStaggerReveal } from "@/hooks/useStaggerReveal";

function AppRoutes() {
  const { pathname } = useLocation();
  // Re-run on every route change so freshly mounted `.si` elements get observed.
  useStaggerReveal(pathname);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="/cookie-policy" element={<CookiePolicyPage />} />
      <Route path="/aml-kyc" element={<AmlKycPage />} />
      <Route path="/terms-of-service" element={<TermsOfServicePage />} />
      <Route path="/imprint" element={<ImprintPage />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Background />
      <AppRoutes />
      <CookieBanner />
    </BrowserRouter>
  );
}
