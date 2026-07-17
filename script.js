const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold:0.15 });
  revealEls.forEach(el=>io.observe(el));

  const today = new Date();
  const enOpts = { weekday:'long', year:'numeric', month:'long', day:'numeric' };
  document.getElementById('panch-date-en').textContent = today.toLocaleDateString('en-IN', enOpts);

  const kurals = [
    { ta:"அகர முதல எழுத்தெல்லாம் ஆதி பகவன் முதற்றே உலகு.", en:"Every letter begins with A; every world begins with the Eternal One. — Kural 1" },
    { ta:"கற்க கசடறக் கற்பவை கற்றபின் நிற்க அதற்குத் தக.", en:"Learn thoroughly what should be learned, then live by what you have learned. — Kural 391" },
    { ta:"உற்றநோய் நீக்கி உறாஅமை முற்காக்கும் பெற்றியார் பேணப் படும்.", en:"Cherish the physician who cures present illness and guards against future ones. — Kural 950" }
  ];
  let kIdx = 0;
  setInterval(()=>{
    kIdx = (kIdx+1) % kurals.length;
    const taEl = document.getElementById('kural-ta');
    const enEl = document.getElementById('kural-en');
    taEl.style.opacity = 0; enEl.style.opacity = 0;
    setTimeout(()=>{
      taEl.textContent = kurals[kIdx].ta;
      enEl.textContent = kurals[kIdx].en;
      taEl.style.transition = 'opacity 0.5s ease';
      enEl.style.transition = 'opacity 0.5s ease';
      taEl.style.opacity = 1; enEl.style.opacity = 1;
    }, 400);
  }, 6000);

  document.querySelector('.menu-btn').addEventListener('click', ()=>{
    const nav = document.querySelector('.navlinks');
    const isOpen = nav.style.display === 'flex';
    nav.style.display = isOpen ? 'none' : 'flex';
    nav.style.flexDirection = 'column';
    nav.style.position = 'absolute';
    nav.style.top = '100%';
    nav.style.left = '0';
    nav.style.right = '0';
    nav.style.background = 'var(--paper)';
    nav.style.padding = '20px 28px';
    nav.style.borderBottom = '1px solid var(--line)';
    nav.style.gap = '18px';
    nav.style.alignItems = 'flex-start';
  });

  document.getElementById("bookingForm").addEventListener("submit", function(e) {

    e.preventDefault();

    const name = document.getElementById("fullName").value;
    const phone = document.getElementById("phone").value;
    const dob = document.getElementById("dob").value;
    const tob = document.getElementById("tob").value;
    const place = document.getElementById("place").value;
    const consultation = document.getElementById("consultation").value;
    const message = document.getElementById("message").value;

    const whatsappNumber = "919442256616"; // Client's WhatsApp number

    const text =
`🌟 *New Consultation Request*

👤 *Name:* ${name}

📞 *Phone:* ${phone}

🎂 *Date of Birth:* ${dob}

⏰ *Time of Birth:* ${tob}

📍 *Place of Birth:* ${place}

🔮 *Consultation:* ${consultation}

📝 *Message:* ${message}`;

    const url =
`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");

    

});