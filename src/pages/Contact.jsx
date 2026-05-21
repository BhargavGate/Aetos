import React, { useState } from 'react';

export default function Contact() {
  // Booking calendar state
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  
  // Onboarding form state
  const [formData, setFormData] = useState({
    businessName: '',
    ownerName: '',
    email: '',
    website: '',
    industry: '',
    revenue: '',
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Calendar dates generation (May/June 2026)
  // Let's create an array of days for a typical monthly slot view (e.g. 1 to 28 available dates)
  const availableDays = [
    { num: 25, name: 'Mon', month: 'May' },
    { num: 26, name: 'Tue', month: 'May' },
    { num: 27, name: 'Wed', month: 'May' },
    { num: 28, name: 'Thu', month: 'May' },
    { num: 29, name: 'Fri', month: 'May' },
    { num: 1, name: 'Mon', month: 'Jun' },
    { num: 2, name: 'Tue', month: 'Jun' },
    { num: 3, name: 'Wed', month: 'Jun' },
    { num: 4, name: 'Thu', month: 'Jun' },
    { num: 5, name: 'Fri', month: 'Jun' }
  ];

  const timeSlots = [
    '10:00 AM EST',
    '11:30 AM EST',
    '1:00 PM EST',
    '2:30 PM EST',
    '4:00 PM EST'
  ];

  const handleDaySelect = (dayObj) => {
    setSelectedDay(dayObj);
    setSelectedTime(null); // Reset time when day changes
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedDay || !selectedTime) {
      alert('Please select a date and time slot from the calendar first.');
      return;
    }
    setFormSubmitted(true);
  };

  return (
    <div style={styles.container}>
      {/* HEADER SECTION */}
      <section style={styles.header}>
        <p style={styles.tag}>ONBOARDING</p>
        <h1 style={styles.title}>Accelerate Your Growth</h1>
        <p style={styles.sub}>
          Claim your custom local search and design audit. Pick an available date and time slot to present your strategy and outline rank dominance steps.
        </p>
      </section>

      {!formSubmitted ? (
        <div style={styles.splitLayout}>
          {/* LEFT COLUMN: CUSTOM CALENDAR SCHEDULE */}
          <div className="glass-panel" style={styles.calendarPanel}>
            <h3 style={styles.panelTitle}>1. Select Call Slot</h3>
            <p style={styles.panelSub}>All sessions are conducted via secure Google Meet.</p>
            
            {/* Days Slider Grid */}
            <div style={styles.calendarScroll}>
              {availableDays.map((day, idx) => {
                const isSelected = selectedDay && selectedDay.num === day.num && selectedDay.month === day.month;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleDaySelect(day)}
                    style={{
                      ...styles.dayCard,
                      borderColor: isSelected ? 'var(--gold-base)' : 'var(--border-color)',
                      backgroundColor: isSelected ? 'rgba(212, 180, 110, 0.05)' : 'transparent',
                    }}
                  >
                    <span style={styles.dayMonth}>{day.month}</span>
                    <span style={{ ...styles.dayNum, color: isSelected ? 'var(--gold-base)' : 'var(--text-primary)' }}>{day.num}</span>
                    <span style={styles.dayName}>{day.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Time Slots Area */}
            {selectedDay ? (
              <div style={styles.timeSection}>
                <h4 style={styles.timeSectionHeader}>Available Times for {selectedDay.month} {selectedDay.num}:</h4>
                <div style={styles.timeGrid}>
                  {timeSlots.map((time, idx) => {
                    const isSelected = selectedTime === time;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        style={{
                          ...styles.timeCard,
                          borderColor: isSelected ? 'var(--gold-base)' : 'var(--border-color)',
                          backgroundColor: isSelected ? 'rgba(212, 180, 110, 0.05)' : 'transparent',
                          color: isSelected ? 'var(--gold-base)' : 'var(--text-secondary)'
                        }}
                      >
                        {time}
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div style={styles.calendarPlaceholder}>
                <p>Please select a date card above to reveal available time slots.</p>
              </div>
            )}

            {selectedDay && selectedTime && (
              <div style={styles.selectionSummary} className="glass-panel">
                <span style={styles.selectionDot}></span>
                <p style={styles.selectionText}>
                  Selected: <strong>{selectedDay.name}, {selectedDay.month} {selectedDay.num}</strong> at <strong>{selectedTime}</strong>
                </p>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN: ONBOARDING FORM */}
          <div className="glass-panel" style={styles.formPanel}>
            <h3 style={styles.panelTitle}>2. Business Parameters</h3>
            <p style={styles.panelSub}>We analyze your digital footprint and current search ranking positions prior to the call.</p>

            <form onSubmit={handleSubmit} style={styles.form}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Company or Brand Name</label>
                <input 
                  type="text" 
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleFormChange}
                  required 
                  placeholder="e.g. Aether Clinique" 
                  style={styles.input}
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Your Name &amp; Title</label>
                <input 
                  type="text" 
                  name="ownerName"
                  value={formData.ownerName}
                  onChange={handleFormChange}
                  required 
                  placeholder="e.g. Dr. Olivia Westwood" 
                  style={styles.input}
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Enquiry Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required 
                  placeholder="name@company.com" 
                  style={styles.input}
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Existing Website URL (if any)</label>
                <input 
                  type="url" 
                  name="website"
                  value={formData.website}
                  onChange={handleFormChange}
                  placeholder="https://yourbrand.com" 
                  style={styles.input}
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Industry Focus</label>
                <select 
                  name="industry"
                  value={formData.industry}
                  onChange={handleFormChange}
                  required 
                  style={styles.select}
                >
                  <option value="" disabled>Select your vertical...</option>
                  <option value="clinical">Clinics &amp; MedSpas</option>
                  <option value="properties">Real Estate</option>
                  <option value="dining">Hospitality &amp; Dining</option>
                  <option value="salons">Salons &amp; Spas</option>
                  <option value="startups">Startups &amp; Tech</option>
                  <option value="services">Professional Services</option>
                  <option value="other">Other Local Business</option>
                </select>
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Estimated Monthly Revenue</label>
                <select 
                  name="revenue"
                  value={formData.revenue}
                  onChange={handleFormChange}
                  required 
                  style={styles.select}
                >
                  <option value="" disabled>Select revenue tier...</option>
                  <option value="under25">Under $25k / month</option>
                  <option value="25to50">$25k to $50k / month</option>
                  <option value="50to100">$50k to $100k / month</option>
                  <option value="above100">Above $100k / month</option>
                </select>
              </div>

              <button 
                type="submit" 
                className="btn-gold" 
                style={styles.submitBtn}
              >
                Confirm Growth Strategy Session
              </button>
            </form>
          </div>
        </div>
      ) : (
        /* SUBMISSION SUCCESS STATE */
        <div style={styles.successWrapper} className="glass-panel">
          <div style={styles.successHeader}>
            <div style={styles.checkCircle}>✓</div>
            <h2 style={styles.successTitle}>Your Strategy Session is Locked</h2>
            <p style={styles.successSub}>
              We are analyzing your digital footprint. A Google Meet link and local search overview will arrive at <strong>{formData.email}</strong> shortly.
            </p>
          </div>

          <div style={styles.successDivider}></div>

          <div style={styles.stepsGrid}>
            <h3 style={styles.stepsHeading}>Onboarding Journey Roadmap</h3>
            <div style={styles.onboardingStep}>
              <span style={styles.stepIndicator}>1</span>
              <div>
                <h4 style={styles.stepTitle}>Calendar Booking Registered</h4>
                <p style={styles.stepDesc}>Confirmed for {selectedDay.month} {selectedDay.num} at {selectedTime}. Check your calendar inbox for coordinates.</p>
              </div>
            </div>
            
            <div style={styles.onboardingStep}>
              <span style={styles.stepIndicator}>2</span>
              <div>
                <h4 style={styles.stepTitle}>Local citation &amp; GBP scan initiated</h4>
                <p style={styles.stepDesc}>Our systems are auditing your competitor positions and maps ranking points.</p>
              </div>
            </div>

            <div style={styles.onboardingStep}>
              <span style={styles.stepIndicator}>3</span>
              <div>
                <h4 style={styles.stepTitle}>Strategy Presentation Delivery</h4>
                <p style={styles.stepDesc}>We present the complete audit during our call, delivering your roadmap to Rank #1.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER INFO CONTACT */}
      <section style={styles.infoSection}>
        <div style={styles.infoCard} className="glass-card">
          <h4>Response Guarantee</h4>
          <p>We review every inquiry within 4 hours during NYC business hours (9:00 AM - 6:00 PM EST).</p>
        </div>
        <div style={styles.infoCard} className="glass-card">
          <h4>Direct Support</h4>
          <p>Prefer immediate chat? Reach out to our growth directors directly via enquiries@aurarank.com.</p>
        </div>
      </section>
    </div>
  );
}

const styles = {
  container: {
    padding: '0 3rem 6rem 3rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  header: {
    padding: '5rem 0',
    textAlign: 'center',
  },
  tag: {
    fontFamily: 'var(--font-sans)',
    fontSize: '0.75rem',
    fontWeight: '700',
    letterSpacing: '0.25em',
    color: 'var(--gold-base)',
    marginBottom: '1rem',
  },
  title: {
    fontSize: '4.25rem',
    lineHeight: '1.15',
    marginBottom: '1.5rem',
  },
  sub: {
    fontSize: '1.2rem',
    color: 'var(--text-muted)',
    maxWidth: '650px',
    margin: '0 auto',
  },
  splitLayout: {
    display: 'grid',
    gridTemplateColumns: '1.1fr 1fr',
    gap: '3rem',
    marginTop: '1rem',
  },
  calendarPanel: {
    padding: '3rem 2.5rem',
    borderRadius: 'var(--border-radius-lg)',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.2rem',
  },
  panelTitle: {
    fontFamily: 'var(--font-serif)',
    fontSize: '2rem',
    color: 'var(--text-primary)',
  },
  panelSub: {
    fontSize: '0.92rem',
    color: 'var(--text-muted)',
  },
  calendarScroll: {
    display: 'flex',
    gap: '0.85rem',
    overflowX: 'auto',
    paddingBottom: '1rem',
    scrollSnapType: 'x mandatory',
  },
  dayCard: {
    flex: '0 0 74px',
    border: '1px solid var(--border-color)',
    borderRadius: 'var(--border-radius-md)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0.85rem 0',
    cursor: 'pointer',
    background: 'transparent',
    scrollSnapAlign: 'start',
    transition: 'var(--transition-smooth)',
  },
  dayMonth: {
    fontSize: '0.72rem',
    color: 'var(--text-muted)',
    textTransform: 'uppercase',
  },
  dayNum: {
    fontFamily: 'var(--font-serif)',
    fontSize: '1.65rem',
    fontWeight: '600',
    margin: '0.15rem 0',
  },
  dayName: {
    fontSize: '0.75rem',
    color: 'var(--text-muted)',
  },
  timeSection: {
    marginTop: '1.5rem',
    animation: 'fade-in 0.4s ease-out',
  },
  timeSectionHeader: {
    fontSize: '0.95rem',
    color: 'var(--text-secondary)',
    marginBottom: '1rem',
    fontWeight: '600',
  },
  timeGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '0.75rem',
  },
  timeCard: {
    border: '1px solid var(--border-color)',
    borderRadius: 'var(--border-radius-sm)',
    padding: '0.8rem',
    textAlign: 'center',
    cursor: 'pointer',
    background: 'transparent',
    fontFamily: 'var(--font-sans)',
    fontSize: '0.9rem',
    transition: 'var(--transition-smooth)',
  },
  calendarPlaceholder: {
    border: '1px dashed var(--border-color)',
    borderRadius: 'var(--border-radius-md)',
    padding: '3rem 2rem',
    textAlign: 'center',
    color: 'var(--text-muted)',
    fontSize: '0.9rem',
    marginTop: '1.5rem',
  },
  selectionSummary: {
    marginTop: '1.5rem',
    padding: '1.2rem',
    borderRadius: 'var(--border-radius-md)',
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    borderLeft: '3px solid var(--gold-base)',
  },
  selectionDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: 'var(--gold-base)',
    boxShadow: '0 0 8px var(--gold-base)',
  },
  selectionText: {
    fontSize: '0.92rem',
    color: 'var(--text-secondary)',
  },
  formPanel: {
    padding: '3rem 2.5rem',
    borderRadius: 'var(--border-radius-lg)',
  },
  form: {
    marginTop: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  label: {
    fontSize: '0.88rem',
    color: 'var(--text-secondary)',
    fontWeight: '600',
  },
  input: {
    background: 'rgba(255,255,255,0.02)',
    border: '1px solid var(--border-color)',
    borderRadius: 'var(--border-radius-sm)',
    padding: '0.85rem 1rem',
    color: 'var(--text-primary)',
    fontSize: '0.95rem',
    fontFamily: 'var(--font-sans)',
    outline: 'none',
    transition: 'var(--transition-smooth)',
  },
  select: {
    background: 'rgba(255,255,255,0.02)',
    border: '1px solid var(--border-color)',
    borderRadius: 'var(--border-radius-sm)',
    padding: '0.85rem 1rem',
    color: 'var(--text-primary)',
    fontSize: '0.95rem',
    fontFamily: 'var(--font-sans)',
    outline: 'none',
    cursor: 'pointer',
    transition: 'var(--transition-smooth)',
  },
  submitBtn: {
    marginTop: '1rem',
    width: '100%',
  },
  successWrapper: {
    maxWidth: '850px',
    margin: '1rem auto 4rem auto',
    padding: '4.5rem 3.5rem',
    borderRadius: 'var(--border-radius-lg)',
  },
  successHeader: {
    textAlign: 'center',
    maxWidth: '650px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1.2rem',
  },
  checkCircle: {
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    backgroundColor: 'rgba(212, 180, 110, 0.1)',
    border: '2px solid var(--gold-base)',
    color: 'var(--gold-base)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.85rem',
    fontWeight: '700',
  },
  successTitle: {
    fontSize: '2.85rem',
  },
  successSub: {
    fontSize: '1.1rem',
    color: 'var(--text-muted)',
    lineHeight: '1.65',
  },
  successDivider: {
    height: '1px',
    width: '100%',
    backgroundColor: 'var(--border-color)',
    margin: '3rem 0',
  },
  stepsGrid: {
    maxWidth: '550px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  stepsHeading: {
    fontSize: '1.5rem',
    color: 'var(--text-primary)',
    marginBottom: '0.5rem',
  },
  onboardingStep: {
    display: 'flex',
    gap: '1.5rem',
    alignItems: 'flex-start',
  },
  stepIndicator: {
    width: '28px',
    height: '28px',
    borderRadius: '50%',
    border: '1px solid var(--gold-base)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.85rem',
    fontWeight: '600',
    color: 'var(--gold-base)',
  },
  stepTitle: {
    fontSize: '1.15rem',
    fontWeight: '600',
    color: 'var(--text-secondary)',
    marginBottom: '0.25rem',
  },
  stepDesc: {
    fontSize: '0.92rem',
    color: 'var(--text-muted)',
  },
  infoSection: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '2rem',
    maxWidth: '950px',
    margin: '4rem auto 0 auto',
  },
  infoCard: {
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
};
