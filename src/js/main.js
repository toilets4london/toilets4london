(function () {
  const win = window
  const doc = document.documentElement
  doc.classList.remove('no-js')
  doc.classList.add('js')
  if (document.body.classList.contains('has-animations')) {
    const sr = ScrollReveal()
    win.sr = sr
    sr.reveal('.feature, .pricing-table-inner, .supporters', {
      duration: 600,
      distance: '20px',
      easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
      origin: 'bottom',
      interval: 100
    })
    doc.classList.add('anime-ready')
    anime.timeline({
      targets: '.hero-figure-phone'
    }).add({
      duration: 400,
      easing: 'easeInOutExpo',
      scaleX: 0.75,
      scaleY: 0.75,
      perspective: '600px',
      delay: 200
    }).add({
      duration: 400,
      easing: 'easeInOutExpo',
      scaleX: 1,
      scaleY: 1
    }).add({
      duration: 1000,
      easing: 'spring',
      rotateY: '-20deg',
      rotateX: '8deg',
      rotateZ: '-2deg'
    })
  }
}())
