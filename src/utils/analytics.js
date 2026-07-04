/**
 * Learnshiz Engineering - Analytics & Funnel Tracking Helper
 * Centralizes event dispatching for Google Analytics (GA4 - G-2YTB1NETG4),
 * Google Ads retargeting audiences, and LinkedIn Insight Tag dataLayer pushes.
 */

export const GA_TRACKING_ID = "G-2YTB1NETG4";

/**
 * Safely push an event to window.gtag and window.dataLayer
 */
export function trackEvent(eventName, eventParams = {}) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...eventParams,
    timestamp: new Date().toISOString(),
  });

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, eventParams);
  } else {
    // Fallback if gtag isn't ready yet
    window.dataLayer.push(arguments);
  }
}

/**
 * Track CTA button clicks across the site
 * Useful for retargeting visitors who clicked CTAs but didn't complete conversion
 * @param {string} ctaName - Name of the CTA (e.g., 'Book Discovery Call', 'Get Free Assessment')
 * @param {string} location - Page location or section (e.g., 'Hero', 'Header', 'Floating CTA', 'Pricing')
 */
export function trackCTAClick(ctaName, location) {
  trackEvent("select_content", {
    content_type: "cta_button",
    item_id: ctaName,
    location: location,
    engagement_time_msec: 100,
  });

  // Custom event for retargeting audience building
  trackEvent("cta_click", {
    cta_name: ctaName,
    section: location,
  });
}

/**
 * Track lead capture form submissions (Assessment, Newsletter)
 * @param {string} formType - Type of form (e.g., 'technical_assessment', 'newsletter')
 * @param {object} metadata - Additional non-PII metadata (e.g., team size, challenge)
 */
export function trackLeadCapture(formType, metadata = {}) {
  trackEvent("generate_lead", {
    currency: "USD",
    value: formType === "technical_assessment" ? 500 : 50, // Assigned lead valuation for funnel modeling
    lead_type: formType,
    ...metadata,
  });

  trackEvent("form_submission_success", {
    form_id: formType,
    ...metadata,
  });
}

/**
 * Track high-intent funnel step views
 * @param {string} stepName - Name of the funnel step (e.g., 'view_pricing', 'open_assessment_modal')
 */
export function trackFunnelStep(stepName) {
  trackEvent("funnel_step", {
    step_name: stepName,
  });
}
