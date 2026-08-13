// Countdown to Black Friday 2026 doors-open time
  const target = new Date("2026-11-27T06:00:00");
  function tick(){
    const now = new Date();
    let diff = Math.max(0, target - now);
    const d = Math.floor(diff / 86400000); diff -= d*86400000;
    const h = Math.floor(diff / 3600000); diff -= h*3600000;
    const m = Math.floor(diff / 60000); diff -= m*60000;
    const s = Math.floor(diff / 1000);
    const set = (id,val) => document.getElementById(id).textContent = String(val).padStart(2,'0');
    set('cd-days', d); set('cd-hours', h); set('cd-mins', m); set('cd-secs', s);
  }
  tick();
  setInterval(tick, 1000);
