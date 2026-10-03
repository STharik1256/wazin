(function () {
  var els = Array.prototype.slice.call(document.querySelectorAll('[data-i18n]'));
  var btn = document.getElementById('langBtn');
  var ar = {};
  els.forEach(function (el) { ar[el.getAttribute('data-i18n')] = el.innerHTML; });

  var en = {
    nav_about: 'About Us',
    nav_services: 'Services',
    nav_values: 'Values',
    nav_contact: 'Contact Us',

    crumb: '<span>Balancing</span><span>Opportunities</span>',
    h1: 'We build property that balances <em>growth</em> and stability',
    lead: 'Wazin Real Estate — a Kuwaiti management team with over 30 years of experience in real estate development and investment inside Kuwait.',
    btn1: 'Talk to us',
    btn2: 'Get to know Wazin',

    about_label: 'About Us',
    about_h2: 'A leading company in the Kuwaiti real estate market',
    about_p1: 'Wazin Real Estate is a leading company in the real estate market, with a Kuwaiti management team that has more than 30 years of experience in real estate development inside Kuwait, working to deliver the best real estate and investment opportunities.',
    about_p2: 'Wazin is one of the real estate companies that rely on strength, trust and commitment in the Kuwaiti real estate market.',
    stat1: 'Years of experience',
    stat2_b: 'Kuwait',
    stat2: 'Our core market',
    stat3: 'Commitment & transparency',

    vision_label: 'Our Direction',
    vision_h2: 'A clear vision, measurable goals',
    v1_h: 'Our Vision',
    v1_p: 'To become the most trusted and innovative company by developing income-generating real estate projects with strong returns and steady cash flows.',
    v2_h: 'Our Goals',
    v2_p: 'To seize the best real estate opportunities inside Kuwait in development and real estate investment, and to provide innovative and sustainable real estate solutions.',
    v3_h: 'Our Future',
    v3_p: 'To be at the forefront of real estate companies that rely on digital solutions and artificial intelligence.',

    sv_h2: 'What we offer our clients and partners',
    sv_sub: 'From studying the opportunity to receiving and managing the project, we bring our expertise across the entire life cycle of the asset.',
    s1_h: 'Real Estate Development',
    s1_p: 'Developing well-studied residential and commercial projects, from land selection and design to execution and handover.',
    s2_h: 'Real Estate Investment',
    s2_p: 'Building income-generating property portfolios with studied returns and steady long-term cash flows.',
    s3_h: 'Property Management',
    s3_p: 'Operational management of properties: leasing, collection, maintenance, and periodic performance reports for owners.',
    s4_h: 'Real Estate Consulting',
    s4_p: 'Feasibility studies, opportunity assessment, and market analysis before making a purchase or development decision.',
    s5_h: 'Marketing & Sales',
    s5_p: 'Marketing and selling units through digital channels and a wide network of relationships within the Kuwaiti market.',
    s6_h: 'Digital Solutions',
    s6_p: 'Using digital transformation tools in market analysis, asset management and decision-making.',

    val_label: 'Our Values',
    val_h2: 'Five rules we work by every day',
    val1_h: 'Credibility',
    val1_p: 'We build trust through honesty, transparency and keeping our promises.',
    val2_h: 'Balance',
    val2_p: 'Success comes from balancing financial growth with life priorities and long-term security.',
    val3_h: 'Excellence',
    val3_p: 'We hold ourselves to the highest standards in service, execution and client experience.',
    val4_h: 'Growth Mindset',
    val4_p: 'We encourage progress, ambition and strategic investment for lasting success.',
    val5_h: 'Commitment',
    val5_p: 'We take responsibility toward our clients and partners at every stage.',

    ct_label: 'Contact Us',
    ct_h2: 'Your next opportunity starts with a conversation',
    ct_sub: 'Whether you are looking for an investment, a development partner, or an opinion on an opportunity on offer — contact us directly.',
    ct_phone: 'Phone',
    ct_mail: 'Email',
    ct_loc: 'Location',
    ct_loc_v: 'State of Kuwait',

    copy: '© 2026 Wazin Real Estate Company. All rights reserved.'
  };

  var titles = { ar: 'وازن العقارية', en: 'Wazin Real Estate' };

  function setLang(lang) {
    var dict = lang === 'en' ? en : ar;
    els.forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      if (dict[k] !== undefined) el.innerHTML = dict[k];
    });
    var html = document.documentElement;
    html.lang = lang;
    html.dir = lang === 'en' ? 'ltr' : 'rtl';
    btn.textContent = lang === 'en' ? 'AR' : 'EN';
    document.title = titles[lang];
    try { localStorage.setItem('wazin-lang', lang); } catch (e) {}
  }

  btn.addEventListener('click', function (e) {
    e.preventDefault();
    setLang(document.documentElement.lang === 'en' ? 'ar' : 'en');
  });

  var saved = null;
  try { saved = localStorage.getItem('wazin-lang'); } catch (e) {}
  if (saved === 'en') setLang('en');
})();