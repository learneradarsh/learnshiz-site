/**
 * Utility functions for generating dynamic scarcity, capacity, and onboarding dates
 * ensuring messaging remains evergreen and relevant without manual code updates.
 */

export function getCurrentQuarter() {
  const month = new Date().getMonth(); // 0 - 11
  const q = Math.floor(month / 3) + 1;
  return `Q${q}`;
}

export function getNextStartDate() {
  const today = new Date();
  const dayOfWeek = today.getDay(); // 0 is Sun, 1 is Mon, ... 6 is Sat
  
  // Calculate days until next Monday
  let daysUntilNextMonday = (1 - dayOfWeek + 7) % 7;
  if (daysUntilNextMonday === 0) {
    // If today is Monday, schedule for 2 weeks out (14 days) to give a realistic onboarding buffer
    daysUntilNextMonday = 14;
  } else {
    // If today is Tue-Sun, schedule for the Monday AFTER next (to give 1-2 weeks buffer)
    daysUntilNextMonday += 7;
  }
  
  const nextDate = new Date(today.getTime() + daysUntilNextMonday * 24 * 60 * 60 * 1000);
  
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  return nextDate.toLocaleDateString('en-US', options);
}

export function getScarcityData() {
  const q = getCurrentQuarter();
  const nextDate = getNextStartDate();
  
  return {
    quarter: q,
    nextStartDate: nextDate,
    heroPill: `⚡ ${q} Capacity: Currently onboarding only 3 new dedicated teams · Next start date: ${nextDate}`,
    pricingPill: `⚡ ${q} Onboarding Capacity: Only 3 New Teams This Quarter`,
    builderScarcity: `⚡ 2 onboarding slots left for ${q}`,
    growthScarcity: "🔥 1 squad slot remaining",
    scaleScarcity: "📋 Waitlist / By Inquiry"
  };
}
